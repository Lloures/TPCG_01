// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  // INSERT_LOAD_HERE

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"02ujV":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "06b291ed9d368ec5";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "7406a0e95a1fdc8f";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            if (err.message) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"j6hSo":[function(require,module,exports,__globalThis) {
"use strict";
window.onload = ()=>{
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
        buttons.forEach((button)=>{
            button.style.backgroundColor = '';
        });
        selectedButton.style.backgroundColor = 'lightgray';
    }
    botaoRecorte === null || botaoRecorte === void 0 || botaoRecorte.addEventListener('click', ()=>{
        recorteAtivado = !recorteAtivado;
        if (recorteAtivado) {
            isSelecting = false;
            botaoRecorte.style.backgroundColor = 'lightgray';
        } else {
            botaoRecorte.style.backgroundColor = '';
            recorteRect = null;
            desenhandoRecorte = false;
        }
    });
    botaoSelecionar.addEventListener('click', ()=>{
        isSelecting = !isSelecting;
        botaoSelecionar.style.backgroundColor = isSelecting ? 'lightgray' : '';
    });
    botaoCartesiano.addEventListener('click', ()=>{
        mostrarPlano = !mostrarPlano;
        botaoCartesiano.style.backgroundColor = mostrarPlano ? 'lightgray' : '';
        drawStoredShapes();
    });
    botaoCoordenadas.addEventListener('click', ()=>{
        mostrarCoordenadas = !mostrarCoordenadas;
        botaoCoordenadas.style.backgroundColor = mostrarCoordenadas ? 'lightgray' : '';
        drawStoredShapes();
    });
    ////
    function drawStoredShapes(clearCanvas = true) {
        if (clearCanvas) context === null || context === void 0 || context.clearRect(0, 0, canvas.width, canvas.height);
        if (mostrarPlano) desenharPlanoCartesiano();
        shapes.forEach((shape, index)=>{
            context.strokeStyle = selectedShapes.includes(index) ? 'cyan' : 'black';
            if (shape.type === 'Linha') {
                context === null || context === void 0 || context.beginPath();
                context === null || context === void 0 || context.moveTo(shape.startX, shape.startY);
                context === null || context === void 0 || context.lineTo(shape.endX, shape.endY);
                context === null || context === void 0 || context.stroke();
            } else if (shape.type === 'Quadrado') {
                const width = shape.endX - shape.startX;
                const height = shape.endY - shape.startY;
                context === null || context === void 0 || context.beginPath();
                context === null || context === void 0 || context.rect(shape.startX, shape.startY, width, height);
                context === null || context === void 0 || context.stroke();
            } else if (shape.type === "C\xedrculo") {
                context === null || context === void 0 || context.beginPath();
                context === null || context === void 0 || context.arc(shape.startX, shape.startY, shape.radius, 0, Math.PI * 2);
                context === null || context === void 0 || context.stroke();
            }
            if (mostrarCoordenadas || selectedShapes.includes(index)) drawVertices(shape);
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
            context.setLineDash([
                5,
                3
            ]);
            context === null || context === void 0 || context.beginPath();
            context === null || context === void 0 || context.rect(Math.min(recorteRect.x1, recorteRect.x2), Math.min(recorteRect.y1, recorteRect.y2), Math.abs(recorteRect.x2 - recorteRect.x1), Math.abs(recorteRect.y2 - recorteRect.y1));
            context === null || context === void 0 || context.stroke();
            context.setLineDash([]);
        }
    }
    //----------------------------Não obrigatorios---------------------------------//
    function drawVertices(shape) {
        context.fillStyle = 'purple';
        let points = [];
        if (shape.type === 'Linha') points = [
            {
                x: shape.startX,
                y: shape.startY
            },
            {
                x: shape.endX,
                y: shape.endY
            }
        ];
        else if (shape.type === 'Quadrado') points = [
            {
                x: shape.startX,
                y: shape.startY
            },
            {
                x: shape.endX,
                y: shape.startY
            },
            {
                x: shape.startX,
                y: shape.endY
            },
            {
                x: shape.endX,
                y: shape.endY
            }
        ];
        else if (shape.type === "C\xedrculo") points = [
            {
                x: shape.startX + shape.radius,
                y: shape.startY
            },
            {
                x: shape.startX - shape.radius,
                y: shape.startY
            },
            {
                x: shape.startX,
                y: shape.startY + shape.radius
            },
            {
                x: shape.startX,
                y: shape.startY - shape.radius
            }
        ];
        points.forEach((point)=>{
            context === null || context === void 0 || context.beginPath();
            context === null || context === void 0 || context.arc(point.x, point.y, 5, 0, Math.PI * 2);
            context === null || context === void 0 || context.fill();
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
        for(let x = 0; x < canvas.width; x += espacamento){
            context.beginPath();
            context.moveTo(x, 0);
            context.lineTo(x, canvas.height);
            context.stroke();
        }
        for(let y = 0; y < canvas.height; y += espacamento){
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
            console.log("Ret\xe2ngulo de recorte n\xe3o definido.");
            return;
        }
        console.log("Aplicando Cohen-Sutherland...");
        const xmin = Math.min(recorteRect.x1, recorteRect.x2);
        const xmax = Math.max(recorteRect.x1, recorteRect.x2);
        const ymin = Math.min(recorteRect.y1, recorteRect.y2);
        const ymax = Math.max(recorteRect.y1, recorteRect.y2);
        // Função para recortar uma linha usando Cohen-Sutherland
        const recortarLinha = (x1, y1, x2, y2)=>{
            const INSIDE = 0;
            const LEFT = 1;
            const RIGHT = 2;
            const BOTTOM = 4;
            const TOP = 8;
            const computeCode = (x, y)=>{
                let code = INSIDE;
                if (x < xmin) code |= LEFT;
                else if (x > xmax) code |= RIGHT;
                if (y < ymin) code |= BOTTOM;
                else if (y > ymax) code |= TOP;
                return code;
            };
            let code1 = computeCode(x1, y1);
            let code2 = computeCode(x2, y2);
            let accept = false;
            while(true){
                if (code1 === 0 && code2 === 0) {
                    accept = true;
                    break;
                } else if ((code1 & code2) !== 0) break;
                else {
                    let x = 0, y = 0;
                    const codeOut = code1 !== 0 ? code1 : code2;
                    if (codeOut & TOP) {
                        x = x1 + (x2 - x1) * (ymax - y1) / (y2 - y1);
                        y = ymax;
                    } else if (codeOut & BOTTOM) {
                        x = x1 + (x2 - x1) * (ymin - y1) / (y2 - y1);
                        y = ymin;
                    } else if (codeOut & RIGHT) {
                        y = y1 + (y2 - y1) * (xmax - x1) / (x2 - x1);
                        x = xmax;
                    } else if (codeOut & LEFT) {
                        y = y1 + (y2 - y1) * (xmin - x1) / (x2 - x1);
                        x = xmin;
                    }
                    if (codeOut === code1) {
                        x1 = x;
                        y1 = y;
                        code1 = computeCode(x1, y1);
                    } else {
                        x2 = x;
                        y2 = y;
                        code2 = computeCode(x2, y2);
                    }
                }
            }
            return {
                x1,
                y1,
                x2,
                y2,
                accept
            };
        };
        // Itera sobre todas as formas
        for(let i = shapes.length - 1; i >= 0; i--){
            const shape = shapes[i];
            if (shape.type === 'Linha') {
                // Recorte de linhas
                const { x1, y1, x2, y2, accept } = recortarLinha(shape.startX, shape.startY, shape.endX, shape.endY);
                if (accept) {
                    shape.startX = x1;
                    shape.startY = y1;
                    shape.endX = x2;
                    shape.endY = y2;
                } else {
                    console.log(`Linha removida: (${x1}, ${y1}) -> (${x2}, ${y2})`);
                    shapes.splice(i, 1); // Remove a linha se estiver completamente fora
                }
            } else if (shape.type === 'Quadrado') {
                // Recorte de quadrados (trata cada lado como uma linha independente)
                const lados = [
                    {
                        x1: shape.startX,
                        y1: shape.startY,
                        x2: shape.endX,
                        y2: shape.startY
                    },
                    {
                        x1: shape.endX,
                        y1: shape.startY,
                        x2: shape.endX,
                        y2: shape.endY
                    },
                    {
                        x1: shape.endX,
                        y1: shape.endY,
                        x2: shape.startX,
                        y2: shape.endY
                    },
                    {
                        x1: shape.startX,
                        y1: shape.endY,
                        x2: shape.startX,
                        y2: shape.startY
                    } // Esquerda
                ];
                const novosLados = [];
                lados.forEach((lado)=>{
                    const { x1, y1, x2, y2, accept } = recortarLinha(lado.x1, lado.y1, lado.x2, lado.y2);
                    if (accept) novosLados.push({
                        x1,
                        y1,
                        x2,
                        y2
                    });
                });
                if (novosLados.length > 0) {
                    // Substitui o quadrado pelas linhas recortadas
                    shapes.splice(i, 1); // Remove o quadrado original
                    novosLados.forEach((lado)=>{
                        shapes.push({
                            type: 'Linha',
                            startX: lado.x1,
                            startY: lado.y1,
                            endX: lado.x2,
                            endY: lado.y2,
                            selected: false
                        });
                    });
                } else {
                    console.log(`Quadrado removido: (${shape.startX}, ${shape.startY}) -> (${shape.endX}, ${shape.endY})`);
                    shapes.splice(i, 1); // Remove o quadrado se todas as linhas estiverem fora
                }
            } else if (shape.type === "C\xedrculo") {
                // Recorte de círculos (verifica se o círculo está completamente fora)
                const centroX = shape.startX;
                const centroY = shape.startY;
                const raio = shape.radius;
                if (centroX + raio < xmin || centroX - raio > xmax || centroY + raio < ymin || centroY - raio > ymax) {
                    console.log(`C\xedrculo removido: centro (${centroX}, ${centroY}), raio ${raio}`);
                    shapes.splice(i, 1); // Remove o círculo se estiver completamente fora
                } else {
                    // Redesenha o círculo dentro do retângulo de recorte
                    context === null || context === void 0 || context.beginPath();
                    context === null || context === void 0 || context.arc(centroX, centroY, raio, 0, Math.PI * 2);
                    context === null || context === void 0 || context.stroke();
                }
            }
        }
        drawStoredShapes();
    }
    function liangBarsky() {
        if (!recorteRect) {
            console.log("Ret\xe2ngulo de recorte n\xe3o definido.");
            return;
        }
        console.log("Aplicando Liang-Barsky...");
        const xmin = Math.min(recorteRect.x1, recorteRect.x2);
        const xmax = Math.max(recorteRect.x1, recorteRect.x2);
        const ymin = Math.min(recorteRect.y1, recorteRect.y2);
        const ymax = Math.max(recorteRect.y1, recorteRect.y2);
        // Função para recortar uma linha usando Liang-Barsky
        const recortarLinha = (x1, y1, x2, y2)=>{
            let u1 = 0, u2 = 1;
            const dx = x2 - x1;
            const dy = y2 - y1;
            const clipTest = (p, q)=>{
                if (p === 0) {
                    if (q < 0) return false; // Linha paralela e fora
                } else {
                    const r = q / p;
                    if (p < 0) {
                        if (r > u2) return false; // Fora da janela
                        else if (r > u1) u1 = r; // Atualiza u1
                    } else if (p > 0) {
                        if (r < u1) return false; // Fora da janela
                        else if (r < u2) u2 = r; // Atualiza u2
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
                return {
                    x1,
                    y1,
                    x2,
                    y2,
                    accept: true
                };
            } else return {
                x1,
                y1,
                x2,
                y2,
                accept: false
            };
        };
        // Itera sobre todas as formas
        for(let i = shapes.length - 1; i >= 0; i--){
            const shape = shapes[i];
            if (shape.type === 'Linha') {
                // Recorte de linhas
                const { x1, y1, x2, y2, accept } = recortarLinha(shape.startX, shape.startY, shape.endX, shape.endY);
                if (accept) {
                    shape.startX = x1;
                    shape.startY = y1;
                    shape.endX = x2;
                    shape.endY = y2;
                } else {
                    console.log(`Linha removida: (${x1}, ${y1}) -> (${x2}, ${y2})`);
                    shapes.splice(i, 1); // Remove a linha se estiver completamente fora
                }
            } else if (shape.type === 'Quadrado') {
                // Recorte de quadrados (trata cada lado como uma linha independente)
                const lados = [
                    {
                        x1: shape.startX,
                        y1: shape.startY,
                        x2: shape.endX,
                        y2: shape.startY
                    },
                    {
                        x1: shape.endX,
                        y1: shape.startY,
                        x2: shape.endX,
                        y2: shape.endY
                    },
                    {
                        x1: shape.endX,
                        y1: shape.endY,
                        x2: shape.startX,
                        y2: shape.endY
                    },
                    {
                        x1: shape.startX,
                        y1: shape.endY,
                        x2: shape.startX,
                        y2: shape.startY
                    } // Esquerda
                ];
                const novosLados = [];
                lados.forEach((lado)=>{
                    const { x1, y1, x2, y2, accept } = recortarLinha(lado.x1, lado.y1, lado.x2, lado.y2);
                    if (accept) novosLados.push({
                        x1,
                        y1,
                        x2,
                        y2
                    });
                });
                if (novosLados.length > 0) {
                    // Substitui o quadrado pelas linhas recortadas
                    shapes.splice(i, 1); // Remove o quadrado original
                    novosLados.forEach((lado)=>{
                        shapes.push({
                            type: 'Linha',
                            startX: lado.x1,
                            startY: lado.y1,
                            endX: lado.x2,
                            endY: lado.y2,
                            selected: false
                        });
                    });
                } else {
                    console.log(`Quadrado removido: (${shape.startX}, ${shape.startY}) -> (${shape.endX}, ${shape.endY})`);
                    shapes.splice(i, 1); // Remove o quadrado se todas as linhas estiverem fora
                }
            } else if (shape.type === "C\xedrculo") {
                // Recorte de círculos (verifica se o círculo está completamente fora)
                const centroX = shape.startX;
                const centroY = shape.startY;
                const raio = shape.radius;
                if (centroX + raio < xmin || centroX - raio > xmax || centroY + raio < ymin || centroY - raio > ymax) {
                    console.log(`C\xedrculo removido: centro (${centroX}, ${centroY}), raio ${raio}`);
                    shapes.splice(i, 1); // Remove o círculo se estiver completamente fora
                } else {
                    // Redesenha o círculo dentro do retângulo de recorte
                    context === null || context === void 0 || context.beginPath();
                    context === null || context === void 0 || context.arc(centroX, centroY, raio, 0, Math.PI * 2);
                    context === null || context === void 0 || context.stroke();
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
        if (isSelecting || dragging) return;
        drawing = true;
        startX = event.clientX;
        startY = event.clientY;
    }
    function stopDrawing(event) {
        if (!drawing) return;
        drawing = false;
        const currentX = event.clientX;
        const currentY = event.clientY;
        if (currentShape === 'Linha') shapes.push({
            type: 'Linha',
            startX,
            startY,
            endX: currentX,
            endY: currentY,
            selected: false
        });
        else if (currentShape === 'Quadrado') shapes.push({
            type: 'Quadrado',
            startX,
            startY,
            endX: currentX,
            endY: currentY,
            selected: false
        });
        else if (currentShape === "C\xedrculo") {
            const radius = Math.sqrt(Math.pow(currentX - startX, 2) + Math.pow(currentY - startY, 2));
            shapes.push({
                type: "C\xedrculo",
                startX,
                startY,
                endX: currentX,
                endY: currentY,
                radius,
                selected: false
            });
        }
        drawStoredShapes();
    }
    if (selectedShapes.length > 0) transformacao.style.display = 'block';
    else transformacao.style.display = 'none';
    function startSelection(event) {
        if (!isSelecting || dragging) return;
        selectionRect = {
            x: event.clientX,
            y: event.clientY,
            width: 0,
            height: 0
        };
        drawStoredShapes();
    }
    function updateSelection(event) {
        if (!isSelecting || !selectionRect || dragging) return;
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
    canvas.addEventListener('click', (event)=>{
        if (rasterizacaoAtivada) {
            const mouseX = event.clientX;
            const mouseY = event.clientY;
            adicionarPontoRasterizacao(mouseX, mouseY);
            drawClickMarker(mouseX, mouseY);
            drawStoredShapes();
        }
    });
    function stopSelection(event) {
        if (!isSelecting || !selectionRect || dragging) return;
        selectedShapes = [];
        shapes.forEach((shape, index)=>{
            const inside = shape.startX >= selectionRect.x && shape.startX <= selectionRect.x + selectionRect.width && shape.startY >= selectionRect.y && shape.startY <= selectionRect.y + selectionRect.height || shape.endX >= selectionRect.x && shape.endX <= selectionRect.x + selectionRect.width && shape.endY >= selectionRect.y && shape.endY <= selectionRect.y + selectionRect.height;
            if (inside) selectedShapes.push(index);
        });
        selectionRect = null;
        drawStoredShapes();
        if (selectedShapes.length > 0) transformacao.style.display = 'block';
        else transformacao.style.display = 'none';
    }
    function handleShapeClick(event) {
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        let selectedShapeIndex = -1;
        shapes.forEach((shape, index)=>{
            let isSelected = false;
            if (shape.type === 'Linha') {
                const distanceStart = Math.sqrt(Math.pow(mouseX - shape.startX, 2) + Math.pow(mouseY - shape.startY, 2));
                const distanceEnd = Math.sqrt(Math.pow(mouseX - shape.endX, 2) + Math.pow(mouseY - shape.endY, 2));
                isSelected = distanceStart < 5 || distanceEnd < 5;
            } else if (shape.type === 'Quadrado') isSelected = mouseX >= shape.startX && mouseX <= shape.endX && mouseY >= shape.startY && mouseY <= shape.endY;
            else if (shape.type === "C\xedrculo") {
                const radius = shape.radius;
                const distance = Math.sqrt(Math.pow(mouseX - shape.startX, 2) + Math.pow(mouseY - shape.startY, 2));
                isSelected = distance <= radius;
            }
            if (isSelected) selectedShapeIndex = index;
        });
        if (selectedShapeIndex !== -1) {
            selectedShapes = [
                selectedShapeIndex
            ];
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
            pontosRasterizacao.push({
                x,
                y
            });
            if (pontosRasterizacao.length === 2) rasterizacaoContainer.style.display = 'block';
            drawStoredShapes();
        }
    }
    function DDA() {
        console.log("fun\xe7\xe3o dda entrou");
        if (pontosRasterizacao.length !== 2) return;
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
        if (x1 < 0 || x1 > canvas.width || y1 < 0 || y1 > canvas.height || x2 < 0 || x2 > canvas.width || y2 < 0 || y2 > canvas.height) {
            console.log("Pontos fora dos limites do canvas");
            return;
        }
        console.log(`Passos: ${steps}, Incremento X: ${xInc}, Incremento Y: ${yInc}`);
        for(let i = 0; i <= steps; i++){
            console.log(`Desenhando pixel em: (${Math.round(x)}, ${Math.round(y)})`);
            setPixel(Math.round(x), Math.round(y)); // Função para colorir o pixel
            x += xInc;
            y += yInc;
        }
        shapes.push({
            type: 'Linha',
            startX: x1,
            startY: y1,
            endX: x2,
            endY: y2,
            selected: false
        });
        pontosRasterizacao = [];
        drawStoredShapes(false);
    }
    function bresenhamLine() {
        if (pontosRasterizacao.length !== 2) return;
        let x1 = pontosRasterizacao[0].x;
        let y1 = pontosRasterizacao[0].y;
        let x2 = pontosRasterizacao[1].x;
        let y2 = pontosRasterizacao[1].y;
        const dx = Math.abs(x2 - x1);
        const dy = Math.abs(y2 - y1);
        const sx = x1 < x2 ? 1 : -1;
        const sy = y1 < y2 ? 1 : -1;
        let err = dx - dy;
        while(true){
            setPixel(x1, y1);
            if (x1 === x2 && y1 === y2) break;
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
        shapes.push({
            type: 'Linha',
            startX: x1,
            startY: y1,
            endX: x2,
            endY: y2,
            selected: false
        });
        pontosRasterizacao = [];
        drawStoredShapes(false);
    }
    function bresenhamCircle() {
        if (pontosRasterizacao.length !== 2) return;
        const xc = pontosRasterizacao[0].x;
        const yc = pontosRasterizacao[0].y;
        const r = Math.sqrt(Math.pow(pontosRasterizacao[1].x - xc, 2) + Math.pow(pontosRasterizacao[1].y - yc, 2));
        let x = 0;
        let y = r;
        let p = 3 - 2 * r;
        const plotCirclePoints = (x, y)=>{
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
        while(x < y){
            if (p < 0) p = p + 4 * x + 6;
            else {
                p = p + 4 * (x - y) + 10;
                y--;
            }
            x++;
            plotCirclePoints(x, y);
        }
        shapes.push({
            type: "C\xedrculo",
            startX: xc,
            startY: yc,
            radius: r,
            selected: false,
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
        } else console.error("Contexto do canvas n\xe3o dispon\xedvel em setPixel.");
    }
    botao === null || botao === void 0 || botao.addEventListener('click', ()=>{
        const subButtonsContainer = document.getElementById('formas-buttons');
        if (subButtonsContainer) {
            subButtonsContainer.innerHTML = '';
            [
                'Linha',
                'Quadrado',
                "C\xedrculo",
                "Rasteriza\xe7\xe3o"
            ].forEach((shape)=>{
                const button = document.createElement('button');
                button.classList.add('formas-button');
                button.innerHTML = shape;
                subButtonsContainer.appendChild(button);
                button.addEventListener('click', ()=>{
                    if (shape === "Rasteriza\xe7\xe3o") {
                        rasterizacaoAtivada = !rasterizacaoAtivada;
                        pontosRasterizacao = [];
                        rasterizacaoContainer.style.display = 'none';
                    } else {
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
    canvas.addEventListener('mousedown', (event)=>{
        if (isSelecting) {
            selectionRect = {
                x: event.clientX,
                y: event.clientY,
                width: 0,
                height: 0
            };
            console.log("Iniciando sele\xe7\xe3o:", selectionRect);
        } else if (!drawing && !dragging) startDrawing(event);
    });
    canvas.addEventListener('mousemove', (event)=>{
        if (isSelecting && selectionRect) {
            selectionRect.width = event.clientX - selectionRect.x;
            selectionRect.height = event.clientY - selectionRect.y;
            drawStoredShapes();
        }
    });
    canvas.addEventListener('mouseup', (event)=>{
        if (isSelecting && selectionRect) stopSelection(event);
        else if (drawing) stopDrawing(event);
    });
    canvas.addEventListener('click', handleShapeClick);
    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseup', stopDragging);
    //----------------------------fim---------------------------------//
    //----------------------------BOTÕES---------------------------------//
    (_a = document.getElementById('dda')) === null || _a === void 0 || _a.addEventListener('click', ()=>{
        DDA();
        rasterizacaoContainer.style.display = 'none';
    });
    (_b = document.getElementById('bresenham_linha')) === null || _b === void 0 || _b.addEventListener('click', ()=>{
        bresenhamLine();
        rasterizacaoContainer.style.display = 'none';
    });
    (_c = document.getElementById('bresenham_circulo')) === null || _c === void 0 || _c.addEventListener('click', ()=>{
        bresenhamCircle();
        rasterizacaoContainer.style.display = 'none';
    });
    (_d = document.getElementById('cohen-sutherland')) === null || _d === void 0 || _d.addEventListener('click', cohenSutherland);
    (_e = document.getElementById('liang-barsky')) === null || _e === void 0 || _e.addEventListener('click', liangBarsky);
    botaoRecorte === null || botaoRecorte === void 0 || botaoRecorte.addEventListener('click', ()=>{
        if (recorteContainer.style.display === 'block') recorteContainer.style.display = 'none';
        else {
            recorteContainer.style.display = 'block';
            const botaoRect = botaoRecorte.getBoundingClientRect();
            recorteContainer.style.position = 'absolute';
            recorteContainer.style.top = `${botaoRect.bottom + window.scrollY}px`;
            recorteContainer.style.left = `${botaoRect.left + window.scrollX}px`;
        }
    });
    function startRecorte(event) {
        if (!recorteAtivado) return;
        desenhandoRecorte = true;
        recorteRect = {
            x1: event.clientX,
            y1: event.clientY,
            x2: event.clientX,
            y2: event.clientY
        };
        console.log("Iniciando recorte:", recorteRect);
        drawStoredShapes();
    }
    function updateRecorte(event) {
        if (!recorteAtivado || !recorteRect || !desenhandoRecorte) return;
        recorteRect.x2 = event.clientX;
        recorteRect.y2 = event.clientY;
        console.log("Atualizando recorte:", recorteRect);
        drawStoredShapes();
    }
    function stopRecorte(event) {
        if (!recorteAtivado || !recorteRect || !desenhandoRecorte) return;
        desenhandoRecorte = false;
        console.log("Finalizando recorte:", recorteRect);
        const cohenButton = document.getElementById('cohen-sutherland');
        const liangButton = document.getElementById('liang-barsky');
        cohenButton.disabled = false;
        liangButton.disabled = false;
        drawStoredShapes();
    }
    (_f = document.getElementById('cohen-sutherland')) === null || _f === void 0 || _f.addEventListener('click', cohenSutherland);
    (_g = document.getElementById('liang-barsky')) === null || _g === void 0 || _g.addEventListener('click', liangBarsky);
    //----------------------------fim---------------------------------//
    const translacaoXInput = document.getElementById('translacaoX');
    const translacaoYInput = document.getElementById('translacaoY');
    const rotacaoInput = document.getElementById('rotacao');
    const escalaXInput = document.getElementById('escalaX');
    const escalaYInput = document.getElementById('escalaY');
    const reflexaoXInput = document.getElementById('reflexaoX');
    const reflexaoYInput = document.getElementById('reflexaoY');
    if (!translacaoXInput || !translacaoYInput || !rotacaoInput || !escalaXInput || !escalaYInput || !reflexaoXInput || !reflexaoYInput) {
        console.error("Um ou mais elementos n\xe3o foram encontrados no DOM.");
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
    selectedShapes.forEach((index)=>{
        const shape = shapes[index];
        aplicarTranslacao(shape, tx, ty);
        aplicarEscala(shape, sx, sy);
        aplicarRotacao(shape, rotacao);
        aplicarReflexao(shape, refletirX, refletirY);
    });
    drawStoredShapes();
    const aplicarTranslacao = (shape, tx, ty)=>{
        shape.startX += tx;
        shape.startY += ty;
        shape.endX += tx;
        shape.endY += ty;
    };
    const aplicarEscala = (shape, sx, sy)=>{
        const centroX = (shape.startX + shape.endX) / 2;
        const centroY = (shape.startY + shape.endY) / 2;
        shape.startX = centroX + (shape.startX - centroX) * sx;
        shape.startY = centroY + (shape.startY - centroY) * sy;
        shape.endX = centroX + (shape.endX - centroX) * sx;
        shape.endY = centroY + (shape.endY - centroY) * sy;
    };
    const aplicarRotacao = (shape, angulo)=>{
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
    const aplicarReflexao = (shape, refletirX, refletirY)=>{
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
    const aplicarTransformacoes = ()=>{
        const tx = parseFloat(document.getElementById('translacaoX').value);
        const ty = parseFloat(document.getElementById('translacaoY').value);
        const rotacao = parseFloat(document.getElementById('rotacao').value);
        const sx = parseFloat(document.getElementById('escalaX').value);
        const sy = parseFloat(document.getElementById('escalaY').value);
        const refletirX = document.getElementById('reflexaoX').checked;
        const refletirY = document.getElementById('reflexaoY').checked;
        selectedShapes.forEach((index)=>{
            const shape = shapes[index];
            aplicarTranslacao(shape, tx, ty);
            aplicarEscala(shape, sx, sy);
            aplicarRotacao(shape, rotacao);
            aplicarReflexao(shape, refletirX, refletirY);
        });
        drawStoredShapes();
    };
    (_h = document.getElementById('aplicar-transformacoes')) === null || _h === void 0 || _h.addEventListener('click', aplicarTransformacoes);
    (_j = document.getElementById('cohen-sutherland')) === null || _j === void 0 || _j.addEventListener('click', cohenSutherland);
    (_k = document.getElementById('liang-barsky')) === null || _k === void 0 || _k.addEventListener('click', liangBarsky);
};

},{}]},["02ujV","j6hSo"], "j6hSo", "parcelRequire4487")

//# sourceMappingURL=meu-projeto.5a1fdc8f.js.map
