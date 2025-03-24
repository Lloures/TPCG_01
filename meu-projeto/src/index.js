"use strict";
window.onload = () => {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const botao = document.getElementById('botao');
    const botaoSelecionar = document.getElementById('botao_seleciona');
    const botaoCartesiano = document.getElementById('botao_cartesiano');
    const botaoCoordenadas = document.getElementById('botao_cordenadas');
    const transformacao = document.getElementById('transformacao');
    const canvas = document.querySelector('canvas');
    const rasterizacaoContainer = document.getElementById('rasterizacao');
    const botaoRecorte = document.getElementById('botao_recorte');
    const recorteContainer = document.getElementById('recorte_container');
    const context = canvas.getContext('2d');
    let drawing = false;
    let startX = 0;
    let startY = 0;
    let currentShape = '';
    const shapes = [];
    let selectedShapes = [];
    let rasterizacaoShapes = [];
    let isSelecting = false;
    let selectionRect = null;
    let recorteRect = null;
    let recorteAtivado = false;
    let mostrarPlano = false;
    let mostrarCoordenadas = false;
    let dragging = false;
    let dragOffsetX = 0;
    let dragOffsetY = 0;
    let currentDraggedShape = null;
    let rasterizacaoAtivada = false;
    let pontosRasterizacao = [];
    let desenhandoRecorte = false;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    context.lineWidth = 5;
    //////
    function highlightSelectedButton(selectedButton) {
        const buttons = document.querySelectorAll('.formas-button');
        buttons.forEach(button => {
            button.style.backgroundColor = '';
        });
        selectedButton.style.backgroundColor = 'lightgray';
    }
    botaoRecorte === null || botaoRecorte === void 0 ? void 0 : botaoRecorte.addEventListener('click', () => {
        recorteAtivado = !recorteAtivado;
        if (recorteAtivado) {
            isSelecting = false;
            botaoRecorte.style.backgroundColor = 'lightgray';
        }
        else {
            botaoRecorte.style.backgroundColor = '';
            recorteRect = null;
            desenhandoRecorte = false;
        }
    });
    botaoSelecionar.addEventListener('click', () => {
        isSelecting = !isSelecting;
        botaoSelecionar.style.backgroundColor = isSelecting ? 'lightgray' : '';
    });
    botaoCartesiano.addEventListener('click', () => {
        mostrarPlano = !mostrarPlano;
        botaoCartesiano.style.backgroundColor = mostrarPlano ? 'lightgray' : '';
        drawStoredShapes();
    });
    botaoCoordenadas.addEventListener('click', () => {
        mostrarCoordenadas = !mostrarCoordenadas;
        botaoCoordenadas.style.backgroundColor = mostrarCoordenadas ? 'lightgray' : '';
        drawStoredShapes();
    });
    ////
    function drawStoredShapes(clearCanvas = true) {
        if (clearCanvas) {
            context === null || context === void 0 ? void 0 : context.clearRect(0, 0, canvas.width, canvas.height);
        }
        if (mostrarPlano) {
            desenharPlanoCartesiano();
        }
        shapes.forEach((shape, index) => {
            context.strokeStyle = selectedShapes.includes(index) ? 'cyan' : 'black';
            if (shape.type === 'Linha') {
                context === null || context === void 0 ? void 0 : context.beginPath();
                context === null || context === void 0 ? void 0 : context.moveTo(shape.startX, shape.startY);
                context === null || context === void 0 ? void 0 : context.lineTo(shape.endX, shape.endY);
                context === null || context === void 0 ? void 0 : context.stroke();
            }
            else if (shape.type === 'Quadrado') {
                const width = shape.endX - shape.startX;
                const height = shape.endY - shape.startY;
                context === null || context === void 0 ? void 0 : context.beginPath();
                context === null || context === void 0 ? void 0 : context.rect(shape.startX, shape.startY, width, height);
                context === null || context === void 0 ? void 0 : context.stroke();
            }
            else if (shape.type === 'Círculo') {
                context === null || context === void 0 ? void 0 : context.beginPath();
                context === null || context === void 0 ? void 0 : context.arc(shape.startX, shape.startY, shape.radius, 0, Math.PI * 2);
                context === null || context === void 0 ? void 0 : context.stroke();
            }
            if (mostrarCoordenadas || selectedShapes.includes(index)) {
                drawVertices(shape);
            }
        });
        if (selectionRect) {
            context.fillStyle = 'rgba(0, 0, 255, 0.2)';
            context.strokeStyle = 'blue';
            context.setLineDash([]);
            context.beginPath();
            context.rect(selectionRect.x, selectionRect.y, selectionRect.width, selectionRect.height);
            context.fill();
            context.stroke();
        }
        if (recorteRect && recorteAtivado) {
            context.strokeStyle = 'red';
            context.lineWidth = 4;
            context.setLineDash([5, 3]);
            context === null || context === void 0 ? void 0 : context.beginPath();
            context === null || context === void 0 ? void 0 : context.rect(Math.min(recorteRect.x1, recorteRect.x2), Math.min(recorteRect.y1, recorteRect.y2), Math.abs(recorteRect.x2 - recorteRect.x1), Math.abs(recorteRect.y2 - recorteRect.y1));
            context === null || context === void 0 ? void 0 : context.stroke();
            context.setLineDash([]);
        }
    }
    //----------------------------Não obrigatorios---------------------------------//
    function drawVertices(shape) {
        context.fillStyle = 'purple';
        let points = [];
        if (shape.type === 'Linha') {
            points = [
                { x: shape.startX, y: shape.startY },
                { x: shape.endX, y: shape.endY }
            ];
        }
        else if (shape.type === 'Quadrado') {
            points = [
                { x: shape.startX, y: shape.startY },
                { x: shape.endX, y: shape.startY },
                { x: shape.startX, y: shape.endY },
                { x: shape.endX, y: shape.endY }
            ];
        }
        else if (shape.type === 'Círculo') {
            points = [
                { x: shape.startX + shape.radius, y: shape.startY },
                { x: shape.startX - shape.radius, y: shape.startY },
                { x: shape.startX, y: shape.startY + shape.radius },
                { x: shape.startX, y: shape.startY - shape.radius }
            ];
        }
        points.forEach(point => {
            context === null || context === void 0 ? void 0 : context.beginPath();
            context === null || context === void 0 ? void 0 : context.arc(point.x, point.y, 5, 0, Math.PI * 2);
            context === null || context === void 0 ? void 0 : context.fill();
            if (mostrarCoordenadas) {
                context.fillStyle = 'black';
                context.font = '12px Arial';
                context.fillText(`(${Math.round(point.x)}, ${Math.round(point.y)})`, point.x + 8, point.y - 8);
                context.fillStyle = 'purple';
            }
        });
    }
    function desenharPlanoCartesiano() {
        const espacamento = 5;
        context.strokeStyle = '#e0e0e0';
        context.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += espacamento) {
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, canvas.height);
            context.stroke();
        }
        for (let y = 0; y < canvas.height; y += espacamento) {
            context.beginPath();
            context.moveTo(0, y);
            context.lineTo(canvas.width, y);
            context.stroke();
        }
        context.strokeStyle = '#888';
        context.lineWidth = 2;
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(0, canvas.height);
        context.stroke();
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(canvas.width, 0);
        context.stroke();
    }
    //----------------------------fim---------------------------------//
    //----------------------------CORTE---------------------------------//
    function cohenSutherland() {
        if (!recorteRect) {
            console.log("Retângulo de recorte não definido.");
            return;
        }
        console.log("Aplicando Cohen-Sutherland...");
        const xmin = Math.min(recorteRect.x1, recorteRect.x2);
        const xmax = Math.max(recorteRect.x1, recorteRect.x2);
        const ymin = Math.min(recorteRect.y1, recorteRect.y2);
        const ymax = Math.max(recorteRect.y1, recorteRect.y2);
        // Função para recortar uma linha usando Cohen-Sutherland
        const recortarLinha = (x1, y1, x2, y2) => {
            const INSIDE = 0;
            const LEFT = 1;
            const RIGHT = 2;
            const BOTTOM = 4;
            const TOP = 8;
            const computeCode = (x, y) => {
                let code = INSIDE;
                if (x < xmin)
                    code |= LEFT;
                else if (x > xmax)
                    code |= RIGHT;
                if (y < ymin)
                    code |= BOTTOM;
                else if (y > ymax)
                    code |= TOP;
                return code;
            };
            let code1 = computeCode(x1, y1);
            let code2 = computeCode(x2, y2);
            let accept = false;
            while (true) {
                if ((code1 === 0) && (code2 === 0)) {
                    accept = true;
                    break;
                }
                else if ((code1 & code2) !== 0) {
                    break;
                }
                else {
                    let x = 0, y = 0;
                    const codeOut = code1 !== 0 ? code1 : code2;
                    if (codeOut & TOP) {
                        x = x1 + (x2 - x1) * (ymax - y1) / (y2 - y1);
                        y = ymax;
                    }
                    else if (codeOut & BOTTOM) {
                        x = x1 + (x2 - x1) * (ymin - y1) / (y2 - y1);
                        y = ymin;
                    }
                    else if (codeOut & RIGHT) {
                        y = y1 + (y2 - y1) * (xmax - x1) / (x2 - x1);
                        x = xmax;
                    }
                    else if (codeOut & LEFT) {
                        y = y1 + (y2 - y1) * (xmin - x1) / (x2 - x1);
                        x = xmin;
                    }
                    if (codeOut === code1) {
                        x1 = x;
                        y1 = y;
                        code1 = computeCode(x1, y1);
                    }
                    else {
                        x2 = x;
                        y2 = y;
                        code2 = computeCode(x2, y2);
                    }
                }
            }
            return { x1, y1, x2, y2, accept };
        };
        // Itera sobre todas as formas
        for (let i = shapes.length - 1; i >= 0; i--) {
            const shape = shapes[i];
            if (shape.type === 'Linha') {
                // Recorte de linhas
                const { x1, y1, x2, y2, accept } = recortarLinha(shape.startX, shape.startY, shape.endX, shape.endY);
                if (accept) {
                    shape.startX = x1;
                    shape.startY = y1;
                    shape.endX = x2;
                    shape.endY = y2;
                }
                else {
                    console.log(`Linha removida: (${x1}, ${y1}) -> (${x2}, ${y2})`);
                    shapes.splice(i, 1); // Remove a linha se estiver completamente fora
                }
            }
            else if (shape.type === 'Quadrado') {
                // Recorte de quadrados (trata cada lado como uma linha independente)
                const lados = [
                    { x1: shape.startX, y1: shape.startY, x2: shape.endX, y2: shape.startY }, // Topo
                    { x1: shape.endX, y1: shape.startY, x2: shape.endX, y2: shape.endY }, // Direita
                    { x1: shape.endX, y1: shape.endY, x2: shape.startX, y2: shape.endY }, // Base
                    { x1: shape.startX, y1: shape.endY, x2: shape.startX, y2: shape.startY } // Esquerda
                ];
                const novosLados = [];
                lados.forEach(lado => {
                    const { x1, y1, x2, y2, accept } = recortarLinha(lado.x1, lado.y1, lado.x2, lado.y2);
                    if (accept) {
                        novosLados.push({ x1, y1, x2, y2 });
                    }
                });
                if (novosLados.length > 0) {
                    // Substitui o quadrado pelas linhas recortadas
                    shapes.splice(i, 1); // Remove o quadrado original
                    novosLados.forEach(lado => {
                        shapes.push({ type: 'Linha', startX: lado.x1, startY: lado.y1, endX: lado.x2, endY: lado.y2, selected: false });
                    });
                }
                else {
                    console.log(`Quadrado removido: (${shape.startX}, ${shape.startY}) -> (${shape.endX}, ${shape.endY})`);
                    shapes.splice(i, 1); // Remove o quadrado se todas as linhas estiverem fora
                }
            }
            else if (shape.type === 'Círculo') {
                // Recorte de círculos (verifica se o círculo está completamente fora)
                const centroX = shape.startX;
                const centroY = shape.startY;
                const raio = shape.radius;
                if (centroX + raio < xmin ||
                    centroX - raio > xmax ||
                    centroY + raio < ymin ||
                    centroY - raio > ymax) {
                    console.log(`Círculo removido: centro (${centroX}, ${centroY}), raio ${raio}`);
                    shapes.splice(i, 1); // Remove o círculo se estiver completamente fora
                }
                else {
                    // Redesenha o círculo dentro do retângulo de recorte
                    context === null || context === void 0 ? void 0 : context.beginPath();
                    context === null || context === void 0 ? void 0 : context.arc(centroX, centroY, raio, 0, Math.PI * 2);
                    context === null || context === void 0 ? void 0 : context.stroke();
                }
            }
        }
        drawStoredShapes();
    }
    function liangBarsky() {
        if (!recorteRect) {
            console.log("Retângulo de recorte não definido.");
            return;
        }
        console.log("Aplicando Liang-Barsky...");
        const xmin = Math.min(recorteRect.x1, recorteRect.x2);
        const xmax = Math.max(recorteRect.x1, recorteRect.x2);
        const ymin = Math.min(recorteRect.y1, recorteRect.y2);
        const ymax = Math.max(recorteRect.y1, recorteRect.y2);
        // Função para recortar uma linha usando Liang-Barsky
        const recortarLinha = (x1, y1, x2, y2) => {
            let u1 = 0, u2 = 1;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const clipTest = (p, q) => {
                if (p === 0) {
                    if (q < 0)
                        return false; // Linha paralela e fora
                }
                else {
                    const r = q / p;
                    if (p < 0) {
                        if (r > u2)
                            return false; // Fora da janela
                        else if (r > u1)
                            u1 = r; // Atualiza u1
                    }
                    else if (p > 0) {
                        if (r < u1)
                            return false; // Fora da janela
                        else if (r < u2)
                            u2 = r; // Atualiza u2
                    }
                }
                return true;
            };
            if (clipTest(-dx, x1 - xmin) && // Testa limite esquerdo
                clipTest(dx, xmax - x1) && // Testa limite direito
                clipTest(-dy, y1 - ymin) && // Testa limite inferior
                clipTest(dy, ymax - y1) // Testa limite superior
            ) {
                if (u2 < 1) {
                    x2 = x1 + u2 * dx;
                    y2 = y1 + u2 * dy;
                }
                if (u1 > 0) {
                    x1 = x1 + u1 * dx;
                    y1 = y1 + u1 * dy;
                }
                return { x1, y1, x2, y2, accept: true };
            }
            else {
                return { x1, y1, x2, y2, accept: false };
            }
        };
        // Itera sobre todas as formas
        for (let i = shapes.length - 1; i >= 0; i--) {
            const shape = shapes[i];
            if (shape.type === 'Linha') {
                // Recorte de linhas
                const { x1, y1, x2, y2, accept } = recortarLinha(shape.startX, shape.startY, shape.endX, shape.endY);
                if (accept) {
                    shape.startX = x1;
                    shape.startY = y1;
                    shape.endX = x2;
                    shape.endY = y2;
                }
                else {
                    console.log(`Linha removida: (${x1}, ${y1}) -> (${x2}, ${y2})`);
                    shapes.splice(i, 1); // Remove a linha se estiver completamente fora
                }
            }
            else if (shape.type === 'Quadrado') {
                // Recorte de quadrados (trata cada lado como uma linha independente)
                const lados = [
                    { x1: shape.startX, y1: shape.startY, x2: shape.endX, y2: shape.startY }, // Topo
                    { x1: shape.endX, y1: shape.startY, x2: shape.endX, y2: shape.endY }, // Direita
                    { x1: shape.endX, y1: shape.endY, x2: shape.startX, y2: shape.endY }, // Base
                    { x1: shape.startX, y1: shape.endY, x2: shape.startX, y2: shape.startY } // Esquerda
                ];
                const novosLados = [];
                lados.forEach(lado => {
                    const { x1, y1, x2, y2, accept } = recortarLinha(lado.x1, lado.y1, lado.x2, lado.y2);
                    if (accept) {
                        novosLados.push({ x1, y1, x2, y2 });
                    }
                });
                if (novosLados.length > 0) {
                    // Substitui o quadrado pelas linhas recortadas
                    shapes.splice(i, 1); // Remove o quadrado original
                    novosLados.forEach(lado => {
                        shapes.push({ type: 'Linha', startX: lado.x1, startY: lado.y1, endX: lado.x2, endY: lado.y2, selected: false });
                    });
                }
                else {
                    console.log(`Quadrado removido: (${shape.startX}, ${shape.startY}) -> (${shape.endX}, ${shape.endY})`);
                    shapes.splice(i, 1); // Remove o quadrado se todas as linhas estiverem fora
                }
            }
            else if (shape.type === 'Círculo') {
                // Recorte de círculos (verifica se o círculo está completamente fora)
                const centroX = shape.startX;
                const centroY = shape.startY;
                const raio = shape.radius;
                if (centroX + raio < xmin ||
                    centroX - raio > xmax ||
                    centroY + raio < ymin ||
                    centroY - raio > ymax) {
                    console.log(`Círculo removido: centro (${centroX}, ${centroY}), raio ${raio}`);
                    shapes.splice(i, 1); // Remove o círculo se estiver completamente fora
                }
                else {
                    // Redesenha o círculo dentro do retângulo de recorte
                    context === null || context === void 0 ? void 0 : context.beginPath();
                    context === null || context === void 0 ? void 0 : context.arc(centroX, centroY, raio, 0, Math.PI * 2);
                    context === null || context === void 0 ? void 0 : context.stroke();
                }
            }
        }
        drawStoredShapes();
    }
    //----------------------------fim---------------------------------//
    function drawLine(x1, y1, x2, y2) {
        if (context) {
            context.beginPath();
            context.moveTo(x1, y1);
            context.lineTo(x2, y2);
            context.stroke();
        }
    }
    function startDrawing(event) {
        if (isSelecting || dragging)
            return;
        drawing = true;
        startX = event.clientX;
        startY = event.clientY;
    }
    function stopDrawing(event) {
        if (!drawing)
            return;
        drawing = false;
        const currentX = event.clientX;
        const currentY = event.clientY;
        if (currentShape === 'Linha') {
            shapes.push({ type: 'Linha', startX, startY, endX: currentX, endY: currentY, selected: false });
        }
        else if (currentShape === 'Quadrado') {
            shapes.push({ type: 'Quadrado', startX, startY, endX: currentX, endY: currentY, selected: false });
        }
        else if (currentShape === 'Círculo') {
            const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
            shapes.push({ type: 'Círculo', startX, startY, endX: currentX, endY: currentY, radius, selected: false });
        }
        drawStoredShapes();
    }
    if (selectedShapes.length > 0) {
        transformacao.style.display = 'block';
    }
    else {
        transformacao.style.display = 'none';
    }
    function startSelection(event) {
        if (!isSelecting || dragging)
            return;
        selectionRect = { x: event.clientX, y: event.clientY, width: 0, height: 0 };
        drawStoredShapes();
    }
    function updateSelection(event) {
        if (!isSelecting || !selectionRect || dragging)
            return;
        selectionRect.width = event.clientX - selectionRect.x;
        selectionRect.height = event.clientY - selectionRect.y;
        drawStoredShapes();
    }
    function drawClickMarker(x, y) {
        if (context) {
            context.fillStyle = 'lime';
            context.beginPath();
            context.arc(x, y, 5, 0, Math.PI * 2);
            context.fill();
        }
    }
    // Evento de clique no canvas para adicionar pontos de rasterização
    canvas.addEventListener('click', (event) => {
        if (rasterizacaoAtivada) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            adicionarPontoRasterizacao(mouseX, mouseY);
            drawClickMarker(mouseX, mouseY);
            drawStoredShapes();
        }
    });
    function stopSelection(event) {
        if (!isSelecting || !selectionRect || dragging)
            return;
        selectedShapes = [];
        shapes.forEach((shape, index) => {
            const inside = (shape.startX >= selectionRect.x && shape.startX <= selectionRect.x + selectionRect.width &&
                shape.startY >= selectionRect.y && shape.startY <= selectionRect.y + selectionRect.height) ||
                (shape.endX >= selectionRect.x && shape.endX <= selectionRect.x + selectionRect.width &&
                    shape.endY >= selectionRect.y && shape.endY <= selectionRect.y + selectionRect.height);
            if (inside)
                selectedShapes.push(index);
        });
        selectionRect = null;
        drawStoredShapes();
        if (selectedShapes.length > 0) {
            transformacao.style.display = 'block';
        }
        else {
            transformacao.style.display = 'none';
        }
    }
    function handleShapeClick(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        let selectedShapeIndex = -1;
        shapes.forEach((shape, index) => {
            let isSelected = false;
            if (shape.type === 'Linha') {
                const distanceStart = Math.sqrt(Math.pow(mouseX - shape.startX, 2) + Math.pow(mouseY - shape.startY, 2));
                const distanceEnd = Math.sqrt(Math.pow(mouseX - shape.endX, 2) + Math.pow(mouseY - shape.endY, 2));
                isSelected = distanceStart < 5 || distanceEnd < 5;
            }
            else if (shape.type === 'Quadrado') {
                isSelected = mouseX >= shape.startX && mouseX <= shape.endX && mouseY >= shape.startY && mouseY <= shape.endY;
            }
            else if (shape.type === 'Círculo') {
                const radius = shape.radius;
                const distance = Math.sqrt(Math.pow(mouseX - shape.startX, 2) + Math.pow(mouseY - shape.startY, 2));
                isSelected = distance <= radius;
            }
            if (isSelected) {
                selectedShapeIndex = index;
            }
        });
        if (selectedShapeIndex !== -1) {
            selectedShapes = [selectedShapeIndex];
            currentDraggedShape = selectedShapeIndex;
            const shape = shapes[selectedShapeIndex];
            dragOffsetX = mouseX - shape.startX;
            dragOffsetY = mouseY - shape.startY;
        }
        drawStoredShapes();
    }
    function handleMouseMove(event) {
        if (dragging && currentDraggedShape !== null) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            const shape = shapes[currentDraggedShape];
            shape.startX = mouseX - dragOffsetX;
            shape.startY = mouseY - dragOffsetY;
            shape.endX = shape.startX + (shape.endX - shape.startX);
            shape.endY = shape.startY + (shape.endY - shape.startY);
            drawStoredShapes();
        }
    }
    function stopDragging(event) {
        dragging = false;
        currentDraggedShape = null;
    }
    canvas.addEventListener('mousedown', startDrawing);
    canvas.addEventListener('mouseup', stopDrawing);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mousedown', startSelection);
    canvas.addEventListener('mousemove', updateSelection);
    canvas.addEventListener('mouseup', stopSelection);
    canvas.addEventListener('click', handleShapeClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', stopDragging);
    canvas.addEventListener('mousedown', startRecorte);
    canvas.addEventListener('mousemove', updateRecorte);
    canvas.addEventListener('mouseup', stopRecorte);
    //----------------------------RASTERIZAÇÃO---------------------------------//
    function adicionarPontoRasterizacao(x, y) {
        if (rasterizacaoAtivada && pontosRasterizacao.length < 2) {
            pontosRasterizacao.push({ x, y });
            if (pontosRasterizacao.length === 2) {
                rasterizacaoContainer.style.display = 'block';
            }
            drawStoredShapes();
        }
    }
    function DDA() {
        console.log("função dda entrou");
        if (pontosRasterizacao.length !== 2)
            return;
        const x1 = pontosRasterizacao[0].x;
        const y1 = pontosRasterizacao[0].y;
        const x2 = pontosRasterizacao[1].x;
        const y2 = pontosRasterizacao[1].y;
        console.log(`Executando DDA com pontos: (${x1}, ${y1}) e (${x2}, ${y2})`);
        const dx = x2 - x1;
        const dy = y2 - y1;
        const steps = Math.max(Math.abs(dx), Math.abs(dy));
        const xInc = dx / steps;
        const yInc = dy / steps;
        let x = x1;
        let y = y1;
        if (x1 < 0 || x1 > canvas.width || y1 < 0 || y1 > canvas.height ||
            x2 < 0 || x2 > canvas.width || y2 < 0 || y2 > canvas.height) {
            console.log("Pontos fora dos limites do canvas");
            return;
        }
        console.log(`Passos: ${steps}, Incremento X: ${xInc}, Incremento Y: ${yInc}`);
        for (let i = 0; i <= steps; i++) {
            console.log(`Desenhando pixel em: (${Math.round(x)}, ${Math.round(y)})`);
            setPixel(Math.round(x), Math.round(y)); // Função para colorir o pixel
            x += xInc;
            y += yInc;
        }
        shapes.push({ type: 'Linha', startX: x1, startY: y1, endX: x2, endY: y2, selected: false });
        pontosRasterizacao = [];
        drawStoredShapes(false);
    }
    function bresenhamLine() {
        if (pontosRasterizacao.length !== 2)
            return;
        let x1 = pontosRasterizacao[0].x;
        let y1 = pontosRasterizacao[0].y;
        let x2 = pontosRasterizacao[1].x;
        let y2 = pontosRasterizacao[1].y;
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const sx = x1 < x2 ? 1 : -1;
        const sy = y1 < y2 ? 1 : -1;
        let err = dx - dy;
        while (true) {
            setPixel(x1, y1);
            if (x1 === x2 && y1 === y2)
                break;
            const e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x1 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y1 += sy;
            }
        }
        shapes.push({ type: 'Linha', startX: x1, startY: y1, endX: x2, endY: y2, selected: false });
        pontosRasterizacao = [];
        drawStoredShapes(false);
    }
    function bresenhamCircle() {
        if (pontosRasterizacao.length !== 2)
            return;
        const xc = pontosRasterizacao[0].x;
        const yc = pontosRasterizacao[0].y;
        const r = Math.sqrt(Math.pow(pontosRasterizacao[1].x - xc, 2) +
            Math.pow(pontosRasterizacao[1].y - yc, 2));
        let x = 0;
        let y = r;
        let p = 3 - 2 * r;
        const plotCirclePoints = (x, y) => {
            setPixel(xc + x, yc + y);
            setPixel(xc - x, yc + y);
            setPixel(xc + x, yc - y);
            setPixel(xc - x, yc - y);
            setPixel(xc + y, yc + x);
            setPixel(xc - y, yc + x);
            setPixel(xc + y, yc - x);
            setPixel(xc - y, yc - x);
        };
        plotCirclePoints(x, y);
        while (x < y) {
            if (p < 0) {
                p = p + 4 * x + 6;
            }
            else {
                p = p + 4 * (x - y) + 10;
                y--;
            }
            x++;
            plotCirclePoints(x, y);
        }
        shapes.push({
            type: 'Círculo', startX: xc, startY: yc, radius: r, selected: false,
            endX: 0,
            endY: 0
        });
        pontosRasterizacao = [];
        drawStoredShapes(false);
    }
    //----------------------------fim---------------------------------//
    function setPixel(x, y) {
        if (context) {
            context.fillStyle = 'black';
            context.fillRect(x, y, 3, 3); //tamanho e cordenada
            console.log(`Pixel desenhado em: (${x}, ${y})`);
        }
        else {
            console.error("Contexto do canvas não disponível em setPixel.");
        }
    }
    botao === null || botao === void 0 ? void 0 : botao.addEventListener('click', () => {
        const subButtonsContainer = document.getElementById('formas-buttons');
        if (subButtonsContainer) {
            subButtonsContainer.innerHTML = '';
            ['Linha', 'Quadrado', 'Círculo', 'Rasterização'].forEach(shape => {
                const button = document.createElement('button');
                button.classList.add('formas-button');
                button.innerHTML = shape;
                subButtonsContainer.appendChild(button);
                button.addEventListener('click', () => {
                    if (shape === 'Rasterização') {
                        rasterizacaoAtivada = !rasterizacaoAtivada;
                        pontosRasterizacao = [];
                        rasterizacaoContainer.style.display = 'none';
                    }
                    else {
                        currentShape = shape;
                        highlightSelectedButton(button);
                    }
                });
            });
            const botaoRect = botao.getBoundingClientRect();
            subButtonsContainer.style.display = 'block';
            subButtonsContainer.style.top = `${botaoRect.bottom + window.scrollY}px`;
            subButtonsContainer.style.left = `${botaoRect.left + window.scrollX}px`;
        }
    });
    //----------------------------MOUSE---------------------------------//
    canvas.addEventListener('mousedown', (event) => {
        if (isSelecting) {
            selectionRect = { x: event.clientX, y: event.clientY, width: 0, height: 0 };
            console.log("Iniciando seleção:", selectionRect);
        }
        else if (!drawing && !dragging) {
            startDrawing(event);
        }
    });
    canvas.addEventListener('mousemove', (event) => {
        if (isSelecting && selectionRect) {
            selectionRect.width = event.clientX - selectionRect.x;
            selectionRect.height = event.clientY - selectionRect.y;
            drawStoredShapes();
        }
    });
    canvas.addEventListener('mouseup', (event) => {
        if (isSelecting && selectionRect) {
            stopSelection(event);
        }
        else if (drawing) {
            stopDrawing(event);
        }
    });
    canvas.addEventListener('click', handleShapeClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', stopDragging);
    //----------------------------fim---------------------------------//
    //----------------------------BOTÕES---------------------------------//
    (_a = document.getElementById('dda')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
        DDA();
        rasterizacaoContainer.style.display = 'none';
    });
    (_b = document.getElementById('bresenham_linha')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', () => {
        bresenhamLine();
        rasterizacaoContainer.style.display = 'none';
    });
    (_c = document.getElementById('bresenham_circulo')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', () => {
        bresenhamCircle();
        rasterizacaoContainer.style.display = 'none';
    });
    (_d = document.getElementById('cohen-sutherland')) === null || _d === void 0 ? void 0 : _d.addEventListener('click', cohenSutherland);
    (_e = document.getElementById('liang-barsky')) === null || _e === void 0 ? void 0 : _e.addEventListener('click', liangBarsky);
    botaoRecorte === null || botaoRecorte === void 0 ? void 0 : botaoRecorte.addEventListener('click', () => {
        if (recorteContainer.style.display === 'block') {
            recorteContainer.style.display = 'none';
        }
        else {
            recorteContainer.style.display = 'block';
            const botaoRect = botaoRecorte.getBoundingClientRect();
            recorteContainer.style.position = 'absolute';
            recorteContainer.style.top = `${botaoRect.bottom + window.scrollY}px`;
            recorteContainer.style.left = `${botaoRect.left + window.scrollX}px`;
        }
    });
    function startRecorte(event) {
        if (!recorteAtivado)
            return;
        desenhandoRecorte = true;
        recorteRect = {
            x1: event.clientX,
            y1: event.clientY,
            x2: event.clientX,
            y2: event.clientY,
        };
        console.log("Iniciando recorte:", recorteRect);
        drawStoredShapes();
    }
    function updateRecorte(event) {
        if (!recorteAtivado || !recorteRect || !desenhandoRecorte)
            return;
        recorteRect.x2 = event.clientX;
        recorteRect.y2 = event.clientY;
        console.log("Atualizando recorte:", recorteRect);
        drawStoredShapes();
    }
    function stopRecorte(event) {
        if (!recorteAtivado || !recorteRect || !desenhandoRecorte)
            return;
        desenhandoRecorte = false;
        console.log("Finalizando recorte:", recorteRect);
        const cohenButton = document.getElementById('cohen-sutherland');
        const liangButton = document.getElementById('liang-barsky');
        cohenButton.disabled = false;
        liangButton.disabled = false;
        drawStoredShapes();
    }
    (_f = document.getElementById('cohen-sutherland')) === null || _f === void 0 ? void 0 : _f.addEventListener('click', cohenSutherland);
    (_g = document.getElementById('liang-barsky')) === null || _g === void 0 ? void 0 : _g.addEventListener('click', liangBarsky);
    //----------------------------fim---------------------------------//
    const translacaoXInput = document.getElementById('translacaoX');
    const translacaoYInput = document.getElementById('translacaoY');
    const rotacaoInput = document.getElementById('rotacao');
    const escalaXInput = document.getElementById('escalaX');
    const escalaYInput = document.getElementById('escalaY');
    const reflexaoXInput = document.getElementById('reflexaoX');
    const reflexaoYInput = document.getElementById('reflexaoY');
    if (!translacaoXInput || !translacaoYInput || !rotacaoInput || !escalaXInput || !escalaYInput || !reflexaoXInput || !reflexaoYInput) {
        console.error("Um ou mais elementos não foram encontrados no DOM.");
        return;
    }
    const tx = parseFloat(translacaoXInput.value);
    const ty = parseFloat(translacaoYInput.value);
    const rotacao = parseFloat(rotacaoInput.value);
    const sx = parseFloat(escalaXInput.value);
    const sy = parseFloat(escalaYInput.value);
    const refletirX = reflexaoXInput.checked;
    const refletirY = reflexaoYInput.checked;
    //----------------------------TRANSFORMAÇÕES 2D---------------------------------//
    selectedShapes.forEach((index) => {
        const shape = shapes[index];
        aplicarTranslacao(shape, tx, ty);
        aplicarEscala(shape, sx, sy);
        aplicarRotacao(shape, rotacao);
        aplicarReflexao(shape, refletirX, refletirY);
    });
    drawStoredShapes();
    const aplicarTranslacao = (shape, tx, ty) => {
        shape.startX += tx;
        shape.startY += ty;
        shape.endX += tx;
        shape.endY += ty;
    };
    const aplicarEscala = (shape, sx, sy) => {
        const centroX = (shape.startX + shape.endX) / 2;
        const centroY = (shape.startY + shape.endY) / 2;
        shape.startX = centroX + (shape.startX - centroX) * sx;
        shape.startY = centroY + (shape.startY - centroY) * sy;
        shape.endX = centroX + (shape.endX - centroX) * sx;
        shape.endY = centroY + (shape.endY - centroY) * sy;
    };
    const aplicarRotacao = (shape, angulo) => {
        const radiano = angulo * (Math.PI / 180);
        const centroX = (shape.startX + shape.endX) / 2;
        const centroY = (shape.startY + shape.endY) / 2;
        const novoStartX = centroX + (shape.startX - centroX) * Math.cos(radiano) - (shape.startY - centroY) * Math.sin(radiano);
        const novoStartY = centroY + (shape.startX - centroX) * Math.sin(radiano) + (shape.startY - centroY) * Math.cos(radiano);
        const novoEndX = centroX + (shape.endX - centroX) * Math.cos(radiano) - (shape.endY - centroY) * Math.sin(radiano);
        const novoEndY = centroY + (shape.endX - centroX) * Math.sin(radiano) + (shape.endY - centroY) * Math.cos(radiano);
        shape.startX = novoStartX;
        shape.startY = novoStartY;
        shape.endX = novoEndX;
        shape.endY = novoEndY;
    };
    const aplicarReflexao = (shape, refletirX, refletirY) => {
        const centroX = (shape.startX + shape.endX) / 2;
        const centroY = (shape.startY + shape.endY) / 2;
        if (refletirX) {
            shape.startX = centroX - (shape.startX - centroX);
            shape.endX = centroX - (shape.endX - centroX);
        }
        if (refletirY) {
            shape.startY = centroY - (shape.startY - centroY);
            shape.endY = centroY - (shape.endY - centroY);
        }
    };
    const aplicarTransformacoes = () => {
        const tx = parseFloat(document.getElementById('translacaoX').value);
        const ty = parseFloat(document.getElementById('translacaoY').value);
        const rotacao = parseFloat(document.getElementById('rotacao').value);
        const sx = parseFloat(document.getElementById('escalaX').value);
        const sy = parseFloat(document.getElementById('escalaY').value);
        const refletirX = document.getElementById('reflexaoX').checked;
        const refletirY = document.getElementById('reflexaoY').checked;
        selectedShapes.forEach((index) => {
            const shape = shapes[index];
            aplicarTranslacao(shape, tx, ty);
            aplicarEscala(shape, sx, sy);
            aplicarRotacao(shape, rotacao);
            aplicarReflexao(shape, refletirX, refletirY);
        });
        drawStoredShapes();
    };
    (_h = document.getElementById('aplicar-transformacoes')) === null || _h === void 0 ? void 0 : _h.addEventListener('click', aplicarTransformacoes);
    (_j = document.getElementById('cohen-sutherland')) === null || _j === void 0 ? void 0 : _j.addEventListener('click', cohenSutherland);
    (_k = document.getElementById('liang-barsky')) === null || _k === void 0 ? void 0 : _k.addEventListener('click', liangBarsky);
};
