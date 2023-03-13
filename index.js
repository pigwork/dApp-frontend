var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
var __accessCheck = (obj, member, msg) => {
  if (!member.has(obj))
    throw TypeError("Cannot " + msg);
};
var __privateGet = (obj, member, getter) => {
  __accessCheck(obj, member, "read from private field");
  return getter ? getter.call(obj) : member.get(obj);
};
var __privateAdd = (obj, member, value) => {
  if (member.has(obj))
    throw TypeError("Cannot add the same private member more than once");
  member instanceof WeakSet ? member.add(obj) : member.set(obj, value);
};
var __privateSet = (obj, member, value, setter) => {
  __accessCheck(obj, member, "write to private field");
  setter ? setter.call(obj, value) : member.set(obj, value);
  return value;
};
var __privateWrapper = (obj, member, setter, getter) => ({
  set _(value) {
    __privateSet(obj, member, value, setter);
  },
  get _() {
    return __privateGet(obj, member, getter);
  }
});
var __privateMethod = (obj, member, method) => {
  __accessCheck(obj, member, "access private method");
  return method;
};
var _listener, _listeners, _cancelled, _allowInsecure, _gzip, _headers, _method, _timeout, _url, _body, _bodyType, _creds, _preflight, _process, _retry, _signal, _throttle, _send, send_fn, _statusCode, _statusMessage, _headers2, _body2, _request, _error, _format, _val, _tens, _checkFormat, checkFormat_fn, _checkValue, checkValue_fn, _add, add_fn, _sub, sub_fn, _mul, mul_fn, _div, div_fn, _names, _data, _dataLength, _writeData, writeData_fn, _data2, _offset, _peekBytes, peekBytes_fn, _r, _s, _v, _networkV, _privateKey, _options, _type, _to, _data3, _nonce, _gasLimit, _gasPrice, _maxPriorityFeePerGas, _maxFeePerGas, _value, _chainId, _sig, _accessList, _types, _fullTypes, _encoderCache, _getEncoder, getEncoder_fn, _offset2, _tokens, _subTokenString, subTokenString_fn, _walkAsync, walkAsync_fn, _getCoder, getCoder_fn, _errors, _events, _functions, _abiCoder, _getFunction, getFunction_fn, _getEvent, getEvent_fn, _transactions, _logs, _startBlock, _interface, _interface2, _filter, _a, _supports2544, _resolver, _fetch, fetch_fn, _getResolver, getResolver_fn, _name, _chainId2, _plugins, _provider, _poller, _interval, _blockNumber, _poll, poll_fn, _provider2, _poll2, _running, _filter2, _hash, _provider3, _filter3, _poller2, _running2, _blockNumber2, _poll3, poll_fn2, _subs, _plugins2, _pausedState, _networkPromise, _anyNetwork, _performCache, _lastBlockNumber, _nextTimer, _timers, _disableCcipRead, _perform, perform_fn, _call, call_fn, _checkNetwork, checkNetwork_fn, _getAccountValue, getAccountValue_fn, _getBlock, getBlock_fn, _hasSub, hasSub_fn, _getSub, getSub_fn, _provider4, _filterIdPromise, _poller3, _running3, _network, _hault, _poll4, poll_fn3, _teardown, teardown_fn, _event, _options2, _nextId, _payloads, _drainTimer, _notReady, _network2, _scheduleDrain, scheduleDrain_fn, _pollingInterval, _request2;
function _mergeNamespaces(n2, m2) {
  for (var i = 0; i < m2.length; i++) {
    const e = m2[i];
    if (typeof e !== "string" && !Array.isArray(e)) {
      for (const k2 in e) {
        if (k2 !== "default" && !(k2 in n2)) {
          const d = Object.getOwnPropertyDescriptor(e, k2);
          if (d) {
            Object.defineProperty(n2, k2, d.get ? d : {
              enumerable: true,
              get: () => e[k2]
            });
          }
        }
      }
    }
  }
  return Object.freeze(Object.defineProperty(n2, Symbol.toStringTag, { value: "Module" }));
}
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
var jsxRuntimeExports = {};
var jsxRuntime = {
  get exports() {
    return jsxRuntimeExports;
  },
  set exports(v2) {
    jsxRuntimeExports = v2;
  }
};
var reactJsxRuntime_production_min = {};
var reactExports = {};
var react = {
  get exports() {
    return reactExports;
  },
  set exports(v2) {
    reactExports = v2;
  }
};
var react_production_min = {};
var l$1 = Symbol.for("react.element"), n$2 = Symbol.for("react.portal"), p$2 = Symbol.for("react.fragment"), q$1 = Symbol.for("react.strict_mode"), r$1 = Symbol.for("react.profiler"), t = Symbol.for("react.provider"), u = Symbol.for("react.context"), v$1 = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), x = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), z$1 = Symbol.iterator;
function A$1(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = z$1 && a[z$1] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var B$1 = { isMounted: function() {
  return false;
}, enqueueForceUpdate: function() {
}, enqueueReplaceState: function() {
}, enqueueSetState: function() {
} }, C$1 = Object.assign, D$1 = {};
function E$1(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e || B$1;
}
E$1.prototype.isReactComponent = {};
E$1.prototype.setState = function(a, b2) {
  if ("object" !== typeof a && "function" !== typeof a && null != a)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
  this.updater.enqueueSetState(this, a, b2, "setState");
};
E$1.prototype.forceUpdate = function(a) {
  this.updater.enqueueForceUpdate(this, a, "forceUpdate");
};
function F() {
}
F.prototype = E$1.prototype;
function G$1(a, b2, e) {
  this.props = a;
  this.context = b2;
  this.refs = D$1;
  this.updater = e || B$1;
}
var H$1 = G$1.prototype = new F();
H$1.constructor = G$1;
C$1(H$1, E$1.prototype);
H$1.isPureReactComponent = true;
var I$1 = Array.isArray, J = Object.prototype.hasOwnProperty, K$1 = { current: null }, L$1 = { key: true, ref: true, __self: true, __source: true };
function M$1(a, b2, e) {
  var d, c = {}, k2 = null, h = null;
  if (null != b2)
    for (d in void 0 !== b2.ref && (h = b2.ref), void 0 !== b2.key && (k2 = "" + b2.key), b2)
      J.call(b2, d) && !L$1.hasOwnProperty(d) && (c[d] = b2[d]);
  var g = arguments.length - 2;
  if (1 === g)
    c.children = e;
  else if (1 < g) {
    for (var f2 = Array(g), m2 = 0; m2 < g; m2++)
      f2[m2] = arguments[m2 + 2];
    c.children = f2;
  }
  if (a && a.defaultProps)
    for (d in g = a.defaultProps, g)
      void 0 === c[d] && (c[d] = g[d]);
  return { $$typeof: l$1, type: a, key: k2, ref: h, props: c, _owner: K$1.current };
}
function N$1(a, b2) {
  return { $$typeof: l$1, type: a.type, key: b2, ref: a.ref, props: a.props, _owner: a._owner };
}
function O$1(a) {
  return "object" === typeof a && null !== a && a.$$typeof === l$1;
}
function escape(a) {
  var b2 = { "=": "=0", ":": "=2" };
  return "$" + a.replace(/[=:]/g, function(a2) {
    return b2[a2];
  });
}
var P$1 = /\/+/g;
function Q$1(a, b2) {
  return "object" === typeof a && null !== a && null != a.key ? escape("" + a.key) : b2.toString(36);
}
function R$1(a, b2, e, d, c) {
  var k2 = typeof a;
  if ("undefined" === k2 || "boolean" === k2)
    a = null;
  var h = false;
  if (null === a)
    h = true;
  else
    switch (k2) {
      case "string":
      case "number":
        h = true;
        break;
      case "object":
        switch (a.$$typeof) {
          case l$1:
          case n$2:
            h = true;
        }
    }
  if (h)
    return h = a, c = c(h), a = "" === d ? "." + Q$1(h, 0) : d, I$1(c) ? (e = "", null != a && (e = a.replace(P$1, "$&/") + "/"), R$1(c, b2, e, "", function(a2) {
      return a2;
    })) : null != c && (O$1(c) && (c = N$1(c, e + (!c.key || h && h.key === c.key ? "" : ("" + c.key).replace(P$1, "$&/") + "/") + a)), b2.push(c)), 1;
  h = 0;
  d = "" === d ? "." : d + ":";
  if (I$1(a))
    for (var g = 0; g < a.length; g++) {
      k2 = a[g];
      var f2 = d + Q$1(k2, g);
      h += R$1(k2, b2, e, f2, c);
    }
  else if (f2 = A$1(a), "function" === typeof f2)
    for (a = f2.call(a), g = 0; !(k2 = a.next()).done; )
      k2 = k2.value, f2 = d + Q$1(k2, g++), h += R$1(k2, b2, e, f2, c);
  else if ("object" === k2)
    throw b2 = String(a), Error("Objects are not valid as a React child (found: " + ("[object Object]" === b2 ? "object with keys {" + Object.keys(a).join(", ") + "}" : b2) + "). If you meant to render a collection of children, use an array instead.");
  return h;
}
function S$1(a, b2, e) {
  if (null == a)
    return a;
  var d = [], c = 0;
  R$1(a, d, "", "", function(a2) {
    return b2.call(e, a2, c++);
  });
  return d;
}
function T$1(a) {
  if (-1 === a._status) {
    var b2 = a._result;
    b2 = b2();
    b2.then(function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 1, a._result = b3;
    }, function(b3) {
      if (0 === a._status || -1 === a._status)
        a._status = 2, a._result = b3;
    });
    -1 === a._status && (a._status = 0, a._result = b2);
  }
  if (1 === a._status)
    return a._result.default;
  throw a._result;
}
var U$1 = { current: null }, V$1 = { transition: null }, W$1 = { ReactCurrentDispatcher: U$1, ReactCurrentBatchConfig: V$1, ReactCurrentOwner: K$1 };
react_production_min.Children = { map: S$1, forEach: function(a, b2, e) {
  S$1(a, function() {
    b2.apply(this, arguments);
  }, e);
}, count: function(a) {
  var b2 = 0;
  S$1(a, function() {
    b2++;
  });
  return b2;
}, toArray: function(a) {
  return S$1(a, function(a2) {
    return a2;
  }) || [];
}, only: function(a) {
  if (!O$1(a))
    throw Error("React.Children.only expected to receive a single React element child.");
  return a;
} };
react_production_min.Component = E$1;
react_production_min.Fragment = p$2;
react_production_min.Profiler = r$1;
react_production_min.PureComponent = G$1;
react_production_min.StrictMode = q$1;
react_production_min.Suspense = w;
react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = W$1;
react_production_min.cloneElement = function(a, b2, e) {
  if (null === a || void 0 === a)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
  var d = C$1({}, a.props), c = a.key, k2 = a.ref, h = a._owner;
  if (null != b2) {
    void 0 !== b2.ref && (k2 = b2.ref, h = K$1.current);
    void 0 !== b2.key && (c = "" + b2.key);
    if (a.type && a.type.defaultProps)
      var g = a.type.defaultProps;
    for (f2 in b2)
      J.call(b2, f2) && !L$1.hasOwnProperty(f2) && (d[f2] = void 0 === b2[f2] && void 0 !== g ? g[f2] : b2[f2]);
  }
  var f2 = arguments.length - 2;
  if (1 === f2)
    d.children = e;
  else if (1 < f2) {
    g = Array(f2);
    for (var m2 = 0; m2 < f2; m2++)
      g[m2] = arguments[m2 + 2];
    d.children = g;
  }
  return { $$typeof: l$1, type: a.type, key: c, ref: k2, props: d, _owner: h };
};
react_production_min.createContext = function(a) {
  a = { $$typeof: u, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null };
  a.Provider = { $$typeof: t, _context: a };
  return a.Consumer = a;
};
react_production_min.createElement = M$1;
react_production_min.createFactory = function(a) {
  var b2 = M$1.bind(null, a);
  b2.type = a;
  return b2;
};
react_production_min.createRef = function() {
  return { current: null };
};
react_production_min.forwardRef = function(a) {
  return { $$typeof: v$1, render: a };
};
react_production_min.isValidElement = O$1;
react_production_min.lazy = function(a) {
  return { $$typeof: y, _payload: { _status: -1, _result: a }, _init: T$1 };
};
react_production_min.memo = function(a, b2) {
  return { $$typeof: x, type: a, compare: void 0 === b2 ? null : b2 };
};
react_production_min.startTransition = function(a) {
  var b2 = V$1.transition;
  V$1.transition = {};
  try {
    a();
  } finally {
    V$1.transition = b2;
  }
};
react_production_min.unstable_act = function() {
  throw Error("act(...) is not supported in production builds of React.");
};
react_production_min.useCallback = function(a, b2) {
  return U$1.current.useCallback(a, b2);
};
react_production_min.useContext = function(a) {
  return U$1.current.useContext(a);
};
react_production_min.useDebugValue = function() {
};
react_production_min.useDeferredValue = function(a) {
  return U$1.current.useDeferredValue(a);
};
react_production_min.useEffect = function(a, b2) {
  return U$1.current.useEffect(a, b2);
};
react_production_min.useId = function() {
  return U$1.current.useId();
};
react_production_min.useImperativeHandle = function(a, b2, e) {
  return U$1.current.useImperativeHandle(a, b2, e);
};
react_production_min.useInsertionEffect = function(a, b2) {
  return U$1.current.useInsertionEffect(a, b2);
};
react_production_min.useLayoutEffect = function(a, b2) {
  return U$1.current.useLayoutEffect(a, b2);
};
react_production_min.useMemo = function(a, b2) {
  return U$1.current.useMemo(a, b2);
};
react_production_min.useReducer = function(a, b2, e) {
  return U$1.current.useReducer(a, b2, e);
};
react_production_min.useRef = function(a) {
  return U$1.current.useRef(a);
};
react_production_min.useState = function(a) {
  return U$1.current.useState(a);
};
react_production_min.useSyncExternalStore = function(a, b2, e) {
  return U$1.current.useSyncExternalStore(a, b2, e);
};
react_production_min.useTransition = function() {
  return U$1.current.useTransition();
};
react_production_min.version = "18.2.0";
(function(module) {
  {
    module.exports = react_production_min;
  }
})(react);
const React = /* @__PURE__ */ getDefaultExportFromCjs(reactExports);
const React$1 = /* @__PURE__ */ _mergeNamespaces({
  __proto__: null,
  default: React
}, [reactExports]);
var f = reactExports, k = Symbol.for("react.element"), l = Symbol.for("react.fragment"), m$1 = Object.prototype.hasOwnProperty, n$1 = f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, p$1 = { key: true, ref: true, __self: true, __source: true };
function q(c, a, g) {
  var b2, d = {}, e = null, h = null;
  void 0 !== g && (e = "" + g);
  void 0 !== a.key && (e = "" + a.key);
  void 0 !== a.ref && (h = a.ref);
  for (b2 in a)
    m$1.call(a, b2) && !p$1.hasOwnProperty(b2) && (d[b2] = a[b2]);
  if (c && c.defaultProps)
    for (b2 in a = c.defaultProps, a)
      void 0 === d[b2] && (d[b2] = a[b2]);
  return { $$typeof: k, type: c, key: e, ref: h, props: d, _owner: n$1.current };
}
reactJsxRuntime_production_min.Fragment = l;
reactJsxRuntime_production_min.jsx = q;
reactJsxRuntime_production_min.jsxs = q;
(function(module) {
  {
    module.exports = reactJsxRuntime_production_min;
  }
})(jsxRuntime);
const Fragment$1 = jsxRuntimeExports.Fragment;
const jsx = jsxRuntimeExports.jsx;
const jsxs = jsxRuntimeExports.jsxs;
var client = {};
var reactDomExports = {};
var reactDom = {
  get exports() {
    return reactDomExports;
  },
  set exports(v2) {
    reactDomExports = v2;
  }
};
var reactDom_production_min = {};
var schedulerExports = {};
var scheduler = {
  get exports() {
    return schedulerExports;
  },
  set exports(v2) {
    schedulerExports = v2;
  }
};
var scheduler_production_min = {};
(function(exports) {
  function f2(a, b2) {
    var c = a.length;
    a.push(b2);
    a:
      for (; 0 < c; ) {
        var d = c - 1 >>> 1, e = a[d];
        if (0 < g(e, b2))
          a[d] = b2, a[c] = e, c = d;
        else
          break a;
      }
  }
  function h(a) {
    return 0 === a.length ? null : a[0];
  }
  function k2(a) {
    if (0 === a.length)
      return null;
    var b2 = a[0], c = a.pop();
    if (c !== b2) {
      a[0] = c;
      a:
        for (var d = 0, e = a.length, w2 = e >>> 1; d < w2; ) {
          var m2 = 2 * (d + 1) - 1, C2 = a[m2], n2 = m2 + 1, x2 = a[n2];
          if (0 > g(C2, c))
            n2 < e && 0 > g(x2, C2) ? (a[d] = x2, a[n2] = c, d = n2) : (a[d] = C2, a[m2] = c, d = m2);
          else if (n2 < e && 0 > g(x2, c))
            a[d] = x2, a[n2] = c, d = n2;
          else
            break a;
        }
    }
    return b2;
  }
  function g(a, b2) {
    var c = a.sortIndex - b2.sortIndex;
    return 0 !== c ? c : a.id - b2.id;
  }
  if ("object" === typeof performance && "function" === typeof performance.now) {
    var l2 = performance;
    exports.unstable_now = function() {
      return l2.now();
    };
  } else {
    var p2 = Date, q2 = p2.now();
    exports.unstable_now = function() {
      return p2.now() - q2;
    };
  }
  var r2 = [], t2 = [], u2 = 1, v2 = null, y2 = 3, z2 = false, A2 = false, B2 = false, D2 = "function" === typeof setTimeout ? setTimeout : null, E2 = "function" === typeof clearTimeout ? clearTimeout : null, F2 = "undefined" !== typeof setImmediate ? setImmediate : null;
  "undefined" !== typeof navigator && void 0 !== navigator.scheduling && void 0 !== navigator.scheduling.isInputPending && navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function G2(a) {
    for (var b2 = h(t2); null !== b2; ) {
      if (null === b2.callback)
        k2(t2);
      else if (b2.startTime <= a)
        k2(t2), b2.sortIndex = b2.expirationTime, f2(r2, b2);
      else
        break;
      b2 = h(t2);
    }
  }
  function H2(a) {
    B2 = false;
    G2(a);
    if (!A2)
      if (null !== h(r2))
        A2 = true, I2(J2);
      else {
        var b2 = h(t2);
        null !== b2 && K2(H2, b2.startTime - a);
      }
  }
  function J2(a, b2) {
    A2 = false;
    B2 && (B2 = false, E2(L2), L2 = -1);
    z2 = true;
    var c = y2;
    try {
      G2(b2);
      for (v2 = h(r2); null !== v2 && (!(v2.expirationTime > b2) || a && !M2()); ) {
        var d = v2.callback;
        if ("function" === typeof d) {
          v2.callback = null;
          y2 = v2.priorityLevel;
          var e = d(v2.expirationTime <= b2);
          b2 = exports.unstable_now();
          "function" === typeof e ? v2.callback = e : v2 === h(r2) && k2(r2);
          G2(b2);
        } else
          k2(r2);
        v2 = h(r2);
      }
      if (null !== v2)
        var w2 = true;
      else {
        var m2 = h(t2);
        null !== m2 && K2(H2, m2.startTime - b2);
        w2 = false;
      }
      return w2;
    } finally {
      v2 = null, y2 = c, z2 = false;
    }
  }
  var N2 = false, O2 = null, L2 = -1, P2 = 5, Q2 = -1;
  function M2() {
    return exports.unstable_now() - Q2 < P2 ? false : true;
  }
  function R2() {
    if (null !== O2) {
      var a = exports.unstable_now();
      Q2 = a;
      var b2 = true;
      try {
        b2 = O2(true, a);
      } finally {
        b2 ? S2() : (N2 = false, O2 = null);
      }
    } else
      N2 = false;
  }
  var S2;
  if ("function" === typeof F2)
    S2 = function() {
      F2(R2);
    };
  else if ("undefined" !== typeof MessageChannel) {
    var T2 = new MessageChannel(), U2 = T2.port2;
    T2.port1.onmessage = R2;
    S2 = function() {
      U2.postMessage(null);
    };
  } else
    S2 = function() {
      D2(R2, 0);
    };
  function I2(a) {
    O2 = a;
    N2 || (N2 = true, S2());
  }
  function K2(a, b2) {
    L2 = D2(function() {
      a(exports.unstable_now());
    }, b2);
  }
  exports.unstable_IdlePriority = 5;
  exports.unstable_ImmediatePriority = 1;
  exports.unstable_LowPriority = 4;
  exports.unstable_NormalPriority = 3;
  exports.unstable_Profiling = null;
  exports.unstable_UserBlockingPriority = 2;
  exports.unstable_cancelCallback = function(a) {
    a.callback = null;
  };
  exports.unstable_continueExecution = function() {
    A2 || z2 || (A2 = true, I2(J2));
  };
  exports.unstable_forceFrameRate = function(a) {
    0 > a || 125 < a ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : P2 = 0 < a ? Math.floor(1e3 / a) : 5;
  };
  exports.unstable_getCurrentPriorityLevel = function() {
    return y2;
  };
  exports.unstable_getFirstCallbackNode = function() {
    return h(r2);
  };
  exports.unstable_next = function(a) {
    switch (y2) {
      case 1:
      case 2:
      case 3:
        var b2 = 3;
        break;
      default:
        b2 = y2;
    }
    var c = y2;
    y2 = b2;
    try {
      return a();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_pauseExecution = function() {
  };
  exports.unstable_requestPaint = function() {
  };
  exports.unstable_runWithPriority = function(a, b2) {
    switch (a) {
      case 1:
      case 2:
      case 3:
      case 4:
      case 5:
        break;
      default:
        a = 3;
    }
    var c = y2;
    y2 = a;
    try {
      return b2();
    } finally {
      y2 = c;
    }
  };
  exports.unstable_scheduleCallback = function(a, b2, c) {
    var d = exports.unstable_now();
    "object" === typeof c && null !== c ? (c = c.delay, c = "number" === typeof c && 0 < c ? d + c : d) : c = d;
    switch (a) {
      case 1:
        var e = -1;
        break;
      case 2:
        e = 250;
        break;
      case 5:
        e = 1073741823;
        break;
      case 4:
        e = 1e4;
        break;
      default:
        e = 5e3;
    }
    e = c + e;
    a = { id: u2++, callback: b2, priorityLevel: a, startTime: c, expirationTime: e, sortIndex: -1 };
    c > d ? (a.sortIndex = c, f2(t2, a), null === h(r2) && a === h(t2) && (B2 ? (E2(L2), L2 = -1) : B2 = true, K2(H2, c - d))) : (a.sortIndex = e, f2(r2, a), A2 || z2 || (A2 = true, I2(J2)));
    return a;
  };
  exports.unstable_shouldYield = M2;
  exports.unstable_wrapCallback = function(a) {
    var b2 = y2;
    return function() {
      var c = y2;
      y2 = b2;
      try {
        return a.apply(this, arguments);
      } finally {
        y2 = c;
      }
    };
  };
})(scheduler_production_min);
(function(module) {
  {
    module.exports = scheduler_production_min;
  }
})(scheduler);
var aa = reactExports, ca = schedulerExports;
function p(a) {
  for (var b2 = "https://reactjs.org/docs/error-decoder.html?invariant=" + a, c = 1; c < arguments.length; c++)
    b2 += "&args[]=" + encodeURIComponent(arguments[c]);
  return "Minified React error #" + a + "; visit " + b2 + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
}
var da = /* @__PURE__ */ new Set(), ea = {};
function fa(a, b2) {
  ha(a, b2);
  ha(a + "Capture", b2);
}
function ha(a, b2) {
  ea[a] = b2;
  for (a = 0; a < b2.length; a++)
    da.add(b2[a]);
}
var ia = !("undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement), ja = Object.prototype.hasOwnProperty, ka = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, la = {}, ma = {};
function oa(a) {
  if (ja.call(ma, a))
    return true;
  if (ja.call(la, a))
    return false;
  if (ka.test(a))
    return ma[a] = true;
  la[a] = true;
  return false;
}
function pa(a, b2, c, d) {
  if (null !== c && 0 === c.type)
    return false;
  switch (typeof b2) {
    case "function":
    case "symbol":
      return true;
    case "boolean":
      if (d)
        return false;
      if (null !== c)
        return !c.acceptsBooleans;
      a = a.toLowerCase().slice(0, 5);
      return "data-" !== a && "aria-" !== a;
    default:
      return false;
  }
}
function qa(a, b2, c, d) {
  if (null === b2 || "undefined" === typeof b2 || pa(a, b2, c, d))
    return true;
  if (d)
    return false;
  if (null !== c)
    switch (c.type) {
      case 3:
        return !b2;
      case 4:
        return false === b2;
      case 5:
        return isNaN(b2);
      case 6:
        return isNaN(b2) || 1 > b2;
    }
  return false;
}
function v(a, b2, c, d, e, f2, g) {
  this.acceptsBooleans = 2 === b2 || 3 === b2 || 4 === b2;
  this.attributeName = d;
  this.attributeNamespace = e;
  this.mustUseProperty = c;
  this.propertyName = a;
  this.type = b2;
  this.sanitizeURL = f2;
  this.removeEmptyString = g;
}
var z = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a) {
  z[a] = new v(a, 0, false, a, null, false, false);
});
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(a) {
  var b2 = a[0];
  z[b2] = new v(b2, 1, false, a[1], null, false, false);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(a) {
  z[a] = new v(a, 2, false, a.toLowerCase(), null, false, false);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(a) {
  z[a] = new v(a, 2, false, a, null, false, false);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a) {
  z[a] = new v(a, 3, false, a.toLowerCase(), null, false, false);
});
["checked", "multiple", "muted", "selected"].forEach(function(a) {
  z[a] = new v(a, 3, true, a, null, false, false);
});
["capture", "download"].forEach(function(a) {
  z[a] = new v(a, 4, false, a, null, false, false);
});
["cols", "rows", "size", "span"].forEach(function(a) {
  z[a] = new v(a, 6, false, a, null, false, false);
});
["rowSpan", "start"].forEach(function(a) {
  z[a] = new v(a, 5, false, a.toLowerCase(), null, false, false);
});
var ra = /[\-:]([a-z])/g;
function sa(a) {
  return a[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a) {
  var b2 = a.replace(
    ra,
    sa
  );
  z[b2] = new v(b2, 1, false, a, null, false, false);
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z[b2] = new v(b2, 1, false, a, "http://www.w3.org/1999/xlink", false, false);
});
["xml:base", "xml:lang", "xml:space"].forEach(function(a) {
  var b2 = a.replace(ra, sa);
  z[b2] = new v(b2, 1, false, a, "http://www.w3.org/XML/1998/namespace", false, false);
});
["tabIndex", "crossOrigin"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, false, false);
});
z.xlinkHref = new v("xlinkHref", 1, false, "xlink:href", "http://www.w3.org/1999/xlink", true, false);
["src", "href", "action", "formAction"].forEach(function(a) {
  z[a] = new v(a, 1, false, a.toLowerCase(), null, true, true);
});
function ta(a, b2, c, d) {
  var e = z.hasOwnProperty(b2) ? z[b2] : null;
  if (null !== e ? 0 !== e.type : d || !(2 < b2.length) || "o" !== b2[0] && "O" !== b2[0] || "n" !== b2[1] && "N" !== b2[1])
    qa(b2, c, e, d) && (c = null), d || null === e ? oa(b2) && (null === c ? a.removeAttribute(b2) : a.setAttribute(b2, "" + c)) : e.mustUseProperty ? a[e.propertyName] = null === c ? 3 === e.type ? false : "" : c : (b2 = e.attributeName, d = e.attributeNamespace, null === c ? a.removeAttribute(b2) : (e = e.type, c = 3 === e || 4 === e && true === c ? "" : "" + c, d ? a.setAttributeNS(d, b2, c) : a.setAttribute(b2, c)));
}
var ua = aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, va = Symbol.for("react.element"), wa = Symbol.for("react.portal"), ya = Symbol.for("react.fragment"), za = Symbol.for("react.strict_mode"), Aa = Symbol.for("react.profiler"), Ba = Symbol.for("react.provider"), Ca = Symbol.for("react.context"), Da = Symbol.for("react.forward_ref"), Ea = Symbol.for("react.suspense"), Fa = Symbol.for("react.suspense_list"), Ga = Symbol.for("react.memo"), Ha = Symbol.for("react.lazy");
var Ia = Symbol.for("react.offscreen");
var Ja = Symbol.iterator;
function Ka(a) {
  if (null === a || "object" !== typeof a)
    return null;
  a = Ja && a[Ja] || a["@@iterator"];
  return "function" === typeof a ? a : null;
}
var A = Object.assign, La;
function Ma(a) {
  if (void 0 === La)
    try {
      throw Error();
    } catch (c) {
      var b2 = c.stack.trim().match(/\n( *(at )?)/);
      La = b2 && b2[1] || "";
    }
  return "\n" + La + a;
}
var Na = false;
function Oa(a, b2) {
  if (!a || Na)
    return "";
  Na = true;
  var c = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (b2)
      if (b2 = function() {
        throw Error();
      }, Object.defineProperty(b2.prototype, "props", { set: function() {
        throw Error();
      } }), "object" === typeof Reflect && Reflect.construct) {
        try {
          Reflect.construct(b2, []);
        } catch (l2) {
          var d = l2;
        }
        Reflect.construct(a, [], b2);
      } else {
        try {
          b2.call();
        } catch (l2) {
          d = l2;
        }
        a.call(b2.prototype);
      }
    else {
      try {
        throw Error();
      } catch (l2) {
        d = l2;
      }
      a();
    }
  } catch (l2) {
    if (l2 && d && "string" === typeof l2.stack) {
      for (var e = l2.stack.split("\n"), f2 = d.stack.split("\n"), g = e.length - 1, h = f2.length - 1; 1 <= g && 0 <= h && e[g] !== f2[h]; )
        h--;
      for (; 1 <= g && 0 <= h; g--, h--)
        if (e[g] !== f2[h]) {
          if (1 !== g || 1 !== h) {
            do
              if (g--, h--, 0 > h || e[g] !== f2[h]) {
                var k2 = "\n" + e[g].replace(" at new ", " at ");
                a.displayName && k2.includes("<anonymous>") && (k2 = k2.replace("<anonymous>", a.displayName));
                return k2;
              }
            while (1 <= g && 0 <= h);
          }
          break;
        }
    }
  } finally {
    Na = false, Error.prepareStackTrace = c;
  }
  return (a = a ? a.displayName || a.name : "") ? Ma(a) : "";
}
function Pa(a) {
  switch (a.tag) {
    case 5:
      return Ma(a.type);
    case 16:
      return Ma("Lazy");
    case 13:
      return Ma("Suspense");
    case 19:
      return Ma("SuspenseList");
    case 0:
    case 2:
    case 15:
      return a = Oa(a.type, false), a;
    case 11:
      return a = Oa(a.type.render, false), a;
    case 1:
      return a = Oa(a.type, true), a;
    default:
      return "";
  }
}
function Qa(a) {
  if (null == a)
    return null;
  if ("function" === typeof a)
    return a.displayName || a.name || null;
  if ("string" === typeof a)
    return a;
  switch (a) {
    case ya:
      return "Fragment";
    case wa:
      return "Portal";
    case Aa:
      return "Profiler";
    case za:
      return "StrictMode";
    case Ea:
      return "Suspense";
    case Fa:
      return "SuspenseList";
  }
  if ("object" === typeof a)
    switch (a.$$typeof) {
      case Ca:
        return (a.displayName || "Context") + ".Consumer";
      case Ba:
        return (a._context.displayName || "Context") + ".Provider";
      case Da:
        var b2 = a.render;
        a = a.displayName;
        a || (a = b2.displayName || b2.name || "", a = "" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
        return a;
      case Ga:
        return b2 = a.displayName || null, null !== b2 ? b2 : Qa(a.type) || "Memo";
      case Ha:
        b2 = a._payload;
        a = a._init;
        try {
          return Qa(a(b2));
        } catch (c) {
        }
    }
  return null;
}
function Ra(a) {
  var b2 = a.type;
  switch (a.tag) {
    case 24:
      return "Cache";
    case 9:
      return (b2.displayName || "Context") + ".Consumer";
    case 10:
      return (b2._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return a = b2.render, a = a.displayName || a.name || "", b2.displayName || ("" !== a ? "ForwardRef(" + a + ")" : "ForwardRef");
    case 7:
      return "Fragment";
    case 5:
      return b2;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Qa(b2);
    case 8:
      return b2 === za ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if ("function" === typeof b2)
        return b2.displayName || b2.name || null;
      if ("string" === typeof b2)
        return b2;
  }
  return null;
}
function Sa(a) {
  switch (typeof a) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return a;
    case "object":
      return a;
    default:
      return "";
  }
}
function Ta(a) {
  var b2 = a.type;
  return (a = a.nodeName) && "input" === a.toLowerCase() && ("checkbox" === b2 || "radio" === b2);
}
function Ua(a) {
  var b2 = Ta(a) ? "checked" : "value", c = Object.getOwnPropertyDescriptor(a.constructor.prototype, b2), d = "" + a[b2];
  if (!a.hasOwnProperty(b2) && "undefined" !== typeof c && "function" === typeof c.get && "function" === typeof c.set) {
    var e = c.get, f2 = c.set;
    Object.defineProperty(a, b2, { configurable: true, get: function() {
      return e.call(this);
    }, set: function(a2) {
      d = "" + a2;
      f2.call(this, a2);
    } });
    Object.defineProperty(a, b2, { enumerable: c.enumerable });
    return { getValue: function() {
      return d;
    }, setValue: function(a2) {
      d = "" + a2;
    }, stopTracking: function() {
      a._valueTracker = null;
      delete a[b2];
    } };
  }
}
function Va(a) {
  a._valueTracker || (a._valueTracker = Ua(a));
}
function Wa(a) {
  if (!a)
    return false;
  var b2 = a._valueTracker;
  if (!b2)
    return true;
  var c = b2.getValue();
  var d = "";
  a && (d = Ta(a) ? a.checked ? "true" : "false" : a.value);
  a = d;
  return a !== c ? (b2.setValue(a), true) : false;
}
function Xa(a) {
  a = a || ("undefined" !== typeof document ? document : void 0);
  if ("undefined" === typeof a)
    return null;
  try {
    return a.activeElement || a.body;
  } catch (b2) {
    return a.body;
  }
}
function Ya(a, b2) {
  var c = b2.checked;
  return A({}, b2, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: null != c ? c : a._wrapperState.initialChecked });
}
function Za(a, b2) {
  var c = null == b2.defaultValue ? "" : b2.defaultValue, d = null != b2.checked ? b2.checked : b2.defaultChecked;
  c = Sa(null != b2.value ? b2.value : c);
  a._wrapperState = { initialChecked: d, initialValue: c, controlled: "checkbox" === b2.type || "radio" === b2.type ? null != b2.checked : null != b2.value };
}
function ab(a, b2) {
  b2 = b2.checked;
  null != b2 && ta(a, "checked", b2, false);
}
function bb(a, b2) {
  ab(a, b2);
  var c = Sa(b2.value), d = b2.type;
  if (null != c)
    if ("number" === d) {
      if (0 === c && "" === a.value || a.value != c)
        a.value = "" + c;
    } else
      a.value !== "" + c && (a.value = "" + c);
  else if ("submit" === d || "reset" === d) {
    a.removeAttribute("value");
    return;
  }
  b2.hasOwnProperty("value") ? cb(a, b2.type, c) : b2.hasOwnProperty("defaultValue") && cb(a, b2.type, Sa(b2.defaultValue));
  null == b2.checked && null != b2.defaultChecked && (a.defaultChecked = !!b2.defaultChecked);
}
function db(a, b2, c) {
  if (b2.hasOwnProperty("value") || b2.hasOwnProperty("defaultValue")) {
    var d = b2.type;
    if (!("submit" !== d && "reset" !== d || void 0 !== b2.value && null !== b2.value))
      return;
    b2 = "" + a._wrapperState.initialValue;
    c || b2 === a.value || (a.value = b2);
    a.defaultValue = b2;
  }
  c = a.name;
  "" !== c && (a.name = "");
  a.defaultChecked = !!a._wrapperState.initialChecked;
  "" !== c && (a.name = c);
}
function cb(a, b2, c) {
  if ("number" !== b2 || Xa(a.ownerDocument) !== a)
    null == c ? a.defaultValue = "" + a._wrapperState.initialValue : a.defaultValue !== "" + c && (a.defaultValue = "" + c);
}
var eb = Array.isArray;
function fb(a, b2, c, d) {
  a = a.options;
  if (b2) {
    b2 = {};
    for (var e = 0; e < c.length; e++)
      b2["$" + c[e]] = true;
    for (c = 0; c < a.length; c++)
      e = b2.hasOwnProperty("$" + a[c].value), a[c].selected !== e && (a[c].selected = e), e && d && (a[c].defaultSelected = true);
  } else {
    c = "" + Sa(c);
    b2 = null;
    for (e = 0; e < a.length; e++) {
      if (a[e].value === c) {
        a[e].selected = true;
        d && (a[e].defaultSelected = true);
        return;
      }
      null !== b2 || a[e].disabled || (b2 = a[e]);
    }
    null !== b2 && (b2.selected = true);
  }
}
function gb(a, b2) {
  if (null != b2.dangerouslySetInnerHTML)
    throw Error(p(91));
  return A({}, b2, { value: void 0, defaultValue: void 0, children: "" + a._wrapperState.initialValue });
}
function hb(a, b2) {
  var c = b2.value;
  if (null == c) {
    c = b2.children;
    b2 = b2.defaultValue;
    if (null != c) {
      if (null != b2)
        throw Error(p(92));
      if (eb(c)) {
        if (1 < c.length)
          throw Error(p(93));
        c = c[0];
      }
      b2 = c;
    }
    null == b2 && (b2 = "");
    c = b2;
  }
  a._wrapperState = { initialValue: Sa(c) };
}
function ib(a, b2) {
  var c = Sa(b2.value), d = Sa(b2.defaultValue);
  null != c && (c = "" + c, c !== a.value && (a.value = c), null == b2.defaultValue && a.defaultValue !== c && (a.defaultValue = c));
  null != d && (a.defaultValue = "" + d);
}
function jb(a) {
  var b2 = a.textContent;
  b2 === a._wrapperState.initialValue && "" !== b2 && null !== b2 && (a.value = b2);
}
function kb(a) {
  switch (a) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function lb(a, b2) {
  return null == a || "http://www.w3.org/1999/xhtml" === a ? kb(b2) : "http://www.w3.org/2000/svg" === a && "foreignObject" === b2 ? "http://www.w3.org/1999/xhtml" : a;
}
var mb, nb = function(a) {
  return "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(b2, c, d, e) {
    MSApp.execUnsafeLocalFunction(function() {
      return a(b2, c, d, e);
    });
  } : a;
}(function(a, b2) {
  if ("http://www.w3.org/2000/svg" !== a.namespaceURI || "innerHTML" in a)
    a.innerHTML = b2;
  else {
    mb = mb || document.createElement("div");
    mb.innerHTML = "<svg>" + b2.valueOf().toString() + "</svg>";
    for (b2 = mb.firstChild; a.firstChild; )
      a.removeChild(a.firstChild);
    for (; b2.firstChild; )
      a.appendChild(b2.firstChild);
  }
});
function ob(a, b2) {
  if (b2) {
    var c = a.firstChild;
    if (c && c === a.lastChild && 3 === c.nodeType) {
      c.nodeValue = b2;
      return;
    }
  }
  a.textContent = b2;
}
var pb = {
  animationIterationCount: true,
  aspectRatio: true,
  borderImageOutset: true,
  borderImageSlice: true,
  borderImageWidth: true,
  boxFlex: true,
  boxFlexGroup: true,
  boxOrdinalGroup: true,
  columnCount: true,
  columns: true,
  flex: true,
  flexGrow: true,
  flexPositive: true,
  flexShrink: true,
  flexNegative: true,
  flexOrder: true,
  gridArea: true,
  gridRow: true,
  gridRowEnd: true,
  gridRowSpan: true,
  gridRowStart: true,
  gridColumn: true,
  gridColumnEnd: true,
  gridColumnSpan: true,
  gridColumnStart: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  tabSize: true,
  widows: true,
  zIndex: true,
  zoom: true,
  fillOpacity: true,
  floodOpacity: true,
  stopOpacity: true,
  strokeDasharray: true,
  strokeDashoffset: true,
  strokeMiterlimit: true,
  strokeOpacity: true,
  strokeWidth: true
}, qb = ["Webkit", "ms", "Moz", "O"];
Object.keys(pb).forEach(function(a) {
  qb.forEach(function(b2) {
    b2 = b2 + a.charAt(0).toUpperCase() + a.substring(1);
    pb[b2] = pb[a];
  });
});
function rb(a, b2, c) {
  return null == b2 || "boolean" === typeof b2 || "" === b2 ? "" : c || "number" !== typeof b2 || 0 === b2 || pb.hasOwnProperty(a) && pb[a] ? ("" + b2).trim() : b2 + "px";
}
function sb(a, b2) {
  a = a.style;
  for (var c in b2)
    if (b2.hasOwnProperty(c)) {
      var d = 0 === c.indexOf("--"), e = rb(c, b2[c], d);
      "float" === c && (c = "cssFloat");
      d ? a.setProperty(c, e) : a[c] = e;
    }
}
var tb = A({ menuitem: true }, { area: true, base: true, br: true, col: true, embed: true, hr: true, img: true, input: true, keygen: true, link: true, meta: true, param: true, source: true, track: true, wbr: true });
function ub(a, b2) {
  if (b2) {
    if (tb[a] && (null != b2.children || null != b2.dangerouslySetInnerHTML))
      throw Error(p(137, a));
    if (null != b2.dangerouslySetInnerHTML) {
      if (null != b2.children)
        throw Error(p(60));
      if ("object" !== typeof b2.dangerouslySetInnerHTML || !("__html" in b2.dangerouslySetInnerHTML))
        throw Error(p(61));
    }
    if (null != b2.style && "object" !== typeof b2.style)
      throw Error(p(62));
  }
}
function vb(a, b2) {
  if (-1 === a.indexOf("-"))
    return "string" === typeof b2.is;
  switch (a) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return false;
    default:
      return true;
  }
}
var wb = null;
function xb(a) {
  a = a.target || a.srcElement || window;
  a.correspondingUseElement && (a = a.correspondingUseElement);
  return 3 === a.nodeType ? a.parentNode : a;
}
var yb = null, zb = null, Ab = null;
function Bb(a) {
  if (a = Cb(a)) {
    if ("function" !== typeof yb)
      throw Error(p(280));
    var b2 = a.stateNode;
    b2 && (b2 = Db(b2), yb(a.stateNode, a.type, b2));
  }
}
function Eb(a) {
  zb ? Ab ? Ab.push(a) : Ab = [a] : zb = a;
}
function Fb() {
  if (zb) {
    var a = zb, b2 = Ab;
    Ab = zb = null;
    Bb(a);
    if (b2)
      for (a = 0; a < b2.length; a++)
        Bb(b2[a]);
  }
}
function Gb(a, b2) {
  return a(b2);
}
function Hb() {
}
var Ib = false;
function Jb(a, b2, c) {
  if (Ib)
    return a(b2, c);
  Ib = true;
  try {
    return Gb(a, b2, c);
  } finally {
    if (Ib = false, null !== zb || null !== Ab)
      Hb(), Fb();
  }
}
function Kb(a, b2) {
  var c = a.stateNode;
  if (null === c)
    return null;
  var d = Db(c);
  if (null === d)
    return null;
  c = d[b2];
  a:
    switch (b2) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (d = !d.disabled) || (a = a.type, d = !("button" === a || "input" === a || "select" === a || "textarea" === a));
        a = !d;
        break a;
      default:
        a = false;
    }
  if (a)
    return null;
  if (c && "function" !== typeof c)
    throw Error(p(231, b2, typeof c));
  return c;
}
var Lb = false;
if (ia)
  try {
    var Mb = {};
    Object.defineProperty(Mb, "passive", { get: function() {
      Lb = true;
    } });
    window.addEventListener("test", Mb, Mb);
    window.removeEventListener("test", Mb, Mb);
  } catch (a) {
    Lb = false;
  }
function Nb(a, b2, c, d, e, f2, g, h, k2) {
  var l2 = Array.prototype.slice.call(arguments, 3);
  try {
    b2.apply(c, l2);
  } catch (m2) {
    this.onError(m2);
  }
}
var Ob = false, Pb = null, Qb = false, Rb = null, Sb = { onError: function(a) {
  Ob = true;
  Pb = a;
} };
function Tb(a, b2, c, d, e, f2, g, h, k2) {
  Ob = false;
  Pb = null;
  Nb.apply(Sb, arguments);
}
function Ub(a, b2, c, d, e, f2, g, h, k2) {
  Tb.apply(this, arguments);
  if (Ob) {
    if (Ob) {
      var l2 = Pb;
      Ob = false;
      Pb = null;
    } else
      throw Error(p(198));
    Qb || (Qb = true, Rb = l2);
  }
}
function Vb(a) {
  var b2 = a, c = a;
  if (a.alternate)
    for (; b2.return; )
      b2 = b2.return;
  else {
    a = b2;
    do
      b2 = a, 0 !== (b2.flags & 4098) && (c = b2.return), a = b2.return;
    while (a);
  }
  return 3 === b2.tag ? c : null;
}
function Wb(a) {
  if (13 === a.tag) {
    var b2 = a.memoizedState;
    null === b2 && (a = a.alternate, null !== a && (b2 = a.memoizedState));
    if (null !== b2)
      return b2.dehydrated;
  }
  return null;
}
function Xb(a) {
  if (Vb(a) !== a)
    throw Error(p(188));
}
function Yb(a) {
  var b2 = a.alternate;
  if (!b2) {
    b2 = Vb(a);
    if (null === b2)
      throw Error(p(188));
    return b2 !== a ? null : a;
  }
  for (var c = a, d = b2; ; ) {
    var e = c.return;
    if (null === e)
      break;
    var f2 = e.alternate;
    if (null === f2) {
      d = e.return;
      if (null !== d) {
        c = d;
        continue;
      }
      break;
    }
    if (e.child === f2.child) {
      for (f2 = e.child; f2; ) {
        if (f2 === c)
          return Xb(e), a;
        if (f2 === d)
          return Xb(e), b2;
        f2 = f2.sibling;
      }
      throw Error(p(188));
    }
    if (c.return !== d.return)
      c = e, d = f2;
    else {
      for (var g = false, h = e.child; h; ) {
        if (h === c) {
          g = true;
          c = e;
          d = f2;
          break;
        }
        if (h === d) {
          g = true;
          d = e;
          c = f2;
          break;
        }
        h = h.sibling;
      }
      if (!g) {
        for (h = f2.child; h; ) {
          if (h === c) {
            g = true;
            c = f2;
            d = e;
            break;
          }
          if (h === d) {
            g = true;
            d = f2;
            c = e;
            break;
          }
          h = h.sibling;
        }
        if (!g)
          throw Error(p(189));
      }
    }
    if (c.alternate !== d)
      throw Error(p(190));
  }
  if (3 !== c.tag)
    throw Error(p(188));
  return c.stateNode.current === c ? a : b2;
}
function Zb(a) {
  a = Yb(a);
  return null !== a ? $b(a) : null;
}
function $b(a) {
  if (5 === a.tag || 6 === a.tag)
    return a;
  for (a = a.child; null !== a; ) {
    var b2 = $b(a);
    if (null !== b2)
      return b2;
    a = a.sibling;
  }
  return null;
}
var ac = ca.unstable_scheduleCallback, bc = ca.unstable_cancelCallback, cc = ca.unstable_shouldYield, dc = ca.unstable_requestPaint, B = ca.unstable_now, ec = ca.unstable_getCurrentPriorityLevel, fc = ca.unstable_ImmediatePriority, gc = ca.unstable_UserBlockingPriority, hc = ca.unstable_NormalPriority, ic = ca.unstable_LowPriority, jc = ca.unstable_IdlePriority, kc = null, lc = null;
function mc(a) {
  if (lc && "function" === typeof lc.onCommitFiberRoot)
    try {
      lc.onCommitFiberRoot(kc, a, void 0, 128 === (a.current.flags & 128));
    } catch (b2) {
    }
}
var oc = Math.clz32 ? Math.clz32 : nc, pc = Math.log, qc = Math.LN2;
function nc(a) {
  a >>>= 0;
  return 0 === a ? 32 : 31 - (pc(a) / qc | 0) | 0;
}
var rc = 64, sc = 4194304;
function tc(a) {
  switch (a & -a) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return a & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return a & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return a;
  }
}
function uc(a, b2) {
  var c = a.pendingLanes;
  if (0 === c)
    return 0;
  var d = 0, e = a.suspendedLanes, f2 = a.pingedLanes, g = c & 268435455;
  if (0 !== g) {
    var h = g & ~e;
    0 !== h ? d = tc(h) : (f2 &= g, 0 !== f2 && (d = tc(f2)));
  } else
    g = c & ~e, 0 !== g ? d = tc(g) : 0 !== f2 && (d = tc(f2));
  if (0 === d)
    return 0;
  if (0 !== b2 && b2 !== d && 0 === (b2 & e) && (e = d & -d, f2 = b2 & -b2, e >= f2 || 16 === e && 0 !== (f2 & 4194240)))
    return b2;
  0 !== (d & 4) && (d |= c & 16);
  b2 = a.entangledLanes;
  if (0 !== b2)
    for (a = a.entanglements, b2 &= d; 0 < b2; )
      c = 31 - oc(b2), e = 1 << c, d |= a[c], b2 &= ~e;
  return d;
}
function vc(a, b2) {
  switch (a) {
    case 1:
    case 2:
    case 4:
      return b2 + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return b2 + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function wc(a, b2) {
  for (var c = a.suspendedLanes, d = a.pingedLanes, e = a.expirationTimes, f2 = a.pendingLanes; 0 < f2; ) {
    var g = 31 - oc(f2), h = 1 << g, k2 = e[g];
    if (-1 === k2) {
      if (0 === (h & c) || 0 !== (h & d))
        e[g] = vc(h, b2);
    } else
      k2 <= b2 && (a.expiredLanes |= h);
    f2 &= ~h;
  }
}
function xc(a) {
  a = a.pendingLanes & -1073741825;
  return 0 !== a ? a : a & 1073741824 ? 1073741824 : 0;
}
function yc() {
  var a = rc;
  rc <<= 1;
  0 === (rc & 4194240) && (rc = 64);
  return a;
}
function zc(a) {
  for (var b2 = [], c = 0; 31 > c; c++)
    b2.push(a);
  return b2;
}
function Ac(a, b2, c) {
  a.pendingLanes |= b2;
  536870912 !== b2 && (a.suspendedLanes = 0, a.pingedLanes = 0);
  a = a.eventTimes;
  b2 = 31 - oc(b2);
  a[b2] = c;
}
function Bc(a, b2) {
  var c = a.pendingLanes & ~b2;
  a.pendingLanes = b2;
  a.suspendedLanes = 0;
  a.pingedLanes = 0;
  a.expiredLanes &= b2;
  a.mutableReadLanes &= b2;
  a.entangledLanes &= b2;
  b2 = a.entanglements;
  var d = a.eventTimes;
  for (a = a.expirationTimes; 0 < c; ) {
    var e = 31 - oc(c), f2 = 1 << e;
    b2[e] = 0;
    d[e] = -1;
    a[e] = -1;
    c &= ~f2;
  }
}
function Cc(a, b2) {
  var c = a.entangledLanes |= b2;
  for (a = a.entanglements; c; ) {
    var d = 31 - oc(c), e = 1 << d;
    e & b2 | a[d] & b2 && (a[d] |= b2);
    c &= ~e;
  }
}
var C = 0;
function Dc(a) {
  a &= -a;
  return 1 < a ? 4 < a ? 0 !== (a & 268435455) ? 16 : 536870912 : 4 : 1;
}
var Ec, Fc, Gc, Hc, Ic, Jc = false, Kc = [], Lc = null, Mc = null, Nc = null, Oc = /* @__PURE__ */ new Map(), Pc = /* @__PURE__ */ new Map(), Qc = [], Rc = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a, b2) {
  switch (a) {
    case "focusin":
    case "focusout":
      Lc = null;
      break;
    case "dragenter":
    case "dragleave":
      Mc = null;
      break;
    case "mouseover":
    case "mouseout":
      Nc = null;
      break;
    case "pointerover":
    case "pointerout":
      Oc.delete(b2.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Pc.delete(b2.pointerId);
  }
}
function Tc(a, b2, c, d, e, f2) {
  if (null === a || a.nativeEvent !== f2)
    return a = { blockedOn: b2, domEventName: c, eventSystemFlags: d, nativeEvent: f2, targetContainers: [e] }, null !== b2 && (b2 = Cb(b2), null !== b2 && Fc(b2)), a;
  a.eventSystemFlags |= d;
  b2 = a.targetContainers;
  null !== e && -1 === b2.indexOf(e) && b2.push(e);
  return a;
}
function Uc(a, b2, c, d, e) {
  switch (b2) {
    case "focusin":
      return Lc = Tc(Lc, a, b2, c, d, e), true;
    case "dragenter":
      return Mc = Tc(Mc, a, b2, c, d, e), true;
    case "mouseover":
      return Nc = Tc(Nc, a, b2, c, d, e), true;
    case "pointerover":
      var f2 = e.pointerId;
      Oc.set(f2, Tc(Oc.get(f2) || null, a, b2, c, d, e));
      return true;
    case "gotpointercapture":
      return f2 = e.pointerId, Pc.set(f2, Tc(Pc.get(f2) || null, a, b2, c, d, e)), true;
  }
  return false;
}
function Vc(a) {
  var b2 = Wc(a.target);
  if (null !== b2) {
    var c = Vb(b2);
    if (null !== c) {
      if (b2 = c.tag, 13 === b2) {
        if (b2 = Wb(c), null !== b2) {
          a.blockedOn = b2;
          Ic(a.priority, function() {
            Gc(c);
          });
          return;
        }
      } else if (3 === b2 && c.stateNode.current.memoizedState.isDehydrated) {
        a.blockedOn = 3 === c.tag ? c.stateNode.containerInfo : null;
        return;
      }
    }
  }
  a.blockedOn = null;
}
function Xc(a) {
  if (null !== a.blockedOn)
    return false;
  for (var b2 = a.targetContainers; 0 < b2.length; ) {
    var c = Yc(a.domEventName, a.eventSystemFlags, b2[0], a.nativeEvent);
    if (null === c) {
      c = a.nativeEvent;
      var d = new c.constructor(c.type, c);
      wb = d;
      c.target.dispatchEvent(d);
      wb = null;
    } else
      return b2 = Cb(c), null !== b2 && Fc(b2), a.blockedOn = c, false;
    b2.shift();
  }
  return true;
}
function Zc(a, b2, c) {
  Xc(a) && c.delete(b2);
}
function $c() {
  Jc = false;
  null !== Lc && Xc(Lc) && (Lc = null);
  null !== Mc && Xc(Mc) && (Mc = null);
  null !== Nc && Xc(Nc) && (Nc = null);
  Oc.forEach(Zc);
  Pc.forEach(Zc);
}
function ad(a, b2) {
  a.blockedOn === b2 && (a.blockedOn = null, Jc || (Jc = true, ca.unstable_scheduleCallback(ca.unstable_NormalPriority, $c)));
}
function bd(a) {
  function b2(b3) {
    return ad(b3, a);
  }
  if (0 < Kc.length) {
    ad(Kc[0], a);
    for (var c = 1; c < Kc.length; c++) {
      var d = Kc[c];
      d.blockedOn === a && (d.blockedOn = null);
    }
  }
  null !== Lc && ad(Lc, a);
  null !== Mc && ad(Mc, a);
  null !== Nc && ad(Nc, a);
  Oc.forEach(b2);
  Pc.forEach(b2);
  for (c = 0; c < Qc.length; c++)
    d = Qc[c], d.blockedOn === a && (d.blockedOn = null);
  for (; 0 < Qc.length && (c = Qc[0], null === c.blockedOn); )
    Vc(c), null === c.blockedOn && Qc.shift();
}
var cd = ua.ReactCurrentBatchConfig, dd = true;
function ed(a, b2, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 1, fd(a, b2, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function gd(a, b2, c, d) {
  var e = C, f2 = cd.transition;
  cd.transition = null;
  try {
    C = 4, fd(a, b2, c, d);
  } finally {
    C = e, cd.transition = f2;
  }
}
function fd(a, b2, c, d) {
  if (dd) {
    var e = Yc(a, b2, c, d);
    if (null === e)
      hd(a, b2, d, id$1, c), Sc(a, d);
    else if (Uc(e, a, b2, c, d))
      d.stopPropagation();
    else if (Sc(a, d), b2 & 4 && -1 < Rc.indexOf(a)) {
      for (; null !== e; ) {
        var f2 = Cb(e);
        null !== f2 && Ec(f2);
        f2 = Yc(a, b2, c, d);
        null === f2 && hd(a, b2, d, id$1, c);
        if (f2 === e)
          break;
        e = f2;
      }
      null !== e && d.stopPropagation();
    } else
      hd(a, b2, d, null, c);
  }
}
var id$1 = null;
function Yc(a, b2, c, d) {
  id$1 = null;
  a = xb(d);
  a = Wc(a);
  if (null !== a)
    if (b2 = Vb(a), null === b2)
      a = null;
    else if (c = b2.tag, 13 === c) {
      a = Wb(b2);
      if (null !== a)
        return a;
      a = null;
    } else if (3 === c) {
      if (b2.stateNode.current.memoizedState.isDehydrated)
        return 3 === b2.tag ? b2.stateNode.containerInfo : null;
      a = null;
    } else
      b2 !== a && (a = null);
  id$1 = a;
  return null;
}
function jd(a) {
  switch (a) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (ec()) {
        case fc:
          return 1;
        case gc:
          return 4;
        case hc:
        case ic:
          return 16;
        case jc:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var kd = null, ld = null, md = null;
function nd() {
  if (md)
    return md;
  var a, b2 = ld, c = b2.length, d, e = "value" in kd ? kd.value : kd.textContent, f2 = e.length;
  for (a = 0; a < c && b2[a] === e[a]; a++)
    ;
  var g = c - a;
  for (d = 1; d <= g && b2[c - d] === e[f2 - d]; d++)
    ;
  return md = e.slice(a, 1 < d ? 1 - d : void 0);
}
function od(a) {
  var b2 = a.keyCode;
  "charCode" in a ? (a = a.charCode, 0 === a && 13 === b2 && (a = 13)) : a = b2;
  10 === a && (a = 13);
  return 32 <= a || 13 === a ? a : 0;
}
function pd() {
  return true;
}
function qd() {
  return false;
}
function rd(a) {
  function b2(b3, d, e, f2, g) {
    this._reactName = b3;
    this._targetInst = e;
    this.type = d;
    this.nativeEvent = f2;
    this.target = g;
    this.currentTarget = null;
    for (var c in a)
      a.hasOwnProperty(c) && (b3 = a[c], this[c] = b3 ? b3(f2) : f2[c]);
    this.isDefaultPrevented = (null != f2.defaultPrevented ? f2.defaultPrevented : false === f2.returnValue) ? pd : qd;
    this.isPropagationStopped = qd;
    return this;
  }
  A(b2.prototype, { preventDefault: function() {
    this.defaultPrevented = true;
    var a2 = this.nativeEvent;
    a2 && (a2.preventDefault ? a2.preventDefault() : "unknown" !== typeof a2.returnValue && (a2.returnValue = false), this.isDefaultPrevented = pd);
  }, stopPropagation: function() {
    var a2 = this.nativeEvent;
    a2 && (a2.stopPropagation ? a2.stopPropagation() : "unknown" !== typeof a2.cancelBubble && (a2.cancelBubble = true), this.isPropagationStopped = pd);
  }, persist: function() {
  }, isPersistent: pd });
  return b2;
}
var sd = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(a) {
  return a.timeStamp || Date.now();
}, defaultPrevented: 0, isTrusted: 0 }, td = rd(sd), ud = A({}, sd, { view: 0, detail: 0 }), vd = rd(ud), wd, xd, yd, Ad = A({}, ud, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: zd, button: 0, buttons: 0, relatedTarget: function(a) {
  return void 0 === a.relatedTarget ? a.fromElement === a.srcElement ? a.toElement : a.fromElement : a.relatedTarget;
}, movementX: function(a) {
  if ("movementX" in a)
    return a.movementX;
  a !== yd && (yd && "mousemove" === a.type ? (wd = a.screenX - yd.screenX, xd = a.screenY - yd.screenY) : xd = wd = 0, yd = a);
  return wd;
}, movementY: function(a) {
  return "movementY" in a ? a.movementY : xd;
} }), Bd = rd(Ad), Cd = A({}, Ad, { dataTransfer: 0 }), Dd = rd(Cd), Ed = A({}, ud, { relatedTarget: 0 }), Fd = rd(Ed), Gd = A({}, sd, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Hd = rd(Gd), Id = A({}, sd, { clipboardData: function(a) {
  return "clipboardData" in a ? a.clipboardData : window.clipboardData;
} }), Jd = rd(Id), Kd = A({}, sd, { data: 0 }), Ld = rd(Kd), Md = {
  Esc: "Escape",
  Spacebar: " ",
  Left: "ArrowLeft",
  Up: "ArrowUp",
  Right: "ArrowRight",
  Down: "ArrowDown",
  Del: "Delete",
  Win: "OS",
  Menu: "ContextMenu",
  Apps: "ContextMenu",
  Scroll: "ScrollLock",
  MozPrintableKey: "Unidentified"
}, Nd = {
  8: "Backspace",
  9: "Tab",
  12: "Clear",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  19: "Pause",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  45: "Insert",
  46: "Delete",
  112: "F1",
  113: "F2",
  114: "F3",
  115: "F4",
  116: "F5",
  117: "F6",
  118: "F7",
  119: "F8",
  120: "F9",
  121: "F10",
  122: "F11",
  123: "F12",
  144: "NumLock",
  145: "ScrollLock",
  224: "Meta"
}, Od = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function Pd(a) {
  var b2 = this.nativeEvent;
  return b2.getModifierState ? b2.getModifierState(a) : (a = Od[a]) ? !!b2[a] : false;
}
function zd() {
  return Pd;
}
var Qd = A({}, ud, { key: function(a) {
  if (a.key) {
    var b2 = Md[a.key] || a.key;
    if ("Unidentified" !== b2)
      return b2;
  }
  return "keypress" === a.type ? (a = od(a), 13 === a ? "Enter" : String.fromCharCode(a)) : "keydown" === a.type || "keyup" === a.type ? Nd[a.keyCode] || "Unidentified" : "";
}, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: zd, charCode: function(a) {
  return "keypress" === a.type ? od(a) : 0;
}, keyCode: function(a) {
  return "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
}, which: function(a) {
  return "keypress" === a.type ? od(a) : "keydown" === a.type || "keyup" === a.type ? a.keyCode : 0;
} }), Rd = rd(Qd), Sd = A({}, Ad, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Td = rd(Sd), Ud = A({}, ud, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: zd }), Vd = rd(Ud), Wd = A({}, sd, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xd = rd(Wd), Yd = A({}, Ad, {
  deltaX: function(a) {
    return "deltaX" in a ? a.deltaX : "wheelDeltaX" in a ? -a.wheelDeltaX : 0;
  },
  deltaY: function(a) {
    return "deltaY" in a ? a.deltaY : "wheelDeltaY" in a ? -a.wheelDeltaY : "wheelDelta" in a ? -a.wheelDelta : 0;
  },
  deltaZ: 0,
  deltaMode: 0
}), Zd = rd(Yd), $d = [9, 13, 27, 32], ae = ia && "CompositionEvent" in window, be = null;
ia && "documentMode" in document && (be = document.documentMode);
var ce = ia && "TextEvent" in window && !be, de = ia && (!ae || be && 8 < be && 11 >= be), ee = String.fromCharCode(32), fe = false;
function ge(a, b2) {
  switch (a) {
    case "keyup":
      return -1 !== $d.indexOf(b2.keyCode);
    case "keydown":
      return 229 !== b2.keyCode;
    case "keypress":
    case "mousedown":
    case "focusout":
      return true;
    default:
      return false;
  }
}
function he(a) {
  a = a.detail;
  return "object" === typeof a && "data" in a ? a.data : null;
}
var ie = false;
function je(a, b2) {
  switch (a) {
    case "compositionend":
      return he(b2);
    case "keypress":
      if (32 !== b2.which)
        return null;
      fe = true;
      return ee;
    case "textInput":
      return a = b2.data, a === ee && fe ? null : a;
    default:
      return null;
  }
}
function ke(a, b2) {
  if (ie)
    return "compositionend" === a || !ae && ge(a, b2) ? (a = nd(), md = ld = kd = null, ie = false, a) : null;
  switch (a) {
    case "paste":
      return null;
    case "keypress":
      if (!(b2.ctrlKey || b2.altKey || b2.metaKey) || b2.ctrlKey && b2.altKey) {
        if (b2.char && 1 < b2.char.length)
          return b2.char;
        if (b2.which)
          return String.fromCharCode(b2.which);
      }
      return null;
    case "compositionend":
      return de && "ko" !== b2.locale ? null : b2.data;
    default:
      return null;
  }
}
var le = { color: true, date: true, datetime: true, "datetime-local": true, email: true, month: true, number: true, password: true, range: true, search: true, tel: true, text: true, time: true, url: true, week: true };
function me(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return "input" === b2 ? !!le[a.type] : "textarea" === b2 ? true : false;
}
function ne(a, b2, c, d) {
  Eb(d);
  b2 = oe(b2, "onChange");
  0 < b2.length && (c = new td("onChange", "change", null, c, d), a.push({ event: c, listeners: b2 }));
}
var pe = null, qe = null;
function re(a) {
  se(a, 0);
}
function te(a) {
  var b2 = ue(a);
  if (Wa(b2))
    return a;
}
function ve(a, b2) {
  if ("change" === a)
    return b2;
}
var we = false;
if (ia) {
  var xe;
  if (ia) {
    var ye = "oninput" in document;
    if (!ye) {
      var ze = document.createElement("div");
      ze.setAttribute("oninput", "return;");
      ye = "function" === typeof ze.oninput;
    }
    xe = ye;
  } else
    xe = false;
  we = xe && (!document.documentMode || 9 < document.documentMode);
}
function Ae() {
  pe && (pe.detachEvent("onpropertychange", Be), qe = pe = null);
}
function Be(a) {
  if ("value" === a.propertyName && te(qe)) {
    var b2 = [];
    ne(b2, qe, a, xb(a));
    Jb(re, b2);
  }
}
function Ce(a, b2, c) {
  "focusin" === a ? (Ae(), pe = b2, qe = c, pe.attachEvent("onpropertychange", Be)) : "focusout" === a && Ae();
}
function De(a) {
  if ("selectionchange" === a || "keyup" === a || "keydown" === a)
    return te(qe);
}
function Ee(a, b2) {
  if ("click" === a)
    return te(b2);
}
function Fe(a, b2) {
  if ("input" === a || "change" === a)
    return te(b2);
}
function Ge(a, b2) {
  return a === b2 && (0 !== a || 1 / a === 1 / b2) || a !== a && b2 !== b2;
}
var He = "function" === typeof Object.is ? Object.is : Ge;
function Ie(a, b2) {
  if (He(a, b2))
    return true;
  if ("object" !== typeof a || null === a || "object" !== typeof b2 || null === b2)
    return false;
  var c = Object.keys(a), d = Object.keys(b2);
  if (c.length !== d.length)
    return false;
  for (d = 0; d < c.length; d++) {
    var e = c[d];
    if (!ja.call(b2, e) || !He(a[e], b2[e]))
      return false;
  }
  return true;
}
function Je(a) {
  for (; a && a.firstChild; )
    a = a.firstChild;
  return a;
}
function Ke(a, b2) {
  var c = Je(a);
  a = 0;
  for (var d; c; ) {
    if (3 === c.nodeType) {
      d = a + c.textContent.length;
      if (a <= b2 && d >= b2)
        return { node: c, offset: b2 - a };
      a = d;
    }
    a: {
      for (; c; ) {
        if (c.nextSibling) {
          c = c.nextSibling;
          break a;
        }
        c = c.parentNode;
      }
      c = void 0;
    }
    c = Je(c);
  }
}
function Le(a, b2) {
  return a && b2 ? a === b2 ? true : a && 3 === a.nodeType ? false : b2 && 3 === b2.nodeType ? Le(a, b2.parentNode) : "contains" in a ? a.contains(b2) : a.compareDocumentPosition ? !!(a.compareDocumentPosition(b2) & 16) : false : false;
}
function Me() {
  for (var a = window, b2 = Xa(); b2 instanceof a.HTMLIFrameElement; ) {
    try {
      var c = "string" === typeof b2.contentWindow.location.href;
    } catch (d) {
      c = false;
    }
    if (c)
      a = b2.contentWindow;
    else
      break;
    b2 = Xa(a.document);
  }
  return b2;
}
function Ne(a) {
  var b2 = a && a.nodeName && a.nodeName.toLowerCase();
  return b2 && ("input" === b2 && ("text" === a.type || "search" === a.type || "tel" === a.type || "url" === a.type || "password" === a.type) || "textarea" === b2 || "true" === a.contentEditable);
}
function Oe(a) {
  var b2 = Me(), c = a.focusedElem, d = a.selectionRange;
  if (b2 !== c && c && c.ownerDocument && Le(c.ownerDocument.documentElement, c)) {
    if (null !== d && Ne(c)) {
      if (b2 = d.start, a = d.end, void 0 === a && (a = b2), "selectionStart" in c)
        c.selectionStart = b2, c.selectionEnd = Math.min(a, c.value.length);
      else if (a = (b2 = c.ownerDocument || document) && b2.defaultView || window, a.getSelection) {
        a = a.getSelection();
        var e = c.textContent.length, f2 = Math.min(d.start, e);
        d = void 0 === d.end ? f2 : Math.min(d.end, e);
        !a.extend && f2 > d && (e = d, d = f2, f2 = e);
        e = Ke(c, f2);
        var g = Ke(
          c,
          d
        );
        e && g && (1 !== a.rangeCount || a.anchorNode !== e.node || a.anchorOffset !== e.offset || a.focusNode !== g.node || a.focusOffset !== g.offset) && (b2 = b2.createRange(), b2.setStart(e.node, e.offset), a.removeAllRanges(), f2 > d ? (a.addRange(b2), a.extend(g.node, g.offset)) : (b2.setEnd(g.node, g.offset), a.addRange(b2)));
      }
    }
    b2 = [];
    for (a = c; a = a.parentNode; )
      1 === a.nodeType && b2.push({ element: a, left: a.scrollLeft, top: a.scrollTop });
    "function" === typeof c.focus && c.focus();
    for (c = 0; c < b2.length; c++)
      a = b2[c], a.element.scrollLeft = a.left, a.element.scrollTop = a.top;
  }
}
var Pe = ia && "documentMode" in document && 11 >= document.documentMode, Qe = null, Re = null, Se = null, Te = false;
function Ue(a, b2, c) {
  var d = c.window === c ? c.document : 9 === c.nodeType ? c : c.ownerDocument;
  Te || null == Qe || Qe !== Xa(d) || (d = Qe, "selectionStart" in d && Ne(d) ? d = { start: d.selectionStart, end: d.selectionEnd } : (d = (d.ownerDocument && d.ownerDocument.defaultView || window).getSelection(), d = { anchorNode: d.anchorNode, anchorOffset: d.anchorOffset, focusNode: d.focusNode, focusOffset: d.focusOffset }), Se && Ie(Se, d) || (Se = d, d = oe(Re, "onSelect"), 0 < d.length && (b2 = new td("onSelect", "select", null, b2, c), a.push({ event: b2, listeners: d }), b2.target = Qe)));
}
function Ve(a, b2) {
  var c = {};
  c[a.toLowerCase()] = b2.toLowerCase();
  c["Webkit" + a] = "webkit" + b2;
  c["Moz" + a] = "moz" + b2;
  return c;
}
var We = { animationend: Ve("Animation", "AnimationEnd"), animationiteration: Ve("Animation", "AnimationIteration"), animationstart: Ve("Animation", "AnimationStart"), transitionend: Ve("Transition", "TransitionEnd") }, Xe = {}, Ye = {};
ia && (Ye = document.createElement("div").style, "AnimationEvent" in window || (delete We.animationend.animation, delete We.animationiteration.animation, delete We.animationstart.animation), "TransitionEvent" in window || delete We.transitionend.transition);
function Ze(a) {
  if (Xe[a])
    return Xe[a];
  if (!We[a])
    return a;
  var b2 = We[a], c;
  for (c in b2)
    if (b2.hasOwnProperty(c) && c in Ye)
      return Xe[a] = b2[c];
  return a;
}
var $e = Ze("animationend"), af = Ze("animationiteration"), bf = Ze("animationstart"), cf = Ze("transitionend"), df = /* @__PURE__ */ new Map(), ef = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a, b2) {
  df.set(a, b2);
  fa(b2, [a]);
}
for (var gf = 0; gf < ef.length; gf++) {
  var hf = ef[gf], jf = hf.toLowerCase(), kf = hf[0].toUpperCase() + hf.slice(1);
  ff(jf, "on" + kf);
}
ff($e, "onAnimationEnd");
ff(af, "onAnimationIteration");
ff(bf, "onAnimationStart");
ff("dblclick", "onDoubleClick");
ff("focusin", "onFocus");
ff("focusout", "onBlur");
ff(cf, "onTransitionEnd");
ha("onMouseEnter", ["mouseout", "mouseover"]);
ha("onMouseLeave", ["mouseout", "mouseover"]);
ha("onPointerEnter", ["pointerout", "pointerover"]);
ha("onPointerLeave", ["pointerout", "pointerover"]);
fa("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
fa("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
fa("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
fa("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var lf = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), mf = new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf$1(a, b2, c) {
  var d = a.type || "unknown-event";
  a.currentTarget = c;
  Ub(d, b2, void 0, a);
  a.currentTarget = null;
}
function se(a, b2) {
  b2 = 0 !== (b2 & 4);
  for (var c = 0; c < a.length; c++) {
    var d = a[c], e = d.event;
    d = d.listeners;
    a: {
      var f2 = void 0;
      if (b2)
        for (var g = d.length - 1; 0 <= g; g--) {
          var h = d[g], k2 = h.instance, l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf$1(e, h, l2);
          f2 = k2;
        }
      else
        for (g = 0; g < d.length; g++) {
          h = d[g];
          k2 = h.instance;
          l2 = h.currentTarget;
          h = h.listener;
          if (k2 !== f2 && e.isPropagationStopped())
            break a;
          nf$1(e, h, l2);
          f2 = k2;
        }
    }
  }
  if (Qb)
    throw a = Rb, Qb = false, Rb = null, a;
}
function D(a, b2) {
  var c = b2[of];
  void 0 === c && (c = b2[of] = /* @__PURE__ */ new Set());
  var d = a + "__bubble";
  c.has(d) || (pf(b2, a, 2, false), c.add(d));
}
function qf(a, b2, c) {
  var d = 0;
  b2 && (d |= 4);
  pf(c, a, d, b2);
}
var rf = "_reactListening" + Math.random().toString(36).slice(2);
function sf(a) {
  if (!a[rf]) {
    a[rf] = true;
    da.forEach(function(b3) {
      "selectionchange" !== b3 && (mf.has(b3) || qf(b3, false, a), qf(b3, true, a));
    });
    var b2 = 9 === a.nodeType ? a : a.ownerDocument;
    null === b2 || b2[rf] || (b2[rf] = true, qf("selectionchange", false, b2));
  }
}
function pf(a, b2, c, d) {
  switch (jd(b2)) {
    case 1:
      var e = ed;
      break;
    case 4:
      e = gd;
      break;
    default:
      e = fd;
  }
  c = e.bind(null, b2, c, a);
  e = void 0;
  !Lb || "touchstart" !== b2 && "touchmove" !== b2 && "wheel" !== b2 || (e = true);
  d ? void 0 !== e ? a.addEventListener(b2, c, { capture: true, passive: e }) : a.addEventListener(b2, c, true) : void 0 !== e ? a.addEventListener(b2, c, { passive: e }) : a.addEventListener(b2, c, false);
}
function hd(a, b2, c, d, e) {
  var f2 = d;
  if (0 === (b2 & 1) && 0 === (b2 & 2) && null !== d)
    a:
      for (; ; ) {
        if (null === d)
          return;
        var g = d.tag;
        if (3 === g || 4 === g) {
          var h = d.stateNode.containerInfo;
          if (h === e || 8 === h.nodeType && h.parentNode === e)
            break;
          if (4 === g)
            for (g = d.return; null !== g; ) {
              var k2 = g.tag;
              if (3 === k2 || 4 === k2) {
                if (k2 = g.stateNode.containerInfo, k2 === e || 8 === k2.nodeType && k2.parentNode === e)
                  return;
              }
              g = g.return;
            }
          for (; null !== h; ) {
            g = Wc(h);
            if (null === g)
              return;
            k2 = g.tag;
            if (5 === k2 || 6 === k2) {
              d = f2 = g;
              continue a;
            }
            h = h.parentNode;
          }
        }
        d = d.return;
      }
  Jb(function() {
    var d2 = f2, e2 = xb(c), g2 = [];
    a: {
      var h2 = df.get(a);
      if (void 0 !== h2) {
        var k3 = td, n2 = a;
        switch (a) {
          case "keypress":
            if (0 === od(c))
              break a;
          case "keydown":
          case "keyup":
            k3 = Rd;
            break;
          case "focusin":
            n2 = "focus";
            k3 = Fd;
            break;
          case "focusout":
            n2 = "blur";
            k3 = Fd;
            break;
          case "beforeblur":
          case "afterblur":
            k3 = Fd;
            break;
          case "click":
            if (2 === c.button)
              break a;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            k3 = Bd;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            k3 = Dd;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            k3 = Vd;
            break;
          case $e:
          case af:
          case bf:
            k3 = Hd;
            break;
          case cf:
            k3 = Xd;
            break;
          case "scroll":
            k3 = vd;
            break;
          case "wheel":
            k3 = Zd;
            break;
          case "copy":
          case "cut":
          case "paste":
            k3 = Jd;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            k3 = Td;
        }
        var t2 = 0 !== (b2 & 4), J2 = !t2 && "scroll" === a, x2 = t2 ? null !== h2 ? h2 + "Capture" : null : h2;
        t2 = [];
        for (var w2 = d2, u2; null !== w2; ) {
          u2 = w2;
          var F2 = u2.stateNode;
          5 === u2.tag && null !== F2 && (u2 = F2, null !== x2 && (F2 = Kb(w2, x2), null != F2 && t2.push(tf(w2, F2, u2))));
          if (J2)
            break;
          w2 = w2.return;
        }
        0 < t2.length && (h2 = new k3(h2, n2, null, c, e2), g2.push({ event: h2, listeners: t2 }));
      }
    }
    if (0 === (b2 & 7)) {
      a: {
        h2 = "mouseover" === a || "pointerover" === a;
        k3 = "mouseout" === a || "pointerout" === a;
        if (h2 && c !== wb && (n2 = c.relatedTarget || c.fromElement) && (Wc(n2) || n2[uf]))
          break a;
        if (k3 || h2) {
          h2 = e2.window === e2 ? e2 : (h2 = e2.ownerDocument) ? h2.defaultView || h2.parentWindow : window;
          if (k3) {
            if (n2 = c.relatedTarget || c.toElement, k3 = d2, n2 = n2 ? Wc(n2) : null, null !== n2 && (J2 = Vb(n2), n2 !== J2 || 5 !== n2.tag && 6 !== n2.tag))
              n2 = null;
          } else
            k3 = null, n2 = d2;
          if (k3 !== n2) {
            t2 = Bd;
            F2 = "onMouseLeave";
            x2 = "onMouseEnter";
            w2 = "mouse";
            if ("pointerout" === a || "pointerover" === a)
              t2 = Td, F2 = "onPointerLeave", x2 = "onPointerEnter", w2 = "pointer";
            J2 = null == k3 ? h2 : ue(k3);
            u2 = null == n2 ? h2 : ue(n2);
            h2 = new t2(F2, w2 + "leave", k3, c, e2);
            h2.target = J2;
            h2.relatedTarget = u2;
            F2 = null;
            Wc(e2) === d2 && (t2 = new t2(x2, w2 + "enter", n2, c, e2), t2.target = u2, t2.relatedTarget = J2, F2 = t2);
            J2 = F2;
            if (k3 && n2)
              b: {
                t2 = k3;
                x2 = n2;
                w2 = 0;
                for (u2 = t2; u2; u2 = vf(u2))
                  w2++;
                u2 = 0;
                for (F2 = x2; F2; F2 = vf(F2))
                  u2++;
                for (; 0 < w2 - u2; )
                  t2 = vf(t2), w2--;
                for (; 0 < u2 - w2; )
                  x2 = vf(x2), u2--;
                for (; w2--; ) {
                  if (t2 === x2 || null !== x2 && t2 === x2.alternate)
                    break b;
                  t2 = vf(t2);
                  x2 = vf(x2);
                }
                t2 = null;
              }
            else
              t2 = null;
            null !== k3 && wf(g2, h2, k3, t2, false);
            null !== n2 && null !== J2 && wf(g2, J2, n2, t2, true);
          }
        }
      }
      a: {
        h2 = d2 ? ue(d2) : window;
        k3 = h2.nodeName && h2.nodeName.toLowerCase();
        if ("select" === k3 || "input" === k3 && "file" === h2.type)
          var na = ve;
        else if (me(h2))
          if (we)
            na = Fe;
          else {
            na = De;
            var xa = Ce;
          }
        else
          (k3 = h2.nodeName) && "input" === k3.toLowerCase() && ("checkbox" === h2.type || "radio" === h2.type) && (na = Ee);
        if (na && (na = na(a, d2))) {
          ne(g2, na, c, e2);
          break a;
        }
        xa && xa(a, h2, d2);
        "focusout" === a && (xa = h2._wrapperState) && xa.controlled && "number" === h2.type && cb(h2, "number", h2.value);
      }
      xa = d2 ? ue(d2) : window;
      switch (a) {
        case "focusin":
          if (me(xa) || "true" === xa.contentEditable)
            Qe = xa, Re = d2, Se = null;
          break;
        case "focusout":
          Se = Re = Qe = null;
          break;
        case "mousedown":
          Te = true;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Te = false;
          Ue(g2, c, e2);
          break;
        case "selectionchange":
          if (Pe)
            break;
        case "keydown":
        case "keyup":
          Ue(g2, c, e2);
      }
      var $a;
      if (ae)
        b: {
          switch (a) {
            case "compositionstart":
              var ba = "onCompositionStart";
              break b;
            case "compositionend":
              ba = "onCompositionEnd";
              break b;
            case "compositionupdate":
              ba = "onCompositionUpdate";
              break b;
          }
          ba = void 0;
        }
      else
        ie ? ge(a, c) && (ba = "onCompositionEnd") : "keydown" === a && 229 === c.keyCode && (ba = "onCompositionStart");
      ba && (de && "ko" !== c.locale && (ie || "onCompositionStart" !== ba ? "onCompositionEnd" === ba && ie && ($a = nd()) : (kd = e2, ld = "value" in kd ? kd.value : kd.textContent, ie = true)), xa = oe(d2, ba), 0 < xa.length && (ba = new Ld(ba, a, null, c, e2), g2.push({ event: ba, listeners: xa }), $a ? ba.data = $a : ($a = he(c), null !== $a && (ba.data = $a))));
      if ($a = ce ? je(a, c) : ke(a, c))
        d2 = oe(d2, "onBeforeInput"), 0 < d2.length && (e2 = new Ld("onBeforeInput", "beforeinput", null, c, e2), g2.push({ event: e2, listeners: d2 }), e2.data = $a);
    }
    se(g2, b2);
  });
}
function tf(a, b2, c) {
  return { instance: a, listener: b2, currentTarget: c };
}
function oe(a, b2) {
  for (var c = b2 + "Capture", d = []; null !== a; ) {
    var e = a, f2 = e.stateNode;
    5 === e.tag && null !== f2 && (e = f2, f2 = Kb(a, c), null != f2 && d.unshift(tf(a, f2, e)), f2 = Kb(a, b2), null != f2 && d.push(tf(a, f2, e)));
    a = a.return;
  }
  return d;
}
function vf(a) {
  if (null === a)
    return null;
  do
    a = a.return;
  while (a && 5 !== a.tag);
  return a ? a : null;
}
function wf(a, b2, c, d, e) {
  for (var f2 = b2._reactName, g = []; null !== c && c !== d; ) {
    var h = c, k2 = h.alternate, l2 = h.stateNode;
    if (null !== k2 && k2 === d)
      break;
    5 === h.tag && null !== l2 && (h = l2, e ? (k2 = Kb(c, f2), null != k2 && g.unshift(tf(c, k2, h))) : e || (k2 = Kb(c, f2), null != k2 && g.push(tf(c, k2, h))));
    c = c.return;
  }
  0 !== g.length && a.push({ event: b2, listeners: g });
}
var xf = /\r\n?/g, yf = /\u0000|\uFFFD/g;
function zf(a) {
  return ("string" === typeof a ? a : "" + a).replace(xf, "\n").replace(yf, "");
}
function Af(a, b2, c) {
  b2 = zf(b2);
  if (zf(a) !== b2 && c)
    throw Error(p(425));
}
function Bf() {
}
var Cf = null, Df = null;
function Ef(a, b2) {
  return "textarea" === a || "noscript" === a || "string" === typeof b2.children || "number" === typeof b2.children || "object" === typeof b2.dangerouslySetInnerHTML && null !== b2.dangerouslySetInnerHTML && null != b2.dangerouslySetInnerHTML.__html;
}
var Ff = "function" === typeof setTimeout ? setTimeout : void 0, Gf = "function" === typeof clearTimeout ? clearTimeout : void 0, Hf = "function" === typeof Promise ? Promise : void 0, Jf = "function" === typeof queueMicrotask ? queueMicrotask : "undefined" !== typeof Hf ? function(a) {
  return Hf.resolve(null).then(a).catch(If);
} : Ff;
function If(a) {
  setTimeout(function() {
    throw a;
  });
}
function Kf(a, b2) {
  var c = b2, d = 0;
  do {
    var e = c.nextSibling;
    a.removeChild(c);
    if (e && 8 === e.nodeType)
      if (c = e.data, "/$" === c) {
        if (0 === d) {
          a.removeChild(e);
          bd(b2);
          return;
        }
        d--;
      } else
        "$" !== c && "$?" !== c && "$!" !== c || d++;
    c = e;
  } while (c);
  bd(b2);
}
function Lf(a) {
  for (; null != a; a = a.nextSibling) {
    var b2 = a.nodeType;
    if (1 === b2 || 3 === b2)
      break;
    if (8 === b2) {
      b2 = a.data;
      if ("$" === b2 || "$!" === b2 || "$?" === b2)
        break;
      if ("/$" === b2)
        return null;
    }
  }
  return a;
}
function Mf(a) {
  a = a.previousSibling;
  for (var b2 = 0; a; ) {
    if (8 === a.nodeType) {
      var c = a.data;
      if ("$" === c || "$!" === c || "$?" === c) {
        if (0 === b2)
          return a;
        b2--;
      } else
        "/$" === c && b2++;
    }
    a = a.previousSibling;
  }
  return null;
}
var Nf = Math.random().toString(36).slice(2), Of = "__reactFiber$" + Nf, Pf = "__reactProps$" + Nf, uf = "__reactContainer$" + Nf, of = "__reactEvents$" + Nf, Qf = "__reactListeners$" + Nf, Rf = "__reactHandles$" + Nf;
function Wc(a) {
  var b2 = a[Of];
  if (b2)
    return b2;
  for (var c = a.parentNode; c; ) {
    if (b2 = c[uf] || c[Of]) {
      c = b2.alternate;
      if (null !== b2.child || null !== c && null !== c.child)
        for (a = Mf(a); null !== a; ) {
          if (c = a[Of])
            return c;
          a = Mf(a);
        }
      return b2;
    }
    a = c;
    c = a.parentNode;
  }
  return null;
}
function Cb(a) {
  a = a[Of] || a[uf];
  return !a || 5 !== a.tag && 6 !== a.tag && 13 !== a.tag && 3 !== a.tag ? null : a;
}
function ue(a) {
  if (5 === a.tag || 6 === a.tag)
    return a.stateNode;
  throw Error(p(33));
}
function Db(a) {
  return a[Pf] || null;
}
var Sf = [], Tf = -1;
function Uf(a) {
  return { current: a };
}
function E(a) {
  0 > Tf || (a.current = Sf[Tf], Sf[Tf] = null, Tf--);
}
function G(a, b2) {
  Tf++;
  Sf[Tf] = a.current;
  a.current = b2;
}
var Vf = {}, H = Uf(Vf), Wf = Uf(false), Xf = Vf;
function Yf(a, b2) {
  var c = a.type.contextTypes;
  if (!c)
    return Vf;
  var d = a.stateNode;
  if (d && d.__reactInternalMemoizedUnmaskedChildContext === b2)
    return d.__reactInternalMemoizedMaskedChildContext;
  var e = {}, f2;
  for (f2 in c)
    e[f2] = b2[f2];
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = b2, a.__reactInternalMemoizedMaskedChildContext = e);
  return e;
}
function Zf(a) {
  a = a.childContextTypes;
  return null !== a && void 0 !== a;
}
function $f() {
  E(Wf);
  E(H);
}
function ag(a, b2, c) {
  if (H.current !== Vf)
    throw Error(p(168));
  G(H, b2);
  G(Wf, c);
}
function bg(a, b2, c) {
  var d = a.stateNode;
  b2 = b2.childContextTypes;
  if ("function" !== typeof d.getChildContext)
    return c;
  d = d.getChildContext();
  for (var e in d)
    if (!(e in b2))
      throw Error(p(108, Ra(a) || "Unknown", e));
  return A({}, c, d);
}
function cg(a) {
  a = (a = a.stateNode) && a.__reactInternalMemoizedMergedChildContext || Vf;
  Xf = H.current;
  G(H, a);
  G(Wf, Wf.current);
  return true;
}
function dg(a, b2, c) {
  var d = a.stateNode;
  if (!d)
    throw Error(p(169));
  c ? (a = bg(a, b2, Xf), d.__reactInternalMemoizedMergedChildContext = a, E(Wf), E(H), G(H, a)) : E(Wf);
  G(Wf, c);
}
var eg = null, fg = false, gg = false;
function hg(a) {
  null === eg ? eg = [a] : eg.push(a);
}
function ig(a) {
  fg = true;
  hg(a);
}
function jg() {
  if (!gg && null !== eg) {
    gg = true;
    var a = 0, b2 = C;
    try {
      var c = eg;
      for (C = 1; a < c.length; a++) {
        var d = c[a];
        do
          d = d(true);
        while (null !== d);
      }
      eg = null;
      fg = false;
    } catch (e) {
      throw null !== eg && (eg = eg.slice(a + 1)), ac(fc, jg), e;
    } finally {
      C = b2, gg = false;
    }
  }
  return null;
}
var kg = [], lg = 0, mg = null, ng = 0, og = [], pg = 0, qg = null, rg = 1, sg = "";
function tg(a, b2) {
  kg[lg++] = ng;
  kg[lg++] = mg;
  mg = a;
  ng = b2;
}
function ug(a, b2, c) {
  og[pg++] = rg;
  og[pg++] = sg;
  og[pg++] = qg;
  qg = a;
  var d = rg;
  a = sg;
  var e = 32 - oc(d) - 1;
  d &= ~(1 << e);
  c += 1;
  var f2 = 32 - oc(b2) + e;
  if (30 < f2) {
    var g = e - e % 5;
    f2 = (d & (1 << g) - 1).toString(32);
    d >>= g;
    e -= g;
    rg = 1 << 32 - oc(b2) + e | c << e | d;
    sg = f2 + a;
  } else
    rg = 1 << f2 | c << e | d, sg = a;
}
function vg(a) {
  null !== a.return && (tg(a, 1), ug(a, 1, 0));
}
function wg(a) {
  for (; a === mg; )
    mg = kg[--lg], kg[lg] = null, ng = kg[--lg], kg[lg] = null;
  for (; a === qg; )
    qg = og[--pg], og[pg] = null, sg = og[--pg], og[pg] = null, rg = og[--pg], og[pg] = null;
}
var xg = null, yg = null, I = false, zg = null;
function Ag(a, b2) {
  var c = Bg(5, null, null, 0);
  c.elementType = "DELETED";
  c.stateNode = b2;
  c.return = a;
  b2 = a.deletions;
  null === b2 ? (a.deletions = [c], a.flags |= 16) : b2.push(c);
}
function Cg(a, b2) {
  switch (a.tag) {
    case 5:
      var c = a.type;
      b2 = 1 !== b2.nodeType || c.toLowerCase() !== b2.nodeName.toLowerCase() ? null : b2;
      return null !== b2 ? (a.stateNode = b2, xg = a, yg = Lf(b2.firstChild), true) : false;
    case 6:
      return b2 = "" === a.pendingProps || 3 !== b2.nodeType ? null : b2, null !== b2 ? (a.stateNode = b2, xg = a, yg = null, true) : false;
    case 13:
      return b2 = 8 !== b2.nodeType ? null : b2, null !== b2 ? (c = null !== qg ? { id: rg, overflow: sg } : null, a.memoizedState = { dehydrated: b2, treeContext: c, retryLane: 1073741824 }, c = Bg(18, null, null, 0), c.stateNode = b2, c.return = a, a.child = c, xg = a, yg = null, true) : false;
    default:
      return false;
  }
}
function Dg(a) {
  return 0 !== (a.mode & 1) && 0 === (a.flags & 128);
}
function Eg(a) {
  if (I) {
    var b2 = yg;
    if (b2) {
      var c = b2;
      if (!Cg(a, b2)) {
        if (Dg(a))
          throw Error(p(418));
        b2 = Lf(c.nextSibling);
        var d = xg;
        b2 && Cg(a, b2) ? Ag(d, c) : (a.flags = a.flags & -4097 | 2, I = false, xg = a);
      }
    } else {
      if (Dg(a))
        throw Error(p(418));
      a.flags = a.flags & -4097 | 2;
      I = false;
      xg = a;
    }
  }
}
function Fg(a) {
  for (a = a.return; null !== a && 5 !== a.tag && 3 !== a.tag && 13 !== a.tag; )
    a = a.return;
  xg = a;
}
function Gg(a) {
  if (a !== xg)
    return false;
  if (!I)
    return Fg(a), I = true, false;
  var b2;
  (b2 = 3 !== a.tag) && !(b2 = 5 !== a.tag) && (b2 = a.type, b2 = "head" !== b2 && "body" !== b2 && !Ef(a.type, a.memoizedProps));
  if (b2 && (b2 = yg)) {
    if (Dg(a))
      throw Hg(), Error(p(418));
    for (; b2; )
      Ag(a, b2), b2 = Lf(b2.nextSibling);
  }
  Fg(a);
  if (13 === a.tag) {
    a = a.memoizedState;
    a = null !== a ? a.dehydrated : null;
    if (!a)
      throw Error(p(317));
    a: {
      a = a.nextSibling;
      for (b2 = 0; a; ) {
        if (8 === a.nodeType) {
          var c = a.data;
          if ("/$" === c) {
            if (0 === b2) {
              yg = Lf(a.nextSibling);
              break a;
            }
            b2--;
          } else
            "$" !== c && "$!" !== c && "$?" !== c || b2++;
        }
        a = a.nextSibling;
      }
      yg = null;
    }
  } else
    yg = xg ? Lf(a.stateNode.nextSibling) : null;
  return true;
}
function Hg() {
  for (var a = yg; a; )
    a = Lf(a.nextSibling);
}
function Ig() {
  yg = xg = null;
  I = false;
}
function Jg(a) {
  null === zg ? zg = [a] : zg.push(a);
}
var Kg = ua.ReactCurrentBatchConfig;
function Lg(a, b2) {
  if (a && a.defaultProps) {
    b2 = A({}, b2);
    a = a.defaultProps;
    for (var c in a)
      void 0 === b2[c] && (b2[c] = a[c]);
    return b2;
  }
  return b2;
}
var Mg = Uf(null), Ng = null, Og = null, Pg = null;
function Qg() {
  Pg = Og = Ng = null;
}
function Rg(a) {
  var b2 = Mg.current;
  E(Mg);
  a._currentValue = b2;
}
function Sg(a, b2, c) {
  for (; null !== a; ) {
    var d = a.alternate;
    (a.childLanes & b2) !== b2 ? (a.childLanes |= b2, null !== d && (d.childLanes |= b2)) : null !== d && (d.childLanes & b2) !== b2 && (d.childLanes |= b2);
    if (a === c)
      break;
    a = a.return;
  }
}
function Tg(a, b2) {
  Ng = a;
  Pg = Og = null;
  a = a.dependencies;
  null !== a && null !== a.firstContext && (0 !== (a.lanes & b2) && (Ug = true), a.firstContext = null);
}
function Vg(a) {
  var b2 = a._currentValue;
  if (Pg !== a)
    if (a = { context: a, memoizedValue: b2, next: null }, null === Og) {
      if (null === Ng)
        throw Error(p(308));
      Og = a;
      Ng.dependencies = { lanes: 0, firstContext: a };
    } else
      Og = Og.next = a;
  return b2;
}
var Wg = null;
function Xg(a) {
  null === Wg ? Wg = [a] : Wg.push(a);
}
function Yg(a, b2, c, d) {
  var e = b2.interleaved;
  null === e ? (c.next = c, Xg(b2)) : (c.next = e.next, e.next = c);
  b2.interleaved = c;
  return Zg(a, d);
}
function Zg(a, b2) {
  a.lanes |= b2;
  var c = a.alternate;
  null !== c && (c.lanes |= b2);
  c = a;
  for (a = a.return; null !== a; )
    a.childLanes |= b2, c = a.alternate, null !== c && (c.childLanes |= b2), c = a, a = a.return;
  return 3 === c.tag ? c.stateNode : null;
}
var $g = false;
function ah(a) {
  a.updateQueue = { baseState: a.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
}
function bh(a, b2) {
  a = a.updateQueue;
  b2.updateQueue === a && (b2.updateQueue = { baseState: a.baseState, firstBaseUpdate: a.firstBaseUpdate, lastBaseUpdate: a.lastBaseUpdate, shared: a.shared, effects: a.effects });
}
function ch(a, b2) {
  return { eventTime: a, lane: b2, tag: 0, payload: null, callback: null, next: null };
}
function dh(a, b2, c) {
  var d = a.updateQueue;
  if (null === d)
    return null;
  d = d.shared;
  if (0 !== (K & 2)) {
    var e = d.pending;
    null === e ? b2.next = b2 : (b2.next = e.next, e.next = b2);
    d.pending = b2;
    return Zg(a, c);
  }
  e = d.interleaved;
  null === e ? (b2.next = b2, Xg(d)) : (b2.next = e.next, e.next = b2);
  d.interleaved = b2;
  return Zg(a, c);
}
function eh(a, b2, c) {
  b2 = b2.updateQueue;
  if (null !== b2 && (b2 = b2.shared, 0 !== (c & 4194240))) {
    var d = b2.lanes;
    d &= a.pendingLanes;
    c |= d;
    b2.lanes = c;
    Cc(a, c);
  }
}
function fh(a, b2) {
  var c = a.updateQueue, d = a.alternate;
  if (null !== d && (d = d.updateQueue, c === d)) {
    var e = null, f2 = null;
    c = c.firstBaseUpdate;
    if (null !== c) {
      do {
        var g = { eventTime: c.eventTime, lane: c.lane, tag: c.tag, payload: c.payload, callback: c.callback, next: null };
        null === f2 ? e = f2 = g : f2 = f2.next = g;
        c = c.next;
      } while (null !== c);
      null === f2 ? e = f2 = b2 : f2 = f2.next = b2;
    } else
      e = f2 = b2;
    c = { baseState: d.baseState, firstBaseUpdate: e, lastBaseUpdate: f2, shared: d.shared, effects: d.effects };
    a.updateQueue = c;
    return;
  }
  a = c.lastBaseUpdate;
  null === a ? c.firstBaseUpdate = b2 : a.next = b2;
  c.lastBaseUpdate = b2;
}
function gh(a, b2, c, d) {
  var e = a.updateQueue;
  $g = false;
  var f2 = e.firstBaseUpdate, g = e.lastBaseUpdate, h = e.shared.pending;
  if (null !== h) {
    e.shared.pending = null;
    var k2 = h, l2 = k2.next;
    k2.next = null;
    null === g ? f2 = l2 : g.next = l2;
    g = k2;
    var m2 = a.alternate;
    null !== m2 && (m2 = m2.updateQueue, h = m2.lastBaseUpdate, h !== g && (null === h ? m2.firstBaseUpdate = l2 : h.next = l2, m2.lastBaseUpdate = k2));
  }
  if (null !== f2) {
    var q2 = e.baseState;
    g = 0;
    m2 = l2 = k2 = null;
    h = f2;
    do {
      var r2 = h.lane, y2 = h.eventTime;
      if ((d & r2) === r2) {
        null !== m2 && (m2 = m2.next = {
          eventTime: y2,
          lane: 0,
          tag: h.tag,
          payload: h.payload,
          callback: h.callback,
          next: null
        });
        a: {
          var n2 = a, t2 = h;
          r2 = b2;
          y2 = c;
          switch (t2.tag) {
            case 1:
              n2 = t2.payload;
              if ("function" === typeof n2) {
                q2 = n2.call(y2, q2, r2);
                break a;
              }
              q2 = n2;
              break a;
            case 3:
              n2.flags = n2.flags & -65537 | 128;
            case 0:
              n2 = t2.payload;
              r2 = "function" === typeof n2 ? n2.call(y2, q2, r2) : n2;
              if (null === r2 || void 0 === r2)
                break a;
              q2 = A({}, q2, r2);
              break a;
            case 2:
              $g = true;
          }
        }
        null !== h.callback && 0 !== h.lane && (a.flags |= 64, r2 = e.effects, null === r2 ? e.effects = [h] : r2.push(h));
      } else
        y2 = { eventTime: y2, lane: r2, tag: h.tag, payload: h.payload, callback: h.callback, next: null }, null === m2 ? (l2 = m2 = y2, k2 = q2) : m2 = m2.next = y2, g |= r2;
      h = h.next;
      if (null === h)
        if (h = e.shared.pending, null === h)
          break;
        else
          r2 = h, h = r2.next, r2.next = null, e.lastBaseUpdate = r2, e.shared.pending = null;
    } while (1);
    null === m2 && (k2 = q2);
    e.baseState = k2;
    e.firstBaseUpdate = l2;
    e.lastBaseUpdate = m2;
    b2 = e.shared.interleaved;
    if (null !== b2) {
      e = b2;
      do
        g |= e.lane, e = e.next;
      while (e !== b2);
    } else
      null === f2 && (e.shared.lanes = 0);
    hh |= g;
    a.lanes = g;
    a.memoizedState = q2;
  }
}
function ih(a, b2, c) {
  a = b2.effects;
  b2.effects = null;
  if (null !== a)
    for (b2 = 0; b2 < a.length; b2++) {
      var d = a[b2], e = d.callback;
      if (null !== e) {
        d.callback = null;
        d = c;
        if ("function" !== typeof e)
          throw Error(p(191, e));
        e.call(d);
      }
    }
}
var jh = new aa.Component().refs;
function kh(a, b2, c, d) {
  b2 = a.memoizedState;
  c = c(d, b2);
  c = null === c || void 0 === c ? b2 : A({}, b2, c);
  a.memoizedState = c;
  0 === a.lanes && (a.updateQueue.baseState = c);
}
var nh = { isMounted: function(a) {
  return (a = a._reactInternals) ? Vb(a) === a : false;
}, enqueueSetState: function(a, b2, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.payload = b2;
  void 0 !== c && null !== c && (f2.callback = c);
  b2 = dh(a, f2, e);
  null !== b2 && (mh(b2, a, e, d), eh(b2, a, e));
}, enqueueReplaceState: function(a, b2, c) {
  a = a._reactInternals;
  var d = L(), e = lh(a), f2 = ch(d, e);
  f2.tag = 1;
  f2.payload = b2;
  void 0 !== c && null !== c && (f2.callback = c);
  b2 = dh(a, f2, e);
  null !== b2 && (mh(b2, a, e, d), eh(b2, a, e));
}, enqueueForceUpdate: function(a, b2) {
  a = a._reactInternals;
  var c = L(), d = lh(a), e = ch(c, d);
  e.tag = 2;
  void 0 !== b2 && null !== b2 && (e.callback = b2);
  b2 = dh(a, e, d);
  null !== b2 && (mh(b2, a, d, c), eh(b2, a, d));
} };
function oh(a, b2, c, d, e, f2, g) {
  a = a.stateNode;
  return "function" === typeof a.shouldComponentUpdate ? a.shouldComponentUpdate(d, f2, g) : b2.prototype && b2.prototype.isPureReactComponent ? !Ie(c, d) || !Ie(e, f2) : true;
}
function ph(a, b2, c) {
  var d = false, e = Vf;
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? f2 = Vg(f2) : (e = Zf(b2) ? Xf : H.current, d = b2.contextTypes, f2 = (d = null !== d && void 0 !== d) ? Yf(a, e) : Vf);
  b2 = new b2(c, f2);
  a.memoizedState = null !== b2.state && void 0 !== b2.state ? b2.state : null;
  b2.updater = nh;
  a.stateNode = b2;
  b2._reactInternals = a;
  d && (a = a.stateNode, a.__reactInternalMemoizedUnmaskedChildContext = e, a.__reactInternalMemoizedMaskedChildContext = f2);
  return b2;
}
function qh(a, b2, c, d) {
  a = b2.state;
  "function" === typeof b2.componentWillReceiveProps && b2.componentWillReceiveProps(c, d);
  "function" === typeof b2.UNSAFE_componentWillReceiveProps && b2.UNSAFE_componentWillReceiveProps(c, d);
  b2.state !== a && nh.enqueueReplaceState(b2, b2.state, null);
}
function rh(a, b2, c, d) {
  var e = a.stateNode;
  e.props = c;
  e.state = a.memoizedState;
  e.refs = jh;
  ah(a);
  var f2 = b2.contextType;
  "object" === typeof f2 && null !== f2 ? e.context = Vg(f2) : (f2 = Zf(b2) ? Xf : H.current, e.context = Yf(a, f2));
  e.state = a.memoizedState;
  f2 = b2.getDerivedStateFromProps;
  "function" === typeof f2 && (kh(a, b2, f2, c), e.state = a.memoizedState);
  "function" === typeof b2.getDerivedStateFromProps || "function" === typeof e.getSnapshotBeforeUpdate || "function" !== typeof e.UNSAFE_componentWillMount && "function" !== typeof e.componentWillMount || (b2 = e.state, "function" === typeof e.componentWillMount && e.componentWillMount(), "function" === typeof e.UNSAFE_componentWillMount && e.UNSAFE_componentWillMount(), b2 !== e.state && nh.enqueueReplaceState(e, e.state, null), gh(a, c, e, d), e.state = a.memoizedState);
  "function" === typeof e.componentDidMount && (a.flags |= 4194308);
}
function sh(a, b2, c) {
  a = c.ref;
  if (null !== a && "function" !== typeof a && "object" !== typeof a) {
    if (c._owner) {
      c = c._owner;
      if (c) {
        if (1 !== c.tag)
          throw Error(p(309));
        var d = c.stateNode;
      }
      if (!d)
        throw Error(p(147, a));
      var e = d, f2 = "" + a;
      if (null !== b2 && null !== b2.ref && "function" === typeof b2.ref && b2.ref._stringRef === f2)
        return b2.ref;
      b2 = function(a2) {
        var b3 = e.refs;
        b3 === jh && (b3 = e.refs = {});
        null === a2 ? delete b3[f2] : b3[f2] = a2;
      };
      b2._stringRef = f2;
      return b2;
    }
    if ("string" !== typeof a)
      throw Error(p(284));
    if (!c._owner)
      throw Error(p(290, a));
  }
  return a;
}
function th(a, b2) {
  a = Object.prototype.toString.call(b2);
  throw Error(p(31, "[object Object]" === a ? "object with keys {" + Object.keys(b2).join(", ") + "}" : a));
}
function uh(a) {
  var b2 = a._init;
  return b2(a._payload);
}
function vh(a) {
  function b2(b3, c2) {
    if (a) {
      var d2 = b3.deletions;
      null === d2 ? (b3.deletions = [c2], b3.flags |= 16) : d2.push(c2);
    }
  }
  function c(c2, d2) {
    if (!a)
      return null;
    for (; null !== d2; )
      b2(c2, d2), d2 = d2.sibling;
    return null;
  }
  function d(a2, b3) {
    for (a2 = /* @__PURE__ */ new Map(); null !== b3; )
      null !== b3.key ? a2.set(b3.key, b3) : a2.set(b3.index, b3), b3 = b3.sibling;
    return a2;
  }
  function e(a2, b3) {
    a2 = wh(a2, b3);
    a2.index = 0;
    a2.sibling = null;
    return a2;
  }
  function f2(b3, c2, d2) {
    b3.index = d2;
    if (!a)
      return b3.flags |= 1048576, c2;
    d2 = b3.alternate;
    if (null !== d2)
      return d2 = d2.index, d2 < c2 ? (b3.flags |= 2, c2) : d2;
    b3.flags |= 2;
    return c2;
  }
  function g(b3) {
    a && null === b3.alternate && (b3.flags |= 2);
    return b3;
  }
  function h(a2, b3, c2, d2) {
    if (null === b3 || 6 !== b3.tag)
      return b3 = xh(c2, a2.mode, d2), b3.return = a2, b3;
    b3 = e(b3, c2);
    b3.return = a2;
    return b3;
  }
  function k2(a2, b3, c2, d2) {
    var f3 = c2.type;
    if (f3 === ya)
      return m2(a2, b3, c2.props.children, d2, c2.key);
    if (null !== b3 && (b3.elementType === f3 || "object" === typeof f3 && null !== f3 && f3.$$typeof === Ha && uh(f3) === b3.type))
      return d2 = e(b3, c2.props), d2.ref = sh(a2, b3, c2), d2.return = a2, d2;
    d2 = yh(c2.type, c2.key, c2.props, null, a2.mode, d2);
    d2.ref = sh(a2, b3, c2);
    d2.return = a2;
    return d2;
  }
  function l2(a2, b3, c2, d2) {
    if (null === b3 || 4 !== b3.tag || b3.stateNode.containerInfo !== c2.containerInfo || b3.stateNode.implementation !== c2.implementation)
      return b3 = zh(c2, a2.mode, d2), b3.return = a2, b3;
    b3 = e(b3, c2.children || []);
    b3.return = a2;
    return b3;
  }
  function m2(a2, b3, c2, d2, f3) {
    if (null === b3 || 7 !== b3.tag)
      return b3 = Ah(c2, a2.mode, d2, f3), b3.return = a2, b3;
    b3 = e(b3, c2);
    b3.return = a2;
    return b3;
  }
  function q2(a2, b3, c2) {
    if ("string" === typeof b3 && "" !== b3 || "number" === typeof b3)
      return b3 = xh("" + b3, a2.mode, c2), b3.return = a2, b3;
    if ("object" === typeof b3 && null !== b3) {
      switch (b3.$$typeof) {
        case va:
          return c2 = yh(b3.type, b3.key, b3.props, null, a2.mode, c2), c2.ref = sh(a2, null, b3), c2.return = a2, c2;
        case wa:
          return b3 = zh(b3, a2.mode, c2), b3.return = a2, b3;
        case Ha:
          var d2 = b3._init;
          return q2(a2, d2(b3._payload), c2);
      }
      if (eb(b3) || Ka(b3))
        return b3 = Ah(b3, a2.mode, c2, null), b3.return = a2, b3;
      th(a2, b3);
    }
    return null;
  }
  function r2(a2, b3, c2, d2) {
    var e2 = null !== b3 ? b3.key : null;
    if ("string" === typeof c2 && "" !== c2 || "number" === typeof c2)
      return null !== e2 ? null : h(a2, b3, "" + c2, d2);
    if ("object" === typeof c2 && null !== c2) {
      switch (c2.$$typeof) {
        case va:
          return c2.key === e2 ? k2(a2, b3, c2, d2) : null;
        case wa:
          return c2.key === e2 ? l2(a2, b3, c2, d2) : null;
        case Ha:
          return e2 = c2._init, r2(
            a2,
            b3,
            e2(c2._payload),
            d2
          );
      }
      if (eb(c2) || Ka(c2))
        return null !== e2 ? null : m2(a2, b3, c2, d2, null);
      th(a2, c2);
    }
    return null;
  }
  function y2(a2, b3, c2, d2, e2) {
    if ("string" === typeof d2 && "" !== d2 || "number" === typeof d2)
      return a2 = a2.get(c2) || null, h(b3, a2, "" + d2, e2);
    if ("object" === typeof d2 && null !== d2) {
      switch (d2.$$typeof) {
        case va:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, k2(b3, a2, d2, e2);
        case wa:
          return a2 = a2.get(null === d2.key ? c2 : d2.key) || null, l2(b3, a2, d2, e2);
        case Ha:
          var f3 = d2._init;
          return y2(a2, b3, c2, f3(d2._payload), e2);
      }
      if (eb(d2) || Ka(d2))
        return a2 = a2.get(c2) || null, m2(b3, a2, d2, e2, null);
      th(b3, d2);
    }
    return null;
  }
  function n2(e2, g2, h2, k3) {
    for (var l3 = null, m3 = null, u2 = g2, w2 = g2 = 0, x2 = null; null !== u2 && w2 < h2.length; w2++) {
      u2.index > w2 ? (x2 = u2, u2 = null) : x2 = u2.sibling;
      var n3 = r2(e2, u2, h2[w2], k3);
      if (null === n3) {
        null === u2 && (u2 = x2);
        break;
      }
      a && u2 && null === n3.alternate && b2(e2, u2);
      g2 = f2(n3, g2, w2);
      null === m3 ? l3 = n3 : m3.sibling = n3;
      m3 = n3;
      u2 = x2;
    }
    if (w2 === h2.length)
      return c(e2, u2), I && tg(e2, w2), l3;
    if (null === u2) {
      for (; w2 < h2.length; w2++)
        u2 = q2(e2, h2[w2], k3), null !== u2 && (g2 = f2(u2, g2, w2), null === m3 ? l3 = u2 : m3.sibling = u2, m3 = u2);
      I && tg(e2, w2);
      return l3;
    }
    for (u2 = d(e2, u2); w2 < h2.length; w2++)
      x2 = y2(u2, e2, w2, h2[w2], k3), null !== x2 && (a && null !== x2.alternate && u2.delete(null === x2.key ? w2 : x2.key), g2 = f2(x2, g2, w2), null === m3 ? l3 = x2 : m3.sibling = x2, m3 = x2);
    a && u2.forEach(function(a2) {
      return b2(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function t2(e2, g2, h2, k3) {
    var l3 = Ka(h2);
    if ("function" !== typeof l3)
      throw Error(p(150));
    h2 = l3.call(h2);
    if (null == h2)
      throw Error(p(151));
    for (var u2 = l3 = null, m3 = g2, w2 = g2 = 0, x2 = null, n3 = h2.next(); null !== m3 && !n3.done; w2++, n3 = h2.next()) {
      m3.index > w2 ? (x2 = m3, m3 = null) : x2 = m3.sibling;
      var t3 = r2(e2, m3, n3.value, k3);
      if (null === t3) {
        null === m3 && (m3 = x2);
        break;
      }
      a && m3 && null === t3.alternate && b2(e2, m3);
      g2 = f2(t3, g2, w2);
      null === u2 ? l3 = t3 : u2.sibling = t3;
      u2 = t3;
      m3 = x2;
    }
    if (n3.done)
      return c(
        e2,
        m3
      ), I && tg(e2, w2), l3;
    if (null === m3) {
      for (; !n3.done; w2++, n3 = h2.next())
        n3 = q2(e2, n3.value, k3), null !== n3 && (g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
      I && tg(e2, w2);
      return l3;
    }
    for (m3 = d(e2, m3); !n3.done; w2++, n3 = h2.next())
      n3 = y2(m3, e2, w2, n3.value, k3), null !== n3 && (a && null !== n3.alternate && m3.delete(null === n3.key ? w2 : n3.key), g2 = f2(n3, g2, w2), null === u2 ? l3 = n3 : u2.sibling = n3, u2 = n3);
    a && m3.forEach(function(a2) {
      return b2(e2, a2);
    });
    I && tg(e2, w2);
    return l3;
  }
  function J2(a2, d2, f3, h2) {
    "object" === typeof f3 && null !== f3 && f3.type === ya && null === f3.key && (f3 = f3.props.children);
    if ("object" === typeof f3 && null !== f3) {
      switch (f3.$$typeof) {
        case va:
          a: {
            for (var k3 = f3.key, l3 = d2; null !== l3; ) {
              if (l3.key === k3) {
                k3 = f3.type;
                if (k3 === ya) {
                  if (7 === l3.tag) {
                    c(a2, l3.sibling);
                    d2 = e(l3, f3.props.children);
                    d2.return = a2;
                    a2 = d2;
                    break a;
                  }
                } else if (l3.elementType === k3 || "object" === typeof k3 && null !== k3 && k3.$$typeof === Ha && uh(k3) === l3.type) {
                  c(a2, l3.sibling);
                  d2 = e(l3, f3.props);
                  d2.ref = sh(a2, l3, f3);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                }
                c(a2, l3);
                break;
              } else
                b2(a2, l3);
              l3 = l3.sibling;
            }
            f3.type === ya ? (d2 = Ah(f3.props.children, a2.mode, h2, f3.key), d2.return = a2, a2 = d2) : (h2 = yh(f3.type, f3.key, f3.props, null, a2.mode, h2), h2.ref = sh(a2, d2, f3), h2.return = a2, a2 = h2);
          }
          return g(a2);
        case wa:
          a: {
            for (l3 = f3.key; null !== d2; ) {
              if (d2.key === l3)
                if (4 === d2.tag && d2.stateNode.containerInfo === f3.containerInfo && d2.stateNode.implementation === f3.implementation) {
                  c(a2, d2.sibling);
                  d2 = e(d2, f3.children || []);
                  d2.return = a2;
                  a2 = d2;
                  break a;
                } else {
                  c(a2, d2);
                  break;
                }
              else
                b2(a2, d2);
              d2 = d2.sibling;
            }
            d2 = zh(f3, a2.mode, h2);
            d2.return = a2;
            a2 = d2;
          }
          return g(a2);
        case Ha:
          return l3 = f3._init, J2(a2, d2, l3(f3._payload), h2);
      }
      if (eb(f3))
        return n2(a2, d2, f3, h2);
      if (Ka(f3))
        return t2(a2, d2, f3, h2);
      th(a2, f3);
    }
    return "string" === typeof f3 && "" !== f3 || "number" === typeof f3 ? (f3 = "" + f3, null !== d2 && 6 === d2.tag ? (c(a2, d2.sibling), d2 = e(d2, f3), d2.return = a2, a2 = d2) : (c(a2, d2), d2 = xh(f3, a2.mode, h2), d2.return = a2, a2 = d2), g(a2)) : c(a2, d2);
  }
  return J2;
}
var Bh = vh(true), Ch = vh(false), Dh = {}, Eh = Uf(Dh), Fh = Uf(Dh), Gh = Uf(Dh);
function Hh(a) {
  if (a === Dh)
    throw Error(p(174));
  return a;
}
function Ih(a, b2) {
  G(Gh, b2);
  G(Fh, a);
  G(Eh, Dh);
  a = b2.nodeType;
  switch (a) {
    case 9:
    case 11:
      b2 = (b2 = b2.documentElement) ? b2.namespaceURI : lb(null, "");
      break;
    default:
      a = 8 === a ? b2.parentNode : b2, b2 = a.namespaceURI || null, a = a.tagName, b2 = lb(b2, a);
  }
  E(Eh);
  G(Eh, b2);
}
function Jh() {
  E(Eh);
  E(Fh);
  E(Gh);
}
function Kh(a) {
  Hh(Gh.current);
  var b2 = Hh(Eh.current);
  var c = lb(b2, a.type);
  b2 !== c && (G(Fh, a), G(Eh, c));
}
function Lh(a) {
  Fh.current === a && (E(Eh), E(Fh));
}
var M = Uf(0);
function Mh(a) {
  for (var b2 = a; null !== b2; ) {
    if (13 === b2.tag) {
      var c = b2.memoizedState;
      if (null !== c && (c = c.dehydrated, null === c || "$?" === c.data || "$!" === c.data))
        return b2;
    } else if (19 === b2.tag && void 0 !== b2.memoizedProps.revealOrder) {
      if (0 !== (b2.flags & 128))
        return b2;
    } else if (null !== b2.child) {
      b2.child.return = b2;
      b2 = b2.child;
      continue;
    }
    if (b2 === a)
      break;
    for (; null === b2.sibling; ) {
      if (null === b2.return || b2.return === a)
        return null;
      b2 = b2.return;
    }
    b2.sibling.return = b2.return;
    b2 = b2.sibling;
  }
  return null;
}
var Nh = [];
function Oh() {
  for (var a = 0; a < Nh.length; a++)
    Nh[a]._workInProgressVersionPrimary = null;
  Nh.length = 0;
}
var Ph = ua.ReactCurrentDispatcher, Qh = ua.ReactCurrentBatchConfig, Rh = 0, N = null, O = null, P = null, Sh = false, Th = false, Uh = 0, Vh = 0;
function Q() {
  throw Error(p(321));
}
function Wh(a, b2) {
  if (null === b2)
    return false;
  for (var c = 0; c < b2.length && c < a.length; c++)
    if (!He(a[c], b2[c]))
      return false;
  return true;
}
function Xh(a, b2, c, d, e, f2) {
  Rh = f2;
  N = b2;
  b2.memoizedState = null;
  b2.updateQueue = null;
  b2.lanes = 0;
  Ph.current = null === a || null === a.memoizedState ? Yh : Zh;
  a = c(d, e);
  if (Th) {
    f2 = 0;
    do {
      Th = false;
      Uh = 0;
      if (25 <= f2)
        throw Error(p(301));
      f2 += 1;
      P = O = null;
      b2.updateQueue = null;
      Ph.current = $h;
      a = c(d, e);
    } while (Th);
  }
  Ph.current = ai;
  b2 = null !== O && null !== O.next;
  Rh = 0;
  P = O = N = null;
  Sh = false;
  if (b2)
    throw Error(p(300));
  return a;
}
function bi() {
  var a = 0 !== Uh;
  Uh = 0;
  return a;
}
function ci() {
  var a = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
  null === P ? N.memoizedState = P = a : P = P.next = a;
  return P;
}
function di() {
  if (null === O) {
    var a = N.alternate;
    a = null !== a ? a.memoizedState : null;
  } else
    a = O.next;
  var b2 = null === P ? N.memoizedState : P.next;
  if (null !== b2)
    P = b2, O = a;
  else {
    if (null === a)
      throw Error(p(310));
    O = a;
    a = { memoizedState: O.memoizedState, baseState: O.baseState, baseQueue: O.baseQueue, queue: O.queue, next: null };
    null === P ? N.memoizedState = P = a : P = P.next = a;
  }
  return P;
}
function ei(a, b2) {
  return "function" === typeof b2 ? b2(a) : b2;
}
function fi(a) {
  var b2 = di(), c = b2.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = O, e = d.baseQueue, f2 = c.pending;
  if (null !== f2) {
    if (null !== e) {
      var g = e.next;
      e.next = f2.next;
      f2.next = g;
    }
    d.baseQueue = e = f2;
    c.pending = null;
  }
  if (null !== e) {
    f2 = e.next;
    d = d.baseState;
    var h = g = null, k2 = null, l2 = f2;
    do {
      var m2 = l2.lane;
      if ((Rh & m2) === m2)
        null !== k2 && (k2 = k2.next = { lane: 0, action: l2.action, hasEagerState: l2.hasEagerState, eagerState: l2.eagerState, next: null }), d = l2.hasEagerState ? l2.eagerState : a(d, l2.action);
      else {
        var q2 = {
          lane: m2,
          action: l2.action,
          hasEagerState: l2.hasEagerState,
          eagerState: l2.eagerState,
          next: null
        };
        null === k2 ? (h = k2 = q2, g = d) : k2 = k2.next = q2;
        N.lanes |= m2;
        hh |= m2;
      }
      l2 = l2.next;
    } while (null !== l2 && l2 !== f2);
    null === k2 ? g = d : k2.next = h;
    He(d, b2.memoizedState) || (Ug = true);
    b2.memoizedState = d;
    b2.baseState = g;
    b2.baseQueue = k2;
    c.lastRenderedState = d;
  }
  a = c.interleaved;
  if (null !== a) {
    e = a;
    do
      f2 = e.lane, N.lanes |= f2, hh |= f2, e = e.next;
    while (e !== a);
  } else
    null === e && (c.lanes = 0);
  return [b2.memoizedState, c.dispatch];
}
function gi(a) {
  var b2 = di(), c = b2.queue;
  if (null === c)
    throw Error(p(311));
  c.lastRenderedReducer = a;
  var d = c.dispatch, e = c.pending, f2 = b2.memoizedState;
  if (null !== e) {
    c.pending = null;
    var g = e = e.next;
    do
      f2 = a(f2, g.action), g = g.next;
    while (g !== e);
    He(f2, b2.memoizedState) || (Ug = true);
    b2.memoizedState = f2;
    null === b2.baseQueue && (b2.baseState = f2);
    c.lastRenderedState = f2;
  }
  return [f2, d];
}
function hi() {
}
function ii(a, b2) {
  var c = N, d = di(), e = b2(), f2 = !He(d.memoizedState, e);
  f2 && (d.memoizedState = e, Ug = true);
  d = d.queue;
  ji(ki.bind(null, c, d, a), [a]);
  if (d.getSnapshot !== b2 || f2 || null !== P && P.memoizedState.tag & 1) {
    c.flags |= 2048;
    li(9, mi.bind(null, c, d, e, b2), void 0, null);
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(c, b2, e);
  }
  return e;
}
function ni(a, b2, c) {
  a.flags |= 16384;
  a = { getSnapshot: b2, value: c };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.stores = [a]) : (c = b2.stores, null === c ? b2.stores = [a] : c.push(a));
}
function mi(a, b2, c, d) {
  b2.value = c;
  b2.getSnapshot = d;
  oi(b2) && pi(a);
}
function ki(a, b2, c) {
  return c(function() {
    oi(b2) && pi(a);
  });
}
function oi(a) {
  var b2 = a.getSnapshot;
  a = a.value;
  try {
    var c = b2();
    return !He(a, c);
  } catch (d) {
    return true;
  }
}
function pi(a) {
  var b2 = Zg(a, 1);
  null !== b2 && mh(b2, a, 1, -1);
}
function qi(a) {
  var b2 = ci();
  "function" === typeof a && (a = a());
  b2.memoizedState = b2.baseState = a;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: ei, lastRenderedState: a };
  b2.queue = a;
  a = a.dispatch = ri.bind(null, N, a);
  return [b2.memoizedState, a];
}
function li(a, b2, c, d) {
  a = { tag: a, create: b2, destroy: c, deps: d, next: null };
  b2 = N.updateQueue;
  null === b2 ? (b2 = { lastEffect: null, stores: null }, N.updateQueue = b2, b2.lastEffect = a.next = a) : (c = b2.lastEffect, null === c ? b2.lastEffect = a.next = a : (d = c.next, c.next = a, a.next = d, b2.lastEffect = a));
  return a;
}
function si() {
  return di().memoizedState;
}
function ti(a, b2, c, d) {
  var e = ci();
  N.flags |= a;
  e.memoizedState = li(1 | b2, c, void 0, void 0 === d ? null : d);
}
function ui(a, b2, c, d) {
  var e = di();
  d = void 0 === d ? null : d;
  var f2 = void 0;
  if (null !== O) {
    var g = O.memoizedState;
    f2 = g.destroy;
    if (null !== d && Wh(d, g.deps)) {
      e.memoizedState = li(b2, c, f2, d);
      return;
    }
  }
  N.flags |= a;
  e.memoizedState = li(1 | b2, c, f2, d);
}
function vi(a, b2) {
  return ti(8390656, 8, a, b2);
}
function ji(a, b2) {
  return ui(2048, 8, a, b2);
}
function wi(a, b2) {
  return ui(4, 2, a, b2);
}
function xi(a, b2) {
  return ui(4, 4, a, b2);
}
function yi(a, b2) {
  if ("function" === typeof b2)
    return a = a(), b2(a), function() {
      b2(null);
    };
  if (null !== b2 && void 0 !== b2)
    return a = a(), b2.current = a, function() {
      b2.current = null;
    };
}
function zi(a, b2, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ui(4, 4, yi.bind(null, b2, a), c);
}
function Ai() {
}
function Bi(a, b2) {
  var c = di();
  b2 = void 0 === b2 ? null : b2;
  var d = c.memoizedState;
  if (null !== d && null !== b2 && Wh(b2, d[1]))
    return d[0];
  c.memoizedState = [a, b2];
  return a;
}
function Ci(a, b2) {
  var c = di();
  b2 = void 0 === b2 ? null : b2;
  var d = c.memoizedState;
  if (null !== d && null !== b2 && Wh(b2, d[1]))
    return d[0];
  a = a();
  c.memoizedState = [a, b2];
  return a;
}
function Di(a, b2, c) {
  if (0 === (Rh & 21))
    return a.baseState && (a.baseState = false, Ug = true), a.memoizedState = c;
  He(c, b2) || (c = yc(), N.lanes |= c, hh |= c, a.baseState = true);
  return b2;
}
function Ei(a, b2) {
  var c = C;
  C = 0 !== c && 4 > c ? c : 4;
  a(true);
  var d = Qh.transition;
  Qh.transition = {};
  try {
    a(false), b2();
  } finally {
    C = c, Qh.transition = d;
  }
}
function Fi() {
  return di().memoizedState;
}
function Gi(a, b2, c) {
  var d = lh(a);
  c = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, c);
  else if (c = Yg(a, b2, c, d), null !== c) {
    var e = L();
    mh(c, a, d, e);
    Ji(c, b2, d);
  }
}
function ri(a, b2, c) {
  var d = lh(a), e = { lane: d, action: c, hasEagerState: false, eagerState: null, next: null };
  if (Hi(a))
    Ii(b2, e);
  else {
    var f2 = a.alternate;
    if (0 === a.lanes && (null === f2 || 0 === f2.lanes) && (f2 = b2.lastRenderedReducer, null !== f2))
      try {
        var g = b2.lastRenderedState, h = f2(g, c);
        e.hasEagerState = true;
        e.eagerState = h;
        if (He(h, g)) {
          var k2 = b2.interleaved;
          null === k2 ? (e.next = e, Xg(b2)) : (e.next = k2.next, k2.next = e);
          b2.interleaved = e;
          return;
        }
      } catch (l2) {
      } finally {
      }
    c = Yg(a, b2, e, d);
    null !== c && (e = L(), mh(c, a, d, e), Ji(c, b2, d));
  }
}
function Hi(a) {
  var b2 = a.alternate;
  return a === N || null !== b2 && b2 === N;
}
function Ii(a, b2) {
  Th = Sh = true;
  var c = a.pending;
  null === c ? b2.next = b2 : (b2.next = c.next, c.next = b2);
  a.pending = b2;
}
function Ji(a, b2, c) {
  if (0 !== (c & 4194240)) {
    var d = b2.lanes;
    d &= a.pendingLanes;
    c |= d;
    b2.lanes = c;
    Cc(a, c);
  }
}
var ai = { readContext: Vg, useCallback: Q, useContext: Q, useEffect: Q, useImperativeHandle: Q, useInsertionEffect: Q, useLayoutEffect: Q, useMemo: Q, useReducer: Q, useRef: Q, useState: Q, useDebugValue: Q, useDeferredValue: Q, useTransition: Q, useMutableSource: Q, useSyncExternalStore: Q, useId: Q, unstable_isNewReconciler: false }, Yh = { readContext: Vg, useCallback: function(a, b2) {
  ci().memoizedState = [a, void 0 === b2 ? null : b2];
  return a;
}, useContext: Vg, useEffect: vi, useImperativeHandle: function(a, b2, c) {
  c = null !== c && void 0 !== c ? c.concat([a]) : null;
  return ti(
    4194308,
    4,
    yi.bind(null, b2, a),
    c
  );
}, useLayoutEffect: function(a, b2) {
  return ti(4194308, 4, a, b2);
}, useInsertionEffect: function(a, b2) {
  return ti(4, 2, a, b2);
}, useMemo: function(a, b2) {
  var c = ci();
  b2 = void 0 === b2 ? null : b2;
  a = a();
  c.memoizedState = [a, b2];
  return a;
}, useReducer: function(a, b2, c) {
  var d = ci();
  b2 = void 0 !== c ? c(b2) : b2;
  d.memoizedState = d.baseState = b2;
  a = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: a, lastRenderedState: b2 };
  d.queue = a;
  a = a.dispatch = Gi.bind(null, N, a);
  return [d.memoizedState, a];
}, useRef: function(a) {
  var b2 = ci();
  a = { current: a };
  return b2.memoizedState = a;
}, useState: qi, useDebugValue: Ai, useDeferredValue: function(a) {
  return ci().memoizedState = a;
}, useTransition: function() {
  var a = qi(false), b2 = a[0];
  a = Ei.bind(null, a[1]);
  ci().memoizedState = a;
  return [b2, a];
}, useMutableSource: function() {
}, useSyncExternalStore: function(a, b2, c) {
  var d = N, e = ci();
  if (I) {
    if (void 0 === c)
      throw Error(p(407));
    c = c();
  } else {
    c = b2();
    if (null === R)
      throw Error(p(349));
    0 !== (Rh & 30) || ni(d, b2, c);
  }
  e.memoizedState = c;
  var f2 = { value: c, getSnapshot: b2 };
  e.queue = f2;
  vi(ki.bind(
    null,
    d,
    f2,
    a
  ), [a]);
  d.flags |= 2048;
  li(9, mi.bind(null, d, f2, c, b2), void 0, null);
  return c;
}, useId: function() {
  var a = ci(), b2 = R.identifierPrefix;
  if (I) {
    var c = sg;
    var d = rg;
    c = (d & ~(1 << 32 - oc(d) - 1)).toString(32) + c;
    b2 = ":" + b2 + "R" + c;
    c = Uh++;
    0 < c && (b2 += "H" + c.toString(32));
    b2 += ":";
  } else
    c = Vh++, b2 = ":" + b2 + "r" + c.toString(32) + ":";
  return a.memoizedState = b2;
}, unstable_isNewReconciler: false }, Zh = {
  readContext: Vg,
  useCallback: Bi,
  useContext: Vg,
  useEffect: ji,
  useImperativeHandle: zi,
  useInsertionEffect: wi,
  useLayoutEffect: xi,
  useMemo: Ci,
  useReducer: fi,
  useRef: si,
  useState: function() {
    return fi(ei);
  },
  useDebugValue: Ai,
  useDeferredValue: function(a) {
    var b2 = di();
    return Di(b2, O.memoizedState, a);
  },
  useTransition: function() {
    var a = fi(ei)[0], b2 = di().memoizedState;
    return [a, b2];
  },
  useMutableSource: hi,
  useSyncExternalStore: ii,
  useId: Fi,
  unstable_isNewReconciler: false
}, $h = { readContext: Vg, useCallback: Bi, useContext: Vg, useEffect: ji, useImperativeHandle: zi, useInsertionEffect: wi, useLayoutEffect: xi, useMemo: Ci, useReducer: gi, useRef: si, useState: function() {
  return gi(ei);
}, useDebugValue: Ai, useDeferredValue: function(a) {
  var b2 = di();
  return null === O ? b2.memoizedState = a : Di(b2, O.memoizedState, a);
}, useTransition: function() {
  var a = gi(ei)[0], b2 = di().memoizedState;
  return [a, b2];
}, useMutableSource: hi, useSyncExternalStore: ii, useId: Fi, unstable_isNewReconciler: false };
function Ki(a, b2) {
  try {
    var c = "", d = b2;
    do
      c += Pa(d), d = d.return;
    while (d);
    var e = c;
  } catch (f2) {
    e = "\nError generating stack: " + f2.message + "\n" + f2.stack;
  }
  return { value: a, source: b2, stack: e, digest: null };
}
function Li(a, b2, c) {
  return { value: a, source: null, stack: null != c ? c : null, digest: null != b2 ? b2 : null };
}
function Mi(a, b2) {
  try {
    console.error(b2.value);
  } catch (c) {
    setTimeout(function() {
      throw c;
    });
  }
}
var Ni = "function" === typeof WeakMap ? WeakMap : Map;
function Oi(a, b2, c) {
  c = ch(-1, c);
  c.tag = 3;
  c.payload = { element: null };
  var d = b2.value;
  c.callback = function() {
    Pi || (Pi = true, Qi = d);
    Mi(a, b2);
  };
  return c;
}
function Ri(a, b2, c) {
  c = ch(-1, c);
  c.tag = 3;
  var d = a.type.getDerivedStateFromError;
  if ("function" === typeof d) {
    var e = b2.value;
    c.payload = function() {
      return d(e);
    };
    c.callback = function() {
      Mi(a, b2);
    };
  }
  var f2 = a.stateNode;
  null !== f2 && "function" === typeof f2.componentDidCatch && (c.callback = function() {
    Mi(a, b2);
    "function" !== typeof d && (null === Si ? Si = /* @__PURE__ */ new Set([this]) : Si.add(this));
    var c2 = b2.stack;
    this.componentDidCatch(b2.value, { componentStack: null !== c2 ? c2 : "" });
  });
  return c;
}
function Ti(a, b2, c) {
  var d = a.pingCache;
  if (null === d) {
    d = a.pingCache = new Ni();
    var e = /* @__PURE__ */ new Set();
    d.set(b2, e);
  } else
    e = d.get(b2), void 0 === e && (e = /* @__PURE__ */ new Set(), d.set(b2, e));
  e.has(c) || (e.add(c), a = Ui.bind(null, a, b2, c), b2.then(a, a));
}
function Vi(a) {
  do {
    var b2;
    if (b2 = 13 === a.tag)
      b2 = a.memoizedState, b2 = null !== b2 ? null !== b2.dehydrated ? true : false : true;
    if (b2)
      return a;
    a = a.return;
  } while (null !== a);
  return null;
}
function Wi(a, b2, c, d, e) {
  if (0 === (a.mode & 1))
    return a === b2 ? a.flags |= 65536 : (a.flags |= 128, c.flags |= 131072, c.flags &= -52805, 1 === c.tag && (null === c.alternate ? c.tag = 17 : (b2 = ch(-1, 1), b2.tag = 2, dh(c, b2, 1))), c.lanes |= 1), a;
  a.flags |= 65536;
  a.lanes = e;
  return a;
}
var Xi = ua.ReactCurrentOwner, Ug = false;
function Yi(a, b2, c, d) {
  b2.child = null === a ? Ch(b2, null, c, d) : Bh(b2, a.child, c, d);
}
function Zi(a, b2, c, d, e) {
  c = c.render;
  var f2 = b2.ref;
  Tg(b2, e);
  d = Xh(a, b2, c, d, f2, e);
  c = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, $i(a, b2, e);
  I && c && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, d, e);
  return b2.child;
}
function aj(a, b2, c, d, e) {
  if (null === a) {
    var f2 = c.type;
    if ("function" === typeof f2 && !bj(f2) && void 0 === f2.defaultProps && null === c.compare && void 0 === c.defaultProps)
      return b2.tag = 15, b2.type = f2, cj(a, b2, f2, d, e);
    a = yh(c.type, null, d, b2, b2.mode, e);
    a.ref = b2.ref;
    a.return = b2;
    return b2.child = a;
  }
  f2 = a.child;
  if (0 === (a.lanes & e)) {
    var g = f2.memoizedProps;
    c = c.compare;
    c = null !== c ? c : Ie;
    if (c(g, d) && a.ref === b2.ref)
      return $i(a, b2, e);
  }
  b2.flags |= 1;
  a = wh(f2, d);
  a.ref = b2.ref;
  a.return = b2;
  return b2.child = a;
}
function cj(a, b2, c, d, e) {
  if (null !== a) {
    var f2 = a.memoizedProps;
    if (Ie(f2, d) && a.ref === b2.ref)
      if (Ug = false, b2.pendingProps = d = f2, 0 !== (a.lanes & e))
        0 !== (a.flags & 131072) && (Ug = true);
      else
        return b2.lanes = a.lanes, $i(a, b2, e);
  }
  return dj(a, b2, c, d, e);
}
function ej(a, b2, c) {
  var d = b2.pendingProps, e = d.children, f2 = null !== a ? a.memoizedState : null;
  if ("hidden" === d.mode)
    if (0 === (b2.mode & 1))
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, G(fj, gj), gj |= c;
    else {
      if (0 === (c & 1073741824))
        return a = null !== f2 ? f2.baseLanes | c : c, b2.lanes = b2.childLanes = 1073741824, b2.memoizedState = { baseLanes: a, cachePool: null, transitions: null }, b2.updateQueue = null, G(fj, gj), gj |= a, null;
      b2.memoizedState = { baseLanes: 0, cachePool: null, transitions: null };
      d = null !== f2 ? f2.baseLanes : c;
      G(fj, gj);
      gj |= d;
    }
  else
    null !== f2 ? (d = f2.baseLanes | c, b2.memoizedState = null) : d = c, G(fj, gj), gj |= d;
  Yi(a, b2, e, c);
  return b2.child;
}
function hj(a, b2) {
  var c = b2.ref;
  if (null === a && null !== c || null !== a && a.ref !== c)
    b2.flags |= 512, b2.flags |= 2097152;
}
function dj(a, b2, c, d, e) {
  var f2 = Zf(c) ? Xf : H.current;
  f2 = Yf(b2, f2);
  Tg(b2, e);
  c = Xh(a, b2, c, d, f2, e);
  d = bi();
  if (null !== a && !Ug)
    return b2.updateQueue = a.updateQueue, b2.flags &= -2053, a.lanes &= ~e, $i(a, b2, e);
  I && d && vg(b2);
  b2.flags |= 1;
  Yi(a, b2, c, e);
  return b2.child;
}
function ij(a, b2, c, d, e) {
  if (Zf(c)) {
    var f2 = true;
    cg(b2);
  } else
    f2 = false;
  Tg(b2, e);
  if (null === b2.stateNode)
    jj(a, b2), ph(b2, c, d), rh(b2, c, d, e), d = true;
  else if (null === a) {
    var g = b2.stateNode, h = b2.memoizedProps;
    g.props = h;
    var k2 = g.context, l2 = c.contextType;
    "object" === typeof l2 && null !== l2 ? l2 = Vg(l2) : (l2 = Zf(c) ? Xf : H.current, l2 = Yf(b2, l2));
    var m2 = c.getDerivedStateFromProps, q2 = "function" === typeof m2 || "function" === typeof g.getSnapshotBeforeUpdate;
    q2 || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== d || k2 !== l2) && qh(b2, g, d, l2);
    $g = false;
    var r2 = b2.memoizedState;
    g.state = r2;
    gh(b2, d, g, e);
    k2 = b2.memoizedState;
    h !== d || r2 !== k2 || Wf.current || $g ? ("function" === typeof m2 && (kh(b2, c, m2, d), k2 = b2.memoizedState), (h = $g || oh(b2, c, h, d, r2, k2, l2)) ? (q2 || "function" !== typeof g.UNSAFE_componentWillMount && "function" !== typeof g.componentWillMount || ("function" === typeof g.componentWillMount && g.componentWillMount(), "function" === typeof g.UNSAFE_componentWillMount && g.UNSAFE_componentWillMount()), "function" === typeof g.componentDidMount && (b2.flags |= 4194308)) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), b2.memoizedProps = d, b2.memoizedState = k2), g.props = d, g.state = k2, g.context = l2, d = h) : ("function" === typeof g.componentDidMount && (b2.flags |= 4194308), d = false);
  } else {
    g = b2.stateNode;
    bh(a, b2);
    h = b2.memoizedProps;
    l2 = b2.type === b2.elementType ? h : Lg(b2.type, h);
    g.props = l2;
    q2 = b2.pendingProps;
    r2 = g.context;
    k2 = c.contextType;
    "object" === typeof k2 && null !== k2 ? k2 = Vg(k2) : (k2 = Zf(c) ? Xf : H.current, k2 = Yf(b2, k2));
    var y2 = c.getDerivedStateFromProps;
    (m2 = "function" === typeof y2 || "function" === typeof g.getSnapshotBeforeUpdate) || "function" !== typeof g.UNSAFE_componentWillReceiveProps && "function" !== typeof g.componentWillReceiveProps || (h !== q2 || r2 !== k2) && qh(b2, g, d, k2);
    $g = false;
    r2 = b2.memoizedState;
    g.state = r2;
    gh(b2, d, g, e);
    var n2 = b2.memoizedState;
    h !== q2 || r2 !== n2 || Wf.current || $g ? ("function" === typeof y2 && (kh(b2, c, y2, d), n2 = b2.memoizedState), (l2 = $g || oh(b2, c, l2, d, r2, n2, k2) || false) ? (m2 || "function" !== typeof g.UNSAFE_componentWillUpdate && "function" !== typeof g.componentWillUpdate || ("function" === typeof g.componentWillUpdate && g.componentWillUpdate(d, n2, k2), "function" === typeof g.UNSAFE_componentWillUpdate && g.UNSAFE_componentWillUpdate(d, n2, k2)), "function" === typeof g.componentDidUpdate && (b2.flags |= 4), "function" === typeof g.getSnapshotBeforeUpdate && (b2.flags |= 1024)) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), b2.memoizedProps = d, b2.memoizedState = n2), g.props = d, g.state = n2, g.context = k2, d = l2) : ("function" !== typeof g.componentDidUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 4), "function" !== typeof g.getSnapshotBeforeUpdate || h === a.memoizedProps && r2 === a.memoizedState || (b2.flags |= 1024), d = false);
  }
  return kj(a, b2, c, d, f2, e);
}
function kj(a, b2, c, d, e, f2) {
  hj(a, b2);
  var g = 0 !== (b2.flags & 128);
  if (!d && !g)
    return e && dg(b2, c, false), $i(a, b2, f2);
  d = b2.stateNode;
  Xi.current = b2;
  var h = g && "function" !== typeof c.getDerivedStateFromError ? null : d.render();
  b2.flags |= 1;
  null !== a && g ? (b2.child = Bh(b2, a.child, null, f2), b2.child = Bh(b2, null, h, f2)) : Yi(a, b2, h, f2);
  b2.memoizedState = d.state;
  e && dg(b2, c, true);
  return b2.child;
}
function lj(a) {
  var b2 = a.stateNode;
  b2.pendingContext ? ag(a, b2.pendingContext, b2.pendingContext !== b2.context) : b2.context && ag(a, b2.context, false);
  Ih(a, b2.containerInfo);
}
function mj(a, b2, c, d, e) {
  Ig();
  Jg(e);
  b2.flags |= 256;
  Yi(a, b2, c, d);
  return b2.child;
}
var nj = { dehydrated: null, treeContext: null, retryLane: 0 };
function oj(a) {
  return { baseLanes: a, cachePool: null, transitions: null };
}
function pj(a, b2, c) {
  var d = b2.pendingProps, e = M.current, f2 = false, g = 0 !== (b2.flags & 128), h;
  (h = g) || (h = null !== a && null === a.memoizedState ? false : 0 !== (e & 2));
  if (h)
    f2 = true, b2.flags &= -129;
  else if (null === a || null !== a.memoizedState)
    e |= 1;
  G(M, e & 1);
  if (null === a) {
    Eg(b2);
    a = b2.memoizedState;
    if (null !== a && (a = a.dehydrated, null !== a))
      return 0 === (b2.mode & 1) ? b2.lanes = 1 : "$!" === a.data ? b2.lanes = 8 : b2.lanes = 1073741824, null;
    g = d.children;
    a = d.fallback;
    return f2 ? (d = b2.mode, f2 = b2.child, g = { mode: "hidden", children: g }, 0 === (d & 1) && null !== f2 ? (f2.childLanes = 0, f2.pendingProps = g) : f2 = qj(g, d, 0, null), a = Ah(a, d, c, null), f2.return = b2, a.return = b2, f2.sibling = a, b2.child = f2, b2.child.memoizedState = oj(c), b2.memoizedState = nj, a) : rj(b2, g);
  }
  e = a.memoizedState;
  if (null !== e && (h = e.dehydrated, null !== h))
    return sj(a, b2, g, d, h, e, c);
  if (f2) {
    f2 = d.fallback;
    g = b2.mode;
    e = a.child;
    h = e.sibling;
    var k2 = { mode: "hidden", children: d.children };
    0 === (g & 1) && b2.child !== e ? (d = b2.child, d.childLanes = 0, d.pendingProps = k2, b2.deletions = null) : (d = wh(e, k2), d.subtreeFlags = e.subtreeFlags & 14680064);
    null !== h ? f2 = wh(h, f2) : (f2 = Ah(f2, g, c, null), f2.flags |= 2);
    f2.return = b2;
    d.return = b2;
    d.sibling = f2;
    b2.child = d;
    d = f2;
    f2 = b2.child;
    g = a.child.memoizedState;
    g = null === g ? oj(c) : { baseLanes: g.baseLanes | c, cachePool: null, transitions: g.transitions };
    f2.memoizedState = g;
    f2.childLanes = a.childLanes & ~c;
    b2.memoizedState = nj;
    return d;
  }
  f2 = a.child;
  a = f2.sibling;
  d = wh(f2, { mode: "visible", children: d.children });
  0 === (b2.mode & 1) && (d.lanes = c);
  d.return = b2;
  d.sibling = null;
  null !== a && (c = b2.deletions, null === c ? (b2.deletions = [a], b2.flags |= 16) : c.push(a));
  b2.child = d;
  b2.memoizedState = null;
  return d;
}
function rj(a, b2) {
  b2 = qj({ mode: "visible", children: b2 }, a.mode, 0, null);
  b2.return = a;
  return a.child = b2;
}
function tj(a, b2, c, d) {
  null !== d && Jg(d);
  Bh(b2, a.child, null, c);
  a = rj(b2, b2.pendingProps.children);
  a.flags |= 2;
  b2.memoizedState = null;
  return a;
}
function sj(a, b2, c, d, e, f2, g) {
  if (c) {
    if (b2.flags & 256)
      return b2.flags &= -257, d = Li(Error(p(422))), tj(a, b2, g, d);
    if (null !== b2.memoizedState)
      return b2.child = a.child, b2.flags |= 128, null;
    f2 = d.fallback;
    e = b2.mode;
    d = qj({ mode: "visible", children: d.children }, e, 0, null);
    f2 = Ah(f2, e, g, null);
    f2.flags |= 2;
    d.return = b2;
    f2.return = b2;
    d.sibling = f2;
    b2.child = d;
    0 !== (b2.mode & 1) && Bh(b2, a.child, null, g);
    b2.child.memoizedState = oj(g);
    b2.memoizedState = nj;
    return f2;
  }
  if (0 === (b2.mode & 1))
    return tj(a, b2, g, null);
  if ("$!" === e.data) {
    d = e.nextSibling && e.nextSibling.dataset;
    if (d)
      var h = d.dgst;
    d = h;
    f2 = Error(p(419));
    d = Li(f2, d, void 0);
    return tj(a, b2, g, d);
  }
  h = 0 !== (g & a.childLanes);
  if (Ug || h) {
    d = R;
    if (null !== d) {
      switch (g & -g) {
        case 4:
          e = 2;
          break;
        case 16:
          e = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          e = 32;
          break;
        case 536870912:
          e = 268435456;
          break;
        default:
          e = 0;
      }
      e = 0 !== (e & (d.suspendedLanes | g)) ? 0 : e;
      0 !== e && e !== f2.retryLane && (f2.retryLane = e, Zg(a, e), mh(d, a, e, -1));
    }
    uj();
    d = Li(Error(p(421)));
    return tj(a, b2, g, d);
  }
  if ("$?" === e.data)
    return b2.flags |= 128, b2.child = a.child, b2 = vj.bind(null, a), e._reactRetry = b2, null;
  a = f2.treeContext;
  yg = Lf(e.nextSibling);
  xg = b2;
  I = true;
  zg = null;
  null !== a && (og[pg++] = rg, og[pg++] = sg, og[pg++] = qg, rg = a.id, sg = a.overflow, qg = b2);
  b2 = rj(b2, d.children);
  b2.flags |= 4096;
  return b2;
}
function wj(a, b2, c) {
  a.lanes |= b2;
  var d = a.alternate;
  null !== d && (d.lanes |= b2);
  Sg(a.return, b2, c);
}
function xj(a, b2, c, d, e) {
  var f2 = a.memoizedState;
  null === f2 ? a.memoizedState = { isBackwards: b2, rendering: null, renderingStartTime: 0, last: d, tail: c, tailMode: e } : (f2.isBackwards = b2, f2.rendering = null, f2.renderingStartTime = 0, f2.last = d, f2.tail = c, f2.tailMode = e);
}
function yj(a, b2, c) {
  var d = b2.pendingProps, e = d.revealOrder, f2 = d.tail;
  Yi(a, b2, d.children, c);
  d = M.current;
  if (0 !== (d & 2))
    d = d & 1 | 2, b2.flags |= 128;
  else {
    if (null !== a && 0 !== (a.flags & 128))
      a:
        for (a = b2.child; null !== a; ) {
          if (13 === a.tag)
            null !== a.memoizedState && wj(a, c, b2);
          else if (19 === a.tag)
            wj(a, c, b2);
          else if (null !== a.child) {
            a.child.return = a;
            a = a.child;
            continue;
          }
          if (a === b2)
            break a;
          for (; null === a.sibling; ) {
            if (null === a.return || a.return === b2)
              break a;
            a = a.return;
          }
          a.sibling.return = a.return;
          a = a.sibling;
        }
    d &= 1;
  }
  G(M, d);
  if (0 === (b2.mode & 1))
    b2.memoizedState = null;
  else
    switch (e) {
      case "forwards":
        c = b2.child;
        for (e = null; null !== c; )
          a = c.alternate, null !== a && null === Mh(a) && (e = c), c = c.sibling;
        c = e;
        null === c ? (e = b2.child, b2.child = null) : (e = c.sibling, c.sibling = null);
        xj(b2, false, e, c, f2);
        break;
      case "backwards":
        c = null;
        e = b2.child;
        for (b2.child = null; null !== e; ) {
          a = e.alternate;
          if (null !== a && null === Mh(a)) {
            b2.child = e;
            break;
          }
          a = e.sibling;
          e.sibling = c;
          c = e;
          e = a;
        }
        xj(b2, true, c, null, f2);
        break;
      case "together":
        xj(b2, false, null, null, void 0);
        break;
      default:
        b2.memoizedState = null;
    }
  return b2.child;
}
function jj(a, b2) {
  0 === (b2.mode & 1) && null !== a && (a.alternate = null, b2.alternate = null, b2.flags |= 2);
}
function $i(a, b2, c) {
  null !== a && (b2.dependencies = a.dependencies);
  hh |= b2.lanes;
  if (0 === (c & b2.childLanes))
    return null;
  if (null !== a && b2.child !== a.child)
    throw Error(p(153));
  if (null !== b2.child) {
    a = b2.child;
    c = wh(a, a.pendingProps);
    b2.child = c;
    for (c.return = b2; null !== a.sibling; )
      a = a.sibling, c = c.sibling = wh(a, a.pendingProps), c.return = b2;
    c.sibling = null;
  }
  return b2.child;
}
function zj(a, b2, c) {
  switch (b2.tag) {
    case 3:
      lj(b2);
      Ig();
      break;
    case 5:
      Kh(b2);
      break;
    case 1:
      Zf(b2.type) && cg(b2);
      break;
    case 4:
      Ih(b2, b2.stateNode.containerInfo);
      break;
    case 10:
      var d = b2.type._context, e = b2.memoizedProps.value;
      G(Mg, d._currentValue);
      d._currentValue = e;
      break;
    case 13:
      d = b2.memoizedState;
      if (null !== d) {
        if (null !== d.dehydrated)
          return G(M, M.current & 1), b2.flags |= 128, null;
        if (0 !== (c & b2.child.childLanes))
          return pj(a, b2, c);
        G(M, M.current & 1);
        a = $i(a, b2, c);
        return null !== a ? a.sibling : null;
      }
      G(M, M.current & 1);
      break;
    case 19:
      d = 0 !== (c & b2.childLanes);
      if (0 !== (a.flags & 128)) {
        if (d)
          return yj(a, b2, c);
        b2.flags |= 128;
      }
      e = b2.memoizedState;
      null !== e && (e.rendering = null, e.tail = null, e.lastEffect = null);
      G(M, M.current);
      if (d)
        break;
      else
        return null;
    case 22:
    case 23:
      return b2.lanes = 0, ej(a, b2, c);
  }
  return $i(a, b2, c);
}
var Aj, Bj, Cj, Dj;
Aj = function(a, b2) {
  for (var c = b2.child; null !== c; ) {
    if (5 === c.tag || 6 === c.tag)
      a.appendChild(c.stateNode);
    else if (4 !== c.tag && null !== c.child) {
      c.child.return = c;
      c = c.child;
      continue;
    }
    if (c === b2)
      break;
    for (; null === c.sibling; ) {
      if (null === c.return || c.return === b2)
        return;
      c = c.return;
    }
    c.sibling.return = c.return;
    c = c.sibling;
  }
};
Bj = function() {
};
Cj = function(a, b2, c, d) {
  var e = a.memoizedProps;
  if (e !== d) {
    a = b2.stateNode;
    Hh(Eh.current);
    var f2 = null;
    switch (c) {
      case "input":
        e = Ya(a, e);
        d = Ya(a, d);
        f2 = [];
        break;
      case "select":
        e = A({}, e, { value: void 0 });
        d = A({}, d, { value: void 0 });
        f2 = [];
        break;
      case "textarea":
        e = gb(a, e);
        d = gb(a, d);
        f2 = [];
        break;
      default:
        "function" !== typeof e.onClick && "function" === typeof d.onClick && (a.onclick = Bf);
    }
    ub(c, d);
    var g;
    c = null;
    for (l2 in e)
      if (!d.hasOwnProperty(l2) && e.hasOwnProperty(l2) && null != e[l2])
        if ("style" === l2) {
          var h = e[l2];
          for (g in h)
            h.hasOwnProperty(g) && (c || (c = {}), c[g] = "");
        } else
          "dangerouslySetInnerHTML" !== l2 && "children" !== l2 && "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && "autoFocus" !== l2 && (ea.hasOwnProperty(l2) ? f2 || (f2 = []) : (f2 = f2 || []).push(l2, null));
    for (l2 in d) {
      var k2 = d[l2];
      h = null != e ? e[l2] : void 0;
      if (d.hasOwnProperty(l2) && k2 !== h && (null != k2 || null != h))
        if ("style" === l2)
          if (h) {
            for (g in h)
              !h.hasOwnProperty(g) || k2 && k2.hasOwnProperty(g) || (c || (c = {}), c[g] = "");
            for (g in k2)
              k2.hasOwnProperty(g) && h[g] !== k2[g] && (c || (c = {}), c[g] = k2[g]);
          } else
            c || (f2 || (f2 = []), f2.push(
              l2,
              c
            )), c = k2;
        else
          "dangerouslySetInnerHTML" === l2 ? (k2 = k2 ? k2.__html : void 0, h = h ? h.__html : void 0, null != k2 && h !== k2 && (f2 = f2 || []).push(l2, k2)) : "children" === l2 ? "string" !== typeof k2 && "number" !== typeof k2 || (f2 = f2 || []).push(l2, "" + k2) : "suppressContentEditableWarning" !== l2 && "suppressHydrationWarning" !== l2 && (ea.hasOwnProperty(l2) ? (null != k2 && "onScroll" === l2 && D("scroll", a), f2 || h === k2 || (f2 = [])) : (f2 = f2 || []).push(l2, k2));
    }
    c && (f2 = f2 || []).push("style", c);
    var l2 = f2;
    if (b2.updateQueue = l2)
      b2.flags |= 4;
  }
};
Dj = function(a, b2, c, d) {
  c !== d && (b2.flags |= 4);
};
function Ej(a, b2) {
  if (!I)
    switch (a.tailMode) {
      case "hidden":
        b2 = a.tail;
        for (var c = null; null !== b2; )
          null !== b2.alternate && (c = b2), b2 = b2.sibling;
        null === c ? a.tail = null : c.sibling = null;
        break;
      case "collapsed":
        c = a.tail;
        for (var d = null; null !== c; )
          null !== c.alternate && (d = c), c = c.sibling;
        null === d ? b2 || null === a.tail ? a.tail = null : a.tail.sibling = null : d.sibling = null;
    }
}
function S(a) {
  var b2 = null !== a.alternate && a.alternate.child === a.child, c = 0, d = 0;
  if (b2)
    for (var e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags & 14680064, d |= e.flags & 14680064, e.return = a, e = e.sibling;
  else
    for (e = a.child; null !== e; )
      c |= e.lanes | e.childLanes, d |= e.subtreeFlags, d |= e.flags, e.return = a, e = e.sibling;
  a.subtreeFlags |= d;
  a.childLanes = c;
  return b2;
}
function Fj(a, b2, c) {
  var d = b2.pendingProps;
  wg(b2);
  switch (b2.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return S(b2), null;
    case 1:
      return Zf(b2.type) && $f(), S(b2), null;
    case 3:
      d = b2.stateNode;
      Jh();
      E(Wf);
      E(H);
      Oh();
      d.pendingContext && (d.context = d.pendingContext, d.pendingContext = null);
      if (null === a || null === a.child)
        Gg(b2) ? b2.flags |= 4 : null === a || a.memoizedState.isDehydrated && 0 === (b2.flags & 256) || (b2.flags |= 1024, null !== zg && (Gj(zg), zg = null));
      Bj(a, b2);
      S(b2);
      return null;
    case 5:
      Lh(b2);
      var e = Hh(Gh.current);
      c = b2.type;
      if (null !== a && null != b2.stateNode)
        Cj(a, b2, c, d, e), a.ref !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      else {
        if (!d) {
          if (null === b2.stateNode)
            throw Error(p(166));
          S(b2);
          return null;
        }
        a = Hh(Eh.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c = b2.type;
          var f2 = b2.memoizedProps;
          d[Of] = b2;
          d[Pf] = f2;
          a = 0 !== (b2.mode & 1);
          switch (c) {
            case "dialog":
              D("cancel", d);
              D("close", d);
              break;
            case "iframe":
            case "object":
            case "embed":
              D("load", d);
              break;
            case "video":
            case "audio":
              for (e = 0; e < lf.length; e++)
                D(lf[e], d);
              break;
            case "source":
              D("error", d);
              break;
            case "img":
            case "image":
            case "link":
              D(
                "error",
                d
              );
              D("load", d);
              break;
            case "details":
              D("toggle", d);
              break;
            case "input":
              Za(d, f2);
              D("invalid", d);
              break;
            case "select":
              d._wrapperState = { wasMultiple: !!f2.multiple };
              D("invalid", d);
              break;
            case "textarea":
              hb(d, f2), D("invalid", d);
          }
          ub(c, f2);
          e = null;
          for (var g in f2)
            if (f2.hasOwnProperty(g)) {
              var h = f2[g];
              "children" === g ? "string" === typeof h ? d.textContent !== h && (true !== f2.suppressHydrationWarning && Af(d.textContent, h, a), e = ["children", h]) : "number" === typeof h && d.textContent !== "" + h && (true !== f2.suppressHydrationWarning && Af(
                d.textContent,
                h,
                a
              ), e = ["children", "" + h]) : ea.hasOwnProperty(g) && null != h && "onScroll" === g && D("scroll", d);
            }
          switch (c) {
            case "input":
              Va(d);
              db(d, f2, true);
              break;
            case "textarea":
              Va(d);
              jb(d);
              break;
            case "select":
            case "option":
              break;
            default:
              "function" === typeof f2.onClick && (d.onclick = Bf);
          }
          d = e;
          b2.updateQueue = d;
          null !== d && (b2.flags |= 4);
        } else {
          g = 9 === e.nodeType ? e : e.ownerDocument;
          "http://www.w3.org/1999/xhtml" === a && (a = kb(c));
          "http://www.w3.org/1999/xhtml" === a ? "script" === c ? (a = g.createElement("div"), a.innerHTML = "<script><\/script>", a = a.removeChild(a.firstChild)) : "string" === typeof d.is ? a = g.createElement(c, { is: d.is }) : (a = g.createElement(c), "select" === c && (g = a, d.multiple ? g.multiple = true : d.size && (g.size = d.size))) : a = g.createElementNS(a, c);
          a[Of] = b2;
          a[Pf] = d;
          Aj(a, b2, false, false);
          b2.stateNode = a;
          a: {
            g = vb(c, d);
            switch (c) {
              case "dialog":
                D("cancel", a);
                D("close", a);
                e = d;
                break;
              case "iframe":
              case "object":
              case "embed":
                D("load", a);
                e = d;
                break;
              case "video":
              case "audio":
                for (e = 0; e < lf.length; e++)
                  D(lf[e], a);
                e = d;
                break;
              case "source":
                D("error", a);
                e = d;
                break;
              case "img":
              case "image":
              case "link":
                D(
                  "error",
                  a
                );
                D("load", a);
                e = d;
                break;
              case "details":
                D("toggle", a);
                e = d;
                break;
              case "input":
                Za(a, d);
                e = Ya(a, d);
                D("invalid", a);
                break;
              case "option":
                e = d;
                break;
              case "select":
                a._wrapperState = { wasMultiple: !!d.multiple };
                e = A({}, d, { value: void 0 });
                D("invalid", a);
                break;
              case "textarea":
                hb(a, d);
                e = gb(a, d);
                D("invalid", a);
                break;
              default:
                e = d;
            }
            ub(c, e);
            h = e;
            for (f2 in h)
              if (h.hasOwnProperty(f2)) {
                var k2 = h[f2];
                "style" === f2 ? sb(a, k2) : "dangerouslySetInnerHTML" === f2 ? (k2 = k2 ? k2.__html : void 0, null != k2 && nb(a, k2)) : "children" === f2 ? "string" === typeof k2 ? ("textarea" !== c || "" !== k2) && ob(a, k2) : "number" === typeof k2 && ob(a, "" + k2) : "suppressContentEditableWarning" !== f2 && "suppressHydrationWarning" !== f2 && "autoFocus" !== f2 && (ea.hasOwnProperty(f2) ? null != k2 && "onScroll" === f2 && D("scroll", a) : null != k2 && ta(a, f2, k2, g));
              }
            switch (c) {
              case "input":
                Va(a);
                db(a, d, false);
                break;
              case "textarea":
                Va(a);
                jb(a);
                break;
              case "option":
                null != d.value && a.setAttribute("value", "" + Sa(d.value));
                break;
              case "select":
                a.multiple = !!d.multiple;
                f2 = d.value;
                null != f2 ? fb(a, !!d.multiple, f2, false) : null != d.defaultValue && fb(
                  a,
                  !!d.multiple,
                  d.defaultValue,
                  true
                );
                break;
              default:
                "function" === typeof e.onClick && (a.onclick = Bf);
            }
            switch (c) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                d = !!d.autoFocus;
                break a;
              case "img":
                d = true;
                break a;
              default:
                d = false;
            }
          }
          d && (b2.flags |= 4);
        }
        null !== b2.ref && (b2.flags |= 512, b2.flags |= 2097152);
      }
      S(b2);
      return null;
    case 6:
      if (a && null != b2.stateNode)
        Dj(a, b2, a.memoizedProps, d);
      else {
        if ("string" !== typeof d && null === b2.stateNode)
          throw Error(p(166));
        c = Hh(Gh.current);
        Hh(Eh.current);
        if (Gg(b2)) {
          d = b2.stateNode;
          c = b2.memoizedProps;
          d[Of] = b2;
          if (f2 = d.nodeValue !== c) {
            if (a = xg, null !== a)
              switch (a.tag) {
                case 3:
                  Af(d.nodeValue, c, 0 !== (a.mode & 1));
                  break;
                case 5:
                  true !== a.memoizedProps.suppressHydrationWarning && Af(d.nodeValue, c, 0 !== (a.mode & 1));
              }
          }
          f2 && (b2.flags |= 4);
        } else
          d = (9 === c.nodeType ? c : c.ownerDocument).createTextNode(d), d[Of] = b2, b2.stateNode = d;
      }
      S(b2);
      return null;
    case 13:
      E(M);
      d = b2.memoizedState;
      if (null === a || null !== a.memoizedState && null !== a.memoizedState.dehydrated) {
        if (I && null !== yg && 0 !== (b2.mode & 1) && 0 === (b2.flags & 128))
          Hg(), Ig(), b2.flags |= 98560, f2 = false;
        else if (f2 = Gg(b2), null !== d && null !== d.dehydrated) {
          if (null === a) {
            if (!f2)
              throw Error(p(318));
            f2 = b2.memoizedState;
            f2 = null !== f2 ? f2.dehydrated : null;
            if (!f2)
              throw Error(p(317));
            f2[Of] = b2;
          } else
            Ig(), 0 === (b2.flags & 128) && (b2.memoizedState = null), b2.flags |= 4;
          S(b2);
          f2 = false;
        } else
          null !== zg && (Gj(zg), zg = null), f2 = true;
        if (!f2)
          return b2.flags & 65536 ? b2 : null;
      }
      if (0 !== (b2.flags & 128))
        return b2.lanes = c, b2;
      d = null !== d;
      d !== (null !== a && null !== a.memoizedState) && d && (b2.child.flags |= 8192, 0 !== (b2.mode & 1) && (null === a || 0 !== (M.current & 1) ? 0 === T && (T = 3) : uj()));
      null !== b2.updateQueue && (b2.flags |= 4);
      S(b2);
      return null;
    case 4:
      return Jh(), Bj(a, b2), null === a && sf(b2.stateNode.containerInfo), S(b2), null;
    case 10:
      return Rg(b2.type._context), S(b2), null;
    case 17:
      return Zf(b2.type) && $f(), S(b2), null;
    case 19:
      E(M);
      f2 = b2.memoizedState;
      if (null === f2)
        return S(b2), null;
      d = 0 !== (b2.flags & 128);
      g = f2.rendering;
      if (null === g)
        if (d)
          Ej(f2, false);
        else {
          if (0 !== T || null !== a && 0 !== (a.flags & 128))
            for (a = b2.child; null !== a; ) {
              g = Mh(a);
              if (null !== g) {
                b2.flags |= 128;
                Ej(f2, false);
                d = g.updateQueue;
                null !== d && (b2.updateQueue = d, b2.flags |= 4);
                b2.subtreeFlags = 0;
                d = c;
                for (c = b2.child; null !== c; )
                  f2 = c, a = d, f2.flags &= 14680066, g = f2.alternate, null === g ? (f2.childLanes = 0, f2.lanes = a, f2.child = null, f2.subtreeFlags = 0, f2.memoizedProps = null, f2.memoizedState = null, f2.updateQueue = null, f2.dependencies = null, f2.stateNode = null) : (f2.childLanes = g.childLanes, f2.lanes = g.lanes, f2.child = g.child, f2.subtreeFlags = 0, f2.deletions = null, f2.memoizedProps = g.memoizedProps, f2.memoizedState = g.memoizedState, f2.updateQueue = g.updateQueue, f2.type = g.type, a = g.dependencies, f2.dependencies = null === a ? null : { lanes: a.lanes, firstContext: a.firstContext }), c = c.sibling;
                G(M, M.current & 1 | 2);
                return b2.child;
              }
              a = a.sibling;
            }
          null !== f2.tail && B() > Hj && (b2.flags |= 128, d = true, Ej(f2, false), b2.lanes = 4194304);
        }
      else {
        if (!d)
          if (a = Mh(g), null !== a) {
            if (b2.flags |= 128, d = true, c = a.updateQueue, null !== c && (b2.updateQueue = c, b2.flags |= 4), Ej(f2, true), null === f2.tail && "hidden" === f2.tailMode && !g.alternate && !I)
              return S(b2), null;
          } else
            2 * B() - f2.renderingStartTime > Hj && 1073741824 !== c && (b2.flags |= 128, d = true, Ej(f2, false), b2.lanes = 4194304);
        f2.isBackwards ? (g.sibling = b2.child, b2.child = g) : (c = f2.last, null !== c ? c.sibling = g : b2.child = g, f2.last = g);
      }
      if (null !== f2.tail)
        return b2 = f2.tail, f2.rendering = b2, f2.tail = b2.sibling, f2.renderingStartTime = B(), b2.sibling = null, c = M.current, G(M, d ? c & 1 | 2 : c & 1), b2;
      S(b2);
      return null;
    case 22:
    case 23:
      return Ij(), d = null !== b2.memoizedState, null !== a && null !== a.memoizedState !== d && (b2.flags |= 8192), d && 0 !== (b2.mode & 1) ? 0 !== (gj & 1073741824) && (S(b2), b2.subtreeFlags & 6 && (b2.flags |= 8192)) : S(b2), null;
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(p(156, b2.tag));
}
function Jj(a, b2) {
  wg(b2);
  switch (b2.tag) {
    case 1:
      return Zf(b2.type) && $f(), a = b2.flags, a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 3:
      return Jh(), E(Wf), E(H), Oh(), a = b2.flags, 0 !== (a & 65536) && 0 === (a & 128) ? (b2.flags = a & -65537 | 128, b2) : null;
    case 5:
      return Lh(b2), null;
    case 13:
      E(M);
      a = b2.memoizedState;
      if (null !== a && null !== a.dehydrated) {
        if (null === b2.alternate)
          throw Error(p(340));
        Ig();
      }
      a = b2.flags;
      return a & 65536 ? (b2.flags = a & -65537 | 128, b2) : null;
    case 19:
      return E(M), null;
    case 4:
      return Jh(), null;
    case 10:
      return Rg(b2.type._context), null;
    case 22:
    case 23:
      return Ij(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Kj = false, U = false, Lj = "function" === typeof WeakSet ? WeakSet : Set, V = null;
function Mj(a, b2) {
  var c = a.ref;
  if (null !== c)
    if ("function" === typeof c)
      try {
        c(null);
      } catch (d) {
        W(a, b2, d);
      }
    else
      c.current = null;
}
function Nj(a, b2, c) {
  try {
    c();
  } catch (d) {
    W(a, b2, d);
  }
}
var Oj = false;
function Pj(a, b2) {
  Cf = dd;
  a = Me();
  if (Ne(a)) {
    if ("selectionStart" in a)
      var c = { start: a.selectionStart, end: a.selectionEnd };
    else
      a: {
        c = (c = a.ownerDocument) && c.defaultView || window;
        var d = c.getSelection && c.getSelection();
        if (d && 0 !== d.rangeCount) {
          c = d.anchorNode;
          var e = d.anchorOffset, f2 = d.focusNode;
          d = d.focusOffset;
          try {
            c.nodeType, f2.nodeType;
          } catch (F2) {
            c = null;
            break a;
          }
          var g = 0, h = -1, k2 = -1, l2 = 0, m2 = 0, q2 = a, r2 = null;
          b:
            for (; ; ) {
              for (var y2; ; ) {
                q2 !== c || 0 !== e && 3 !== q2.nodeType || (h = g + e);
                q2 !== f2 || 0 !== d && 3 !== q2.nodeType || (k2 = g + d);
                3 === q2.nodeType && (g += q2.nodeValue.length);
                if (null === (y2 = q2.firstChild))
                  break;
                r2 = q2;
                q2 = y2;
              }
              for (; ; ) {
                if (q2 === a)
                  break b;
                r2 === c && ++l2 === e && (h = g);
                r2 === f2 && ++m2 === d && (k2 = g);
                if (null !== (y2 = q2.nextSibling))
                  break;
                q2 = r2;
                r2 = q2.parentNode;
              }
              q2 = y2;
            }
          c = -1 === h || -1 === k2 ? null : { start: h, end: k2 };
        } else
          c = null;
      }
    c = c || { start: 0, end: 0 };
  } else
    c = null;
  Df = { focusedElem: a, selectionRange: c };
  dd = false;
  for (V = b2; null !== V; )
    if (b2 = V, a = b2.child, 0 !== (b2.subtreeFlags & 1028) && null !== a)
      a.return = b2, V = a;
    else
      for (; null !== V; ) {
        b2 = V;
        try {
          var n2 = b2.alternate;
          if (0 !== (b2.flags & 1024))
            switch (b2.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (null !== n2) {
                  var t2 = n2.memoizedProps, J2 = n2.memoizedState, x2 = b2.stateNode, w2 = x2.getSnapshotBeforeUpdate(b2.elementType === b2.type ? t2 : Lg(b2.type, t2), J2);
                  x2.__reactInternalSnapshotBeforeUpdate = w2;
                }
                break;
              case 3:
                var u2 = b2.stateNode.containerInfo;
                1 === u2.nodeType ? u2.textContent = "" : 9 === u2.nodeType && u2.documentElement && u2.removeChild(u2.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(p(163));
            }
        } catch (F2) {
          W(b2, b2.return, F2);
        }
        a = b2.sibling;
        if (null !== a) {
          a.return = b2.return;
          V = a;
          break;
        }
        V = b2.return;
      }
  n2 = Oj;
  Oj = false;
  return n2;
}
function Qj(a, b2, c) {
  var d = b2.updateQueue;
  d = null !== d ? d.lastEffect : null;
  if (null !== d) {
    var e = d = d.next;
    do {
      if ((e.tag & a) === a) {
        var f2 = e.destroy;
        e.destroy = void 0;
        void 0 !== f2 && Nj(b2, c, f2);
      }
      e = e.next;
    } while (e !== d);
  }
}
function Rj(a, b2) {
  b2 = b2.updateQueue;
  b2 = null !== b2 ? b2.lastEffect : null;
  if (null !== b2) {
    var c = b2 = b2.next;
    do {
      if ((c.tag & a) === a) {
        var d = c.create;
        c.destroy = d();
      }
      c = c.next;
    } while (c !== b2);
  }
}
function Sj(a) {
  var b2 = a.ref;
  if (null !== b2) {
    var c = a.stateNode;
    switch (a.tag) {
      case 5:
        a = c;
        break;
      default:
        a = c;
    }
    "function" === typeof b2 ? b2(a) : b2.current = a;
  }
}
function Tj(a) {
  var b2 = a.alternate;
  null !== b2 && (a.alternate = null, Tj(b2));
  a.child = null;
  a.deletions = null;
  a.sibling = null;
  5 === a.tag && (b2 = a.stateNode, null !== b2 && (delete b2[Of], delete b2[Pf], delete b2[of], delete b2[Qf], delete b2[Rf]));
  a.stateNode = null;
  a.return = null;
  a.dependencies = null;
  a.memoizedProps = null;
  a.memoizedState = null;
  a.pendingProps = null;
  a.stateNode = null;
  a.updateQueue = null;
}
function Uj(a) {
  return 5 === a.tag || 3 === a.tag || 4 === a.tag;
}
function Vj(a) {
  a:
    for (; ; ) {
      for (; null === a.sibling; ) {
        if (null === a.return || Uj(a.return))
          return null;
        a = a.return;
      }
      a.sibling.return = a.return;
      for (a = a.sibling; 5 !== a.tag && 6 !== a.tag && 18 !== a.tag; ) {
        if (a.flags & 2)
          continue a;
        if (null === a.child || 4 === a.tag)
          continue a;
        else
          a.child.return = a, a = a.child;
      }
      if (!(a.flags & 2))
        return a.stateNode;
    }
}
function Wj(a, b2, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b2 ? 8 === c.nodeType ? c.parentNode.insertBefore(a, b2) : c.insertBefore(a, b2) : (8 === c.nodeType ? (b2 = c.parentNode, b2.insertBefore(a, c)) : (b2 = c, b2.appendChild(a)), c = c._reactRootContainer, null !== c && void 0 !== c || null !== b2.onclick || (b2.onclick = Bf));
  else if (4 !== d && (a = a.child, null !== a))
    for (Wj(a, b2, c), a = a.sibling; null !== a; )
      Wj(a, b2, c), a = a.sibling;
}
function Xj(a, b2, c) {
  var d = a.tag;
  if (5 === d || 6 === d)
    a = a.stateNode, b2 ? c.insertBefore(a, b2) : c.appendChild(a);
  else if (4 !== d && (a = a.child, null !== a))
    for (Xj(a, b2, c), a = a.sibling; null !== a; )
      Xj(a, b2, c), a = a.sibling;
}
var X = null, Yj = false;
function Zj(a, b2, c) {
  for (c = c.child; null !== c; )
    ak(a, b2, c), c = c.sibling;
}
function ak(a, b2, c) {
  if (lc && "function" === typeof lc.onCommitFiberUnmount)
    try {
      lc.onCommitFiberUnmount(kc, c);
    } catch (h) {
    }
  switch (c.tag) {
    case 5:
      U || Mj(c, b2);
    case 6:
      var d = X, e = Yj;
      X = null;
      Zj(a, b2, c);
      X = d;
      Yj = e;
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? a.parentNode.removeChild(c) : a.removeChild(c)) : X.removeChild(c.stateNode));
      break;
    case 18:
      null !== X && (Yj ? (a = X, c = c.stateNode, 8 === a.nodeType ? Kf(a.parentNode, c) : 1 === a.nodeType && Kf(a, c), bd(a)) : Kf(X, c.stateNode));
      break;
    case 4:
      d = X;
      e = Yj;
      X = c.stateNode.containerInfo;
      Yj = true;
      Zj(a, b2, c);
      X = d;
      Yj = e;
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (!U && (d = c.updateQueue, null !== d && (d = d.lastEffect, null !== d))) {
        e = d = d.next;
        do {
          var f2 = e, g = f2.destroy;
          f2 = f2.tag;
          void 0 !== g && (0 !== (f2 & 2) ? Nj(c, b2, g) : 0 !== (f2 & 4) && Nj(c, b2, g));
          e = e.next;
        } while (e !== d);
      }
      Zj(a, b2, c);
      break;
    case 1:
      if (!U && (Mj(c, b2), d = c.stateNode, "function" === typeof d.componentWillUnmount))
        try {
          d.props = c.memoizedProps, d.state = c.memoizedState, d.componentWillUnmount();
        } catch (h) {
          W(c, b2, h);
        }
      Zj(a, b2, c);
      break;
    case 21:
      Zj(a, b2, c);
      break;
    case 22:
      c.mode & 1 ? (U = (d = U) || null !== c.memoizedState, Zj(a, b2, c), U = d) : Zj(a, b2, c);
      break;
    default:
      Zj(a, b2, c);
  }
}
function bk(a) {
  var b2 = a.updateQueue;
  if (null !== b2) {
    a.updateQueue = null;
    var c = a.stateNode;
    null === c && (c = a.stateNode = new Lj());
    b2.forEach(function(b3) {
      var d = ck.bind(null, a, b3);
      c.has(b3) || (c.add(b3), b3.then(d, d));
    });
  }
}
function dk(a, b2) {
  var c = b2.deletions;
  if (null !== c)
    for (var d = 0; d < c.length; d++) {
      var e = c[d];
      try {
        var f2 = a, g = b2, h = g;
        a:
          for (; null !== h; ) {
            switch (h.tag) {
              case 5:
                X = h.stateNode;
                Yj = false;
                break a;
              case 3:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
              case 4:
                X = h.stateNode.containerInfo;
                Yj = true;
                break a;
            }
            h = h.return;
          }
        if (null === X)
          throw Error(p(160));
        ak(f2, g, e);
        X = null;
        Yj = false;
        var k2 = e.alternate;
        null !== k2 && (k2.return = null);
        e.return = null;
      } catch (l2) {
        W(e, b2, l2);
      }
    }
  if (b2.subtreeFlags & 12854)
    for (b2 = b2.child; null !== b2; )
      ek(b2, a), b2 = b2.sibling;
}
function ek(a, b2) {
  var c = a.alternate, d = a.flags;
  switch (a.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      dk(b2, a);
      fk(a);
      if (d & 4) {
        try {
          Qj(3, a, a.return), Rj(3, a);
        } catch (t2) {
          W(a, a.return, t2);
        }
        try {
          Qj(5, a, a.return);
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 1:
      dk(b2, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      break;
    case 5:
      dk(b2, a);
      fk(a);
      d & 512 && null !== c && Mj(c, c.return);
      if (a.flags & 32) {
        var e = a.stateNode;
        try {
          ob(e, "");
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      if (d & 4 && (e = a.stateNode, null != e)) {
        var f2 = a.memoizedProps, g = null !== c ? c.memoizedProps : f2, h = a.type, k2 = a.updateQueue;
        a.updateQueue = null;
        if (null !== k2)
          try {
            "input" === h && "radio" === f2.type && null != f2.name && ab(e, f2);
            vb(h, g);
            var l2 = vb(h, f2);
            for (g = 0; g < k2.length; g += 2) {
              var m2 = k2[g], q2 = k2[g + 1];
              "style" === m2 ? sb(e, q2) : "dangerouslySetInnerHTML" === m2 ? nb(e, q2) : "children" === m2 ? ob(e, q2) : ta(e, m2, q2, l2);
            }
            switch (h) {
              case "input":
                bb(e, f2);
                break;
              case "textarea":
                ib(e, f2);
                break;
              case "select":
                var r2 = e._wrapperState.wasMultiple;
                e._wrapperState.wasMultiple = !!f2.multiple;
                var y2 = f2.value;
                null != y2 ? fb(e, !!f2.multiple, y2, false) : r2 !== !!f2.multiple && (null != f2.defaultValue ? fb(
                  e,
                  !!f2.multiple,
                  f2.defaultValue,
                  true
                ) : fb(e, !!f2.multiple, f2.multiple ? [] : "", false));
            }
            e[Pf] = f2;
          } catch (t2) {
            W(a, a.return, t2);
          }
      }
      break;
    case 6:
      dk(b2, a);
      fk(a);
      if (d & 4) {
        if (null === a.stateNode)
          throw Error(p(162));
        e = a.stateNode;
        f2 = a.memoizedProps;
        try {
          e.nodeValue = f2;
        } catch (t2) {
          W(a, a.return, t2);
        }
      }
      break;
    case 3:
      dk(b2, a);
      fk(a);
      if (d & 4 && null !== c && c.memoizedState.isDehydrated)
        try {
          bd(b2.containerInfo);
        } catch (t2) {
          W(a, a.return, t2);
        }
      break;
    case 4:
      dk(b2, a);
      fk(a);
      break;
    case 13:
      dk(b2, a);
      fk(a);
      e = a.child;
      e.flags & 8192 && (f2 = null !== e.memoizedState, e.stateNode.isHidden = f2, !f2 || null !== e.alternate && null !== e.alternate.memoizedState || (gk = B()));
      d & 4 && bk(a);
      break;
    case 22:
      m2 = null !== c && null !== c.memoizedState;
      a.mode & 1 ? (U = (l2 = U) || m2, dk(b2, a), U = l2) : dk(b2, a);
      fk(a);
      if (d & 8192) {
        l2 = null !== a.memoizedState;
        if ((a.stateNode.isHidden = l2) && !m2 && 0 !== (a.mode & 1))
          for (V = a, m2 = a.child; null !== m2; ) {
            for (q2 = V = m2; null !== V; ) {
              r2 = V;
              y2 = r2.child;
              switch (r2.tag) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Qj(4, r2, r2.return);
                  break;
                case 1:
                  Mj(r2, r2.return);
                  var n2 = r2.stateNode;
                  if ("function" === typeof n2.componentWillUnmount) {
                    d = r2;
                    c = r2.return;
                    try {
                      b2 = d, n2.props = b2.memoizedProps, n2.state = b2.memoizedState, n2.componentWillUnmount();
                    } catch (t2) {
                      W(d, c, t2);
                    }
                  }
                  break;
                case 5:
                  Mj(r2, r2.return);
                  break;
                case 22:
                  if (null !== r2.memoizedState) {
                    hk(q2);
                    continue;
                  }
              }
              null !== y2 ? (y2.return = r2, V = y2) : hk(q2);
            }
            m2 = m2.sibling;
          }
        a:
          for (m2 = null, q2 = a; ; ) {
            if (5 === q2.tag) {
              if (null === m2) {
                m2 = q2;
                try {
                  e = q2.stateNode, l2 ? (f2 = e.style, "function" === typeof f2.setProperty ? f2.setProperty("display", "none", "important") : f2.display = "none") : (h = q2.stateNode, k2 = q2.memoizedProps.style, g = void 0 !== k2 && null !== k2 && k2.hasOwnProperty("display") ? k2.display : null, h.style.display = rb("display", g));
                } catch (t2) {
                  W(a, a.return, t2);
                }
              }
            } else if (6 === q2.tag) {
              if (null === m2)
                try {
                  q2.stateNode.nodeValue = l2 ? "" : q2.memoizedProps;
                } catch (t2) {
                  W(a, a.return, t2);
                }
            } else if ((22 !== q2.tag && 23 !== q2.tag || null === q2.memoizedState || q2 === a) && null !== q2.child) {
              q2.child.return = q2;
              q2 = q2.child;
              continue;
            }
            if (q2 === a)
              break a;
            for (; null === q2.sibling; ) {
              if (null === q2.return || q2.return === a)
                break a;
              m2 === q2 && (m2 = null);
              q2 = q2.return;
            }
            m2 === q2 && (m2 = null);
            q2.sibling.return = q2.return;
            q2 = q2.sibling;
          }
      }
      break;
    case 19:
      dk(b2, a);
      fk(a);
      d & 4 && bk(a);
      break;
    case 21:
      break;
    default:
      dk(
        b2,
        a
      ), fk(a);
  }
}
function fk(a) {
  var b2 = a.flags;
  if (b2 & 2) {
    try {
      a: {
        for (var c = a.return; null !== c; ) {
          if (Uj(c)) {
            var d = c;
            break a;
          }
          c = c.return;
        }
        throw Error(p(160));
      }
      switch (d.tag) {
        case 5:
          var e = d.stateNode;
          d.flags & 32 && (ob(e, ""), d.flags &= -33);
          var f2 = Vj(a);
          Xj(a, f2, e);
          break;
        case 3:
        case 4:
          var g = d.stateNode.containerInfo, h = Vj(a);
          Wj(a, h, g);
          break;
        default:
          throw Error(p(161));
      }
    } catch (k2) {
      W(a, a.return, k2);
    }
    a.flags &= -3;
  }
  b2 & 4096 && (a.flags &= -4097);
}
function ik(a, b2, c) {
  V = a;
  jk(a);
}
function jk(a, b2, c) {
  for (var d = 0 !== (a.mode & 1); null !== V; ) {
    var e = V, f2 = e.child;
    if (22 === e.tag && d) {
      var g = null !== e.memoizedState || Kj;
      if (!g) {
        var h = e.alternate, k2 = null !== h && null !== h.memoizedState || U;
        h = Kj;
        var l2 = U;
        Kj = g;
        if ((U = k2) && !l2)
          for (V = e; null !== V; )
            g = V, k2 = g.child, 22 === g.tag && null !== g.memoizedState ? kk(e) : null !== k2 ? (k2.return = g, V = k2) : kk(e);
        for (; null !== f2; )
          V = f2, jk(f2), f2 = f2.sibling;
        V = e;
        Kj = h;
        U = l2;
      }
      lk(a);
    } else
      0 !== (e.subtreeFlags & 8772) && null !== f2 ? (f2.return = e, V = f2) : lk(a);
  }
}
function lk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (0 !== (b2.flags & 8772)) {
      var c = b2.alternate;
      try {
        if (0 !== (b2.flags & 8772))
          switch (b2.tag) {
            case 0:
            case 11:
            case 15:
              U || Rj(5, b2);
              break;
            case 1:
              var d = b2.stateNode;
              if (b2.flags & 4 && !U)
                if (null === c)
                  d.componentDidMount();
                else {
                  var e = b2.elementType === b2.type ? c.memoizedProps : Lg(b2.type, c.memoizedProps);
                  d.componentDidUpdate(e, c.memoizedState, d.__reactInternalSnapshotBeforeUpdate);
                }
              var f2 = b2.updateQueue;
              null !== f2 && ih(b2, f2, d);
              break;
            case 3:
              var g = b2.updateQueue;
              if (null !== g) {
                c = null;
                if (null !== b2.child)
                  switch (b2.child.tag) {
                    case 5:
                      c = b2.child.stateNode;
                      break;
                    case 1:
                      c = b2.child.stateNode;
                  }
                ih(b2, g, c);
              }
              break;
            case 5:
              var h = b2.stateNode;
              if (null === c && b2.flags & 4) {
                c = h;
                var k2 = b2.memoizedProps;
                switch (b2.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    k2.autoFocus && c.focus();
                    break;
                  case "img":
                    k2.src && (c.src = k2.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (null === b2.memoizedState) {
                var l2 = b2.alternate;
                if (null !== l2) {
                  var m2 = l2.memoizedState;
                  if (null !== m2) {
                    var q2 = m2.dehydrated;
                    null !== q2 && bd(q2);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(p(163));
          }
        U || b2.flags & 512 && Sj(b2);
      } catch (r2) {
        W(b2, b2.return, r2);
      }
    }
    if (b2 === a) {
      V = null;
      break;
    }
    c = b2.sibling;
    if (null !== c) {
      c.return = b2.return;
      V = c;
      break;
    }
    V = b2.return;
  }
}
function hk(a) {
  for (; null !== V; ) {
    var b2 = V;
    if (b2 === a) {
      V = null;
      break;
    }
    var c = b2.sibling;
    if (null !== c) {
      c.return = b2.return;
      V = c;
      break;
    }
    V = b2.return;
  }
}
function kk(a) {
  for (; null !== V; ) {
    var b2 = V;
    try {
      switch (b2.tag) {
        case 0:
        case 11:
        case 15:
          var c = b2.return;
          try {
            Rj(4, b2);
          } catch (k2) {
            W(b2, c, k2);
          }
          break;
        case 1:
          var d = b2.stateNode;
          if ("function" === typeof d.componentDidMount) {
            var e = b2.return;
            try {
              d.componentDidMount();
            } catch (k2) {
              W(b2, e, k2);
            }
          }
          var f2 = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, f2, k2);
          }
          break;
        case 5:
          var g = b2.return;
          try {
            Sj(b2);
          } catch (k2) {
            W(b2, g, k2);
          }
      }
    } catch (k2) {
      W(b2, b2.return, k2);
    }
    if (b2 === a) {
      V = null;
      break;
    }
    var h = b2.sibling;
    if (null !== h) {
      h.return = b2.return;
      V = h;
      break;
    }
    V = b2.return;
  }
}
var mk = Math.ceil, nk = ua.ReactCurrentDispatcher, ok = ua.ReactCurrentOwner, pk = ua.ReactCurrentBatchConfig, K = 0, R = null, Y = null, Z = 0, gj = 0, fj = Uf(0), T = 0, qk = null, hh = 0, rk = 0, sk = 0, tk = null, uk = null, gk = 0, Hj = Infinity, vk = null, Pi = false, Qi = null, Si = null, wk = false, xk = null, yk = 0, zk = 0, Ak = null, Bk = -1, Ck = 0;
function L() {
  return 0 !== (K & 6) ? B() : -1 !== Bk ? Bk : Bk = B();
}
function lh(a) {
  if (0 === (a.mode & 1))
    return 1;
  if (0 !== (K & 2) && 0 !== Z)
    return Z & -Z;
  if (null !== Kg.transition)
    return 0 === Ck && (Ck = yc()), Ck;
  a = C;
  if (0 !== a)
    return a;
  a = window.event;
  a = void 0 === a ? 16 : jd(a.type);
  return a;
}
function mh(a, b2, c, d) {
  if (50 < zk)
    throw zk = 0, Ak = null, Error(p(185));
  Ac(a, c, d);
  if (0 === (K & 2) || a !== R)
    a === R && (0 === (K & 2) && (rk |= c), 4 === T && Dk(a, Z)), Ek(a, d), 1 === c && 0 === K && 0 === (b2.mode & 1) && (Hj = B() + 500, fg && jg());
}
function Ek(a, b2) {
  var c = a.callbackNode;
  wc(a, b2);
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    null !== c && bc(c), a.callbackNode = null, a.callbackPriority = 0;
  else if (b2 = d & -d, a.callbackPriority !== b2) {
    null != c && bc(c);
    if (1 === b2)
      0 === a.tag ? ig(Fk.bind(null, a)) : hg(Fk.bind(null, a)), Jf(function() {
        0 === (K & 6) && jg();
      }), c = null;
    else {
      switch (Dc(d)) {
        case 1:
          c = fc;
          break;
        case 4:
          c = gc;
          break;
        case 16:
          c = hc;
          break;
        case 536870912:
          c = jc;
          break;
        default:
          c = hc;
      }
      c = Gk(c, Hk.bind(null, a));
    }
    a.callbackPriority = b2;
    a.callbackNode = c;
  }
}
function Hk(a, b2) {
  Bk = -1;
  Ck = 0;
  if (0 !== (K & 6))
    throw Error(p(327));
  var c = a.callbackNode;
  if (Ik() && a.callbackNode !== c)
    return null;
  var d = uc(a, a === R ? Z : 0);
  if (0 === d)
    return null;
  if (0 !== (d & 30) || 0 !== (d & a.expiredLanes) || b2)
    b2 = Jk(a, d);
  else {
    b2 = d;
    var e = K;
    K |= 2;
    var f2 = Kk();
    if (R !== a || Z !== b2)
      vk = null, Hj = B() + 500, Lk(a, b2);
    do
      try {
        Mk();
        break;
      } catch (h) {
        Nk(a, h);
      }
    while (1);
    Qg();
    nk.current = f2;
    K = e;
    null !== Y ? b2 = 0 : (R = null, Z = 0, b2 = T);
  }
  if (0 !== b2) {
    2 === b2 && (e = xc(a), 0 !== e && (d = e, b2 = Ok(a, e)));
    if (1 === b2)
      throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
    if (6 === b2)
      Dk(a, d);
    else {
      e = a.current.alternate;
      if (0 === (d & 30) && !Pk(e) && (b2 = Jk(a, d), 2 === b2 && (f2 = xc(a), 0 !== f2 && (d = f2, b2 = Ok(a, f2))), 1 === b2))
        throw c = qk, Lk(a, 0), Dk(a, d), Ek(a, B()), c;
      a.finishedWork = e;
      a.finishedLanes = d;
      switch (b2) {
        case 0:
        case 1:
          throw Error(p(345));
        case 2:
          Qk(a, uk, vk);
          break;
        case 3:
          Dk(a, d);
          if ((d & 130023424) === d && (b2 = gk + 500 - B(), 10 < b2)) {
            if (0 !== uc(a, 0))
              break;
            e = a.suspendedLanes;
            if ((e & d) !== d) {
              L();
              a.pingedLanes |= a.suspendedLanes & e;
              break;
            }
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), b2);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 4:
          Dk(a, d);
          if ((d & 4194240) === d)
            break;
          b2 = a.eventTimes;
          for (e = -1; 0 < d; ) {
            var g = 31 - oc(d);
            f2 = 1 << g;
            g = b2[g];
            g > e && (e = g);
            d &= ~f2;
          }
          d = e;
          d = B() - d;
          d = (120 > d ? 120 : 480 > d ? 480 : 1080 > d ? 1080 : 1920 > d ? 1920 : 3e3 > d ? 3e3 : 4320 > d ? 4320 : 1960 * mk(d / 1960)) - d;
          if (10 < d) {
            a.timeoutHandle = Ff(Qk.bind(null, a, uk, vk), d);
            break;
          }
          Qk(a, uk, vk);
          break;
        case 5:
          Qk(a, uk, vk);
          break;
        default:
          throw Error(p(329));
      }
    }
  }
  Ek(a, B());
  return a.callbackNode === c ? Hk.bind(null, a) : null;
}
function Ok(a, b2) {
  var c = tk;
  a.current.memoizedState.isDehydrated && (Lk(a, b2).flags |= 256);
  a = Jk(a, b2);
  2 !== a && (b2 = uk, uk = c, null !== b2 && Gj(b2));
  return a;
}
function Gj(a) {
  null === uk ? uk = a : uk.push.apply(uk, a);
}
function Pk(a) {
  for (var b2 = a; ; ) {
    if (b2.flags & 16384) {
      var c = b2.updateQueue;
      if (null !== c && (c = c.stores, null !== c))
        for (var d = 0; d < c.length; d++) {
          var e = c[d], f2 = e.getSnapshot;
          e = e.value;
          try {
            if (!He(f2(), e))
              return false;
          } catch (g) {
            return false;
          }
        }
    }
    c = b2.child;
    if (b2.subtreeFlags & 16384 && null !== c)
      c.return = b2, b2 = c;
    else {
      if (b2 === a)
        break;
      for (; null === b2.sibling; ) {
        if (null === b2.return || b2.return === a)
          return true;
        b2 = b2.return;
      }
      b2.sibling.return = b2.return;
      b2 = b2.sibling;
    }
  }
  return true;
}
function Dk(a, b2) {
  b2 &= ~sk;
  b2 &= ~rk;
  a.suspendedLanes |= b2;
  a.pingedLanes &= ~b2;
  for (a = a.expirationTimes; 0 < b2; ) {
    var c = 31 - oc(b2), d = 1 << c;
    a[c] = -1;
    b2 &= ~d;
  }
}
function Fk(a) {
  if (0 !== (K & 6))
    throw Error(p(327));
  Ik();
  var b2 = uc(a, 0);
  if (0 === (b2 & 1))
    return Ek(a, B()), null;
  var c = Jk(a, b2);
  if (0 !== a.tag && 2 === c) {
    var d = xc(a);
    0 !== d && (b2 = d, c = Ok(a, d));
  }
  if (1 === c)
    throw c = qk, Lk(a, 0), Dk(a, b2), Ek(a, B()), c;
  if (6 === c)
    throw Error(p(345));
  a.finishedWork = a.current.alternate;
  a.finishedLanes = b2;
  Qk(a, uk, vk);
  Ek(a, B());
  return null;
}
function Rk(a, b2) {
  var c = K;
  K |= 1;
  try {
    return a(b2);
  } finally {
    K = c, 0 === K && (Hj = B() + 500, fg && jg());
  }
}
function Sk(a) {
  null !== xk && 0 === xk.tag && 0 === (K & 6) && Ik();
  var b2 = K;
  K |= 1;
  var c = pk.transition, d = C;
  try {
    if (pk.transition = null, C = 1, a)
      return a();
  } finally {
    C = d, pk.transition = c, K = b2, 0 === (K & 6) && jg();
  }
}
function Ij() {
  gj = fj.current;
  E(fj);
}
function Lk(a, b2) {
  a.finishedWork = null;
  a.finishedLanes = 0;
  var c = a.timeoutHandle;
  -1 !== c && (a.timeoutHandle = -1, Gf(c));
  if (null !== Y)
    for (c = Y.return; null !== c; ) {
      var d = c;
      wg(d);
      switch (d.tag) {
        case 1:
          d = d.type.childContextTypes;
          null !== d && void 0 !== d && $f();
          break;
        case 3:
          Jh();
          E(Wf);
          E(H);
          Oh();
          break;
        case 5:
          Lh(d);
          break;
        case 4:
          Jh();
          break;
        case 13:
          E(M);
          break;
        case 19:
          E(M);
          break;
        case 10:
          Rg(d.type._context);
          break;
        case 22:
        case 23:
          Ij();
      }
      c = c.return;
    }
  R = a;
  Y = a = wh(a.current, null);
  Z = gj = b2;
  T = 0;
  qk = null;
  sk = rk = hh = 0;
  uk = tk = null;
  if (null !== Wg) {
    for (b2 = 0; b2 < Wg.length; b2++)
      if (c = Wg[b2], d = c.interleaved, null !== d) {
        c.interleaved = null;
        var e = d.next, f2 = c.pending;
        if (null !== f2) {
          var g = f2.next;
          f2.next = e;
          d.next = g;
        }
        c.pending = d;
      }
    Wg = null;
  }
  return a;
}
function Nk(a, b2) {
  do {
    var c = Y;
    try {
      Qg();
      Ph.current = ai;
      if (Sh) {
        for (var d = N.memoizedState; null !== d; ) {
          var e = d.queue;
          null !== e && (e.pending = null);
          d = d.next;
        }
        Sh = false;
      }
      Rh = 0;
      P = O = N = null;
      Th = false;
      Uh = 0;
      ok.current = null;
      if (null === c || null === c.return) {
        T = 1;
        qk = b2;
        Y = null;
        break;
      }
      a: {
        var f2 = a, g = c.return, h = c, k2 = b2;
        b2 = Z;
        h.flags |= 32768;
        if (null !== k2 && "object" === typeof k2 && "function" === typeof k2.then) {
          var l2 = k2, m2 = h, q2 = m2.tag;
          if (0 === (m2.mode & 1) && (0 === q2 || 11 === q2 || 15 === q2)) {
            var r2 = m2.alternate;
            r2 ? (m2.updateQueue = r2.updateQueue, m2.memoizedState = r2.memoizedState, m2.lanes = r2.lanes) : (m2.updateQueue = null, m2.memoizedState = null);
          }
          var y2 = Vi(g);
          if (null !== y2) {
            y2.flags &= -257;
            Wi(y2, g, h, f2, b2);
            y2.mode & 1 && Ti(f2, l2, b2);
            b2 = y2;
            k2 = l2;
            var n2 = b2.updateQueue;
            if (null === n2) {
              var t2 = /* @__PURE__ */ new Set();
              t2.add(k2);
              b2.updateQueue = t2;
            } else
              n2.add(k2);
            break a;
          } else {
            if (0 === (b2 & 1)) {
              Ti(f2, l2, b2);
              uj();
              break a;
            }
            k2 = Error(p(426));
          }
        } else if (I && h.mode & 1) {
          var J2 = Vi(g);
          if (null !== J2) {
            0 === (J2.flags & 65536) && (J2.flags |= 256);
            Wi(J2, g, h, f2, b2);
            Jg(Ki(k2, h));
            break a;
          }
        }
        f2 = k2 = Ki(k2, h);
        4 !== T && (T = 2);
        null === tk ? tk = [f2] : tk.push(f2);
        f2 = g;
        do {
          switch (f2.tag) {
            case 3:
              f2.flags |= 65536;
              b2 &= -b2;
              f2.lanes |= b2;
              var x2 = Oi(f2, k2, b2);
              fh(f2, x2);
              break a;
            case 1:
              h = k2;
              var w2 = f2.type, u2 = f2.stateNode;
              if (0 === (f2.flags & 128) && ("function" === typeof w2.getDerivedStateFromError || null !== u2 && "function" === typeof u2.componentDidCatch && (null === Si || !Si.has(u2)))) {
                f2.flags |= 65536;
                b2 &= -b2;
                f2.lanes |= b2;
                var F2 = Ri(f2, h, b2);
                fh(f2, F2);
                break a;
              }
          }
          f2 = f2.return;
        } while (null !== f2);
      }
      Tk(c);
    } catch (na) {
      b2 = na;
      Y === c && null !== c && (Y = c = c.return);
      continue;
    }
    break;
  } while (1);
}
function Kk() {
  var a = nk.current;
  nk.current = ai;
  return null === a ? ai : a;
}
function uj() {
  if (0 === T || 3 === T || 2 === T)
    T = 4;
  null === R || 0 === (hh & 268435455) && 0 === (rk & 268435455) || Dk(R, Z);
}
function Jk(a, b2) {
  var c = K;
  K |= 2;
  var d = Kk();
  if (R !== a || Z !== b2)
    vk = null, Lk(a, b2);
  do
    try {
      Uk();
      break;
    } catch (e) {
      Nk(a, e);
    }
  while (1);
  Qg();
  K = c;
  nk.current = d;
  if (null !== Y)
    throw Error(p(261));
  R = null;
  Z = 0;
  return T;
}
function Uk() {
  for (; null !== Y; )
    Vk(Y);
}
function Mk() {
  for (; null !== Y && !cc(); )
    Vk(Y);
}
function Vk(a) {
  var b2 = Wk(a.alternate, a, gj);
  a.memoizedProps = a.pendingProps;
  null === b2 ? Tk(a) : Y = b2;
  ok.current = null;
}
function Tk(a) {
  var b2 = a;
  do {
    var c = b2.alternate;
    a = b2.return;
    if (0 === (b2.flags & 32768)) {
      if (c = Fj(c, b2, gj), null !== c) {
        Y = c;
        return;
      }
    } else {
      c = Jj(c, b2);
      if (null !== c) {
        c.flags &= 32767;
        Y = c;
        return;
      }
      if (null !== a)
        a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null;
      else {
        T = 6;
        Y = null;
        return;
      }
    }
    b2 = b2.sibling;
    if (null !== b2) {
      Y = b2;
      return;
    }
    Y = b2 = a;
  } while (null !== b2);
  0 === T && (T = 5);
}
function Qk(a, b2, c) {
  var d = C, e = pk.transition;
  try {
    pk.transition = null, C = 1, Xk(a, b2, c, d);
  } finally {
    pk.transition = e, C = d;
  }
  return null;
}
function Xk(a, b2, c, d) {
  do
    Ik();
  while (null !== xk);
  if (0 !== (K & 6))
    throw Error(p(327));
  c = a.finishedWork;
  var e = a.finishedLanes;
  if (null === c)
    return null;
  a.finishedWork = null;
  a.finishedLanes = 0;
  if (c === a.current)
    throw Error(p(177));
  a.callbackNode = null;
  a.callbackPriority = 0;
  var f2 = c.lanes | c.childLanes;
  Bc(a, f2);
  a === R && (Y = R = null, Z = 0);
  0 === (c.subtreeFlags & 2064) && 0 === (c.flags & 2064) || wk || (wk = true, Gk(hc, function() {
    Ik();
    return null;
  }));
  f2 = 0 !== (c.flags & 15990);
  if (0 !== (c.subtreeFlags & 15990) || f2) {
    f2 = pk.transition;
    pk.transition = null;
    var g = C;
    C = 1;
    var h = K;
    K |= 4;
    ok.current = null;
    Pj(a, c);
    ek(c, a);
    Oe(Df);
    dd = !!Cf;
    Df = Cf = null;
    a.current = c;
    ik(c);
    dc();
    K = h;
    C = g;
    pk.transition = f2;
  } else
    a.current = c;
  wk && (wk = false, xk = a, yk = e);
  f2 = a.pendingLanes;
  0 === f2 && (Si = null);
  mc(c.stateNode);
  Ek(a, B());
  if (null !== b2)
    for (d = a.onRecoverableError, c = 0; c < b2.length; c++)
      e = b2[c], d(e.value, { componentStack: e.stack, digest: e.digest });
  if (Pi)
    throw Pi = false, a = Qi, Qi = null, a;
  0 !== (yk & 1) && 0 !== a.tag && Ik();
  f2 = a.pendingLanes;
  0 !== (f2 & 1) ? a === Ak ? zk++ : (zk = 0, Ak = a) : zk = 0;
  jg();
  return null;
}
function Ik() {
  if (null !== xk) {
    var a = Dc(yk), b2 = pk.transition, c = C;
    try {
      pk.transition = null;
      C = 16 > a ? 16 : a;
      if (null === xk)
        var d = false;
      else {
        a = xk;
        xk = null;
        yk = 0;
        if (0 !== (K & 6))
          throw Error(p(331));
        var e = K;
        K |= 4;
        for (V = a.current; null !== V; ) {
          var f2 = V, g = f2.child;
          if (0 !== (V.flags & 16)) {
            var h = f2.deletions;
            if (null !== h) {
              for (var k2 = 0; k2 < h.length; k2++) {
                var l2 = h[k2];
                for (V = l2; null !== V; ) {
                  var m2 = V;
                  switch (m2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(8, m2, f2);
                  }
                  var q2 = m2.child;
                  if (null !== q2)
                    q2.return = m2, V = q2;
                  else
                    for (; null !== V; ) {
                      m2 = V;
                      var r2 = m2.sibling, y2 = m2.return;
                      Tj(m2);
                      if (m2 === l2) {
                        V = null;
                        break;
                      }
                      if (null !== r2) {
                        r2.return = y2;
                        V = r2;
                        break;
                      }
                      V = y2;
                    }
                }
              }
              var n2 = f2.alternate;
              if (null !== n2) {
                var t2 = n2.child;
                if (null !== t2) {
                  n2.child = null;
                  do {
                    var J2 = t2.sibling;
                    t2.sibling = null;
                    t2 = J2;
                  } while (null !== t2);
                }
              }
              V = f2;
            }
          }
          if (0 !== (f2.subtreeFlags & 2064) && null !== g)
            g.return = f2, V = g;
          else
            b:
              for (; null !== V; ) {
                f2 = V;
                if (0 !== (f2.flags & 2048))
                  switch (f2.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Qj(9, f2, f2.return);
                  }
                var x2 = f2.sibling;
                if (null !== x2) {
                  x2.return = f2.return;
                  V = x2;
                  break b;
                }
                V = f2.return;
              }
        }
        var w2 = a.current;
        for (V = w2; null !== V; ) {
          g = V;
          var u2 = g.child;
          if (0 !== (g.subtreeFlags & 2064) && null !== u2)
            u2.return = g, V = u2;
          else
            b:
              for (g = w2; null !== V; ) {
                h = V;
                if (0 !== (h.flags & 2048))
                  try {
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Rj(9, h);
                    }
                  } catch (na) {
                    W(h, h.return, na);
                  }
                if (h === g) {
                  V = null;
                  break b;
                }
                var F2 = h.sibling;
                if (null !== F2) {
                  F2.return = h.return;
                  V = F2;
                  break b;
                }
                V = h.return;
              }
        }
        K = e;
        jg();
        if (lc && "function" === typeof lc.onPostCommitFiberRoot)
          try {
            lc.onPostCommitFiberRoot(kc, a);
          } catch (na) {
          }
        d = true;
      }
      return d;
    } finally {
      C = c, pk.transition = b2;
    }
  }
  return false;
}
function Yk(a, b2, c) {
  b2 = Ki(c, b2);
  b2 = Oi(a, b2, 1);
  a = dh(a, b2, 1);
  b2 = L();
  null !== a && (Ac(a, 1, b2), Ek(a, b2));
}
function W(a, b2, c) {
  if (3 === a.tag)
    Yk(a, a, c);
  else
    for (; null !== b2; ) {
      if (3 === b2.tag) {
        Yk(b2, a, c);
        break;
      } else if (1 === b2.tag) {
        var d = b2.stateNode;
        if ("function" === typeof b2.type.getDerivedStateFromError || "function" === typeof d.componentDidCatch && (null === Si || !Si.has(d))) {
          a = Ki(c, a);
          a = Ri(b2, a, 1);
          b2 = dh(b2, a, 1);
          a = L();
          null !== b2 && (Ac(b2, 1, a), Ek(b2, a));
          break;
        }
      }
      b2 = b2.return;
    }
}
function Ui(a, b2, c) {
  var d = a.pingCache;
  null !== d && d.delete(b2);
  b2 = L();
  a.pingedLanes |= a.suspendedLanes & c;
  R === a && (Z & c) === c && (4 === T || 3 === T && (Z & 130023424) === Z && 500 > B() - gk ? Lk(a, 0) : sk |= c);
  Ek(a, b2);
}
function Zk(a, b2) {
  0 === b2 && (0 === (a.mode & 1) ? b2 = 1 : (b2 = sc, sc <<= 1, 0 === (sc & 130023424) && (sc = 4194304)));
  var c = L();
  a = Zg(a, b2);
  null !== a && (Ac(a, b2, c), Ek(a, c));
}
function vj(a) {
  var b2 = a.memoizedState, c = 0;
  null !== b2 && (c = b2.retryLane);
  Zk(a, c);
}
function ck(a, b2) {
  var c = 0;
  switch (a.tag) {
    case 13:
      var d = a.stateNode;
      var e = a.memoizedState;
      null !== e && (c = e.retryLane);
      break;
    case 19:
      d = a.stateNode;
      break;
    default:
      throw Error(p(314));
  }
  null !== d && d.delete(b2);
  Zk(a, c);
}
var Wk;
Wk = function(a, b2, c) {
  if (null !== a)
    if (a.memoizedProps !== b2.pendingProps || Wf.current)
      Ug = true;
    else {
      if (0 === (a.lanes & c) && 0 === (b2.flags & 128))
        return Ug = false, zj(a, b2, c);
      Ug = 0 !== (a.flags & 131072) ? true : false;
    }
  else
    Ug = false, I && 0 !== (b2.flags & 1048576) && ug(b2, ng, b2.index);
  b2.lanes = 0;
  switch (b2.tag) {
    case 2:
      var d = b2.type;
      jj(a, b2);
      a = b2.pendingProps;
      var e = Yf(b2, H.current);
      Tg(b2, c);
      e = Xh(null, b2, d, a, e, c);
      var f2 = bi();
      b2.flags |= 1;
      "object" === typeof e && null !== e && "function" === typeof e.render && void 0 === e.$$typeof ? (b2.tag = 1, b2.memoizedState = null, b2.updateQueue = null, Zf(d) ? (f2 = true, cg(b2)) : f2 = false, b2.memoizedState = null !== e.state && void 0 !== e.state ? e.state : null, ah(b2), e.updater = nh, b2.stateNode = e, e._reactInternals = b2, rh(b2, d, a, c), b2 = kj(null, b2, d, true, f2, c)) : (b2.tag = 0, I && f2 && vg(b2), Yi(null, b2, e, c), b2 = b2.child);
      return b2;
    case 16:
      d = b2.elementType;
      a: {
        jj(a, b2);
        a = b2.pendingProps;
        e = d._init;
        d = e(d._payload);
        b2.type = d;
        e = b2.tag = $k(d);
        a = Lg(d, a);
        switch (e) {
          case 0:
            b2 = dj(null, b2, d, a, c);
            break a;
          case 1:
            b2 = ij(null, b2, d, a, c);
            break a;
          case 11:
            b2 = Zi(null, b2, d, a, c);
            break a;
          case 14:
            b2 = aj(null, b2, d, Lg(d.type, a), c);
            break a;
        }
        throw Error(p(
          306,
          d,
          ""
        ));
      }
      return b2;
    case 0:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), dj(a, b2, d, e, c);
    case 1:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), ij(a, b2, d, e, c);
    case 3:
      a: {
        lj(b2);
        if (null === a)
          throw Error(p(387));
        d = b2.pendingProps;
        f2 = b2.memoizedState;
        e = f2.element;
        bh(a, b2);
        gh(b2, d, null, c);
        var g = b2.memoizedState;
        d = g.element;
        if (f2.isDehydrated)
          if (f2 = { element: d, isDehydrated: false, cache: g.cache, pendingSuspenseBoundaries: g.pendingSuspenseBoundaries, transitions: g.transitions }, b2.updateQueue.baseState = f2, b2.memoizedState = f2, b2.flags & 256) {
            e = Ki(Error(p(423)), b2);
            b2 = mj(a, b2, d, c, e);
            break a;
          } else if (d !== e) {
            e = Ki(Error(p(424)), b2);
            b2 = mj(a, b2, d, c, e);
            break a;
          } else
            for (yg = Lf(b2.stateNode.containerInfo.firstChild), xg = b2, I = true, zg = null, c = Ch(b2, null, d, c), b2.child = c; c; )
              c.flags = c.flags & -3 | 4096, c = c.sibling;
        else {
          Ig();
          if (d === e) {
            b2 = $i(a, b2, c);
            break a;
          }
          Yi(a, b2, d, c);
        }
        b2 = b2.child;
      }
      return b2;
    case 5:
      return Kh(b2), null === a && Eg(b2), d = b2.type, e = b2.pendingProps, f2 = null !== a ? a.memoizedProps : null, g = e.children, Ef(d, e) ? g = null : null !== f2 && Ef(d, f2) && (b2.flags |= 32), hj(a, b2), Yi(a, b2, g, c), b2.child;
    case 6:
      return null === a && Eg(b2), null;
    case 13:
      return pj(a, b2, c);
    case 4:
      return Ih(b2, b2.stateNode.containerInfo), d = b2.pendingProps, null === a ? b2.child = Bh(b2, null, d, c) : Yi(a, b2, d, c), b2.child;
    case 11:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), Zi(a, b2, d, e, c);
    case 7:
      return Yi(a, b2, b2.pendingProps, c), b2.child;
    case 8:
      return Yi(a, b2, b2.pendingProps.children, c), b2.child;
    case 12:
      return Yi(a, b2, b2.pendingProps.children, c), b2.child;
    case 10:
      a: {
        d = b2.type._context;
        e = b2.pendingProps;
        f2 = b2.memoizedProps;
        g = e.value;
        G(Mg, d._currentValue);
        d._currentValue = g;
        if (null !== f2)
          if (He(f2.value, g)) {
            if (f2.children === e.children && !Wf.current) {
              b2 = $i(a, b2, c);
              break a;
            }
          } else
            for (f2 = b2.child, null !== f2 && (f2.return = b2); null !== f2; ) {
              var h = f2.dependencies;
              if (null !== h) {
                g = f2.child;
                for (var k2 = h.firstContext; null !== k2; ) {
                  if (k2.context === d) {
                    if (1 === f2.tag) {
                      k2 = ch(-1, c & -c);
                      k2.tag = 2;
                      var l2 = f2.updateQueue;
                      if (null !== l2) {
                        l2 = l2.shared;
                        var m2 = l2.pending;
                        null === m2 ? k2.next = k2 : (k2.next = m2.next, m2.next = k2);
                        l2.pending = k2;
                      }
                    }
                    f2.lanes |= c;
                    k2 = f2.alternate;
                    null !== k2 && (k2.lanes |= c);
                    Sg(
                      f2.return,
                      c,
                      b2
                    );
                    h.lanes |= c;
                    break;
                  }
                  k2 = k2.next;
                }
              } else if (10 === f2.tag)
                g = f2.type === b2.type ? null : f2.child;
              else if (18 === f2.tag) {
                g = f2.return;
                if (null === g)
                  throw Error(p(341));
                g.lanes |= c;
                h = g.alternate;
                null !== h && (h.lanes |= c);
                Sg(g, c, b2);
                g = f2.sibling;
              } else
                g = f2.child;
              if (null !== g)
                g.return = f2;
              else
                for (g = f2; null !== g; ) {
                  if (g === b2) {
                    g = null;
                    break;
                  }
                  f2 = g.sibling;
                  if (null !== f2) {
                    f2.return = g.return;
                    g = f2;
                    break;
                  }
                  g = g.return;
                }
              f2 = g;
            }
        Yi(a, b2, e.children, c);
        b2 = b2.child;
      }
      return b2;
    case 9:
      return e = b2.type, d = b2.pendingProps.children, Tg(b2, c), e = Vg(e), d = d(e), b2.flags |= 1, Yi(a, b2, d, c), b2.child;
    case 14:
      return d = b2.type, e = Lg(d, b2.pendingProps), e = Lg(d.type, e), aj(a, b2, d, e, c);
    case 15:
      return cj(a, b2, b2.type, b2.pendingProps, c);
    case 17:
      return d = b2.type, e = b2.pendingProps, e = b2.elementType === d ? e : Lg(d, e), jj(a, b2), b2.tag = 1, Zf(d) ? (a = true, cg(b2)) : a = false, Tg(b2, c), ph(b2, d, e), rh(b2, d, e, c), kj(null, b2, d, true, a, c);
    case 19:
      return yj(a, b2, c);
    case 22:
      return ej(a, b2, c);
  }
  throw Error(p(156, b2.tag));
};
function Gk(a, b2) {
  return ac(a, b2);
}
function al(a, b2, c, d) {
  this.tag = a;
  this.key = c;
  this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null;
  this.index = 0;
  this.ref = null;
  this.pendingProps = b2;
  this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null;
  this.mode = d;
  this.subtreeFlags = this.flags = 0;
  this.deletions = null;
  this.childLanes = this.lanes = 0;
  this.alternate = null;
}
function Bg(a, b2, c, d) {
  return new al(a, b2, c, d);
}
function bj(a) {
  a = a.prototype;
  return !(!a || !a.isReactComponent);
}
function $k(a) {
  if ("function" === typeof a)
    return bj(a) ? 1 : 0;
  if (void 0 !== a && null !== a) {
    a = a.$$typeof;
    if (a === Da)
      return 11;
    if (a === Ga)
      return 14;
  }
  return 2;
}
function wh(a, b2) {
  var c = a.alternate;
  null === c ? (c = Bg(a.tag, b2, a.key, a.mode), c.elementType = a.elementType, c.type = a.type, c.stateNode = a.stateNode, c.alternate = a, a.alternate = c) : (c.pendingProps = b2, c.type = a.type, c.flags = 0, c.subtreeFlags = 0, c.deletions = null);
  c.flags = a.flags & 14680064;
  c.childLanes = a.childLanes;
  c.lanes = a.lanes;
  c.child = a.child;
  c.memoizedProps = a.memoizedProps;
  c.memoizedState = a.memoizedState;
  c.updateQueue = a.updateQueue;
  b2 = a.dependencies;
  c.dependencies = null === b2 ? null : { lanes: b2.lanes, firstContext: b2.firstContext };
  c.sibling = a.sibling;
  c.index = a.index;
  c.ref = a.ref;
  return c;
}
function yh(a, b2, c, d, e, f2) {
  var g = 2;
  d = a;
  if ("function" === typeof a)
    bj(a) && (g = 1);
  else if ("string" === typeof a)
    g = 5;
  else
    a:
      switch (a) {
        case ya:
          return Ah(c.children, e, f2, b2);
        case za:
          g = 8;
          e |= 8;
          break;
        case Aa:
          return a = Bg(12, c, b2, e | 2), a.elementType = Aa, a.lanes = f2, a;
        case Ea:
          return a = Bg(13, c, b2, e), a.elementType = Ea, a.lanes = f2, a;
        case Fa:
          return a = Bg(19, c, b2, e), a.elementType = Fa, a.lanes = f2, a;
        case Ia:
          return qj(c, e, f2, b2);
        default:
          if ("object" === typeof a && null !== a)
            switch (a.$$typeof) {
              case Ba:
                g = 10;
                break a;
              case Ca:
                g = 9;
                break a;
              case Da:
                g = 11;
                break a;
              case Ga:
                g = 14;
                break a;
              case Ha:
                g = 16;
                d = null;
                break a;
            }
          throw Error(p(130, null == a ? a : typeof a, ""));
      }
  b2 = Bg(g, c, b2, e);
  b2.elementType = a;
  b2.type = d;
  b2.lanes = f2;
  return b2;
}
function Ah(a, b2, c, d) {
  a = Bg(7, a, d, b2);
  a.lanes = c;
  return a;
}
function qj(a, b2, c, d) {
  a = Bg(22, a, d, b2);
  a.elementType = Ia;
  a.lanes = c;
  a.stateNode = { isHidden: false };
  return a;
}
function xh(a, b2, c) {
  a = Bg(6, a, null, b2);
  a.lanes = c;
  return a;
}
function zh(a, b2, c) {
  b2 = Bg(4, null !== a.children ? a.children : [], a.key, b2);
  b2.lanes = c;
  b2.stateNode = { containerInfo: a.containerInfo, pendingChildren: null, implementation: a.implementation };
  return b2;
}
function bl(a, b2, c, d, e) {
  this.tag = b2;
  this.containerInfo = a;
  this.finishedWork = this.pingCache = this.current = this.pendingChildren = null;
  this.timeoutHandle = -1;
  this.callbackNode = this.pendingContext = this.context = null;
  this.callbackPriority = 0;
  this.eventTimes = zc(0);
  this.expirationTimes = zc(-1);
  this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0;
  this.entanglements = zc(0);
  this.identifierPrefix = d;
  this.onRecoverableError = e;
  this.mutableSourceEagerHydrationData = null;
}
function cl(a, b2, c, d, e, f2, g, h, k2) {
  a = new bl(a, b2, c, h, k2);
  1 === b2 ? (b2 = 1, true === f2 && (b2 |= 8)) : b2 = 0;
  f2 = Bg(3, null, null, b2);
  a.current = f2;
  f2.stateNode = a;
  f2.memoizedState = { element: d, isDehydrated: c, cache: null, transitions: null, pendingSuspenseBoundaries: null };
  ah(f2);
  return a;
}
function dl(a, b2, c) {
  var d = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
  return { $$typeof: wa, key: null == d ? null : "" + d, children: a, containerInfo: b2, implementation: c };
}
function el(a) {
  if (!a)
    return Vf;
  a = a._reactInternals;
  a: {
    if (Vb(a) !== a || 1 !== a.tag)
      throw Error(p(170));
    var b2 = a;
    do {
      switch (b2.tag) {
        case 3:
          b2 = b2.stateNode.context;
          break a;
        case 1:
          if (Zf(b2.type)) {
            b2 = b2.stateNode.__reactInternalMemoizedMergedChildContext;
            break a;
          }
      }
      b2 = b2.return;
    } while (null !== b2);
    throw Error(p(171));
  }
  if (1 === a.tag) {
    var c = a.type;
    if (Zf(c))
      return bg(a, c, b2);
  }
  return b2;
}
function fl(a, b2, c, d, e, f2, g, h, k2) {
  a = cl(c, d, true, a, e, f2, g, h, k2);
  a.context = el(null);
  c = a.current;
  d = L();
  e = lh(c);
  f2 = ch(d, e);
  f2.callback = void 0 !== b2 && null !== b2 ? b2 : null;
  dh(c, f2, e);
  a.current.lanes = e;
  Ac(a, e, d);
  Ek(a, d);
  return a;
}
function gl(a, b2, c, d) {
  var e = b2.current, f2 = L(), g = lh(e);
  c = el(c);
  null === b2.context ? b2.context = c : b2.pendingContext = c;
  b2 = ch(f2, g);
  b2.payload = { element: a };
  d = void 0 === d ? null : d;
  null !== d && (b2.callback = d);
  a = dh(e, b2, g);
  null !== a && (mh(a, e, g, f2), eh(a, e, g));
  return g;
}
function hl(a) {
  a = a.current;
  if (!a.child)
    return null;
  switch (a.child.tag) {
    case 5:
      return a.child.stateNode;
    default:
      return a.child.stateNode;
  }
}
function il(a, b2) {
  a = a.memoizedState;
  if (null !== a && null !== a.dehydrated) {
    var c = a.retryLane;
    a.retryLane = 0 !== c && c < b2 ? c : b2;
  }
}
function jl(a, b2) {
  il(a, b2);
  (a = a.alternate) && il(a, b2);
}
function kl() {
  return null;
}
var ll = "function" === typeof reportError ? reportError : function(a) {
  console.error(a);
};
function ml(a) {
  this._internalRoot = a;
}
nl.prototype.render = ml.prototype.render = function(a) {
  var b2 = this._internalRoot;
  if (null === b2)
    throw Error(p(409));
  gl(a, b2, null, null);
};
nl.prototype.unmount = ml.prototype.unmount = function() {
  var a = this._internalRoot;
  if (null !== a) {
    this._internalRoot = null;
    var b2 = a.containerInfo;
    Sk(function() {
      gl(null, a, null, null);
    });
    b2[uf] = null;
  }
};
function nl(a) {
  this._internalRoot = a;
}
nl.prototype.unstable_scheduleHydration = function(a) {
  if (a) {
    var b2 = Hc();
    a = { blockedOn: null, target: a, priority: b2 };
    for (var c = 0; c < Qc.length && 0 !== b2 && b2 < Qc[c].priority; c++)
      ;
    Qc.splice(c, 0, a);
    0 === c && Vc(a);
  }
};
function ol(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType);
}
function pl(a) {
  return !(!a || 1 !== a.nodeType && 9 !== a.nodeType && 11 !== a.nodeType && (8 !== a.nodeType || " react-mount-point-unstable " !== a.nodeValue));
}
function ql() {
}
function rl(a, b2, c, d, e) {
  if (e) {
    if ("function" === typeof d) {
      var f2 = d;
      d = function() {
        var a2 = hl(g);
        f2.call(a2);
      };
    }
    var g = fl(b2, d, a, 0, null, false, false, "", ql);
    a._reactRootContainer = g;
    a[uf] = g.current;
    sf(8 === a.nodeType ? a.parentNode : a);
    Sk();
    return g;
  }
  for (; e = a.lastChild; )
    a.removeChild(e);
  if ("function" === typeof d) {
    var h = d;
    d = function() {
      var a2 = hl(k2);
      h.call(a2);
    };
  }
  var k2 = cl(a, 0, false, null, null, false, false, "", ql);
  a._reactRootContainer = k2;
  a[uf] = k2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  Sk(function() {
    gl(b2, k2, c, d);
  });
  return k2;
}
function sl(a, b2, c, d, e) {
  var f2 = c._reactRootContainer;
  if (f2) {
    var g = f2;
    if ("function" === typeof e) {
      var h = e;
      e = function() {
        var a2 = hl(g);
        h.call(a2);
      };
    }
    gl(b2, g, a, e);
  } else
    g = rl(c, b2, a, e, d);
  return hl(g);
}
Ec = function(a) {
  switch (a.tag) {
    case 3:
      var b2 = a.stateNode;
      if (b2.current.memoizedState.isDehydrated) {
        var c = tc(b2.pendingLanes);
        0 !== c && (Cc(b2, c | 1), Ek(b2, B()), 0 === (K & 6) && (Hj = B() + 500, jg()));
      }
      break;
    case 13:
      Sk(function() {
        var b3 = Zg(a, 1);
        if (null !== b3) {
          var c2 = L();
          mh(b3, a, 1, c2);
        }
      }), jl(a, 1);
  }
};
Fc = function(a) {
  if (13 === a.tag) {
    var b2 = Zg(a, 134217728);
    if (null !== b2) {
      var c = L();
      mh(b2, a, 134217728, c);
    }
    jl(a, 134217728);
  }
};
Gc = function(a) {
  if (13 === a.tag) {
    var b2 = lh(a), c = Zg(a, b2);
    if (null !== c) {
      var d = L();
      mh(c, a, b2, d);
    }
    jl(a, b2);
  }
};
Hc = function() {
  return C;
};
Ic = function(a, b2) {
  var c = C;
  try {
    return C = a, b2();
  } finally {
    C = c;
  }
};
yb = function(a, b2, c) {
  switch (b2) {
    case "input":
      bb(a, c);
      b2 = c.name;
      if ("radio" === c.type && null != b2) {
        for (c = a; c.parentNode; )
          c = c.parentNode;
        c = c.querySelectorAll("input[name=" + JSON.stringify("" + b2) + '][type="radio"]');
        for (b2 = 0; b2 < c.length; b2++) {
          var d = c[b2];
          if (d !== a && d.form === a.form) {
            var e = Db(d);
            if (!e)
              throw Error(p(90));
            Wa(d);
            bb(d, e);
          }
        }
      }
      break;
    case "textarea":
      ib(a, c);
      break;
    case "select":
      b2 = c.value, null != b2 && fb(a, !!c.multiple, b2, false);
  }
};
Gb = Rk;
Hb = Sk;
var tl = { usingClientEntryPoint: false, Events: [Cb, ue, Db, Eb, Fb, Rk] }, ul = { findFiberByHostInstance: Wc, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" };
var vl = { bundleType: ul.bundleType, version: ul.version, rendererPackageName: ul.rendererPackageName, rendererConfig: ul.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: ua.ReactCurrentDispatcher, findHostInstanceByFiber: function(a) {
  a = Zb(a);
  return null === a ? null : a.stateNode;
}, findFiberByHostInstance: ul.findFiberByHostInstance || kl, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
  var wl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!wl.isDisabled && wl.supportsFiber)
    try {
      kc = wl.inject(vl), lc = wl;
    } catch (a) {
    }
}
reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tl;
reactDom_production_min.createPortal = function(a, b2) {
  var c = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
  if (!ol(b2))
    throw Error(p(200));
  return dl(a, b2, null, c);
};
reactDom_production_min.createRoot = function(a, b2) {
  if (!ol(a))
    throw Error(p(299));
  var c = false, d = "", e = ll;
  null !== b2 && void 0 !== b2 && (true === b2.unstable_strictMode && (c = true), void 0 !== b2.identifierPrefix && (d = b2.identifierPrefix), void 0 !== b2.onRecoverableError && (e = b2.onRecoverableError));
  b2 = cl(a, 1, false, null, null, c, false, d, e);
  a[uf] = b2.current;
  sf(8 === a.nodeType ? a.parentNode : a);
  return new ml(b2);
};
reactDom_production_min.findDOMNode = function(a) {
  if (null == a)
    return null;
  if (1 === a.nodeType)
    return a;
  var b2 = a._reactInternals;
  if (void 0 === b2) {
    if ("function" === typeof a.render)
      throw Error(p(188));
    a = Object.keys(a).join(",");
    throw Error(p(268, a));
  }
  a = Zb(b2);
  a = null === a ? null : a.stateNode;
  return a;
};
reactDom_production_min.flushSync = function(a) {
  return Sk(a);
};
reactDom_production_min.hydrate = function(a, b2, c) {
  if (!pl(b2))
    throw Error(p(200));
  return sl(null, a, b2, true, c);
};
reactDom_production_min.hydrateRoot = function(a, b2, c) {
  if (!ol(a))
    throw Error(p(405));
  var d = null != c && c.hydratedSources || null, e = false, f2 = "", g = ll;
  null !== c && void 0 !== c && (true === c.unstable_strictMode && (e = true), void 0 !== c.identifierPrefix && (f2 = c.identifierPrefix), void 0 !== c.onRecoverableError && (g = c.onRecoverableError));
  b2 = fl(b2, null, a, 1, null != c ? c : null, e, false, f2, g);
  a[uf] = b2.current;
  sf(a);
  if (d)
    for (a = 0; a < d.length; a++)
      c = d[a], e = c._getVersion, e = e(c._source), null == b2.mutableSourceEagerHydrationData ? b2.mutableSourceEagerHydrationData = [c, e] : b2.mutableSourceEagerHydrationData.push(
        c,
        e
      );
  return new nl(b2);
};
reactDom_production_min.render = function(a, b2, c) {
  if (!pl(b2))
    throw Error(p(200));
  return sl(null, a, b2, false, c);
};
reactDom_production_min.unmountComponentAtNode = function(a) {
  if (!pl(a))
    throw Error(p(40));
  return a._reactRootContainer ? (Sk(function() {
    sl(null, null, a, false, function() {
      a._reactRootContainer = null;
      a[uf] = null;
    });
  }), true) : false;
};
reactDom_production_min.unstable_batchedUpdates = Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer = function(a, b2, c, d) {
  if (!pl(c))
    throw Error(p(200));
  if (null == a || void 0 === a._reactInternals)
    throw Error(p(38));
  return sl(a, b2, c, false, d);
};
reactDom_production_min.version = "18.2.0-next-9e3b772b8-20220608";
(function(module) {
  function checkDCE() {
    if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
      return;
    }
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
    } catch (err) {
      console.error(err);
    }
  }
  {
    checkDCE();
    module.exports = reactDom_production_min;
  }
})(reactDom);
var m = reactDomExports;
{
  client.createRoot = m.createRoot;
  client.hydrateRoot = m.hydrateRoot;
}
const App$1 = "";
function _extends$2() {
  _extends$2 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$2.apply(this, arguments);
}
var Action;
(function(Action2) {
  Action2["Pop"] = "POP";
  Action2["Push"] = "PUSH";
  Action2["Replace"] = "REPLACE";
})(Action || (Action = {}));
const PopStateEventType = "popstate";
function createHashHistory(options) {
  if (options === void 0) {
    options = {};
  }
  function createHashLocation(window2, globalHistory) {
    let {
      pathname = "/",
      search = "",
      hash: hash2 = ""
    } = parsePath(window2.location.hash.substr(1));
    return createLocation(
      "",
      {
        pathname,
        search,
        hash: hash2
      },
      // state defaults to `null` because `window.history.state` does
      globalHistory.state && globalHistory.state.usr || null,
      globalHistory.state && globalHistory.state.key || "default"
    );
  }
  function createHashHref(window2, to) {
    let base = window2.document.querySelector("base");
    let href = "";
    if (base && base.getAttribute("href")) {
      let url = window2.location.href;
      let hashIndex = url.indexOf("#");
      href = hashIndex === -1 ? url : url.slice(0, hashIndex);
    }
    return href + "#" + (typeof to === "string" ? to : createPath(to));
  }
  function validateHashLocation(location, to) {
    warning$1(location.pathname.charAt(0) === "/", "relative pathnames are not supported in hash history.push(" + JSON.stringify(to) + ")");
  }
  return getUrlBasedHistory(createHashLocation, createHashHref, validateHashLocation, options);
}
function invariant(value, message) {
  if (value === false || value === null || typeof value === "undefined") {
    throw new Error(message);
  }
}
function warning$1(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function createKey() {
  return Math.random().toString(36).substr(2, 8);
}
function getHistoryState(location, index2) {
  return {
    usr: location.state,
    key: location.key,
    idx: index2
  };
}
function createLocation(current, to, state, key) {
  if (state === void 0) {
    state = null;
  }
  let location = _extends$2({
    pathname: typeof current === "string" ? current : current.pathname,
    search: "",
    hash: ""
  }, typeof to === "string" ? parsePath(to) : to, {
    state,
    // TODO: This could be cleaned up.  push/replace should probably just take
    // full Locations now and avoid the need to run through this flow at all
    // But that's a pretty big refactor to the current test suite so going to
    // keep as is for the time being and just let any incoming keys take precedence
    key: to && to.key || key || createKey()
  });
  return location;
}
function createPath(_ref) {
  let {
    pathname = "/",
    search = "",
    hash: hash2 = ""
  } = _ref;
  if (search && search !== "?")
    pathname += search.charAt(0) === "?" ? search : "?" + search;
  if (hash2 && hash2 !== "#")
    pathname += hash2.charAt(0) === "#" ? hash2 : "#" + hash2;
  return pathname;
}
function parsePath(path) {
  let parsedPath = {};
  if (path) {
    let hashIndex = path.indexOf("#");
    if (hashIndex >= 0) {
      parsedPath.hash = path.substr(hashIndex);
      path = path.substr(0, hashIndex);
    }
    let searchIndex = path.indexOf("?");
    if (searchIndex >= 0) {
      parsedPath.search = path.substr(searchIndex);
      path = path.substr(0, searchIndex);
    }
    if (path) {
      parsedPath.pathname = path;
    }
  }
  return parsedPath;
}
function getUrlBasedHistory(getLocation, createHref, validateLocation, options) {
  if (options === void 0) {
    options = {};
  }
  let {
    window: window2 = document.defaultView,
    v5Compat = false
  } = options;
  let globalHistory = window2.history;
  let action = Action.Pop;
  let listener = null;
  let index2 = getIndex();
  if (index2 == null) {
    index2 = 0;
    globalHistory.replaceState(_extends$2({}, globalHistory.state, {
      idx: index2
    }), "");
  }
  function getIndex() {
    let state = globalHistory.state || {
      idx: null
    };
    return state.idx;
  }
  function handlePop() {
    action = Action.Pop;
    let nextIndex = getIndex();
    let delta = nextIndex == null ? null : nextIndex - index2;
    index2 = nextIndex;
    if (listener) {
      listener({
        action,
        location: history.location,
        delta
      });
    }
  }
  function push(to, state) {
    action = Action.Push;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index2 = getIndex() + 1;
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    try {
      globalHistory.pushState(historyState, "", url);
    } catch (error) {
      window2.location.assign(url);
    }
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 1
      });
    }
  }
  function replace(to, state) {
    action = Action.Replace;
    let location = createLocation(history.location, to, state);
    if (validateLocation)
      validateLocation(location, to);
    index2 = getIndex();
    let historyState = getHistoryState(location, index2);
    let url = history.createHref(location);
    globalHistory.replaceState(historyState, "", url);
    if (v5Compat && listener) {
      listener({
        action,
        location: history.location,
        delta: 0
      });
    }
  }
  function createURL(to) {
    let base = window2.location.origin !== "null" ? window2.location.origin : window2.location.href;
    let href = typeof to === "string" ? to : createPath(to);
    invariant(base, "No window.location.(origin|href) available to create URL for href: " + href);
    return new URL(href, base);
  }
  let history = {
    get action() {
      return action;
    },
    get location() {
      return getLocation(window2, globalHistory);
    },
    listen(fn) {
      if (listener) {
        throw new Error("A history only accepts one active listener");
      }
      window2.addEventListener(PopStateEventType, handlePop);
      listener = fn;
      return () => {
        window2.removeEventListener(PopStateEventType, handlePop);
        listener = null;
      };
    },
    createHref(to) {
      return createHref(window2, to);
    },
    createURL,
    encodeLocation(to) {
      let url = createURL(to);
      return {
        pathname: url.pathname,
        search: url.search,
        hash: url.hash
      };
    },
    push,
    replace,
    go(n2) {
      return globalHistory.go(n2);
    }
  };
  return history;
}
var ResultType;
(function(ResultType2) {
  ResultType2["data"] = "data";
  ResultType2["deferred"] = "deferred";
  ResultType2["redirect"] = "redirect";
  ResultType2["error"] = "error";
})(ResultType || (ResultType = {}));
function matchRoutes(routes, locationArg, basename) {
  if (basename === void 0) {
    basename = "/";
  }
  let location = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
  let pathname = stripBasename(location.pathname || "/", basename);
  if (pathname == null) {
    return null;
  }
  let branches = flattenRoutes(routes);
  rankRouteBranches(branches);
  let matches = null;
  for (let i = 0; matches == null && i < branches.length; ++i) {
    matches = matchRouteBranch(
      branches[i],
      safelyDecodeURI(pathname)
    );
  }
  return matches;
}
function flattenRoutes(routes, branches, parentsMeta, parentPath) {
  if (branches === void 0) {
    branches = [];
  }
  if (parentsMeta === void 0) {
    parentsMeta = [];
  }
  if (parentPath === void 0) {
    parentPath = "";
  }
  let flattenRoute = (route, index2, relativePath) => {
    let meta = {
      relativePath: relativePath === void 0 ? route.path || "" : relativePath,
      caseSensitive: route.caseSensitive === true,
      childrenIndex: index2,
      route
    };
    if (meta.relativePath.startsWith("/")) {
      invariant(meta.relativePath.startsWith(parentPath), 'Absolute route path "' + meta.relativePath + '" nested under path ' + ('"' + parentPath + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes.");
      meta.relativePath = meta.relativePath.slice(parentPath.length);
    }
    let path = joinPaths([parentPath, meta.relativePath]);
    let routesMeta = parentsMeta.concat(meta);
    if (route.children && route.children.length > 0) {
      invariant(
        route.index !== true,
        "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + path + '".')
      );
      flattenRoutes(route.children, branches, routesMeta, path);
    }
    if (route.path == null && !route.index) {
      return;
    }
    branches.push({
      path,
      score: computeScore(path, route.index),
      routesMeta
    });
  };
  routes.forEach((route, index2) => {
    var _route$path;
    if (route.path === "" || !((_route$path = route.path) != null && _route$path.includes("?"))) {
      flattenRoute(route, index2);
    } else {
      for (let exploded of explodeOptionalSegments(route.path)) {
        flattenRoute(route, index2, exploded);
      }
    }
  });
  return branches;
}
function explodeOptionalSegments(path) {
  let segments = path.split("/");
  if (segments.length === 0)
    return [];
  let [first, ...rest] = segments;
  let isOptional = first.endsWith("?");
  let required = first.replace(/\?$/, "");
  if (rest.length === 0) {
    return isOptional ? [required, ""] : [required];
  }
  let restExploded = explodeOptionalSegments(rest.join("/"));
  let result = [];
  result.push(...restExploded.map((subpath) => subpath === "" ? required : [required, subpath].join("/")));
  if (isOptional) {
    result.push(...restExploded);
  }
  return result.map((exploded) => path.startsWith("/") && exploded === "" ? "/" : exploded);
}
function rankRouteBranches(branches) {
  branches.sort((a, b2) => a.score !== b2.score ? b2.score - a.score : compareIndexes(a.routesMeta.map((meta) => meta.childrenIndex), b2.routesMeta.map((meta) => meta.childrenIndex)));
}
const paramRe = /^:\w+$/;
const dynamicSegmentValue = 3;
const indexRouteValue = 2;
const emptySegmentValue = 1;
const staticSegmentValue = 10;
const splatPenalty = -2;
const isSplat = (s) => s === "*";
function computeScore(path, index2) {
  let segments = path.split("/");
  let initialScore = segments.length;
  if (segments.some(isSplat)) {
    initialScore += splatPenalty;
  }
  if (index2) {
    initialScore += indexRouteValue;
  }
  return segments.filter((s) => !isSplat(s)).reduce((score, segment) => score + (paramRe.test(segment) ? dynamicSegmentValue : segment === "" ? emptySegmentValue : staticSegmentValue), initialScore);
}
function compareIndexes(a, b2) {
  let siblings = a.length === b2.length && a.slice(0, -1).every((n2, i) => n2 === b2[i]);
  return siblings ? (
    a[a.length - 1] - b2[b2.length - 1]
  ) : (
    0
  );
}
function matchRouteBranch(branch, pathname) {
  let {
    routesMeta
  } = branch;
  let matchedParams = {};
  let matchedPathname = "/";
  let matches = [];
  for (let i = 0; i < routesMeta.length; ++i) {
    let meta = routesMeta[i];
    let end = i === routesMeta.length - 1;
    let remainingPathname = matchedPathname === "/" ? pathname : pathname.slice(matchedPathname.length) || "/";
    let match = matchPath({
      path: meta.relativePath,
      caseSensitive: meta.caseSensitive,
      end
    }, remainingPathname);
    if (!match)
      return null;
    Object.assign(matchedParams, match.params);
    let route = meta.route;
    matches.push({
      // TODO: Can this as be avoided?
      params: matchedParams,
      pathname: joinPaths([matchedPathname, match.pathname]),
      pathnameBase: normalizePathname(joinPaths([matchedPathname, match.pathnameBase])),
      route
    });
    if (match.pathnameBase !== "/") {
      matchedPathname = joinPaths([matchedPathname, match.pathnameBase]);
    }
  }
  return matches;
}
function matchPath(pattern, pathname) {
  if (typeof pattern === "string") {
    pattern = {
      path: pattern,
      caseSensitive: false,
      end: true
    };
  }
  let [matcher, paramNames] = compilePath(pattern.path, pattern.caseSensitive, pattern.end);
  let match = pathname.match(matcher);
  if (!match)
    return null;
  let matchedPathname = match[0];
  let pathnameBase = matchedPathname.replace(/(.)\/+$/, "$1");
  let captureGroups = match.slice(1);
  let params = paramNames.reduce((memo, paramName, index2) => {
    if (paramName === "*") {
      let splatValue = captureGroups[index2] || "";
      pathnameBase = matchedPathname.slice(0, matchedPathname.length - splatValue.length).replace(/(.)\/+$/, "$1");
    }
    memo[paramName] = safelyDecodeURIComponent(captureGroups[index2] || "", paramName);
    return memo;
  }, {});
  return {
    params,
    pathname: matchedPathname,
    pathnameBase,
    pattern
  };
}
function compilePath(path, caseSensitive, end) {
  if (caseSensitive === void 0) {
    caseSensitive = false;
  }
  if (end === void 0) {
    end = true;
  }
  warning(path === "*" || !path.endsWith("*") || path.endsWith("/*"), 'Route path "' + path + '" will be treated as if it were ' + ('"' + path.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + path.replace(/\*$/, "/*") + '".'));
  let paramNames = [];
  let regexpSource = "^" + path.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (_, paramName) => {
    paramNames.push(paramName);
    return "/([^\\/]+)";
  });
  if (path.endsWith("*")) {
    paramNames.push("*");
    regexpSource += path === "*" || path === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$";
  } else if (end) {
    regexpSource += "\\/*$";
  } else if (path !== "" && path !== "/") {
    regexpSource += "(?:(?=\\/|$))";
  } else
    ;
  let matcher = new RegExp(regexpSource, caseSensitive ? void 0 : "i");
  return [matcher, paramNames];
}
function safelyDecodeURI(value) {
  try {
    return decodeURI(value);
  } catch (error) {
    warning(false, 'The URL path "' + value + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + error + ")."));
    return value;
  }
}
function safelyDecodeURIComponent(value, paramName) {
  try {
    return decodeURIComponent(value);
  } catch (error) {
    warning(false, 'The value for the URL param "' + paramName + '" will not be decoded because' + (' the string "' + value + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + error + ")."));
    return value;
  }
}
function stripBasename(pathname, basename) {
  if (basename === "/")
    return pathname;
  if (!pathname.toLowerCase().startsWith(basename.toLowerCase())) {
    return null;
  }
  let startIndex = basename.endsWith("/") ? basename.length - 1 : basename.length;
  let nextChar = pathname.charAt(startIndex);
  if (nextChar && nextChar !== "/") {
    return null;
  }
  return pathname.slice(startIndex) || "/";
}
function warning(cond, message) {
  if (!cond) {
    if (typeof console !== "undefined")
      console.warn(message);
    try {
      throw new Error(message);
    } catch (e) {
    }
  }
}
function resolvePath(to, fromPathname) {
  if (fromPathname === void 0) {
    fromPathname = "/";
  }
  let {
    pathname: toPathname,
    search = "",
    hash: hash2 = ""
  } = typeof to === "string" ? parsePath(to) : to;
  let pathname = toPathname ? toPathname.startsWith("/") ? toPathname : resolvePathname(toPathname, fromPathname) : fromPathname;
  return {
    pathname,
    search: normalizeSearch(search),
    hash: normalizeHash(hash2)
  };
}
function resolvePathname(relativePath, fromPathname) {
  let segments = fromPathname.replace(/\/+$/, "").split("/");
  let relativeSegments = relativePath.split("/");
  relativeSegments.forEach((segment) => {
    if (segment === "..") {
      if (segments.length > 1)
        segments.pop();
    } else if (segment !== ".") {
      segments.push(segment);
    }
  });
  return segments.length > 1 ? segments.join("/") : "/";
}
function getInvalidPathError(char, field, dest, path) {
  return "Cannot include a '" + char + "' character in a manually specified " + ("`to." + field + "` field [" + JSON.stringify(path) + "].  Please separate it out to the ") + ("`to." + dest + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.';
}
function getPathContributingMatches(matches) {
  return matches.filter((match, index2) => index2 === 0 || match.route.path && match.route.path.length > 0);
}
function resolveTo(toArg, routePathnames, locationPathname, isPathRelative) {
  if (isPathRelative === void 0) {
    isPathRelative = false;
  }
  let to;
  if (typeof toArg === "string") {
    to = parsePath(toArg);
  } else {
    to = _extends$2({}, toArg);
    invariant(!to.pathname || !to.pathname.includes("?"), getInvalidPathError("?", "pathname", "search", to));
    invariant(!to.pathname || !to.pathname.includes("#"), getInvalidPathError("#", "pathname", "hash", to));
    invariant(!to.search || !to.search.includes("#"), getInvalidPathError("#", "search", "hash", to));
  }
  let isEmptyPath = toArg === "" || to.pathname === "";
  let toPathname = isEmptyPath ? "/" : to.pathname;
  let from;
  if (isPathRelative || toPathname == null) {
    from = locationPathname;
  } else {
    let routePathnameIndex = routePathnames.length - 1;
    if (toPathname.startsWith("..")) {
      let toSegments = toPathname.split("/");
      while (toSegments[0] === "..") {
        toSegments.shift();
        routePathnameIndex -= 1;
      }
      to.pathname = toSegments.join("/");
    }
    from = routePathnameIndex >= 0 ? routePathnames[routePathnameIndex] : "/";
  }
  let path = resolvePath(to, from);
  let hasExplicitTrailingSlash = toPathname && toPathname !== "/" && toPathname.endsWith("/");
  let hasCurrentTrailingSlash = (isEmptyPath || toPathname === ".") && locationPathname.endsWith("/");
  if (!path.pathname.endsWith("/") && (hasExplicitTrailingSlash || hasCurrentTrailingSlash)) {
    path.pathname += "/";
  }
  return path;
}
const joinPaths = (paths) => paths.join("/").replace(/\/\/+/g, "/");
const normalizePathname = (pathname) => pathname.replace(/\/+$/, "").replace(/^\/*/, "/");
const normalizeSearch = (search) => !search || search === "?" ? "" : search.startsWith("?") ? search : "?" + search;
const normalizeHash = (hash2) => !hash2 || hash2 === "#" ? "" : hash2.startsWith("#") ? hash2 : "#" + hash2;
function isRouteErrorResponse(error) {
  return error != null && typeof error.status === "number" && typeof error.statusText === "string" && typeof error.internal === "boolean" && "data" in error;
}
const validMutationMethodsArr = ["post", "put", "patch", "delete"];
["get", ...validMutationMethodsArr];
function _extends$1() {
  _extends$1 = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends$1.apply(this, arguments);
}
function isPolyfill(x2, y2) {
  return x2 === y2 && (x2 !== 0 || 1 / x2 === 1 / y2) || x2 !== x2 && y2 !== y2;
}
const is = typeof Object.is === "function" ? Object.is : isPolyfill;
const {
  useState,
  useEffect,
  useLayoutEffect,
  useDebugValue
} = React$1;
function useSyncExternalStore$2(subscribe, getSnapshot, getServerSnapshot) {
  const value = getSnapshot();
  const [{
    inst
  }, forceUpdate] = useState({
    inst: {
      value,
      getSnapshot
    }
  });
  useLayoutEffect(() => {
    inst.value = value;
    inst.getSnapshot = getSnapshot;
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
  }, [subscribe, value, getSnapshot]);
  useEffect(() => {
    if (checkIfSnapshotChanged(inst)) {
      forceUpdate({
        inst
      });
    }
    const handleStoreChange = () => {
      if (checkIfSnapshotChanged(inst)) {
        forceUpdate({
          inst
        });
      }
    };
    return subscribe(handleStoreChange);
  }, [subscribe]);
  useDebugValue(value);
  return value;
}
function checkIfSnapshotChanged(inst) {
  const latestGetSnapshot = inst.getSnapshot;
  const prevValue = inst.value;
  try {
    const nextValue = latestGetSnapshot();
    return !is(prevValue, nextValue);
  } catch (error) {
    return true;
  }
}
function useSyncExternalStore$1(subscribe, getSnapshot, getServerSnapshot) {
  return getSnapshot();
}
const canUseDOM = !!(typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined");
const isServerEnvironment = !canUseDOM;
const shim = isServerEnvironment ? useSyncExternalStore$1 : useSyncExternalStore$2;
"useSyncExternalStore" in React$1 ? ((module) => module.useSyncExternalStore)(React$1) : shim;
const DataRouterContext = /* @__PURE__ */ reactExports.createContext(null);
const DataRouterStateContext = /* @__PURE__ */ reactExports.createContext(null);
const NavigationContext = /* @__PURE__ */ reactExports.createContext(null);
const LocationContext = /* @__PURE__ */ reactExports.createContext(null);
const RouteContext = /* @__PURE__ */ reactExports.createContext({
  outlet: null,
  matches: []
});
const RouteErrorContext = /* @__PURE__ */ reactExports.createContext(null);
function useHref(to, _temp) {
  let {
    relative
  } = _temp === void 0 ? {} : _temp;
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    hash: hash2,
    pathname,
    search
  } = useResolvedPath(to, {
    relative
  });
  let joinedPathname = pathname;
  if (basename !== "/") {
    joinedPathname = pathname === "/" ? basename : joinPaths([basename, pathname]);
  }
  return navigator2.createHref({
    pathname: joinedPathname,
    search,
    hash: hash2
  });
}
function useInRouterContext() {
  return reactExports.useContext(LocationContext) != null;
}
function useLocation() {
  !useInRouterContext() ? invariant(false) : void 0;
  return reactExports.useContext(LocationContext).location;
}
function useNavigate() {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    basename,
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  let activeRef = reactExports.useRef(false);
  reactExports.useEffect(() => {
    activeRef.current = true;
  });
  let navigate = reactExports.useCallback(function(to, options) {
    if (options === void 0) {
      options = {};
    }
    if (!activeRef.current)
      return;
    if (typeof to === "number") {
      navigator2.go(to);
      return;
    }
    let path = resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, options.relative === "path");
    if (basename !== "/") {
      path.pathname = path.pathname === "/" ? basename : joinPaths([basename, path.pathname]);
    }
    (!!options.replace ? navigator2.replace : navigator2.push)(path, options.state, options);
  }, [basename, navigator2, routePathnamesJson, locationPathname]);
  return navigate;
}
function useResolvedPath(to, _temp2) {
  let {
    relative
  } = _temp2 === void 0 ? {} : _temp2;
  let {
    matches
  } = reactExports.useContext(RouteContext);
  let {
    pathname: locationPathname
  } = useLocation();
  let routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));
  return reactExports.useMemo(() => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"), [to, routePathnamesJson, locationPathname, relative]);
}
function useRoutes(routes, locationArg) {
  !useInRouterContext() ? invariant(false) : void 0;
  let {
    navigator: navigator2
  } = reactExports.useContext(NavigationContext);
  let dataRouterStateContext = reactExports.useContext(DataRouterStateContext);
  let {
    matches: parentMatches
  } = reactExports.useContext(RouteContext);
  let routeMatch = parentMatches[parentMatches.length - 1];
  let parentParams = routeMatch ? routeMatch.params : {};
  routeMatch ? routeMatch.pathname : "/";
  let parentPathnameBase = routeMatch ? routeMatch.pathnameBase : "/";
  routeMatch && routeMatch.route;
  let locationFromContext = useLocation();
  let location;
  if (locationArg) {
    var _parsedLocationArg$pa;
    let parsedLocationArg = typeof locationArg === "string" ? parsePath(locationArg) : locationArg;
    !(parentPathnameBase === "/" || ((_parsedLocationArg$pa = parsedLocationArg.pathname) == null ? void 0 : _parsedLocationArg$pa.startsWith(parentPathnameBase))) ? invariant(false) : void 0;
    location = parsedLocationArg;
  } else {
    location = locationFromContext;
  }
  let pathname = location.pathname || "/";
  let remainingPathname = parentPathnameBase === "/" ? pathname : pathname.slice(parentPathnameBase.length) || "/";
  let matches = matchRoutes(routes, {
    pathname: remainingPathname
  });
  let renderedMatches = _renderMatches(matches && matches.map((match) => Object.assign({}, match, {
    params: Object.assign({}, parentParams, match.params),
    pathname: joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathname).pathname : match.pathname
    ]),
    pathnameBase: match.pathnameBase === "/" ? parentPathnameBase : joinPaths([
      parentPathnameBase,
      // Re-encode pathnames that were decoded inside matchRoutes
      navigator2.encodeLocation ? navigator2.encodeLocation(match.pathnameBase).pathname : match.pathnameBase
    ])
  })), parentMatches, dataRouterStateContext || void 0);
  if (locationArg && renderedMatches) {
    return /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
      value: {
        location: _extends$1({
          pathname: "/",
          search: "",
          hash: "",
          state: null,
          key: "default"
        }, location),
        navigationType: Action.Pop
      }
    }, renderedMatches);
  }
  return renderedMatches;
}
function DefaultErrorElement() {
  let error = useRouteError();
  let message = isRouteErrorResponse(error) ? error.status + " " + error.statusText : error instanceof Error ? error.message : JSON.stringify(error);
  let stack = error instanceof Error ? error.stack : null;
  let lightgrey = "rgba(200,200,200, 0.5)";
  let preStyles = {
    padding: "0.5rem",
    backgroundColor: lightgrey
  };
  let devInfo = null;
  return /* @__PURE__ */ reactExports.createElement(reactExports.Fragment, null, /* @__PURE__ */ reactExports.createElement("h2", null, "Unexpected Application Error!"), /* @__PURE__ */ reactExports.createElement("h3", {
    style: {
      fontStyle: "italic"
    }
  }, message), stack ? /* @__PURE__ */ reactExports.createElement("pre", {
    style: preStyles
  }, stack) : null, devInfo);
}
class RenderErrorBoundary extends reactExports.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: props.location,
      error: props.error
    };
  }
  static getDerivedStateFromError(error) {
    return {
      error
    };
  }
  static getDerivedStateFromProps(props, state) {
    if (state.location !== props.location) {
      return {
        error: props.error,
        location: props.location
      };
    }
    return {
      error: props.error || state.error,
      location: state.location
    };
  }
  componentDidCatch(error, errorInfo) {
    console.error("React Router caught the following error during render", error, errorInfo);
  }
  render() {
    return this.state.error ? /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
      value: this.props.routeContext
    }, /* @__PURE__ */ reactExports.createElement(RouteErrorContext.Provider, {
      value: this.state.error,
      children: this.props.component
    })) : this.props.children;
  }
}
function RenderedRoute(_ref) {
  let {
    routeContext,
    match,
    children
  } = _ref;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  if (dataRouterContext && dataRouterContext.static && dataRouterContext.staticContext && match.route.errorElement) {
    dataRouterContext.staticContext._deepestRenderedBoundaryId = match.route.id;
  }
  return /* @__PURE__ */ reactExports.createElement(RouteContext.Provider, {
    value: routeContext
  }, children);
}
function _renderMatches(matches, parentMatches, dataRouterState) {
  if (parentMatches === void 0) {
    parentMatches = [];
  }
  if (matches == null) {
    if (dataRouterState != null && dataRouterState.errors) {
      matches = dataRouterState.matches;
    } else {
      return null;
    }
  }
  let renderedMatches = matches;
  let errors = dataRouterState == null ? void 0 : dataRouterState.errors;
  if (errors != null) {
    let errorIndex = renderedMatches.findIndex((m2) => m2.route.id && (errors == null ? void 0 : errors[m2.route.id]));
    !(errorIndex >= 0) ? invariant(false) : void 0;
    renderedMatches = renderedMatches.slice(0, Math.min(renderedMatches.length, errorIndex + 1));
  }
  return renderedMatches.reduceRight((outlet, match, index2) => {
    let error = match.route.id ? errors == null ? void 0 : errors[match.route.id] : null;
    let errorElement = dataRouterState ? match.route.errorElement || /* @__PURE__ */ reactExports.createElement(DefaultErrorElement, null) : null;
    let matches2 = parentMatches.concat(renderedMatches.slice(0, index2 + 1));
    let getChildren = () => /* @__PURE__ */ reactExports.createElement(RenderedRoute, {
      match,
      routeContext: {
        outlet,
        matches: matches2
      }
    }, error ? errorElement : match.route.element !== void 0 ? match.route.element : outlet);
    return dataRouterState && (match.route.errorElement || index2 === 0) ? /* @__PURE__ */ reactExports.createElement(RenderErrorBoundary, {
      location: dataRouterState.location,
      component: errorElement,
      error,
      children: getChildren(),
      routeContext: {
        outlet: null,
        matches: matches2
      }
    }) : getChildren();
  }, null);
}
var DataRouterHook$1;
(function(DataRouterHook2) {
  DataRouterHook2["UseBlocker"] = "useBlocker";
  DataRouterHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterHook$1 || (DataRouterHook$1 = {}));
var DataRouterStateHook$1;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseLoaderData"] = "useLoaderData";
  DataRouterStateHook2["UseActionData"] = "useActionData";
  DataRouterStateHook2["UseRouteError"] = "useRouteError";
  DataRouterStateHook2["UseNavigation"] = "useNavigation";
  DataRouterStateHook2["UseRouteLoaderData"] = "useRouteLoaderData";
  DataRouterStateHook2["UseMatches"] = "useMatches";
  DataRouterStateHook2["UseRevalidator"] = "useRevalidator";
})(DataRouterStateHook$1 || (DataRouterStateHook$1 = {}));
function useDataRouterState(hookName) {
  let state = reactExports.useContext(DataRouterStateContext);
  !state ? invariant(false) : void 0;
  return state;
}
function useRouteContext(hookName) {
  let route = reactExports.useContext(RouteContext);
  !route ? invariant(false) : void 0;
  return route;
}
function useCurrentRouteId(hookName) {
  let route = useRouteContext();
  let thisRoute = route.matches[route.matches.length - 1];
  !thisRoute.route.id ? invariant(false) : void 0;
  return thisRoute.route.id;
}
function useRouteError() {
  var _state$errors;
  let error = reactExports.useContext(RouteErrorContext);
  let state = useDataRouterState(DataRouterStateHook$1.UseRouteError);
  let routeId = useCurrentRouteId(DataRouterStateHook$1.UseRouteError);
  if (error) {
    return error;
  }
  return (_state$errors = state.errors) == null ? void 0 : _state$errors[routeId];
}
function Route(_props) {
  invariant(false);
}
function Router(_ref4) {
  let {
    basename: basenameProp = "/",
    children = null,
    location: locationProp,
    navigationType = Action.Pop,
    navigator: navigator2,
    static: staticProp = false
  } = _ref4;
  !!useInRouterContext() ? invariant(false) : void 0;
  let basename = basenameProp.replace(/^\/*/, "/");
  let navigationContext = reactExports.useMemo(() => ({
    basename,
    navigator: navigator2,
    static: staticProp
  }), [basename, navigator2, staticProp]);
  if (typeof locationProp === "string") {
    locationProp = parsePath(locationProp);
  }
  let {
    pathname = "/",
    search = "",
    hash: hash2 = "",
    state = null,
    key = "default"
  } = locationProp;
  let location = reactExports.useMemo(() => {
    let trailingPathname = stripBasename(pathname, basename);
    if (trailingPathname == null) {
      return null;
    }
    return {
      pathname: trailingPathname,
      search,
      hash: hash2,
      state,
      key
    };
  }, [basename, pathname, search, hash2, state, key]);
  if (location == null) {
    return null;
  }
  return /* @__PURE__ */ reactExports.createElement(NavigationContext.Provider, {
    value: navigationContext
  }, /* @__PURE__ */ reactExports.createElement(LocationContext.Provider, {
    children,
    value: {
      location,
      navigationType
    }
  }));
}
function Routes(_ref5) {
  let {
    children,
    location
  } = _ref5;
  let dataRouterContext = reactExports.useContext(DataRouterContext);
  let routes = dataRouterContext && !children ? dataRouterContext.router.routes : createRoutesFromChildren(children);
  return useRoutes(routes, location);
}
var AwaitRenderStatus;
(function(AwaitRenderStatus2) {
  AwaitRenderStatus2[AwaitRenderStatus2["pending"] = 0] = "pending";
  AwaitRenderStatus2[AwaitRenderStatus2["success"] = 1] = "success";
  AwaitRenderStatus2[AwaitRenderStatus2["error"] = 2] = "error";
})(AwaitRenderStatus || (AwaitRenderStatus = {}));
new Promise(() => {
});
function createRoutesFromChildren(children, parentPath) {
  if (parentPath === void 0) {
    parentPath = [];
  }
  let routes = [];
  reactExports.Children.forEach(children, (element, index2) => {
    if (!/* @__PURE__ */ reactExports.isValidElement(element)) {
      return;
    }
    if (element.type === reactExports.Fragment) {
      routes.push.apply(routes, createRoutesFromChildren(element.props.children, parentPath));
      return;
    }
    !(element.type === Route) ? invariant(false) : void 0;
    !(!element.props.index || !element.props.children) ? invariant(false) : void 0;
    let treePath = [...parentPath, index2];
    let route = {
      id: element.props.id || treePath.join("-"),
      caseSensitive: element.props.caseSensitive,
      element: element.props.element,
      index: element.props.index,
      path: element.props.path,
      loader: element.props.loader,
      action: element.props.action,
      errorElement: element.props.errorElement,
      hasErrorBoundary: element.props.errorElement != null,
      shouldRevalidate: element.props.shouldRevalidate,
      handle: element.props.handle
    };
    if (element.props.children) {
      route.children = createRoutesFromChildren(element.props.children, treePath);
    }
    routes.push(route);
  });
  return routes;
}
function _extends() {
  _extends = Object.assign ? Object.assign.bind() : function(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }
    return target;
  };
  return _extends.apply(this, arguments);
}
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null)
    return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;
  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0)
      continue;
    target[key] = source[key];
  }
  return target;
}
function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}
function shouldProcessLinkClick(event, target) {
  return event.button === 0 && // Ignore everything but left clicks
  (!target || target === "_self") && // Let browser handle "target=_blank" etc.
  !isModifiedEvent(event);
}
const _excluded = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"];
function HashRouter(_ref2) {
  let {
    basename,
    children,
    window: window2
  } = _ref2;
  let historyRef = reactExports.useRef();
  if (historyRef.current == null) {
    historyRef.current = createHashHistory({
      window: window2,
      v5Compat: true
    });
  }
  let history = historyRef.current;
  let [state, setState] = reactExports.useState({
    action: history.action,
    location: history.location
  });
  reactExports.useLayoutEffect(() => history.listen(setState), [history]);
  return /* @__PURE__ */ reactExports.createElement(Router, {
    basename,
    children,
    location: state.location,
    navigationType: state.action,
    navigator: history
  });
}
const isBrowser = typeof window !== "undefined" && typeof window.document !== "undefined" && typeof window.document.createElement !== "undefined";
const Link = /* @__PURE__ */ reactExports.forwardRef(function LinkWithRef(_ref4, ref) {
  let {
    onClick,
    relative,
    reloadDocument,
    replace,
    state,
    target,
    to,
    preventScrollReset
  } = _ref4, rest = _objectWithoutPropertiesLoose(_ref4, _excluded);
  let absoluteHref;
  let isExternal = false;
  if (isBrowser && typeof to === "string" && /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i.test(to)) {
    absoluteHref = to;
    let currentUrl = new URL(window.location.href);
    let targetUrl = to.startsWith("//") ? new URL(currentUrl.protocol + to) : new URL(to);
    if (targetUrl.origin === currentUrl.origin) {
      to = targetUrl.pathname + targetUrl.search + targetUrl.hash;
    } else {
      isExternal = true;
    }
  }
  let href = useHref(to, {
    relative
  });
  let internalOnClick = useLinkClickHandler(to, {
    replace,
    state,
    target,
    preventScrollReset,
    relative
  });
  function handleClick(event) {
    if (onClick)
      onClick(event);
    if (!event.defaultPrevented) {
      internalOnClick(event);
    }
  }
  return (
    // eslint-disable-next-line jsx-a11y/anchor-has-content
    /* @__PURE__ */ reactExports.createElement("a", _extends({}, rest, {
      href: absoluteHref || href,
      onClick: isExternal || reloadDocument ? onClick : handleClick,
      ref,
      target
    }))
  );
});
var DataRouterHook;
(function(DataRouterHook2) {
  DataRouterHook2["UseScrollRestoration"] = "useScrollRestoration";
  DataRouterHook2["UseSubmitImpl"] = "useSubmitImpl";
  DataRouterHook2["UseFetcher"] = "useFetcher";
})(DataRouterHook || (DataRouterHook = {}));
var DataRouterStateHook;
(function(DataRouterStateHook2) {
  DataRouterStateHook2["UseFetchers"] = "useFetchers";
  DataRouterStateHook2["UseScrollRestoration"] = "useScrollRestoration";
})(DataRouterStateHook || (DataRouterStateHook = {}));
function useLinkClickHandler(to, _temp) {
  let {
    target,
    replace: replaceProp,
    state,
    preventScrollReset,
    relative
  } = _temp === void 0 ? {} : _temp;
  let navigate = useNavigate();
  let location = useLocation();
  let path = useResolvedPath(to, {
    relative
  });
  return reactExports.useCallback((event) => {
    if (shouldProcessLinkClick(event, target)) {
      event.preventDefault();
      let replace = replaceProp !== void 0 ? replaceProp : createPath(location) === createPath(path);
      navigate(to, {
        replace,
        state,
        preventScrollReset,
        relative
      });
    }
  }, [location, navigate, path, replaceProp, state, target, to, preventScrollReset, relative]);
}
function EthLogo() {
  return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4", fill: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M11.944 17.97L4.58 13.62 11.943 24l7.37-10.38-7.372 4.35h.003zM12.056 0L4.69 12.223l7.365 4.354 7.365-4.35L12.056 0z" }) });
}
function BtnLoad() {
  return /* @__PURE__ */ jsxs("svg", { className: "mr-3 h-5 w-5 animate-spin text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [
    /* @__PURE__ */ jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }),
    /* @__PURE__ */ jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })
  ] });
}
function ArrowLoad() {
  return /* @__PURE__ */ jsxs("svg", { className: "h-12 w-12 bi bi-arrow-repeat animate-spin", fill: "currentColor", viewBox: "0 0 16 16", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M11.534 7h3.932a.25.25 0 0 1 .192.41l-1.966 2.36a.25.25 0 0 1-.384 0l-1.966-2.36a.25.25 0 0 1 .192-.41zm-11 2h3.932a.25.25 0 0 0 .192-.41L2.692 6.23a.25.25 0 0 0-.384 0L.342 8.59A.25.25 0 0 0 .534 9z" }),
    /* @__PURE__ */ jsx("path", { fillRule: "evenodd", d: "M8 3c-1.552 0-2.94.707-3.857 1.818a.5.5 0 1 1-.771-.636A6.002 6.002 0 0 1 13.917 7H12.9A5.002 5.002 0 0 0 8 3zM3.1 9a5.002 5.002 0 0 0 8.757 2.182.5.5 0 1 1 .771.636A6.002 6.002 0 0 1 2.083 9H3.1z" })
  ] });
}
function MaticLogo() {
  return /* @__PURE__ */ jsxs("svg", { className: "w-4 h-4", fill: "#944dff", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("circle", { cx: "12", cy: "12", r: "12", fill: "#e5ccff" }),
    /* @__PURE__ */ jsx("path", { d: "M16.5937 8.4806C16.2656 8.26568 15.8437 8.26568 15.4687 8.4806L12.8437 10.2537L11.0625 11.3821L8.48437 13.1552C8.15625 13.3702 7.73437 13.3702 7.35937 13.1552L5.34375 11.7582C5.01562 11.5433 4.78125 11.1134 4.78125 10.6299V7.94329C4.78125 7.51344 4.96875 7.08359 5.34375 6.81493L7.35937 5.47165C7.6875 5.25672 8.10937 5.25672 8.48437 5.47165L10.5 6.86866C10.8281 7.08359 11.0625 7.51344 11.0625 7.99702V9.77016L12.8437 8.58807V6.7612C12.8437 6.33135 12.6562 5.9015 12.2812 5.63284L8.53125 3.10747C8.20312 2.89254 7.78125 2.89254 7.40625 3.10747L3.5625 5.68657C3.1875 5.9015 3 6.33135 3 6.7612V11.8119C3 12.2418 3.1875 12.6716 3.5625 12.9403L7.35937 15.4657C7.6875 15.6806 8.10937 15.6806 8.48437 15.4657L11.0625 13.7463L12.8437 12.5642L15.4219 10.8448C15.75 10.6299 16.1719 10.6299 16.5469 10.8448L18.5625 12.1881C18.8906 12.403 19.125 12.8328 19.125 13.3164V16.003C19.125 16.4328 18.9375 16.8627 18.5625 17.1313L16.5937 18.4746C16.2656 18.6896 15.8437 18.6896 15.4687 18.4746L13.4531 17.1313C13.125 16.9164 12.8906 16.4866 12.8906 16.003V14.2836L11.1094 15.4657V17.2388C11.1094 17.6687 11.2969 18.0985 11.6719 18.3672L15.4687 20.8925C15.7969 21.1075 16.2187 21.1075 16.5937 20.8925L20.3906 18.3672C20.7187 18.1522 20.9531 17.7224 20.9531 17.2388V12.1343C20.9531 11.7045 20.7656 11.2746 20.3906 11.006L16.5937 8.4806Z" })
  ] });
}
function KyuriLogo() {
  return /* @__PURE__ */ jsxs("svg", { className: "w-6 h-6", viewBox: "0 0 33 37", fill: "currentColor", xmlns: "http://www.w3.org/2000/svg", children: [
    /* @__PURE__ */ jsx("path", { d: "M14.7152 28.1659C14.2624 28.1659 13.8372 28.0605 13.4395 27.8498C13.0418 27.639 12.6946 27.353 12.3978 26.9916C12.101 26.6304 11.866 26.2078 11.6928 25.7238C11.5197 25.2398 11.4331 24.7221 11.4331 24.171C11.4331 23.5225 11.5454 22.9309 11.7699 22.3959C11.9944 21.8609 12.314 21.3943 12.7288 20.996C12.8887 20.8385 13.0513 20.6856 13.2169 20.5374C13.3824 20.3892 13.547 20.2386 13.7106 20.0859C14.1597 19.6644 14.6011 19.2394 15.0349 18.8109C15.4687 18.3825 15.8988 17.939 16.3249 17.4805C16.8843 16.8784 17.4143 16.2566 17.9147 15.6151C18.415 14.9736 18.905 14.3031 19.3844 13.6038C19.6927 13.1545 20.0323 12.8059 20.4034 12.5581C20.7744 12.3103 21.2034 12.1865 21.6905 12.1865C22.0863 12.1865 22.4583 12.2779 22.8064 12.4609C23.1547 12.6439 23.459 12.8939 23.7198 13.2112C23.9804 13.5285 24.1859 13.899 24.3362 14.3228C24.4865 14.7466 24.5617 15.1994 24.5617 15.6811C24.5617 15.8849 24.5493 16.0759 24.5245 16.2543C24.4999 16.4326 24.4637 16.6028 24.416 16.7649C24.3687 16.927 24.3105 17.088 24.242 17.2478C24.1735 17.4075 24.0955 17.5731 24.008 17.7445C23.6008 18.5226 23.1775 19.2695 22.7379 19.9851C22.2984 20.7006 21.8389 21.3931 21.3594 22.0624C20.8799 22.7316 20.3787 23.3801 19.8554 24.0078C19.3322 24.6353 18.7832 25.2501 18.2087 25.8523C17.9689 26.1024 17.7263 26.3514 17.4808 26.5991C17.2354 26.847 16.987 27.0866 16.7359 27.3183C16.4353 27.5961 16.1185 27.8069 15.7855 27.9504C15.4525 28.094 15.0958 28.1659 14.7152 28.1659Z", fill: "black" }),
    /* @__PURE__ */ jsx("path", { d: "M23.6312 14.8752L23.4999 16.2786L18.3056 23.9209L14.4869 26.3455L12.5005 24.9074L12.255 24.2126V24.171C12.255 23.6846 12.3387 23.2411 12.5062 22.8405C12.6736 22.4399 12.9114 22.0914 13.2197 21.7949C13.4138 21.605 13.6107 21.4209 13.8105 21.2426C14.0102 21.0643 14.2072 20.8825 14.4012 20.6973C14.7818 20.336 15.1557 19.9746 15.5229 19.6134C15.8901 19.2521 16.2526 18.8816 16.6103 18.5018C17.2382 17.8348 17.8347 17.1447 18.3997 16.4314C18.9648 15.7181 19.5138 14.9724 20.0466 14.1943C20.2672 13.8747 20.5079 13.6269 20.7686 13.4509C21.0293 13.2749 21.3366 13.1869 21.6904 13.1869C21.9073 13.1869 22.1176 13.2275 22.3212 13.3085C22.5248 13.3896 22.7113 13.5042 22.8806 13.6524C23.0499 13.8006 23.1993 13.9789 23.3287 14.1874C23.4581 14.3958 23.5589 14.6251 23.6312 14.8752Z", fill: "#13A10E" }),
    /* @__PURE__ */ jsx("path", { d: "M12.255 24.2126C12.5138 24.6017 12.8268 24.9005 13.194 25.1089C13.5612 25.3174 13.9503 25.4215 14.3613 25.4215C14.6695 25.4215 14.9663 25.3625 15.2518 25.2444C15.5372 25.1262 15.7997 24.9491 16.0394 24.7129H16.0452C16.7948 23.9996 17.5151 23.269 18.2057 22.521C18.8963 21.7729 19.5566 20.996 20.1864 20.19C20.8162 19.3841 21.4183 18.5412 21.9929 17.6611C22.5676 16.7811 23.1137 15.8524 23.6312 14.8752C23.6693 15.0049 23.6968 15.138 23.7139 15.2746C23.7311 15.4113 23.7397 15.5468 23.7397 15.6811C23.7397 15.9775 23.7036 16.2404 23.6312 16.4696C23.5589 16.6989 23.4581 16.9363 23.3287 17.1818C22.8226 18.1452 22.3059 19.0414 21.7789 19.8705C21.2519 20.6995 20.7001 21.4904 20.1236 22.243C19.5471 22.9957 18.9382 23.7229 18.2971 24.4246C17.6558 25.1262 16.9679 25.8291 16.2336 26.5331L16.2278 26.5262C16.0109 26.7392 15.7731 26.899 15.5143 27.0056C15.2556 27.1121 14.9892 27.1654 14.7152 27.1654C14.3803 27.1654 14.0645 27.0877 13.7677 26.9326C13.4708 26.7775 13.2111 26.5667 12.9885 26.3004C12.7659 26.0341 12.5889 25.7215 12.4577 25.3625C12.3264 25.0035 12.2588 24.6202 12.255 24.2126Z", fill: "#107C10" }),
    /* @__PURE__ */ jsx("path", { d: "M21.074 20.1761C21.0169 20.1761 20.9684 20.1519 20.9285 20.1033C20.8885 20.0546 20.8685 19.9955 20.8685 19.926C20.8685 19.8334 20.8895 19.772 20.9312 19.7419C20.9731 19.7119 21.0197 19.6899 21.0711 19.6759C21.1225 19.662 21.1701 19.64 21.2139 19.6099C21.2576 19.5799 21.2795 19.5185 21.2795 19.4258C21.2795 19.3563 21.2995 19.2973 21.3394 19.2487C21.3794 19.2 21.4279 19.1757 21.485 19.1757C21.5421 19.1757 21.5906 19.2 21.6305 19.2487C21.6705 19.2973 21.6905 19.3563 21.6905 19.4258C21.6905 19.5278 21.6742 19.6239 21.642 19.7141C21.6096 19.8045 21.5649 19.8844 21.5079 19.9539C21.4507 20.0233 21.3851 20.0778 21.3109 20.1171C21.2366 20.1565 21.1577 20.1761 21.074 20.1761ZM19.4357 22.177C19.3825 22.177 19.335 22.1516 19.2931 22.1006C19.2512 22.0496 19.2302 21.9918 19.2302 21.9269C19.2302 21.8343 19.2512 21.7729 19.2931 21.7429C19.335 21.7128 19.3815 21.6908 19.433 21.6769C19.4842 21.6629 19.5309 21.6409 19.5727 21.6109C19.6146 21.5808 19.6356 21.5194 19.6356 21.4268C19.6356 21.3619 19.6565 21.304 19.6984 21.253C19.7402 21.2021 19.7877 21.1766 19.8411 21.1766C19.8981 21.1766 19.9466 21.2009 19.9866 21.2495C20.0266 21.2981 20.0465 21.3573 20.0465 21.4268C20.0465 21.5286 20.0304 21.6248 19.998 21.715C19.9656 21.8054 19.9219 21.8853 19.8667 21.9548C19.8116 22.0243 19.7469 22.0786 19.6726 22.118C19.5985 22.1574 19.5195 22.177 19.4357 22.177ZM17.7919 24.171C17.7347 24.171 17.6862 24.1466 17.6462 24.098C17.6064 24.0494 17.5864 23.9904 17.5864 23.9209C17.5864 23.8283 17.6072 23.7669 17.6491 23.7368C17.691 23.7066 17.7376 23.6846 17.789 23.6708C17.8404 23.6569 17.888 23.6349 17.9317 23.6048C17.9755 23.5746 17.9974 23.5133 17.9974 23.4206C17.9974 23.3511 18.0174 23.2921 18.0572 23.2435C18.0972 23.1949 18.1457 23.1705 18.2029 23.1705C18.2599 23.1705 18.3085 23.1949 18.3484 23.2435C18.3884 23.2921 18.4084 23.3511 18.4084 23.4206C18.4084 23.5225 18.3921 23.6186 18.3599 23.709C18.3275 23.7993 18.2827 23.8793 18.2256 23.9486C18.1686 24.0181 18.103 24.0726 18.0287 24.112C17.9545 24.1513 17.8756 24.171 17.7919 24.171ZM16.1536 26.1719C16.1004 26.1719 16.0527 26.1464 16.011 26.0955C15.9691 26.0445 15.9481 25.9866 15.9481 25.9218C15.9481 25.8291 15.9691 25.7678 16.011 25.7376C16.0527 25.7075 16.0994 25.6855 16.1507 25.6716C16.2021 25.6578 16.2487 25.6358 16.2906 25.6056C16.3325 25.5755 16.3534 25.5141 16.3534 25.4215C16.3534 25.3568 16.3744 25.2988 16.4162 25.2479C16.4581 25.1969 16.5056 25.1715 16.5589 25.1715C16.616 25.1715 16.6645 25.1958 16.7045 25.2444C16.7444 25.293 16.7644 25.3521 16.7644 25.4215C16.7644 25.5235 16.7482 25.6195 16.7159 25.7099C16.6835 25.8003 16.6397 25.8801 16.5846 25.9496C16.5294 26.019 16.4647 26.0735 16.3905 26.1129C16.3164 26.1523 16.2374 26.1719 16.1536 26.1719ZM22.5125 17.4319C22.5125 17.3624 22.5324 17.3034 22.5724 17.2547C22.6124 17.2061 22.6609 17.1818 22.718 17.1818C22.7712 17.1818 22.8179 17.2073 22.8577 17.2582C22.8977 17.3091 22.9177 17.367 22.9177 17.4319C22.9177 17.4967 22.8977 17.5546 22.8577 17.6056C22.8179 17.6565 22.7712 17.682 22.718 17.682C22.6609 17.682 22.6124 17.6577 22.5724 17.609C22.5324 17.5604 22.5125 17.5014 22.5125 17.4319Z", fill: "#13A10E" }),
    /* @__PURE__ */ jsx("path", { d: "M10.9487 16.4725L4.19836 12.485L10.9478 22L17.7036 12.485L10.9459 16.4725H10.9487ZM11.0514 0L4.2992 11.2044L11.0504 15.1956L17.8017 11.2081L11.0514 0Z" })
  ] });
}
const version = "6.0.3";
function checkType(value, type, name) {
  const types = type.split("|").map((t2) => t2.trim());
  for (let i = 0; i < types.length; i++) {
    switch (type) {
      case "any":
        return;
      case "bigint":
      case "boolean":
      case "number":
      case "string":
        if (typeof value === type) {
          return;
        }
    }
  }
  const error = new Error(`invalid value for type ${type}`);
  error.code = "INVALID_ARGUMENT";
  error.argument = `value.${name}`;
  error.value = value;
  throw error;
}
async function resolveProperties(value) {
  const keys = Object.keys(value);
  const results = await Promise.all(keys.map((k2) => Promise.resolve(value[k2])));
  return results.reduce((accum, v2, index2) => {
    accum[keys[index2]] = v2;
    return accum;
  }, {});
}
function defineProperties(target, values, types) {
  for (let key in values) {
    let value = values[key];
    const type = types ? types[key] : null;
    if (type) {
      checkType(value, type, key);
    }
    Object.defineProperty(target, key, { enumerable: true, value, writable: false });
  }
}
function stringify(value) {
  if (value == null) {
    return "null";
  }
  if (Array.isArray(value)) {
    return "[ " + value.map(stringify).join(", ") + " ]";
  }
  if (value instanceof Uint8Array) {
    const HEX = "0123456789abcdef";
    let result = "0x";
    for (let i = 0; i < value.length; i++) {
      result += HEX[value[i] >> 4];
      result += HEX[value[i] & 15];
    }
    return result;
  }
  if (typeof value === "object" && typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  switch (typeof value) {
    case "boolean":
    case "symbol":
      return value.toString();
    case "bigint":
      return BigInt(value).toString();
    case "number":
      return value.toString();
    case "string":
      return JSON.stringify(value);
    case "object": {
      const keys = Object.keys(value);
      keys.sort();
      return "{ " + keys.map((k2) => `${stringify(k2)}: ${stringify(value[k2])}`).join(", ") + " }";
    }
  }
  return `[ COULD NOT SERIALIZE ]`;
}
function isError(error, code) {
  return error && error.code === code;
}
function isCallException(error) {
  return isError(error, "CALL_EXCEPTION");
}
function makeError(message, code, info) {
  {
    const details = [];
    if (info) {
      if ("message" in info || "code" in info || "name" in info) {
        throw new Error(`value will overwrite populated values: ${stringify(info)}`);
      }
      for (const key in info) {
        const value = info[key];
        details.push(key + "=" + stringify(value));
      }
    }
    details.push(`code=${code}`);
    details.push(`version=${version}`);
    if (details.length) {
      message += " (" + details.join(", ") + ")";
    }
  }
  let error;
  switch (code) {
    case "INVALID_ARGUMENT":
      error = new TypeError(message);
      break;
    case "NUMERIC_FAULT":
    case "BUFFER_OVERRUN":
      error = new RangeError(message);
      break;
    default:
      error = new Error(message);
  }
  defineProperties(error, { code });
  if (info) {
    defineProperties(error, info);
  }
  return error;
}
function assert$1(check, message, code, info) {
  if (!check) {
    throw makeError(message, code, info);
  }
}
function assertArgument(check, message, name, value) {
  assert$1(check, message, "INVALID_ARGUMENT", { argument: name, value });
}
function assertArgumentCount(count, expectedCount, message) {
  if (message == null) {
    message = "";
  }
  if (message) {
    message = ": " + message;
  }
  assert$1(count >= expectedCount, "missing arguemnt" + message, "MISSING_ARGUMENT", {
    count,
    expectedCount
  });
  assert$1(count <= expectedCount, "too many arguemnts" + message, "UNEXPECTED_ARGUMENT", {
    count,
    expectedCount
  });
}
const _normalizeForms = ["NFD", "NFC", "NFKD", "NFKC"].reduce((accum, form) => {
  try {
    if ("test".normalize(form) !== "test") {
      throw new Error("bad");
    }
    ;
    if (form === "NFD") {
      const check = String.fromCharCode(233).normalize("NFD");
      const expected = String.fromCharCode(101, 769);
      if (check !== expected) {
        throw new Error("broken");
      }
    }
    accum.push(form);
  } catch (error) {
  }
  return accum;
}, []);
function assertNormalize(form) {
  assert$1(_normalizeForms.indexOf(form) >= 0, "platform missing String.prototype.normalize", "UNSUPPORTED_OPERATION", {
    operation: "String.prototype.normalize",
    info: { form }
  });
}
function assertPrivate(givenGuard, guard, className) {
  if (className == null) {
    className = "";
  }
  if (givenGuard !== guard) {
    let method = className, operation = "new";
    if (className) {
      method += ".";
      operation += " " + className;
    }
    assert$1(false, `private constructor; use ${method}from* methods`, "UNSUPPORTED_OPERATION", {
      operation
    });
  }
}
function _getBytes(value, name, copy2) {
  if (value instanceof Uint8Array) {
    if (copy2) {
      return new Uint8Array(value);
    }
    return value;
  }
  if (typeof value === "string" && value.match(/^0x([0-9a-f][0-9a-f])*$/i)) {
    const result = new Uint8Array((value.length - 2) / 2);
    let offset = 2;
    for (let i = 0; i < result.length; i++) {
      result[i] = parseInt(value.substring(offset, offset + 2), 16);
      offset += 2;
    }
    return result;
  }
  assertArgument(false, "invalid BytesLike value", name || "value", value);
}
function getBytes(value, name) {
  return _getBytes(value, name, false);
}
function getBytesCopy(value, name) {
  return _getBytes(value, name, true);
}
function isHexString(value, length) {
  if (typeof value !== "string" || !value.match(/^0x[0-9A-Fa-f]*$/)) {
    return false;
  }
  if (typeof length === "number" && value.length !== 2 + 2 * length) {
    return false;
  }
  if (length === true && value.length % 2 !== 0) {
    return false;
  }
  return true;
}
function isBytesLike(value) {
  return isHexString(value, true) || value instanceof Uint8Array;
}
const HexCharacters = "0123456789abcdef";
function hexlify(data) {
  const bytes2 = getBytes(data);
  let result = "0x";
  for (let i = 0; i < bytes2.length; i++) {
    const v2 = bytes2[i];
    result += HexCharacters[(v2 & 240) >> 4] + HexCharacters[v2 & 15];
  }
  return result;
}
function concat(datas) {
  return "0x" + datas.map((d) => hexlify(d).substring(2)).join("");
}
function dataLength(data) {
  if (isHexString(data, true)) {
    return (data.length - 2) / 2;
  }
  return getBytes(data).length;
}
function dataSlice(data, start, end) {
  const bytes2 = getBytes(data);
  if (end != null && end > bytes2.length) {
    assert$1(false, "cannot slice beyond data bounds", "BUFFER_OVERRUN", {
      buffer: bytes2,
      length: bytes2.length,
      offset: end
    });
  }
  return hexlify(bytes2.slice(start == null ? 0 : start, end == null ? bytes2.length : end));
}
function zeroPad(data, length, left) {
  const bytes2 = getBytes(data);
  assert$1(length >= bytes2.length, "padding exceeds data length", "BUFFER_OVERRUN", {
    buffer: new Uint8Array(bytes2),
    length,
    offset: length + 1
  });
  const result = new Uint8Array(length);
  result.fill(0);
  if (left) {
    result.set(bytes2, length - bytes2.length);
  } else {
    result.set(bytes2, 0);
  }
  return hexlify(result);
}
function zeroPadValue(data, length) {
  return zeroPad(data, length, true);
}
const BN_0$9 = BigInt(0);
const BN_1$4 = BigInt(1);
const maxValue = 9007199254740991;
function fromTwos(_value2, _width) {
  const value = getUint(_value2, "value");
  const width = BigInt(getNumber(_width, "width"));
  assert$1(value >> width === BN_0$9, "overflow", "NUMERIC_FAULT", {
    operation: "fromTwos",
    fault: "overflow",
    value: _value2
  });
  if (value >> width - BN_1$4) {
    const mask2 = (BN_1$4 << width) - BN_1$4;
    return -((~value & mask2) + BN_1$4);
  }
  return value;
}
function toTwos(_value2, _width) {
  let value = getBigInt(_value2, "value");
  const width = BigInt(getNumber(_width, "width"));
  const limit = BN_1$4 << width - BN_1$4;
  if (value < BN_0$9) {
    value = -value;
    assert$1(value <= limit, "too low", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: _value2
    });
    const mask2 = (BN_1$4 << width) - BN_1$4;
    return (~value & mask2) + BN_1$4;
  } else {
    assert$1(value < limit, "too high", "NUMERIC_FAULT", {
      operation: "toTwos",
      fault: "overflow",
      value: _value2
    });
  }
  return value;
}
function mask(_value2, _bits) {
  const value = getUint(_value2, "value");
  const bits = BigInt(getNumber(_bits, "bits"));
  return value & (BN_1$4 << bits) - BN_1$4;
}
function getBigInt(value, name) {
  switch (typeof value) {
    case "bigint":
      return value;
    case "number":
      assertArgument(Number.isInteger(value), "underflow", name || "value", value);
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return BigInt(value);
    case "string":
      try {
        if (value === "") {
          throw new Error("empty string");
        }
        if (value[0] === "-" && value[1] !== "-") {
          return -BigInt(value.substring(1));
        }
        return BigInt(value);
      } catch (e) {
        assertArgument(false, `invalid BigNumberish string: ${e.message}`, name || "value", value);
      }
  }
  assertArgument(false, "invalid BigNumberish value", name || "value", value);
}
function getUint(value, name) {
  const result = getBigInt(value, name);
  assert$1(result >= BN_0$9, "unsigned value cannot be negative", "NUMERIC_FAULT", {
    fault: "overflow",
    operation: "getUint",
    value
  });
  return result;
}
const Nibbles = "0123456789abcdef";
function toBigInt(value) {
  if (value instanceof Uint8Array) {
    let result = "0x0";
    for (const v2 of value) {
      result += Nibbles[v2 >> 4];
      result += Nibbles[v2 & 15];
    }
    return BigInt(result);
  }
  return getBigInt(value);
}
function getNumber(value, name) {
  switch (typeof value) {
    case "bigint":
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return Number(value);
    case "number":
      assertArgument(Number.isInteger(value), "underflow", name || "value", value);
      assertArgument(value >= -maxValue && value <= maxValue, "overflow", name || "value", value);
      return value;
    case "string":
      try {
        if (value === "") {
          throw new Error("empty string");
        }
        return getNumber(BigInt(value), name);
      } catch (e) {
        assertArgument(false, `invalid numeric string: ${e.message}`, name || "value", value);
      }
  }
  assertArgument(false, "invalid numeric value", name || "value", value);
}
function toNumber(value) {
  return getNumber(toBigInt(value));
}
function toBeHex(_value2, _width) {
  const value = getUint(_value2, "value");
  let result = value.toString(16);
  if (_width == null) {
    if (result.length % 2) {
      result = "0" + result;
    }
  } else {
    const width = getNumber(_width, "width");
    assert$1(width * 2 >= result.length, `value exceeds width (${width} bits)`, "NUMERIC_FAULT", {
      operation: "toBeHex",
      fault: "overflow",
      value: _value2
    });
    while (result.length < width * 2) {
      result = "0" + result;
    }
  }
  return "0x" + result;
}
function toBeArray(_value2) {
  const value = getUint(_value2, "value");
  if (value === BN_0$9) {
    return new Uint8Array([]);
  }
  let hex = value.toString(16);
  if (hex.length % 2) {
    hex = "0" + hex;
  }
  const result = new Uint8Array(hex.length / 2);
  for (let i = 0; i < result.length; i++) {
    const offset = i * 2;
    result[i] = parseInt(hex.substring(offset, offset + 2), 16);
  }
  return result;
}
function toQuantity(value) {
  let result = hexlify(isBytesLike(value) ? value : toBeArray(value)).substring(2);
  while (result.substring(0, 1) === "0") {
    result = result.substring(1);
  }
  if (result === "") {
    result = "0";
  }
  return "0x" + result;
}
const Alphabet = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
BigInt(0);
const BN_58 = BigInt(58);
function encodeBase58(_value2) {
  let value = toBigInt(getBytes(_value2));
  let result = "";
  while (value) {
    result = Alphabet[Number(value % BN_58)] + result;
    value /= BN_58;
  }
  return result;
}
function decodeBase64(textData) {
  textData = atob(textData);
  const data = new Uint8Array(textData.length);
  for (let i = 0; i < textData.length; i++) {
    data[i] = textData.charCodeAt(i);
  }
  return getBytes(data);
}
function encodeBase64(_data4) {
  const data = getBytes(_data4);
  let textData = "";
  for (let i = 0; i < data.length; i++) {
    textData += String.fromCharCode(data[i]);
  }
  return btoa(textData);
}
class EventPayload {
  constructor(emitter, listener, filter) {
    __publicField(this, "filter");
    __publicField(this, "emitter");
    __privateAdd(this, _listener, void 0);
    __privateSet(this, _listener, listener);
    defineProperties(this, { emitter, filter });
  }
  async removeListener() {
    if (__privateGet(this, _listener) == null) {
      return;
    }
    await this.emitter.off(this.filter, __privateGet(this, _listener));
  }
}
_listener = new WeakMap();
function errorFunc(reason, offset, bytes2, output2, badCodepoint) {
  assertArgument(false, `invalid codepoint at offset ${offset}; ${reason}`, "bytes", bytes2);
}
function ignoreFunc(reason, offset, bytes2, output2, badCodepoint) {
  if (reason === "BAD_PREFIX" || reason === "UNEXPECTED_CONTINUE") {
    let i = 0;
    for (let o = offset + 1; o < bytes2.length; o++) {
      if (bytes2[o] >> 6 !== 2) {
        break;
      }
      i++;
    }
    return i;
  }
  if (reason === "OVERRUN") {
    return bytes2.length - offset - 1;
  }
  return 0;
}
function replaceFunc(reason, offset, bytes2, output2, badCodepoint) {
  if (reason === "OVERLONG") {
    assertArgument(typeof badCodepoint === "number", "invalid bad code point for replacement", "badCodepoint", badCodepoint);
    output2.push(badCodepoint);
    return 0;
  }
  output2.push(65533);
  return ignoreFunc(reason, offset, bytes2);
}
const Utf8ErrorFuncs = Object.freeze({
  error: errorFunc,
  ignore: ignoreFunc,
  replace: replaceFunc
});
function getUtf8CodePoints(_bytes, onError) {
  if (onError == null) {
    onError = Utf8ErrorFuncs.error;
  }
  const bytes2 = getBytes(_bytes, "bytes");
  const result = [];
  let i = 0;
  while (i < bytes2.length) {
    const c = bytes2[i++];
    if (c >> 7 === 0) {
      result.push(c);
      continue;
    }
    let extraLength = null;
    let overlongMask = null;
    if ((c & 224) === 192) {
      extraLength = 1;
      overlongMask = 127;
    } else if ((c & 240) === 224) {
      extraLength = 2;
      overlongMask = 2047;
    } else if ((c & 248) === 240) {
      extraLength = 3;
      overlongMask = 65535;
    } else {
      if ((c & 192) === 128) {
        i += onError("UNEXPECTED_CONTINUE", i - 1, bytes2, result);
      } else {
        i += onError("BAD_PREFIX", i - 1, bytes2, result);
      }
      continue;
    }
    if (i - 1 + extraLength >= bytes2.length) {
      i += onError("OVERRUN", i - 1, bytes2, result);
      continue;
    }
    let res = c & (1 << 8 - extraLength - 1) - 1;
    for (let j = 0; j < extraLength; j++) {
      let nextChar = bytes2[i];
      if ((nextChar & 192) != 128) {
        i += onError("MISSING_CONTINUE", i, bytes2, result);
        res = null;
        break;
      }
      res = res << 6 | nextChar & 63;
      i++;
    }
    if (res === null) {
      continue;
    }
    if (res > 1114111) {
      i += onError("OUT_OF_RANGE", i - 1 - extraLength, bytes2, result, res);
      continue;
    }
    if (res >= 55296 && res <= 57343) {
      i += onError("UTF16_SURROGATE", i - 1 - extraLength, bytes2, result, res);
      continue;
    }
    if (res <= overlongMask) {
      i += onError("OVERLONG", i - 1 - extraLength, bytes2, result, res);
      continue;
    }
    result.push(res);
  }
  return result;
}
function toUtf8Bytes(str, form) {
  if (form != null) {
    assertNormalize(form);
    str = str.normalize(form);
  }
  let result = [];
  for (let i = 0; i < str.length; i++) {
    const c = str.charCodeAt(i);
    if (c < 128) {
      result.push(c);
    } else if (c < 2048) {
      result.push(c >> 6 | 192);
      result.push(c & 63 | 128);
    } else if ((c & 64512) == 55296) {
      i++;
      const c2 = str.charCodeAt(i);
      assertArgument(i < str.length && (c2 & 64512) === 56320, "invalid surrogate pair", "str", str);
      const pair = 65536 + ((c & 1023) << 10) + (c2 & 1023);
      result.push(pair >> 18 | 240);
      result.push(pair >> 12 & 63 | 128);
      result.push(pair >> 6 & 63 | 128);
      result.push(pair & 63 | 128);
    } else {
      result.push(c >> 12 | 224);
      result.push(c >> 6 & 63 | 128);
      result.push(c & 63 | 128);
    }
  }
  return new Uint8Array(result);
}
function _toUtf8String(codePoints) {
  return codePoints.map((codePoint) => {
    if (codePoint <= 65535) {
      return String.fromCharCode(codePoint);
    }
    codePoint -= 65536;
    return String.fromCharCode((codePoint >> 10 & 1023) + 55296, (codePoint & 1023) + 56320);
  }).join("");
}
function toUtf8String(bytes2, onError) {
  return _toUtf8String(getUtf8CodePoints(bytes2, onError));
}
async function getUrl(req, _signal2) {
  const protocol = req.url.split(":")[0].toLowerCase();
  assert$1(protocol === "http" || protocol === "https", `unsupported protocol ${protocol}`, "UNSUPPORTED_OPERATION", {
    info: { protocol },
    operation: "request"
  });
  assert$1(!req.credentials || req.allowInsecureAuthentication, "insecure authorized connections unsupported", "UNSUPPORTED_OPERATION", {
    operation: "request"
  });
  let signal = void 0;
  if (_signal2) {
    const controller = new AbortController();
    signal = controller.signal;
    _signal2.addListener(() => {
      controller.abort();
    });
  }
  const init = {
    method: req.method,
    headers: new Headers(Array.from(req)),
    body: req.body || void 0,
    signal
  };
  const resp = await fetch(req.url, init);
  const headers = {};
  resp.headers.forEach((value, key) => {
    headers[key.toLowerCase()] = value;
  });
  const respBody = await resp.arrayBuffer();
  const body = respBody == null ? null : new Uint8Array(respBody);
  return {
    statusCode: resp.status,
    statusMessage: resp.statusText,
    headers,
    body
  };
}
const MAX_ATTEMPTS = 12;
const SLOT_INTERVAL = 250;
let getUrlFunc = getUrl;
const reData = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i");
const reIpfs = new RegExp("^ipfs://(ipfs/)?(.*)$", "i");
let locked$2 = false;
async function dataGatewayFunc(url, signal) {
  try {
    const match = url.match(reData);
    if (!match) {
      throw new Error("invalid data");
    }
    return new FetchResponse(200, "OK", {
      "content-type": match[1] || "text/plain"
    }, match[2] ? decodeBase64(match[3]) : unpercent(match[3]));
  } catch (error) {
    return new FetchResponse(599, "BAD REQUEST (invalid data: URI)", {}, null, new FetchRequest(url));
  }
}
function getIpfsGatewayFunc(baseUrl) {
  async function gatewayIpfs(url, signal) {
    try {
      const match = url.match(reIpfs);
      if (!match) {
        throw new Error("invalid link");
      }
      return new FetchRequest(`${baseUrl}${match[2]}`);
    } catch (error) {
      return new FetchResponse(599, "BAD REQUEST (invalid IPFS URI)", {}, null, new FetchRequest(url));
    }
  }
  return gatewayIpfs;
}
const Gateways = {
  "data": dataGatewayFunc,
  "ipfs": getIpfsGatewayFunc("https://gateway.ipfs.io/ipfs/")
};
const fetchSignals = /* @__PURE__ */ new WeakMap();
class FetchCancelSignal {
  constructor(request) {
    __privateAdd(this, _listeners, void 0);
    __privateAdd(this, _cancelled, void 0);
    __privateSet(this, _listeners, []);
    __privateSet(this, _cancelled, false);
    fetchSignals.set(request, () => {
      if (__privateGet(this, _cancelled)) {
        return;
      }
      __privateSet(this, _cancelled, true);
      for (const listener of __privateGet(this, _listeners)) {
        setTimeout(() => {
          listener();
        }, 0);
      }
      __privateSet(this, _listeners, []);
    });
  }
  addListener(listener) {
    assert$1(!__privateGet(this, _cancelled), "singal already cancelled", "UNSUPPORTED_OPERATION", {
      operation: "fetchCancelSignal.addCancelListener"
    });
    __privateGet(this, _listeners).push(listener);
  }
  get cancelled() {
    return __privateGet(this, _cancelled);
  }
  checkSignal() {
    assert$1(!this.cancelled, "cancelled", "CANCELLED", {});
  }
}
_listeners = new WeakMap();
_cancelled = new WeakMap();
function checkSignal(signal) {
  if (signal == null) {
    throw new Error("missing signal; should not happen");
  }
  signal.checkSignal();
  return signal;
}
const _FetchRequest = class {
  constructor(url) {
    __privateAdd(this, _send);
    __privateAdd(this, _allowInsecure, void 0);
    __privateAdd(this, _gzip, void 0);
    __privateAdd(this, _headers, void 0);
    __privateAdd(this, _method, void 0);
    __privateAdd(this, _timeout, void 0);
    __privateAdd(this, _url, void 0);
    __privateAdd(this, _body, void 0);
    __privateAdd(this, _bodyType, void 0);
    __privateAdd(this, _creds, void 0);
    // Hooks
    __privateAdd(this, _preflight, void 0);
    __privateAdd(this, _process, void 0);
    __privateAdd(this, _retry, void 0);
    __privateAdd(this, _signal, void 0);
    __privateAdd(this, _throttle, void 0);
    __privateSet(this, _url, String(url));
    __privateSet(this, _allowInsecure, false);
    __privateSet(this, _gzip, true);
    __privateSet(this, _headers, {});
    __privateSet(this, _method, "");
    __privateSet(this, _timeout, 3e5);
    __privateSet(this, _throttle, {
      slotInterval: SLOT_INTERVAL,
      maxAttempts: MAX_ATTEMPTS
    });
  }
  get url() {
    return __privateGet(this, _url);
  }
  set url(url) {
    __privateSet(this, _url, String(url));
  }
  get body() {
    if (__privateGet(this, _body) == null) {
      return null;
    }
    return new Uint8Array(__privateGet(this, _body));
  }
  set body(body) {
    if (body == null) {
      __privateSet(this, _body, void 0);
      __privateSet(this, _bodyType, void 0);
    } else if (typeof body === "string") {
      __privateSet(this, _body, toUtf8Bytes(body));
      __privateSet(this, _bodyType, "text/plain");
    } else if (body instanceof Uint8Array) {
      __privateSet(this, _body, body);
      __privateSet(this, _bodyType, "application/octet-stream");
    } else if (typeof body === "object") {
      __privateSet(this, _body, toUtf8Bytes(JSON.stringify(body)));
      __privateSet(this, _bodyType, "application/json");
    } else {
      throw new Error("invalid body");
    }
  }
  hasBody() {
    return __privateGet(this, _body) != null;
  }
  get method() {
    if (__privateGet(this, _method)) {
      return __privateGet(this, _method);
    }
    if (this.hasBody()) {
      return "POST";
    }
    return "GET";
  }
  set method(method) {
    if (method == null) {
      method = "";
    }
    __privateSet(this, _method, String(method).toUpperCase());
  }
  get headers() {
    const headers = Object.assign({}, __privateGet(this, _headers));
    if (__privateGet(this, _creds)) {
      headers["authorization"] = `Basic ${encodeBase64(toUtf8Bytes(__privateGet(this, _creds)))}`;
    }
    if (this.allowGzip) {
      headers["accept-encoding"] = "gzip";
    }
    if (headers["content-type"] == null && __privateGet(this, _bodyType)) {
      headers["content-type"] = __privateGet(this, _bodyType);
    }
    if (this.body) {
      headers["content-length"] = String(this.body.length);
    }
    return headers;
  }
  getHeader(key) {
    return this.headers[key.toLowerCase()];
  }
  setHeader(key, value) {
    __privateGet(this, _headers)[String(key).toLowerCase()] = String(value);
  }
  clearHeaders() {
    __privateSet(this, _headers, {});
  }
  [Symbol.iterator]() {
    const headers = this.headers;
    const keys = Object.keys(headers);
    let index2 = 0;
    return {
      next: () => {
        if (index2 < keys.length) {
          const key = keys[index2++];
          return {
            value: [key, headers[key]],
            done: false
          };
        }
        return { value: void 0, done: true };
      }
    };
  }
  get credentials() {
    return __privateGet(this, _creds) || null;
  }
  setCredentials(username, password) {
    assertArgument(!username.match(/:/), "invalid basic authentication username", "username", "[REDACTED]");
    __privateSet(this, _creds, `${username}:${password}`);
  }
  get allowGzip() {
    return __privateGet(this, _gzip);
  }
  set allowGzip(value) {
    __privateSet(this, _gzip, !!value);
  }
  get allowInsecureAuthentication() {
    return !!__privateGet(this, _allowInsecure);
  }
  set allowInsecureAuthentication(value) {
    __privateSet(this, _allowInsecure, !!value);
  }
  get timeout() {
    return __privateGet(this, _timeout);
  }
  set timeout(timeout) {
    assertArgument(timeout >= 0, "timeout must be non-zero", "timeout", timeout);
    __privateSet(this, _timeout, timeout);
  }
  get preflightFunc() {
    return __privateGet(this, _preflight) || null;
  }
  set preflightFunc(preflight) {
    __privateSet(this, _preflight, preflight);
  }
  get processFunc() {
    return __privateGet(this, _process) || null;
  }
  set processFunc(process2) {
    __privateSet(this, _process, process2);
  }
  get retryFunc() {
    return __privateGet(this, _retry) || null;
  }
  set retryFunc(retry) {
    __privateSet(this, _retry, retry);
  }
  toString() {
    return `<FetchRequest method=${JSON.stringify(this.method)} url=${JSON.stringify(this.url)} headers=${JSON.stringify(this.headers)} body=${__privateGet(this, _body) ? hexlify(__privateGet(this, _body)) : "null"}>`;
  }
  setThrottleParams(params) {
    if (params.slotInterval != null) {
      __privateGet(this, _throttle).slotInterval = params.slotInterval;
    }
    if (params.maxAttempts != null) {
      __privateGet(this, _throttle).maxAttempts = params.maxAttempts;
    }
  }
  send() {
    assert$1(__privateGet(this, _signal) == null, "request already sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.send" });
    __privateSet(this, _signal, new FetchCancelSignal(this));
    return __privateMethod(this, _send, send_fn).call(this, 0, getTime$1() + this.timeout, 0, this, new FetchResponse(0, "", {}, null, this));
  }
  cancel() {
    assert$1(__privateGet(this, _signal) != null, "request has not been sent", "UNSUPPORTED_OPERATION", { operation: "fetchRequest.cancel" });
    const signal = fetchSignals.get(this);
    if (!signal) {
      throw new Error("missing signal; should not happen");
    }
    signal();
  }
  redirect(location) {
    const current = this.url.split(":")[0].toLowerCase();
    const target = location.split(":")[0].toLowerCase();
    assert$1(this.method === "GET" && (current !== "https" || target !== "http") && location.match(/^https?:/), `unsupported redirect`, "UNSUPPORTED_OPERATION", {
      operation: `redirect(${this.method} ${JSON.stringify(this.url)} => ${JSON.stringify(location)})`
    });
    const req = new _FetchRequest(location);
    req.method = "GET";
    req.allowGzip = this.allowGzip;
    req.timeout = this.timeout;
    __privateSet(req, _headers, Object.assign({}, __privateGet(this, _headers)));
    if (__privateGet(this, _body)) {
      __privateSet(req, _body, new Uint8Array(__privateGet(this, _body)));
    }
    __privateSet(req, _bodyType, __privateGet(this, _bodyType));
    return req;
  }
  clone() {
    const clone = new _FetchRequest(this.url);
    __privateSet(clone, _method, __privateGet(this, _method));
    if (__privateGet(this, _body)) {
      __privateSet(clone, _body, __privateGet(this, _body));
    }
    __privateSet(clone, _bodyType, __privateGet(this, _bodyType));
    __privateSet(clone, _headers, Object.assign({}, __privateGet(this, _headers)));
    __privateSet(clone, _creds, __privateGet(this, _creds));
    if (this.allowGzip) {
      clone.allowGzip = true;
    }
    clone.timeout = this.timeout;
    if (this.allowInsecureAuthentication) {
      clone.allowInsecureAuthentication = true;
    }
    __privateSet(clone, _preflight, __privateGet(this, _preflight));
    __privateSet(clone, _process, __privateGet(this, _process));
    __privateSet(clone, _retry, __privateGet(this, _retry));
    return clone;
  }
  static lockConfig() {
    locked$2 = true;
  }
  static getGateway(scheme) {
    return Gateways[scheme.toLowerCase()] || null;
  }
  static registerGateway(scheme, func) {
    scheme = scheme.toLowerCase();
    if (scheme === "http" || scheme === "https") {
      throw new Error(`cannot intercept ${scheme}; use registerGetUrl`);
    }
    if (locked$2) {
      throw new Error("gateways locked");
    }
    Gateways[scheme] = func;
  }
  static registerGetUrl(getUrl2) {
    if (locked$2) {
      throw new Error("gateways locked");
    }
    getUrlFunc = getUrl2;
  }
  static createDataGateway() {
    return dataGatewayFunc;
  }
  static createIpfsGatewayFunc(baseUrl) {
    return getIpfsGatewayFunc(baseUrl);
  }
};
let FetchRequest = _FetchRequest;
_allowInsecure = new WeakMap();
_gzip = new WeakMap();
_headers = new WeakMap();
_method = new WeakMap();
_timeout = new WeakMap();
_url = new WeakMap();
_body = new WeakMap();
_bodyType = new WeakMap();
_creds = new WeakMap();
_preflight = new WeakMap();
_process = new WeakMap();
_retry = new WeakMap();
_signal = new WeakMap();
_throttle = new WeakMap();
_send = new WeakSet();
send_fn = async function(attempt, expires, delay, _request3, _response) {
  var _a2, _b, _c;
  if (attempt >= __privateGet(this, _throttle).maxAttempts) {
    return _response.makeServerError("exceeded maximum retry limit");
  }
  assert$1(getTime$1() <= expires, "timeout", "TIMEOUT", {
    operation: "request.send",
    reason: "timeout",
    request: _request3
  });
  if (delay > 0) {
    await wait(delay);
  }
  let req = this.clone();
  const scheme = (req.url.split(":")[0] || "").toLowerCase();
  if (scheme in Gateways) {
    const result = await Gateways[scheme](req.url, checkSignal(__privateGet(_request3, _signal)));
    if (result instanceof FetchResponse) {
      let response2 = result;
      if (this.processFunc) {
        checkSignal(__privateGet(_request3, _signal));
        try {
          response2 = await this.processFunc(req, response2);
        } catch (error) {
          if (error.throttle == null || typeof error.stall !== "number") {
            response2.makeServerError("error in post-processing function", error).assertOk();
          }
        }
      }
      return response2;
    }
    req = result;
  }
  if (this.preflightFunc) {
    req = await this.preflightFunc(req);
  }
  const resp = await getUrlFunc(req, checkSignal(__privateGet(_request3, _signal)));
  let response = new FetchResponse(resp.statusCode, resp.statusMessage, resp.headers, resp.body, _request3);
  if (response.statusCode === 301 || response.statusCode === 302) {
    try {
      const location = response.headers.location || "";
      return __privateMethod(_a2 = req.redirect(location), _send, send_fn).call(_a2, attempt + 1, expires, 0, _request3, response);
    } catch (error) {
    }
    return response;
  } else if (response.statusCode === 429) {
    if (this.retryFunc == null || await this.retryFunc(req, response, attempt)) {
      const retryAfter = response.headers["retry-after"];
      let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
      if (typeof retryAfter === "string" && retryAfter.match(/^[1-9][0-9]*$/)) {
        delay2 = parseInt(retryAfter);
      }
      return __privateMethod(_b = req.clone(), _send, send_fn).call(_b, attempt + 1, expires, delay2, _request3, response);
    }
  }
  if (this.processFunc) {
    checkSignal(__privateGet(_request3, _signal));
    try {
      response = await this.processFunc(req, response);
    } catch (error) {
      if (error.throttle == null || typeof error.stall !== "number") {
        response.makeServerError("error in post-processing function", error).assertOk();
      }
      let delay2 = __privateGet(this, _throttle).slotInterval * Math.trunc(Math.random() * Math.pow(2, attempt));
      if (error.stall >= 0) {
        delay2 = error.stall;
      }
      return __privateMethod(_c = req.clone(), _send, send_fn).call(_c, attempt + 1, expires, delay2, _request3, response);
    }
  }
  return response;
};
const _FetchResponse = class {
  constructor(statusCode, statusMessage, headers, body, request) {
    __privateAdd(this, _statusCode, void 0);
    __privateAdd(this, _statusMessage, void 0);
    __privateAdd(this, _headers2, void 0);
    __privateAdd(this, _body2, void 0);
    __privateAdd(this, _request, void 0);
    __privateAdd(this, _error, void 0);
    __privateSet(this, _statusCode, statusCode);
    __privateSet(this, _statusMessage, statusMessage);
    __privateSet(this, _headers2, Object.keys(headers).reduce((accum, k2) => {
      accum[k2.toLowerCase()] = String(headers[k2]);
      return accum;
    }, {}));
    __privateSet(this, _body2, body == null ? null : new Uint8Array(body));
    __privateSet(this, _request, request || null);
    __privateSet(this, _error, { message: "" });
  }
  toString() {
    return `<FetchResponse status=${this.statusCode} body=${__privateGet(this, _body2) ? hexlify(__privateGet(this, _body2)) : "null"}>`;
  }
  get statusCode() {
    return __privateGet(this, _statusCode);
  }
  get statusMessage() {
    return __privateGet(this, _statusMessage);
  }
  get headers() {
    return Object.assign({}, __privateGet(this, _headers2));
  }
  get body() {
    return __privateGet(this, _body2) == null ? null : new Uint8Array(__privateGet(this, _body2));
  }
  get bodyText() {
    try {
      return __privateGet(this, _body2) == null ? "" : toUtf8String(__privateGet(this, _body2));
    } catch (error) {
      assert$1(false, "response body is not valid UTF-8 data", "UNSUPPORTED_OPERATION", {
        operation: "bodyText",
        info: { response: this }
      });
    }
  }
  get bodyJson() {
    try {
      return JSON.parse(this.bodyText);
    } catch (error) {
      assert$1(false, "response body is not valid JSON", "UNSUPPORTED_OPERATION", {
        operation: "bodyJson",
        info: { response: this }
      });
    }
  }
  [Symbol.iterator]() {
    const headers = this.headers;
    const keys = Object.keys(headers);
    let index2 = 0;
    return {
      next: () => {
        if (index2 < keys.length) {
          const key = keys[index2++];
          return {
            value: [key, headers[key]],
            done: false
          };
        }
        return { value: void 0, done: true };
      }
    };
  }
  makeServerError(message, error) {
    let statusMessage;
    if (!message) {
      message = `${this.statusCode} ${this.statusMessage}`;
      statusMessage = `CLIENT ESCALATED SERVER ERROR (${message})`;
    } else {
      statusMessage = `CLIENT ESCALATED SERVER ERROR (${this.statusCode} ${this.statusMessage}; ${message})`;
    }
    const response = new _FetchResponse(599, statusMessage, this.headers, this.body, __privateGet(this, _request) || void 0);
    __privateSet(response, _error, { message, error });
    return response;
  }
  throwThrottleError(message, stall2) {
    if (stall2 == null) {
      stall2 = -1;
    } else {
      assertArgument(Number.isInteger(stall2) && stall2 >= 0, "invalid stall timeout", "stall", stall2);
    }
    const error = new Error(message || "throttling requests");
    defineProperties(error, { stall: stall2, throttle: true });
    throw error;
  }
  getHeader(key) {
    return this.headers[key.toLowerCase()];
  }
  hasBody() {
    return __privateGet(this, _body2) != null;
  }
  get request() {
    return __privateGet(this, _request);
  }
  ok() {
    return __privateGet(this, _error).message === "" && this.statusCode >= 200 && this.statusCode < 300;
  }
  assertOk() {
    if (this.ok()) {
      return;
    }
    let { message, error } = __privateGet(this, _error);
    if (message === "") {
      message = `server response ${this.statusCode} ${this.statusMessage}`;
    }
    assert$1(false, message, "SERVER_ERROR", {
      request: this.request || "unknown request",
      response: this,
      error
    });
  }
};
let FetchResponse = _FetchResponse;
_statusCode = new WeakMap();
_statusMessage = new WeakMap();
_headers2 = new WeakMap();
_body2 = new WeakMap();
_request = new WeakMap();
_error = new WeakMap();
function getTime$1() {
  return new Date().getTime();
}
function unpercent(value) {
  return toUtf8Bytes(value.replace(/%([0-9a-f][0-9a-f])/gi, (all, code) => {
    return String.fromCharCode(parseInt(code, 16));
  }));
}
function wait(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
const BN_N1 = BigInt(-1);
const BN_0$8 = BigInt(0);
const BN_1$3 = BigInt(1);
const BN_5 = BigInt(5);
const _guard$3 = {};
let Zeros$1 = "0000";
while (Zeros$1.length < 80) {
  Zeros$1 += Zeros$1;
}
function getTens(decimals) {
  let result = Zeros$1;
  while (result.length < decimals) {
    result += result;
  }
  return BigInt("1" + result.substring(0, decimals));
}
function checkValue(val, format, safeOp) {
  const width = BigInt(format.width);
  if (format.signed) {
    const limit = BN_1$3 << width - BN_1$3;
    assert$1(safeOp == null || val >= -limit && val < limit, "overflow", "NUMERIC_FAULT", {
      operation: safeOp,
      fault: "overflow",
      value: val
    });
    if (val > BN_0$8) {
      val = fromTwos(mask(val, width), width);
    } else {
      val = -fromTwos(mask(-val, width), width);
    }
  } else {
    const limit = BN_1$3 << width;
    assert$1(safeOp == null || val >= 0 && val < limit, "overflow", "NUMERIC_FAULT", {
      operation: safeOp,
      fault: "overflow",
      value: val
    });
    val = (val % limit + limit) % limit & limit - BN_1$3;
  }
  return val;
}
function getFormat(value) {
  if (typeof value === "number") {
    value = `fixed128x${value}`;
  }
  let signed2 = true;
  let width = 128;
  let decimals = 18;
  if (typeof value === "string") {
    if (value === "fixed")
      ;
    else if (value === "ufixed") {
      signed2 = false;
    } else {
      const match = value.match(/^(u?)fixed([0-9]+)x([0-9]+)$/);
      assertArgument(match, "invalid fixed format", "format", value);
      signed2 = match[1] !== "u";
      width = parseInt(match[2]);
      decimals = parseInt(match[3]);
    }
  } else if (value) {
    const v2 = value;
    const check = (key, type, defaultValue) => {
      if (v2[key] == null) {
        return defaultValue;
      }
      assertArgument(typeof v2[key] === type, "invalid fixed format (" + key + " not " + type + ")", "format." + key, v2[key]);
      return v2[key];
    };
    signed2 = check("signed", "boolean", signed2);
    width = check("width", "number", width);
    decimals = check("decimals", "number", decimals);
  }
  assertArgument(width % 8 === 0, "invalid FixedNumber width (not byte aligned)", "format.width", width);
  assertArgument(decimals <= 80, "invalid FixedNumber decimals (too large)", "format.decimals", decimals);
  const name = (signed2 ? "" : "u") + "fixed" + String(width) + "x" + String(decimals);
  return { signed: signed2, width, decimals, name };
}
function toString(val, decimals) {
  let negative = "";
  if (val < BN_0$8) {
    negative = "-";
    val *= BN_N1;
  }
  let str = val.toString();
  if (decimals === 0) {
    return negative + str;
  }
  while (str.length <= decimals) {
    str = Zeros$1 + str;
  }
  const index2 = str.length - decimals;
  str = str.substring(0, index2) + "." + str.substring(index2);
  while (str[0] === "0" && str[1] !== ".") {
    str = str.substring(1);
  }
  while (str[str.length - 1] === "0" && str[str.length - 2] !== ".") {
    str = str.substring(0, str.length - 1);
  }
  return negative + str;
}
const _FixedNumber = class {
  // Use this when changing this file to get some typing info,
  // but then switch to any to mask the internal type
  //constructor(guard: any, value: bigint, format: _FixedFormat) {
  constructor(guard, value, format) {
    __privateAdd(this, _checkFormat);
    __privateAdd(this, _checkValue);
    __privateAdd(this, _add);
    __privateAdd(this, _sub);
    __privateAdd(this, _mul);
    __privateAdd(this, _div);
    __publicField(this, "format");
    __privateAdd(this, _format, void 0);
    // The actual value (accounting for decimals)
    __privateAdd(this, _val, void 0);
    // A base-10 value to multiple values by to maintain the magnitude
    __privateAdd(this, _tens, void 0);
    __publicField(this, "_value");
    assertPrivate(guard, _guard$3, "FixedNumber");
    __privateSet(this, _val, value);
    __privateSet(this, _format, format);
    const _value2 = toString(value, format.decimals);
    defineProperties(this, { format: format.name, _value: _value2 });
    __privateSet(this, _tens, getTens(format.decimals));
  }
  get signed() {
    return __privateGet(this, _format).signed;
  }
  get width() {
    return __privateGet(this, _format).width;
  }
  get decimals() {
    return __privateGet(this, _format).decimals;
  }
  get value() {
    return __privateGet(this, _val);
  }
  addUnsafe(other) {
    return __privateMethod(this, _add, add_fn).call(this, other);
  }
  add(other) {
    return __privateMethod(this, _add, add_fn).call(this, other, "add");
  }
  subUnsafe(other) {
    return __privateMethod(this, _sub, sub_fn).call(this, other);
  }
  sub(other) {
    return __privateMethod(this, _sub, sub_fn).call(this, other, "sub");
  }
  mulUnsafe(other) {
    return __privateMethod(this, _mul, mul_fn).call(this, other);
  }
  mul(other) {
    return __privateMethod(this, _mul, mul_fn).call(this, other, "mul");
  }
  mulSignal(other) {
    __privateMethod(this, _checkFormat, checkFormat_fn).call(this, other);
    const value = __privateGet(this, _val) * __privateGet(other, _val);
    assert$1(value % __privateGet(this, _tens) === BN_0$8, "precision lost during signalling mul", "NUMERIC_FAULT", {
      operation: "mulSignal",
      fault: "underflow",
      value: this
    });
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, value / __privateGet(this, _tens), "mulSignal");
  }
  divUnsafe(other) {
    return __privateMethod(this, _div, div_fn).call(this, other);
  }
  div(other) {
    return __privateMethod(this, _div, div_fn).call(this, other, "div");
  }
  divSignal(other) {
    assert$1(__privateGet(other, _val) !== BN_0$8, "division by zero", "NUMERIC_FAULT", {
      operation: "div",
      fault: "divide-by-zero",
      value: this
    });
    __privateMethod(this, _checkFormat, checkFormat_fn).call(this, other);
    const value = __privateGet(this, _val) * __privateGet(this, _tens);
    assert$1(value % __privateGet(other, _val) === BN_0$8, "precision lost during signalling div", "NUMERIC_FAULT", {
      operation: "divSignal",
      fault: "underflow",
      value: this
    });
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, value / __privateGet(other, _val), "divSignal");
  }
  cmp(other) {
    let a = this.value, b2 = other.value;
    const delta = this.decimals - other.decimals;
    if (delta > 0) {
      b2 *= getTens(delta);
    } else if (delta < 0) {
      a *= getTens(-delta);
    }
    if (a < b2) {
      return -1;
    }
    if (a > b2) {
      return -1;
    }
    return 0;
  }
  eq(other) {
    return this.cmp(other) === 0;
  }
  lt(other) {
    return this.cmp(other) < 0;
  }
  lte(other) {
    return this.cmp(other) <= 0;
  }
  gt(other) {
    return this.cmp(other) > 0;
  }
  gte(other) {
    return this.cmp(other) >= 0;
  }
  floor() {
    let val = __privateGet(this, _val);
    if (__privateGet(this, _val) < BN_0$8) {
      val -= __privateGet(this, _tens) - BN_1$3;
    }
    val = __privateGet(this, _val) / __privateGet(this, _tens) * __privateGet(this, _tens);
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, val, "floor");
  }
  ceiling() {
    let val = __privateGet(this, _val);
    if (__privateGet(this, _val) > BN_0$8) {
      val += __privateGet(this, _tens) - BN_1$3;
    }
    val = __privateGet(this, _val) / __privateGet(this, _tens) * __privateGet(this, _tens);
    return __privateMethod(this, _checkValue, checkValue_fn).call(this, val, "ceiling");
  }
  round(decimals) {
    if (decimals == null) {
      decimals = 0;
    }
    if (decimals >= this.decimals) {
      return this;
    }
    const delta = this.decimals - decimals;
    const bump = BN_5 * getTens(delta - 1);
    let value = this.value + bump;
    const tens = getTens(delta);
    value = value / tens * tens;
    checkValue(value, __privateGet(this, _format), "round");
    return new _FixedNumber(_guard$3, value, __privateGet(this, _format));
  }
  isZero() {
    return __privateGet(this, _val) === BN_0$8;
  }
  isNegative() {
    return __privateGet(this, _val) < BN_0$8;
  }
  toString() {
    return this._value;
  }
  toUnsafeFloat() {
    return parseFloat(this.toString());
  }
  toFormat(format) {
    return _FixedNumber.fromString(this.toString(), format);
  }
  static fromValue(_value2, decimals, _format2) {
    if (decimals == null) {
      decimals = 0;
    }
    const format = getFormat(_format2);
    let value = getBigInt(_value2, "value");
    const delta = decimals - format.decimals;
    if (delta > 0) {
      const tens = getTens(delta);
      assert$1(value % tens === BN_0$8, "value loses precision for format", "NUMERIC_FAULT", {
        operation: "fromValue",
        fault: "underflow",
        value: _value2
      });
      value /= tens;
    } else if (delta < 0) {
      value *= getTens(-delta);
    }
    checkValue(value, format, "fromValue");
    return new _FixedNumber(_guard$3, value, format);
  }
  static fromString(_value2, _format2) {
    const match = _value2.match(/^(-?)([0-9]*)\.?([0-9]*)$/);
    assertArgument(match && match[2].length + match[3].length > 0, "invalid FixedNumber string value", "value", _value2);
    const format = getFormat(_format2);
    let whole = match[2] || "0", decimal = match[3] || "";
    while (decimal.length < format.decimals) {
      decimal += Zeros$1;
    }
    assert$1(decimal.substring(format.decimals).match(/^0*$/), "too many decimals for format", "NUMERIC_FAULT", {
      operation: "fromString",
      fault: "underflow",
      value: _value2
    });
    decimal = decimal.substring(0, format.decimals);
    const value = BigInt(match[1] + whole + decimal);
    checkValue(value, format, "fromString");
    return new _FixedNumber(_guard$3, value, format);
  }
  static fromBytes(_value2, _format2) {
    let value = toBigInt(getBytes(_value2, "value"));
    const format = getFormat(_format2);
    if (format.signed) {
      value = fromTwos(value, format.width);
    }
    checkValue(value, format, "fromBytes");
    return new _FixedNumber(_guard$3, value, format);
  }
};
let FixedNumber = _FixedNumber;
_format = new WeakMap();
_val = new WeakMap();
_tens = new WeakMap();
_checkFormat = new WeakSet();
checkFormat_fn = function(other) {
  assertArgument(this.format === other.format, "incompatible format; use fixedNumber.toFormat", "other", other);
};
_checkValue = new WeakSet();
checkValue_fn = function(val, safeOp) {
  val = checkValue(val, __privateGet(this, _format), safeOp);
  return new _FixedNumber(_guard$3, val, __privateGet(this, _format));
};
_add = new WeakSet();
add_fn = function(o, safeOp) {
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) + __privateGet(o, _val), safeOp);
};
_sub = new WeakSet();
sub_fn = function(o, safeOp) {
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) - __privateGet(o, _val), safeOp);
};
_mul = new WeakSet();
mul_fn = function(o, safeOp) {
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) * __privateGet(o, _val) / __privateGet(this, _tens), safeOp);
};
_div = new WeakSet();
div_fn = function(o, safeOp) {
  assert$1(__privateGet(o, _val) !== BN_0$8, "division by zero", "NUMERIC_FAULT", {
    operation: "div",
    fault: "divide-by-zero",
    value: this
  });
  __privateMethod(this, _checkFormat, checkFormat_fn).call(this, o);
  return __privateMethod(this, _checkValue, checkValue_fn).call(this, __privateGet(this, _val) * __privateGet(this, _tens) / __privateGet(o, _val), safeOp);
};
function hexlifyByte(value) {
  let result = value.toString(16);
  while (result.length < 2) {
    result = "0" + result;
  }
  return "0x" + result;
}
function unarrayifyInteger(data, offset, length) {
  let result = 0;
  for (let i = 0; i < length; i++) {
    result = result * 256 + data[offset + i];
  }
  return result;
}
function _decodeChildren(data, offset, childOffset, length) {
  const result = [];
  while (childOffset < offset + 1 + length) {
    const decoded = _decode(data, childOffset);
    result.push(decoded.result);
    childOffset += decoded.consumed;
    assert$1(childOffset <= offset + 1 + length, "child data too short", "BUFFER_OVERRUN", {
      buffer: data,
      length,
      offset
    });
  }
  return { consumed: 1 + length, result };
}
function _decode(data, offset) {
  assert$1(data.length !== 0, "data too short", "BUFFER_OVERRUN", {
    buffer: data,
    length: 0,
    offset: 1
  });
  const checkOffset = (offset2) => {
    assert$1(offset2 <= data.length, "data short segment too short", "BUFFER_OVERRUN", {
      buffer: data,
      length: data.length,
      offset: offset2
    });
  };
  if (data[offset] >= 248) {
    const lengthLength = data[offset] - 247;
    checkOffset(offset + 1 + lengthLength);
    const length = unarrayifyInteger(data, offset + 1, lengthLength);
    checkOffset(offset + 1 + lengthLength + length);
    return _decodeChildren(data, offset, offset + 1 + lengthLength, lengthLength + length);
  } else if (data[offset] >= 192) {
    const length = data[offset] - 192;
    checkOffset(offset + 1 + length);
    return _decodeChildren(data, offset, offset + 1, length);
  } else if (data[offset] >= 184) {
    const lengthLength = data[offset] - 183;
    checkOffset(offset + 1 + lengthLength);
    const length = unarrayifyInteger(data, offset + 1, lengthLength);
    checkOffset(offset + 1 + lengthLength + length);
    const result = hexlify(data.slice(offset + 1 + lengthLength, offset + 1 + lengthLength + length));
    return { consumed: 1 + lengthLength + length, result };
  } else if (data[offset] >= 128) {
    const length = data[offset] - 128;
    checkOffset(offset + 1 + length);
    const result = hexlify(data.slice(offset + 1, offset + 1 + length));
    return { consumed: 1 + length, result };
  }
  return { consumed: 1, result: hexlifyByte(data[offset]) };
}
function decodeRlp(_data4) {
  const data = getBytes(_data4, "data");
  const decoded = _decode(data, 0);
  assertArgument(decoded.consumed === data.length, "unexpected junk after rlp payload", "data", _data4);
  return decoded.result;
}
function arrayifyInteger(value) {
  const result = [];
  while (value) {
    result.unshift(value & 255);
    value >>= 8;
  }
  return result;
}
function _encode(object2) {
  if (Array.isArray(object2)) {
    let payload = [];
    object2.forEach(function(child) {
      payload = payload.concat(_encode(child));
    });
    if (payload.length <= 55) {
      payload.unshift(192 + payload.length);
      return payload;
    }
    const length2 = arrayifyInteger(payload.length);
    length2.unshift(247 + length2.length);
    return length2.concat(payload);
  }
  const data = Array.prototype.slice.call(getBytes(object2, "object"));
  if (data.length === 1 && data[0] <= 127) {
    return data;
  } else if (data.length <= 55) {
    data.unshift(128 + data.length);
    return data;
  }
  const length = arrayifyInteger(data.length);
  length.unshift(183 + length.length);
  return length.concat(data);
}
const nibbles = "0123456789abcdef";
function encodeRlp(object2) {
  let result = "0x";
  for (const v2 of _encode(object2)) {
    result += nibbles[v2 >> 4];
    result += nibbles[v2 & 15];
  }
  return result;
}
const names = [
  "wei",
  "kwei",
  "mwei",
  "gwei",
  "szabo",
  "finney",
  "ether"
];
function formatUnits(value, unit) {
  let decimals = 18;
  if (typeof unit === "string") {
    const index2 = names.indexOf(unit);
    assertArgument(index2 >= 0, "invalid unit", "unit", unit);
    decimals = 3 * index2;
  } else if (unit != null) {
    decimals = getNumber(unit, "unit");
  }
  return FixedNumber.fromValue(value, decimals, { decimals }).toString();
}
function formatEther(wei) {
  return formatUnits(wei, 18);
}
const WordSize = 32;
const Padding = new Uint8Array(WordSize);
const passProperties$1 = ["then"];
const _guard$2 = {};
function throwError(name, error) {
  const wrapped = new Error(`deferred error during ABI decoding triggered accessing ${name}`);
  wrapped.error = error;
  throw wrapped;
}
const _Result = class extends Array {
  constructor(...args) {
    const guard = args[0];
    let items = args[1];
    let names2 = (args[2] || []).slice();
    let wrap = true;
    if (guard !== _guard$2) {
      items = args;
      names2 = [];
      wrap = false;
    }
    super(items.length);
    __privateAdd(this, _names, void 0);
    items.forEach((item, index2) => {
      this[index2] = item;
    });
    const nameCounts = names2.reduce((accum, name) => {
      if (typeof name === "string") {
        accum.set(name, (accum.get(name) || 0) + 1);
      }
      return accum;
    }, /* @__PURE__ */ new Map());
    __privateSet(this, _names, Object.freeze(items.map((item, index2) => {
      const name = names2[index2];
      if (name != null && nameCounts.get(name) === 1) {
        return name;
      }
      return null;
    })));
    if (!wrap) {
      return;
    }
    Object.freeze(this);
    return new Proxy(this, {
      get: (target, prop, receiver) => {
        if (typeof prop === "string") {
          if (prop.match(/^[0-9]+$/)) {
            const index2 = getNumber(prop, "%index");
            if (index2 < 0 || index2 >= this.length) {
              throw new RangeError("out of result range");
            }
            const item = target[index2];
            if (item instanceof Error) {
              throwError(`index ${index2}`, item);
            }
            return item;
          }
          if (passProperties$1.indexOf(prop) >= 0) {
            return Reflect.get(target, prop, receiver);
          }
          const value = target[prop];
          if (value instanceof Function) {
            return function(...args2) {
              return value.apply(this === receiver ? target : this, args2);
            };
          } else if (!(prop in target)) {
            return target.getValue.apply(this === receiver ? target : this, [prop]);
          }
        }
        return Reflect.get(target, prop, receiver);
      }
    });
  }
  toArray() {
    this.forEach((item, index2) => {
      if (item instanceof Error) {
        throwError(`index ${index2}`, item);
      }
    });
    return Array.of(this);
  }
  toObject() {
    return __privateGet(this, _names).reduce((accum, name, index2) => {
      assert$1(name != null, "value at index ${ index } unnamed", "UNSUPPORTED_OPERATION", {
        operation: "toObject()"
      });
      if (!(name in accum)) {
        accum[name] = this.getValue(name);
      }
      return accum;
    }, {});
  }
  slice(start, end) {
    if (start == null) {
      start = 0;
    }
    if (end == null) {
      end = this.length;
    }
    const result = [], names2 = [];
    for (let i = start; i < end; i++) {
      result.push(this[i]);
      names2.push(__privateGet(this, _names)[i]);
    }
    return new _Result(_guard$2, result, names2);
  }
  filter(callback, thisArg) {
    const result = [], names2 = [];
    for (let i = 0; i < this.length; i++) {
      const item = this[i];
      if (item instanceof Error) {
        throwError(`index ${i}`, item);
      }
      if (callback.call(thisArg, item, i, this)) {
        result.push(item);
        names2.push(__privateGet(this, _names)[i]);
      }
    }
    return new _Result(_guard$2, result, names2);
  }
  getValue(name) {
    const index2 = __privateGet(this, _names).indexOf(name);
    if (index2 === -1) {
      return void 0;
    }
    const value = this[index2];
    if (value instanceof Error) {
      throwError(`property ${JSON.stringify(name)}`, value.error);
    }
    return value;
  }
  static fromItems(items, keys) {
    return new _Result(_guard$2, items, keys);
  }
};
let Result = _Result;
_names = new WeakMap();
function getValue$1(value) {
  let bytes2 = toBeArray(value);
  assert$1(bytes2.length <= WordSize, "value out-of-bounds", "BUFFER_OVERRUN", { buffer: bytes2, length: WordSize, offset: bytes2.length });
  if (bytes2.length !== WordSize) {
    bytes2 = getBytesCopy(concat([Padding.slice(bytes2.length % WordSize), bytes2]));
  }
  return bytes2;
}
class Coder {
  constructor(name, type, localName, dynamic) {
    // The coder name:
    //   - address, uint256, tuple, array, etc.
    __publicField(this, "name");
    // The fully expanded type, including composite types:
    //   - address, uint256, tuple(address,bytes), uint256[3][4][],  etc.
    __publicField(this, "type");
    // The localName bound in the signature, in this example it is "baz":
    //   - tuple(address foo, uint bar) baz
    __publicField(this, "localName");
    // Whether this type is dynamic:
    //  - Dynamic: bytes, string, address[], tuple(boolean[]), etc.
    //  - Not Dynamic: address, uint256, boolean[3], tuple(address, uint8)
    __publicField(this, "dynamic");
    defineProperties(this, { name, type, localName, dynamic }, {
      name: "string",
      type: "string",
      localName: "string",
      dynamic: "boolean"
    });
  }
  _throwError(message, value) {
    assertArgument(false, message, this.localName, value);
  }
}
class Writer {
  constructor() {
    __privateAdd(this, _writeData);
    // An array of WordSize lengthed objects to concatenation
    __privateAdd(this, _data, void 0);
    __privateAdd(this, _dataLength, void 0);
    __privateSet(this, _data, []);
    __privateSet(this, _dataLength, 0);
  }
  get data() {
    return concat(__privateGet(this, _data));
  }
  get length() {
    return __privateGet(this, _dataLength);
  }
  appendWriter(writer) {
    return __privateMethod(this, _writeData, writeData_fn).call(this, getBytesCopy(writer.data));
  }
  // Arrayish item; pad on the right to *nearest* WordSize
  writeBytes(value) {
    let bytes2 = getBytesCopy(value);
    const paddingOffset = bytes2.length % WordSize;
    if (paddingOffset) {
      bytes2 = getBytesCopy(concat([bytes2, Padding.slice(paddingOffset)]));
    }
    return __privateMethod(this, _writeData, writeData_fn).call(this, bytes2);
  }
  writeValue(value) {
    return __privateMethod(this, _writeData, writeData_fn).call(this, getValue$1(value));
  }
  // Inserts a numeric place-holder, returning a callback that can
  // be used to asjust the value later
  writeUpdatableValue() {
    const offset = __privateGet(this, _data).length;
    __privateGet(this, _data).push(Padding);
    __privateSet(this, _dataLength, __privateGet(this, _dataLength) + WordSize);
    return (value) => {
      __privateGet(this, _data)[offset] = getValue$1(value);
    };
  }
}
_data = new WeakMap();
_dataLength = new WeakMap();
_writeData = new WeakSet();
writeData_fn = function(data) {
  __privateGet(this, _data).push(data);
  __privateSet(this, _dataLength, __privateGet(this, _dataLength) + data.length);
  return data.length;
};
const _Reader = class {
  constructor(data, allowLoose) {
    __privateAdd(this, _peekBytes);
    // Allows incomplete unpadded data to be read; otherwise an error
    // is raised if attempting to overrun the buffer. This is required
    // to deal with an old Solidity bug, in which event data for
    // external (not public thoguh) was tightly packed.
    __publicField(this, "allowLoose");
    __privateAdd(this, _data2, void 0);
    __privateAdd(this, _offset, void 0);
    defineProperties(this, { allowLoose: !!allowLoose });
    __privateSet(this, _data2, getBytesCopy(data));
    __privateSet(this, _offset, 0);
  }
  get data() {
    return hexlify(__privateGet(this, _data2));
  }
  get dataLength() {
    return __privateGet(this, _data2).length;
  }
  get consumed() {
    return __privateGet(this, _offset);
  }
  get bytes() {
    return new Uint8Array(__privateGet(this, _data2));
  }
  // Create a sub-reader with the same underlying data, but offset
  subReader(offset) {
    return new _Reader(__privateGet(this, _data2).slice(__privateGet(this, _offset) + offset), this.allowLoose);
  }
  // Read bytes
  readBytes(length, loose) {
    let bytes2 = __privateMethod(this, _peekBytes, peekBytes_fn).call(this, 0, length, !!loose);
    __privateSet(this, _offset, __privateGet(this, _offset) + bytes2.length);
    return bytes2.slice(0, length);
  }
  // Read a numeric values
  readValue() {
    return toBigInt(this.readBytes(WordSize));
  }
  readIndex() {
    return toNumber(this.readBytes(WordSize));
  }
};
let Reader = _Reader;
_data2 = new WeakMap();
_offset = new WeakMap();
_peekBytes = new WeakSet();
peekBytes_fn = function(offset, length, loose) {
  let alignedLength = Math.ceil(length / WordSize) * WordSize;
  if (__privateGet(this, _offset) + alignedLength > __privateGet(this, _data2).length) {
    if (this.allowLoose && loose && __privateGet(this, _offset) + length <= __privateGet(this, _data2).length) {
      alignedLength = length;
    } else {
      assert$1(false, "data out-of-bounds", "BUFFER_OVERRUN", {
        buffer: getBytesCopy(__privateGet(this, _data2)),
        length: __privateGet(this, _data2).length,
        offset: __privateGet(this, _offset) + alignedLength
      });
    }
  }
  return __privateGet(this, _data2).slice(__privateGet(this, _offset), __privateGet(this, _offset) + alignedLength);
};
function number(n2) {
  if (!Number.isSafeInteger(n2) || n2 < 0)
    throw new Error(`Wrong positive integer: ${n2}`);
}
function bool(b2) {
  if (typeof b2 !== "boolean")
    throw new Error(`Expected boolean, not ${b2}`);
}
function bytes(b2, ...lengths) {
  if (!(b2 instanceof Uint8Array))
    throw new TypeError("Expected Uint8Array");
  if (lengths.length > 0 && !lengths.includes(b2.length))
    throw new TypeError(`Expected Uint8Array of length ${lengths}, not of length=${b2.length}`);
}
function hash(hash2) {
  if (typeof hash2 !== "function" || typeof hash2.create !== "function")
    throw new Error("Hash should be wrapped by utils.wrapConstructor");
  number(hash2.outputLen);
  number(hash2.blockLen);
}
function exists(instance, checkFinished = true) {
  if (instance.destroyed)
    throw new Error("Hash instance has been destroyed");
  if (checkFinished && instance.finished)
    throw new Error("Hash#digest() has already been called");
}
function output(out, instance) {
  bytes(out);
  const min = instance.outputLen;
  if (out.length < min) {
    throw new Error(`digestInto() expects output buffer of length at least ${min}`);
  }
}
const assert = {
  number,
  bool,
  bytes,
  hash,
  exists,
  output
};
/*! noble-hashes - MIT License (c) 2022 Paul Miller (paulmillr.com) */
const u32 = (arr) => new Uint32Array(arr.buffer, arr.byteOffset, Math.floor(arr.byteLength / 4));
const createView = (arr) => new DataView(arr.buffer, arr.byteOffset, arr.byteLength);
const rotr = (word, shift) => word << 32 - shift | word >>> shift;
const isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
if (!isLE)
  throw new Error("Non little-endian hardware is not supported");
Array.from({ length: 256 }, (v2, i) => i.toString(16).padStart(2, "0"));
function utf8ToBytes(str) {
  if (typeof str !== "string") {
    throw new TypeError(`utf8ToBytes expected string, got ${typeof str}`);
  }
  return new TextEncoder().encode(str);
}
function toBytes(data) {
  if (typeof data === "string")
    data = utf8ToBytes(data);
  if (!(data instanceof Uint8Array))
    throw new TypeError(`Expected input type is Uint8Array (got ${typeof data})`);
  return data;
}
class Hash {
  // Safe version that clones internal state
  clone() {
    return this._cloneInto();
  }
}
function wrapConstructor(hashConstructor) {
  const hashC = (message) => hashConstructor().update(toBytes(message)).digest();
  const tmp = hashConstructor();
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = () => hashConstructor();
  return hashC;
}
function wrapConstructorWithOpts(hashCons) {
  const hashC = (msg, opts) => hashCons(opts).update(toBytes(msg)).digest();
  const tmp = hashCons({});
  hashC.outputLen = tmp.outputLen;
  hashC.blockLen = tmp.blockLen;
  hashC.create = (opts) => hashCons(opts);
  return hashC;
}
class HMAC extends Hash {
  constructor(hash2, _key) {
    super();
    this.finished = false;
    this.destroyed = false;
    assert.hash(hash2);
    const key = toBytes(_key);
    this.iHash = hash2.create();
    if (!(this.iHash instanceof Hash))
      throw new TypeError("Expected instance of class which extends utils.Hash");
    const blockLen = this.blockLen = this.iHash.blockLen;
    this.outputLen = this.iHash.outputLen;
    const pad = new Uint8Array(blockLen);
    pad.set(key.length > this.iHash.blockLen ? hash2.create().update(key).digest() : key);
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54;
    this.iHash.update(pad);
    this.oHash = hash2.create();
    for (let i = 0; i < pad.length; i++)
      pad[i] ^= 54 ^ 92;
    this.oHash.update(pad);
    pad.fill(0);
  }
  update(buf) {
    assert.exists(this);
    this.iHash.update(buf);
    return this;
  }
  digestInto(out) {
    assert.exists(this);
    assert.bytes(out, this.outputLen);
    this.finished = true;
    this.iHash.digestInto(out);
    this.oHash.update(out);
    this.oHash.digestInto(out);
    this.destroy();
  }
  digest() {
    const out = new Uint8Array(this.oHash.outputLen);
    this.digestInto(out);
    return out;
  }
  _cloneInto(to) {
    to || (to = Object.create(Object.getPrototypeOf(this), {}));
    const { oHash, iHash, finished, destroyed, blockLen, outputLen } = this;
    to = to;
    to.finished = finished;
    to.destroyed = destroyed;
    to.blockLen = blockLen;
    to.outputLen = outputLen;
    to.oHash = oHash._cloneInto(to.oHash);
    to.iHash = iHash._cloneInto(to.iHash);
    return to;
  }
  destroy() {
    this.destroyed = true;
    this.oHash.destroy();
    this.iHash.destroy();
  }
}
const hmac = (hash2, key, message) => new HMAC(hash2, key).update(message).digest();
hmac.create = (hash2, key) => new HMAC(hash2, key);
function setBigUint64(view, byteOffset, value, isLE2) {
  if (typeof view.setBigUint64 === "function")
    return view.setBigUint64(byteOffset, value, isLE2);
  const _32n2 = BigInt(32);
  const _u32_max = BigInt(4294967295);
  const wh2 = Number(value >> _32n2 & _u32_max);
  const wl = Number(value & _u32_max);
  const h = isLE2 ? 4 : 0;
  const l2 = isLE2 ? 0 : 4;
  view.setUint32(byteOffset + h, wh2, isLE2);
  view.setUint32(byteOffset + l2, wl, isLE2);
}
class SHA2 extends Hash {
  constructor(blockLen, outputLen, padOffset, isLE2) {
    super();
    this.blockLen = blockLen;
    this.outputLen = outputLen;
    this.padOffset = padOffset;
    this.isLE = isLE2;
    this.finished = false;
    this.length = 0;
    this.pos = 0;
    this.destroyed = false;
    this.buffer = new Uint8Array(blockLen);
    this.view = createView(this.buffer);
  }
  update(data) {
    assert.exists(this);
    const { view, buffer, blockLen } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      if (take === blockLen) {
        const dataView = createView(data);
        for (; blockLen <= len - pos; pos += blockLen)
          this.process(dataView, pos);
        continue;
      }
      buffer.set(data.subarray(pos, pos + take), this.pos);
      this.pos += take;
      pos += take;
      if (this.pos === blockLen) {
        this.process(view, 0);
        this.pos = 0;
      }
    }
    this.length += data.length;
    this.roundClean();
    return this;
  }
  digestInto(out) {
    assert.exists(this);
    assert.output(out, this);
    this.finished = true;
    const { buffer, view, blockLen, isLE: isLE2 } = this;
    let { pos } = this;
    buffer[pos++] = 128;
    this.buffer.subarray(pos).fill(0);
    if (this.padOffset > blockLen - pos) {
      this.process(view, 0);
      pos = 0;
    }
    for (let i = pos; i < blockLen; i++)
      buffer[i] = 0;
    setBigUint64(view, blockLen - 8, BigInt(this.length * 8), isLE2);
    this.process(view, 0);
    const oview = createView(out);
    this.get().forEach((v2, i) => oview.setUint32(4 * i, v2, isLE2));
  }
  digest() {
    const { buffer, outputLen } = this;
    this.digestInto(buffer);
    const res = buffer.slice(0, outputLen);
    this.destroy();
    return res;
  }
  _cloneInto(to) {
    to || (to = new this.constructor());
    to.set(...this.get());
    const { blockLen, buffer, length, finished, destroyed, pos } = this;
    to.length = length;
    to.pos = pos;
    to.finished = finished;
    to.destroyed = destroyed;
    if (length % blockLen)
      to.buffer.set(buffer);
    return to;
  }
}
const Chi = (a, b2, c) => a & b2 ^ ~a & c;
const Maj = (a, b2, c) => a & b2 ^ a & c ^ b2 & c;
const SHA256_K = new Uint32Array([
  1116352408,
  1899447441,
  3049323471,
  3921009573,
  961987163,
  1508970993,
  2453635748,
  2870763221,
  3624381080,
  310598401,
  607225278,
  1426881987,
  1925078388,
  2162078206,
  2614888103,
  3248222580,
  3835390401,
  4022224774,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  2554220882,
  2821834349,
  2952996808,
  3210313671,
  3336571891,
  3584528711,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  2177026350,
  2456956037,
  2730485921,
  2820302411,
  3259730800,
  3345764771,
  3516065817,
  3600352804,
  4094571909,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  2227730452,
  2361852424,
  2428436474,
  2756734187,
  3204031479,
  3329325298
]);
const IV = new Uint32Array([
  1779033703,
  3144134277,
  1013904242,
  2773480762,
  1359893119,
  2600822924,
  528734635,
  1541459225
]);
const SHA256_W = new Uint32Array(64);
class SHA256 extends SHA2 {
  constructor() {
    super(64, 32, 8, false);
    this.A = IV[0] | 0;
    this.B = IV[1] | 0;
    this.C = IV[2] | 0;
    this.D = IV[3] | 0;
    this.E = IV[4] | 0;
    this.F = IV[5] | 0;
    this.G = IV[6] | 0;
    this.H = IV[7] | 0;
  }
  get() {
    const { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G2, H: H2 } = this;
    return [A2, B2, C2, D2, E2, F2, G2, H2];
  }
  // prettier-ignore
  set(A2, B2, C2, D2, E2, F2, G2, H2) {
    this.A = A2 | 0;
    this.B = B2 | 0;
    this.C = C2 | 0;
    this.D = D2 | 0;
    this.E = E2 | 0;
    this.F = F2 | 0;
    this.G = G2 | 0;
    this.H = H2 | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4)
      SHA256_W[i] = view.getUint32(offset, false);
    for (let i = 16; i < 64; i++) {
      const W15 = SHA256_W[i - 15];
      const W2 = SHA256_W[i - 2];
      const s0 = rotr(W15, 7) ^ rotr(W15, 18) ^ W15 >>> 3;
      const s1 = rotr(W2, 17) ^ rotr(W2, 19) ^ W2 >>> 10;
      SHA256_W[i] = s1 + SHA256_W[i - 7] + s0 + SHA256_W[i - 16] | 0;
    }
    let { A: A2, B: B2, C: C2, D: D2, E: E2, F: F2, G: G2, H: H2 } = this;
    for (let i = 0; i < 64; i++) {
      const sigma1 = rotr(E2, 6) ^ rotr(E2, 11) ^ rotr(E2, 25);
      const T1 = H2 + sigma1 + Chi(E2, F2, G2) + SHA256_K[i] + SHA256_W[i] | 0;
      const sigma0 = rotr(A2, 2) ^ rotr(A2, 13) ^ rotr(A2, 22);
      const T2 = sigma0 + Maj(A2, B2, C2) | 0;
      H2 = G2;
      G2 = F2;
      F2 = E2;
      E2 = D2 + T1 | 0;
      D2 = C2;
      C2 = B2;
      B2 = A2;
      A2 = T1 + T2 | 0;
    }
    A2 = A2 + this.A | 0;
    B2 = B2 + this.B | 0;
    C2 = C2 + this.C | 0;
    D2 = D2 + this.D | 0;
    E2 = E2 + this.E | 0;
    F2 = F2 + this.F | 0;
    G2 = G2 + this.G | 0;
    H2 = H2 + this.H | 0;
    this.set(A2, B2, C2, D2, E2, F2, G2, H2);
  }
  roundClean() {
    SHA256_W.fill(0);
  }
  destroy() {
    this.set(0, 0, 0, 0, 0, 0, 0, 0);
    this.buffer.fill(0);
  }
}
const sha256 = wrapConstructor(() => new SHA256());
const U32_MASK64 = BigInt(2 ** 32 - 1);
const _32n = BigInt(32);
function fromBig(n2, le2 = false) {
  if (le2)
    return { h: Number(n2 & U32_MASK64), l: Number(n2 >> _32n & U32_MASK64) };
  return { h: Number(n2 >> _32n & U32_MASK64) | 0, l: Number(n2 & U32_MASK64) | 0 };
}
function split(lst, le2 = false) {
  let Ah2 = new Uint32Array(lst.length);
  let Al = new Uint32Array(lst.length);
  for (let i = 0; i < lst.length; i++) {
    const { h, l: l2 } = fromBig(lst[i], le2);
    [Ah2[i], Al[i]] = [h, l2];
  }
  return [Ah2, Al];
}
const toBig = (h, l2) => BigInt(h >>> 0) << _32n | BigInt(l2 >>> 0);
const shrSH = (h, l2, s) => h >>> s;
const shrSL = (h, l2, s) => h << 32 - s | l2 >>> s;
const rotrSH = (h, l2, s) => h >>> s | l2 << 32 - s;
const rotrSL = (h, l2, s) => h << 32 - s | l2 >>> s;
const rotrBH = (h, l2, s) => h << 64 - s | l2 >>> s - 32;
const rotrBL = (h, l2, s) => h >>> s - 32 | l2 << 64 - s;
const rotr32H = (h, l2) => l2;
const rotr32L = (h, l2) => h;
const rotlSH = (h, l2, s) => h << s | l2 >>> 32 - s;
const rotlSL = (h, l2, s) => l2 << s | h >>> 32 - s;
const rotlBH = (h, l2, s) => l2 << s - 32 | h >>> 64 - s;
const rotlBL = (h, l2, s) => h << s - 32 | l2 >>> 64 - s;
function add(Ah2, Al, Bh2, Bl) {
  const l2 = (Al >>> 0) + (Bl >>> 0);
  return { h: Ah2 + Bh2 + (l2 / 2 ** 32 | 0) | 0, l: l2 | 0 };
}
const add3L = (Al, Bl, Cl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0);
const add3H = (low, Ah2, Bh2, Ch2) => Ah2 + Bh2 + Ch2 + (low / 2 ** 32 | 0) | 0;
const add4L = (Al, Bl, Cl, Dl) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0);
const add4H = (low, Ah2, Bh2, Ch2, Dh2) => Ah2 + Bh2 + Ch2 + Dh2 + (low / 2 ** 32 | 0) | 0;
const add5L = (Al, Bl, Cl, Dl, El) => (Al >>> 0) + (Bl >>> 0) + (Cl >>> 0) + (Dl >>> 0) + (El >>> 0);
const add5H = (low, Ah2, Bh2, Ch2, Dh2, Eh2) => Ah2 + Bh2 + Ch2 + Dh2 + Eh2 + (low / 2 ** 32 | 0) | 0;
const u64 = {
  fromBig,
  split,
  toBig,
  shrSH,
  shrSL,
  rotrSH,
  rotrSL,
  rotrBH,
  rotrBL,
  rotr32H,
  rotr32L,
  rotlSH,
  rotlSL,
  rotlBH,
  rotlBL,
  add,
  add3L,
  add3H,
  add4L,
  add4H,
  add5H,
  add5L
};
const [SHA512_Kh, SHA512_Kl] = u64.split([
  "0x428a2f98d728ae22",
  "0x7137449123ef65cd",
  "0xb5c0fbcfec4d3b2f",
  "0xe9b5dba58189dbbc",
  "0x3956c25bf348b538",
  "0x59f111f1b605d019",
  "0x923f82a4af194f9b",
  "0xab1c5ed5da6d8118",
  "0xd807aa98a3030242",
  "0x12835b0145706fbe",
  "0x243185be4ee4b28c",
  "0x550c7dc3d5ffb4e2",
  "0x72be5d74f27b896f",
  "0x80deb1fe3b1696b1",
  "0x9bdc06a725c71235",
  "0xc19bf174cf692694",
  "0xe49b69c19ef14ad2",
  "0xefbe4786384f25e3",
  "0x0fc19dc68b8cd5b5",
  "0x240ca1cc77ac9c65",
  "0x2de92c6f592b0275",
  "0x4a7484aa6ea6e483",
  "0x5cb0a9dcbd41fbd4",
  "0x76f988da831153b5",
  "0x983e5152ee66dfab",
  "0xa831c66d2db43210",
  "0xb00327c898fb213f",
  "0xbf597fc7beef0ee4",
  "0xc6e00bf33da88fc2",
  "0xd5a79147930aa725",
  "0x06ca6351e003826f",
  "0x142929670a0e6e70",
  "0x27b70a8546d22ffc",
  "0x2e1b21385c26c926",
  "0x4d2c6dfc5ac42aed",
  "0x53380d139d95b3df",
  "0x650a73548baf63de",
  "0x766a0abb3c77b2a8",
  "0x81c2c92e47edaee6",
  "0x92722c851482353b",
  "0xa2bfe8a14cf10364",
  "0xa81a664bbc423001",
  "0xc24b8b70d0f89791",
  "0xc76c51a30654be30",
  "0xd192e819d6ef5218",
  "0xd69906245565a910",
  "0xf40e35855771202a",
  "0x106aa07032bbd1b8",
  "0x19a4c116b8d2d0c8",
  "0x1e376c085141ab53",
  "0x2748774cdf8eeb99",
  "0x34b0bcb5e19b48a8",
  "0x391c0cb3c5c95a63",
  "0x4ed8aa4ae3418acb",
  "0x5b9cca4f7763e373",
  "0x682e6ff3d6b2b8a3",
  "0x748f82ee5defb2fc",
  "0x78a5636f43172f60",
  "0x84c87814a1f0ab72",
  "0x8cc702081a6439ec",
  "0x90befffa23631e28",
  "0xa4506cebde82bde9",
  "0xbef9a3f7b2c67915",
  "0xc67178f2e372532b",
  "0xca273eceea26619c",
  "0xd186b8c721c0c207",
  "0xeada7dd6cde0eb1e",
  "0xf57d4f7fee6ed178",
  "0x06f067aa72176fba",
  "0x0a637dc5a2c898a6",
  "0x113f9804bef90dae",
  "0x1b710b35131c471b",
  "0x28db77f523047d84",
  "0x32caab7b40c72493",
  "0x3c9ebe0a15c9bebc",
  "0x431d67c49c100d4c",
  "0x4cc5d4becb3e42b6",
  "0x597f299cfc657e2a",
  "0x5fcb6fab3ad6faec",
  "0x6c44198c4a475817"
].map((n2) => BigInt(n2)));
const SHA512_W_H = new Uint32Array(80);
const SHA512_W_L = new Uint32Array(80);
class SHA512 extends SHA2 {
  constructor() {
    super(128, 64, 16, false);
    this.Ah = 1779033703 | 0;
    this.Al = 4089235720 | 0;
    this.Bh = 3144134277 | 0;
    this.Bl = 2227873595 | 0;
    this.Ch = 1013904242 | 0;
    this.Cl = 4271175723 | 0;
    this.Dh = 2773480762 | 0;
    this.Dl = 1595750129 | 0;
    this.Eh = 1359893119 | 0;
    this.El = 2917565137 | 0;
    this.Fh = 2600822924 | 0;
    this.Fl = 725511199 | 0;
    this.Gh = 528734635 | 0;
    this.Gl = 4215389547 | 0;
    this.Hh = 1541459225 | 0;
    this.Hl = 327033209 | 0;
  }
  // prettier-ignore
  get() {
    const { Ah: Ah2, Al, Bh: Bh2, Bl, Ch: Ch2, Cl, Dh: Dh2, Dl, Eh: Eh2, El, Fh: Fh2, Fl, Gh: Gh2, Gl, Hh: Hh2, Hl } = this;
    return [Ah2, Al, Bh2, Bl, Ch2, Cl, Dh2, Dl, Eh2, El, Fh2, Fl, Gh2, Gl, Hh2, Hl];
  }
  // prettier-ignore
  set(Ah2, Al, Bh2, Bl, Ch2, Cl, Dh2, Dl, Eh2, El, Fh2, Fl, Gh2, Gl, Hh2, Hl) {
    this.Ah = Ah2 | 0;
    this.Al = Al | 0;
    this.Bh = Bh2 | 0;
    this.Bl = Bl | 0;
    this.Ch = Ch2 | 0;
    this.Cl = Cl | 0;
    this.Dh = Dh2 | 0;
    this.Dl = Dl | 0;
    this.Eh = Eh2 | 0;
    this.El = El | 0;
    this.Fh = Fh2 | 0;
    this.Fl = Fl | 0;
    this.Gh = Gh2 | 0;
    this.Gl = Gl | 0;
    this.Hh = Hh2 | 0;
    this.Hl = Hl | 0;
  }
  process(view, offset) {
    for (let i = 0; i < 16; i++, offset += 4) {
      SHA512_W_H[i] = view.getUint32(offset);
      SHA512_W_L[i] = view.getUint32(offset += 4);
    }
    for (let i = 16; i < 80; i++) {
      const W15h = SHA512_W_H[i - 15] | 0;
      const W15l = SHA512_W_L[i - 15] | 0;
      const s0h = u64.rotrSH(W15h, W15l, 1) ^ u64.rotrSH(W15h, W15l, 8) ^ u64.shrSH(W15h, W15l, 7);
      const s0l = u64.rotrSL(W15h, W15l, 1) ^ u64.rotrSL(W15h, W15l, 8) ^ u64.shrSL(W15h, W15l, 7);
      const W2h = SHA512_W_H[i - 2] | 0;
      const W2l = SHA512_W_L[i - 2] | 0;
      const s1h = u64.rotrSH(W2h, W2l, 19) ^ u64.rotrBH(W2h, W2l, 61) ^ u64.shrSH(W2h, W2l, 6);
      const s1l = u64.rotrSL(W2h, W2l, 19) ^ u64.rotrBL(W2h, W2l, 61) ^ u64.shrSL(W2h, W2l, 6);
      const SUMl = u64.add4L(s0l, s1l, SHA512_W_L[i - 7], SHA512_W_L[i - 16]);
      const SUMh = u64.add4H(SUMl, s0h, s1h, SHA512_W_H[i - 7], SHA512_W_H[i - 16]);
      SHA512_W_H[i] = SUMh | 0;
      SHA512_W_L[i] = SUMl | 0;
    }
    let { Ah: Ah2, Al, Bh: Bh2, Bl, Ch: Ch2, Cl, Dh: Dh2, Dl, Eh: Eh2, El, Fh: Fh2, Fl, Gh: Gh2, Gl, Hh: Hh2, Hl } = this;
    for (let i = 0; i < 80; i++) {
      const sigma1h = u64.rotrSH(Eh2, El, 14) ^ u64.rotrSH(Eh2, El, 18) ^ u64.rotrBH(Eh2, El, 41);
      const sigma1l = u64.rotrSL(Eh2, El, 14) ^ u64.rotrSL(Eh2, El, 18) ^ u64.rotrBL(Eh2, El, 41);
      const CHIh = Eh2 & Fh2 ^ ~Eh2 & Gh2;
      const CHIl = El & Fl ^ ~El & Gl;
      const T1ll = u64.add5L(Hl, sigma1l, CHIl, SHA512_Kl[i], SHA512_W_L[i]);
      const T1h = u64.add5H(T1ll, Hh2, sigma1h, CHIh, SHA512_Kh[i], SHA512_W_H[i]);
      const T1l = T1ll | 0;
      const sigma0h = u64.rotrSH(Ah2, Al, 28) ^ u64.rotrBH(Ah2, Al, 34) ^ u64.rotrBH(Ah2, Al, 39);
      const sigma0l = u64.rotrSL(Ah2, Al, 28) ^ u64.rotrBL(Ah2, Al, 34) ^ u64.rotrBL(Ah2, Al, 39);
      const MAJh = Ah2 & Bh2 ^ Ah2 & Ch2 ^ Bh2 & Ch2;
      const MAJl = Al & Bl ^ Al & Cl ^ Bl & Cl;
      Hh2 = Gh2 | 0;
      Hl = Gl | 0;
      Gh2 = Fh2 | 0;
      Gl = Fl | 0;
      Fh2 = Eh2 | 0;
      Fl = El | 0;
      ({ h: Eh2, l: El } = u64.add(Dh2 | 0, Dl | 0, T1h | 0, T1l | 0));
      Dh2 = Ch2 | 0;
      Dl = Cl | 0;
      Ch2 = Bh2 | 0;
      Cl = Bl | 0;
      Bh2 = Ah2 | 0;
      Bl = Al | 0;
      const All = u64.add3L(T1l, sigma0l, MAJl);
      Ah2 = u64.add3H(All, T1h, sigma0h, MAJh);
      Al = All | 0;
    }
    ({ h: Ah2, l: Al } = u64.add(this.Ah | 0, this.Al | 0, Ah2 | 0, Al | 0));
    ({ h: Bh2, l: Bl } = u64.add(this.Bh | 0, this.Bl | 0, Bh2 | 0, Bl | 0));
    ({ h: Ch2, l: Cl } = u64.add(this.Ch | 0, this.Cl | 0, Ch2 | 0, Cl | 0));
    ({ h: Dh2, l: Dl } = u64.add(this.Dh | 0, this.Dl | 0, Dh2 | 0, Dl | 0));
    ({ h: Eh2, l: El } = u64.add(this.Eh | 0, this.El | 0, Eh2 | 0, El | 0));
    ({ h: Fh2, l: Fl } = u64.add(this.Fh | 0, this.Fl | 0, Fh2 | 0, Fl | 0));
    ({ h: Gh2, l: Gl } = u64.add(this.Gh | 0, this.Gl | 0, Gh2 | 0, Gl | 0));
    ({ h: Hh2, l: Hl } = u64.add(this.Hh | 0, this.Hl | 0, Hh2 | 0, Hl | 0));
    this.set(Ah2, Al, Bh2, Bl, Ch2, Cl, Dh2, Dl, Eh2, El, Fh2, Fl, Gh2, Gl, Hh2, Hl);
  }
  roundClean() {
    SHA512_W_H.fill(0);
    SHA512_W_L.fill(0);
  }
  destroy() {
    this.buffer.fill(0);
    this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
  }
}
class SHA512_256 extends SHA512 {
  constructor() {
    super();
    this.Ah = 573645204 | 0;
    this.Al = 4230739756 | 0;
    this.Bh = 2673172387 | 0;
    this.Bl = 3360449730 | 0;
    this.Ch = 596883563 | 0;
    this.Cl = 1867755857 | 0;
    this.Dh = 2520282905 | 0;
    this.Dl = 1497426621 | 0;
    this.Eh = 2519219938 | 0;
    this.El = 2827943907 | 0;
    this.Fh = 3193839141 | 0;
    this.Fl = 1401305490 | 0;
    this.Gh = 721525244 | 0;
    this.Gl = 746961066 | 0;
    this.Hh = 246885852 | 0;
    this.Hl = 2177182882 | 0;
    this.outputLen = 32;
  }
}
class SHA384 extends SHA512 {
  constructor() {
    super();
    this.Ah = 3418070365 | 0;
    this.Al = 3238371032 | 0;
    this.Bh = 1654270250 | 0;
    this.Bl = 914150663 | 0;
    this.Ch = 2438529370 | 0;
    this.Cl = 812702999 | 0;
    this.Dh = 355462360 | 0;
    this.Dl = 4144912697 | 0;
    this.Eh = 1731405415 | 0;
    this.El = 4290775857 | 0;
    this.Fh = 2394180231 | 0;
    this.Fl = 1750603025 | 0;
    this.Gh = 3675008525 | 0;
    this.Gl = 1694076839 | 0;
    this.Hh = 1203062813 | 0;
    this.Hl = 3204075428 | 0;
    this.outputLen = 48;
  }
}
const sha512 = wrapConstructor(() => new SHA512());
wrapConstructor(() => new SHA512_256());
wrapConstructor(() => new SHA384());
function getGlobal() {
  if (typeof self !== "undefined") {
    return self;
  }
  if (typeof window !== "undefined") {
    return window;
  }
  if (typeof global !== "undefined") {
    return global;
  }
  throw new Error("unable to locate global object");
}
const anyGlobal = getGlobal();
anyGlobal.crypto || anyGlobal.msCrypto;
function createHmac(_algo, key) {
  const algo = { sha256, sha512 }[_algo];
  assertArgument(algo != null, "invalid hmac algorithm", "algorithm", _algo);
  return hmac.create(algo, key);
}
let locked$1 = false;
const _computeHmac = function(algorithm, key, data) {
  return createHmac(algorithm, key).update(data).digest();
};
let __computeHmac = _computeHmac;
function computeHmac(algorithm, _key, _data4) {
  const key = getBytes(_key, "key");
  const data = getBytes(_data4, "data");
  return hexlify(__computeHmac(algorithm, key, data));
}
computeHmac._ = _computeHmac;
computeHmac.lock = function() {
  locked$1 = true;
};
computeHmac.register = function(func) {
  if (locked$1) {
    throw new Error("computeHmac is locked");
  }
  __computeHmac = func;
};
Object.freeze(computeHmac);
const [SHA3_PI, SHA3_ROTL, _SHA3_IOTA] = [[], [], []];
const _0n$1 = BigInt(0);
const _1n$1 = BigInt(1);
const _2n$1 = BigInt(2);
const _7n = BigInt(7);
const _256n = BigInt(256);
const _0x71n = BigInt(113);
for (let round = 0, R2 = _1n$1, x2 = 1, y2 = 0; round < 24; round++) {
  [x2, y2] = [y2, (2 * x2 + 3 * y2) % 5];
  SHA3_PI.push(2 * (5 * y2 + x2));
  SHA3_ROTL.push((round + 1) * (round + 2) / 2 % 64);
  let t2 = _0n$1;
  for (let j = 0; j < 7; j++) {
    R2 = (R2 << _1n$1 ^ (R2 >> _7n) * _0x71n) % _256n;
    if (R2 & _2n$1)
      t2 ^= _1n$1 << (_1n$1 << BigInt(j)) - _1n$1;
  }
  _SHA3_IOTA.push(t2);
}
const [SHA3_IOTA_H, SHA3_IOTA_L] = u64.split(_SHA3_IOTA, true);
const rotlH = (h, l2, s) => s > 32 ? u64.rotlBH(h, l2, s) : u64.rotlSH(h, l2, s);
const rotlL = (h, l2, s) => s > 32 ? u64.rotlBL(h, l2, s) : u64.rotlSL(h, l2, s);
function keccakP(s, rounds = 24) {
  const B2 = new Uint32Array(5 * 2);
  for (let round = 24 - rounds; round < 24; round++) {
    for (let x2 = 0; x2 < 10; x2++)
      B2[x2] = s[x2] ^ s[x2 + 10] ^ s[x2 + 20] ^ s[x2 + 30] ^ s[x2 + 40];
    for (let x2 = 0; x2 < 10; x2 += 2) {
      const idx1 = (x2 + 8) % 10;
      const idx0 = (x2 + 2) % 10;
      const B0 = B2[idx0];
      const B1 = B2[idx0 + 1];
      const Th2 = rotlH(B0, B1, 1) ^ B2[idx1];
      const Tl = rotlL(B0, B1, 1) ^ B2[idx1 + 1];
      for (let y2 = 0; y2 < 50; y2 += 10) {
        s[x2 + y2] ^= Th2;
        s[x2 + y2 + 1] ^= Tl;
      }
    }
    let curH = s[2];
    let curL = s[3];
    for (let t2 = 0; t2 < 24; t2++) {
      const shift = SHA3_ROTL[t2];
      const Th2 = rotlH(curH, curL, shift);
      const Tl = rotlL(curH, curL, shift);
      const PI = SHA3_PI[t2];
      curH = s[PI];
      curL = s[PI + 1];
      s[PI] = Th2;
      s[PI + 1] = Tl;
    }
    for (let y2 = 0; y2 < 50; y2 += 10) {
      for (let x2 = 0; x2 < 10; x2++)
        B2[x2] = s[y2 + x2];
      for (let x2 = 0; x2 < 10; x2++)
        s[y2 + x2] ^= ~B2[(x2 + 2) % 10] & B2[(x2 + 4) % 10];
    }
    s[0] ^= SHA3_IOTA_H[round];
    s[1] ^= SHA3_IOTA_L[round];
  }
  B2.fill(0);
}
class Keccak extends Hash {
  // NOTE: accept arguments in bytes instead of bits here.
  constructor(blockLen, suffix, outputLen, enableXOF = false, rounds = 24) {
    super();
    this.blockLen = blockLen;
    this.suffix = suffix;
    this.outputLen = outputLen;
    this.enableXOF = enableXOF;
    this.rounds = rounds;
    this.pos = 0;
    this.posOut = 0;
    this.finished = false;
    this.destroyed = false;
    assert.number(outputLen);
    if (0 >= this.blockLen || this.blockLen >= 200)
      throw new Error("Sha3 supports only keccak-f1600 function");
    this.state = new Uint8Array(200);
    this.state32 = u32(this.state);
  }
  keccak() {
    keccakP(this.state32, this.rounds);
    this.posOut = 0;
    this.pos = 0;
  }
  update(data) {
    assert.exists(this);
    const { blockLen, state } = this;
    data = toBytes(data);
    const len = data.length;
    for (let pos = 0; pos < len; ) {
      const take = Math.min(blockLen - this.pos, len - pos);
      for (let i = 0; i < take; i++)
        state[this.pos++] ^= data[pos++];
      if (this.pos === blockLen)
        this.keccak();
    }
    return this;
  }
  finish() {
    if (this.finished)
      return;
    this.finished = true;
    const { state, suffix, pos, blockLen } = this;
    state[pos] ^= suffix;
    if ((suffix & 128) !== 0 && pos === blockLen - 1)
      this.keccak();
    state[blockLen - 1] ^= 128;
    this.keccak();
  }
  writeInto(out) {
    assert.exists(this, false);
    assert.bytes(out);
    this.finish();
    const bufferOut = this.state;
    const { blockLen } = this;
    for (let pos = 0, len = out.length; pos < len; ) {
      if (this.posOut >= blockLen)
        this.keccak();
      const take = Math.min(blockLen - this.posOut, len - pos);
      out.set(bufferOut.subarray(this.posOut, this.posOut + take), pos);
      this.posOut += take;
      pos += take;
    }
    return out;
  }
  xofInto(out) {
    if (!this.enableXOF)
      throw new Error("XOF is not possible for this instance");
    return this.writeInto(out);
  }
  xof(bytes2) {
    assert.number(bytes2);
    return this.xofInto(new Uint8Array(bytes2));
  }
  digestInto(out) {
    assert.output(out, this);
    if (this.finished)
      throw new Error("digest() was already called");
    this.writeInto(out);
    this.destroy();
    return out;
  }
  digest() {
    return this.digestInto(new Uint8Array(this.outputLen));
  }
  destroy() {
    this.destroyed = true;
    this.state.fill(0);
  }
  _cloneInto(to) {
    const { blockLen, suffix, outputLen, rounds, enableXOF } = this;
    to || (to = new Keccak(blockLen, suffix, outputLen, enableXOF, rounds));
    to.state32.set(this.state32);
    to.pos = this.pos;
    to.posOut = this.posOut;
    to.finished = this.finished;
    to.rounds = rounds;
    to.suffix = suffix;
    to.outputLen = outputLen;
    to.enableXOF = enableXOF;
    to.destroyed = this.destroyed;
    return to;
  }
}
const gen = (suffix, blockLen, outputLen) => wrapConstructor(() => new Keccak(blockLen, suffix, outputLen));
gen(6, 144, 224 / 8);
gen(6, 136, 256 / 8);
gen(6, 104, 384 / 8);
gen(6, 72, 512 / 8);
gen(1, 144, 224 / 8);
const keccak_256 = gen(1, 136, 256 / 8);
gen(1, 104, 384 / 8);
gen(1, 72, 512 / 8);
const genShake = (suffix, blockLen, outputLen) => wrapConstructorWithOpts((opts = {}) => new Keccak(blockLen, suffix, opts.dkLen === void 0 ? outputLen : opts.dkLen, true));
genShake(31, 168, 128 / 8);
genShake(31, 136, 256 / 8);
let locked = false;
const _keccak256 = function(data) {
  return keccak_256(data);
};
let __keccak256 = _keccak256;
function keccak256(_data4) {
  const data = getBytes(_data4, "data");
  return hexlify(__keccak256(data));
}
keccak256._ = _keccak256;
keccak256.lock = function() {
  locked = true;
};
keccak256.register = function(func) {
  if (locked) {
    throw new TypeError("keccak256 is locked");
  }
  __keccak256 = func;
};
Object.freeze(keccak256);
const __viteBrowserExternal = {};
const nodeCrypto = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: __viteBrowserExternal
}, Symbol.toStringTag, { value: "Module" }));
/*! noble-secp256k1 - MIT License (c) 2019 Paul Miller (paulmillr.com) */
const _0n = BigInt(0);
const _1n = BigInt(1);
const _2n = BigInt(2);
const _3n = BigInt(3);
const _8n = BigInt(8);
const CURVE = Object.freeze({
  a: _0n,
  b: BigInt(7),
  P: BigInt("0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"),
  n: BigInt("0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"),
  h: _1n,
  Gx: BigInt("55066263022277343669578718895168534326250603453777594175500187360389116729240"),
  Gy: BigInt("32670510020758816978083085130507043184471273380659243275938904335757337482424"),
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee")
});
const divNearest = (a, b2) => (a + b2 / _2n) / b2;
const endo = {
  beta: BigInt("0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"),
  splitScalar(k2) {
    const { n: n2 } = CURVE;
    const a1 = BigInt("0x3086d221a7d46bcde86c90e49284eb15");
    const b1 = -_1n * BigInt("0xe4437ed6010e88286f547fa90abfe4c3");
    const a2 = BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8");
    const b2 = a1;
    const POW_2_128 = BigInt("0x100000000000000000000000000000000");
    const c1 = divNearest(b2 * k2, n2);
    const c2 = divNearest(-b1 * k2, n2);
    let k1 = mod(k2 - c1 * a1 - c2 * a2, n2);
    let k22 = mod(-c1 * b1 - c2 * b2, n2);
    const k1neg = k1 > POW_2_128;
    const k2neg = k22 > POW_2_128;
    if (k1neg)
      k1 = n2 - k1;
    if (k2neg)
      k22 = n2 - k22;
    if (k1 > POW_2_128 || k22 > POW_2_128) {
      throw new Error("splitScalarEndo: Endomorphism failed, k=" + k2);
    }
    return { k1neg, k1, k2neg, k2: k22 };
  }
};
const fieldLen = 32;
const groupLen = 32;
const hashLen = 32;
const compressedLen = fieldLen + 1;
const uncompressedLen = 2 * fieldLen + 1;
function weierstrass(x2) {
  const { a, b: b2 } = CURVE;
  const x22 = mod(x2 * x2);
  const x3 = mod(x22 * x2);
  return mod(x3 + a * x2 + b2);
}
const USE_ENDOMORPHISM = CURVE.a === _0n;
class ShaError extends Error {
  constructor(message) {
    super(message);
  }
}
function assertJacPoint(other) {
  if (!(other instanceof JacobianPoint))
    throw new TypeError("JacobianPoint expected");
}
class JacobianPoint {
  constructor(x2, y2, z2) {
    this.x = x2;
    this.y = y2;
    this.z = z2;
  }
  static fromAffine(p2) {
    if (!(p2 instanceof Point)) {
      throw new TypeError("JacobianPoint#fromAffine: expected Point");
    }
    if (p2.equals(Point.ZERO))
      return JacobianPoint.ZERO;
    return new JacobianPoint(p2.x, p2.y, _1n);
  }
  static toAffineBatch(points) {
    const toInv = invertBatch(points.map((p2) => p2.z));
    return points.map((p2, i) => p2.toAffine(toInv[i]));
  }
  static normalizeZ(points) {
    return JacobianPoint.toAffineBatch(points).map(JacobianPoint.fromAffine);
  }
  equals(other) {
    assertJacPoint(other);
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    const Z1Z1 = mod(Z1 * Z1);
    const Z2Z2 = mod(Z2 * Z2);
    const U1 = mod(X1 * Z2Z2);
    const U2 = mod(X2 * Z1Z1);
    const S1 = mod(mod(Y1 * Z2) * Z2Z2);
    const S2 = mod(mod(Y2 * Z1) * Z1Z1);
    return U1 === U2 && S1 === S2;
  }
  negate() {
    return new JacobianPoint(this.x, mod(-this.y), this.z);
  }
  double() {
    const { x: X1, y: Y1, z: Z1 } = this;
    const A2 = mod(X1 * X1);
    const B2 = mod(Y1 * Y1);
    const C2 = mod(B2 * B2);
    const x1b = X1 + B2;
    const D2 = mod(_2n * (mod(x1b * x1b) - A2 - C2));
    const E2 = mod(_3n * A2);
    const F2 = mod(E2 * E2);
    const X3 = mod(F2 - _2n * D2);
    const Y3 = mod(E2 * (D2 - X3) - _8n * C2);
    const Z3 = mod(_2n * Y1 * Z1);
    return new JacobianPoint(X3, Y3, Z3);
  }
  add(other) {
    assertJacPoint(other);
    const { x: X1, y: Y1, z: Z1 } = this;
    const { x: X2, y: Y2, z: Z2 } = other;
    if (X2 === _0n || Y2 === _0n)
      return this;
    if (X1 === _0n || Y1 === _0n)
      return other;
    const Z1Z1 = mod(Z1 * Z1);
    const Z2Z2 = mod(Z2 * Z2);
    const U1 = mod(X1 * Z2Z2);
    const U2 = mod(X2 * Z1Z1);
    const S1 = mod(mod(Y1 * Z2) * Z2Z2);
    const S2 = mod(mod(Y2 * Z1) * Z1Z1);
    const H2 = mod(U2 - U1);
    const r2 = mod(S2 - S1);
    if (H2 === _0n) {
      if (r2 === _0n) {
        return this.double();
      } else {
        return JacobianPoint.ZERO;
      }
    }
    const HH = mod(H2 * H2);
    const HHH = mod(H2 * HH);
    const V2 = mod(U1 * HH);
    const X3 = mod(r2 * r2 - HHH - _2n * V2);
    const Y3 = mod(r2 * (V2 - X3) - S1 * HHH);
    const Z3 = mod(Z1 * Z2 * H2);
    return new JacobianPoint(X3, Y3, Z3);
  }
  subtract(other) {
    return this.add(other.negate());
  }
  multiplyUnsafe(scalar) {
    const P0 = JacobianPoint.ZERO;
    if (typeof scalar === "bigint" && scalar === _0n)
      return P0;
    let n2 = normalizeScalar(scalar);
    if (n2 === _1n)
      return this;
    if (!USE_ENDOMORPHISM) {
      let p2 = P0;
      let d2 = this;
      while (n2 > _0n) {
        if (n2 & _1n)
          p2 = p2.add(d2);
        d2 = d2.double();
        n2 >>= _1n;
      }
      return p2;
    }
    let { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
    let k1p = P0;
    let k2p = P0;
    let d = this;
    while (k1 > _0n || k2 > _0n) {
      if (k1 & _1n)
        k1p = k1p.add(d);
      if (k2 & _1n)
        k2p = k2p.add(d);
      d = d.double();
      k1 >>= _1n;
      k2 >>= _1n;
    }
    if (k1neg)
      k1p = k1p.negate();
    if (k2neg)
      k2p = k2p.negate();
    k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
    return k1p.add(k2p);
  }
  precomputeWindow(W2) {
    const windows = USE_ENDOMORPHISM ? 128 / W2 + 1 : 256 / W2 + 1;
    const points = [];
    let p2 = this;
    let base = p2;
    for (let window2 = 0; window2 < windows; window2++) {
      base = p2;
      points.push(base);
      for (let i = 1; i < 2 ** (W2 - 1); i++) {
        base = base.add(p2);
        points.push(base);
      }
      p2 = base.double();
    }
    return points;
  }
  wNAF(n2, affinePoint) {
    if (!affinePoint && this.equals(JacobianPoint.BASE))
      affinePoint = Point.BASE;
    const W2 = affinePoint && affinePoint._WINDOW_SIZE || 1;
    if (256 % W2) {
      throw new Error("Point#wNAF: Invalid precomputation window, must be power of 2");
    }
    let precomputes = affinePoint && pointPrecomputes.get(affinePoint);
    if (!precomputes) {
      precomputes = this.precomputeWindow(W2);
      if (affinePoint && W2 !== 1) {
        precomputes = JacobianPoint.normalizeZ(precomputes);
        pointPrecomputes.set(affinePoint, precomputes);
      }
    }
    let p2 = JacobianPoint.ZERO;
    let f2 = JacobianPoint.BASE;
    const windows = 1 + (USE_ENDOMORPHISM ? 128 / W2 : 256 / W2);
    const windowSize = 2 ** (W2 - 1);
    const mask2 = BigInt(2 ** W2 - 1);
    const maxNumber = 2 ** W2;
    const shiftBy = BigInt(W2);
    for (let window2 = 0; window2 < windows; window2++) {
      const offset = window2 * windowSize;
      let wbits = Number(n2 & mask2);
      n2 >>= shiftBy;
      if (wbits > windowSize) {
        wbits -= maxNumber;
        n2 += _1n;
      }
      const offset1 = offset;
      const offset2 = offset + Math.abs(wbits) - 1;
      const cond1 = window2 % 2 !== 0;
      const cond2 = wbits < 0;
      if (wbits === 0) {
        f2 = f2.add(constTimeNegate(cond1, precomputes[offset1]));
      } else {
        p2 = p2.add(constTimeNegate(cond2, precomputes[offset2]));
      }
    }
    return { p: p2, f: f2 };
  }
  multiply(scalar, affinePoint) {
    let n2 = normalizeScalar(scalar);
    let point;
    let fake;
    if (USE_ENDOMORPHISM) {
      const { k1neg, k1, k2neg, k2 } = endo.splitScalar(n2);
      let { p: k1p, f: f1p } = this.wNAF(k1, affinePoint);
      let { p: k2p, f: f2p } = this.wNAF(k2, affinePoint);
      k1p = constTimeNegate(k1neg, k1p);
      k2p = constTimeNegate(k2neg, k2p);
      k2p = new JacobianPoint(mod(k2p.x * endo.beta), k2p.y, k2p.z);
      point = k1p.add(k2p);
      fake = f1p.add(f2p);
    } else {
      const { p: p2, f: f2 } = this.wNAF(n2, affinePoint);
      point = p2;
      fake = f2;
    }
    return JacobianPoint.normalizeZ([point, fake])[0];
  }
  toAffine(invZ) {
    const { x: x2, y: y2, z: z2 } = this;
    const is0 = this.equals(JacobianPoint.ZERO);
    if (invZ == null)
      invZ = is0 ? _8n : invert(z2);
    const iz1 = invZ;
    const iz2 = mod(iz1 * iz1);
    const iz3 = mod(iz2 * iz1);
    const ax = mod(x2 * iz2);
    const ay = mod(y2 * iz3);
    const zz = mod(z2 * iz1);
    if (is0)
      return Point.ZERO;
    if (zz !== _1n)
      throw new Error("invZ was invalid");
    return new Point(ax, ay);
  }
}
JacobianPoint.BASE = new JacobianPoint(CURVE.Gx, CURVE.Gy, _1n);
JacobianPoint.ZERO = new JacobianPoint(_0n, _1n, _0n);
function constTimeNegate(condition, item) {
  const neg = item.negate();
  return condition ? neg : item;
}
const pointPrecomputes = /* @__PURE__ */ new WeakMap();
class Point {
  constructor(x2, y2) {
    this.x = x2;
    this.y = y2;
  }
  _setWindowSize(windowSize) {
    this._WINDOW_SIZE = windowSize;
    pointPrecomputes.delete(this);
  }
  hasEvenY() {
    return this.y % _2n === _0n;
  }
  static fromCompressedHex(bytes2) {
    const isShort = bytes2.length === 32;
    const x2 = bytesToNumber(isShort ? bytes2 : bytes2.subarray(1));
    if (!isValidFieldElement(x2))
      throw new Error("Point is not on curve");
    const y2 = weierstrass(x2);
    let y3 = sqrtMod(y2);
    const isYOdd = (y3 & _1n) === _1n;
    if (isShort) {
      if (isYOdd)
        y3 = mod(-y3);
    } else {
      const isFirstByteOdd = (bytes2[0] & 1) === 1;
      if (isFirstByteOdd !== isYOdd)
        y3 = mod(-y3);
    }
    const point = new Point(x2, y3);
    point.assertValidity();
    return point;
  }
  static fromUncompressedHex(bytes2) {
    const x2 = bytesToNumber(bytes2.subarray(1, fieldLen + 1));
    const y2 = bytesToNumber(bytes2.subarray(fieldLen + 1, fieldLen * 2 + 1));
    const point = new Point(x2, y2);
    point.assertValidity();
    return point;
  }
  static fromHex(hex) {
    const bytes2 = ensureBytes(hex);
    const len = bytes2.length;
    const header = bytes2[0];
    if (len === fieldLen)
      return this.fromCompressedHex(bytes2);
    if (len === compressedLen && (header === 2 || header === 3)) {
      return this.fromCompressedHex(bytes2);
    }
    if (len === uncompressedLen && header === 4)
      return this.fromUncompressedHex(bytes2);
    throw new Error(`Point.fromHex: received invalid point. Expected 32-${compressedLen} compressed bytes or ${uncompressedLen} uncompressed bytes, not ${len}`);
  }
  static fromPrivateKey(privateKey) {
    return Point.BASE.multiply(normalizePrivateKey(privateKey));
  }
  static fromSignature(msgHash, signature, recovery) {
    const { r: r2, s } = normalizeSignature(signature);
    if (![0, 1, 2, 3].includes(recovery))
      throw new Error("Cannot recover: invalid recovery bit");
    const h = truncateHash(ensureBytes(msgHash));
    const { n: n2 } = CURVE;
    const radj = recovery === 2 || recovery === 3 ? r2 + n2 : r2;
    const rinv = invert(radj, n2);
    const u1 = mod(-h * rinv, n2);
    const u2 = mod(s * rinv, n2);
    const prefix = recovery & 1 ? "03" : "02";
    const R2 = Point.fromHex(prefix + numTo32bStr(radj));
    const Q2 = Point.BASE.multiplyAndAddUnsafe(R2, u1, u2);
    if (!Q2)
      throw new Error("Cannot recover signature: point at infinify");
    Q2.assertValidity();
    return Q2;
  }
  toRawBytes(isCompressed = false) {
    return hexToBytes(this.toHex(isCompressed));
  }
  toHex(isCompressed = false) {
    const x2 = numTo32bStr(this.x);
    if (isCompressed) {
      const prefix = this.hasEvenY() ? "02" : "03";
      return `${prefix}${x2}`;
    } else {
      return `04${x2}${numTo32bStr(this.y)}`;
    }
  }
  toHexX() {
    return this.toHex(true).slice(2);
  }
  toRawX() {
    return this.toRawBytes(true).slice(1);
  }
  assertValidity() {
    const msg = "Point is not on elliptic curve";
    const { x: x2, y: y2 } = this;
    if (!isValidFieldElement(x2) || !isValidFieldElement(y2))
      throw new Error(msg);
    const left = mod(y2 * y2);
    const right = weierstrass(x2);
    if (mod(left - right) !== _0n)
      throw new Error(msg);
  }
  equals(other) {
    return this.x === other.x && this.y === other.y;
  }
  negate() {
    return new Point(this.x, mod(-this.y));
  }
  double() {
    return JacobianPoint.fromAffine(this).double().toAffine();
  }
  add(other) {
    return JacobianPoint.fromAffine(this).add(JacobianPoint.fromAffine(other)).toAffine();
  }
  subtract(other) {
    return this.add(other.negate());
  }
  multiply(scalar) {
    return JacobianPoint.fromAffine(this).multiply(scalar, this).toAffine();
  }
  multiplyAndAddUnsafe(Q2, a, b2) {
    const P2 = JacobianPoint.fromAffine(this);
    const aP = a === _0n || a === _1n || this !== Point.BASE ? P2.multiplyUnsafe(a) : P2.multiply(a);
    const bQ = JacobianPoint.fromAffine(Q2).multiplyUnsafe(b2);
    const sum = aP.add(bQ);
    return sum.equals(JacobianPoint.ZERO) ? void 0 : sum.toAffine();
  }
}
Point.BASE = new Point(CURVE.Gx, CURVE.Gy);
Point.ZERO = new Point(_0n, _0n);
function sliceDER(s) {
  return Number.parseInt(s[0], 16) >= 8 ? "00" + s : s;
}
function parseDERInt(data) {
  if (data.length < 2 || data[0] !== 2) {
    throw new Error(`Invalid signature integer tag: ${bytesToHex(data)}`);
  }
  const len = data[1];
  const res = data.subarray(2, len + 2);
  if (!len || res.length !== len) {
    throw new Error(`Invalid signature integer: wrong length`);
  }
  if (res[0] === 0 && res[1] <= 127) {
    throw new Error("Invalid signature integer: trailing length");
  }
  return { data: bytesToNumber(res), left: data.subarray(len + 2) };
}
function parseDERSignature(data) {
  if (data.length < 2 || data[0] != 48) {
    throw new Error(`Invalid signature tag: ${bytesToHex(data)}`);
  }
  if (data[1] !== data.length - 2) {
    throw new Error("Invalid signature: incorrect length");
  }
  const { data: r2, left: sBytes } = parseDERInt(data.subarray(2));
  const { data: s, left: rBytesLeft } = parseDERInt(sBytes);
  if (rBytesLeft.length) {
    throw new Error(`Invalid signature: left bytes after parsing: ${bytesToHex(rBytesLeft)}`);
  }
  return { r: r2, s };
}
let Signature$1 = class Signature {
  constructor(r2, s) {
    this.r = r2;
    this.s = s;
    this.assertValidity();
  }
  static fromCompact(hex) {
    const arr = hex instanceof Uint8Array;
    const name = "Signature.fromCompact";
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`${name}: Expected string or Uint8Array`);
    const str = arr ? bytesToHex(hex) : hex;
    if (str.length !== 128)
      throw new Error(`${name}: Expected 64-byte hex`);
    return new Signature(hexToNumber(str.slice(0, 64)), hexToNumber(str.slice(64, 128)));
  }
  static fromDER(hex) {
    const arr = hex instanceof Uint8Array;
    if (typeof hex !== "string" && !arr)
      throw new TypeError(`Signature.fromDER: Expected string or Uint8Array`);
    const { r: r2, s } = parseDERSignature(arr ? hex : hexToBytes(hex));
    return new Signature(r2, s);
  }
  static fromHex(hex) {
    return this.fromDER(hex);
  }
  assertValidity() {
    const { r: r2, s } = this;
    if (!isWithinCurveOrder(r2))
      throw new Error("Invalid Signature: r must be 0 < r < n");
    if (!isWithinCurveOrder(s))
      throw new Error("Invalid Signature: s must be 0 < s < n");
  }
  hasHighS() {
    const HALF = CURVE.n >> _1n;
    return this.s > HALF;
  }
  normalizeS() {
    return this.hasHighS() ? new Signature(this.r, mod(-this.s, CURVE.n)) : this;
  }
  toDERRawBytes() {
    return hexToBytes(this.toDERHex());
  }
  toDERHex() {
    const sHex = sliceDER(numberToHexUnpadded(this.s));
    const rHex = sliceDER(numberToHexUnpadded(this.r));
    const sHexL = sHex.length / 2;
    const rHexL = rHex.length / 2;
    const sLen = numberToHexUnpadded(sHexL);
    const rLen = numberToHexUnpadded(rHexL);
    const length = numberToHexUnpadded(rHexL + sHexL + 4);
    return `30${length}02${rLen}${rHex}02${sLen}${sHex}`;
  }
  toRawBytes() {
    return this.toDERRawBytes();
  }
  toHex() {
    return this.toDERHex();
  }
  toCompactRawBytes() {
    return hexToBytes(this.toCompactHex());
  }
  toCompactHex() {
    return numTo32bStr(this.r) + numTo32bStr(this.s);
  }
};
function concatBytes(...arrays) {
  if (!arrays.every((b2) => b2 instanceof Uint8Array))
    throw new Error("Uint8Array list expected");
  if (arrays.length === 1)
    return arrays[0];
  const length = arrays.reduce((a, arr) => a + arr.length, 0);
  const result = new Uint8Array(length);
  for (let i = 0, pad = 0; i < arrays.length; i++) {
    const arr = arrays[i];
    result.set(arr, pad);
    pad += arr.length;
  }
  return result;
}
const hexes = Array.from({ length: 256 }, (v2, i) => i.toString(16).padStart(2, "0"));
function bytesToHex(uint8a) {
  if (!(uint8a instanceof Uint8Array))
    throw new Error("Expected Uint8Array");
  let hex = "";
  for (let i = 0; i < uint8a.length; i++) {
    hex += hexes[uint8a[i]];
  }
  return hex;
}
const POW_2_256 = BigInt("0x10000000000000000000000000000000000000000000000000000000000000000");
function numTo32bStr(num) {
  if (typeof num !== "bigint")
    throw new Error("Expected bigint");
  if (!(_0n <= num && num < POW_2_256))
    throw new Error("Expected number 0 <= n < 2^256");
  return num.toString(16).padStart(64, "0");
}
function numTo32b(num) {
  const b2 = hexToBytes(numTo32bStr(num));
  if (b2.length !== 32)
    throw new Error("Error: expected 32 bytes");
  return b2;
}
function numberToHexUnpadded(num) {
  const hex = num.toString(16);
  return hex.length & 1 ? `0${hex}` : hex;
}
function hexToNumber(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToNumber: expected string, got " + typeof hex);
  }
  return BigInt(`0x${hex}`);
}
function hexToBytes(hex) {
  if (typeof hex !== "string") {
    throw new TypeError("hexToBytes: expected string, got " + typeof hex);
  }
  if (hex.length % 2)
    throw new Error("hexToBytes: received invalid unpadded hex" + hex.length);
  const array = new Uint8Array(hex.length / 2);
  for (let i = 0; i < array.length; i++) {
    const j = i * 2;
    const hexByte = hex.slice(j, j + 2);
    const byte = Number.parseInt(hexByte, 16);
    if (Number.isNaN(byte) || byte < 0)
      throw new Error("Invalid byte sequence");
    array[i] = byte;
  }
  return array;
}
function bytesToNumber(bytes2) {
  return hexToNumber(bytesToHex(bytes2));
}
function ensureBytes(hex) {
  return hex instanceof Uint8Array ? Uint8Array.from(hex) : hexToBytes(hex);
}
function normalizeScalar(num) {
  if (typeof num === "number" && Number.isSafeInteger(num) && num > 0)
    return BigInt(num);
  if (typeof num === "bigint" && isWithinCurveOrder(num))
    return num;
  throw new TypeError("Expected valid private scalar: 0 < scalar < curve.n");
}
function mod(a, b2 = CURVE.P) {
  const result = a % b2;
  return result >= _0n ? result : b2 + result;
}
function pow2(x2, power) {
  const { P: P2 } = CURVE;
  let res = x2;
  while (power-- > _0n) {
    res *= res;
    res %= P2;
  }
  return res;
}
function sqrtMod(x2) {
  const { P: P2 } = CURVE;
  const _6n = BigInt(6);
  const _11n = BigInt(11);
  const _22n = BigInt(22);
  const _23n = BigInt(23);
  const _44n = BigInt(44);
  const _88n = BigInt(88);
  const b2 = x2 * x2 * x2 % P2;
  const b3 = b2 * b2 * x2 % P2;
  const b6 = pow2(b3, _3n) * b3 % P2;
  const b9 = pow2(b6, _3n) * b3 % P2;
  const b11 = pow2(b9, _2n) * b2 % P2;
  const b22 = pow2(b11, _11n) * b11 % P2;
  const b44 = pow2(b22, _22n) * b22 % P2;
  const b88 = pow2(b44, _44n) * b44 % P2;
  const b176 = pow2(b88, _88n) * b88 % P2;
  const b220 = pow2(b176, _44n) * b44 % P2;
  const b223 = pow2(b220, _3n) * b3 % P2;
  const t1 = pow2(b223, _23n) * b22 % P2;
  const t2 = pow2(t1, _6n) * b2 % P2;
  const rt = pow2(t2, _2n);
  const xc2 = rt * rt % P2;
  if (xc2 !== x2)
    throw new Error("Cannot find square root");
  return rt;
}
function invert(number2, modulo = CURVE.P) {
  if (number2 === _0n || modulo <= _0n) {
    throw new Error(`invert: expected positive integers, got n=${number2} mod=${modulo}`);
  }
  let a = mod(number2, modulo);
  let b2 = modulo;
  let x2 = _0n, u2 = _1n;
  while (a !== _0n) {
    const q2 = b2 / a;
    const r2 = b2 % a;
    const m2 = x2 - u2 * q2;
    b2 = a, a = r2, x2 = u2, u2 = m2;
  }
  const gcd = b2;
  if (gcd !== _1n)
    throw new Error("invert: does not exist");
  return mod(x2, modulo);
}
function invertBatch(nums, p2 = CURVE.P) {
  const scratch = new Array(nums.length);
  const lastMultiplied = nums.reduce((acc, num, i) => {
    if (num === _0n)
      return acc;
    scratch[i] = acc;
    return mod(acc * num, p2);
  }, _1n);
  const inverted = invert(lastMultiplied, p2);
  nums.reduceRight((acc, num, i) => {
    if (num === _0n)
      return acc;
    scratch[i] = mod(acc * scratch[i], p2);
    return mod(acc * num, p2);
  }, inverted);
  return scratch;
}
function bits2int_2(bytes2) {
  const delta = bytes2.length * 8 - groupLen * 8;
  const num = bytesToNumber(bytes2);
  return delta > 0 ? num >> BigInt(delta) : num;
}
function truncateHash(hash2, truncateOnly = false) {
  const h = bits2int_2(hash2);
  if (truncateOnly)
    return h;
  const { n: n2 } = CURVE;
  return h >= n2 ? h - n2 : h;
}
let _sha256Sync;
let _hmacSha256Sync;
class HmacDrbg {
  constructor(hashLen2, qByteLen) {
    this.hashLen = hashLen2;
    this.qByteLen = qByteLen;
    if (typeof hashLen2 !== "number" || hashLen2 < 2)
      throw new Error("hashLen must be a number");
    if (typeof qByteLen !== "number" || qByteLen < 2)
      throw new Error("qByteLen must be a number");
    this.v = new Uint8Array(hashLen2).fill(1);
    this.k = new Uint8Array(hashLen2).fill(0);
    this.counter = 0;
  }
  hmac(...values) {
    return utils.hmacSha256(this.k, ...values);
  }
  hmacSync(...values) {
    return _hmacSha256Sync(this.k, ...values);
  }
  checkSync() {
    if (typeof _hmacSha256Sync !== "function")
      throw new ShaError("hmacSha256Sync needs to be set");
  }
  incr() {
    if (this.counter >= 1e3)
      throw new Error("Tried 1,000 k values for sign(), all were invalid");
    this.counter += 1;
  }
  async reseed(seed = new Uint8Array()) {
    this.k = await this.hmac(this.v, Uint8Array.from([0]), seed);
    this.v = await this.hmac(this.v);
    if (seed.length === 0)
      return;
    this.k = await this.hmac(this.v, Uint8Array.from([1]), seed);
    this.v = await this.hmac(this.v);
  }
  reseedSync(seed = new Uint8Array()) {
    this.checkSync();
    this.k = this.hmacSync(this.v, Uint8Array.from([0]), seed);
    this.v = this.hmacSync(this.v);
    if (seed.length === 0)
      return;
    this.k = this.hmacSync(this.v, Uint8Array.from([1]), seed);
    this.v = this.hmacSync(this.v);
  }
  async generate() {
    this.incr();
    let len = 0;
    const out = [];
    while (len < this.qByteLen) {
      this.v = await this.hmac(this.v);
      const sl2 = this.v.slice();
      out.push(sl2);
      len += this.v.length;
    }
    return concatBytes(...out);
  }
  generateSync() {
    this.checkSync();
    this.incr();
    let len = 0;
    const out = [];
    while (len < this.qByteLen) {
      this.v = this.hmacSync(this.v);
      const sl2 = this.v.slice();
      out.push(sl2);
      len += this.v.length;
    }
    return concatBytes(...out);
  }
}
function isWithinCurveOrder(num) {
  return _0n < num && num < CURVE.n;
}
function isValidFieldElement(num) {
  return _0n < num && num < CURVE.P;
}
function kmdToSig(kBytes, m2, d, lowS = true) {
  const { n: n2 } = CURVE;
  const k2 = truncateHash(kBytes, true);
  if (!isWithinCurveOrder(k2))
    return;
  const kinv = invert(k2, n2);
  const q2 = Point.BASE.multiply(k2);
  const r2 = mod(q2.x, n2);
  if (r2 === _0n)
    return;
  const s = mod(kinv * mod(m2 + d * r2, n2), n2);
  if (s === _0n)
    return;
  let sig = new Signature$1(r2, s);
  let recovery = (q2.x === sig.r ? 0 : 2) | Number(q2.y & _1n);
  if (lowS && sig.hasHighS()) {
    sig = sig.normalizeS();
    recovery ^= 1;
  }
  return { sig, recovery };
}
function normalizePrivateKey(key) {
  let num;
  if (typeof key === "bigint") {
    num = key;
  } else if (typeof key === "number" && Number.isSafeInteger(key) && key > 0) {
    num = BigInt(key);
  } else if (typeof key === "string") {
    if (key.length !== 2 * groupLen)
      throw new Error("Expected 32 bytes of private key");
    num = hexToNumber(key);
  } else if (key instanceof Uint8Array) {
    if (key.length !== groupLen)
      throw new Error("Expected 32 bytes of private key");
    num = bytesToNumber(key);
  } else {
    throw new TypeError("Expected valid private key");
  }
  if (!isWithinCurveOrder(num))
    throw new Error("Expected private key: 0 < key < n");
  return num;
}
function normalizePublicKey(publicKey) {
  if (publicKey instanceof Point) {
    publicKey.assertValidity();
    return publicKey;
  } else {
    return Point.fromHex(publicKey);
  }
}
function normalizeSignature(signature) {
  if (signature instanceof Signature$1) {
    signature.assertValidity();
    return signature;
  }
  try {
    return Signature$1.fromDER(signature);
  } catch (error) {
    return Signature$1.fromCompact(signature);
  }
}
function getPublicKey(privateKey, isCompressed = false) {
  return Point.fromPrivateKey(privateKey).toRawBytes(isCompressed);
}
function recoverPublicKey(msgHash, signature, recovery, isCompressed = false) {
  return Point.fromSignature(msgHash, signature, recovery).toRawBytes(isCompressed);
}
function isProbPub(item) {
  const arr = item instanceof Uint8Array;
  const str = typeof item === "string";
  const len = (arr || str) && item.length;
  if (arr)
    return len === compressedLen || len === uncompressedLen;
  if (str)
    return len === compressedLen * 2 || len === uncompressedLen * 2;
  if (item instanceof Point)
    return true;
  return false;
}
function getSharedSecret(privateA, publicB, isCompressed = false) {
  if (isProbPub(privateA))
    throw new TypeError("getSharedSecret: first arg must be private key");
  if (!isProbPub(publicB))
    throw new TypeError("getSharedSecret: second arg must be public key");
  const b2 = normalizePublicKey(publicB);
  b2.assertValidity();
  return b2.multiply(normalizePrivateKey(privateA)).toRawBytes(isCompressed);
}
function bits2int(bytes2) {
  const slice = bytes2.length > fieldLen ? bytes2.slice(0, fieldLen) : bytes2;
  return bytesToNumber(slice);
}
function bits2octets(bytes2) {
  const z1 = bits2int(bytes2);
  const z2 = mod(z1, CURVE.n);
  return int2octets(z2 < _0n ? z1 : z2);
}
function int2octets(num) {
  return numTo32b(num);
}
function initSigArgs(msgHash, privateKey, extraEntropy) {
  if (msgHash == null)
    throw new Error(`sign: expected valid message hash, not "${msgHash}"`);
  const h1 = ensureBytes(msgHash);
  const d = normalizePrivateKey(privateKey);
  const seedArgs = [int2octets(d), bits2octets(h1)];
  if (extraEntropy != null) {
    if (extraEntropy === true)
      extraEntropy = utils.randomBytes(fieldLen);
    const e = ensureBytes(extraEntropy);
    if (e.length !== fieldLen)
      throw new Error(`sign: Expected ${fieldLen} bytes of extra data`);
    seedArgs.push(e);
  }
  const seed = concatBytes(...seedArgs);
  const m2 = bits2int(h1);
  return { seed, m: m2, d };
}
function finalizeSig(recSig, opts) {
  const { sig, recovery } = recSig;
  const { der, recovered } = Object.assign({ canonical: true, der: true }, opts);
  const hashed = der ? sig.toDERRawBytes() : sig.toCompactRawBytes();
  return recovered ? [hashed, recovery] : hashed;
}
function signSync(msgHash, privKey, opts = {}) {
  const { seed, m: m2, d } = initSigArgs(msgHash, privKey, opts.extraEntropy);
  const drbg = new HmacDrbg(hashLen, groupLen);
  drbg.reseedSync(seed);
  let sig;
  while (!(sig = kmdToSig(drbg.generateSync(), m2, d, opts.canonical)))
    drbg.reseedSync();
  return finalizeSig(sig, opts);
}
Point.BASE._setWindowSize(8);
const crypto = {
  node: nodeCrypto,
  web: typeof self === "object" && "crypto" in self ? self.crypto : void 0
};
const TAGGED_HASH_PREFIXES = {};
const utils = {
  bytesToHex,
  hexToBytes,
  concatBytes,
  mod,
  invert,
  isValidPrivateKey(privateKey) {
    try {
      normalizePrivateKey(privateKey);
      return true;
    } catch (error) {
      return false;
    }
  },
  _bigintTo32Bytes: numTo32b,
  _normalizePrivateKey: normalizePrivateKey,
  hashToPrivateKey: (hash2) => {
    hash2 = ensureBytes(hash2);
    const minLen = groupLen + 8;
    if (hash2.length < minLen || hash2.length > 1024) {
      throw new Error(`Expected valid bytes of private key as per FIPS 186`);
    }
    const num = mod(bytesToNumber(hash2), CURVE.n - _1n) + _1n;
    return numTo32b(num);
  },
  randomBytes: (bytesLength = 32) => {
    if (crypto.web) {
      return crypto.web.getRandomValues(new Uint8Array(bytesLength));
    } else if (crypto.node) {
      const { randomBytes } = crypto.node;
      return Uint8Array.from(randomBytes(bytesLength));
    } else {
      throw new Error("The environment doesn't have randomBytes function");
    }
  },
  randomPrivateKey: () => utils.hashToPrivateKey(utils.randomBytes(groupLen + 8)),
  precompute(windowSize = 8, point = Point.BASE) {
    const cached = point === Point.BASE ? point : new Point(point.x, point.y);
    cached._setWindowSize(windowSize);
    cached.multiply(_3n);
    return cached;
  },
  sha256: async (...messages) => {
    if (crypto.web) {
      const buffer = await crypto.web.subtle.digest("SHA-256", concatBytes(...messages));
      return new Uint8Array(buffer);
    } else if (crypto.node) {
      const { createHash } = crypto.node;
      const hash2 = createHash("sha256");
      messages.forEach((m2) => hash2.update(m2));
      return Uint8Array.from(hash2.digest());
    } else {
      throw new Error("The environment doesn't have sha256 function");
    }
  },
  hmacSha256: async (key, ...messages) => {
    if (crypto.web) {
      const ckey = await crypto.web.subtle.importKey("raw", key, { name: "HMAC", hash: { name: "SHA-256" } }, false, ["sign"]);
      const message = concatBytes(...messages);
      const buffer = await crypto.web.subtle.sign("HMAC", ckey, message);
      return new Uint8Array(buffer);
    } else if (crypto.node) {
      const { createHmac: createHmac2 } = crypto.node;
      const hash2 = createHmac2("sha256", key);
      messages.forEach((m2) => hash2.update(m2));
      return Uint8Array.from(hash2.digest());
    } else {
      throw new Error("The environment doesn't have hmac-sha256 function");
    }
  },
  sha256Sync: void 0,
  hmacSha256Sync: void 0,
  taggedHash: async (tag, ...messages) => {
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === void 0) {
      const tagH = await utils.sha256(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
      tagP = concatBytes(tagH, tagH);
      TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return utils.sha256(tagP, ...messages);
  },
  taggedHashSync: (tag, ...messages) => {
    if (typeof _sha256Sync !== "function")
      throw new ShaError("sha256Sync is undefined, you need to set it");
    let tagP = TAGGED_HASH_PREFIXES[tag];
    if (tagP === void 0) {
      const tagH = _sha256Sync(Uint8Array.from(tag, (c) => c.charCodeAt(0)));
      tagP = concatBytes(tagH, tagH);
      TAGGED_HASH_PREFIXES[tag] = tagP;
    }
    return _sha256Sync(tagP, ...messages);
  },
  _JacobianPoint: JacobianPoint
};
Object.defineProperties(utils, {
  sha256Sync: {
    configurable: false,
    get() {
      return _sha256Sync;
    },
    set(val) {
      if (!_sha256Sync)
        _sha256Sync = val;
    }
  },
  hmacSha256Sync: {
    configurable: false,
    get() {
      return _hmacSha256Sync;
    },
    set(val) {
      if (!_hmacSha256Sync)
        _hmacSha256Sync = val;
    }
  }
});
const ZeroAddress = "0x0000000000000000000000000000000000000000";
const ZeroHash = "0x0000000000000000000000000000000000000000000000000000000000000000";
const BN_0$7 = BigInt(0);
const BN_1$2 = BigInt(1);
const BN_2$2 = BigInt(2);
const BN_27$1 = BigInt(27);
const BN_28$1 = BigInt(28);
const BN_35$1 = BigInt(35);
const _guard$1 = {};
function toUint256(value) {
  return zeroPadValue(toBeArray(value), 32);
}
const _Signature = class {
  constructor(guard, r2, s, v2) {
    __privateAdd(this, _r, void 0);
    __privateAdd(this, _s, void 0);
    __privateAdd(this, _v, void 0);
    __privateAdd(this, _networkV, void 0);
    assertPrivate(guard, _guard$1, "Signature");
    __privateSet(this, _r, r2);
    __privateSet(this, _s, s);
    __privateSet(this, _v, v2);
    __privateSet(this, _networkV, null);
  }
  get r() {
    return __privateGet(this, _r);
  }
  set r(value) {
    assertArgument(dataLength(value) === 32, "invalid r", "value", value);
    __privateSet(this, _r, hexlify(value));
  }
  get s() {
    return __privateGet(this, _s);
  }
  set s(_value2) {
    assertArgument(dataLength(_value2) === 32, "invalid r", "value", _value2);
    const value = hexlify(_value2);
    assertArgument(parseInt(value.substring(0, 3)) < 8, "non-canonical s", "value", value);
    __privateSet(this, _s, value);
  }
  get v() {
    return __privateGet(this, _v);
  }
  set v(value) {
    const v2 = getNumber(value, "value");
    assertArgument(v2 === 27 || v2 === 28, "invalid v", "v", value);
    __privateSet(this, _v, v2);
  }
  get networkV() {
    return __privateGet(this, _networkV);
  }
  get legacyChainId() {
    const v2 = this.networkV;
    if (v2 == null) {
      return null;
    }
    return _Signature.getChainId(v2);
  }
  get yParity() {
    return this.v === 27 ? 0 : 1;
  }
  get yParityAndS() {
    const yParityAndS = getBytes(this.s);
    if (this.yParity) {
      yParityAndS[0] |= 128;
    }
    return hexlify(yParityAndS);
  }
  get compactSerialized() {
    return concat([this.r, this.yParityAndS]);
  }
  get serialized() {
    return concat([this.r, this.s, this.yParity ? "0x1c" : "0x1b"]);
  }
  [Symbol.for("nodejs.util.inspect.custom")]() {
    return `Signature { r: "${this.r}", s: "${this.s}", yParity: ${this.yParity}, networkV: ${this.networkV} }`;
  }
  clone() {
    const clone = new _Signature(_guard$1, this.r, this.s, this.v);
    if (this.networkV) {
      __privateSet(clone, _networkV, this.networkV);
    }
    return clone;
  }
  toJSON() {
    const networkV = this.networkV;
    return {
      _type: "signature",
      networkV: networkV != null ? networkV.toString() : null,
      r: this.r,
      s: this.s,
      v: this.v
    };
  }
  static getChainId(v2) {
    const bv = getBigInt(v2, "v");
    if (bv == BN_27$1 || bv == BN_28$1) {
      return BN_0$7;
    }
    assertArgument(bv >= BN_35$1, "invalid EIP-155 v", "v", v2);
    return (bv - BN_35$1) / BN_2$2;
  }
  static getChainIdV(chainId, v2) {
    return getBigInt(chainId) * BN_2$2 + BigInt(35 + v2 - 27);
  }
  static getNormalizedV(v2) {
    const bv = getBigInt(v2);
    if (bv === BN_0$7 || bv === BN_27$1) {
      return 27;
    }
    if (bv === BN_1$2 || bv === BN_28$1) {
      return 28;
    }
    assertArgument(bv >= BN_35$1, "invalid v", "v", v2);
    return bv & BN_1$2 ? 27 : 28;
  }
  static from(sig) {
    function assertError(check, message) {
      assertArgument(check, message, "signature", sig);
    }
    if (sig == null) {
      return new _Signature(_guard$1, ZeroHash, ZeroHash, 27);
    }
    if (typeof sig === "string") {
      const bytes2 = getBytes(sig, "signature");
      if (bytes2.length === 64) {
        const r3 = hexlify(bytes2.slice(0, 32));
        const s2 = bytes2.slice(32, 64);
        const v3 = s2[0] & 128 ? 28 : 27;
        s2[0] &= 127;
        return new _Signature(_guard$1, r3, hexlify(s2), v3);
      }
      if (bytes2.length === 65) {
        const r3 = hexlify(bytes2.slice(0, 32));
        const s2 = bytes2.slice(32, 64);
        assertError((s2[0] & 128) === 0, "non-canonical s");
        const v3 = _Signature.getNormalizedV(bytes2[64]);
        return new _Signature(_guard$1, r3, hexlify(s2), v3);
      }
      assertError(false, "invlaid raw signature length");
    }
    if (sig instanceof _Signature) {
      return sig.clone();
    }
    const _r2 = sig.r;
    assertError(_r2 != null, "missing r");
    const r2 = toUint256(_r2);
    const s = function(s2, yParityAndS) {
      if (s2 != null) {
        return toUint256(s2);
      }
      if (yParityAndS != null) {
        assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
        const bytes2 = getBytes(yParityAndS);
        bytes2[0] &= 127;
        return hexlify(bytes2);
      }
      assertError(false, "missing s");
    }(sig.s, sig.yParityAndS);
    assertError((getBytes(s)[0] & 128) == 0, "non-canonical s");
    const { networkV, v: v2 } = function(_v2, yParityAndS, yParity) {
      if (_v2 != null) {
        const v3 = getBigInt(_v2);
        return {
          networkV: v3 >= BN_35$1 ? v3 : void 0,
          v: _Signature.getNormalizedV(v3)
        };
      }
      if (yParityAndS != null) {
        assertError(isHexString(yParityAndS, 32), "invalid yParityAndS");
        return { v: getBytes(yParityAndS)[0] & 128 ? 28 : 27 };
      }
      if (yParity != null) {
        switch (yParity) {
          case 0:
            return { v: 27 };
          case 1:
            return { v: 28 };
        }
        assertError(false, "invalid yParity");
      }
      assertError(false, "missing v");
    }(sig.v, sig.yParityAndS, sig.yParity);
    const result = new _Signature(_guard$1, r2, s, v2);
    if (networkV) {
      __privateSet(result, _networkV, networkV);
    }
    assertError(!("yParity" in sig && sig.yParity !== result.yParity), "yParity mismatch");
    assertError(!("yParityAndS" in sig && sig.yParityAndS !== result.yParityAndS), "yParityAndS mismatch");
    return result;
  }
};
let Signature2 = _Signature;
_r = new WeakMap();
_s = new WeakMap();
_v = new WeakMap();
_networkV = new WeakMap();
utils.hmacSha256Sync = function(key, ...messages) {
  return getBytes(computeHmac("sha256", key, concat(messages)));
};
const _SigningKey = class {
  constructor(privateKey) {
    __privateAdd(this, _privateKey, void 0);
    assertArgument(dataLength(privateKey) === 32, "invalid private key", "privateKey", "[REDACTED]");
    __privateSet(this, _privateKey, hexlify(privateKey));
  }
  get privateKey() {
    return __privateGet(this, _privateKey);
  }
  get publicKey() {
    return _SigningKey.computePublicKey(__privateGet(this, _privateKey));
  }
  get compressedPublicKey() {
    return _SigningKey.computePublicKey(__privateGet(this, _privateKey), true);
  }
  sign(digest) {
    assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
    const [sigDer, recid] = signSync(getBytesCopy(digest), getBytesCopy(__privateGet(this, _privateKey)), {
      recovered: true,
      canonical: true
    });
    const sig = Signature$1.fromHex(sigDer);
    return Signature2.from({
      r: toBeHex("0x" + sig.r.toString(16), 32),
      s: toBeHex("0x" + sig.s.toString(16), 32),
      v: recid ? 28 : 27
    });
  }
  computeSharedSecret(other) {
    const pubKey = _SigningKey.computePublicKey(other);
    console.log(pubKey);
    return hexlify(getSharedSecret(getBytesCopy(__privateGet(this, _privateKey)), getBytes(pubKey)));
  }
  static computePublicKey(key, compressed) {
    let bytes2 = getBytes(key, "key");
    if (bytes2.length === 32) {
      const pubKey = getPublicKey(bytes2, !!compressed);
      return hexlify(pubKey);
    }
    if (bytes2.length === 64) {
      const pub = new Uint8Array(65);
      pub[0] = 4;
      pub.set(bytes2, 1);
      bytes2 = pub;
    }
    const point = Point.fromHex(bytes2);
    return hexlify(point.toRawBytes(compressed));
  }
  static recoverPublicKey(digest, signature) {
    assertArgument(dataLength(digest) === 32, "invalid digest length", "digest", digest);
    const sig = Signature2.from(signature);
    const der = Signature$1.fromCompact(getBytesCopy(concat([sig.r, sig.s]))).toDERRawBytes();
    const pubKey = recoverPublicKey(getBytesCopy(digest), der, sig.yParity);
    if (pubKey != null) {
      return hexlify(pubKey);
    }
    assertArgument(false, "invalid signautre for digest", "signature", signature);
  }
  static addPoints(p0, p1, compressed) {
    const pub0 = Point.fromHex(_SigningKey.computePublicKey(p0).substring(2));
    const pub1 = Point.fromHex(_SigningKey.computePublicKey(p1).substring(2));
    return "0x" + pub0.add(pub1).toHex(!!compressed);
  }
};
let SigningKey = _SigningKey;
_privateKey = new WeakMap();
const BN_0$6 = BigInt(0);
const BN_36 = BigInt(36);
function getChecksumAddress(address) {
  address = address.toLowerCase();
  const chars = address.substring(2).split("");
  const expanded = new Uint8Array(40);
  for (let i = 0; i < 40; i++) {
    expanded[i] = chars[i].charCodeAt(0);
  }
  const hashed = getBytes(keccak256(expanded));
  for (let i = 0; i < 40; i += 2) {
    if (hashed[i >> 1] >> 4 >= 8) {
      chars[i] = chars[i].toUpperCase();
    }
    if ((hashed[i >> 1] & 15) >= 8) {
      chars[i + 1] = chars[i + 1].toUpperCase();
    }
  }
  return "0x" + chars.join("");
}
const ibanLookup = {};
for (let i = 0; i < 10; i++) {
  ibanLookup[String(i)] = String(i);
}
for (let i = 0; i < 26; i++) {
  ibanLookup[String.fromCharCode(65 + i)] = String(10 + i);
}
const safeDigits = 15;
function ibanChecksum(address) {
  address = address.toUpperCase();
  address = address.substring(4) + address.substring(0, 2) + "00";
  let expanded = address.split("").map((c) => {
    return ibanLookup[c];
  }).join("");
  while (expanded.length >= safeDigits) {
    let block = expanded.substring(0, safeDigits);
    expanded = parseInt(block, 10) % 97 + expanded.substring(block.length);
  }
  let checksum = String(98 - parseInt(expanded, 10) % 97);
  while (checksum.length < 2) {
    checksum = "0" + checksum;
  }
  return checksum;
}
const Base36 = function() {
  const result = {};
  for (let i = 0; i < 36; i++) {
    const key = "0123456789abcdefghijklmnopqrstuvwxyz"[i];
    result[key] = BigInt(i);
  }
  return result;
}();
function fromBase36(value) {
  value = value.toLowerCase();
  let result = BN_0$6;
  for (let i = 0; i < value.length; i++) {
    result = result * BN_36 + Base36[value[i]];
  }
  return result;
}
function getAddress(address) {
  assertArgument(typeof address === "string", "invalid address", "address", address);
  if (address.match(/^(0x)?[0-9a-fA-F]{40}$/)) {
    if (address.substring(0, 2) !== "0x") {
      address = "0x" + address;
    }
    const result = getChecksumAddress(address);
    assertArgument(!address.match(/([A-F].*[a-f])|([a-f].*[A-F])/) || result === address, "bad address checksum", "address", address);
    return result;
  }
  if (address.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    assertArgument(address.substring(2, 4) === ibanChecksum(address), "bad icap checksum", "address", address);
    let result = fromBase36(address.substring(4)).toString(16);
    while (result.length < 40) {
      result = "0" + result;
    }
    return getChecksumAddress("0x" + result);
  }
  assertArgument(false, "invalid address", "address", address);
}
function getCreateAddress(tx) {
  const from = getAddress(tx.from);
  const nonce = getBigInt(tx.nonce, "tx.nonce");
  let nonceHex = nonce.toString(16);
  if (nonceHex === "0") {
    nonceHex = "0x";
  } else if (nonceHex.length % 2) {
    nonceHex = "0x0" + nonceHex;
  } else {
    nonceHex = "0x" + nonceHex;
  }
  return getAddress(dataSlice(keccak256(encodeRlp([from, nonceHex])), 12));
}
function isAddressable(value) {
  return value && typeof value.getAddress === "function";
}
function isAddress(value) {
  try {
    getAddress(value);
    return true;
  } catch (error) {
  }
  return false;
}
async function checkAddress(target, promise) {
  const result = await promise;
  if (result == null || result === "0x0000000000000000000000000000000000000000") {
    assert$1(typeof target !== "string", "unconfigured name", "UNCONFIGURED_NAME", { value: target });
    assertArgument(false, "invalid AddressLike value; did not resolve to a value address", "target", target);
  }
  return getAddress(result);
}
function resolveAddress(target, resolver) {
  if (typeof target === "string") {
    if (target.match(/^0x[0-9a-f]{40}$/i)) {
      return getAddress(target);
    }
    assert$1(resolver != null, "ENS resolution requires a provider", "UNSUPPORTED_OPERATION", { operation: "resolveName" });
    return checkAddress(target, resolver.resolveName(target));
  } else if (isAddressable(target)) {
    return checkAddress(target, target.getAddress());
  } else if (target && typeof target.then === "function") {
    return checkAddress(target, target);
  }
  assertArgument(false, "unsupported addressable value", "target", target);
}
const _gaurd = {};
function n(value, width) {
  let signed2 = false;
  if (width < 0) {
    signed2 = true;
    width *= -1;
  }
  return new Typed(_gaurd, `${signed2 ? "" : "u"}int${width}`, value, { signed: signed2, width });
}
function b(value, size) {
  return new Typed(_gaurd, `bytes${size ? size : ""}`, value, { size });
}
const _typedSymbol = Symbol.for("_ethers_typed");
const _Typed = class {
  constructor(gaurd, type, value, options) {
    __publicField(this, "type");
    __publicField(this, "value");
    __privateAdd(this, _options, void 0);
    __publicField(this, "_typedSymbol");
    if (options == null) {
      options = null;
    }
    assertPrivate(_gaurd, gaurd, "Typed");
    defineProperties(this, { _typedSymbol, type, value });
    __privateSet(this, _options, options);
    this.format();
  }
  format() {
    if (this.type === "array") {
      throw new Error("");
    } else if (this.type === "dynamicArray") {
      throw new Error("");
    } else if (this.type === "tuple") {
      return `tuple(${this.value.map((v2) => v2.format()).join(",")})`;
    }
    return this.type;
  }
  defaultValue() {
    return 0;
  }
  minValue() {
    return 0;
  }
  maxValue() {
    return 0;
  }
  isBigInt() {
    return !!this.type.match(/^u?int[0-9]+$/);
  }
  isData() {
    return this.type.substring(0, 5) === "bytes";
  }
  isString() {
    return this.type === "string";
  }
  get tupleName() {
    if (this.type !== "tuple") {
      throw TypeError("not a tuple");
    }
    return __privateGet(this, _options);
  }
  // Returns the length of this type as an array
  // - `null` indicates the length is unforced, it could be dynamic
  // - `-1` indicates the length is dynamic
  // - any other value indicates it is a static array and is its length
  get arrayLength() {
    if (this.type !== "array") {
      throw TypeError("not an array");
    }
    if (__privateGet(this, _options) === true) {
      return -1;
    }
    if (__privateGet(this, _options) === false) {
      return this.value.length;
    }
    return null;
  }
  static from(type, value) {
    return new _Typed(_gaurd, type, value);
  }
  static uint8(v2) {
    return n(v2, 8);
  }
  static uint16(v2) {
    return n(v2, 16);
  }
  static uint24(v2) {
    return n(v2, 24);
  }
  static uint32(v2) {
    return n(v2, 32);
  }
  static uint40(v2) {
    return n(v2, 40);
  }
  static uint48(v2) {
    return n(v2, 48);
  }
  static uint56(v2) {
    return n(v2, 56);
  }
  static uint64(v2) {
    return n(v2, 64);
  }
  static uint72(v2) {
    return n(v2, 72);
  }
  static uint80(v2) {
    return n(v2, 80);
  }
  static uint88(v2) {
    return n(v2, 88);
  }
  static uint96(v2) {
    return n(v2, 96);
  }
  static uint104(v2) {
    return n(v2, 104);
  }
  static uint112(v2) {
    return n(v2, 112);
  }
  static uint120(v2) {
    return n(v2, 120);
  }
  static uint128(v2) {
    return n(v2, 128);
  }
  static uint136(v2) {
    return n(v2, 136);
  }
  static uint144(v2) {
    return n(v2, 144);
  }
  static uint152(v2) {
    return n(v2, 152);
  }
  static uint160(v2) {
    return n(v2, 160);
  }
  static uint168(v2) {
    return n(v2, 168);
  }
  static uint176(v2) {
    return n(v2, 176);
  }
  static uint184(v2) {
    return n(v2, 184);
  }
  static uint192(v2) {
    return n(v2, 192);
  }
  static uint200(v2) {
    return n(v2, 200);
  }
  static uint208(v2) {
    return n(v2, 208);
  }
  static uint216(v2) {
    return n(v2, 216);
  }
  static uint224(v2) {
    return n(v2, 224);
  }
  static uint232(v2) {
    return n(v2, 232);
  }
  static uint240(v2) {
    return n(v2, 240);
  }
  static uint248(v2) {
    return n(v2, 248);
  }
  static uint256(v2) {
    return n(v2, 256);
  }
  static uint(v2) {
    return n(v2, 256);
  }
  static int8(v2) {
    return n(v2, -8);
  }
  static int16(v2) {
    return n(v2, -16);
  }
  static int24(v2) {
    return n(v2, -24);
  }
  static int32(v2) {
    return n(v2, -32);
  }
  static int40(v2) {
    return n(v2, -40);
  }
  static int48(v2) {
    return n(v2, -48);
  }
  static int56(v2) {
    return n(v2, -56);
  }
  static int64(v2) {
    return n(v2, -64);
  }
  static int72(v2) {
    return n(v2, -72);
  }
  static int80(v2) {
    return n(v2, -80);
  }
  static int88(v2) {
    return n(v2, -88);
  }
  static int96(v2) {
    return n(v2, -96);
  }
  static int104(v2) {
    return n(v2, -104);
  }
  static int112(v2) {
    return n(v2, -112);
  }
  static int120(v2) {
    return n(v2, -120);
  }
  static int128(v2) {
    return n(v2, -128);
  }
  static int136(v2) {
    return n(v2, -136);
  }
  static int144(v2) {
    return n(v2, -144);
  }
  static int152(v2) {
    return n(v2, -152);
  }
  static int160(v2) {
    return n(v2, -160);
  }
  static int168(v2) {
    return n(v2, -168);
  }
  static int176(v2) {
    return n(v2, -176);
  }
  static int184(v2) {
    return n(v2, -184);
  }
  static int192(v2) {
    return n(v2, -192);
  }
  static int200(v2) {
    return n(v2, -200);
  }
  static int208(v2) {
    return n(v2, -208);
  }
  static int216(v2) {
    return n(v2, -216);
  }
  static int224(v2) {
    return n(v2, -224);
  }
  static int232(v2) {
    return n(v2, -232);
  }
  static int240(v2) {
    return n(v2, -240);
  }
  static int248(v2) {
    return n(v2, -248);
  }
  static int256(v2) {
    return n(v2, -256);
  }
  static int(v2) {
    return n(v2, -256);
  }
  static bytes1(v2) {
    return b(v2, 1);
  }
  static bytes2(v2) {
    return b(v2, 2);
  }
  static bytes3(v2) {
    return b(v2, 3);
  }
  static bytes4(v2) {
    return b(v2, 4);
  }
  static bytes5(v2) {
    return b(v2, 5);
  }
  static bytes6(v2) {
    return b(v2, 6);
  }
  static bytes7(v2) {
    return b(v2, 7);
  }
  static bytes8(v2) {
    return b(v2, 8);
  }
  static bytes9(v2) {
    return b(v2, 9);
  }
  static bytes10(v2) {
    return b(v2, 10);
  }
  static bytes11(v2) {
    return b(v2, 11);
  }
  static bytes12(v2) {
    return b(v2, 12);
  }
  static bytes13(v2) {
    return b(v2, 13);
  }
  static bytes14(v2) {
    return b(v2, 14);
  }
  static bytes15(v2) {
    return b(v2, 15);
  }
  static bytes16(v2) {
    return b(v2, 16);
  }
  static bytes17(v2) {
    return b(v2, 17);
  }
  static bytes18(v2) {
    return b(v2, 18);
  }
  static bytes19(v2) {
    return b(v2, 19);
  }
  static bytes20(v2) {
    return b(v2, 20);
  }
  static bytes21(v2) {
    return b(v2, 21);
  }
  static bytes22(v2) {
    return b(v2, 22);
  }
  static bytes23(v2) {
    return b(v2, 23);
  }
  static bytes24(v2) {
    return b(v2, 24);
  }
  static bytes25(v2) {
    return b(v2, 25);
  }
  static bytes26(v2) {
    return b(v2, 26);
  }
  static bytes27(v2) {
    return b(v2, 27);
  }
  static bytes28(v2) {
    return b(v2, 28);
  }
  static bytes29(v2) {
    return b(v2, 29);
  }
  static bytes30(v2) {
    return b(v2, 30);
  }
  static bytes31(v2) {
    return b(v2, 31);
  }
  static bytes32(v2) {
    return b(v2, 32);
  }
  static address(v2) {
    return new _Typed(_gaurd, "address", v2);
  }
  static bool(v2) {
    return new _Typed(_gaurd, "bool", !!v2);
  }
  static bytes(v2) {
    return new _Typed(_gaurd, "bytes", v2);
  }
  static string(v2) {
    return new _Typed(_gaurd, "string", v2);
  }
  static array(v2, dynamic) {
    throw new Error("not implemented yet");
  }
  static tuple(v2, name) {
    throw new Error("not implemented yet");
  }
  static overrides(v2) {
    return new _Typed(_gaurd, "overrides", Object.assign({}, v2));
  }
  static isTyped(value) {
    return value && value._typedSymbol === _typedSymbol;
  }
  static dereference(value, type) {
    if (_Typed.isTyped(value)) {
      if (value.type !== type) {
        throw new Error(`invalid type: expecetd ${type}, got ${value.type}`);
      }
      return value.value;
    }
    return value;
  }
};
let Typed = _Typed;
_options = new WeakMap();
class AddressCoder extends Coder {
  constructor(localName) {
    super("address", "address", localName, false);
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000";
  }
  encode(writer, _value2) {
    let value = Typed.dereference(_value2, "string");
    try {
      value = getAddress(value);
    } catch (error) {
      return this._throwError(error.message, _value2);
    }
    return writer.writeValue(value);
  }
  decode(reader) {
    return getAddress(toBeHex(reader.readValue(), 20));
  }
}
class AnonymousCoder extends Coder {
  constructor(coder) {
    super(coder.name, coder.type, "_", coder.dynamic);
    __publicField(this, "coder");
    this.coder = coder;
  }
  defaultValue() {
    return this.coder.defaultValue();
  }
  encode(writer, value) {
    return this.coder.encode(writer, value);
  }
  decode(reader) {
    return this.coder.decode(reader);
  }
}
function pack(writer, coders, values) {
  let arrayValues = [];
  if (Array.isArray(values)) {
    arrayValues = values;
  } else if (values && typeof values === "object") {
    let unique = {};
    arrayValues = coders.map((coder) => {
      const name = coder.localName;
      assert$1(name, "cannot encode object for signature with missing names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
      assert$1(unique[name], "cannot encode object for signature with duplicate names", "INVALID_ARGUMENT", { argument: "values", info: { coder }, value: values });
      unique[name] = true;
      return values[name];
    });
  } else {
    assertArgument(false, "invalid tuple value", "tuple", values);
  }
  assertArgument(coders.length === arrayValues.length, "types/value length mismatch", "tuple", values);
  let staticWriter = new Writer();
  let dynamicWriter = new Writer();
  let updateFuncs = [];
  coders.forEach((coder, index2) => {
    let value = arrayValues[index2];
    if (coder.dynamic) {
      let dynamicOffset = dynamicWriter.length;
      coder.encode(dynamicWriter, value);
      let updateFunc = staticWriter.writeUpdatableValue();
      updateFuncs.push((baseOffset) => {
        updateFunc(baseOffset + dynamicOffset);
      });
    } else {
      coder.encode(staticWriter, value);
    }
  });
  updateFuncs.forEach((func) => {
    func(staticWriter.length);
  });
  let length = writer.appendWriter(staticWriter);
  length += writer.appendWriter(dynamicWriter);
  return length;
}
function unpack(reader, coders) {
  let values = [];
  let keys = [];
  let baseReader = reader.subReader(0);
  coders.forEach((coder) => {
    let value = null;
    if (coder.dynamic) {
      let offset = reader.readIndex();
      let offsetReader = baseReader.subReader(offset);
      try {
        value = coder.decode(offsetReader);
      } catch (error) {
        if (isError(error, "BUFFER_OVERRUN")) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    } else {
      try {
        value = coder.decode(reader);
      } catch (error) {
        if (isError(error, "BUFFER_OVERRUN")) {
          throw error;
        }
        value = error;
        value.baseType = coder.name;
        value.name = coder.localName;
        value.type = coder.type;
      }
    }
    if (value == void 0) {
      throw new Error("investigate");
    }
    values.push(value);
    keys.push(coder.localName || null);
  });
  return Result.fromItems(values, keys);
}
class ArrayCoder extends Coder {
  constructor(coder, length, localName) {
    const type = coder.type + "[" + (length >= 0 ? length : "") + "]";
    const dynamic = length === -1 || coder.dynamic;
    super("array", type, localName, dynamic);
    __publicField(this, "coder");
    __publicField(this, "length");
    defineProperties(this, { coder, length });
  }
  defaultValue() {
    const defaultChild = this.coder.defaultValue();
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(defaultChild);
    }
    return result;
  }
  encode(writer, _value2) {
    const value = Typed.dereference(_value2, "array");
    if (!Array.isArray(value)) {
      this._throwError("expected array value", value);
    }
    let count = this.length;
    if (count === -1) {
      count = value.length;
      writer.writeValue(value.length);
    }
    assertArgumentCount(value.length, count, "coder array" + (this.localName ? " " + this.localName : ""));
    let coders = [];
    for (let i = 0; i < value.length; i++) {
      coders.push(this.coder);
    }
    return pack(writer, coders, value);
  }
  decode(reader) {
    let count = this.length;
    if (count === -1) {
      count = reader.readIndex();
      assert$1(count * WordSize <= reader.dataLength, "insufficient data length", "BUFFER_OVERRUN", { buffer: reader.bytes, offset: count * WordSize, length: reader.dataLength });
    }
    let coders = [];
    for (let i = 0; i < count; i++) {
      coders.push(new AnonymousCoder(this.coder));
    }
    return unpack(reader, coders);
  }
}
class BooleanCoder extends Coder {
  constructor(localName) {
    super("bool", "bool", localName, false);
  }
  defaultValue() {
    return false;
  }
  encode(writer, _value2) {
    const value = Typed.dereference(_value2, "bool");
    return writer.writeValue(value ? 1 : 0);
  }
  decode(reader) {
    return !!reader.readValue();
  }
}
class DynamicBytesCoder extends Coder {
  constructor(type, localName) {
    super(type, type, localName, true);
  }
  defaultValue() {
    return "0x";
  }
  encode(writer, value) {
    value = getBytesCopy(value);
    let length = writer.writeValue(value.length);
    length += writer.writeBytes(value);
    return length;
  }
  decode(reader) {
    return reader.readBytes(reader.readIndex(), true);
  }
}
class BytesCoder extends DynamicBytesCoder {
  constructor(localName) {
    super("bytes", localName);
  }
  decode(reader) {
    return hexlify(super.decode(reader));
  }
}
class FixedBytesCoder extends Coder {
  constructor(size, localName) {
    let name = "bytes" + String(size);
    super(name, name, localName, false);
    __publicField(this, "size");
    defineProperties(this, { size }, { size: "number" });
  }
  defaultValue() {
    return "0x0000000000000000000000000000000000000000000000000000000000000000".substring(0, 2 + this.size * 2);
  }
  encode(writer, _value2) {
    let data = getBytesCopy(Typed.dereference(_value2, this.type));
    if (data.length !== this.size) {
      this._throwError("incorrect data length", _value2);
    }
    return writer.writeBytes(data);
  }
  decode(reader) {
    return hexlify(reader.readBytes(this.size));
  }
}
const Empty = new Uint8Array([]);
class NullCoder extends Coder {
  constructor(localName) {
    super("null", "", localName, false);
  }
  defaultValue() {
    return null;
  }
  encode(writer, value) {
    if (value != null) {
      this._throwError("not null", value);
    }
    return writer.writeBytes(Empty);
  }
  decode(reader) {
    reader.readBytes(0);
    return null;
  }
}
const BN_0$5 = BigInt(0);
const BN_1$1 = BigInt(1);
const BN_MAX_UINT256$1 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
class NumberCoder extends Coder {
  constructor(size, signed2, localName) {
    const name = (signed2 ? "int" : "uint") + size * 8;
    super(name, name, localName, false);
    __publicField(this, "size");
    __publicField(this, "signed");
    defineProperties(this, { size, signed: signed2 }, { size: "number", signed: "boolean" });
  }
  defaultValue() {
    return 0;
  }
  encode(writer, _value2) {
    let value = getBigInt(Typed.dereference(_value2, this.type));
    let maxUintValue = mask(BN_MAX_UINT256$1, WordSize * 8);
    if (this.signed) {
      let bounds = mask(maxUintValue, this.size * 8 - 1);
      if (value > bounds || value < -(bounds + BN_1$1)) {
        this._throwError("value out-of-bounds", _value2);
      }
      value = toTwos(value, 8 * WordSize);
    } else if (value < BN_0$5 || value > mask(maxUintValue, this.size * 8)) {
      this._throwError("value out-of-bounds", _value2);
    }
    return writer.writeValue(value);
  }
  decode(reader) {
    let value = mask(reader.readValue(), this.size * 8);
    if (this.signed) {
      value = fromTwos(value, this.size * 8);
    }
    return value;
  }
}
class StringCoder extends DynamicBytesCoder {
  constructor(localName) {
    super("string", localName);
  }
  defaultValue() {
    return "";
  }
  encode(writer, _value2) {
    return super.encode(writer, toUtf8Bytes(Typed.dereference(_value2, "string")));
  }
  decode(reader) {
    return toUtf8String(super.decode(reader));
  }
}
class TupleCoder extends Coder {
  constructor(coders, localName) {
    let dynamic = false;
    const types = [];
    coders.forEach((coder) => {
      if (coder.dynamic) {
        dynamic = true;
      }
      types.push(coder.type);
    });
    const type = "tuple(" + types.join(",") + ")";
    super("tuple", type, localName, dynamic);
    __publicField(this, "coders");
    defineProperties(this, { coders: Object.freeze(coders.slice()) });
  }
  defaultValue() {
    const values = [];
    this.coders.forEach((coder) => {
      values.push(coder.defaultValue());
    });
    const uniqueNames = this.coders.reduce((accum, coder) => {
      const name = coder.localName;
      if (name) {
        if (!accum[name]) {
          accum[name] = 0;
        }
        accum[name]++;
      }
      return accum;
    }, {});
    this.coders.forEach((coder, index2) => {
      let name = coder.localName;
      if (!name || uniqueNames[name] !== 1) {
        return;
      }
      if (name === "length") {
        name = "_length";
      }
      if (values[name] != null) {
        return;
      }
      values[name] = values[index2];
    });
    return Object.freeze(values);
  }
  encode(writer, _value2) {
    const value = Typed.dereference(_value2, "tuple");
    return pack(writer, this.coders, value);
  }
  decode(reader) {
    return unpack(reader, this.coders);
  }
}
function id(value) {
  return keccak256(toUtf8Bytes(value));
}
function decode_arithmetic(bytes2) {
  let pos = 0;
  function u16() {
    return bytes2[pos++] << 8 | bytes2[pos++];
  }
  let symbol_count = u16();
  let total = 1;
  let acc = [0, 1];
  for (let i = 1; i < symbol_count; i++) {
    acc.push(total += u16());
  }
  let skip = u16();
  let pos_payload = pos;
  pos += skip;
  let read_width = 0;
  let read_buffer = 0;
  function read_bit() {
    if (read_width == 0) {
      read_buffer = read_buffer << 8 | bytes2[pos++];
      read_width = 8;
    }
    return read_buffer >> --read_width & 1;
  }
  const N2 = 31;
  const FULL = 2 ** N2;
  const HALF = FULL >>> 1;
  const QRTR = HALF >> 1;
  const MASK = FULL - 1;
  let register = 0;
  for (let i = 0; i < N2; i++)
    register = register << 1 | read_bit();
  let symbols = [];
  let low = 0;
  let range = FULL;
  while (true) {
    let value = Math.floor(((register - low + 1) * total - 1) / range);
    let start = 0;
    let end = symbol_count;
    while (end - start > 1) {
      let mid = start + end >>> 1;
      if (value < acc[mid]) {
        end = mid;
      } else {
        start = mid;
      }
    }
    if (start == 0)
      break;
    symbols.push(start);
    let a = low + Math.floor(range * acc[start] / total);
    let b2 = low + Math.floor(range * acc[start + 1] / total) - 1;
    while (((a ^ b2) & HALF) == 0) {
      register = register << 1 & MASK | read_bit();
      a = a << 1 & MASK;
      b2 = b2 << 1 & MASK | 1;
    }
    while (a & ~b2 & QRTR) {
      register = register & HALF | register << 1 & MASK >>> 1 | read_bit();
      a = a << 1 ^ HALF;
      b2 = (b2 ^ HALF) << 1 | HALF | 1;
    }
    low = a;
    range = 1 + b2 - a;
  }
  let offset = symbol_count - 4;
  return symbols.map((x2) => {
    switch (x2 - offset) {
      case 3:
        return offset + 65792 + (bytes2[pos_payload++] << 16 | bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
      case 2:
        return offset + 256 + (bytes2[pos_payload++] << 8 | bytes2[pos_payload++]);
      case 1:
        return offset + bytes2[pos_payload++];
      default:
        return x2 - 1;
    }
  });
}
function read_payload(v2) {
  let pos = 0;
  return () => v2[pos++];
}
function read_compressed_payload(s) {
  return read_payload(decode_arithmetic(unsafe_atob(s)));
}
function unsafe_atob(s) {
  let lookup = [];
  [..."ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"].forEach((c, i) => lookup[c.charCodeAt(0)] = i);
  let n2 = s.length;
  let ret = new Uint8Array(6 * n2 >> 3);
  for (let i = 0, pos = 0, width = 0, carry = 0; i < n2; i++) {
    carry = carry << 6 | lookup[s.charCodeAt(i)];
    width += 6;
    if (width >= 8) {
      ret[pos++] = carry >> (width -= 8);
    }
  }
  return ret;
}
function signed(i) {
  return i & 1 ? ~i >> 1 : i >> 1;
}
function read_deltas(n2, next) {
  let v2 = Array(n2);
  for (let i = 0, x2 = 0; i < n2; i++)
    v2[i] = x2 += signed(next());
  return v2;
}
function read_sorted(next, prev = 0) {
  let ret = [];
  while (true) {
    let x2 = next();
    let n2 = next();
    if (!n2)
      break;
    prev += x2;
    for (let i = 0; i < n2; i++) {
      ret.push(prev + i);
    }
    prev += n2 + 1;
  }
  return ret;
}
function read_sorted_arrays(next) {
  return read_array_while(() => {
    let v2 = read_sorted(next);
    if (v2.length)
      return v2;
  });
}
function read_mapped(next) {
  let ret = [];
  while (true) {
    let w2 = next();
    if (w2 == 0)
      break;
    ret.push(read_linear_table(w2, next));
  }
  while (true) {
    let w2 = next() - 1;
    if (w2 < 0)
      break;
    ret.push(read_replacement_table(w2, next));
  }
  return ret.flat();
}
function read_array_while(next) {
  let v2 = [];
  while (true) {
    let x2 = next(v2.length);
    if (!x2)
      break;
    v2.push(x2);
  }
  return v2;
}
function read_transposed(n2, w2, next) {
  let m2 = Array(n2).fill().map(() => []);
  for (let i = 0; i < w2; i++) {
    read_deltas(n2, next).forEach((x2, j) => m2[j].push(x2));
  }
  return m2;
}
function read_linear_table(w2, next) {
  let dx = 1 + next();
  let dy = next();
  let vN = read_array_while(next);
  let m2 = read_transposed(vN.length, 1 + w2, next);
  return m2.flatMap((v2, i) => {
    let [x2, ...ys] = v2;
    return Array(vN[i]).fill().map((_, j) => {
      let j_dy = j * dy;
      return [x2 + j * dx, ys.map((y2) => y2 + j_dy)];
    });
  });
}
function read_replacement_table(w2, next) {
  let n2 = 1 + next();
  let m2 = read_transposed(n2, 1 + w2, next);
  return m2.map((v2) => [v2[0], v2.slice(1)]);
}
var r = read_compressed_payload("AEIRrQh1DccBuQJ+APkBMQDiASoAnADQAHQAngBmANQAaACKAEQAgwBJAHcAOQA9ACoANQAmAGMAHgAvACgAJQAWACwAGQAjAB8ALwAVACgAEQAdAAkAHAARABgAFwA7ACcALAAtADcAEwApABAAHQAfABAAGAAeABsAFwAUBLoF3QEXE7k3ygXaALgArkYBbgCsCAPMAK6GNjY2NjFiAQ0ODBDyAAQHRgbrOAVeBV8APTI5B/a9GAUNz8gAFQPPBeelYALMCjYCjqgCht8/lW+QAsXSAoP5ASbmEADytAFIAjSUCkaWAOoA6QocAB7bwM8TEkSkBCJ+AQQCQBjED/IQBjDwDASIbgwDxAeuBzQAsgBwmO+snIYAYgaaAioG8AAiAEIMmhcCqgLKQiDWCMIwA7gCFAIA9zRyqgCohB8AHgQsAt4dASQAwBnUBQEQIFM+CZ4JjyUiIVbATOqDSQAaABMAHAAVclsAKAAVAE71HN89+gI5X8qc5jUKFyRfVAJfPfMAGgATABwAFXIgY0CeAMPyACIAQAzMFsKqAgHavwViBekC0KYCxLcCClMjpGwUehp0TPwAwhRuAugAEjQ0kBfQmAKBggETIgDEFG4C6AASNAFPUCyYTBEDLgIFMBDecB60Ad5KAHgyEn4COBYoAy4uwD5yAEDoAfwsAM4OqLwBImqIALgMAAwCAIraUAUi3HIeAKgu2AGoBgYGBgYrNAOiAG4BCiA+9Dd7BB8eALEBzgIoAgDmMhJ6OvpQtzOoLjVPBQAGAS4FYAVftr8FcDtkQhlBWEiee5pmZqH/EhoDzA4s+H4qBKpSAlpaAnwisi4BlqqsPGIDTB4EimgQANgCBrJGNioCBzACQGQAcgFoJngAiiQgAJwBUL4ALnAeAbbMAz40KEoEWgF2YAZsAmwA+FAeAzAIDABQSACyAABkAHoAMrwGDvr2IJSGBgAQKAAwALoiTgHYAeIOEjiXf4HvABEAGAA7AEQAPzp3gNrHEGYQYwgFTRBMc0EVEgKzD60L7BEcDNgq0tPfADSwB/IDWgfyA1oDWgfyB/IDWgfyA1oDWgNaA1ocEfAh2scQZg9PBHQFlQWSBN0IiiZQEYgHLwjZVBR0JRxOA0wBAyMsSSM7mjMSJUlME00KCAM2SWyufT8DTjGyVPyQqQPSMlY5cwgFHngSpwAxD3ojNbxOhXpOcacKUk+1tYZJaU5uAsU6rz//CigJmm/Cd1UGRBAeJ6gQ+gw2AbgBPg3wS9sE9AY+BMwfgBkcD9CVnwioLeAM8CbmLqSAXSP4KoYF8Ev3POALUFFrD1wLaAnmOmaBUQMkARAijgrgDTwIcBD2CsxuDegRSAc8A9hJnQCoBwQLFB04FbgmE2KvCww5egb+GvkLkiayEyx6/wXWGiQGUAEsGwIA0i7qhbNaNFwfT2IGBgsoI8oUq1AjDShAunhLGh4HGCWsApRDc0qKUTkeliH5PEANaS4WUX8H+DwIGVILhDyhRq5FERHVPpA9SyJMTC8EOIIsMieOCdIPiAy8fHUBXAkkCbQMdBM0ERo3yAg8BxwwlycnGAgkRphgnQT6ogP2E9QDDgVCCUQHFgO4HDATMRUsBRCBJ9oC9jbYLrYCklaDARoFzg8oH+IQU0fjDuwIngJoA4Yl7gAwFSQAGiKeCEZmAGKP21MILs4IympvI3cDahTqZBF2B5QOWgeqHDYVwhzkcMteDoYLKKayCV4BeAmcAWIE5ggMNV6MoyBEZ1aLWxieIGRBQl3/AjQMaBWiRMCHewKOD24SHgE4AXYHPA0EAnoR8BFuEJgI7oYHNbgz+zooBFIhhiAUCioDUmzRCyom/Az7bAGmEmUDDzRAd/FnrmC5JxgABxwyyEFjIfQLlU/QDJ8axBhFVDEZ5wfCA/Ya9iftQVoGAgOmBhY6UDPxBMALbAiOCUIATA6mGgfaGG0KdIzTATSOAbqcA1qUhgJykgY6Bw4Aag6KBXzoACACqgimAAgA0gNaADwCsAegABwAiEQBQAMqMgEk6AKSA5YINM4BmDIB9iwEHsYMGAD6Om5NAsO0AoBtZqUF4FsCkQJMOAFQKAQIUUpUA7J05ADeAE4GFuJKARiuTc4d5kYB4nIuAMoA/gAIOAcIRAHQAfZwALoBYgs0CaW2uAFQ7CwAhgAYbgHaAowA4AA4AIL0AVYAUAVc/AXWAlJMARQ0Gy5aZAG+AyIBNgEQAHwGzpCozAoiBHAH1gIQHhXkAu8xB7gEAyLiE9BCyAK94VgAMhkKOwqqCqlgXmM2CTR1PVMAER+rPso/UQVUO1Y7WztWO1s7VjtbO1Y7WztWO1sDmsLlwuUKb19IYe4MqQ3XRMs6TBPeYFRgNRPLLboUxBXRJVkZQBq/Jwgl51UMDwct1mYzCC80eBe/AEIpa4NEY4keMwpOHOpTlFT7LR4AtEulM7INrxsYREMFSnXwYi0WEQolAmSEAmJFXlCyAF43IwKh+gJomwJmDAKfhzgeDgJmPgJmKQRxBIIDfxYDfpU5CTl6GjmFOiYmAmwgAjI5OA0CbcoCbbHyjQI2akguAWoA4QDkAE0IB5sMkAEBDsUAELgCdzICdqVCAnlORgJ4vSBf3kWxRvYCfEICessCfQwCfPNIA0iAZicALhhJW0peGBpKzwLRBALQz0sqA4hSA4fpRMiRNQLypF0GAwOxS9FMMCgG0k1PTbICi0ICitvEHgogRmoIugKOOgKOX0OahAKO3AKOX3tRt1M4AA1S11SIApP+ApMPAOwAH1UhVbJV0wksHimYiTLkeGlFPjwCl6IC77VYJKsAXCgClpICln+fAKxZr1oMhFAAPgKWuAKWUVxHXNQCmc4CmWdczV0KHAKcnjnFOqACnBkCn54CnruNACASNC0SAp30Ap6VALhAYTdh8gKe1gKgcQGsAp6iIgKeUahjy2QqKC4CJ7ICJoECoP4CoE/aAqYyAqXRAqgCAIACp/Vof2i0AAZMah9q1AKs5gKssQKtagKtBQJXIAJV3wKx5NoDH1FsmgKywBACsusabONtZm1LYgMl0AK2Xz5CbpMDKUgCuGECuUoYArktenA5cOQCvRwDLbUDMhQCvotyBQMzdAK+HXMlc1ICw84CwwdzhXROOEh04wM8qgADPJ0DPcICxX8CxkoCxhOMAshsVALIRwLJUgLJMQJkoALd1Xh8ZHixeShL0wMYpmcFAmH3GfaVJ3sOXpVevhQCz24Cz28yTlbV9haiAMmwAs92ASztA04Vfk4IAtwqAtuNAtJSA1JfA1NiAQQDVY+AjEIDzhnwY0h4AoLRg5AC2soC2eGEE4RMpz8DhqgAMgNkEYZ0XPwAWALfaALeu3Z6AuIy7RcB8zMqAfSeAfLVigLr9gLpc3wCAur8AurnAPxKAbwC7owC65+WrZcGAu5CA4XjmHxw43GkAvMGAGwDjhmZlgL3FgORcQOSigL3mwL53AL4aZofmq6+OpshA52GAv79AR4APJ8fAJ+2AwWQA6ZtA6bcANTIAwZtoYuiCAwDDEwBIAEiB3AGZLxqCAC+BG7CFI4ethAAGng8ACYDNrIDxAwQA4yCAWYqJACM8gAkAOamCqKUCLoGIqbIBQCuBRjCBfAkREUEFn8Fbz5FRzJCKEK7X3gYX8MAlswFOQCQUyCbwDstYDkYutYONhjNGJDJ/QVeBV8FXgVfBWoFXwVeBV8FXgVfBV4FXwVeBV9NHAjejG4JCQkKa17wMgTQA7gGNsLCAMIErsIA7kcwFrkFTT5wPndCRkK9X3w+X+8AWBgzsgCNBcxyzAOm7kaBRC0qCzIdLj08fnTfccH4GckscAFy13U3HgVmBXHJyMm/CNZQYgcHBwqDXoSSxQA6P4gAChbYBuy0KgwAjMoSAwgUAOVsJEQrJlFCuELDSD8qXy5gPS4/KgnIRAUKSz9KPn8+iD53PngCkELDUElCX9JVVnFUETNyWzYCcQASdSZf5zpBIgluogppKjJDJC1CskLDMswIzANf0BUmNRAPEAMGAQYpfqTfcUE0UR7JssmzCWzI0tMKZ0FmD+wQqhgAk5QkTEIsG7BtQM4/Cjo/Sj53QkYcDhEkU05zYjM0Wui8GQqE9CQyQkYcZA9REBU6W0pJPgs7SpwzCogiNEJGG/wPWikqHzc4BwyPaPBlCnhk0GASYDQqdQZKYCBACSIlYLoNCXIXbFVgVBgIBQZk7mAcYJxghGC6YFJgmG8WHga8FdxcsLxhC0MdsgHCMtTICSYcByMKJQGAAnMBNjecWYcCAZEKv04hAOsqdJUR0RQErU3xAaICjqNWBUdmAP4ARBEHOx1egRKsEysmwbZOAFYTOwMAHBO+NVsC2RJLbBEiAN9VBnwEESVhADgAvQKhLgsWdrIgAWIBjQoDA+D0FgaxBlEGwAAky1ywYRC7aBOQCy1GDsIBwgEpCU4DYQUvLy8nJSYoMxktDSgTlABbAnVel1CcCHUmBA94TgHadRbVWCcgsLdN8QcYBVNmAP4ARBEHgQYNK3MRjhKsPzc0zrZdFBIAZsMSAGpKblAoIiLGADgAvQKhLi1CFdUClxiCAVDCWM90eY7epaIO/KAVRBvzEuASDQ8iAwHOCUEQmgwXMhM9EgBCALrVAQkAqwDoAJuRNgAbAGIbzTVzfTEUyAIXCUIrStroIyUSG4QCggTIEbHxcwA+QDQOrT8u1agjB8IQABBBLtUYIAB9suEjD8IhThzUqHclAUQqZiMC8qAPBFPz6x9sDMMNAQhDCkUABccLRAJSDcIIww1DLtWoMQrDCUMPkhroBCIOwgyYCCILwhZCAKcQwgsFGKd74wA7cgtCDEMAAq0JwwUi1/UMBQ110QaCAAfCEmIYEsMBCADxCAAAexViDRbSG/x2F8IYQgAuwgLyqMIAHsICXCcxhgABwgAC6hVDFcIr8qPCz6hCCgKlJ1IAAmIA5+QZwqViFb/LAPsaggioBRH/dwDfwqfCGOIBGsKjknl5BwKpoooAEsINGxIAA5oAbcINAAvCp0IIGkICwQionNEPAgfHqUIFAOGCL71txQNPAAPyABXCAAcCAAnCAGmSABrCAA7CCRjCjnAWAgABYgAOcgAuUiUABsIAF8IIKAANUQC6wi0AA8IADqIq8gCyYQAcIgAbwgAB8gqoAAXNCxwV4gAHogBCwgEJAGnCAAuCAB3CAAjCCagABdEAbqYZ3ACYCCgABdEAAUIAB+IAHaIIKAAGoQAJggAbMgBtIgDmwocACGIACEIAFMIDAGkCCSgABtEA45IACUILqA7L+2YAB0IAbqNATwBOAArCCwADQgAJtAM+AAciABmCAAISpwIACiIACkIACgKn8gbCAAkiAAMSABBCBwAUQgARcgAPkgAN8gANwgAZEg0WIgAVQgBuoha6AcIAwQATQgBpMhEA4VIAAkIABFkAF4IFIgAG1wAYwgQlAYIvWQBATAC2DwcUDHkALzF3AasMCGUCcyoTBgQQDnZSc2YxkCYFhxsFaTQ9A6gKuwYI3wAdAwIKdQF9eU5ZGygDVgIcRQEzBgp6TcSCWYFHADAAOAgAAgAAAFoR4gCClzMBMgB97BQYOU0IUQBeDAAIVwEOkdMAf0IEJ6wAYQDdHACcbz4mkgDUcrgA1tsBHQ/JfHoiH10kENgBj5eyKVpaVE8ZQ8mQAAAAhiM+RzAy5xieVgB5ATAsNylJIBYDN1wE/sz1AFJs4wBxAngCRhGBOs54NTXcAgEMFxkmCxsOsrMAAAMCBAICABnRAgAqAQAFBQUFBQUEBAQEBAQDBAUGBwgDBAQEBAMBASEAigCNAJI8AOcAuADZAKFDAL8ArwCqAKUA6wCjANcAoADkAQUBAADEAH4AXwDPANEBAADbAO8AjQCmAS4A5wDcANkKAAgOMTrZ2dnZu8Xh0tXTSDccAU8BWTRMAVcBZgFlAVgBSVBISm0SAVAaDA8KOT0SDQAmEyosLjE9Pz9CQkJDRBNFBSNWVlZWWFhXWC5ZWlxbWyJiZmZlZ2Ypa211dHd3d3d3d3l5eXl5eXl5eXl5e3t8e3phAEPxAEgAmQB3ADEAZfcAjQBWAFYANgJz7gCKAAT39wBjAJLxAJ4ATgBhAGP+/q8AhACEAGgAVQCwACMAtQCCAj0CQAD7AOYA/QD9AOcA/gDoAOgA5wDlAC4CeAFQAT8BPQFTAT0BPQE9ATgBNwE3ATcBGwFXFgAwDwcAAFIeER0KHB0VAI0AlQClAFAAaR8CMAB1AG4AlgMSAyQxAx5IRU4wAJACTgDGAlYCoQC/ApMCkwKTApMCkwKTAogCkwKTApMCkwKTApMCkgKSApUCnQKUApMCkwKRApECkQKQAnIB0QKUApoCkwKTApIbfhACAPsKA5oCXgI3HAFRFToC3RYPMBgBSzwYUpYBeKlBAWZeAQIDPEwBAwCWMB4flnEAMGcAcAA1AJADm8yS8LWLYQzBMhXJARgIpNx7MQsEKmEBuQDkhYeGhYeFiImJhYqNi4WMj42HjomPiZCFkYWShZORlIWVhZaJl4WYhZmFmoWbipyPnYmehQCJK6cAigRCBD8EQQREBEIESARFBEAERgRIBEcEQwRFBEgAqgOOANBYANYCEwD9YQD9ASAA/QD7APsA/AD72wOLKmzFAP0A+wD7APwA+yMAkGEA/QCQASAA/QCQAvMA/QCQ2wOLKmzFIwD+YQEgAP0A/QD7APsA/AD7AP4A+wD7APwA+9sDiypsxSMAkGEBIAD9AJAA/QCQAvMA/QCQ2wOLKmzFIwJKAT0CUQFAAlLIA6UC8wOl2wOLKmzFIwCQYQEgA6UAkAOlAJAC8wOlAJDbA4sqbMUjBDcAkAQ4AJANlDh0JwEzAJAHRXUKKgEEAM1hCQBbYQAFGjkJAJAJRN8AUAkAkAkAnW0/6mOd3brkH5dB9mNQ/eNThoJ1CP8EZzy46pMulzRpOAZDJDXL2yXaVtAh1MxM82zfnsL/FXSaOaxJlgv345IW0Dfon3fzkx0WByY6wfCroENsWq/bORcfBvtlWbGzP5ju+gqE1DjyFssbkkSeqLAdrCkLOfItA7XNe1PctDPFKoNd/aZ6IQq6JTB6IrDBZ5/nJIbTHMeaaIWRoDvc42ORs9KtvcQWZd+Nv1D2C/hrzaOrFUjpItLWRI4x3GmzQqZbVH5LoCEJpk3hzt1pmM7bPitwOPG8gTKLVFszSrDZyLmfq8LkwkSUhIQlN4nFJUEhU2N7NBTOGk4Y2q9A2M7ps8jcevOKfycp9u3DyCe9hCt7i5HV8U5pm5LnVnKnyzbIyAN/LU4aqT3JK+e9JsdusAsUCgAuCnc4IwbgPBg4EPGOv5gR8D+96c8fLb09f7L6ON2k+Zxe/Y0AYoZIZ8yuu1At7f70iuSFoFmyPpwDU/4lQ+mHkFmq/CwtE7A979KNdD8zaHSx4HoxWsM8vl+2brNxN0QtIUvOfNGAYyv1R5DaM1JAR0C+Ugp6/cNq4pUDyDPKJjFeP4/L1TBoOJak3PVlmDCi/1oF8k1mnzTCz15BdAvmFjQrjide74m2NW1NG/qRrzhbNwwejlhnPfRn4mIfYmXzj5Fbu3C2TUpnYg+djp65dxZJ8XhwUqJ8JYrrR4WtrHKdKjz0i77K+QitukOAZSfFIwvBr1GKYpSukYTqF4gNtgaNDqh78ZDH4Qerglo3VpTLT0wOglaX6bDNhfs04jHVcMfCHwIb+y5bAaBvh2RARFYEjxjr1xTfU09JEjdY1vfcPrPVmnBBSDPj9TcZ1V/Dz8fvy0WLWZM0JPbRL0hLSPeVoC8hgQIGaeE6AYVZnnqm62/wt00pDl5Nw/nDo+bF1tC4qo5DryXVn8ffL3kuT51e+VcBTGiibvP+vqX50dppfxyNORSr48S5WXV8fzcsgjRQH6zjl+nuUYFVloiEnZOPDpHD/7ILh3JuFCdvAi2ANXYXjTDA5Up6YLihbc7d+dBlI9+mdgr8m8+3/Dp26W/Jssn7b9/pOEP4i+/9TsPI9m2NfNKwEI35mqKV+HpZ+W69Y8sM/sIA9Ltvhd+evQTUUfSkYxki28/CBT0cT96HrlrSrE+V9RzhskX0CsDsCfHffBVybkxmHOFOgaUurWNQ2AcZbi1WjkZzYArWZBHFd1SYwtqQ0DIZt7OV40ewQxCr/LgxAc8dLJeAJFseWJq9XiOp21hLv/HhsFbYbg3zCR8JmonZjhuKYrS/KJc30vnOL2CM+GfogNWug2DstZPzauCNeeD8zlP8wxPyfLHYQB/J+wQE3aDpXH/5tdIQpLn3JXNJYZFiXInGB7FqxRxHYJ/re/lHprE5sngUMm11uOIA3bbtkk06I8DYxuwPD+e4sAeNfor0DkWmiCQFiNptkmiD2xGO1kIKGr/Tuu4bHe6z2NaS7Ih0c+Gpv+QbLY9ea122BXNSitM41sxUSlnWl+uJBIFoLqt66v/VfGIQos2lzhOOLDuScVxcyrqH3/FI4vaYB0b8gFHLXtxyX/9JpUCYNwlLZ1v5CeB99l0F795R5wl5UHRq1OYyKqsoIY07wJz2CT0TOf5/JRBPtJIIk5pOJ60SHayS9kMSKbI3fLLYztsY3B4MlSyoEfc9gL4yJVrPo+OGGunCK4p15UbCArJP/PQgUWDW4l+2P/tCqRRy2flIZL/nVeY/vyAfILUM5qEGfcFXXXrAit7skwDEFnD7mL1ATtyrz7HcodhzP7gShFhazIPm7X0+mTCeSWfrOr5WcvJfip19JRRLfXjuQpQjcNCuXo8kqkxQ68ukJQoxlnfjevc0WcKnGpUvyY54eJTS1IRWDqfHANukJLw56ts5yS6Nea7IrL6/78aKmZsch4Q694ujxgx5+0PhlGpzWimajpvkBOOUQlHLkJorzqu4e768L9nJtZWYturb7dsBxjzlNhd/gZcBuRgIUSdgZjg7Rx+f/zLcs4mAa3qDbJNUQVNbSg+dm0L3KH1uhesTPaErVYjZ8Isvfr+zfiX3DT0PlaOv+hdGvLUIlKSEcYHPMs0NtTGzyqMe74yciNFdAVZVzol/XtLsEqivKqfW7zWTCNCvZkPnnBlMv3UHW5RNNEJfuyR3MvYH/9E6gcts5GAwKIgCaBQ+V2Eh9O0IJkxFksPI1V9obqDKCpmPM55mLd+VQgRqgD+9XvsUxjbh/AXXPxOpc0FXFyJzc85aa1VQZa90LAWR4oinrBaOBr8DymCpFbdXMTn7Cv18S0hMR7T/o5VkRqN1g1/dvaDdZsRArO3bopkfee4efLF+hyVdcX4u3aNGTkWvLRafW+sXPktA1lla4UkSB7uJIULfxy/RAflk2miyw9xq9uVGgCNzqCv4iX+AUchfMkZdEgRZ9TZ+1CPTH2jXjMXjFl/+bEPzSjM7zPKKWhyZUgQG1lpp+DNz+Zz+85kD59q99U5R4B3vuI9WenCWqroy2U2Ruq6I+di5N/v9SmYnqJ5H1HLWCbIg6iVrn3s2gFBVFhrc1zzNqoFe275K3Jy1T0Mc5yeE1iRwO2b1L/j/S8jyvGDz6B3NMFEHErGHMM2+oJ5LobazyWEitdgMjQnsd0cjYrCqRpx8idpfwRq6hz/LleX6obpuJh/AGIu4sxD35hwkIEr5ShH8xro7tTDYK1GPHGylK6rp7NCG0lMr7YqwziMUBwXv0zPW667f3/IRLJRD7mkuwUP6mpkxyVjNlcBiAX12r//+WTuzWxsue7bsjRp7xFjpR2tRLqGHLvjYt3TpeybR82K61iLn+pOSWDfUv/HU8ecBtML+Gbz0v9vmlxSgZeBBzbGeP1KSqsH14ZM2kibgDhbS21hIALSOYFCE9LY+2CNvtzT2QuSJMiKP3zwvvs+/JkDwTg0jHVE0XH//U0nu5HKQtCL2KGDQYUgT7qIMVN/OoWqEz1oeG4wG7InZg47NE7rfHB2i7rkpYCUzaPfVtDYgTEPNpa8gXHI2Pp8A6YB8OYHkXDZMMcOL3rJD0Hxk+mRlsSJ12/7T52IcFst5zRc7uDJtQTXBdm9GvsvyXcBbMfKXWqsDSeEnFyPUXZGTafti4a0it8SN1qXxzBmzj+gVZ/FojNy+x73AuuqtJ/oaMZF6m5kbW6ItpfnUT/BrQunS+gLjTTUz0d8jTMpAfFQ40RQi9uM5qdFYzqk85hqSH1zsPOhiO5CN+hNZvL/RIs7m7LyLDuV80ZtyHHqVEngTVPBctHQhmcPjM30m1veDmHCXEpjybWAbgj3TqLUPNazzdHgxYmNuT7trWFcGOi7iTeL5YeK2yp2H98yoLN+skqhffZI/5n/ivceo44wJRY8bzC6DGwdgkMOulYhzW5m6OKyK2Mg+E3YE19L8ngE08TdAuNu0mIzd6kw0i03zzm4oqfVSZjZyxXnBhvt0v89EmnArya/UvHQrdQxBDAJagK2y+OqgBqzQ4FnUeiKfb7HFoUvFSknWhwq58TpBlVRZ0B0A7QWz7X4GLHcbdh5kFI/PKJ91OEh/kmnMEdh+Z23myFH8sXjR/KaHttrpz80N+bl0HM17RX48UjUWslrYHYW7oiHVgcGqTBoTrqK4JYwTTArFO1/APJ8DnEYf+wD92Dw15a9wrPxyJA88yYcv9RypzXLKAWmMuE0KAtIGjfKx1GbRQIq0AkttuRpBO7p4SGrTZuAOat3hTxXEcIKh3HgC1d88K7bz1+Jsi+y7tL/7zc0ZxCBB3hSxvP90GkUp1Lm2wuESafZyFy4Opir+o3gMWtDSuLF3LRHXTUGkKQtvARnwam8BuKv8Q2fHH/cEwPCQd3dhzgri8eTezRsQoGz6ha+S4E7ZzDB/LXwl04vA70NeVsf5rmv1TLvcQSNIBk3U6Qh6Bm+0905B91hopTLnTJRWZkUmbckEw0woG81azyw6LZaBL5Qx2HPvd3LHGLpN6mPZlto50NwW2zFOkgoPKV1gr142teD9aok2HNkPMepl3NIi78ShnAlJCzjZplteUoqz0+iUEOym1LZGGFHMBkc6/5f+sRCCFZZW6KrEby64o/ZfefQAPP6b5ko2fuujIv7uonIKXN6XiJsZmcOeGxteQ+b/ope3Z1HFeXYoW1AJrU/OiCpsyQP1Pr1BdQKFzS0oYnLCAweSnIh7qMFMRBMY7BcnJ5oskUbbRNiosqMzCYUAZPbo8tjCCsCBm5SoGcTHBMXcE+yQpl/OfBkcTw3oa4X7V+ohEh/Zkcv0cqc8sY40IsOW6lLiIrvYND/exZbRlOMgaHvb/QQKaY0k6Aamee2o3LVARCbIP4RoSd7u3CXkG+Iz6iFLfsN38F9xU4n3ueeVgiRs3jw70SMWu1QzDdiLsKtU1qvaLhv7dUbnLimdqYG+pa2aRZ8A6Q9JSr3yTs1MiAvfFHPQJTiqpI/hVUMmL6gPj6eL7lH0IkLCNcaogBA0TGfO0wO6ddf8Fju0L3YbRrWe8J3IewsNBCbpC2b6etQRJnSGLuWDiFoBez9hJHw6+bMQQGQS8YV/kzQ5AFHEqPaMgOjyR5zaHtlOBI4mjo8gdNItHUHQ7Bzq/E/xV1B+L0uoRcLIEj4hcv0yWQTwWLHzoFrvEZPygABpc4rnVjhfcBw5wOvaVVtgiG5qjklrTY1ZaXHkasyVYBd+lgo6zEHMumfK8XR2eD0cVn5w8l1uxGz2ACwtFob/CTV/TUx1kCKp+QROanLrNBiSPTxAf1eOFE+JifgAJ+pyrFqS/0wKlPWUVKlB2Bhu1Ggx2cvfdiR49VIsgBNnE75pf5lpFaQuz8+VPreUd/HLlW8kDSr25AnETsVRrOycLBPYD9/j/7Z0KKdOjtrM71AT+VsjD3D97aUDP5WrHp1DWghsk/lS/hp2VMwo0eqoEerLL/4/SlmyjStwWVDqF6jHC89niCwr1tMSe8GxeC9wjzMKmE7ZtdHOWqqc1OoTI24eVQc++crbyxSU4TxiB+vWoaAUpYQxZ06KKIPq6EvN/rN4DZ0/tQWYVqZ3FTIftPBfIuOWX3PonIKTUArpSvfmQRpkWD00wc3AQS98i4ZYaUbI+DGv90tuEKRjb2ocfdddC21YGUATYQmzelz7JqWBAQqKrWYdWEJlfPeRFZHtUm2MaISZsoOvURowxJKveGRegmBiKZ3d1cMFioJL33RoIKT0eDeK8FH/ybAhZU5TQIsWYmjyeT7EOLL5xZuRPf4qRIo6bbLtFOV6SX60fR8Smys/u1D5DjkmHJyr/woVAvBP2dxGo9gH1LgIm8XlFF1KSYvfj+0w7aTEfoFpcO+Jv3Ssbv8wwkED5JEC+jdln2dzToPNRtWiPbRb8f8G4aZX1j/2Vdbu7jM3gAVD5BKR+yJaOwLtwJodwjWu5di47tnNs9ahpnCUzVMObQfbTqMNs64MGANlgyihKjhwZ6p1Jsnro0/SfkOk6wx+HgUB6Mz9cUiF7KrJkhxnOVjCCcqPZglIojIRoDtkd2AkLNZC88GdP2qZV/1N6PBAe+fpgWZ36oHnewQ8CHdXcxbwQVjOn8U3qD9+e7FzWpg135vgdEMZ9fH5agDnNzdjKFZQ4tDsJs/S6Lk8FqjFJpHMjaRU6FI/DBDM0g+RRkxNoUvm14JAn5dgd6aVHt1aMkSXiJVenbm2FfrIEaFKHtm1erv1BJ5056ULL8AMGLmHav4yxg6F6n5oBq7bdP6zEr6f+QTDJ/KE1XfoG24JvVk2GL7Fb+me27otVFnq1e/2wEuqv6X+2zLQuJQszy5YJi/M5888fMy34L6z8ykD5sCHgzliAoAtEeoaFmnPT63kOYrZWspxYzqQBu/QKNyQ8e4QwKJUCVazmIUp6/zpLA3bWH2ch7QZN0rzWGxMRl3K1osWeETxL95TZSG/atM8LB9B92/71+g9UGWDPfD+lu/KdOQ85rocuHe91/gHA/iprG9PZ2juX49kaRxZ+1/sB3Ck35eWYBFsmCl0wC4QZWX5c5QMuSAEz1CJj0JWArSReV4D/vrgLw+EyhBB6aA4+B34PdlDaTLpm9q9Pkl+bzVWrSO+7uVrIECzsvk8RcmfmNSJretRcoI7ZcIfAqwciU9nJ8O4u1EgkcMOzC/MM2l6OYZRrGcqXCitp4LPXruVPzeD402JGV9grZyz9wJolMLC/YCcWs9CjiWv+DNRLaoSgD5M8T4PzmG8cXYM4jPo5SG1wY3QK/4wzVPrc33wI+AcGI//yXgvyBjocGrl768DMaYCGglwIit4r6t6ulwhwHJ4KeV3VHjspXXG4DIlDR2HNFvPaqkBViIvr433qZPuUINp6oi1LyVVC+EE1j6+wab8uPMeAo6e9uWYequvZynhnYazrvrDQJVkK3KZRoSR5BHi6vOC+AVCujMiQ1GVzGDZ4RFv8jFm7z5CU0iPH2JeXqUzqaKKP4P7osPkcIL99Y7fP3l+TzeFXO2kSpLIJW51oEY8DRIhqexGnxj0nmtGOseStuViIE2mJge45LENf77xjuI7egRNpzthNiajnuqikg0aQS1JqlIZf+hwSUlOp8BEQ0y3xiTOJkohBP3eyYiPDlZpFY88EWOpp4+hC/tQdhrQ56h2VJ2XA6vhPAbj+wH6iA2XYuTvRV25N8wNPQuA0Vzzem2ADZPFK2vr8l0I3GTV3fUN4S6FFYygW2Pu98f+lsgPf67rwVCbgMFAACW3P10GbxnK3SNuNK+VlPRiL7U3dK1o3spH/MFfDkgXuXjxDTxJrYctqHdwUg4rhUCNA13lGjuhJDatpFb/mExsBWS46aLFtROqVm8xQNPXK6A2rRfazJSWpIyh+FMmorXPXYnHQ7YLOmD4B5QTI8rzp7OomiarnaFs5syYjQ0ucc7g1/JzT446IFlDtpUL7DP9bLRCLJryUvi5R71/qX7ycqRSwunQ7+tfJz44Na3aJNszaMEZ/BV4iOGopabYdmvAPe+kIdGCNq5Q8fg8Ld0VNNXV0ZiiGej7zSA+pexy6wKC5k4rZa0k+qaN8bKq3oJWMQCSGaK7PrwMvA8t8BZTzjDqXcFTAIeRtl0SdlGSuAziVXItFcgAkeqwuNsbsrUZFcU6KUZLmvG415kHa0AwMFW2cNSUvPR0U9iCPh0nyslT92B5slYXiDWeSXvxHXItvjI8z5KCIVTIHqGZsbDBTr7WdHzcUAI1ipR86H3o0p2wPhfp7xg9oWOxWIK4a5BWdaV9OAPc0XuvlbwitCVtZDzZxGhIOl77ZgrRYR7LZQFE+Ih23hW3gI914ekkjgbKCi2bsqSAvij6GGj5p+k6evQtJp3qVh9vg+jiJvFCGcKBCITMWpqHZNKfE6IT0dKntS0rhu0DB5D9qIS0/RboNLsx2DlRMlx1QIBeBpHJNKdCL9uWM9eS7RJXKNOpraULtutuJYOl0apdE4LxfsyRSZb6fJkd51SHrI7lLB4vEg4fifJ1dqcWSeY4DgcyjrUcymK+gd3o+qj+3gHKWlLVdMUr3IeF8aClYBq+eeCV9Y7n1Ye8yL7rEvxY7jAlLwucKQ51pu59N8we8XwrbXPChBHXP4LnD3kDwQ85w1DKghtwvpO609fZOrPq8Q7GOOAjHhfR5VqvpoFne8oMHbCrWb1L0IdATo+h1PFeLLI8wc+FEyftLvskCdOtxKfAx3IEJXzBfWTKq5viKP/uu99dxnEpoNJhRtjSZGwOTWr7Ys44++P58O+nkYxd1Gcqm8G3Gh7AHSCxiPNyJWijI/lECrKrAXgBqkRShvdkd7IfoqUlziFDiglx+jdHnmRVmGnk3p/3n78M/HkzFUGZOS07cPnPn9jAnBWl4qDrB1ECf9idIKOdkJTKcZ690nuLW2yDsqwNpgrlT+wx2gv+Engha74lfVqbwqS15FRwuFDfq3bVCZcPy78TL2pH/DOdHeL9MFAtyybQNwHaO781rnJZAhR4M+AYWoSoa0EjQ99xivreM+FKwd7Jp/FC2vvvcq1z3RnRau/BM5KGkBPBSUBOzTNdfaJS/PWTDb1jRSgn2MuY3pVZbY9peHBVI3Ce/u70hg4f7MCVeAjYJfzTkDVLuB6jyjZs5Kko3u39ozgLK4LuwSbUrNIU5cl6Bs3De62AE084XRsm64Gs5W1ofxsWIZ9cYl8PNa5zQHl9ls5aiIKN0rHIIzBnLr03Kle2qq+n/gLDAzvF89vdZCvUFEHRoi9n33O3i49UWyeHP+ZAeRf+psM867nfqON092zE4Pj7AbLtvIUFJFr1y9Le0CL2flc7LUqbgGzOw4/q3vA/cJO5JeI8S+8bc1Y7pqYSzoEWSFn5G7EoPHTGHPMU6SeLKEeli+i8dHY3lWxSrIOU2y0TNo1SeRYewhVx05OXeVDf0xhHNckqp0arRk+bgToeSaHbVZ5nj3IH3m2oayt3sXY78qSPcDpc/5C7VXDRj6bROvvBG5JCsKl/yeMPAUn1flMsmr/FaFdb7gVUXnhLa+/Ilj87PpCC6rILQ6wkIP1ywEg0PztSEzbsJoRwQzDaxkiTN27YDnsy/YKfe6jKcqZWs64skzUAHIt+nXxju0dUVtbCSDAUXYw78Yd4bJKuYU8gbzLzgL4XIUC2HcPIVCUYvM7cybOBFVBdeGR4cOVB7QbGnohTRpiPrGqi1a8QXFBYqENawROuR43OG8dl+Jx4TpwAoi2kkPXW7b/ARSs4DO/z4H6oTIUpN3+/K6Iuc49C4/Uf1NxQTEE91VP8RnLKTpxjywMe2VxM1l4YGXSFY80HUAKIdqczBnnLMPklFV8mrr5hFDypn5TAT00ruU6AjDPNvncoVzX4ac6wAzTwrNH7oz1XLH1wzjQs5k7hcNLbznXQGB7M+rXxKtZXPrz1Ar+OxYGDkJvElknZsHD/IcxRd7ujmmLYpDDbverynroCnSKVQWEGjHL57PaI/WokvhYRpPMk4ni2EUhjDuIF+IU2R0fs40i+66bw8sz8OzyC2eFAxxicd2n5Juta2eWa9KtObD7xLmPvtK+8cjQt+NLjcZCTt+Ss9p1od0bklVgaIV1qJbWxUOr6iUzLDzFefYxAtyRcBr53IaDB25n60KQdhroQWMUpuWSUpELSFxiu4vgQeRoEZe78/ua3TlrszB8sLVZoecnV9YMYz+HkZA/pLqbFhzurB52Wl/WEM6sVk4q04OnzWZFi76JkcGgeeUyYUIwhCDMdIfTUdD4wQpYm3LBw0sp33CVK2q305jeyzgGnBzSMXjesm4XjcEhhrjPSLtwqqoaFCqD5DlHYhoTVafWtBUQXoNfDk19IFxq8sImCcqgMhOToIZUO2530aasY908dMX2nTMFjgv+lapdI8k/e0a7pFw6X3Tgf0m99bbCpOzVgRu2Dw/13CehVfFj+8BeKP6SZV4g/qiX42NWP568PzMajFm2ANmKtHjEIAIc2hc1iecBR9elGP4LmAQwAVmZT8kWc7JSY0ag583ch/Z16krGrjn2YdIaa22egy4/niU6m0WAG3K/yP65cfL//CP+JzcnoLHQFb/KJQeBrEbR1/IKo+YOFXWIQ8ghNxYdMwa49NeXzFqFOIXTmk3w/v5KneS8sGHiPGACh0DE9a1uLAochB79g3IqYObhlswemMucZnAE7dBkp5OAfToa5gHFbIPcec0fVWEOOLftQXsuffyv3wo1LWDDm+SyNMWgSEWtjMyYkjLjTkUtmj7DQlfbpHf38lDvoEN9d2ALxnWCjph4jvfEIRbHvltKbvE2BiYlz45mnJPeFrwZcBny3k0/pyXNrSbEIWvvZw14Y0Fqy4tba1Fu0yNNYaf47jfnz7VCCxKsrJz5oz3F8jXUdQqFu+gDq6EzvKDipXf/3NmcsCC74VB3OgHPgN7W9cU54pjGFDMfifl3m5Vhy21uk1U2nYCrddrifkpwGLYmLSSQAAjC6M3yB1fc6KHpgDnMXh2bYX2ns+Qma+DBgyCkZ0TqZK8Mp2Sryx7HdMM74X9hrwYhQbwlK+zgATAXRzQyS+hK4OTnP17/cyJ2WzY6DChYWGJYXGCnEdMswF5VTYQdSyTpdLXYuh+x2Qr7DR3H2x+YdP0qsLAzYJIWKwrrKkpBgWCmgNCn5t+QbWqf/LoLuvjgDFLtMoxNK5axIA9kammelvwh5ZI52ktrEm/OVEESPQPZGHAIhP7oWDBnGnuzG45XOTpZWsxwNO4UiyxH8riTvQq4JVq5GwX3yqVCbSR0ef/gVYDgiYaiD2EAAxuEPKyXTp/HhL96eVTpaDqFEoV2x1PP/UMcs/XqeGc1gZQG1ot6YxaIEWHanYavH9YdLFjlyU5yrYALVg/sxBjT39oD+BIXvf4LTbvvvpX3srxckEX1XAM9s2uajUTlpPq32mcx4T+sibdQEHQV2WmgwMhbYovh7WWTPfLF03ZbV5a+ElsSIyH6kgJ8+D6aN/6f+ZstkZOYZYx9GbagcrEqwNblz0iZ9NTyvIAeNn3Oup7rtyD4wVE0PoqcnR/LoSK1s1esmOGPjs3zHB8xW4iL8IrhqAJfsWNBYW9TGR11C3KZJaN7MP4O5Ykmpvw94hHzVmsYA68RQdFYfPlFOgCNBoSdy5ODcv11l9bLs135M4okEc4/e8hQczcz2PWipIVSBxa/5sr9xyTFbjG4xm8f4LmrAhD1uEDGrFDl/6X7Nw7/WZPW7fZJGYN8eZ68Td5KGfJyKjD+pTysvTi+8Q8R0L9wKAxAUrYswdvAuiNeenxSplQZjYTxbcH/wP97fOY215SozY3UDRhv7lomztURB2O2UriTX3oAiTKoInkHQietZyhBQ9wMTVHgMrxOP5T/0gN14eFTz0m2D6/iJMbXYGHdIkKEGV2Voa8k/hVNvAVAZKrDEXthUxotwYkYysTDk8j27XEVy+4a30jopuAp5+/xWYb0ne6lwKZwR3j6kDXroOOtrHqWlkJHSWLoPEQJQo/ARzR8UBZSckmeBPn3gJwY62Zo2dyy1AyRRDQBFAJKH9KX+7auP8U8XDo7mMSzq5ZxmaJ5bLpNg4ZM7938SAjMHcu1yB4+lkHnVLnIp86AOPgigH+ZFDRq1QuKWK3pK5JkLDJdakj176NCbjXDASt1h/t1p+GHyKbAoevHSnHuPfoBmQ3nJrDjOhPfwVYi8V5r0KB8BsrfFu8BvhYCbNrvCVnd4Q8RktqIR/ZilioC6g3++L7PHzuXa8NFSF5zd+ISzGLTjrfaKXsBFCkkK0ksSDbl91yXUghMFOskQBeUoo7o3wuIsE29goRIORuJ4b1jSumvR0gR8B21iyW1G4FqHkZOlWz9zq5FnaJX1WbeAxe2DfGSAnw4cqDwg3LFalk6eH89Sdc41Fr6voEa0hfwdkb54yOM7WevDugT1FRzEqdg9zZZ44ZAKGH3ZyqFve3SE4UDN6tLmIFTdIwMrtYRXWBQDB7vvqOuYj7cN31av64+jg/g1uce+am3TOl0cUUL6s0l35FJ9p8vJcG+G8lAFqC0pdmd/aaWYpqDLvB5LEasLMgbPN2N+Wvkh6HYxPOrZEfoxQX/67AzcWOR0K3eYGOgQhyWL7cwKGlxmY/E2b8CKi6Ssgok+7B+zTtq/DXmaDAHRnwbwvCDJ9pITO5RQgBuprEWT0avZv7QjbzITYD8Fzgy4TSYG3z9tLso0Z7MfgHDLKU+kHrzxWkBPwJRydKMXG4AaCA7mlAmjzpNhGOrMGZGZlHSjPbmO5jPd/lKBrViZ0BaXMmqaFOwA/f03O04qQX6MSVA37+SA5Pne/KP7caLJKuOCJXoXpzArUrYesMVc/RXnOv03YrwKgPlR2SjpqIycyulmodZBy6gVc1jA9y6lJqWgR6SY6tc24sVcYuh2GaTeikYJnhr2d6BiL3oLx8M8wuJBdI3FRVIIAx4XougScOw2xWgwUoSYKeLUHc310kVBzSE/vFeHAjlUil8KZftctMgwGjwrhMbjDbK4rB32fTe9jnsqijdp5kOwkD9+klel+lNh3joAFQ");
const FENCED = /* @__PURE__ */ new Map([[8217, "apostrophe"], [8260, "fraction slash"], [12539, "middle dot"]]);
function hex_cp(cp) {
  return cp.toString(16).toUpperCase().padStart(2, "0");
}
function quote_cp(cp) {
  return `{${hex_cp(cp)}}`;
}
function explode_cp(s) {
  let cps = [];
  for (let pos = 0, len = s.length; pos < len; ) {
    let cp = s.codePointAt(pos);
    pos += cp < 65536 ? 1 : 2;
    cps.push(cp);
  }
  return cps;
}
function str_from_cps(cps) {
  const chunk = 4096;
  let len = cps.length;
  if (len < chunk)
    return String.fromCodePoint(...cps);
  let buf = [];
  for (let i = 0; i < len; ) {
    buf.push(String.fromCodePoint(...cps.slice(i, i += chunk)));
  }
  return buf.join("");
}
function nf(cps, form) {
  return explode_cp(str_from_cps(cps).normalize(form));
}
function nfc(cps) {
  return nf(cps, "NFC");
}
function nfd(cps) {
  return nf(cps, "NFD");
}
const FE0F = 65039;
const STOP_CH = ".";
const UNIQUE_PH = 1;
const HYPHEN = 45;
function read_set() {
  return new Set(read_sorted(r));
}
const MAPPED = new Map(read_mapped(r));
const IGNORED = read_set();
const CM = read_set();
const ESCAPE = read_set();
read_set();
const CHUNKS = read_sorted_arrays(r);
function read_chunked() {
  return new Set([read_sorted(r).map((i) => CHUNKS[i]), read_sorted(r)].flat(2));
}
const UNRESTRICTED = r();
const GROUPS = read_array_while((i) => {
  let N2 = read_array_while(r).map((x2) => x2 + 96);
  if (N2.length) {
    let R2 = i >= UNRESTRICTED;
    N2[0] -= 32;
    N2 = str_from_cps(N2);
    if (R2)
      N2 = `Restricted[${N2}]`;
    let P2 = read_chunked();
    let Q2 = read_chunked();
    let V2 = [...P2, ...Q2].sort((a, b2) => a - b2);
    let M2 = r() - 1;
    return { N: N2, P: P2, M: M2, R: R2, V: new Set(V2) };
  }
});
const WHOLE_VALID = read_set();
const WHOLE_MAP = /* @__PURE__ */ new Map();
[...WHOLE_VALID, ...read_set()].sort((a, b2) => a - b2).map((cp, i, v2) => {
  let d = r();
  let w2 = v2[i] = d ? v2[i - d] : { V: [], M: /* @__PURE__ */ new Map() };
  w2.V.push(cp);
  if (!WHOLE_VALID.has(cp)) {
    WHOLE_MAP.set(cp, w2);
  }
});
for (let { V: V2, M: M2 } of new Set(WHOLE_MAP.values())) {
  let recs = [];
  for (let cp of V2) {
    let gs = GROUPS.filter((g) => g.V.has(cp));
    let rec = recs.find(({ G: G2 }) => gs.some((g) => G2.has(g)));
    if (!rec) {
      rec = { G: /* @__PURE__ */ new Set(), V: [] };
      recs.push(rec);
    }
    rec.V.push(cp);
    gs.forEach((g) => rec.G.add(g));
  }
  let union2 = recs.flatMap(({ G: G2 }) => [...G2]);
  for (let { G: G2, V: V3 } of recs) {
    let complement = new Set(union2.filter((g) => !G2.has(g)));
    for (let cp of V3) {
      M2.set(cp, complement);
    }
  }
}
let union = /* @__PURE__ */ new Set();
let multi = /* @__PURE__ */ new Set();
for (let g of GROUPS) {
  for (let cp of g.V) {
    (union.has(cp) ? multi : union).add(cp);
  }
}
for (let cp of union) {
  if (!WHOLE_MAP.has(cp) && !multi.has(cp)) {
    WHOLE_MAP.set(cp, UNIQUE_PH);
  }
}
const VALID = /* @__PURE__ */ new Set([...union, ...nfd(union)]);
const EMOJI_SORTED = read_sorted(r);
const EMOJI_ROOT = read_emoji_trie([]);
function read_emoji_trie(cps) {
  let B2 = read_array_while(() => {
    let keys = read_sorted(r).map((i) => EMOJI_SORTED[i]);
    if (keys.length)
      return read_emoji_trie(keys);
  }).sort((a, b2) => b2.Q.size - a.Q.size);
  let temp = r();
  let V2 = temp % 3;
  temp = temp / 3 | 0;
  let F2 = temp & 1;
  temp >>= 1;
  let S2 = temp & 1;
  let C2 = temp & 2;
  return { B: B2, V: V2, F: F2, S: S2, C: C2, Q: new Set(cps) };
}
class Emoji extends Array {
  get is_emoji() {
    return true;
  }
}
function safe_str_from_cps(cps, quoter = quote_cp) {
  let buf = [];
  if (is_combining_mark(cps[0]))
    buf.push("◌");
  let prev = 0;
  let n2 = cps.length;
  for (let i = 0; i < n2; i++) {
    let cp = cps[i];
    if (should_escape(cp)) {
      buf.push(str_from_cps(cps.slice(prev, i)));
      buf.push(quoter(cp));
      prev = i + 1;
    }
  }
  buf.push(str_from_cps(cps.slice(prev, n2)));
  return buf.join("");
}
function quoted_cp(cp) {
  return (should_escape(cp) ? "" : `"${safe_str_from_cps([cp])}" `) + quote_cp(cp);
}
function check_label_extension(cps) {
  if (cps.length >= 4 && cps[2] == HYPHEN && cps[3] == HYPHEN) {
    throw new Error("invalid label extension");
  }
}
function check_leading_underscore(cps) {
  const UNDERSCORE = 95;
  for (let i = cps.lastIndexOf(UNDERSCORE); i > 0; ) {
    if (cps[--i] !== UNDERSCORE) {
      throw new Error("underscore allowed only at start");
    }
  }
}
function check_fenced(cps) {
  let cp = cps[0];
  let prev = FENCED.get(cp);
  if (prev)
    throw error_placement(`leading ${prev}`);
  let n2 = cps.length;
  let last = -1;
  for (let i = 1; i < n2; i++) {
    cp = cps[i];
    let match = FENCED.get(cp);
    if (match) {
      if (last == i)
        throw error_placement(`${prev} + ${match}`);
      last = i + 1;
      prev = match;
    }
  }
  if (last == n2)
    throw error_placement(`trailing ${prev}`);
}
function is_combining_mark(cp) {
  return CM.has(cp);
}
function should_escape(cp) {
  return ESCAPE.has(cp);
}
function ens_normalize(name) {
  return flatten(ens_split(name));
}
function ens_split(name, preserve_emoji) {
  let offset = 0;
  return name.split(STOP_CH).map((label) => {
    let input = explode_cp(label);
    let info = {
      input,
      offset
      // codepoint, not substring!
    };
    offset += input.length + 1;
    let norm;
    try {
      let tokens = info.tokens = process(input, nfc);
      let token_count = tokens.length;
      let type;
      if (!token_count) {
        throw new Error(`empty label`);
      } else {
        let chars = tokens[0];
        let emoji = token_count > 1 || chars.is_emoji;
        if (!emoji && chars.every((cp) => cp < 128)) {
          norm = chars;
          check_leading_underscore(norm);
          check_label_extension(norm);
          type = "ASCII";
        } else {
          if (emoji) {
            info.emoji = true;
            chars = tokens.flatMap((x2) => x2.is_emoji ? [] : x2);
          }
          norm = tokens.flatMap((x2) => !preserve_emoji && x2.is_emoji ? filter_fe0f(x2) : x2);
          check_leading_underscore(norm);
          if (!chars.length) {
            type = "Emoji";
          } else {
            if (CM.has(norm[0]))
              throw error_placement("leading combining mark");
            for (let i = 1; i < token_count; i++) {
              let cps = tokens[i];
              if (!cps.is_emoji && CM.has(cps[0])) {
                throw error_placement(`emoji + combining mark: "${str_from_cps(tokens[i - 1])} + ${safe_str_from_cps([cps[0]])}"`);
              }
            }
            check_fenced(norm);
            let unique = [...new Set(chars)];
            let [g] = determine_group(unique);
            check_group(g, chars);
            check_whole(g, unique);
            type = g.N;
          }
        }
      }
      info.type = type;
    } catch (err) {
      info.error = err;
    }
    info.output = norm;
    return info;
  });
}
function check_whole(group, unique) {
  let maker;
  let shared = [];
  for (let cp of unique) {
    let whole = WHOLE_MAP.get(cp);
    if (whole === UNIQUE_PH)
      return;
    if (whole) {
      let set = whole.M.get(cp);
      maker = maker ? maker.filter((g) => set.has(g)) : [...set];
      if (!maker.length)
        return;
    } else {
      shared.push(cp);
    }
  }
  if (maker) {
    for (let g of maker) {
      if (shared.every((cp) => g.V.has(cp))) {
        throw new Error(`whole-script confusable: ${group.N}/${g.N}`);
      }
    }
  }
}
function determine_group(unique) {
  let groups = GROUPS;
  for (let cp of unique) {
    let gs = groups.filter((g) => g.V.has(cp));
    if (!gs.length) {
      if (groups === GROUPS) {
        throw error_disallowed(cp);
      } else {
        throw error_group_member(groups[0], cp);
      }
    }
    groups = gs;
    if (gs.length == 1)
      break;
  }
  return groups;
}
function flatten(split2) {
  return split2.map(({ input, error, output: output2 }) => {
    if (error) {
      let msg = error.message;
      throw new Error(split2.length == 1 ? msg : `Invalid label "${safe_str_from_cps(input)}": ${msg}`);
    }
    return str_from_cps(output2);
  }).join(STOP_CH);
}
function error_disallowed(cp) {
  return new Error(`disallowed character: ${quoted_cp(cp)}`);
}
function error_group_member(g, cp) {
  let quoted = quoted_cp(cp);
  let gg2 = GROUPS.find((g2) => g2.P.has(cp));
  if (gg2) {
    quoted = `${gg2.N} ${quoted}`;
  }
  return new Error(`illegal mixture: ${g.N} + ${quoted}`);
}
function error_placement(where) {
  return new Error(`illegal placement: ${where}`);
}
function check_group(g, cps) {
  let { V: V2, M: M2 } = g;
  for (let cp of cps) {
    if (!V2.has(cp)) {
      throw error_group_member(g, cp);
    }
  }
  if (M2 >= 0) {
    let decomposed = nfd(cps);
    for (let i = 1, e = decomposed.length; i < e; i++) {
      if (CM.has(cps[i])) {
        let j = i + 1;
        while (j < e && CM.has(cps[j]))
          j++;
        if (j - i > M2) {
          throw new Error(`too many combining marks: ${g.N} "${str_from_cps(cps.slice(i - 1, j))}" (${j - i}/${M2})`);
        }
        i = j;
      }
    }
  }
}
function process(input, nf2) {
  let ret = [];
  let chars = [];
  input = input.slice().reverse();
  while (input.length) {
    let emoji = consume_emoji_reversed(input);
    if (emoji) {
      if (chars.length) {
        ret.push(nf2(chars));
        chars = [];
      }
      ret.push(emoji);
    } else {
      let cp = input.pop();
      if (VALID.has(cp)) {
        chars.push(cp);
      } else {
        let cps = MAPPED.get(cp);
        if (cps) {
          chars.push(...cps);
        } else if (!IGNORED.has(cp)) {
          throw error_disallowed(cp);
        }
      }
    }
  }
  if (chars.length) {
    ret.push(nf2(chars));
  }
  return ret;
}
function filter_fe0f(cps) {
  return cps.filter((cp) => cp != FE0F);
}
function consume_emoji_reversed(cps, eaten) {
  let node = EMOJI_ROOT;
  let emoji;
  let saved;
  let stack = [];
  let pos = cps.length;
  if (eaten)
    eaten.length = 0;
  while (pos) {
    let cp = cps[--pos];
    node = node.B.find((x2) => x2.Q.has(cp));
    if (!node)
      break;
    if (node.S) {
      saved = cp;
    } else if (node.C) {
      if (cp === saved)
        break;
    }
    stack.push(cp);
    if (node.F) {
      stack.push(FE0F);
      if (pos > 0 && cps[pos - 1] == FE0F)
        pos--;
    }
    if (node.V) {
      emoji = conform_emoji_copy(stack, node);
      if (eaten)
        eaten.push(...cps.slice(pos).reverse());
      cps.length = pos;
    }
  }
  return emoji;
}
function conform_emoji_copy(cps, node) {
  let copy2 = Emoji.from(cps);
  if (node.V == 2)
    copy2.splice(1, 1);
  return copy2;
}
const Zeros = new Uint8Array(32);
Zeros.fill(0);
function checkComponent(comp) {
  assertArgument(comp.length !== 0, "invalid ENS name; empty component", "comp", comp);
  return comp;
}
function ensNameSplit(name) {
  const bytes2 = toUtf8Bytes(ensNormalize(name));
  const comps = [];
  if (name.length === 0) {
    return comps;
  }
  let last = 0;
  for (let i = 0; i < bytes2.length; i++) {
    const d = bytes2[i];
    if (d === 46) {
      comps.push(checkComponent(bytes2.slice(last, i)));
      last = i + 1;
    }
  }
  assertArgument(last < bytes2.length, "invalid ENS name; empty component", "name", name);
  comps.push(checkComponent(bytes2.slice(last)));
  return comps;
}
function ensNormalize(name) {
  try {
    return ens_normalize(name);
  } catch (error) {
    assertArgument(false, `invalid ENS name (${error.message})`, "name", name);
  }
}
function namehash(name) {
  assertArgument(typeof name === "string", "invalid ENS name; not a string", "name", name);
  let result = Zeros;
  const comps = ensNameSplit(name);
  while (comps.length) {
    result = keccak256(concat([result, keccak256(comps.pop())]));
  }
  return hexlify(result);
}
function dnsEncode(name) {
  return hexlify(concat(ensNameSplit(name).map((comp) => {
    if (comp.length > 63) {
      throw new Error("invalid DNS encoded entry; length exceeds 63 bytes");
    }
    const bytes2 = new Uint8Array(comp.length + 1);
    bytes2.set(comp, 1);
    bytes2[0] = bytes2.length - 1;
    return bytes2;
  }))) + "00";
}
function accessSetify(addr, storageKeys) {
  return {
    address: getAddress(addr),
    storageKeys: storageKeys.map((storageKey, index2) => {
      assertArgument(isHexString(storageKey, 32), "invalid slot", `storageKeys[${index2}]`, storageKey);
      return storageKey.toLowerCase();
    })
  };
}
function accessListify(value) {
  if (Array.isArray(value)) {
    return value.map((set, index2) => {
      if (Array.isArray(set)) {
        assertArgument(set.length === 2, "invalid slot set", `value[${index2}]`, set);
        return accessSetify(set[0], set[1]);
      }
      assertArgument(set != null && typeof set === "object", "invalid address-slot set", "value", value);
      return accessSetify(set.address, set.storageKeys);
    });
  }
  assertArgument(value != null && typeof value === "object", "invalid access list", "value", value);
  const result = Object.keys(value).map((addr) => {
    const storageKeys = value[addr].reduce((accum, storageKey) => {
      accum[storageKey] = true;
      return accum;
    }, {});
    return accessSetify(addr, Object.keys(storageKeys).sort());
  });
  result.sort((a, b2) => a.address.localeCompare(b2.address));
  return result;
}
function computeAddress(key) {
  let pubkey;
  if (typeof key === "string") {
    pubkey = SigningKey.computePublicKey(key, false);
  } else {
    pubkey = key.publicKey;
  }
  return getAddress(keccak256("0x" + pubkey.substring(4)).substring(26));
}
function recoverAddress(digest, signature) {
  return computeAddress(SigningKey.recoverPublicKey(digest, signature));
}
const BN_0$4 = BigInt(0);
const BN_2$1 = BigInt(2);
const BN_27 = BigInt(27);
const BN_28 = BigInt(28);
const BN_35 = BigInt(35);
const BN_MAX_UINT = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function handleAddress(value) {
  if (value === "0x") {
    return null;
  }
  return getAddress(value);
}
function handleAccessList(value, param) {
  try {
    return accessListify(value);
  } catch (error) {
    assertArgument(false, error.message, param, value);
  }
}
function handleNumber(_value2, param) {
  if (_value2 === "0x") {
    return 0;
  }
  return getNumber(_value2, param);
}
function handleUint(_value2, param) {
  if (_value2 === "0x") {
    return BN_0$4;
  }
  const value = getBigInt(_value2, param);
  assertArgument(value <= BN_MAX_UINT, "value exceeds uint size", param, value);
  return value;
}
function formatNumber(_value2, name) {
  const value = getBigInt(_value2, "value");
  const result = toBeArray(value);
  assertArgument(result.length <= 32, `value too large`, `tx.${name}`, value);
  return result;
}
function formatAccessList(value) {
  return accessListify(value).map((set) => [set.address, set.storageKeys]);
}
function _parseLegacy(data) {
  const fields = decodeRlp(data);
  assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 6), "invalid field count for legacy transaction", "data", data);
  const tx = {
    type: 0,
    nonce: handleNumber(fields[0], "nonce"),
    gasPrice: handleUint(fields[1], "gasPrice"),
    gasLimit: handleUint(fields[2], "gasLimit"),
    to: handleAddress(fields[3]),
    value: handleUint(fields[4], "value"),
    data: hexlify(fields[5]),
    chainId: BN_0$4
  };
  if (fields.length === 6) {
    return tx;
  }
  const v2 = handleUint(fields[6], "v");
  const r2 = handleUint(fields[7], "r");
  const s = handleUint(fields[8], "s");
  if (r2 === BN_0$4 && s === BN_0$4) {
    tx.chainId = v2;
  } else {
    let chainId = (v2 - BN_35) / BN_2$1;
    if (chainId < BN_0$4) {
      chainId = BN_0$4;
    }
    tx.chainId = chainId;
    assertArgument(chainId !== BN_0$4 || (v2 === BN_27 || v2 === BN_28), "non-canonical legacy v", "v", fields[6]);
    tx.signature = Signature2.from({
      r: zeroPadValue(fields[7], 32),
      s: zeroPadValue(fields[8], 32),
      v: v2
    });
    tx.hash = keccak256(data);
  }
  return tx;
}
function _serializeLegacy(tx, sig) {
  const fields = [
    formatNumber(tx.nonce || 0, "nonce"),
    formatNumber(tx.gasPrice || 0, "gasPrice"),
    formatNumber(tx.gasLimit || 0, "gasLimit"),
    tx.to != null ? getAddress(tx.to) : "0x",
    formatNumber(tx.value || 0, "value"),
    tx.data || "0x"
  ];
  let chainId = BN_0$4;
  if (tx.chainId != null) {
    chainId = getBigInt(tx.chainId, "tx.chainId");
    assertArgument(!sig || sig.networkV == null || sig.legacyChainId === chainId, "tx.chainId/sig.v mismatch", "sig", sig);
  } else if (sig) {
    const legacy = sig.legacyChainId;
    if (legacy != null) {
      chainId = legacy;
    }
  }
  if (!sig) {
    if (chainId !== BN_0$4) {
      fields.push(toBeArray(chainId));
      fields.push("0x");
      fields.push("0x");
    }
    return encodeRlp(fields);
  }
  let v2 = BigInt(27 + sig.yParity);
  if (chainId !== BN_0$4) {
    v2 = Signature2.getChainIdV(chainId, sig.v);
  } else if (BigInt(sig.v) !== v2) {
    assertArgument(false, "tx.chainId/sig.v mismatch", "sig", sig);
  }
  fields.push(toBeArray(v2));
  fields.push(toBeArray(sig.r));
  fields.push(toBeArray(sig.s));
  return encodeRlp(fields);
}
function _parseEipSignature(tx, fields, serialize) {
  let yParity;
  try {
    yParity = handleNumber(fields[0], "yParity");
    if (yParity !== 0 && yParity !== 1) {
      throw new Error("bad yParity");
    }
  } catch (error) {
    assertArgument(false, "invalid yParity", "yParity", fields[0]);
  }
  const r2 = zeroPadValue(fields[1], 32);
  const s = zeroPadValue(fields[2], 32);
  const signature = Signature2.from({ r: r2, s, yParity });
  tx.signature = signature;
}
function _parseEip1559(data) {
  const fields = decodeRlp(getBytes(data).slice(1));
  assertArgument(Array.isArray(fields) && (fields.length === 9 || fields.length === 12), "invalid field count for transaction type: 2", "data", hexlify(data));
  const maxPriorityFeePerGas = handleUint(fields[2], "maxPriorityFeePerGas");
  const maxFeePerGas = handleUint(fields[3], "maxFeePerGas");
  const tx = {
    type: 2,
    chainId: handleUint(fields[0], "chainId"),
    nonce: handleNumber(fields[1], "nonce"),
    maxPriorityFeePerGas,
    maxFeePerGas,
    gasPrice: null,
    gasLimit: handleUint(fields[4], "gasLimit"),
    to: handleAddress(fields[5]),
    value: handleUint(fields[6], "value"),
    data: hexlify(fields[7]),
    accessList: handleAccessList(fields[8], "accessList")
  };
  if (fields.length === 9) {
    return tx;
  }
  tx.hash = keccak256(data);
  _parseEipSignature(tx, fields.slice(9));
  return tx;
}
function _serializeEip1559(tx, sig) {
  const fields = [
    formatNumber(tx.chainId || 0, "chainId"),
    formatNumber(tx.nonce || 0, "nonce"),
    formatNumber(tx.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    formatNumber(tx.maxFeePerGas || 0, "maxFeePerGas"),
    formatNumber(tx.gasLimit || 0, "gasLimit"),
    tx.to != null ? getAddress(tx.to) : "0x",
    formatNumber(tx.value || 0, "value"),
    tx.data || "0x",
    formatAccessList(tx.accessList || [])
  ];
  if (sig) {
    fields.push(formatNumber(sig.yParity, "yParity"));
    fields.push(toBeArray(sig.r));
    fields.push(toBeArray(sig.s));
  }
  return concat(["0x02", encodeRlp(fields)]);
}
function _parseEip2930(data) {
  const fields = decodeRlp(getBytes(data).slice(1));
  assertArgument(Array.isArray(fields) && (fields.length === 8 || fields.length === 11), "invalid field count for transaction type: 1", "data", hexlify(data));
  const tx = {
    type: 1,
    chainId: handleUint(fields[0], "chainId"),
    nonce: handleNumber(fields[1], "nonce"),
    gasPrice: handleUint(fields[2], "gasPrice"),
    gasLimit: handleUint(fields[3], "gasLimit"),
    to: handleAddress(fields[4]),
    value: handleUint(fields[5], "value"),
    data: hexlify(fields[6]),
    accessList: handleAccessList(fields[7], "accessList")
  };
  if (fields.length === 8) {
    return tx;
  }
  tx.hash = keccak256(data);
  _parseEipSignature(tx, fields.slice(8));
  return tx;
}
function _serializeEip2930(tx, sig) {
  const fields = [
    formatNumber(tx.chainId || 0, "chainId"),
    formatNumber(tx.nonce || 0, "nonce"),
    formatNumber(tx.gasPrice || 0, "gasPrice"),
    formatNumber(tx.gasLimit || 0, "gasLimit"),
    tx.to != null ? getAddress(tx.to) : "0x",
    formatNumber(tx.value || 0, "value"),
    tx.data || "0x",
    formatAccessList(tx.accessList || [])
  ];
  if (sig) {
    fields.push(formatNumber(sig.yParity, "recoveryParam"));
    fields.push(toBeArray(sig.r));
    fields.push(toBeArray(sig.s));
  }
  return concat(["0x01", encodeRlp(fields)]);
}
const _Transaction = class {
  constructor() {
    __privateAdd(this, _type, void 0);
    __privateAdd(this, _to, void 0);
    __privateAdd(this, _data3, void 0);
    __privateAdd(this, _nonce, void 0);
    __privateAdd(this, _gasLimit, void 0);
    __privateAdd(this, _gasPrice, void 0);
    __privateAdd(this, _maxPriorityFeePerGas, void 0);
    __privateAdd(this, _maxFeePerGas, void 0);
    __privateAdd(this, _value, void 0);
    __privateAdd(this, _chainId, void 0);
    __privateAdd(this, _sig, void 0);
    __privateAdd(this, _accessList, void 0);
    __privateSet(this, _type, null);
    __privateSet(this, _to, null);
    __privateSet(this, _nonce, 0);
    __privateSet(this, _gasLimit, BigInt(0));
    __privateSet(this, _gasPrice, null);
    __privateSet(this, _maxPriorityFeePerGas, null);
    __privateSet(this, _maxFeePerGas, null);
    __privateSet(this, _data3, "0x");
    __privateSet(this, _value, BigInt(0));
    __privateSet(this, _chainId, BigInt(0));
    __privateSet(this, _sig, null);
    __privateSet(this, _accessList, null);
  }
  get type() {
    return __privateGet(this, _type);
  }
  set type(value) {
    switch (value) {
      case null:
        __privateSet(this, _type, null);
        break;
      case 0:
      case "legacy":
        __privateSet(this, _type, 0);
        break;
      case 1:
      case "berlin":
      case "eip-2930":
        __privateSet(this, _type, 1);
        break;
      case 2:
      case "london":
      case "eip-1559":
        __privateSet(this, _type, 2);
        break;
      default:
        assertArgument(false, "unsupported transaction type", "type", value);
    }
  }
  get typeName() {
    switch (this.type) {
      case 0:
        return "legacy";
      case 1:
        return "eip-2930";
      case 2:
        return "eip-1559";
    }
    return null;
  }
  get to() {
    return __privateGet(this, _to);
  }
  set to(value) {
    __privateSet(this, _to, value == null ? null : getAddress(value));
  }
  get nonce() {
    return __privateGet(this, _nonce);
  }
  set nonce(value) {
    __privateSet(this, _nonce, getNumber(value, "value"));
  }
  get gasLimit() {
    return __privateGet(this, _gasLimit);
  }
  set gasLimit(value) {
    __privateSet(this, _gasLimit, getBigInt(value));
  }
  get gasPrice() {
    const value = __privateGet(this, _gasPrice);
    if (value == null && (this.type === 0 || this.type === 1)) {
      return BN_0$4;
    }
    return value;
  }
  set gasPrice(value) {
    __privateSet(this, _gasPrice, value == null ? null : getBigInt(value, "gasPrice"));
  }
  get maxPriorityFeePerGas() {
    const value = __privateGet(this, _maxPriorityFeePerGas);
    if (value == null) {
      if (this.type === 2) {
        return BN_0$4;
      }
      return null;
    }
    return value;
  }
  set maxPriorityFeePerGas(value) {
    __privateSet(this, _maxPriorityFeePerGas, value == null ? null : getBigInt(value, "maxPriorityFeePerGas"));
  }
  get maxFeePerGas() {
    const value = __privateGet(this, _maxFeePerGas);
    if (value == null) {
      if (this.type === 2) {
        return BN_0$4;
      }
      return null;
    }
    return value;
  }
  set maxFeePerGas(value) {
    __privateSet(this, _maxFeePerGas, value == null ? null : getBigInt(value, "maxFeePerGas"));
  }
  get data() {
    return __privateGet(this, _data3);
  }
  set data(value) {
    __privateSet(this, _data3, hexlify(value));
  }
  get value() {
    return __privateGet(this, _value);
  }
  set value(value) {
    __privateSet(this, _value, getBigInt(value, "value"));
  }
  get chainId() {
    return __privateGet(this, _chainId);
  }
  set chainId(value) {
    __privateSet(this, _chainId, getBigInt(value));
  }
  get signature() {
    return __privateGet(this, _sig) || null;
  }
  set signature(value) {
    __privateSet(this, _sig, value == null ? null : Signature2.from(value));
  }
  get accessList() {
    const value = __privateGet(this, _accessList) || null;
    if (value == null) {
      if (this.type === 1 || this.type === 2) {
        return [];
      }
      return null;
    }
    return value;
  }
  set accessList(value) {
    __privateSet(this, _accessList, value == null ? null : accessListify(value));
  }
  get hash() {
    if (this.signature == null) {
      return null;
    }
    return keccak256(this.serialized);
  }
  get unsignedHash() {
    return keccak256(this.unsignedSerialized);
  }
  get from() {
    if (this.signature == null) {
      return null;
    }
    return recoverAddress(this.unsignedHash, this.signature);
  }
  get fromPublicKey() {
    if (this.signature == null) {
      return null;
    }
    return SigningKey.recoverPublicKey(this.unsignedHash, this.signature);
  }
  isSigned() {
    return this.signature != null;
  }
  get serialized() {
    assert$1(this.signature != null, "cannot serialize unsigned transaction; maybe you meant .unsignedSerialized", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
    switch (this.inferType()) {
      case 0:
        return _serializeLegacy(this, this.signature);
      case 1:
        return _serializeEip2930(this, this.signature);
      case 2:
        return _serializeEip1559(this, this.signature);
    }
    assert$1(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".serialized" });
  }
  get unsignedSerialized() {
    switch (this.inferType()) {
      case 0:
        return _serializeLegacy(this);
      case 1:
        return _serializeEip2930(this);
      case 2:
        return _serializeEip1559(this);
    }
    assert$1(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: ".unsignedSerialized" });
  }
  inferType() {
    return this.inferTypes().pop();
  }
  inferTypes() {
    const hasGasPrice = this.gasPrice != null;
    const hasFee = this.maxFeePerGas != null || this.maxPriorityFeePerGas != null;
    const hasAccessList = this.accessList != null;
    if (this.maxFeePerGas != null && this.maxPriorityFeePerGas != null) {
      assert$1(this.maxFeePerGas >= this.maxPriorityFeePerGas, "priorityFee cannot be more than maxFee", "BAD_DATA", { value: this });
    }
    assert$1(!hasFee || this.type !== 0 && this.type !== 1, "transaction type cannot have maxFeePerGas or maxPriorityFeePerGas", "BAD_DATA", { value: this });
    assert$1(this.type !== 0 || !hasAccessList, "legacy transaction cannot have accessList", "BAD_DATA", { value: this });
    const types = [];
    if (this.type != null) {
      types.push(this.type);
    } else {
      if (hasFee) {
        types.push(2);
      } else if (hasGasPrice) {
        types.push(1);
        if (!hasAccessList) {
          types.push(0);
        }
      } else if (hasAccessList) {
        types.push(1);
        types.push(2);
      } else {
        types.push(0);
        types.push(1);
        types.push(2);
      }
    }
    types.sort();
    return types;
  }
  isLegacy() {
    return this.type === 0;
  }
  isBerlin() {
    return this.type === 1;
  }
  isLondon() {
    return this.type === 2;
  }
  clone() {
    return _Transaction.from(this);
  }
  toJSON() {
    const s = (v2) => {
      if (v2 == null) {
        return null;
      }
      return v2.toString();
    };
    return {
      type: this.type,
      to: this.to,
      //            from: this.from,
      data: this.data,
      nonce: this.nonce,
      gasLimit: s(this.gasLimit),
      gasPrice: s(this.gasPrice),
      maxPriorityFeePerGas: s(this.maxPriorityFeePerGas),
      maxFeePerGas: s(this.maxFeePerGas),
      value: s(this.value),
      chainId: s(this.chainId),
      sig: this.signature ? this.signature.toJSON() : null,
      accessList: this.accessList
    };
  }
  static from(tx) {
    if (tx == null) {
      return new _Transaction();
    }
    if (typeof tx === "string") {
      const payload = getBytes(tx);
      if (payload[0] >= 127) {
        return _Transaction.from(_parseLegacy(payload));
      }
      switch (payload[0]) {
        case 1:
          return _Transaction.from(_parseEip2930(payload));
        case 2:
          return _Transaction.from(_parseEip1559(payload));
      }
      assert$1(false, "unsupported transaction type", "UNSUPPORTED_OPERATION", { operation: "from" });
    }
    const result = new _Transaction();
    if (tx.type != null) {
      result.type = tx.type;
    }
    if (tx.to != null) {
      result.to = tx.to;
    }
    if (tx.nonce != null) {
      result.nonce = tx.nonce;
    }
    if (tx.gasLimit != null) {
      result.gasLimit = tx.gasLimit;
    }
    if (tx.gasPrice != null) {
      result.gasPrice = tx.gasPrice;
    }
    if (tx.maxPriorityFeePerGas != null) {
      result.maxPriorityFeePerGas = tx.maxPriorityFeePerGas;
    }
    if (tx.maxFeePerGas != null) {
      result.maxFeePerGas = tx.maxFeePerGas;
    }
    if (tx.data != null) {
      result.data = tx.data;
    }
    if (tx.value != null) {
      result.value = tx.value;
    }
    if (tx.chainId != null) {
      result.chainId = tx.chainId;
    }
    if (tx.signature != null) {
      result.signature = Signature2.from(tx.signature);
    }
    if (tx.accessList != null) {
      result.accessList = tx.accessList;
    }
    if (tx.hash != null) {
      assertArgument(result.isSigned(), "unsigned transaction cannot define hash", "tx", tx);
      assertArgument(result.hash === tx.hash, "hash mismatch", "tx", tx);
    }
    if (tx.from != null) {
      assertArgument(result.isSigned(), "unsigned transaction cannot define from", "tx", tx);
      assertArgument(result.from.toLowerCase() === (tx.from || "").toLowerCase(), "from mismatch", "tx", tx);
    }
    return result;
  }
};
let Transaction = _Transaction;
_type = new WeakMap();
_to = new WeakMap();
_data3 = new WeakMap();
_nonce = new WeakMap();
_gasLimit = new WeakMap();
_gasPrice = new WeakMap();
_maxPriorityFeePerGas = new WeakMap();
_maxFeePerGas = new WeakMap();
_value = new WeakMap();
_chainId = new WeakMap();
_sig = new WeakMap();
_accessList = new WeakMap();
const padding = new Uint8Array(32);
padding.fill(0);
const BN__1 = BigInt(-1);
const BN_0$3 = BigInt(0);
const BN_1 = BigInt(1);
const BN_MAX_UINT256 = BigInt("0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
function hexPadRight(value) {
  const bytes2 = getBytes(value);
  const padOffset = bytes2.length % 32;
  if (padOffset) {
    return concat([bytes2, padding.slice(padOffset)]);
  }
  return hexlify(bytes2);
}
const hexTrue = toBeHex(BN_1, 32);
const hexFalse = toBeHex(BN_0$3, 32);
const domainFieldTypes = {
  name: "string",
  version: "string",
  chainId: "uint256",
  verifyingContract: "address",
  salt: "bytes32"
};
const domainFieldNames = [
  "name",
  "version",
  "chainId",
  "verifyingContract",
  "salt"
];
function checkString(key) {
  return function(value) {
    assertArgument(typeof value === "string", `invalid domain value for ${JSON.stringify(key)}`, `domain.${key}`, value);
    return value;
  };
}
const domainChecks = {
  name: checkString("name"),
  version: checkString("version"),
  chainId: function(value) {
    return getBigInt(value, "domain.chainId");
  },
  verifyingContract: function(value) {
    try {
      return getAddress(value).toLowerCase();
    } catch (error) {
    }
    assertArgument(false, `invalid domain value "verifyingContract"`, "domain.verifyingContract", value);
  },
  salt: function(value) {
    const bytes2 = getBytes(value, "domain.salt");
    assertArgument(bytes2.length === 32, `invalid domain value "salt"`, "domain.salt", value);
    return hexlify(bytes2);
  }
};
function getBaseEncoder(type) {
  {
    const match = type.match(/^(u?)int(\d*)$/);
    if (match) {
      const signed2 = match[1] === "";
      const width = parseInt(match[2] || "256");
      assertArgument(width % 8 === 0 && width !== 0 && width <= 256 && (match[2] == null || match[2] === String(width)), "invalid numeric width", "type", type);
      const boundsUpper = mask(BN_MAX_UINT256, signed2 ? width - 1 : width);
      const boundsLower = signed2 ? (boundsUpper + BN_1) * BN__1 : BN_0$3;
      return function(_value2) {
        const value = getBigInt(_value2, "value");
        assertArgument(value >= boundsLower && value <= boundsUpper, `value out-of-bounds for ${type}`, "value", value);
        return toBeHex(toTwos(value, 256), 32);
      };
    }
  }
  {
    const match = type.match(/^bytes(\d+)$/);
    if (match) {
      const width = parseInt(match[1]);
      assertArgument(width !== 0 && width <= 32 && match[1] === String(width), "invalid bytes width", "type", type);
      return function(value) {
        const bytes2 = getBytes(value);
        assertArgument(bytes2.length === width, `invalid length for ${type}`, "value", value);
        return hexPadRight(value);
      };
    }
  }
  switch (type) {
    case "address":
      return function(value) {
        return zeroPadValue(getAddress(value), 32);
      };
    case "bool":
      return function(value) {
        return !value ? hexFalse : hexTrue;
      };
    case "bytes":
      return function(value) {
        return keccak256(value);
      };
    case "string":
      return function(value) {
        return id(value);
      };
  }
  return null;
}
function encodeType(name, fields) {
  return `${name}(${fields.map(({ name: name2, type }) => type + " " + name2).join(",")})`;
}
const _TypedDataEncoder = class {
  constructor(types) {
    __privateAdd(this, _getEncoder);
    __publicField(this, "primaryType");
    __privateAdd(this, _types, void 0);
    __privateAdd(this, _fullTypes, void 0);
    __privateAdd(this, _encoderCache, void 0);
    __privateSet(this, _types, JSON.stringify(types));
    __privateSet(this, _fullTypes, /* @__PURE__ */ new Map());
    __privateSet(this, _encoderCache, /* @__PURE__ */ new Map());
    const links = /* @__PURE__ */ new Map();
    const parents = /* @__PURE__ */ new Map();
    const subtypes = /* @__PURE__ */ new Map();
    Object.keys(types).forEach((type) => {
      links.set(type, /* @__PURE__ */ new Set());
      parents.set(type, []);
      subtypes.set(type, /* @__PURE__ */ new Set());
    });
    for (const name in types) {
      const uniqueNames = /* @__PURE__ */ new Set();
      for (const field of types[name]) {
        assertArgument(!uniqueNames.has(field.name), `duplicate variable name ${JSON.stringify(field.name)} in ${JSON.stringify(name)}`, "types", types);
        uniqueNames.add(field.name);
        const baseType = field.type.match(/^([^\x5b]*)(\x5b|$)/)[1] || null;
        assertArgument(baseType !== name, `circular type reference to ${JSON.stringify(baseType)}`, "types", types);
        const encoder = getBaseEncoder(baseType);
        if (encoder) {
          continue;
        }
        assertArgument(parents.has(baseType), `unknown type ${JSON.stringify(baseType)}`, "types", types);
        parents.get(baseType).push(name);
        links.get(name).add(baseType);
      }
    }
    const primaryTypes = Array.from(parents.keys()).filter((n2) => parents.get(n2).length === 0);
    assertArgument(primaryTypes.length !== 0, "missing primary type", "types", types);
    assertArgument(primaryTypes.length === 1, `ambiguous primary types or unused types: ${primaryTypes.map((t2) => JSON.stringify(t2)).join(", ")}`, "types", types);
    defineProperties(this, { primaryType: primaryTypes[0] });
    function checkCircular(type, found) {
      assertArgument(!found.has(type), `circular type reference to ${JSON.stringify(type)}`, "types", types);
      found.add(type);
      for (const child of links.get(type)) {
        if (!parents.has(child)) {
          continue;
        }
        checkCircular(child, found);
        for (const subtype of found) {
          subtypes.get(subtype).add(child);
        }
      }
      found.delete(type);
    }
    checkCircular(this.primaryType, /* @__PURE__ */ new Set());
    for (const [name, set] of subtypes) {
      const st = Array.from(set);
      st.sort();
      __privateGet(this, _fullTypes).set(name, encodeType(name, types[name]) + st.map((t2) => encodeType(t2, types[t2])).join(""));
    }
  }
  get types() {
    return JSON.parse(__privateGet(this, _types));
  }
  getEncoder(type) {
    let encoder = __privateGet(this, _encoderCache).get(type);
    if (!encoder) {
      encoder = __privateMethod(this, _getEncoder, getEncoder_fn).call(this, type);
      __privateGet(this, _encoderCache).set(type, encoder);
    }
    return encoder;
  }
  encodeType(name) {
    const result = __privateGet(this, _fullTypes).get(name);
    assertArgument(result, `unknown type: ${JSON.stringify(name)}`, "name", name);
    return result;
  }
  encodeData(type, value) {
    return this.getEncoder(type)(value);
  }
  hashStruct(name, value) {
    return keccak256(this.encodeData(name, value));
  }
  encode(value) {
    return this.encodeData(this.primaryType, value);
  }
  hash(value) {
    return this.hashStruct(this.primaryType, value);
  }
  _visit(type, value, callback) {
    {
      const encoder = getBaseEncoder(type);
      if (encoder) {
        return callback(type, value);
      }
    }
    const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (match) {
      assertArgument(!match[3] || parseInt(match[3]) === value.length, `array length mismatch; expected length ${parseInt(match[3])}`, "value", value);
      return value.map((v2) => this._visit(match[1], v2, callback));
    }
    const fields = this.types[type];
    if (fields) {
      return fields.reduce((accum, { name, type: type2 }) => {
        accum[name] = this._visit(type2, value[name], callback);
        return accum;
      }, {});
    }
    assertArgument(false, `unknown type: ${type}`, "type", type);
  }
  visit(value, callback) {
    return this._visit(this.primaryType, value, callback);
  }
  static from(types) {
    return new _TypedDataEncoder(types);
  }
  static getPrimaryType(types) {
    return _TypedDataEncoder.from(types).primaryType;
  }
  static hashStruct(name, types, value) {
    return _TypedDataEncoder.from(types).hashStruct(name, value);
  }
  static hashDomain(domain) {
    const domainFields = [];
    for (const name in domain) {
      const type = domainFieldTypes[name];
      assertArgument(type, `invalid typed-data domain key: ${JSON.stringify(name)}`, "domain", domain);
      domainFields.push({ name, type });
    }
    domainFields.sort((a, b2) => {
      return domainFieldNames.indexOf(a.name) - domainFieldNames.indexOf(b2.name);
    });
    return _TypedDataEncoder.hashStruct("EIP712Domain", { EIP712Domain: domainFields }, domain);
  }
  static encode(domain, types, value) {
    return concat([
      "0x1901",
      _TypedDataEncoder.hashDomain(domain),
      _TypedDataEncoder.from(types).hash(value)
    ]);
  }
  static hash(domain, types, value) {
    return keccak256(_TypedDataEncoder.encode(domain, types, value));
  }
  // Replaces all address types with ENS names with their looked up address
  static async resolveNames(domain, types, value, resolveName) {
    domain = Object.assign({}, domain);
    const ensCache = {};
    if (domain.verifyingContract && !isHexString(domain.verifyingContract, 20)) {
      ensCache[domain.verifyingContract] = "0x";
    }
    const encoder = _TypedDataEncoder.from(types);
    encoder.visit(value, (type, value2) => {
      if (type === "address" && !isHexString(value2, 20)) {
        ensCache[value2] = "0x";
      }
      return value2;
    });
    for (const name in ensCache) {
      ensCache[name] = await resolveName(name);
    }
    if (domain.verifyingContract && ensCache[domain.verifyingContract]) {
      domain.verifyingContract = ensCache[domain.verifyingContract];
    }
    value = encoder.visit(value, (type, value2) => {
      if (type === "address" && ensCache[value2]) {
        return ensCache[value2];
      }
      return value2;
    });
    return { domain, value };
  }
  static getPayload(domain, types, value) {
    _TypedDataEncoder.hashDomain(domain);
    const domainValues = {};
    const domainTypes = [];
    domainFieldNames.forEach((name) => {
      const value2 = domain[name];
      if (value2 == null) {
        return;
      }
      domainValues[name] = domainChecks[name](value2);
      domainTypes.push({ name, type: domainFieldTypes[name] });
    });
    const encoder = _TypedDataEncoder.from(types);
    const typesWithDomain = Object.assign({}, types);
    assertArgument(typesWithDomain.EIP712Domain == null, "types must not contain EIP712Domain type", "types.EIP712Domain", types);
    typesWithDomain.EIP712Domain = domainTypes;
    encoder.encode(value);
    return {
      types: typesWithDomain,
      domain: domainValues,
      primaryType: encoder.primaryType,
      message: encoder.visit(value, (type, value2) => {
        if (type.match(/^bytes(\d*)/)) {
          return hexlify(getBytes(value2));
        }
        if (type.match(/^u?int/)) {
          return getBigInt(value2).toString();
        }
        switch (type) {
          case "address":
            return value2.toLowerCase();
          case "bool":
            return !!value2;
          case "string":
            assertArgument(typeof value2 === "string", "invalid string", "value", value2);
            return value2;
        }
        assertArgument(false, "unsupported type", "type", type);
      })
    };
  }
};
let TypedDataEncoder = _TypedDataEncoder;
_types = new WeakMap();
_fullTypes = new WeakMap();
_encoderCache = new WeakMap();
_getEncoder = new WeakSet();
getEncoder_fn = function(type) {
  {
    const encoder = getBaseEncoder(type);
    if (encoder) {
      return encoder;
    }
  }
  const match = type.match(/^(.*)(\x5b(\d*)\x5d)$/);
  if (match) {
    const subtype = match[1];
    const subEncoder = this.getEncoder(subtype);
    return (value) => {
      assertArgument(!match[3] || parseInt(match[3]) === value.length, `array length mismatch; expected length ${parseInt(match[3])}`, "value", value);
      let result = value.map(subEncoder);
      if (__privateGet(this, _fullTypes).has(subtype)) {
        result = result.map(keccak256);
      }
      return keccak256(concat(result));
    };
  }
  const fields = this.types[type];
  if (fields) {
    const encodedType = id(__privateGet(this, _fullTypes).get(type));
    return (value) => {
      const values = fields.map(({ name, type: type2 }) => {
        const result = this.getEncoder(type2)(value[name]);
        if (__privateGet(this, _fullTypes).has(type2)) {
          return keccak256(result);
        }
        return result;
      });
      values.unshift(encodedType);
      return concat(values);
    };
  }
  assertArgument(false, `unknown type: ${type}`, "type", type);
};
function setify(items) {
  const result = /* @__PURE__ */ new Set();
  items.forEach((k2) => result.add(k2));
  return Object.freeze(result);
}
const _kwVisib = "constant external internal payable private public pure view";
const KwVisib = setify(_kwVisib.split(" "));
const _kwTypes = "constructor error event fallback function receive struct";
const KwTypes = setify(_kwTypes.split(" "));
const _kwModifiers = "calldata memory storage payable indexed";
const KwModifiers = setify(_kwModifiers.split(" "));
const _kwOther = "tuple returns";
const _keywords = [_kwTypes, _kwModifiers, _kwOther, _kwVisib].join(" ");
const Keywords = setify(_keywords.split(" "));
const SimpleTokens = {
  "(": "OPEN_PAREN",
  ")": "CLOSE_PAREN",
  "[": "OPEN_BRACKET",
  "]": "CLOSE_BRACKET",
  ",": "COMMA",
  "@": "AT"
};
const regexWhitespacePrefix = new RegExp("^(\\s*)");
const regexNumberPrefix = new RegExp("^([0-9]+)");
const regexIdPrefix = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)");
const regexId = new RegExp("^([a-zA-Z$_][a-zA-Z0-9$_]*)$");
const regexType = new RegExp("^(address|bool|bytes([0-9]*)|string|u?int([0-9]*))$");
const _TokenString = class {
  constructor(tokens) {
    __privateAdd(this, _subTokenString);
    __privateAdd(this, _offset2, void 0);
    __privateAdd(this, _tokens, void 0);
    __privateSet(this, _offset2, 0);
    __privateSet(this, _tokens, tokens.slice());
  }
  get offset() {
    return __privateGet(this, _offset2);
  }
  get length() {
    return __privateGet(this, _tokens).length - __privateGet(this, _offset2);
  }
  clone() {
    return new _TokenString(__privateGet(this, _tokens));
  }
  reset() {
    __privateSet(this, _offset2, 0);
  }
  // Pops and returns the value of the next token, if it is a keyword in allowed; throws if out of tokens
  popKeyword(allowed) {
    const top = this.peek();
    if (top.type !== "KEYWORD" || !allowed.has(top.text)) {
      throw new Error(`expected keyword ${top.text}`);
    }
    return this.pop().text;
  }
  // Pops and returns the value of the next token if it is `type`; throws if out of tokens
  popType(type) {
    if (this.peek().type !== type) {
      throw new Error(`expected ${type}; got ${JSON.stringify(this.peek())}`);
    }
    return this.pop().text;
  }
  // Pops and returns a "(" TOKENS ")"
  popParen() {
    const top = this.peek();
    if (top.type !== "OPEN_PAREN") {
      throw new Error("bad start");
    }
    const result = __privateMethod(this, _subTokenString, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, top.match + 1);
    __privateSet(this, _offset2, top.match + 1);
    return result;
  }
  // Pops and returns the items within "(" ITEM1 "," ITEM2 "," ... ")"
  popParams() {
    const top = this.peek();
    if (top.type !== "OPEN_PAREN") {
      throw new Error("bad start");
    }
    const result = [];
    while (__privateGet(this, _offset2) < top.match - 1) {
      const link = this.peek().linkNext;
      result.push(__privateMethod(this, _subTokenString, subTokenString_fn).call(this, __privateGet(this, _offset2) + 1, link));
      __privateSet(this, _offset2, link);
    }
    __privateSet(this, _offset2, top.match + 1);
    return result;
  }
  // Returns the top Token, throwing if out of tokens
  peek() {
    if (__privateGet(this, _offset2) >= __privateGet(this, _tokens).length) {
      throw new Error("out-of-bounds");
    }
    return __privateGet(this, _tokens)[__privateGet(this, _offset2)];
  }
  // Returns the next value, if it is a keyword in `allowed`
  peekKeyword(allowed) {
    const top = this.peekType("KEYWORD");
    return top != null && allowed.has(top) ? top : null;
  }
  // Returns the value of the next token if it is `type`
  peekType(type) {
    if (this.length === 0) {
      return null;
    }
    const top = this.peek();
    return top.type === type ? top.text : null;
  }
  // Returns the next token; throws if out of tokens
  pop() {
    const result = this.peek();
    __privateWrapper(this, _offset2)._++;
    return result;
  }
  toString() {
    const tokens = [];
    for (let i = __privateGet(this, _offset2); i < __privateGet(this, _tokens).length; i++) {
      const token = __privateGet(this, _tokens)[i];
      tokens.push(`${token.type}:${token.text}`);
    }
    return `<TokenString ${tokens.join(" ")}>`;
  }
};
let TokenString = _TokenString;
_offset2 = new WeakMap();
_tokens = new WeakMap();
_subTokenString = new WeakSet();
subTokenString_fn = function(from = 0, to = 0) {
  return new _TokenString(__privateGet(this, _tokens).slice(from, to).map((t2) => {
    return Object.freeze(Object.assign({}, t2, {
      match: t2.match - from,
      linkBack: t2.linkBack - from,
      linkNext: t2.linkNext - from
    }));
  }));
};
function lex(text) {
  const tokens = [];
  const throwError2 = (message) => {
    const token = offset < text.length ? JSON.stringify(text[offset]) : "$EOI";
    throw new Error(`invalid token ${token} at ${offset}: ${message}`);
  };
  let brackets = [];
  let commas = [];
  let offset = 0;
  while (offset < text.length) {
    let cur = text.substring(offset);
    let match = cur.match(regexWhitespacePrefix);
    if (match) {
      offset += match[1].length;
      cur = text.substring(offset);
    }
    const token = { depth: brackets.length, linkBack: -1, linkNext: -1, match: -1, type: "", text: "", offset, value: -1 };
    tokens.push(token);
    let type = SimpleTokens[cur[0]] || "";
    if (type) {
      token.type = type;
      token.text = cur[0];
      offset++;
      if (type === "OPEN_PAREN") {
        brackets.push(tokens.length - 1);
        commas.push(tokens.length - 1);
      } else if (type == "CLOSE_PAREN") {
        if (brackets.length === 0) {
          throwError2("no matching open bracket");
        }
        token.match = brackets.pop();
        tokens[token.match].match = tokens.length - 1;
        token.depth--;
        token.linkBack = commas.pop();
        tokens[token.linkBack].linkNext = tokens.length - 1;
      } else if (type === "COMMA") {
        token.linkBack = commas.pop();
        tokens[token.linkBack].linkNext = tokens.length - 1;
        commas.push(tokens.length - 1);
      } else if (type === "OPEN_BRACKET") {
        token.type = "BRACKET";
      } else if (type === "CLOSE_BRACKET") {
        let suffix = tokens.pop().text;
        if (tokens.length > 0 && tokens[tokens.length - 1].type === "NUMBER") {
          const value = tokens.pop().text;
          suffix = value + suffix;
          tokens[tokens.length - 1].value = getNumber(value);
        }
        if (tokens.length === 0 || tokens[tokens.length - 1].type !== "BRACKET") {
          throw new Error("missing opening bracket");
        }
        tokens[tokens.length - 1].text += suffix;
      }
      continue;
    }
    match = cur.match(regexIdPrefix);
    if (match) {
      token.text = match[1];
      offset += token.text.length;
      if (Keywords.has(token.text)) {
        token.type = "KEYWORD";
        continue;
      }
      if (token.text.match(regexType)) {
        token.type = "TYPE";
        continue;
      }
      token.type = "ID";
      continue;
    }
    match = cur.match(regexNumberPrefix);
    if (match) {
      token.text = match[1];
      token.type = "NUMBER";
      offset += token.text.length;
      continue;
    }
    throw new Error(`unexpected token ${JSON.stringify(cur[0])} at position ${offset}`);
  }
  return new TokenString(tokens.map((t2) => Object.freeze(t2)));
}
function allowSingle(set, allowed) {
  let included = [];
  for (const key in allowed.keys()) {
    if (set.has(key)) {
      included.push(key);
    }
  }
  if (included.length > 1) {
    throw new Error(`conflicting types: ${included.join(", ")}`);
  }
}
function consumeName(type, tokens) {
  if (tokens.peekKeyword(KwTypes)) {
    const keyword = tokens.pop().text;
    if (keyword !== type) {
      throw new Error(`expected ${type}, got ${keyword}`);
    }
  }
  return tokens.popType("ID");
}
function consumeKeywords(tokens, allowed) {
  const keywords = /* @__PURE__ */ new Set();
  while (true) {
    const keyword = tokens.peekType("KEYWORD");
    if (keyword == null || allowed && !allowed.has(keyword)) {
      break;
    }
    tokens.pop();
    if (keywords.has(keyword)) {
      throw new Error(`duplicate keywords: ${JSON.stringify(keyword)}`);
    }
    keywords.add(keyword);
  }
  return Object.freeze(keywords);
}
function consumeMutability(tokens) {
  let modifiers = consumeKeywords(tokens, KwVisib);
  allowSingle(modifiers, setify("constant payable nonpayable".split(" ")));
  allowSingle(modifiers, setify("pure view payable nonpayable".split(" ")));
  if (modifiers.has("view")) {
    return "view";
  }
  if (modifiers.has("pure")) {
    return "pure";
  }
  if (modifiers.has("payable")) {
    return "payable";
  }
  if (modifiers.has("nonpayable")) {
    return "nonpayable";
  }
  if (modifiers.has("constant")) {
    return "view";
  }
  return "nonpayable";
}
function consumeParams(tokens, allowIndexed) {
  return tokens.popParams().map((t2) => ParamType.from(t2, allowIndexed));
}
function consumeGas(tokens) {
  if (tokens.peekType("AT")) {
    tokens.pop();
    if (tokens.peekType("NUMBER")) {
      return getBigInt(tokens.pop().text);
    }
    throw new Error("invalid gas");
  }
  return null;
}
function consumeEoi(tokens) {
  if (tokens.length) {
    throw new Error(`unexpected tokens: ${tokens.toString()}`);
  }
}
const regexArrayType = new RegExp(/^(.*)\[([0-9]*)\]$/);
function verifyBasicType(type) {
  const match = type.match(regexType);
  assertArgument(match, "invalid type", "type", type);
  if (type === "uint") {
    return "uint256";
  }
  if (type === "int") {
    return "int256";
  }
  if (match[2]) {
    const length = parseInt(match[2]);
    assertArgument(length !== 0 && length <= 32, "invalid bytes length", "type", type);
  } else if (match[3]) {
    const size = parseInt(match[3]);
    assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid numeric width", "type", type);
  }
  return type;
}
const _guard = {};
const internal$1 = Symbol.for("_ethers_internal");
const ParamTypeInternal = "_ParamTypeInternal";
const ErrorFragmentInternal = "_ErrorInternal";
const EventFragmentInternal = "_EventInternal";
const ConstructorFragmentInternal = "_ConstructorInternal";
const FallbackFragmentInternal = "_FallbackInternal";
const FunctionFragmentInternal = "_FunctionInternal";
const StructFragmentInternal = "_StructInternal";
const _ParamType = class {
  constructor(guard, name, type, baseType, indexed, components, arrayLength, arrayChildren) {
    __privateAdd(this, _walkAsync);
    __publicField(this, "name");
    __publicField(this, "type");
    __publicField(this, "baseType");
    __publicField(this, "indexed");
    __publicField(this, "components");
    __publicField(this, "arrayLength");
    __publicField(this, "arrayChildren");
    assertPrivate(guard, _guard, "ParamType");
    Object.defineProperty(this, internal$1, { value: ParamTypeInternal });
    if (components) {
      components = Object.freeze(components.slice());
    }
    if (baseType === "array") {
      if (arrayLength == null || arrayChildren == null) {
        throw new Error("");
      }
    } else if (arrayLength != null || arrayChildren != null) {
      throw new Error("");
    }
    if (baseType === "tuple") {
      if (components == null) {
        throw new Error("");
      }
    } else if (components != null) {
      throw new Error("");
    }
    defineProperties(this, {
      name,
      type,
      baseType,
      indexed,
      components,
      arrayLength,
      arrayChildren
    });
  }
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      let result2 = {
        type: this.baseType === "tuple" ? "tuple" : this.type,
        name: this.name || void 0
      };
      if (typeof this.indexed === "boolean") {
        result2.indexed = this.indexed;
      }
      if (this.isTuple()) {
        result2.components = this.components.map((c) => JSON.parse(c.format(format)));
      }
      return JSON.stringify(result2);
    }
    let result = "";
    if (this.isArray()) {
      result += this.arrayChildren.format(format);
      result += `[${this.arrayLength < 0 ? "" : String(this.arrayLength)}]`;
    } else {
      if (this.isTuple()) {
        if (format !== "sighash") {
          result += this.type;
        }
        result += "(" + this.components.map((comp) => comp.format(format)).join(format === "full" ? ", " : ",") + ")";
      } else {
        result += this.type;
      }
    }
    if (format !== "sighash") {
      if (this.indexed === true) {
        result += " indexed";
      }
      if (format === "full" && this.name) {
        result += " " + this.name;
      }
    }
    return result;
  }
  //static isArray(value: any): value is { arrayChildren: ParamType, arrayLength: number } {
  //    return value && (value.baseType === "array")
  //}
  isArray() {
    return this.baseType === "array";
  }
  isTuple() {
    return this.baseType === "tuple";
  }
  isIndexable() {
    return this.indexed != null;
  }
  walk(value, process2) {
    if (this.isArray()) {
      if (!Array.isArray(value)) {
        throw new Error("invlaid array value");
      }
      if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
        throw new Error("array is wrong length");
      }
      const _this = this;
      return value.map((v2) => _this.arrayChildren.walk(v2, process2));
    }
    if (this.isTuple()) {
      if (!Array.isArray(value)) {
        throw new Error("invlaid tuple value");
      }
      if (value.length !== this.components.length) {
        throw new Error("array is wrong length");
      }
      const _this = this;
      return value.map((v2, i) => _this.components[i].walk(v2, process2));
    }
    return process2(this.type, value);
  }
  async walkAsync(value, process2) {
    const promises = [];
    const result = [value];
    __privateMethod(this, _walkAsync, walkAsync_fn).call(this, promises, value, process2, (value2) => {
      result[0] = value2;
    });
    if (promises.length) {
      await Promise.all(promises);
    }
    return result[0];
  }
  static from(obj, allowIndexed) {
    if (_ParamType.isParamType(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return _ParamType.from(lex(obj), allowIndexed);
    } else if (obj instanceof TokenString) {
      let type2 = "", baseType = "";
      let comps = null;
      if (consumeKeywords(obj, setify(["tuple"])).has("tuple") || obj.peekType("OPEN_PAREN")) {
        baseType = "tuple";
        comps = obj.popParams().map((t2) => _ParamType.from(t2));
        type2 = `tuple(${comps.map((c) => c.format()).join(",")})`;
      } else {
        type2 = verifyBasicType(obj.popType("TYPE"));
        baseType = type2;
      }
      let arrayChildren = null;
      let arrayLength = null;
      while (obj.length && obj.peekType("BRACKET")) {
        const bracket = obj.pop();
        arrayChildren = new _ParamType(_guard, "", type2, baseType, null, comps, arrayLength, arrayChildren);
        arrayLength = bracket.value;
        type2 += bracket.text;
        baseType = "array";
        comps = null;
      }
      let indexed2 = null;
      const keywords = consumeKeywords(obj, KwModifiers);
      if (keywords.has("indexed")) {
        if (!allowIndexed) {
          throw new Error("");
        }
        indexed2 = true;
      }
      const name2 = obj.peekType("ID") ? obj.pop().text : "";
      if (obj.length) {
        throw new Error("leftover tokens");
      }
      return new _ParamType(_guard, name2, type2, baseType, indexed2, comps, arrayLength, arrayChildren);
    }
    const name = obj.name;
    assertArgument(!name || typeof name === "string" && name.match(regexId), "invalid name", "obj.name", name);
    let indexed = obj.indexed;
    if (indexed != null) {
      assertArgument(allowIndexed, "parameter cannot be indexed", "obj.indexed", obj.indexed);
      indexed = !!indexed;
    }
    let type = obj.type;
    let arrayMatch = type.match(regexArrayType);
    if (arrayMatch) {
      const arrayLength = parseInt(arrayMatch[2] || "-1");
      const arrayChildren = _ParamType.from({
        type: arrayMatch[1],
        components: obj.components
      });
      return new _ParamType(_guard, name || "", type, "array", indexed, null, arrayLength, arrayChildren);
    }
    if (type === "tuple" || type.substring(0, 5) === "tuple(" || type[0] === "(") {
      const comps = obj.components != null ? obj.components.map((c) => _ParamType.from(c)) : null;
      const tuple = new _ParamType(_guard, name || "", type, "tuple", indexed, comps, null, null);
      return tuple;
    }
    type = verifyBasicType(obj.type);
    return new _ParamType(_guard, name || "", type, type, indexed, null, null, null);
  }
  static isParamType(value) {
    return value && value[internal$1] === ParamTypeInternal;
  }
};
let ParamType = _ParamType;
_walkAsync = new WeakSet();
walkAsync_fn = function(promises, value, process2, setValue) {
  if (this.isArray()) {
    if (!Array.isArray(value)) {
      throw new Error("invlaid array value");
    }
    if (this.arrayLength !== -1 && value.length !== this.arrayLength) {
      throw new Error("array is wrong length");
    }
    const childType = this.arrayChildren;
    const result2 = value.slice();
    result2.forEach((value2, index2) => {
      var _a2;
      __privateMethod(_a2 = childType, _walkAsync, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
        result2[index2] = value3;
      });
    });
    setValue(result2);
    return;
  }
  if (this.isTuple()) {
    const components = this.components;
    let result2;
    if (Array.isArray(value)) {
      result2 = value.slice();
    } else {
      if (value == null || typeof value !== "object") {
        throw new Error("invlaid tuple value");
      }
      result2 = components.map((param) => {
        if (!param.name) {
          throw new Error("cannot use object value with unnamed components");
        }
        if (!(param.name in value)) {
          throw new Error(`missing value for component ${param.name}`);
        }
        return value[param.name];
      });
    }
    if (result2.length !== this.components.length) {
      throw new Error("array is wrong length");
    }
    result2.forEach((value2, index2) => {
      var _a2;
      __privateMethod(_a2 = components[index2], _walkAsync, walkAsync_fn).call(_a2, promises, value2, process2, (value3) => {
        result2[index2] = value3;
      });
    });
    setValue(result2);
    return;
  }
  const result = process2(this.type, value);
  if (result.then) {
    promises.push(async function() {
      setValue(await result);
    }());
  } else {
    setValue(result);
  }
};
class Fragment {
  constructor(guard, type, inputs) {
    __publicField(this, "type");
    __publicField(this, "inputs");
    assertPrivate(guard, _guard, "Fragment");
    inputs = Object.freeze(inputs.slice());
    defineProperties(this, { type, inputs });
  }
  static from(obj) {
    if (typeof obj === "string") {
      try {
        Fragment.from(JSON.parse(obj));
      } catch (e) {
      }
      return Fragment.from(lex(obj));
    }
    if (obj instanceof TokenString) {
      const type = obj.peekKeyword(KwTypes);
      switch (type) {
        case "constructor":
          return ConstructorFragment.from(obj);
        case "error":
          return ErrorFragment.from(obj);
        case "event":
          return EventFragment.from(obj);
        case "fallback":
        case "receive":
          return FallbackFragment.from(obj);
        case "function":
          return FunctionFragment.from(obj);
        case "struct":
          return StructFragment.from(obj);
      }
    } else if (typeof obj === "object") {
      switch (obj.type) {
        case "constructor":
          return ConstructorFragment.from(obj);
        case "error":
          return ErrorFragment.from(obj);
        case "event":
          return EventFragment.from(obj);
        case "fallback":
        case "receive":
          return FallbackFragment.from(obj);
        case "function":
          return FunctionFragment.from(obj);
        case "struct":
          return StructFragment.from(obj);
      }
      assert$1(false, `unsupported type: ${obj.type}`, "UNSUPPORTED_OPERATION", {
        operation: "Fragment.from"
      });
    }
    assertArgument(false, "unsupported frgament object", "obj", obj);
  }
  static isConstructor(value) {
    return ConstructorFragment.isFragment(value);
  }
  static isError(value) {
    return ErrorFragment.isFragment(value);
  }
  static isEvent(value) {
    return EventFragment.isFragment(value);
  }
  static isFunction(value) {
    return FunctionFragment.isFragment(value);
  }
  static isStruct(value) {
    return StructFragment.isFragment(value);
  }
}
class NamedFragment extends Fragment {
  constructor(guard, type, name, inputs) {
    super(guard, type, inputs);
    __publicField(this, "name");
    assertArgument(typeof name === "string" && name.match(regexId), "invalid identifier", "name", name);
    inputs = Object.freeze(inputs.slice());
    defineProperties(this, { name });
  }
}
function joinParams(format, params) {
  return "(" + params.map((p2) => p2.format(format)).join(format === "full" ? ", " : ",") + ")";
}
class ErrorFragment extends NamedFragment {
  constructor(guard, name, inputs) {
    super(guard, "error", name, inputs);
    Object.defineProperty(this, internal$1, { value: ErrorFragmentInternal });
  }
  get selector() {
    return id(this.format("sighash")).substring(0, 10);
  }
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "error",
        name: this.name,
        inputs: this.inputs.map((input) => JSON.parse(input.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("error");
    }
    result.push(this.name + joinParams(format, this.inputs));
    return result.join(" ");
  }
  static from(obj) {
    if (ErrorFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return ErrorFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("error", obj);
      const inputs = consumeParams(obj);
      consumeEoi(obj);
      return new ErrorFragment(_guard, name, inputs);
    }
    return new ErrorFragment(_guard, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
  }
  static isFragment(value) {
    return value && value[internal$1] === ErrorFragmentInternal;
  }
}
class EventFragment extends NamedFragment {
  constructor(guard, name, inputs, anonymous) {
    super(guard, "event", name, inputs);
    __publicField(this, "anonymous");
    Object.defineProperty(this, internal$1, { value: EventFragmentInternal });
    defineProperties(this, { anonymous });
  }
  get topicHash() {
    return id(this.format("sighash"));
  }
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "event",
        anonymous: this.anonymous,
        name: this.name,
        inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("event");
    }
    result.push(this.name + joinParams(format, this.inputs));
    if (format !== "sighash" && this.anonymous) {
      result.push("anonymous");
    }
    return result.join(" ");
  }
  static getTopicHash(name, params) {
    params = (params || []).map((p2) => ParamType.from(p2));
    const fragment = new EventFragment(_guard, name, params, false);
    return fragment.topicHash;
  }
  static from(obj) {
    if (EventFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return EventFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("event", obj);
      const inputs = consumeParams(obj, true);
      const anonymous = !!consumeKeywords(obj, setify(["anonymous"])).has("anonymous");
      consumeEoi(obj);
      return new EventFragment(_guard, name, inputs, anonymous);
    }
    return new EventFragment(_guard, obj.name, obj.inputs ? obj.inputs.map((p2) => ParamType.from(p2, true)) : [], !!obj.anonymous);
  }
  static isFragment(value) {
    return value && value[internal$1] === EventFragmentInternal;
  }
}
class ConstructorFragment extends Fragment {
  constructor(guard, type, inputs, payable, gas) {
    super(guard, type, inputs);
    __publicField(this, "payable");
    __publicField(this, "gas");
    Object.defineProperty(this, internal$1, { value: ConstructorFragmentInternal });
    defineProperties(this, { payable, gas });
  }
  format(format) {
    assert$1(format != null && format !== "sighash", "cannot format a constructor for sighash", "UNSUPPORTED_OPERATION", { operation: "format(sighash)" });
    if (format === "json") {
      return JSON.stringify({
        type: "constructor",
        stateMutability: this.payable ? "payable" : "undefined",
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(format)))
      });
    }
    const result = [`constructor${joinParams(format, this.inputs)}`];
    result.push(this.payable ? "payable" : "nonpayable");
    if (this.gas != null) {
      result.push(`@${this.gas.toString()}`);
    }
    return result.join(" ");
  }
  static from(obj) {
    if (ConstructorFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return ConstructorFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      consumeKeywords(obj, setify(["constructor"]));
      const inputs = consumeParams(obj);
      const payable = !!consumeKeywords(obj, setify(["payable"])).has("payable");
      const gas = consumeGas(obj);
      consumeEoi(obj);
      return new ConstructorFragment(_guard, "constructor", inputs, payable, gas);
    }
    return new ConstructorFragment(_guard, "constructor", obj.inputs ? obj.inputs.map(ParamType.from) : [], !!obj.payable, obj.gas != null ? obj.gas : null);
  }
  static isFragment(value) {
    return value && value[internal$1] === ConstructorFragmentInternal;
  }
}
class FallbackFragment extends Fragment {
  constructor(guard, inputs, payable) {
    super(guard, "fallback", inputs);
    __publicField(this, "payable");
    Object.defineProperty(this, internal$1, { value: FallbackFragmentInternal });
    defineProperties(this, { payable });
  }
  format(format) {
    const type = this.inputs.length === 0 ? "receive" : "fallback";
    if (format === "json") {
      const stateMutability = this.payable ? "payable" : "nonpayable";
      return JSON.stringify({ type, stateMutability });
    }
    return `${type}()${this.payable ? " payable" : ""}`;
  }
  static from(obj) {
    if (FallbackFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return FallbackFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const errorObj = obj.toString();
      const topIsValid = obj.peekKeyword(setify(["fallback", "receive"]));
      assertArgument(topIsValid, "type must be fallback or receive", "obj", errorObj);
      const type = obj.popKeyword(setify(["fallback", "receive"]));
      if (type === "receive") {
        const inputs2 = consumeParams(obj);
        assertArgument(inputs2.length === 0, `receive cannot have arguments`, "obj.inputs", inputs2);
        consumeKeywords(obj, setify(["payable"]));
        consumeEoi(obj);
        return new FallbackFragment(_guard, [], true);
      }
      let inputs = consumeParams(obj);
      if (inputs.length) {
        assertArgument(inputs.length === 1 && inputs[0].type === "bytes", "invalid fallback inputs", "obj.inputs", inputs.map((i) => i.format("minimal")).join(", "));
      } else {
        inputs = [ParamType.from("bytes")];
      }
      const mutability = consumeMutability(obj);
      assertArgument(mutability === "nonpayable" || mutability === "payable", "fallback cannot be constants", "obj.stateMutability", mutability);
      if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
        const outputs = consumeParams(obj);
        assertArgument(outputs.length === 1 && outputs[0].type === "bytes", "invalid fallback outputs", "obj.outputs", outputs.map((i) => i.format("minimal")).join(", "));
      }
      consumeEoi(obj);
      return new FallbackFragment(_guard, inputs, mutability === "payable");
    }
    if (obj.type === "receive") {
      return new FallbackFragment(_guard, [], true);
    }
    if (obj.type === "fallback") {
      const inputs = [ParamType.from("bytes")];
      const payable = obj.stateMutability === "payable";
      return new FallbackFragment(_guard, inputs, payable);
    }
    assertArgument(false, "invalid fallback description", "obj", obj);
  }
  static isFragment(value) {
    return value && value[internal$1] === FallbackFragmentInternal;
  }
}
class FunctionFragment extends NamedFragment {
  constructor(guard, name, stateMutability, inputs, outputs, gas) {
    super(guard, "function", name, inputs);
    __publicField(this, "constant");
    __publicField(this, "outputs");
    __publicField(this, "stateMutability");
    __publicField(this, "payable");
    __publicField(this, "gas");
    Object.defineProperty(this, internal$1, { value: FunctionFragmentInternal });
    outputs = Object.freeze(outputs.slice());
    const constant = stateMutability === "view" || stateMutability === "pure";
    const payable = stateMutability === "payable";
    defineProperties(this, { constant, gas, outputs, payable, stateMutability });
  }
  get selector() {
    return id(this.format("sighash")).substring(0, 10);
  }
  format(format) {
    if (format == null) {
      format = "sighash";
    }
    if (format === "json") {
      return JSON.stringify({
        type: "function",
        name: this.name,
        constant: this.constant,
        stateMutability: this.stateMutability !== "nonpayable" ? this.stateMutability : void 0,
        payable: this.payable,
        gas: this.gas != null ? this.gas : void 0,
        inputs: this.inputs.map((i) => JSON.parse(i.format(format))),
        outputs: this.outputs.map((o) => JSON.parse(o.format(format)))
      });
    }
    const result = [];
    if (format !== "sighash") {
      result.push("function");
    }
    result.push(this.name + joinParams(format, this.inputs));
    if (format !== "sighash") {
      if (this.stateMutability !== "nonpayable") {
        result.push(this.stateMutability);
      }
      if (this.outputs && this.outputs.length) {
        result.push("returns");
        result.push(joinParams(format, this.outputs));
      }
      if (this.gas != null) {
        result.push(`@${this.gas.toString()}`);
      }
    }
    return result.join(" ");
  }
  static getSelector(name, params) {
    params = (params || []).map((p2) => ParamType.from(p2));
    const fragment = new FunctionFragment(_guard, name, "view", params, [], null);
    return fragment.selector;
  }
  static from(obj) {
    if (FunctionFragment.isFragment(obj)) {
      return obj;
    }
    if (typeof obj === "string") {
      return FunctionFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("function", obj);
      const inputs = consumeParams(obj);
      const mutability = consumeMutability(obj);
      let outputs = [];
      if (consumeKeywords(obj, setify(["returns"])).has("returns")) {
        outputs = consumeParams(obj);
      }
      const gas = consumeGas(obj);
      consumeEoi(obj);
      return new FunctionFragment(_guard, name, mutability, inputs, outputs, gas);
    }
    return new FunctionFragment(_guard, obj.name, obj.stateMutability, obj.inputs ? obj.inputs.map(ParamType.from) : [], obj.outputs ? obj.outputs.map(ParamType.from) : [], obj.gas != null ? obj.gas : null);
  }
  static isFragment(value) {
    return value && value[internal$1] === FunctionFragmentInternal;
  }
}
class StructFragment extends NamedFragment {
  constructor(guard, name, inputs) {
    super(guard, "struct", name, inputs);
    Object.defineProperty(this, internal$1, { value: StructFragmentInternal });
  }
  format() {
    throw new Error("@TODO");
  }
  static from(obj) {
    if (typeof obj === "string") {
      return StructFragment.from(lex(obj));
    } else if (obj instanceof TokenString) {
      const name = consumeName("struct", obj);
      const inputs = consumeParams(obj);
      consumeEoi(obj);
      return new StructFragment(_guard, name, inputs);
    }
    return new StructFragment(_guard, obj.name, obj.inputs ? obj.inputs.map(ParamType.from) : []);
  }
  static isFragment(value) {
    return value && value[internal$1] === StructFragmentInternal;
  }
}
const PanicReasons$1 = /* @__PURE__ */ new Map();
PanicReasons$1.set(0, "GENERIC_PANIC");
PanicReasons$1.set(1, "ASSERT_FALSE");
PanicReasons$1.set(17, "OVERFLOW");
PanicReasons$1.set(18, "DIVIDE_BY_ZERO");
PanicReasons$1.set(33, "ENUM_RANGE_ERROR");
PanicReasons$1.set(34, "BAD_STORAGE_DATA");
PanicReasons$1.set(49, "STACK_UNDERFLOW");
PanicReasons$1.set(50, "ARRAY_RANGE_ERROR");
PanicReasons$1.set(65, "OUT_OF_MEMORY");
PanicReasons$1.set(81, "UNINITIALIZED_FUNCTION_CALL");
const paramTypeBytes = new RegExp(/^bytes([0-9]*)$/);
const paramTypeNumber = new RegExp(/^(u?int)([0-9]*)$/);
let defaultCoder = null;
function getBuiltinCallException(action, tx, data, abiCoder) {
  let message = "missing revert data";
  let reason = null;
  const invocation = null;
  let revert = null;
  if (data) {
    message = "execution reverted";
    const bytes2 = getBytes(data);
    data = hexlify(data);
    if (bytes2.length % 32 !== 4) {
      message += " (could not decode reason; invalid data length)";
    } else if (hexlify(bytes2.slice(0, 4)) === "0x08c379a0") {
      try {
        reason = abiCoder.decode(["string"], bytes2.slice(4))[0];
        revert = {
          signature: "Error(string)",
          name: "Error",
          args: [reason]
        };
        message += `: ${JSON.stringify(reason)}`;
      } catch (error) {
        console.log(error);
        message += " (could not decode reason; invalid data)";
      }
    } else if (hexlify(bytes2.slice(0, 4)) === "0x4e487b71") {
      try {
        const code = Number(abiCoder.decode(["uint256"], bytes2.slice(4))[0]);
        revert = {
          signature: "Panic(uint256)",
          name: "Panic",
          args: [code]
        };
        reason = `Panic due to ${PanicReasons$1.get(code) || "UNKNOWN"}(${code})`;
        message += `: ${reason}`;
      } catch (error) {
        console.log(error);
        message += " (could not decode panic reason)";
      }
    } else {
      message += " (unknown custom error)";
    }
  }
  const transaction = {
    to: tx.to ? getAddress(tx.to) : null,
    data: tx.data || "0x"
  };
  if (tx.from) {
    transaction.from = getAddress(tx.from);
  }
  return makeError(message, "CALL_EXCEPTION", {
    action,
    data,
    reason,
    transaction,
    invocation,
    revert
  });
}
const _AbiCoder = class {
  constructor() {
    __privateAdd(this, _getCoder);
  }
  getDefaultValue(types) {
    const coders = types.map((type) => __privateMethod(this, _getCoder, getCoder_fn).call(this, ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    return coder.defaultValue();
  }
  encode(types, values) {
    assertArgumentCount(values.length, types.length, "types/values length mismatch");
    const coders = types.map((type) => __privateMethod(this, _getCoder, getCoder_fn).call(this, ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    const writer = new Writer();
    coder.encode(writer, values);
    return writer.data;
  }
  decode(types, data, loose) {
    const coders = types.map((type) => __privateMethod(this, _getCoder, getCoder_fn).call(this, ParamType.from(type)));
    const coder = new TupleCoder(coders, "_");
    return coder.decode(new Reader(data, loose));
  }
  static defaultAbiCoder() {
    if (defaultCoder == null) {
      defaultCoder = new _AbiCoder();
    }
    return defaultCoder;
  }
  static getBuiltinCallException(action, tx, data) {
    return getBuiltinCallException(action, tx, data, _AbiCoder.defaultAbiCoder());
  }
};
let AbiCoder = _AbiCoder;
_getCoder = new WeakSet();
getCoder_fn = function(param) {
  if (param.isArray()) {
    return new ArrayCoder(__privateMethod(this, _getCoder, getCoder_fn).call(this, param.arrayChildren), param.arrayLength, param.name);
  }
  if (param.isTuple()) {
    return new TupleCoder(param.components.map((c) => __privateMethod(this, _getCoder, getCoder_fn).call(this, c)), param.name);
  }
  switch (param.baseType) {
    case "address":
      return new AddressCoder(param.name);
    case "bool":
      return new BooleanCoder(param.name);
    case "string":
      return new StringCoder(param.name);
    case "bytes":
      return new BytesCoder(param.name);
    case "":
      return new NullCoder(param.name);
  }
  let match = param.type.match(paramTypeNumber);
  if (match) {
    let size = parseInt(match[2] || "256");
    assertArgument(size !== 0 && size <= 256 && size % 8 === 0, "invalid " + match[1] + " bit length", "param", param);
    return new NumberCoder(size / 8, match[1] === "int", param.name);
  }
  match = param.type.match(paramTypeBytes);
  if (match) {
    let size = parseInt(match[1]);
    assertArgument(size !== 0 && size <= 32, "invalid bytes length", "param", param);
    return new FixedBytesCoder(size, param.name);
  }
  assertArgument(false, "invalid type", "type", param.type);
};
class LogDescription {
  constructor(fragment, topic, args) {
    __publicField(this, "fragment");
    __publicField(this, "name");
    __publicField(this, "signature");
    __publicField(this, "topic");
    __publicField(this, "args");
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      signature,
      topic,
      args
    });
  }
}
class TransactionDescription {
  constructor(fragment, selector, args, value) {
    __publicField(this, "fragment");
    __publicField(this, "name");
    __publicField(this, "args");
    __publicField(this, "signature");
    __publicField(this, "selector");
    __publicField(this, "value");
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      args,
      signature,
      selector,
      value
    });
  }
}
class ErrorDescription {
  constructor(fragment, selector, args) {
    __publicField(this, "fragment");
    __publicField(this, "name");
    __publicField(this, "args");
    __publicField(this, "signature");
    __publicField(this, "selector");
    const name = fragment.name, signature = fragment.format();
    defineProperties(this, {
      fragment,
      name,
      args,
      signature,
      selector
    });
  }
}
class Indexed {
  constructor(hash2) {
    __publicField(this, "hash");
    __publicField(this, "_isIndexed");
    defineProperties(this, { hash: hash2, _isIndexed: true });
  }
  static isIndexed(value) {
    return !!(value && value._isIndexed);
  }
}
const PanicReasons = {
  "0": "generic panic",
  "1": "assert(false)",
  "17": "arithmetic overflow",
  "18": "division or modulo by zero",
  "33": "enum overflow",
  "34": "invalid encoded storage byte array accessed",
  "49": "out-of-bounds array access; popping on an empty array",
  "50": "out-of-bounds access of an array or bytesN",
  "65": "out of memory",
  "81": "uninitialized function"
};
const BuiltinErrors = {
  "0x08c379a0": {
    signature: "Error(string)",
    name: "Error",
    inputs: ["string"],
    reason: (message) => {
      return `reverted with reason string ${JSON.stringify(message)}`;
    }
  },
  "0x4e487b71": {
    signature: "Panic(uint256)",
    name: "Panic",
    inputs: ["uint256"],
    reason: (code) => {
      let reason = "unknown panic code";
      if (code >= 0 && code <= 255 && PanicReasons[code.toString()]) {
        reason = PanicReasons[code.toString()];
      }
      return `reverted with panic code 0x${code.toString(16)} (${reason})`;
    }
  }
};
const _Interface = class {
  constructor(fragments) {
    // Find a function definition by any means necessary (unless it is ambiguous)
    __privateAdd(this, _getFunction);
    // Find an event definition by any means necessary (unless it is ambiguous)
    __privateAdd(this, _getEvent);
    __publicField(this, "fragments");
    __publicField(this, "deploy");
    __publicField(this, "fallback");
    __publicField(this, "receive");
    __privateAdd(this, _errors, void 0);
    __privateAdd(this, _events, void 0);
    __privateAdd(this, _functions, void 0);
    //    #structs: Map<string, StructFragment>;
    __privateAdd(this, _abiCoder, void 0);
    let abi2 = [];
    if (typeof fragments === "string") {
      abi2 = JSON.parse(fragments);
    } else {
      abi2 = fragments;
    }
    __privateSet(this, _functions, /* @__PURE__ */ new Map());
    __privateSet(this, _errors, /* @__PURE__ */ new Map());
    __privateSet(this, _events, /* @__PURE__ */ new Map());
    const frags = [];
    for (const a of abi2) {
      try {
        frags.push(Fragment.from(a));
      } catch (error) {
        console.log("EE", error);
      }
    }
    defineProperties(this, {
      fragments: Object.freeze(frags)
    });
    let fallback = null;
    let receive = false;
    __privateSet(this, _abiCoder, this.getAbiCoder());
    this.fragments.forEach((fragment, index2) => {
      let bucket;
      switch (fragment.type) {
        case "constructor":
          if (this.deploy) {
            console.log("duplicate definition - constructor");
            return;
          }
          defineProperties(this, { deploy: fragment });
          return;
        case "fallback":
          if (fragment.inputs.length === 0) {
            receive = true;
          } else {
            assertArgument(!fallback || fragment.payable !== fallback.payable, "conflicting fallback fragments", `fragments[${index2}]`, fragment);
            fallback = fragment;
            receive = fallback.payable;
          }
          return;
        case "function":
          bucket = __privateGet(this, _functions);
          break;
        case "event":
          bucket = __privateGet(this, _events);
          break;
        case "error":
          bucket = __privateGet(this, _errors);
          break;
        default:
          return;
      }
      const signature = fragment.format();
      if (bucket.has(signature)) {
        return;
      }
      bucket.set(signature, fragment);
    });
    if (!this.deploy) {
      defineProperties(this, {
        deploy: ConstructorFragment.from("constructor()")
      });
    }
    defineProperties(this, { fallback, receive });
  }
  format(minimal) {
    const format = minimal ? "minimal" : "full";
    const abi2 = this.fragments.map((f2) => f2.format(format));
    return abi2;
  }
  formatJson() {
    const abi2 = this.fragments.map((f2) => f2.format("json"));
    return JSON.stringify(abi2.map((j) => JSON.parse(j)));
  }
  getAbiCoder() {
    return AbiCoder.defaultAbiCoder();
  }
  getFunctionName(key) {
    const fragment = __privateMethod(this, _getFunction, getFunction_fn).call(this, key, null, false);
    assertArgument(fragment, "no matching function", "key", key);
    return fragment.name;
  }
  getFunction(key, values) {
    return __privateMethod(this, _getFunction, getFunction_fn).call(this, key, values || null, true);
  }
  forEachFunction(callback) {
    const names2 = Array.from(__privateGet(this, _functions).keys());
    names2.sort((a, b2) => a.localeCompare(b2));
    for (let i = 0; i < names2.length; i++) {
      const name = names2[i];
      callback(__privateGet(this, _functions).get(name), i);
    }
  }
  getEventName(key) {
    const fragment = __privateMethod(this, _getEvent, getEvent_fn).call(this, key, null, false);
    assertArgument(fragment, "no matching event", "key", key);
    return fragment.name;
  }
  getEvent(key, values) {
    return __privateMethod(this, _getEvent, getEvent_fn).call(this, key, values || null, true);
  }
  forEachEvent(callback) {
    const names2 = Array.from(__privateGet(this, _events).keys());
    names2.sort((a, b2) => a.localeCompare(b2));
    for (let i = 0; i < names2.length; i++) {
      const name = names2[i];
      callback(__privateGet(this, _events).get(name), i);
    }
  }
  getError(key, values) {
    if (isHexString(key)) {
      const selector = key.toLowerCase();
      if (BuiltinErrors[selector]) {
        return ErrorFragment.from(BuiltinErrors[selector].signature);
      }
      for (const fragment of __privateGet(this, _errors).values()) {
        if (selector === fragment.selector) {
          return fragment;
        }
      }
      return null;
    }
    if (key.indexOf("(") === -1) {
      const matching = [];
      for (const [name, fragment] of __privateGet(this, _errors)) {
        if (name.split(
          "("
          /* fix:) */
        )[0] === key) {
          matching.push(fragment);
        }
      }
      if (matching.length === 0) {
        if (key === "Error") {
          return ErrorFragment.from("error Error(string)");
        }
        if (key === "Panic") {
          return ErrorFragment.from("error Panic(uint256)");
        }
        return null;
      } else if (matching.length > 1) {
        const matchStr = matching.map((m2) => JSON.stringify(m2.format())).join(", ");
        assertArgument(false, `ambiguous error description (i.e. ${matchStr})`, "name", key);
      }
      return matching[0];
    }
    key = ErrorFragment.from(key).format();
    if (key === "Error(string)") {
      return ErrorFragment.from("error Error(string)");
    }
    if (key === "Panic(uint256)") {
      return ErrorFragment.from("error Panic(uint256)");
    }
    const result = __privateGet(this, _errors).get(key);
    if (result) {
      return result;
    }
    return null;
  }
  forEachError(callback) {
    const names2 = Array.from(__privateGet(this, _errors).keys());
    names2.sort((a, b2) => a.localeCompare(b2));
    for (let i = 0; i < names2.length; i++) {
      const name = names2[i];
      callback(__privateGet(this, _errors).get(name), i);
    }
  }
  // Get the 4-byte selector used by Solidity to identify a function
  /*
  getSelector(fragment: ErrorFragment | FunctionFragment): string {
      if (typeof(fragment) === "string") {
          const matches: Array<Fragment> = [ ];
  
          try { matches.push(this.getFunction(fragment)); } catch (error) { }
          try { matches.push(this.getError(<string>fragment)); } catch (_) { }
  
          if (matches.length === 0) {
              logger.throwArgumentError("unknown fragment", "key", fragment);
          } else if (matches.length > 1) {
              logger.throwArgumentError("ambiguous fragment matches function and error", "key", fragment);
          }
  
          fragment = matches[0];
      }
  
      return dataSlice(id(fragment.format()), 0, 4);
  }
      */
  // Get the 32-byte topic hash used by Solidity to identify an event
  /*
  getEventTopic(fragment: EventFragment): string {
      //if (typeof(fragment) === "string") { fragment = this.getEvent(eventFragment); }
      return id(fragment.format());
  }
  */
  _decodeParams(params, data) {
    return __privateGet(this, _abiCoder).decode(params, data);
  }
  _encodeParams(params, values) {
    return __privateGet(this, _abiCoder).encode(params, values);
  }
  encodeDeploy(values) {
    return this._encodeParams(this.deploy.inputs, values || []);
  }
  decodeErrorResult(fragment, data) {
    if (typeof fragment === "string") {
      const f2 = this.getError(fragment);
      assertArgument(f2, "unknown error", "fragment", fragment);
      fragment = f2;
    }
    assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match error ${fragment.name}.`, "data", data);
    return this._decodeParams(fragment.inputs, dataSlice(data, 4));
  }
  encodeErrorResult(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getError(fragment);
      assertArgument(f2, "unknown error", "fragment", fragment);
      fragment = f2;
    }
    return concat([
      fragment.selector,
      this._encodeParams(fragment.inputs, values || [])
    ]);
  }
  decodeFunctionData(fragment, data) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    assertArgument(dataSlice(data, 0, 4) === fragment.selector, `data signature does not match function ${fragment.name}.`, "data", data);
    return this._decodeParams(fragment.inputs, dataSlice(data, 4));
  }
  encodeFunctionData(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    return concat([
      fragment.selector,
      this._encodeParams(fragment.inputs, values || [])
    ]);
  }
  decodeFunctionResult(fragment, data) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    let message = "invalid length for result data";
    const bytes2 = getBytesCopy(data);
    if (bytes2.length % 32 === 0) {
      try {
        return __privateGet(this, _abiCoder).decode(fragment.outputs, bytes2);
      } catch (error) {
        message = "could not decode result data";
      }
    }
    assert$1(false, message, "BAD_DATA", {
      value: hexlify(bytes2),
      info: { method: fragment.name, signature: fragment.format() }
    });
  }
  makeError(_data4, tx) {
    const data = getBytes(_data4, "data");
    const error = AbiCoder.getBuiltinCallException("call", tx, data);
    if (!error.message.match(/could not decode/)) {
      const selector = hexlify(data.slice(0, 4));
      error.message = "execution reverted (unknown custom error)";
      const ef2 = this.getError(selector);
      if (ef2) {
        try {
          error.revert = {
            name: ef2.name,
            signature: ef2.format(),
            args: __privateGet(this, _abiCoder).decode(ef2.inputs, data.slice(4))
          };
          error.reason = error.revert.signature;
          error.message = `execution reverted: ${error.reason}`;
        } catch (e) {
          error.message = `execution reverted (coult not decode custom error)`;
        }
      }
    }
    const parsed = this.parseTransaction(tx);
    if (parsed) {
      error.invocation = {
        method: parsed.name,
        signature: parsed.signature,
        args: parsed.args
      };
    }
    return error;
  }
  encodeFunctionResult(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getFunction(fragment);
      assertArgument(f2, "unknown function", "fragment", fragment);
      fragment = f2;
    }
    return hexlify(__privateGet(this, _abiCoder).encode(fragment.outputs, values || []));
  }
  /*
      spelunk(inputs: Array<ParamType>, values: ReadonlyArray<any>, processfunc: (type: string, value: any) => Promise<any>): Promise<Array<any>> {
          const promises: Array<Promise<>> = [ ];
          const process = function(type: ParamType, value: any): any {
              if (type.baseType === "array") {
                  return descend(type.child
              }
              if (type. === "address") {
              }
          };
  
          const descend = function (inputs: Array<ParamType>, values: ReadonlyArray<any>) {
              if (inputs.length !== values.length) { throw new Error("length mismatch"); }
              
          };
  
          const result: Array<any> = [ ];
          values.forEach((value, index) => {
              if (value == null) {
                  topics.push(null);
              } else if (param.baseType === "array" || param.baseType === "tuple") {
                  logger.throwArgumentError("filtering with tuples or arrays not supported", ("contract." + param.name), value);
              } else if (Array.isArray(value)) {
                  topics.push(value.map((value) => encodeTopic(param, value)));
              } else {
                  topics.push(encodeTopic(param, value));
              }
          });
      }
  */
  // Create the filter for the event with search criteria (e.g. for eth_filterLog)
  encodeFilterTopics(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getEvent(fragment);
      assertArgument(f2, "unknown event", "eventFragment", fragment);
      fragment = f2;
    }
    assert$1(values.length <= fragment.inputs.length, `too many arguments for ${fragment.format()}`, "UNEXPECTED_ARGUMENT", { count: values.length, expectedCount: fragment.inputs.length });
    const topics = [];
    if (!fragment.anonymous) {
      topics.push(fragment.topicHash);
    }
    const encodeTopic = (param, value) => {
      if (param.type === "string") {
        return id(value);
      } else if (param.type === "bytes") {
        return keccak256(hexlify(value));
      }
      if (param.type === "bool" && typeof value === "boolean") {
        value = value ? "0x01" : "0x00";
      }
      if (param.type.match(/^u?int/)) {
        value = toBeHex(value);
      }
      if (param.type === "address") {
        __privateGet(this, _abiCoder).encode(["address"], [value]);
      }
      return zeroPadValue(hexlify(value), 32);
    };
    values.forEach((value, index2) => {
      const param = fragment.inputs[index2];
      if (!param.indexed) {
        assertArgument(value == null, "cannot filter non-indexed parameters; must be null", "contract." + param.name, value);
        return;
      }
      if (value == null) {
        topics.push(null);
      } else if (param.baseType === "array" || param.baseType === "tuple") {
        assertArgument(false, "filtering with tuples or arrays not supported", "contract." + param.name, value);
      } else if (Array.isArray(value)) {
        topics.push(value.map((value2) => encodeTopic(param, value2)));
      } else {
        topics.push(encodeTopic(param, value));
      }
    });
    while (topics.length && topics[topics.length - 1] === null) {
      topics.pop();
    }
    return topics;
  }
  encodeEventLog(fragment, values) {
    if (typeof fragment === "string") {
      const f2 = this.getEvent(fragment);
      assertArgument(f2, "unknown event", "eventFragment", fragment);
      fragment = f2;
    }
    const topics = [];
    const dataTypes = [];
    const dataValues = [];
    if (!fragment.anonymous) {
      topics.push(fragment.topicHash);
    }
    assertArgument(values.length === fragment.inputs.length, "event arguments/values mismatch", "values", values);
    fragment.inputs.forEach((param, index2) => {
      const value = values[index2];
      if (param.indexed) {
        if (param.type === "string") {
          topics.push(id(value));
        } else if (param.type === "bytes") {
          topics.push(keccak256(value));
        } else if (param.baseType === "tuple" || param.baseType === "array") {
          throw new Error("not implemented");
        } else {
          topics.push(__privateGet(this, _abiCoder).encode([param.type], [value]));
        }
      } else {
        dataTypes.push(param);
        dataValues.push(value);
      }
    });
    return {
      data: __privateGet(this, _abiCoder).encode(dataTypes, dataValues),
      topics
    };
  }
  // Decode a filter for the event and the search criteria
  decodeEventLog(fragment, data, topics) {
    if (typeof fragment === "string") {
      const f2 = this.getEvent(fragment);
      assertArgument(f2, "unknown event", "eventFragment", fragment);
      fragment = f2;
    }
    if (topics != null && !fragment.anonymous) {
      const eventTopic = fragment.topicHash;
      assertArgument(isHexString(topics[0], 32) && topics[0].toLowerCase() === eventTopic, "fragment/topic mismatch", "topics[0]", topics[0]);
      topics = topics.slice(1);
    }
    const indexed = [];
    const nonIndexed = [];
    const dynamic = [];
    fragment.inputs.forEach((param, index2) => {
      if (param.indexed) {
        if (param.type === "string" || param.type === "bytes" || param.baseType === "tuple" || param.baseType === "array") {
          indexed.push(ParamType.from({ type: "bytes32", name: param.name }));
          dynamic.push(true);
        } else {
          indexed.push(param);
          dynamic.push(false);
        }
      } else {
        nonIndexed.push(param);
        dynamic.push(false);
      }
    });
    const resultIndexed = topics != null ? __privateGet(this, _abiCoder).decode(indexed, concat(topics)) : null;
    const resultNonIndexed = __privateGet(this, _abiCoder).decode(nonIndexed, data, true);
    const values = [];
    const keys = [];
    let nonIndexedIndex = 0, indexedIndex = 0;
    fragment.inputs.forEach((param, index2) => {
      let value = null;
      if (param.indexed) {
        if (resultIndexed == null) {
          value = new Indexed(null);
        } else if (dynamic[index2]) {
          value = new Indexed(resultIndexed[indexedIndex++]);
        } else {
          try {
            value = resultIndexed[indexedIndex++];
          } catch (error) {
            value = error;
          }
        }
      } else {
        try {
          value = resultNonIndexed[nonIndexedIndex++];
        } catch (error) {
          value = error;
        }
      }
      values.push(value);
      keys.push(param.name || null);
    });
    return Result.fromItems(values, keys);
  }
  parseTransaction(tx) {
    const data = getBytes(tx.data, "tx.data");
    const value = getBigInt(tx.value != null ? tx.value : 0, "tx.value");
    const fragment = this.getFunction(hexlify(data.slice(0, 4)));
    if (!fragment) {
      return null;
    }
    const args = __privateGet(this, _abiCoder).decode(fragment.inputs, data.slice(4));
    return new TransactionDescription(fragment, fragment.selector, args, value);
  }
  parseCallResult(data) {
    throw new Error("@TODO");
  }
  parseLog(log) {
    const fragment = this.getEvent(log.topics[0]);
    if (!fragment || fragment.anonymous) {
      return null;
    }
    return new LogDescription(fragment, fragment.topicHash, this.decodeEventLog(fragment, log.data, log.topics));
  }
  parseError(data) {
    const hexData = hexlify(data);
    const fragment = this.getError(dataSlice(hexData, 0, 4));
    if (!fragment) {
      return null;
    }
    const args = __privateGet(this, _abiCoder).decode(fragment.inputs, dataSlice(hexData, 4));
    return new ErrorDescription(fragment, fragment.selector, args);
  }
  static from(value) {
    if (value instanceof _Interface) {
      return value;
    }
    if (typeof value === "string") {
      return new _Interface(JSON.parse(value));
    }
    if (typeof value.format === "function") {
      return new _Interface(value.format("json"));
    }
    return new _Interface(value);
  }
};
let Interface = _Interface;
_errors = new WeakMap();
_events = new WeakMap();
_functions = new WeakMap();
_abiCoder = new WeakMap();
_getFunction = new WeakSet();
getFunction_fn = function(key, values, forceUnique) {
  if (isHexString(key)) {
    const selector = key.toLowerCase();
    for (const fragment of __privateGet(this, _functions).values()) {
      if (selector === fragment.selector) {
        return fragment;
      }
    }
    return null;
  }
  if (key.indexOf("(") === -1) {
    const matching = [];
    for (const [name, fragment] of __privateGet(this, _functions)) {
      if (name.split(
        "("
        /* fix:) */
      )[0] === key) {
        matching.push(fragment);
      }
    }
    if (values) {
      const lastValue = values.length > 0 ? values[values.length - 1] : null;
      let valueLength = values.length;
      let allowOptions = true;
      if (Typed.isTyped(lastValue) && lastValue.type === "overrides") {
        allowOptions = false;
        valueLength--;
      }
      for (let i = matching.length - 1; i >= 0; i--) {
        const inputs = matching[i].inputs.length;
        if (inputs !== valueLength && (!allowOptions || inputs !== valueLength - 1)) {
          matching.splice(i, 1);
        }
      }
      for (let i = matching.length - 1; i >= 0; i--) {
        const inputs = matching[i].inputs;
        for (let j = 0; j < values.length; j++) {
          if (!Typed.isTyped(values[j])) {
            continue;
          }
          if (j >= inputs.length) {
            if (values[j].type === "overrides") {
              continue;
            }
            matching.splice(i, 1);
            break;
          }
          if (values[j].type !== inputs[j].baseType) {
            matching.splice(i, 1);
            break;
          }
        }
      }
    }
    if (matching.length === 1 && values && values.length !== matching[0].inputs.length) {
      const lastArg = values[values.length - 1];
      if (lastArg == null || Array.isArray(lastArg) || typeof lastArg !== "object") {
        matching.splice(0, 1);
      }
    }
    if (matching.length === 0) {
      return null;
    }
    if (matching.length > 1 && forceUnique) {
      const matchStr = matching.map((m2) => JSON.stringify(m2.format())).join(", ");
      assertArgument(false, `ambiguous function description (i.e. matches ${matchStr})`, "key", key);
    }
    return matching[0];
  }
  const result = __privateGet(this, _functions).get(FunctionFragment.from(key).format());
  if (result) {
    return result;
  }
  return null;
};
_getEvent = new WeakSet();
getEvent_fn = function(key, values, forceUnique) {
  if (isHexString(key)) {
    const eventTopic = key.toLowerCase();
    for (const fragment of __privateGet(this, _events).values()) {
      if (eventTopic === fragment.topicHash) {
        return fragment;
      }
    }
    return null;
  }
  if (key.indexOf("(") === -1) {
    const matching = [];
    for (const [name, fragment] of __privateGet(this, _events)) {
      if (name.split(
        "("
        /* fix:) */
      )[0] === key) {
        matching.push(fragment);
      }
    }
    if (values) {
      for (let i = matching.length - 1; i >= 0; i--) {
        if (matching[i].inputs.length < values.length) {
          matching.splice(i, 1);
        }
      }
      for (let i = matching.length - 1; i >= 0; i--) {
        const inputs = matching[i].inputs;
        for (let j = 0; j < values.length; j++) {
          if (!Typed.isTyped(values[j])) {
            continue;
          }
          if (values[j].type !== inputs[j].baseType) {
            matching.splice(i, 1);
            break;
          }
        }
      }
    }
    if (matching.length === 0) {
      return null;
    }
    if (matching.length > 1 && forceUnique) {
      const matchStr = matching.map((m2) => JSON.stringify(m2.format())).join(", ");
      assertArgument(false, `ambiguous event description (i.e. matches ${matchStr})`, "key", key);
    }
    return matching[0];
  }
  const result = __privateGet(this, _events).get(EventFragment.from(key).format());
  if (result) {
    return result;
  }
  return null;
};
const BN_0$2 = BigInt(0);
function getValue(value) {
  if (value == null) {
    return null;
  }
  return value;
}
function toJson(value) {
  if (value == null) {
    return null;
  }
  return value.toString();
}
class FeeData {
  constructor(gasPrice, maxFeePerGas, maxPriorityFeePerGas) {
    __publicField(this, "gasPrice");
    __publicField(this, "maxFeePerGas");
    __publicField(this, "maxPriorityFeePerGas");
    defineProperties(this, {
      gasPrice: getValue(gasPrice),
      maxFeePerGas: getValue(maxFeePerGas),
      maxPriorityFeePerGas: getValue(maxPriorityFeePerGas)
    });
  }
  toJSON() {
    const { gasPrice, maxFeePerGas, maxPriorityFeePerGas } = this;
    return {
      _type: "FeeData",
      gasPrice: toJson(gasPrice),
      maxFeePerGas: toJson(maxFeePerGas),
      maxPriorityFeePerGas: toJson(maxPriorityFeePerGas)
    };
  }
}
function copyRequest(req) {
  const result = {};
  if (req.to) {
    result.to = req.to;
  }
  if (req.from) {
    result.from = req.from;
  }
  if (req.data) {
    result.data = hexlify(req.data);
  }
  const bigIntKeys = "chainId,gasLimit,gasPrice,maxFeePerGas, maxPriorityFeePerGas,value".split(/,/);
  for (const key of bigIntKeys) {
    if (!(key in req) || req[key] == null) {
      continue;
    }
    result[key] = getBigInt(req[key], `request.${key}`);
  }
  const numberKeys = "type,nonce".split(/,/);
  for (const key of numberKeys) {
    if (!(key in req) || req[key] == null) {
      continue;
    }
    result[key] = getNumber(req[key], `request.${key}`);
  }
  if (req.accessList) {
    result.accessList = accessListify(req.accessList);
  }
  if ("blockTag" in req) {
    result.blockTag = req.blockTag;
  }
  if ("enableCcipRead" in req) {
    result.enableCcipReadEnabled = !!req.enableCcipRead;
  }
  if ("customData" in req) {
    result.customData = req.customData;
  }
  return result;
}
class Block {
  constructor(block, provider) {
    __publicField(this, "provider");
    __publicField(this, "number");
    __publicField(this, "hash");
    __publicField(this, "timestamp");
    __publicField(this, "parentHash");
    __publicField(this, "nonce");
    __publicField(this, "difficulty");
    __publicField(this, "gasLimit");
    __publicField(this, "gasUsed");
    __publicField(this, "miner");
    __publicField(this, "extraData");
    __publicField(this, "baseFeePerGas");
    __privateAdd(this, _transactions, void 0);
    __privateSet(this, _transactions, block.transactions.map((tx) => {
      if (typeof tx !== "string") {
        return new TransactionResponse(tx, provider);
      }
      return tx;
    }));
    defineProperties(this, {
      provider,
      hash: getValue(block.hash),
      number: block.number,
      timestamp: block.timestamp,
      parentHash: block.parentHash,
      nonce: block.nonce,
      difficulty: block.difficulty,
      gasLimit: block.gasLimit,
      gasUsed: block.gasUsed,
      miner: block.miner,
      extraData: block.extraData,
      baseFeePerGas: getValue(block.baseFeePerGas)
    });
  }
  /**
   *  Returns the list of transaction hashes.
   */
  get transactions() {
    return __privateGet(this, _transactions).map((tx) => {
      if (typeof tx === "string") {
        return tx;
      }
      return tx.hash;
    });
  }
  get prefetchedTransactions() {
    const txs = __privateGet(this, _transactions).slice();
    if (txs.length === 0) {
      return [];
    }
    assert$1(typeof txs[0] === "object", "transactions were not prefetched with block request", "UNSUPPORTED_OPERATION", {
      operation: "transactionResponses()"
    });
    return txs;
  }
  toJSON() {
    const { baseFeePerGas, difficulty, extraData, gasLimit, gasUsed, hash: hash2, miner, nonce, number: number2, parentHash, timestamp, transactions } = this;
    return {
      _type: "Block",
      baseFeePerGas: toJson(baseFeePerGas),
      difficulty: toJson(difficulty),
      extraData,
      gasLimit: toJson(gasLimit),
      gasUsed: toJson(gasUsed),
      hash: hash2,
      miner,
      nonce,
      number: number2,
      parentHash,
      timestamp,
      transactions
    };
  }
  [Symbol.iterator]() {
    let index2 = 0;
    const txs = this.transactions;
    return {
      next: () => {
        if (index2 < this.length) {
          return {
            value: txs[index2++],
            done: false
          };
        }
        return { value: void 0, done: true };
      }
    };
  }
  get length() {
    return __privateGet(this, _transactions).length;
  }
  get date() {
    if (this.timestamp == null) {
      return null;
    }
    return new Date(this.timestamp * 1e3);
  }
  async getTransaction(indexOrHash) {
    let tx = void 0;
    if (typeof indexOrHash === "number") {
      tx = __privateGet(this, _transactions)[indexOrHash];
    } else {
      const hash2 = indexOrHash.toLowerCase();
      for (const v2 of __privateGet(this, _transactions)) {
        if (typeof v2 === "string") {
          if (v2 !== hash2) {
            continue;
          }
          tx = v2;
          break;
        } else {
          if (v2.hash === hash2) {
            continue;
          }
          tx = v2;
          break;
        }
      }
    }
    if (tx == null) {
      throw new Error("no such tx");
    }
    if (typeof tx === "string") {
      return await this.provider.getTransaction(tx);
    } else {
      return tx;
    }
  }
  getPrefetchedTransaction(indexOrHash) {
    const txs = this.prefetchedTransactions;
    if (typeof indexOrHash === "number") {
      return txs[indexOrHash];
    }
    indexOrHash = indexOrHash.toLowerCase();
    for (const tx of txs) {
      if (tx.hash === indexOrHash) {
        return tx;
      }
    }
    assertArgument(false, "no matching transaction", "indexOrHash", indexOrHash);
  }
  isMined() {
    return !!this.hash;
  }
  isLondon() {
    return !!this.baseFeePerGas;
  }
  orphanedEvent() {
    if (!this.isMined()) {
      throw new Error("");
    }
    return createOrphanedBlockFilter(this);
  }
}
_transactions = new WeakMap();
class Log {
  constructor(log, provider) {
    __publicField(this, "provider");
    __publicField(this, "transactionHash");
    __publicField(this, "blockHash");
    __publicField(this, "blockNumber");
    __publicField(this, "removed");
    __publicField(this, "address");
    __publicField(this, "data");
    __publicField(this, "topics");
    __publicField(this, "index");
    __publicField(this, "transactionIndex");
    this.provider = provider;
    const topics = Object.freeze(log.topics.slice());
    defineProperties(this, {
      transactionHash: log.transactionHash,
      blockHash: log.blockHash,
      blockNumber: log.blockNumber,
      removed: log.removed,
      address: log.address,
      data: log.data,
      topics,
      index: log.index,
      transactionIndex: log.transactionIndex
    });
  }
  toJSON() {
    const { address, blockHash, blockNumber, data, index: index2, removed, topics, transactionHash, transactionIndex } = this;
    return {
      _type: "log",
      address,
      blockHash,
      blockNumber,
      data,
      index: index2,
      removed,
      topics,
      transactionHash,
      transactionIndex
    };
  }
  async getBlock() {
    const block = await this.provider.getBlock(this.blockHash);
    assert$1(!!block, "failed to find transaction", "UNKNOWN_ERROR", {});
    return block;
  }
  async getTransaction() {
    const tx = await this.provider.getTransaction(this.transactionHash);
    assert$1(!!tx, "failed to find transaction", "UNKNOWN_ERROR", {});
    return tx;
  }
  async getTransactionReceipt() {
    const receipt = await this.provider.getTransactionReceipt(this.transactionHash);
    assert$1(!!receipt, "failed to find transaction receipt", "UNKNOWN_ERROR", {});
    return receipt;
  }
  removedEvent() {
    return createRemovedLogFilter(this);
  }
}
class TransactionReceipt {
  constructor(tx, provider) {
    __publicField(this, "provider");
    __publicField(this, "to");
    __publicField(this, "from");
    __publicField(this, "contractAddress");
    __publicField(this, "hash");
    __publicField(this, "index");
    __publicField(this, "blockHash");
    __publicField(this, "blockNumber");
    __publicField(this, "logsBloom");
    __publicField(this, "gasUsed");
    __publicField(this, "cumulativeGasUsed");
    __publicField(this, "gasPrice");
    __publicField(this, "type");
    //readonly byzantium!: boolean;
    __publicField(this, "status");
    __publicField(this, "root");
    __privateAdd(this, _logs, void 0);
    __privateSet(this, _logs, Object.freeze(tx.logs.map((log) => {
      return new Log(log, provider);
    })));
    defineProperties(this, {
      provider,
      to: tx.to,
      from: tx.from,
      contractAddress: tx.contractAddress,
      hash: tx.hash,
      index: tx.index,
      blockHash: tx.blockHash,
      blockNumber: tx.blockNumber,
      logsBloom: tx.logsBloom,
      gasUsed: tx.gasUsed,
      cumulativeGasUsed: tx.cumulativeGasUsed,
      gasPrice: tx.effectiveGasPrice || tx.gasPrice,
      type: tx.type,
      //byzantium: tx.byzantium,
      status: tx.status,
      root: tx.root
    });
  }
  get logs() {
    return __privateGet(this, _logs);
  }
  toJSON() {
    const {
      to,
      from,
      contractAddress,
      hash: hash2,
      index: index2,
      blockHash,
      blockNumber,
      logsBloom,
      logs,
      //byzantium, 
      status,
      root
    } = this;
    return {
      _type: "TransactionReceipt",
      blockHash,
      blockNumber,
      //byzantium, 
      contractAddress,
      cumulativeGasUsed: toJson(this.cumulativeGasUsed),
      from,
      gasPrice: toJson(this.gasPrice),
      gasUsed: toJson(this.gasUsed),
      hash: hash2,
      index: index2,
      logs,
      logsBloom,
      root,
      status,
      to
    };
  }
  get length() {
    return this.logs.length;
  }
  [Symbol.iterator]() {
    let index2 = 0;
    return {
      next: () => {
        if (index2 < this.length) {
          return { value: this.logs[index2++], done: false };
        }
        return { value: void 0, done: true };
      }
    };
  }
  get fee() {
    return this.gasUsed * this.gasPrice;
  }
  async getBlock() {
    const block = await this.provider.getBlock(this.blockHash);
    if (block == null) {
      throw new Error("TODO");
    }
    return block;
  }
  async getTransaction() {
    const tx = await this.provider.getTransaction(this.hash);
    if (tx == null) {
      throw new Error("TODO");
    }
    return tx;
  }
  async getResult() {
    return await this.provider.getTransactionResult(this.hash);
  }
  async confirmations() {
    return await this.provider.getBlockNumber() - this.blockNumber + 1;
  }
  removedEvent() {
    return createRemovedTransactionFilter(this);
  }
  reorderedEvent(other) {
    assert$1(!other || other.isMined(), "unmined 'other' transction cannot be orphaned", "UNSUPPORTED_OPERATION", { operation: "reorderedEvent(other)" });
    return createReorderedTransactionFilter(this, other);
  }
}
_logs = new WeakMap();
const _TransactionResponse = class {
  constructor(tx, provider) {
    __publicField(this, "provider");
    __publicField(this, "blockNumber");
    __publicField(this, "blockHash");
    __publicField(this, "index");
    __publicField(this, "hash");
    __publicField(this, "type");
    __publicField(this, "to");
    __publicField(this, "from");
    __publicField(this, "nonce");
    __publicField(this, "gasLimit");
    __publicField(this, "gasPrice");
    __publicField(this, "maxPriorityFeePerGas");
    __publicField(this, "maxFeePerGas");
    __publicField(this, "data");
    __publicField(this, "value");
    __publicField(this, "chainId");
    __publicField(this, "signature");
    __publicField(this, "accessList");
    __privateAdd(this, _startBlock, void 0);
    this.provider = provider;
    this.blockNumber = tx.blockNumber != null ? tx.blockNumber : null;
    this.blockHash = tx.blockHash != null ? tx.blockHash : null;
    this.hash = tx.hash;
    this.index = tx.index;
    this.type = tx.type;
    this.from = tx.from;
    this.to = tx.to || null;
    this.gasLimit = tx.gasLimit;
    this.nonce = tx.nonce;
    this.data = tx.data;
    this.value = tx.value;
    this.gasPrice = tx.gasPrice;
    this.maxPriorityFeePerGas = tx.maxPriorityFeePerGas != null ? tx.maxPriorityFeePerGas : null;
    this.maxFeePerGas = tx.maxFeePerGas != null ? tx.maxFeePerGas : null;
    this.chainId = tx.chainId;
    this.signature = tx.signature;
    this.accessList = tx.accessList != null ? tx.accessList : null;
    __privateSet(this, _startBlock, -1);
  }
  toJSON() {
    const { blockNumber, blockHash, index: index2, hash: hash2, type, to, from, nonce, data, signature, accessList } = this;
    return {
      _type: "TransactionReceipt",
      accessList,
      blockNumber,
      blockHash,
      chainId: toJson(this.chainId),
      data,
      from,
      gasLimit: toJson(this.gasLimit),
      gasPrice: toJson(this.gasPrice),
      hash: hash2,
      maxFeePerGas: toJson(this.maxFeePerGas),
      maxPriorityFeePerGas: toJson(this.maxPriorityFeePerGas),
      nonce,
      signature,
      to,
      index: index2,
      type,
      value: toJson(this.value)
    };
  }
  async getBlock() {
    let blockNumber = this.blockNumber;
    if (blockNumber == null) {
      const tx = await this.getTransaction();
      if (tx) {
        blockNumber = tx.blockNumber;
      }
    }
    if (blockNumber == null) {
      return null;
    }
    const block = this.provider.getBlock(blockNumber);
    if (block == null) {
      throw new Error("TODO");
    }
    return block;
  }
  async getTransaction() {
    return this.provider.getTransaction(this.hash);
  }
  async wait(_confirms, _timeout2) {
    const confirms = _confirms == null ? 1 : _confirms;
    const timeout = _timeout2 == null ? 0 : _timeout2;
    let startBlock = __privateGet(this, _startBlock);
    let nextScan = -1;
    let stopScanning = startBlock === -1 ? true : false;
    const checkReplacement = async () => {
      if (stopScanning) {
        return null;
      }
      const { blockNumber, nonce } = await resolveProperties({
        blockNumber: this.provider.getBlockNumber(),
        nonce: this.provider.getTransactionCount(this.from)
      });
      if (nonce < this.nonce) {
        startBlock = blockNumber;
        return;
      }
      if (stopScanning) {
        return null;
      }
      const mined = await this.getTransaction();
      if (mined && mined.blockNumber != null) {
        return;
      }
      if (nextScan === -1) {
        nextScan = startBlock - 3;
        if (nextScan < __privateGet(this, _startBlock)) {
          nextScan = __privateGet(this, _startBlock);
        }
      }
      while (nextScan <= blockNumber) {
        if (stopScanning) {
          return null;
        }
        const block = await this.provider.getBlock(nextScan, true);
        if (block == null) {
          return;
        }
        for (const hash2 of block) {
          if (hash2 === this.hash) {
            return;
          }
        }
        for (let i = 0; i < block.length; i++) {
          const tx = await block.getTransaction(i);
          if (tx.from === this.from && tx.nonce === this.nonce) {
            if (stopScanning) {
              return null;
            }
            const receipt2 = await this.provider.getTransactionReceipt(tx.hash);
            if (receipt2 == null) {
              return;
            }
            if (blockNumber - receipt2.blockNumber + 1 < confirms) {
              return;
            }
            let reason = "replaced";
            if (tx.data === this.data && tx.to === this.to && tx.value === this.value) {
              reason = "repriced";
            } else if (tx.data === "0x" && tx.from === tx.to && tx.value === BN_0$2) {
              reason = "cancelled";
            }
            assert$1(false, "transaction was replaced", "TRANSACTION_REPLACED", {
              cancelled: reason === "replaced" || reason === "cancelled",
              reason,
              replacement: tx.replaceableTransaction(startBlock),
              hash: tx.hash,
              receipt: receipt2
            });
          }
        }
        nextScan++;
      }
      return;
    };
    const receipt = await this.provider.getTransactionReceipt(this.hash);
    if (receipt) {
      if (await receipt.confirmations() >= confirms) {
        return receipt;
      }
    } else {
      await checkReplacement();
      if (confirms === 0) {
        return null;
      }
    }
    const waiter = new Promise((resolve, reject) => {
      const cancellers = [];
      const cancel = () => {
        cancellers.forEach((c) => c());
      };
      cancellers.push(() => {
        stopScanning = true;
      });
      if (timeout > 0) {
        const timer = setTimeout(() => {
          cancel();
          reject(makeError("wait for transaction timeout", "TIMEOUT"));
        }, timeout);
        cancellers.push(() => {
          clearTimeout(timer);
        });
      }
      const txListener = async (receipt2) => {
        if (await receipt2.confirmations() >= confirms) {
          cancel();
          resolve(receipt2);
        }
      };
      cancellers.push(() => {
        this.provider.off(this.hash, txListener);
      });
      this.provider.on(this.hash, txListener);
      if (startBlock >= 0) {
        const replaceListener = async () => {
          try {
            await checkReplacement();
          } catch (error) {
            if (isError(error, "TRANSACTION_REPLACED")) {
              cancel();
              reject(error);
              return;
            }
          }
          if (!stopScanning) {
            this.provider.once("block", replaceListener);
          }
        };
        cancellers.push(() => {
          this.provider.off("block", replaceListener);
        });
        this.provider.once("block", replaceListener);
      }
    });
    return await waiter;
  }
  isMined() {
    return this.blockHash != null;
  }
  isLegacy() {
    return this.type === 0;
  }
  isBerlin() {
    return this.type === 1;
  }
  isLondon() {
    return this.type === 2;
  }
  removedEvent() {
    assert$1(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    return createRemovedTransactionFilter(this);
  }
  reorderedEvent(other) {
    assert$1(this.isMined(), "unmined transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    assert$1(!other || other.isMined(), "unmined 'other' transaction canot be orphaned", "UNSUPPORTED_OPERATION", { operation: "removeEvent()" });
    return createReorderedTransactionFilter(this, other);
  }
  replaceableTransaction(startBlock) {
    assertArgument(Number.isInteger(startBlock) && startBlock >= 0, "invalid startBlock", "startBlock", startBlock);
    const tx = new _TransactionResponse(this, this.provider);
    __privateSet(tx, _startBlock, startBlock);
    return tx;
  }
};
let TransactionResponse = _TransactionResponse;
_startBlock = new WeakMap();
function createOrphanedBlockFilter(block) {
  return { orphan: "drop-block", hash: block.hash, number: block.number };
}
function createReorderedTransactionFilter(tx, other) {
  return { orphan: "reorder-transaction", tx, other };
}
function createRemovedTransactionFilter(tx) {
  return { orphan: "drop-transaction", tx };
}
function createRemovedLogFilter(log) {
  return { orphan: "drop-log", log: {
    transactionHash: log.transactionHash,
    blockHash: log.blockHash,
    blockNumber: log.blockNumber,
    address: log.address,
    data: log.data,
    topics: Object.freeze(log.topics.slice()),
    index: log.index
  } };
}
class EventLog extends Log {
  constructor(log, iface, fragment) {
    super(log, log.provider);
    __publicField(this, "interface");
    __publicField(this, "fragment");
    __publicField(this, "args");
    const args = iface.decodeEventLog(fragment, log.data, log.topics);
    defineProperties(this, { args, fragment, interface: iface });
  }
  get eventName() {
    return this.fragment.name;
  }
  get eventSignature() {
    return this.fragment.format();
  }
}
class ContractTransactionReceipt extends TransactionReceipt {
  constructor(iface, provider, tx) {
    super(tx, provider);
    __privateAdd(this, _interface, void 0);
    __privateSet(this, _interface, iface);
  }
  get logs() {
    return super.logs.map((log) => {
      const fragment = log.topics.length ? __privateGet(this, _interface).getEvent(log.topics[0]) : null;
      if (fragment) {
        return new EventLog(log, __privateGet(this, _interface), fragment);
      } else {
        return log;
      }
    });
  }
}
_interface = new WeakMap();
class ContractTransactionResponse extends TransactionResponse {
  constructor(iface, provider, tx) {
    super(tx, provider);
    __privateAdd(this, _interface2, void 0);
    __privateSet(this, _interface2, iface);
  }
  async wait(confirms) {
    const receipt = await super.wait();
    if (receipt == null) {
      return null;
    }
    return new ContractTransactionReceipt(__privateGet(this, _interface2), this.provider, receipt);
  }
}
_interface2 = new WeakMap();
class ContractUnknownEventPayload extends EventPayload {
  constructor(contract, listener, filter, log) {
    super(contract, listener, filter);
    __publicField(this, "log");
    defineProperties(this, { log });
  }
  async getBlock() {
    return await this.log.getBlock();
  }
  async getTransaction() {
    return await this.log.getTransaction();
  }
  async getTransactionReceipt() {
    return await this.log.getTransactionReceipt();
  }
}
class ContractEventPayload extends ContractUnknownEventPayload {
  constructor(contract, listener, filter, fragment, _log) {
    super(contract, listener, filter, new EventLog(_log, contract.interface, fragment));
    const args = contract.interface.decodeEventLog(fragment, this.log.data, this.log.topics);
    defineProperties(this, { args, fragment });
  }
  get eventName() {
    return this.fragment.name;
  }
  get eventSignature() {
    return this.fragment.format();
  }
}
const BN_0$1 = BigInt(0);
function canCall(value) {
  return value && typeof value.call === "function";
}
function canEstimate(value) {
  return value && typeof value.estimateGas === "function";
}
function canResolve(value) {
  return value && typeof value.resolveName === "function";
}
function canSend(value) {
  return value && typeof value.sendTransaction === "function";
}
class PreparedTopicFilter {
  constructor(contract, fragment, args) {
    __privateAdd(this, _filter, void 0);
    __publicField(this, "fragment");
    defineProperties(this, { fragment });
    if (fragment.inputs.length < args.length) {
      throw new Error("too many arguments");
    }
    const runner = getRunner(contract.runner, "resolveName");
    const resolver = canResolve(runner) ? runner : null;
    __privateSet(this, _filter, async function() {
      const resolvedArgs = await Promise.all(fragment.inputs.map((param, index2) => {
        const arg = args[index2];
        if (arg == null) {
          return null;
        }
        return param.walkAsync(args[index2], (type, value) => {
          if (type === "address") {
            return resolveAddress(value, resolver);
          }
          return value;
        });
      }));
      return contract.interface.encodeFilterTopics(fragment, resolvedArgs);
    }());
  }
  getTopicFilter() {
    return __privateGet(this, _filter);
  }
}
_filter = new WeakMap();
function _WrappedMethodBase() {
  return Function;
}
function getRunner(value, feature) {
  if (value == null) {
    return null;
  }
  if (typeof value[feature] === "function") {
    return value;
  }
  if (value.provider && typeof value.provider[feature] === "function") {
    return value.provider;
  }
  return null;
}
function getProvider(value) {
  if (value == null) {
    return null;
  }
  return value.provider || null;
}
async function copyOverrides(arg, allowed) {
  const overrides = copyRequest(Typed.dereference(arg, "overrides"));
  assertArgument(overrides.to == null || (allowed || []).indexOf("to") >= 0, "cannot override to", "overrides.to", overrides.to);
  assertArgument(overrides.data == null || (allowed || []).indexOf("data") >= 0, "cannot override data", "overrides.data", overrides.data);
  if (overrides.from) {
    overrides.from = await resolveAddress(overrides.from);
  }
  return overrides;
}
async function resolveArgs(_runner, inputs, args) {
  const runner = getRunner(_runner, "resolveName");
  const resolver = canResolve(runner) ? runner : null;
  return await Promise.all(inputs.map((param, index2) => {
    return param.walkAsync(args[index2], (type, value) => {
      value = Typed.dereference(value, type);
      if (type === "address") {
        return resolveAddress(value, resolver);
      }
      return value;
    });
  }));
}
class WrappedFallback {
  constructor(contract) {
    __publicField(this, "_contract");
    defineProperties(this, { _contract: contract });
    const proxy = new Proxy(this, {
      // Perform send when called
      apply: async (target, thisArg, args) => {
        return await target.send(...args);
      }
    });
    return proxy;
  }
  async populateTransaction(overrides) {
    const tx = await copyOverrides(overrides, ["data"]);
    tx.to = await this._contract.getAddress();
    const iface = this._contract.interface;
    const payable = iface.receive || iface.fallback && iface.fallback.payable;
    assertArgument(payable || (tx.value || BN_0$1) === BN_0$1, "cannot send value to non-payable contract", "overrides.value", tx.value);
    assertArgument(iface.fallback || (tx.data || "0x") === "0x", "cannot send data to receive-only contract", "overrides.data", tx.data);
    return tx;
  }
  async staticCall(overrides) {
    const runner = getRunner(this._contract.runner, "call");
    assert$1(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const tx = await this.populateTransaction(overrides);
    try {
      return await runner.call(tx);
    } catch (error) {
      if (isCallException(error) && error.data) {
        throw this._contract.interface.makeError(error.data, tx);
      }
      throw error;
    }
  }
  async send(overrides) {
    const runner = this._contract.runner;
    assert$1(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const tx = await runner.sendTransaction(await this.populateTransaction(overrides));
    const provider = getProvider(this._contract.runner);
    return new ContractTransactionResponse(this._contract.interface, provider, tx);
  }
  async estimateGas(overrides) {
    const runner = getRunner(this._contract.runner, "estimateGas");
    assert$1(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
    return await runner.estimateGas(await this.populateTransaction(overrides));
  }
}
class WrappedMethod extends _WrappedMethodBase() {
  constructor(contract, key) {
    super();
    __publicField(this, "name", "");
    // Investigate!
    __publicField(this, "_contract");
    __publicField(this, "_key");
    defineProperties(this, {
      name: contract.interface.getFunctionName(key),
      _contract: contract,
      _key: key
    });
    const proxy = new Proxy(this, {
      // Perform the default operation for this fragment type
      apply: async (target, thisArg, args) => {
        const fragment = target.getFragment(...args);
        if (fragment.constant) {
          return await target.staticCall(...args);
        }
        return await target.send(...args);
      }
    });
    return proxy;
  }
  // Only works on non-ambiguous keys (refined fragment is always non-ambiguous)
  get fragment() {
    const fragment = this._contract.interface.getFunction(this._key);
    assert$1(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment"
    });
    return fragment;
  }
  getFragment(...args) {
    const fragment = this._contract.interface.getFunction(this._key, args);
    assert$1(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment"
    });
    return fragment;
  }
  async populateTransaction(...args) {
    const fragment = this.getFragment(...args);
    let overrides = {};
    if (fragment.inputs.length + 1 === args.length) {
      overrides = await copyOverrides(args.pop());
    }
    if (fragment.inputs.length !== args.length) {
      throw new Error("internal error: fragment inputs doesn't match arguments; should not happen");
    }
    const resolvedArgs = await resolveArgs(this._contract.runner, fragment.inputs, args);
    return Object.assign({}, overrides, await resolveProperties({
      to: this._contract.getAddress(),
      data: this._contract.interface.encodeFunctionData(fragment, resolvedArgs)
    }));
  }
  async staticCall(...args) {
    const result = await this.staticCallResult(...args);
    if (result.length === 1) {
      return result[0];
    }
    return result;
  }
  async send(...args) {
    const runner = this._contract.runner;
    assert$1(canSend(runner), "contract runner does not support sending transactions", "UNSUPPORTED_OPERATION", { operation: "sendTransaction" });
    const tx = await runner.sendTransaction(await this.populateTransaction(...args));
    const provider = getProvider(this._contract.runner);
    return new ContractTransactionResponse(this._contract.interface, provider, tx);
  }
  async estimateGas(...args) {
    const runner = getRunner(this._contract.runner, "estimateGas");
    assert$1(canEstimate(runner), "contract runner does not support gas estimation", "UNSUPPORTED_OPERATION", { operation: "estimateGas" });
    return await runner.estimateGas(await this.populateTransaction(...args));
  }
  async staticCallResult(...args) {
    const runner = getRunner(this._contract.runner, "call");
    assert$1(canCall(runner), "contract runner does not support calling", "UNSUPPORTED_OPERATION", { operation: "call" });
    const tx = await this.populateTransaction(...args);
    let result = "0x";
    try {
      result = await runner.call(tx);
    } catch (error) {
      if (isCallException(error) && error.data) {
        throw this._contract.interface.makeError(error.data, tx);
      }
      throw error;
    }
    const fragment = this.getFragment(...args);
    return this._contract.interface.decodeFunctionResult(fragment, result);
  }
}
function _WrappedEventBase() {
  return Function;
}
class WrappedEvent extends _WrappedEventBase() {
  constructor(contract, key) {
    super();
    __publicField(this, "name", "");
    // @TODO: investigate 
    __publicField(this, "_contract");
    __publicField(this, "_key");
    defineProperties(this, {
      name: contract.interface.getEventName(key),
      _contract: contract,
      _key: key
    });
    return new Proxy(this, {
      // Perform the default operation for this fragment type
      apply: (target, thisArg, args) => {
        return new PreparedTopicFilter(contract, target.getFragment(...args), args);
      }
    });
  }
  // Only works on non-ambiguous keys
  get fragment() {
    const fragment = this._contract.interface.getEvent(this._key);
    assert$1(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment"
    });
    return fragment;
  }
  getFragment(...args) {
    const fragment = this._contract.interface.getEvent(this._key, args);
    assert$1(fragment, "no matching fragment", "UNSUPPORTED_OPERATION", {
      operation: "fragment"
    });
    return fragment;
  }
}
const internal = Symbol.for("_ethersInternal_contract");
const internalValues = /* @__PURE__ */ new WeakMap();
function setInternal(contract, values) {
  internalValues.set(contract[internal], values);
}
function getInternal(contract) {
  return internalValues.get(contract[internal]);
}
function isDeferred(value) {
  return value && typeof value === "object" && "getTopicFilter" in value && typeof value.getTopicFilter === "function" && value.fragment;
}
async function getSubInfo(contract, event) {
  let topics;
  let fragment = null;
  if (Array.isArray(event)) {
    const topicHashify = function(name) {
      if (isHexString(name, 32)) {
        return name;
      }
      const fragment2 = contract.interface.getEvent(name);
      assertArgument(fragment2, "unknown fragment", "name", name);
      return fragment2.topicHash;
    };
    topics = event.map((e) => {
      if (e == null) {
        return null;
      }
      if (Array.isArray(e)) {
        return e.map(topicHashify);
      }
      return topicHashify(e);
    });
  } else if (event === "*") {
    topics = [null];
  } else if (typeof event === "string") {
    if (isHexString(event, 32)) {
      topics = [event];
    } else {
      fragment = contract.interface.getEvent(event);
      assertArgument(fragment, "unknown fragment", "event", event);
      topics = [fragment.topicHash];
    }
  } else if (isDeferred(event)) {
    topics = await event.getTopicFilter();
  } else if ("fragment" in event) {
    fragment = event.fragment;
    topics = [fragment.topicHash];
  } else {
    assertArgument(false, "unknown event name", "event", event);
  }
  topics = topics.map((t2) => {
    if (t2 == null) {
      return null;
    }
    if (Array.isArray(t2)) {
      const items = Array.from(new Set(t2.map((t3) => t3.toLowerCase())).values());
      if (items.length === 1) {
        return items[0];
      }
      items.sort();
      return items;
    }
    return t2.toLowerCase();
  });
  const tag = topics.map((t2) => {
    if (t2 == null) {
      return "null";
    }
    if (Array.isArray(t2)) {
      return t2.join("|");
    }
    return t2;
  }).join("&");
  return { fragment, tag, topics };
}
async function hasSub(contract, event) {
  const { subs } = getInternal(contract);
  return subs.get((await getSubInfo(contract, event)).tag) || null;
}
async function getSub(contract, operation, event) {
  const provider = getProvider(contract.runner);
  assert$1(provider, "contract runner does not support subscribing", "UNSUPPORTED_OPERATION", { operation });
  const { fragment, tag, topics } = await getSubInfo(contract, event);
  const { addr, subs } = getInternal(contract);
  let sub = subs.get(tag);
  if (!sub) {
    const address = addr ? addr : contract;
    const filter = { address, topics };
    const listener = (log) => {
      let foundFragment = fragment;
      if (foundFragment == null) {
        try {
          foundFragment = contract.interface.getEvent(log.topics[0]);
        } catch (error) {
        }
      }
      if (foundFragment) {
        const _foundFragment = foundFragment;
        const args = fragment ? contract.interface.decodeEventLog(fragment, log.data, log.topics) : [];
        emit(contract, event, args, (listener2) => {
          return new ContractEventPayload(contract, listener2, event, _foundFragment, log);
        });
      } else {
        emit(contract, event, [], (listener2) => {
          return new ContractUnknownEventPayload(contract, listener2, event, log);
        });
      }
    };
    let starting = [];
    const start = () => {
      if (starting.length) {
        return;
      }
      starting.push(provider.on(filter, listener));
    };
    const stop = async () => {
      if (starting.length == 0) {
        return;
      }
      let started = starting;
      starting = [];
      await Promise.all(started);
      provider.off(filter, listener);
    };
    sub = { tag, listeners: [], start, stop };
    subs.set(tag, sub);
  }
  return sub;
}
let lastEmit = Promise.resolve();
async function _emit(contract, event, args, payloadFunc) {
  await lastEmit;
  const sub = await hasSub(contract, event);
  if (!sub) {
    return false;
  }
  const count = sub.listeners.length;
  sub.listeners = sub.listeners.filter(({ listener, once }) => {
    const passArgs = Array.from(args);
    if (payloadFunc) {
      passArgs.push(payloadFunc(once ? null : listener));
    }
    try {
      listener.call(contract, ...passArgs);
    } catch (error) {
    }
    return !once;
  });
  return count > 0;
}
async function emit(contract, event, args, payloadFunc) {
  try {
    await lastEmit;
  } catch (error) {
  }
  const resultPromise = _emit(contract, event, args, payloadFunc);
  lastEmit = resultPromise;
  return await resultPromise;
}
const passProperties = ["then"];
const _BaseContract = class {
  constructor(target, abi2, runner, _deployTx) {
    __publicField(this, "target");
    __publicField(this, "interface");
    __publicField(this, "runner");
    __publicField(this, "filters");
    __publicField(this, _a);
    __publicField(this, "fallback");
    if (runner == null) {
      runner = null;
    }
    const iface = Interface.from(abi2);
    defineProperties(this, { target, runner, interface: iface });
    Object.defineProperty(this, internal, { value: {} });
    let addrPromise;
    let addr = null;
    let deployTx = null;
    if (_deployTx) {
      const provider = getProvider(runner);
      deployTx = new ContractTransactionResponse(this.interface, provider, _deployTx);
    }
    let subs = /* @__PURE__ */ new Map();
    if (typeof target === "string") {
      if (isHexString(target)) {
        addr = target;
        addrPromise = Promise.resolve(target);
      } else {
        const resolver = getRunner(runner, "resolveName");
        if (!canResolve(resolver)) {
          throw makeError("contract runner does not support name resolution", "UNSUPPORTED_OPERATION", {
            operation: "resolveName"
          });
        }
        addrPromise = resolver.resolveName(target).then((addr2) => {
          if (addr2 == null) {
            throw new Error("TODO");
          }
          getInternal(this).addr = addr2;
          return addr2;
        });
      }
    } else {
      addrPromise = target.getAddress().then((addr2) => {
        if (addr2 == null) {
          throw new Error("TODO");
        }
        getInternal(this).addr = addr2;
        return addr2;
      });
    }
    setInternal(this, { addrPromise, addr, deployTx, subs });
    const filters = new Proxy({}, {
      get: (target2, _prop, receiver) => {
        if (passProperties.indexOf(_prop) >= 0) {
          return Reflect.get(target2, _prop, receiver);
        }
        const prop = String(_prop);
        const result = this.getEvent(prop);
        if (result) {
          return result;
        }
        throw new Error(`unknown contract event: ${prop}`);
      }
    });
    defineProperties(this, { filters });
    defineProperties(this, {
      fallback: iface.receive || iface.fallback ? new WrappedFallback(this) : null
    });
    return new Proxy(this, {
      get: (target2, _prop, receiver) => {
        if (_prop in target2 || passProperties.indexOf(_prop) >= 0) {
          return Reflect.get(target2, _prop, receiver);
        }
        const prop = String(_prop);
        const result = target2.getFunction(prop);
        if (result) {
          return result;
        }
        throw new Error(`unknown contract method: ${prop}`);
      }
    });
  }
  connect(runner) {
    return new _BaseContract(this.target, this.interface, runner);
  }
  async getAddress() {
    return await getInternal(this).addrPromise;
  }
  async getDeployedCode() {
    const provider = getProvider(this.runner);
    assert$1(provider, "runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "getDeployedCode" });
    const code = await provider.getCode(await this.getAddress());
    if (code === "0x") {
      return null;
    }
    return code;
  }
  async waitForDeployment() {
    const deployTx = this.deploymentTransaction();
    if (deployTx) {
      await deployTx.wait();
      return this;
    }
    const code = await this.getDeployedCode();
    if (code != null) {
      return this;
    }
    const provider = getProvider(this.runner);
    assert$1(provider != null, "contract runner does not support .provider", "UNSUPPORTED_OPERATION", { operation: "waitForDeployment" });
    return new Promise((resolve, reject) => {
      const checkCode = async () => {
        try {
          const code2 = await this.getDeployedCode();
          if (code2 != null) {
            return resolve(this);
          }
          provider.once("block", checkCode);
        } catch (error) {
          reject(error);
        }
      };
      checkCode();
    });
  }
  deploymentTransaction() {
    return getInternal(this).deployTx;
  }
  getFunction(key) {
    if (typeof key !== "string") {
      key = key.format();
    }
    return new WrappedMethod(this, key);
  }
  getEvent(key) {
    if (typeof key !== "string") {
      key = key.format();
    }
    return new WrappedEvent(this, key);
  }
  async queryTransaction(hash2) {
    throw new Error("@TODO");
  }
  async queryFilter(event, fromBlock, toBlock) {
    if (fromBlock == null) {
      fromBlock = 0;
    }
    if (toBlock == null) {
      toBlock = "latest";
    }
    const { addr, addrPromise } = getInternal(this);
    const address = addr ? addr : await addrPromise;
    const { fragment, topics } = await getSubInfo(this, event);
    const filter = { address, topics, fromBlock, toBlock };
    const provider = getProvider(this.runner);
    assert$1(provider, "contract runner does not have a provider", "UNSUPPORTED_OPERATION", { operation: "queryFilter" });
    return (await provider.getLogs(filter)).map((log) => {
      let foundFragment = fragment;
      if (foundFragment == null) {
        try {
          foundFragment = this.interface.getEvent(log.topics[0]);
        } catch (error) {
        }
      }
      if (foundFragment) {
        return new EventLog(log, this.interface, foundFragment);
      } else {
        return new Log(log, provider);
      }
    });
  }
  async on(event, listener) {
    const sub = await getSub(this, "on", event);
    sub.listeners.push({ listener, once: false });
    sub.start();
    return this;
  }
  async once(event, listener) {
    const sub = await getSub(this, "once", event);
    sub.listeners.push({ listener, once: true });
    sub.start();
    return this;
  }
  async emit(event, ...args) {
    return await emit(this, event, args, null);
  }
  async listenerCount(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return 0;
      }
      return sub.listeners.length;
    }
    const { subs } = getInternal(this);
    let total = 0;
    for (const { listeners } of subs.values()) {
      total += listeners.length;
    }
    return total;
  }
  async listeners(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return [];
      }
      return sub.listeners.map(({ listener }) => listener);
    }
    const { subs } = getInternal(this);
    let result = [];
    for (const { listeners } of subs.values()) {
      result = result.concat(listeners.map(({ listener }) => listener));
    }
    return result;
  }
  async off(event, listener) {
    const sub = await hasSub(this, event);
    if (!sub) {
      return this;
    }
    if (listener) {
      const index2 = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
      if (index2 >= 0) {
        sub.listeners.splice(index2, 1);
      }
    }
    if (listener == null || sub.listeners.length === 0) {
      sub.stop();
      getInternal(this).subs.delete(sub.tag);
    }
    return this;
  }
  async removeAllListeners(event) {
    if (event) {
      const sub = await hasSub(this, event);
      if (!sub) {
        return this;
      }
      sub.stop();
      getInternal(this).subs.delete(sub.tag);
    } else {
      const { subs } = getInternal(this);
      for (const { tag, stop } of subs.values()) {
        stop();
        subs.delete(tag);
      }
    }
    return this;
  }
  // Alias for "on"
  async addListener(event, listener) {
    return await this.on(event, listener);
  }
  // Alias for "off"
  async removeListener(event, listener) {
    return await this.off(event, listener);
  }
  static buildClass(abi2) {
    class CustomContract extends _BaseContract {
      constructor(address, runner = null) {
        super(address, abi2, runner);
      }
    }
    return CustomContract;
  }
  static from(target, abi2, runner) {
    if (runner == null) {
      runner = null;
    }
    const contract = new this(target, abi2, runner);
    return contract;
  }
};
let BaseContract = _BaseContract;
_a = internal;
function _ContractBase() {
  return BaseContract;
}
class Contract extends _ContractBase() {
}
function getIpfsLink(link) {
  if (link.match(/^ipfs:\/\/ipfs\//i)) {
    link = link.substring(12);
  } else if (link.match(/^ipfs:\/\//i)) {
    link = link.substring(7);
  } else {
    assertArgument(false, "unsupported IPFS format", "link", link);
  }
  return `https://gateway.ipfs.io/ipfs/${link}`;
}
class MulticoinProviderPlugin {
  constructor(name) {
    __publicField(this, "name");
    defineProperties(this, { name });
  }
  connect(proivder) {
    return this;
  }
  supportsCoinType(coinType) {
    return false;
  }
  async encodeAddress(coinType, address) {
    throw new Error("unsupported coin");
  }
  async decodeAddress(coinType, data) {
    throw new Error("unsupported coin");
  }
}
const matcherIpfs = new RegExp("^(ipfs)://(.*)$", "i");
const matchers = [
  new RegExp("^(https)://(.*)$", "i"),
  new RegExp("^(data):(.*)$", "i"),
  matcherIpfs,
  new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i")
];
const _EnsResolver = class {
  constructor(provider, address, name) {
    __privateAdd(this, _fetch);
    __publicField(this, "provider");
    __publicField(this, "address");
    __publicField(this, "name");
    // For EIP-2544 names, the ancestor that provided the resolver
    __privateAdd(this, _supports2544, void 0);
    __privateAdd(this, _resolver, void 0);
    defineProperties(this, { provider, address, name });
    __privateSet(this, _supports2544, null);
    __privateSet(this, _resolver, new Contract(address, [
      "function supportsInterface(bytes4) view returns (bool)",
      "function resolve(bytes, bytes) view returns (bytes)",
      "function addr(bytes32) view returns (address)",
      "function addr(bytes32, uint) view returns (address)",
      "function text(bytes32, string) view returns (string)",
      "function contenthash() view returns (bytes)"
    ], provider));
  }
  async supportsWildcard() {
    if (__privateGet(this, _supports2544) == null) {
      __privateSet(this, _supports2544, (async () => {
        try {
          return await __privateGet(this, _resolver).supportsInterface("0x9061b923");
        } catch (error) {
          if (isError(error, "CALL_EXCEPTION")) {
            return false;
          }
          __privateSet(this, _supports2544, null);
          throw error;
        }
      })());
    }
    return await __privateGet(this, _supports2544);
  }
  async getAddress(coinType) {
    if (coinType == null) {
      coinType = 60;
    }
    if (coinType === 60) {
      try {
        const result = await __privateMethod(this, _fetch, fetch_fn).call(this, "addr(bytes32)");
        if (result == null || result === ZeroAddress) {
          return null;
        }
        return result;
      } catch (error) {
        if (isError(error, "CALL_EXCEPTION")) {
          return null;
        }
        throw error;
      }
    }
    let coinPlugin = null;
    for (const plugin of this.provider.plugins) {
      if (!(plugin instanceof MulticoinProviderPlugin)) {
        continue;
      }
      if (plugin.supportsCoinType(coinType)) {
        coinPlugin = plugin;
        break;
      }
    }
    if (coinPlugin == null) {
      return null;
    }
    const data = await __privateMethod(this, _fetch, fetch_fn).call(this, "addr(bytes32,uint)", [coinType]);
    if (data == null || data === "0x") {
      return null;
    }
    const address = await coinPlugin.encodeAddress(coinType, data);
    if (address != null) {
      return address;
    }
    assert$1(false, `invalid coin data`, "UNSUPPORTED_OPERATION", {
      operation: `getAddress(${coinType})`,
      info: { coinType, data }
    });
  }
  async getText(key) {
    const data = await __privateMethod(this, _fetch, fetch_fn).call(this, "text(bytes32,string)", [key]);
    if (data == null || data === "0x") {
      return null;
    }
    return data;
  }
  async getContentHash() {
    const data = await __privateMethod(this, _fetch, fetch_fn).call(this, "contenthash()");
    if (data == null || data === "0x") {
      return null;
    }
    const ipfs = data.match(/^0x(e3010170|e5010172)(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/);
    if (ipfs) {
      const scheme = ipfs[1] === "e3010170" ? "ipfs" : "ipns";
      const length = parseInt(ipfs[4], 16);
      if (ipfs[5].length === length * 2) {
        return `${scheme}://${encodeBase58("0x" + ipfs[2])}`;
      }
    }
    const swarm = data.match(/^0xe40101fa011b20([0-9a-f]*)$/);
    if (swarm && swarm[1].length === 64) {
      return `bzz://${swarm[1]}`;
    }
    assert$1(false, `invalid or unsupported content hash data`, "UNSUPPORTED_OPERATION", {
      operation: "getContentHash()",
      info: { data }
    });
  }
  async getAvatar() {
    const avatar = await this._getAvatar();
    return avatar.url;
  }
  async _getAvatar() {
    const linkage = [{ type: "name", value: this.name }];
    try {
      const avatar = await this.getText("avatar");
      if (avatar == null) {
        linkage.push({ type: "!avatar", value: "" });
        return { url: null, linkage };
      }
      linkage.push({ type: "avatar", value: avatar });
      for (let i = 0; i < matchers.length; i++) {
        const match = avatar.match(matchers[i]);
        if (match == null) {
          continue;
        }
        const scheme = match[1].toLowerCase();
        switch (scheme) {
          case "https":
          case "data":
            linkage.push({ type: "url", value: avatar });
            return { linkage, url: avatar };
          case "ipfs": {
            const url = getIpfsLink(avatar);
            linkage.push({ type: "ipfs", value: avatar });
            linkage.push({ type: "url", value: url });
            return { linkage, url };
          }
          case "erc721":
          case "erc1155": {
            const selector = scheme === "erc721" ? "tokenURI(uint256)" : "uri(uint256)";
            linkage.push({ type: scheme, value: avatar });
            const owner = await this.getAddress();
            if (owner == null) {
              linkage.push({ type: "!owner", value: "" });
              return { url: null, linkage };
            }
            const comps = (match[2] || "").split("/");
            if (comps.length !== 2) {
              linkage.push({ type: `!${scheme}caip`, value: match[2] || "" });
              return { url: null, linkage };
            }
            const tokenId = comps[1];
            const contract = new Contract(comps[0], [
              // ERC-721
              "function tokenURI(uint) view returns (string)",
              "function ownerOf(uint) view returns (address)",
              // ERC-1155
              "function uri(uint) view returns (string)",
              "function balanceOf(address, uint256) view returns (uint)"
            ], this.provider);
            if (scheme === "erc721") {
              const tokenOwner = await contract.ownerOf(tokenId);
              if (owner !== tokenOwner) {
                linkage.push({ type: "!owner", value: tokenOwner });
                return { url: null, linkage };
              }
              linkage.push({ type: "owner", value: tokenOwner });
            } else if (scheme === "erc1155") {
              const balance = await contract.balanceOf(owner, tokenId);
              if (!balance) {
                linkage.push({ type: "!balance", value: "0" });
                return { url: null, linkage };
              }
              linkage.push({ type: "balance", value: balance.toString() });
            }
            let metadataUrl = await contract[selector](tokenId);
            if (metadataUrl == null || metadataUrl === "0x") {
              linkage.push({ type: "!metadata-url", value: "" });
              return { url: null, linkage };
            }
            linkage.push({ type: "metadata-url-base", value: metadataUrl });
            if (scheme === "erc1155") {
              metadataUrl = metadataUrl.replace("{id}", toBeHex(tokenId, 32).substring(2));
              linkage.push({ type: "metadata-url-expanded", value: metadataUrl });
            }
            if (metadataUrl.match(/^ipfs:/i)) {
              metadataUrl = getIpfsLink(metadataUrl);
            }
            linkage.push({ type: "metadata-url", value: metadataUrl });
            let metadata = {};
            const response = await new FetchRequest(metadataUrl).send();
            response.assertOk();
            try {
              metadata = response.bodyJson;
            } catch (error) {
              try {
                linkage.push({ type: "!metadata", value: response.bodyText });
              } catch (error2) {
                const bytes2 = response.body;
                if (bytes2) {
                  linkage.push({ type: "!metadata", value: hexlify(bytes2) });
                }
                return { url: null, linkage };
              }
              return { url: null, linkage };
            }
            if (!metadata) {
              linkage.push({ type: "!metadata", value: "" });
              return { url: null, linkage };
            }
            linkage.push({ type: "metadata", value: JSON.stringify(metadata) });
            let imageUrl = metadata.image;
            if (typeof imageUrl !== "string") {
              linkage.push({ type: "!imageUrl", value: "" });
              return { url: null, linkage };
            }
            if (imageUrl.match(/^(https:\/\/|data:)/i)) {
            } else {
              const ipfs = imageUrl.match(matcherIpfs);
              if (ipfs == null) {
                linkage.push({ type: "!imageUrl-ipfs", value: imageUrl });
                return { url: null, linkage };
              }
              linkage.push({ type: "imageUrl-ipfs", value: imageUrl });
              imageUrl = getIpfsLink(imageUrl);
            }
            linkage.push({ type: "url", value: imageUrl });
            return { linkage, url: imageUrl };
          }
        }
      }
    } catch (error) {
    }
    return { linkage, url: null };
  }
  static async getEnsAddress(provider) {
    const network = await provider.getNetwork();
    const ensPlugin = network.getPlugin("org.ethers.plugins.network.Ens");
    assert$1(ensPlugin, "network does not support ENS", "UNSUPPORTED_OPERATION", {
      operation: "getEnsAddress",
      info: { network }
    });
    return ensPlugin.address;
  }
  static async fromName(provider, name) {
    var _a2;
    let currentName = name;
    while (true) {
      if (currentName === "" || currentName === ".") {
        return null;
      }
      if (name !== "eth" && currentName === "eth") {
        return null;
      }
      const addr = await __privateMethod(_a2 = _EnsResolver, _getResolver, getResolver_fn).call(_a2, provider, currentName);
      if (addr != null) {
        const resolver = new _EnsResolver(provider, addr, name);
        if (currentName !== name && !await resolver.supportsWildcard()) {
          return null;
        }
        return resolver;
      }
      currentName = currentName.split(".").slice(1).join(".");
    }
  }
};
let EnsResolver = _EnsResolver;
_supports2544 = new WeakMap();
_resolver = new WeakMap();
_fetch = new WeakSet();
fetch_fn = async function(funcName, params) {
  params = (params || []).slice();
  const iface = __privateGet(this, _resolver).interface;
  params.unshift(namehash(this.name));
  let fragment = null;
  if (await this.supportsWildcard()) {
    fragment = iface.getFunction(funcName);
    assert$1(fragment, "missing fragment", "UNKNOWN_ERROR", {
      info: { funcName }
    });
    params = [
      dnsEncode(this.name),
      iface.encodeFunctionData(fragment, params)
    ];
    funcName = "resolve(bytes,bytes)";
  }
  params.push({
    ccipReadEnable: true
  });
  try {
    const result = await __privateGet(this, _resolver)[funcName](...params);
    if (fragment) {
      return iface.decodeFunctionResult(fragment, result)[0];
    }
    return result;
  } catch (error) {
    if (!isError(error, "CALL_EXCEPTION")) {
      throw error;
    }
  }
  return null;
};
_getResolver = new WeakSet();
getResolver_fn = async function(provider, name) {
  const ensAddr = await _EnsResolver.getEnsAddress(provider);
  try {
    const contract = new Contract(ensAddr, [
      "function resolver(bytes32) view returns (address)"
    ], provider);
    const addr = await contract.resolver(namehash(name), {
      enableCcipRead: true
    });
    if (addr === ZeroAddress) {
      return null;
    }
    return addr;
  } catch (error) {
    throw error;
  }
  return null;
};
__privateAdd(EnsResolver, _getResolver);
const BN_0 = BigInt(0);
function allowNull(format, nullValue) {
  return function(value) {
    if (value == null) {
      return nullValue;
    }
    return format(value);
  };
}
function arrayOf(format) {
  return (array) => {
    if (!Array.isArray(array)) {
      throw new Error("not an array");
    }
    return array.map((i) => format(i));
  };
}
function object(format, altNames) {
  return (value) => {
    const result = {};
    for (const key in format) {
      let srcKey = key;
      if (altNames && key in altNames && !(srcKey in value)) {
        for (const altKey of altNames[key]) {
          if (altKey in value) {
            srcKey = altKey;
            break;
          }
        }
      }
      try {
        const nv = format[key](value[srcKey]);
        if (nv !== void 0) {
          result[key] = nv;
        }
      } catch (error) {
        const message = error instanceof Error ? error.message : "not-an-error";
        assert$1(false, `invalid value for value.${key} (${message})`, "BAD_DATA", { value });
      }
    }
    return result;
  };
}
function formatBoolean(value) {
  switch (value) {
    case true:
    case "true":
      return true;
    case false:
    case "false":
      return false;
  }
  assertArgument(false, `invalid boolean; ${JSON.stringify(value)}`, "value", value);
}
function formatData(value) {
  assertArgument(isHexString(value, true), "invalid data", "value", value);
  return value;
}
function formatHash(value) {
  assertArgument(isHexString(value, 32), "invalid hash", "value", value);
  return value;
}
const _formatLog = object({
  address: getAddress,
  blockHash: formatHash,
  blockNumber: getNumber,
  data: formatData,
  index: getNumber,
  removed: formatBoolean,
  topics: arrayOf(formatHash),
  transactionHash: formatHash,
  transactionIndex: getNumber
}, {
  index: ["logIndex"]
});
function formatLog(value) {
  return _formatLog(value);
}
const _formatBlock = object({
  hash: allowNull(formatHash),
  parentHash: formatHash,
  number: getNumber,
  timestamp: getNumber,
  nonce: allowNull(formatData),
  difficulty: getBigInt,
  gasLimit: getBigInt,
  gasUsed: getBigInt,
  miner: allowNull(getAddress),
  extraData: formatData,
  baseFeePerGas: allowNull(getBigInt)
});
function formatBlock(value) {
  const result = _formatBlock(value);
  result.transactions = value.transactions.map((tx) => {
    if (typeof tx === "string") {
      return tx;
    }
    return formatTransactionResponse(tx);
  });
  return result;
}
const _formatReceiptLog = object({
  transactionIndex: getNumber,
  blockNumber: getNumber,
  transactionHash: formatHash,
  address: getAddress,
  topics: arrayOf(formatHash),
  data: formatData,
  index: getNumber,
  blockHash: formatHash
}, {
  index: ["logIndex"]
});
function formatReceiptLog(value) {
  return _formatReceiptLog(value);
}
const _formatTransactionReceipt = object({
  to: allowNull(getAddress, null),
  from: allowNull(getAddress, null),
  contractAddress: allowNull(getAddress, null),
  // should be allowNull(hash), but broken-EIP-658 support is handled in receipt
  index: getNumber,
  root: allowNull(hexlify),
  gasUsed: getBigInt,
  logsBloom: allowNull(formatData),
  blockHash: formatHash,
  hash: formatHash,
  logs: arrayOf(formatReceiptLog),
  blockNumber: getNumber,
  //confirmations: allowNull(getNumber, null),
  cumulativeGasUsed: getBigInt,
  effectiveGasPrice: allowNull(getBigInt),
  status: allowNull(getNumber),
  type: allowNull(getNumber, 0)
}, {
  effectiveGasPrice: ["gasPrice"],
  hash: ["transactionHash"],
  index: ["transactionIndex"]
});
function formatTransactionReceipt(value) {
  return _formatTransactionReceipt(value);
}
function formatTransactionResponse(value) {
  if (value.to && getBigInt(value.to) === BN_0) {
    value.to = "0x0000000000000000000000000000000000000000";
  }
  const result = object({
    hash: formatHash,
    type: (value2) => {
      if (value2 === "0x" || value2 == null) {
        return 0;
      }
      return getNumber(value2);
    },
    accessList: allowNull(accessListify, null),
    blockHash: allowNull(formatHash, null),
    blockNumber: allowNull(getNumber, null),
    transactionIndex: allowNull(getNumber, null),
    //confirmations: allowNull(getNumber, null),
    from: getAddress,
    // either (gasPrice) or (maxPriorityFeePerGas + maxFeePerGas) must be set
    gasPrice: allowNull(getBigInt),
    maxPriorityFeePerGas: allowNull(getBigInt),
    maxFeePerGas: allowNull(getBigInt),
    gasLimit: getBigInt,
    to: allowNull(getAddress, null),
    value: getBigInt,
    nonce: getNumber,
    data: formatData,
    creates: allowNull(getAddress, null),
    chainId: allowNull(getBigInt, null)
  }, {
    data: ["input"],
    gasLimit: ["gas"]
  })(value);
  if (result.to == null && result.creates == null) {
    result.creates = getCreateAddress(result);
  }
  if ((value.type === 1 || value.type === 2) && value.accessList == null) {
    result.accessList = [];
  }
  if (value.signature) {
    result.signature = Signature2.from(value.signature);
  } else {
    result.signature = Signature2.from(value);
  }
  if (result.chainId == null) {
    const chainId = result.signature.legacyChainId;
    if (chainId != null) {
      result.chainId = chainId;
    }
  }
  if (result.blockHash && getBigInt(result.blockHash) === BN_0) {
    result.blockHash = null;
  }
  return result;
}
const EnsAddress = "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e";
class NetworkPlugin {
  constructor(name) {
    __publicField(this, "name");
    defineProperties(this, { name });
  }
  clone() {
    return new NetworkPlugin(this.name);
  }
}
class GasCostPlugin extends NetworkPlugin {
  constructor(effectiveBlock, costs) {
    if (effectiveBlock == null) {
      effectiveBlock = 0;
    }
    super(`org.ethers.network.plugins.GasCost#${effectiveBlock || 0}`);
    __publicField(this, "effectiveBlock");
    __publicField(this, "txBase");
    __publicField(this, "txCreate");
    __publicField(this, "txDataZero");
    __publicField(this, "txDataNonzero");
    __publicField(this, "txAccessListStorageKey");
    __publicField(this, "txAccessListAddress");
    const props = { effectiveBlock };
    function set(name, nullish) {
      let value = (costs || {})[name];
      if (value == null) {
        value = nullish;
      }
      assertArgument(typeof value === "number", `invalud value for ${name}`, "costs", costs);
      props[name] = value;
    }
    set("txBase", 21e3);
    set("txCreate", 32e3);
    set("txDataZero", 4);
    set("txDataNonzero", 16);
    set("txAccessListStorageKey", 1900);
    set("txAccessListAddress", 2400);
    defineProperties(this, props);
  }
  clone() {
    return new GasCostPlugin(this.effectiveBlock, this);
  }
}
class EnsPlugin extends NetworkPlugin {
  constructor(address, targetNetwork) {
    super("org.ethers.plugins.network.Ens");
    // The ENS contract address
    __publicField(this, "address");
    // The network ID that the ENS contract lives on
    __publicField(this, "targetNetwork");
    defineProperties(this, {
      address: address || EnsAddress,
      targetNetwork: targetNetwork == null ? 1 : targetNetwork
    });
  }
  clone() {
    return new EnsPlugin(this.address, this.targetNetwork);
  }
}
const Networks = /* @__PURE__ */ new Map();
const _Network = class {
  constructor(name, chainId) {
    __privateAdd(this, _name, void 0);
    __privateAdd(this, _chainId2, void 0);
    __privateAdd(this, _plugins, void 0);
    __privateSet(this, _name, name);
    __privateSet(this, _chainId2, getBigInt(chainId));
    __privateSet(this, _plugins, /* @__PURE__ */ new Map());
  }
  toJSON() {
    return { name: this.name, chainId: this.chainId };
  }
  get name() {
    return __privateGet(this, _name);
  }
  set name(value) {
    __privateSet(this, _name, value);
  }
  get chainId() {
    return __privateGet(this, _chainId2);
  }
  set chainId(value) {
    __privateSet(this, _chainId2, getBigInt(value, "chainId"));
  }
  get plugins() {
    return Array.from(__privateGet(this, _plugins).values());
  }
  attachPlugin(plugin) {
    if (__privateGet(this, _plugins).get(plugin.name)) {
      throw new Error(`cannot replace existing plugin: ${plugin.name} `);
    }
    __privateGet(this, _plugins).set(plugin.name, plugin.clone());
    return this;
  }
  getPlugin(name) {
    return __privateGet(this, _plugins).get(name) || null;
  }
  // Gets a list of Plugins which match basename, ignoring any fragment
  getPlugins(basename) {
    return this.plugins.filter((p2) => p2.name.split("#")[0] === basename);
  }
  clone() {
    const clone = new _Network(this.name, this.chainId);
    this.plugins.forEach((plugin) => {
      clone.attachPlugin(plugin.clone());
    });
    return clone;
  }
  computeIntrinsicGas(tx) {
    const costs = this.getPlugin("org.ethers.plugins.network.GasCost") || new GasCostPlugin();
    let gas = costs.txBase;
    if (tx.to == null) {
      gas += costs.txCreate;
    }
    if (tx.data) {
      for (let i = 2; i < tx.data.length; i += 2) {
        if (tx.data.substring(i, i + 2) === "00") {
          gas += costs.txDataZero;
        } else {
          gas += costs.txDataNonzero;
        }
      }
    }
    if (tx.accessList) {
      const accessList = accessListify(tx.accessList);
      for (const addr in accessList) {
        gas += costs.txAccessListAddress + costs.txAccessListStorageKey * accessList[addr].storageKeys.length;
      }
    }
    return gas;
  }
  static from(network) {
    injectCommonNetworks();
    if (network == null) {
      return _Network.from("mainnet");
    }
    if (typeof network === "number") {
      network = BigInt(network);
    }
    if (typeof network === "string" || typeof network === "bigint") {
      const networkFunc = Networks.get(network);
      if (networkFunc) {
        return networkFunc();
      }
      if (typeof network === "bigint") {
        return new _Network("unknown", network);
      }
      assertArgument(false, "unknown network", "network", network);
    }
    if (typeof network.clone === "function") {
      const clone = network.clone();
      return clone;
    }
    if (typeof network === "object") {
      assertArgument(typeof network.name === "string" && typeof network.chainId === "number", "invalid network object name or chainId", "network", network);
      const custom = new _Network(network.name, network.chainId);
      if (network.ensAddress || network.ensNetwork != null) {
        custom.attachPlugin(new EnsPlugin(network.ensAddress, network.ensNetwork));
      }
      return custom;
    }
    assertArgument(false, "invalid network", "network", network);
  }
  static register(nameOrChainId, networkFunc) {
    if (typeof nameOrChainId === "number") {
      nameOrChainId = BigInt(nameOrChainId);
    }
    const existing = Networks.get(nameOrChainId);
    if (existing) {
      assertArgument(false, `conflicting network for ${JSON.stringify(existing.name)}`, "nameOrChainId", nameOrChainId);
    }
    Networks.set(nameOrChainId, networkFunc);
  }
};
let Network = _Network;
_name = new WeakMap();
_chainId2 = new WeakMap();
_plugins = new WeakMap();
let injected = false;
function injectCommonNetworks() {
  if (injected) {
    return;
  }
  injected = true;
  function registerEth(name, chainId, options) {
    const func = function() {
      const network = new Network(name, chainId);
      if (options.ensNetwork != null) {
        network.attachPlugin(new EnsPlugin(null, options.ensNetwork));
      }
      if (options.priorityFee)
        ;
      network.attachPlugin(new GasCostPlugin());
      return network;
    };
    Network.register(name, func);
    Network.register(chainId, func);
    if (options.altNames) {
      options.altNames.forEach((name2) => {
        Network.register(name2, func);
      });
    }
  }
  registerEth("mainnet", 1, { ensNetwork: 1, altNames: ["homestead"] });
  registerEth("ropsten", 3, { ensNetwork: 3 });
  registerEth("rinkeby", 4, { ensNetwork: 4 });
  registerEth("goerli", 5, { ensNetwork: 5 });
  registerEth("kovan", 42, { ensNetwork: 42 });
  registerEth("classic", 61, {});
  registerEth("classicKotti", 6, {});
  registerEth("xdai", 100, { ensNetwork: 1 });
  registerEth("matic", 137, {
    ensNetwork: 1,
    //        priorityFee: 35000000000,
    etherscan: {
      apiKey: "W6T8DJW654GNTQ34EFEYYP3EZD9DD27CT7",
      url: "https://api.polygonscan.com/"
    }
  });
  registerEth("maticMumbai", 80001, {
    //        priorityFee: 35000000000,
    etherscan: {
      apiKey: "W6T8DJW654GNTQ34EFEYYP3EZD9DD27CT7",
      url: "https://api-testnet.polygonscan.com/"
    }
  });
  registerEth("bnb", 56, {
    ensNetwork: 1,
    etherscan: {
      apiKey: "EVTS3CU31AATZV72YQ55TPGXGMVIFUQ9M9",
      url: "http://api.bscscan.com"
    }
  });
  registerEth("bnbt", 97, {
    etherscan: {
      apiKey: "EVTS3CU31AATZV72YQ55TPGXGMVIFUQ9M9",
      url: "http://api-testnet.bscscan.com"
    }
  });
}
function copy$2(obj) {
  return JSON.parse(JSON.stringify(obj));
}
class PollingBlockSubscriber {
  constructor(provider) {
    __privateAdd(this, _poll);
    __privateAdd(this, _provider, void 0);
    __privateAdd(this, _poller, void 0);
    __privateAdd(this, _interval, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    __privateAdd(this, _blockNumber, void 0);
    __privateSet(this, _provider, provider);
    __privateSet(this, _poller, null);
    __privateSet(this, _interval, 4e3);
    __privateSet(this, _blockNumber, -2);
  }
  get pollingInterval() {
    return __privateGet(this, _interval);
  }
  set pollingInterval(value) {
    __privateSet(this, _interval, value);
  }
  start() {
    if (__privateGet(this, _poller)) {
      return;
    }
    __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _poll, poll_fn).bind(this), __privateGet(this, _interval)));
    __privateMethod(this, _poll, poll_fn).call(this);
  }
  stop() {
    if (!__privateGet(this, _poller)) {
      return;
    }
    __privateGet(this, _provider)._clearTimeout(__privateGet(this, _poller));
    __privateSet(this, _poller, null);
  }
  pause(dropWhilePaused) {
    this.stop();
    if (dropWhilePaused) {
      __privateSet(this, _blockNumber, -2);
    }
  }
  resume() {
    this.start();
  }
}
_provider = new WeakMap();
_poller = new WeakMap();
_interval = new WeakMap();
_blockNumber = new WeakMap();
_poll = new WeakSet();
poll_fn = async function() {
  const blockNumber = await __privateGet(this, _provider).getBlockNumber();
  if (__privateGet(this, _blockNumber) === -2) {
    __privateSet(this, _blockNumber, blockNumber);
    return;
  }
  if (blockNumber !== __privateGet(this, _blockNumber)) {
    for (let b2 = __privateGet(this, _blockNumber) + 1; b2 <= blockNumber; b2++) {
      if (__privateGet(this, _poller) == null) {
        return;
      }
      await __privateGet(this, _provider).emit("block", b2);
    }
    __privateSet(this, _blockNumber, blockNumber);
  }
  if (__privateGet(this, _poller) == null) {
    return;
  }
  __privateSet(this, _poller, __privateGet(this, _provider)._setTimeout(__privateMethod(this, _poll, poll_fn).bind(this), __privateGet(this, _interval)));
};
class OnBlockSubscriber {
  constructor(provider) {
    __privateAdd(this, _provider2, void 0);
    __privateAdd(this, _poll2, void 0);
    __privateAdd(this, _running, void 0);
    __privateSet(this, _provider2, provider);
    __privateSet(this, _running, false);
    __privateSet(this, _poll2, (blockNumber) => {
      this._poll(blockNumber, __privateGet(this, _provider2));
    });
  }
  async _poll(blockNumber, provider) {
    throw new Error("sub-classes must override this");
  }
  start() {
    if (__privateGet(this, _running)) {
      return;
    }
    __privateSet(this, _running, true);
    __privateGet(this, _poll2).call(this, -2);
    __privateGet(this, _provider2).on("block", __privateGet(this, _poll2));
  }
  stop() {
    if (!__privateGet(this, _running)) {
      return;
    }
    __privateSet(this, _running, false);
    __privateGet(this, _provider2).off("block", __privateGet(this, _poll2));
  }
  pause(dropWhilePaused) {
    this.stop();
  }
  resume() {
    this.start();
  }
}
_provider2 = new WeakMap();
_poll2 = new WeakMap();
_running = new WeakMap();
class PollingOrphanSubscriber extends OnBlockSubscriber {
  constructor(provider, filter) {
    super(provider);
    __privateAdd(this, _filter2, void 0);
    __privateSet(this, _filter2, copy$2(filter));
  }
  async _poll(blockNumber, provider) {
    throw new Error("@TODO");
  }
}
_filter2 = new WeakMap();
class PollingTransactionSubscriber extends OnBlockSubscriber {
  constructor(provider, hash2) {
    super(provider);
    __privateAdd(this, _hash, void 0);
    __privateSet(this, _hash, hash2);
  }
  async _poll(blockNumber, provider) {
    const tx = await provider.getTransactionReceipt(__privateGet(this, _hash));
    if (tx) {
      provider.emit(__privateGet(this, _hash), tx);
    }
  }
}
_hash = new WeakMap();
class PollingEventSubscriber {
  constructor(provider, filter) {
    __privateAdd(this, _poll3);
    __privateAdd(this, _provider3, void 0);
    __privateAdd(this, _filter3, void 0);
    __privateAdd(this, _poller2, void 0);
    __privateAdd(this, _running2, void 0);
    // The most recent block we have scanned for events. The value -2
    // indicates we still need to fetch an initial block number
    __privateAdd(this, _blockNumber2, void 0);
    __privateSet(this, _provider3, provider);
    __privateSet(this, _filter3, copy$2(filter));
    __privateSet(this, _poller2, __privateMethod(this, _poll3, poll_fn2).bind(this));
    __privateSet(this, _running2, false);
    __privateSet(this, _blockNumber2, -2);
  }
  start() {
    if (__privateGet(this, _running2)) {
      return;
    }
    __privateSet(this, _running2, true);
    if (__privateGet(this, _blockNumber2) === -2) {
      __privateGet(this, _provider3).getBlockNumber().then((blockNumber) => {
        __privateSet(this, _blockNumber2, blockNumber);
      });
    }
    __privateGet(this, _provider3).on("block", __privateGet(this, _poller2));
  }
  stop() {
    if (!__privateGet(this, _running2)) {
      return;
    }
    __privateSet(this, _running2, false);
    __privateGet(this, _provider3).off("block", __privateGet(this, _poller2));
  }
  pause(dropWhilePaused) {
    this.stop();
    if (dropWhilePaused) {
      __privateSet(this, _blockNumber2, -2);
    }
  }
  resume() {
    this.start();
  }
}
_provider3 = new WeakMap();
_filter3 = new WeakMap();
_poller2 = new WeakMap();
_running2 = new WeakMap();
_blockNumber2 = new WeakMap();
_poll3 = new WeakSet();
poll_fn2 = async function(blockNumber) {
  if (__privateGet(this, _blockNumber2) === -2) {
    return;
  }
  const filter = copy$2(__privateGet(this, _filter3));
  filter.fromBlock = __privateGet(this, _blockNumber2) + 1;
  filter.toBlock = blockNumber;
  const logs = await __privateGet(this, _provider3).getLogs(filter);
  if (logs.length === 0) {
    if (__privateGet(this, _blockNumber2) < blockNumber - 60) {
      __privateSet(this, _blockNumber2, blockNumber - 60);
    }
    return;
  }
  __privateSet(this, _blockNumber2, blockNumber);
  for (const log of logs) {
    __privateGet(this, _provider3).emit(__privateGet(this, _filter3), log);
  }
};
const BN_2 = BigInt(2);
const MAX_CCIP_REDIRECTS = 10;
function isPromise(value) {
  return value && typeof value.then === "function";
}
function getTag(prefix, value) {
  return prefix + ":" + JSON.stringify(value, (k2, v2) => {
    if (v2 == null) {
      return "null";
    }
    if (typeof v2 === "bigint") {
      return `bigint:${v2.toString()}`;
    }
    if (typeof v2 === "string") {
      return v2.toLowerCase();
    }
    if (typeof v2 === "object" && !Array.isArray(v2)) {
      const keys = Object.keys(v2);
      keys.sort();
      return keys.reduce((accum, key) => {
        accum[key] = v2[key];
        return accum;
      }, {});
    }
    return v2;
  });
}
class UnmanagedSubscriber {
  constructor(name) {
    __publicField(this, "name");
    defineProperties(this, { name });
  }
  start() {
  }
  stop() {
  }
  pause(dropWhilePaused) {
  }
  resume() {
  }
}
function copy$1(value) {
  return JSON.parse(JSON.stringify(value));
}
function concisify(items) {
  items = Array.from(new Set(items).values());
  items.sort();
  return items;
}
async function getSubscription(_event2, provider) {
  if (_event2 == null) {
    throw new Error("invalid event");
  }
  if (Array.isArray(_event2)) {
    _event2 = { topics: _event2 };
  }
  if (typeof _event2 === "string") {
    switch (_event2) {
      case "block":
      case "pending":
      case "debug":
      case "network": {
        return { type: _event2, tag: _event2 };
      }
    }
  }
  if (isHexString(_event2, 32)) {
    const hash2 = _event2.toLowerCase();
    return { type: "transaction", tag: getTag("tx", { hash: hash2 }), hash: hash2 };
  }
  if (_event2.orphan) {
    const event = _event2;
    return { type: "orphan", tag: getTag("orphan", event), filter: copy$1(event) };
  }
  if (_event2.address || _event2.topics) {
    const event = _event2;
    const filter = {
      topics: (event.topics || []).map((t2) => {
        if (t2 == null) {
          return null;
        }
        if (Array.isArray(t2)) {
          return concisify(t2.map((t3) => t3.toLowerCase()));
        }
        return t2.toLowerCase();
      })
    };
    if (event.address) {
      const addresses = [];
      const promises = [];
      const addAddress = (addr) => {
        if (isHexString(addr)) {
          addresses.push(addr);
        } else {
          promises.push((async () => {
            addresses.push(await resolveAddress(addr, provider));
          })());
        }
      };
      if (Array.isArray(event.address)) {
        event.address.forEach(addAddress);
      } else {
        addAddress(event.address);
      }
      if (promises.length) {
        await Promise.all(promises);
      }
      filter.address = concisify(addresses.map((a) => a.toLowerCase()));
    }
    return { filter, tag: getTag("event", filter), type: "event" };
  }
  assertArgument(false, "unknown ProviderEvent", "event", _event2);
}
function getTime() {
  return new Date().getTime();
}
class AbstractProvider {
  // @TODO: This should be a () => Promise<Network> so network can be
  // done when needed; or rely entirely on _detectNetwork?
  constructor(_network3) {
    // Shares multiple identical requests made during the same 250ms
    __privateAdd(this, _perform);
    __privateAdd(this, _call);
    __privateAdd(this, _checkNetwork);
    // Account
    __privateAdd(this, _getAccountValue);
    __privateAdd(this, _getBlock);
    __privateAdd(this, _hasSub);
    __privateAdd(this, _getSub);
    __privateAdd(this, _subs, void 0);
    __privateAdd(this, _plugins2, void 0);
    // null=unpaused, true=paused+dropWhilePaused, false=paused
    __privateAdd(this, _pausedState, void 0);
    __privateAdd(this, _networkPromise, void 0);
    __privateAdd(this, _anyNetwork, void 0);
    __privateAdd(this, _performCache, void 0);
    // The most recent block number if running an event or -1 if no "block" event
    __privateAdd(this, _lastBlockNumber, void 0);
    __privateAdd(this, _nextTimer, void 0);
    __privateAdd(this, _timers, void 0);
    __privateAdd(this, _disableCcipRead, void 0);
    if (_network3 === "any") {
      __privateSet(this, _anyNetwork, true);
      __privateSet(this, _networkPromise, null);
    } else if (_network3) {
      const network = Network.from(_network3);
      __privateSet(this, _anyNetwork, false);
      __privateSet(this, _networkPromise, Promise.resolve(network));
      setTimeout(() => {
        this.emit("network", network, null);
      }, 0);
    } else {
      __privateSet(this, _anyNetwork, false);
      __privateSet(this, _networkPromise, null);
    }
    __privateSet(this, _lastBlockNumber, -1);
    __privateSet(this, _performCache, /* @__PURE__ */ new Map());
    __privateSet(this, _subs, /* @__PURE__ */ new Map());
    __privateSet(this, _plugins2, /* @__PURE__ */ new Map());
    __privateSet(this, _pausedState, null);
    __privateSet(this, _nextTimer, 1);
    __privateSet(this, _timers, /* @__PURE__ */ new Map());
    __privateSet(this, _disableCcipRead, false);
  }
  get provider() {
    return this;
  }
  get plugins() {
    return Array.from(__privateGet(this, _plugins2).values());
  }
  attachPlugin(plugin) {
    if (__privateGet(this, _plugins2).get(plugin.name)) {
      throw new Error(`cannot replace existing plugin: ${plugin.name} `);
    }
    __privateGet(this, _plugins2).set(plugin.name, plugin.connect(this));
    return this;
  }
  getPlugin(name) {
    return __privateGet(this, _plugins2).get(name) || null;
  }
  get disableCcipRead() {
    return __privateGet(this, _disableCcipRead);
  }
  set disableCcipRead(value) {
    __privateSet(this, _disableCcipRead, !!value);
  }
  async ccipReadFetch(tx, calldata, urls) {
    if (this.disableCcipRead || urls.length === 0 || tx.to == null) {
      return null;
    }
    const sender = tx.to.toLowerCase();
    const data = calldata.toLowerCase();
    const errorMessages = [];
    for (let i = 0; i < urls.length; i++) {
      const url = urls[i];
      const href = url.replace("{sender}", sender).replace("{data}", data);
      const request = new FetchRequest(href);
      if (url.indexOf("{data}") === -1) {
        request.body = { data, sender };
      }
      this.emit("debug", { action: "sendCcipReadFetchRequest", request, index: i, urls });
      let errorMessage = "unknown error";
      const resp = await request.send();
      try {
        const result = resp.bodyJson;
        if (result.data) {
          this.emit("debug", { action: "receiveCcipReadFetchResult", request, result });
          return result.data;
        }
        if (result.message) {
          errorMessage = result.message;
        }
        this.emit("debug", { action: "receiveCcipReadFetchError", request, result });
      } catch (error) {
      }
      assert$1(resp.statusCode < 400 || resp.statusCode >= 500, `response not found during CCIP fetch: ${errorMessage}`, "OFFCHAIN_FAULT", { reason: "404_MISSING_RESOURCE", transaction: tx, info: { url, errorMessage } });
      errorMessages.push(errorMessage);
    }
    assert$1(false, `error encountered during CCIP fetch: ${errorMessages.map((m2) => JSON.stringify(m2)).join(", ")}`, "OFFCHAIN_FAULT", {
      reason: "500_SERVER_ERROR",
      transaction: tx,
      info: { urls, errorMessages }
    });
  }
  _wrapBlock(value, network) {
    return new Block(formatBlock(value), this);
  }
  _wrapLog(value, network) {
    return new Log(formatLog(value), this);
  }
  _wrapTransactionReceipt(value, network) {
    return new TransactionReceipt(formatTransactionReceipt(value), this);
  }
  _wrapTransactionResponse(tx, network) {
    return new TransactionResponse(tx, this);
  }
  _detectNetwork() {
    assert$1(false, "sub-classes must implement this", "UNSUPPORTED_OPERATION", {
      operation: "_detectNetwork"
    });
  }
  // Sub-classes should override this and handle PerformActionRequest requests, calling
  // the super for any unhandled actions.
  async _perform(req) {
    assert$1(false, `unsupported method: ${req.method}`, "UNSUPPORTED_OPERATION", {
      operation: req.method,
      info: req
    });
  }
  // State
  async getBlockNumber() {
    const blockNumber = getNumber(await __privateMethod(this, _perform, perform_fn).call(this, { method: "getBlockNumber" }), "%response");
    if (__privateGet(this, _lastBlockNumber) >= 0) {
      __privateSet(this, _lastBlockNumber, blockNumber);
    }
    return blockNumber;
  }
  _getAddress(address) {
    return resolveAddress(address, this);
  }
  _getBlockTag(blockTag) {
    if (blockTag == null) {
      return "latest";
    }
    switch (blockTag) {
      case "earliest":
        return "0x0";
      case "latest":
      case "pending":
      case "safe":
      case "finalized":
        return blockTag;
    }
    if (isHexString(blockTag)) {
      if (isHexString(blockTag, 32)) {
        return blockTag;
      }
      return toQuantity(blockTag);
    }
    if (typeof blockTag === "number") {
      if (blockTag >= 0) {
        return toQuantity(blockTag);
      }
      if (__privateGet(this, _lastBlockNumber) >= 0) {
        return toQuantity(__privateGet(this, _lastBlockNumber) + blockTag);
      }
      return this.getBlockNumber().then((b2) => toQuantity(b2 + blockTag));
    }
    assertArgument(false, "invalid blockTag", "blockTag", blockTag);
  }
  _getFilter(filter) {
    const topics = (filter.topics || []).map((t2) => {
      if (t2 == null) {
        return null;
      }
      if (Array.isArray(t2)) {
        return concisify(t2.map((t3) => t3.toLowerCase()));
      }
      return t2.toLowerCase();
    });
    const blockHash = "blockHash" in filter ? filter.blockHash : void 0;
    const resolve = (_address, fromBlock2, toBlock2) => {
      let address2 = void 0;
      switch (_address.length) {
        case 0:
          break;
        case 1:
          address2 = _address[0];
          break;
        default:
          _address.sort();
          address2 = _address;
      }
      if (blockHash) {
        if (fromBlock2 != null || toBlock2 != null) {
          throw new Error("invalid filter");
        }
      }
      const filter2 = {};
      if (address2) {
        filter2.address = address2;
      }
      if (topics.length) {
        filter2.topics = topics;
      }
      if (fromBlock2) {
        filter2.fromBlock = fromBlock2;
      }
      if (toBlock2) {
        filter2.toBlock = toBlock2;
      }
      if (blockHash) {
        filter2.blockHash = blockHash;
      }
      return filter2;
    };
    let address = [];
    if (filter.address) {
      if (Array.isArray(filter.address)) {
        for (const addr of filter.address) {
          address.push(this._getAddress(addr));
        }
      } else {
        address.push(this._getAddress(filter.address));
      }
    }
    let fromBlock = void 0;
    if ("fromBlock" in filter) {
      fromBlock = this._getBlockTag(filter.fromBlock);
    }
    let toBlock = void 0;
    if ("toBlock" in filter) {
      toBlock = this._getBlockTag(filter.toBlock);
    }
    if (address.filter((a) => typeof a !== "string").length || fromBlock != null && typeof fromBlock !== "string" || toBlock != null && typeof toBlock !== "string") {
      return Promise.all([Promise.all(address), fromBlock, toBlock]).then((result) => {
        return resolve(result[0], result[1], result[2]);
      });
    }
    return resolve(address, fromBlock, toBlock);
  }
  _getTransactionRequest(_request3) {
    const request = copyRequest(_request3);
    const promises = [];
    ["to", "from"].forEach((key) => {
      if (request[key] == null) {
        return;
      }
      const addr = resolveAddress(request[key]);
      if (isPromise(addr)) {
        promises.push(async function() {
          request[key] = await addr;
        }());
      } else {
        request[key] = addr;
      }
    });
    if (request.blockTag != null) {
      const blockTag = this._getBlockTag(request.blockTag);
      if (isPromise(blockTag)) {
        promises.push(async function() {
          request.blockTag = await blockTag;
        }());
      } else {
        request.blockTag = blockTag;
      }
    }
    if (promises.length) {
      return async function() {
        await Promise.all(promises);
        return request;
      }();
    }
    return request;
  }
  async getNetwork() {
    if (__privateGet(this, _networkPromise) == null) {
      const detectNetwork = this._detectNetwork().then((network) => {
        this.emit("network", network, null);
        return network;
      }, (error) => {
        if (__privateGet(this, _networkPromise) === detectNetwork) {
          __privateSet(this, _networkPromise, null);
        }
        throw error;
      });
      __privateSet(this, _networkPromise, detectNetwork);
      return (await detectNetwork).clone();
    }
    const networkPromise = __privateGet(this, _networkPromise);
    const [expected, actual] = await Promise.all([
      networkPromise,
      this._detectNetwork()
      // The actual connected network
    ]);
    if (expected.chainId !== actual.chainId) {
      if (__privateGet(this, _anyNetwork)) {
        this.emit("network", actual, expected);
        if (__privateGet(this, _networkPromise) === networkPromise) {
          __privateSet(this, _networkPromise, Promise.resolve(actual));
        }
      } else {
        assert$1(false, `network changed: ${expected.chainId} => ${actual.chainId} `, "NETWORK_ERROR", {
          event: "changed"
        });
      }
    }
    return expected.clone();
  }
  async getFeeData() {
    const { block, gasPrice } = await resolveProperties({
      block: this.getBlock("latest"),
      gasPrice: (async () => {
        try {
          const gasPrice2 = await __privateMethod(this, _perform, perform_fn).call(this, { method: "getGasPrice" });
          return getBigInt(gasPrice2, "%response");
        } catch (error) {
        }
        return null;
      })()
    });
    let maxFeePerGas = null, maxPriorityFeePerGas = null;
    if (block && block.baseFeePerGas) {
      maxPriorityFeePerGas = BigInt("1000000000");
      maxFeePerGas = block.baseFeePerGas * BN_2 + maxPriorityFeePerGas;
    }
    return new FeeData(gasPrice, maxFeePerGas, maxPriorityFeePerGas);
  }
  async estimateGas(_tx) {
    let tx = this._getTransactionRequest(_tx);
    if (isPromise(tx)) {
      tx = await tx;
    }
    return getBigInt(await __privateMethod(this, _perform, perform_fn).call(this, {
      method: "estimateGas",
      transaction: tx
    }), "%response");
  }
  async call(_tx) {
    const { tx, blockTag } = await resolveProperties({
      tx: this._getTransactionRequest(_tx),
      blockTag: this._getBlockTag(_tx.blockTag)
    });
    return await __privateMethod(this, _checkNetwork, checkNetwork_fn).call(this, __privateMethod(this, _call, call_fn).call(this, tx, blockTag, _tx.enableCcipRead ? 0 : -1));
  }
  async getBalance(address, blockTag) {
    return getBigInt(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getBalance" }, address, blockTag), "%response");
  }
  async getTransactionCount(address, blockTag) {
    return getNumber(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getTransactionCount" }, address, blockTag), "%response");
  }
  async getCode(address, blockTag) {
    return hexlify(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getCode" }, address, blockTag));
  }
  async getStorage(address, _position, blockTag) {
    const position = getBigInt(_position, "position");
    return hexlify(await __privateMethod(this, _getAccountValue, getAccountValue_fn).call(this, { method: "getStorage", position }, address, blockTag));
  }
  // Write
  async broadcastTransaction(signedTx) {
    const { blockNumber, hash: hash2, network } = await resolveProperties({
      blockNumber: this.getBlockNumber(),
      hash: this._perform({
        method: "broadcastTransaction",
        signedTransaction: signedTx
      }),
      network: this.getNetwork()
    });
    const tx = Transaction.from(signedTx);
    if (tx.hash !== hash2) {
      throw new Error("@TODO: the returned hash did not match");
    }
    return this._wrapTransactionResponse(tx, network).replaceableTransaction(blockNumber);
  }
  // Queries
  async getBlock(block, prefetchTxs) {
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _getBlock, getBlock_fn).call(this, block, !!prefetchTxs)
    });
    if (params == null) {
      return null;
    }
    return this._wrapBlock(formatBlock(params), network);
  }
  async getTransaction(hash2) {
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransaction", hash: hash2 })
    });
    if (params == null) {
      return null;
    }
    return this._wrapTransactionResponse(formatTransactionResponse(params), network);
  }
  async getTransactionReceipt(hash2) {
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransactionReceipt", hash: hash2 })
    });
    if (params == null) {
      return null;
    }
    if (params.gasPrice == null && params.effectiveGasPrice == null) {
      const tx = await __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransaction", hash: hash2 });
      if (tx == null) {
        throw new Error("report this; could not find tx or effectiveGasPrice");
      }
      params.effectiveGasPrice = tx.gasPrice;
    }
    return this._wrapTransactionReceipt(formatTransactionReceipt(params), network);
  }
  async getTransactionResult(hash2) {
    const { result } = await resolveProperties({
      network: this.getNetwork(),
      result: __privateMethod(this, _perform, perform_fn).call(this, { method: "getTransactionResult", hash: hash2 })
    });
    if (result == null) {
      return null;
    }
    return hexlify(result);
  }
  // Bloom-filter Queries
  async getLogs(_filter4) {
    let filter = this._getFilter(_filter4);
    if (isPromise(filter)) {
      filter = await filter;
    }
    const { network, params } = await resolveProperties({
      network: this.getNetwork(),
      params: __privateMethod(this, _perform, perform_fn).call(this, { method: "getLogs", filter })
    });
    return params.map((p2) => this._wrapLog(formatLog(p2), network));
  }
  // ENS
  _getProvider(chainId) {
    assert$1(false, "provider cannot connect to target network", "UNSUPPORTED_OPERATION", {
      operation: "_getProvider()"
    });
  }
  async getResolver(name) {
    return await EnsResolver.fromName(this, name);
  }
  async getAvatar(name) {
    const resolver = await this.getResolver(name);
    if (resolver) {
      return await resolver.getAvatar();
    }
    return null;
  }
  async resolveName(name) {
    const resolver = await this.getResolver(name);
    if (resolver) {
      return await resolver.getAddress();
    }
    return null;
  }
  async lookupAddress(address) {
    address = getAddress(address);
    const node = namehash(address.substring(2).toLowerCase() + ".addr.reverse");
    try {
      const ensAddr = await EnsResolver.getEnsAddress(this);
      const ensContract = new Contract(ensAddr, [
        "function resolver(bytes32) view returns (address)"
      ], this);
      const resolver = await ensContract.resolver(node);
      if (resolver == null || resolver === ZeroHash) {
        return null;
      }
      const resolverContract = new Contract(resolver, [
        "function name(bytes32) view returns (string)"
      ], this);
      const name = await resolverContract.name(node);
      const check = await this.resolveName(name);
      if (check !== address) {
        console.log("FAIL", address, check);
      }
      return name;
    } catch (error) {
      console.log("TEMP", error);
    }
    return null;
  }
  async waitForTransaction(hash2, _confirms, timeout) {
    const confirms = _confirms != null ? _confirms : 1;
    if (confirms === 0) {
      return this.getTransactionReceipt(hash2);
    }
    return new Promise(async (resolve, reject) => {
      let timer = null;
      const listener = async (blockNumber) => {
        try {
          const receipt = await this.getTransactionReceipt(hash2);
          if (receipt != null) {
            if (blockNumber - receipt.blockNumber + 1 >= confirms) {
              resolve(receipt);
              if (timer) {
                clearTimeout(timer);
                timer = null;
              }
              return;
            }
          }
        } catch (error) {
          console.log("EEE", error);
        }
        this.once("block", listener);
      };
      if (timeout != null) {
        timer = setTimeout(() => {
          if (timer == null) {
            return;
          }
          timer = null;
          this.off("block", listener);
          reject(makeError("timeout", "TIMEOUT", { reason: "timeout" }));
        }, timeout);
      }
      listener(await this.getBlockNumber());
    });
  }
  async waitForBlock(blockTag) {
    assert$1(false, "not implemented yet", "NOT_IMPLEMENTED", {
      operation: "waitForBlock"
    });
  }
  _clearTimeout(timerId) {
    const timer = __privateGet(this, _timers).get(timerId);
    if (!timer) {
      return;
    }
    if (timer.timer) {
      clearTimeout(timer.timer);
    }
    __privateGet(this, _timers).delete(timerId);
  }
  _setTimeout(_func, timeout) {
    if (timeout == null) {
      timeout = 0;
    }
    const timerId = __privateWrapper(this, _nextTimer)._++;
    const func = () => {
      __privateGet(this, _timers).delete(timerId);
      _func();
    };
    if (this.paused) {
      __privateGet(this, _timers).set(timerId, { timer: null, func, time: timeout });
    } else {
      const timer = setTimeout(func, timeout);
      __privateGet(this, _timers).set(timerId, { timer, func, time: getTime() });
    }
    return timerId;
  }
  _forEachSubscriber(func) {
    for (const sub of __privateGet(this, _subs).values()) {
      func(sub.subscriber);
    }
  }
  // Event API; sub-classes should override this; any supported
  // event filter will have been munged into an EventFilter
  _getSubscriber(sub) {
    switch (sub.type) {
      case "debug":
      case "network":
        return new UnmanagedSubscriber(sub.type);
      case "block":
        return new PollingBlockSubscriber(this);
      case "event":
        return new PollingEventSubscriber(this, sub.filter);
      case "transaction":
        return new PollingTransactionSubscriber(this, sub.hash);
      case "orphan":
        return new PollingOrphanSubscriber(this, sub.filter);
    }
    throw new Error(`unsupported event: ${sub.type}`);
  }
  _recoverSubscriber(oldSub, newSub) {
    for (const sub of __privateGet(this, _subs).values()) {
      if (sub.subscriber === oldSub) {
        if (sub.started) {
          sub.subscriber.stop();
        }
        sub.subscriber = newSub;
        if (sub.started) {
          newSub.start();
        }
        if (__privateGet(this, _pausedState) != null) {
          newSub.pause(__privateGet(this, _pausedState));
        }
        break;
      }
    }
  }
  async on(event, listener) {
    const sub = await __privateMethod(this, _getSub, getSub_fn).call(this, event);
    sub.listeners.push({ listener, once: false });
    if (!sub.started) {
      sub.subscriber.start();
      sub.started = true;
      if (__privateGet(this, _pausedState) != null) {
        sub.subscriber.pause(__privateGet(this, _pausedState));
      }
    }
    return this;
  }
  async once(event, listener) {
    const sub = await __privateMethod(this, _getSub, getSub_fn).call(this, event);
    sub.listeners.push({ listener, once: true });
    if (!sub.started) {
      sub.subscriber.start();
      sub.started = true;
      if (__privateGet(this, _pausedState) != null) {
        sub.subscriber.pause(__privateGet(this, _pausedState));
      }
    }
    return this;
  }
  async emit(event, ...args) {
    const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event, args);
    if (!sub || sub.listeners.length === 0) {
      return false;
    }
    const count = sub.listeners.length;
    sub.listeners = sub.listeners.filter(({ listener, once }) => {
      const payload = new EventPayload(this, once ? null : listener, event);
      try {
        listener.call(this, ...args, payload);
      } catch (error) {
      }
      return !once;
    });
    if (sub.listeners.length === 0) {
      if (sub.started) {
        sub.subscriber.stop();
      }
      __privateGet(this, _subs).delete(sub.tag);
    }
    return count > 0;
  }
  async listenerCount(event) {
    if (event) {
      const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event);
      if (!sub) {
        return 0;
      }
      return sub.listeners.length;
    }
    let total = 0;
    for (const { listeners } of __privateGet(this, _subs).values()) {
      total += listeners.length;
    }
    return total;
  }
  async listeners(event) {
    if (event) {
      const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event);
      if (!sub) {
        return [];
      }
      return sub.listeners.map(({ listener }) => listener);
    }
    let result = [];
    for (const { listeners } of __privateGet(this, _subs).values()) {
      result = result.concat(listeners.map(({ listener }) => listener));
    }
    return result;
  }
  async off(event, listener) {
    const sub = await __privateMethod(this, _hasSub, hasSub_fn).call(this, event);
    if (!sub) {
      return this;
    }
    if (listener) {
      const index2 = sub.listeners.map(({ listener: listener2 }) => listener2).indexOf(listener);
      if (index2 >= 0) {
        sub.listeners.splice(index2, 1);
      }
    }
    if (!listener || sub.listeners.length === 0) {
      if (sub.started) {
        sub.subscriber.stop();
      }
      __privateGet(this, _subs).delete(sub.tag);
    }
    return this;
  }
  async removeAllListeners(event) {
    if (event) {
      const { tag, started, subscriber } = await __privateMethod(this, _getSub, getSub_fn).call(this, event);
      if (started) {
        subscriber.stop();
      }
      __privateGet(this, _subs).delete(tag);
    } else {
      for (const [tag, { started, subscriber }] of __privateGet(this, _subs)) {
        if (started) {
          subscriber.stop();
        }
        __privateGet(this, _subs).delete(tag);
      }
    }
    return this;
  }
  // Alias for "on"
  async addListener(event, listener) {
    return await this.on(event, listener);
  }
  // Alias for "off"
  async removeListener(event, listener) {
    return this.off(event, listener);
  }
  // Sub-classes should override this to shutdown any sockets, etc.
  // but MUST call this super.shutdown.
  destroy() {
    this.removeAllListeners();
    for (const timerId of __privateGet(this, _timers).keys()) {
      this._clearTimeout(timerId);
    }
  }
  get paused() {
    return __privateGet(this, _pausedState) != null;
  }
  set paused(pause) {
    if (!!pause === this.paused) {
      return;
    }
    if (this.paused) {
      this.resume();
    } else {
      this.pause(false);
    }
  }
  pause(dropWhilePaused) {
    __privateSet(this, _lastBlockNumber, -1);
    if (__privateGet(this, _pausedState) != null) {
      if (__privateGet(this, _pausedState) == !!dropWhilePaused) {
        return;
      }
      assert$1(false, "cannot change pause type; resume first", "UNSUPPORTED_OPERATION", {
        operation: "pause"
      });
    }
    this._forEachSubscriber((s) => s.pause(dropWhilePaused));
    __privateSet(this, _pausedState, !!dropWhilePaused);
    for (const timer of __privateGet(this, _timers).values()) {
      if (timer.timer) {
        clearTimeout(timer.timer);
      }
      timer.time = getTime() - timer.time;
    }
  }
  resume() {
    if (__privateGet(this, _pausedState) == null) {
      return;
    }
    this._forEachSubscriber((s) => s.resume());
    __privateSet(this, _pausedState, null);
    for (const timer of __privateGet(this, _timers).values()) {
      let timeout = timer.time;
      if (timeout < 0) {
        timeout = 0;
      }
      timer.time = getTime();
      setTimeout(timer.func, timeout);
    }
  }
}
_subs = new WeakMap();
_plugins2 = new WeakMap();
_pausedState = new WeakMap();
_networkPromise = new WeakMap();
_anyNetwork = new WeakMap();
_performCache = new WeakMap();
_lastBlockNumber = new WeakMap();
_nextTimer = new WeakMap();
_timers = new WeakMap();
_disableCcipRead = new WeakMap();
_perform = new WeakSet();
perform_fn = async function(req) {
  const tag = getTag(req.method, req);
  let perform = __privateGet(this, _performCache).get(tag);
  if (!perform) {
    perform = this._perform(req);
    __privateGet(this, _performCache).set(tag, perform);
    setTimeout(() => {
      if (__privateGet(this, _performCache).get(tag) === perform) {
        __privateGet(this, _performCache).delete(tag);
      }
    }, 250);
  }
  return await perform;
};
_call = new WeakSet();
call_fn = async function(tx, blockTag, attempt) {
  assert$1(attempt < MAX_CCIP_REDIRECTS, "CCIP read exceeded maximum redirections", "OFFCHAIN_FAULT", {
    reason: "TOO_MANY_REDIRECTS",
    transaction: Object.assign({}, tx, { blockTag, enableCcipRead: true })
  });
  const transaction = copyRequest(tx);
  try {
    return hexlify(await this._perform({ method: "call", transaction, blockTag }));
  } catch (error) {
    if (!this.disableCcipRead && isCallException(error) && error.data && attempt >= 0 && blockTag === "latest" && transaction.to != null && dataSlice(error.data, 0, 4) === "0x556f1830") {
      const data = error.data;
      const txSender = await resolveAddress(transaction.to, this);
      let ccipArgs;
      try {
        ccipArgs = parseOffchainLookup(dataSlice(error.data, 4));
      } catch (error2) {
        assert$1(false, error2.message, "OFFCHAIN_FAULT", {
          reason: "BAD_DATA",
          transaction,
          info: { data }
        });
      }
      assert$1(ccipArgs.sender.toLowerCase() === txSender.toLowerCase(), "CCIP Read sender mismatch", "CALL_EXCEPTION", {
        action: "call",
        data,
        reason: "OffchainLookup",
        transaction,
        invocation: null,
        revert: {
          signature: "OffchainLookup(address,string[],bytes,bytes4,bytes)",
          name: "OffchainLookup",
          args: ccipArgs.errorArgs
        }
      });
      const ccipResult = await this.ccipReadFetch(transaction, ccipArgs.calldata, ccipArgs.urls);
      assert$1(ccipResult != null, "CCIP Read failed to fetch data", "OFFCHAIN_FAULT", {
        reason: "FETCH_FAILED",
        transaction,
        info: { data: error.data, errorArgs: ccipArgs.errorArgs }
      });
      const tx2 = {
        to: txSender,
        data: concat([ccipArgs.selector, encodeBytes([ccipResult, ccipArgs.extraData])])
      };
      this.emit("debug", { action: "sendCcipReadCall", transaction: tx2 });
      try {
        const result = await __privateMethod(this, _call, call_fn).call(this, tx2, blockTag, attempt + 1);
        this.emit("debug", { action: "receiveCcipReadCallResult", transaction: Object.assign({}, tx2), result });
        return result;
      } catch (error2) {
        this.emit("debug", { action: "receiveCcipReadCallError", transaction: Object.assign({}, tx2), error: error2 });
        throw error2;
      }
    }
    throw error;
  }
};
_checkNetwork = new WeakSet();
checkNetwork_fn = async function(promise) {
  const { value } = await resolveProperties({
    network: this.getNetwork(),
    value: promise
  });
  return value;
};
_getAccountValue = new WeakSet();
getAccountValue_fn = async function(request, _address, _blockTag) {
  let address = this._getAddress(_address);
  let blockTag = this._getBlockTag(_blockTag);
  if (typeof address !== "string" || typeof blockTag !== "string") {
    [address, blockTag] = await Promise.all([address, blockTag]);
  }
  return await __privateMethod(this, _checkNetwork, checkNetwork_fn).call(this, __privateMethod(this, _perform, perform_fn).call(this, Object.assign(request, { address, blockTag })));
};
_getBlock = new WeakSet();
getBlock_fn = async function(block, includeTransactions) {
  if (isHexString(block, 32)) {
    return await __privateMethod(this, _perform, perform_fn).call(this, {
      method: "getBlock",
      blockHash: block,
      includeTransactions
    });
  }
  let blockTag = this._getBlockTag(block);
  if (typeof blockTag !== "string") {
    blockTag = await blockTag;
  }
  return await __privateMethod(this, _perform, perform_fn).call(this, {
    method: "getBlock",
    blockTag,
    includeTransactions
  });
};
_hasSub = new WeakSet();
hasSub_fn = async function(event, emitArgs) {
  let sub = await getSubscription(event, this);
  if (sub.type === "event" && emitArgs && emitArgs.length > 0 && emitArgs[0].removed === true) {
    sub = await getSubscription({ orphan: "drop-log", log: emitArgs[0] }, this);
  }
  return __privateGet(this, _subs).get(sub.tag) || null;
};
_getSub = new WeakSet();
getSub_fn = async function(event) {
  const subscription = await getSubscription(event, this);
  const tag = subscription.tag;
  let sub = __privateGet(this, _subs).get(tag);
  if (!sub) {
    const subscriber = this._getSubscriber(subscription);
    const addressableMap = /* @__PURE__ */ new WeakMap();
    const nameMap = /* @__PURE__ */ new Map();
    sub = { subscriber, tag, addressableMap, nameMap, started: false, listeners: [] };
    __privateGet(this, _subs).set(tag, sub);
  }
  return sub;
};
function _parseString(result, start) {
  try {
    const bytes2 = _parseBytes(result, start);
    if (bytes2) {
      return toUtf8String(bytes2);
    }
  } catch (error) {
  }
  return null;
}
function _parseBytes(result, start) {
  if (result === "0x") {
    return null;
  }
  try {
    const offset = getNumber(dataSlice(result, start, start + 32));
    const length = getNumber(dataSlice(result, offset, offset + 32));
    return dataSlice(result, offset + 32, offset + 32 + length);
  } catch (error) {
  }
  return null;
}
function numPad(value) {
  const result = toBeArray(value);
  if (result.length > 32) {
    throw new Error("internal; should not happen");
  }
  const padded = new Uint8Array(32);
  padded.set(result, 32 - result.length);
  return padded;
}
function bytesPad(value) {
  if (value.length % 32 === 0) {
    return value;
  }
  const result = new Uint8Array(Math.ceil(value.length / 32) * 32);
  result.set(value);
  return result;
}
const empty = new Uint8Array([]);
function encodeBytes(datas) {
  const result = [];
  let byteCount = 0;
  for (let i = 0; i < datas.length; i++) {
    result.push(empty);
    byteCount += 32;
  }
  for (let i = 0; i < datas.length; i++) {
    const data = getBytes(datas[i]);
    result[i] = numPad(byteCount);
    result.push(numPad(data.length));
    result.push(bytesPad(data));
    byteCount += 32 + Math.ceil(data.length / 32) * 32;
  }
  return concat(result);
}
const zeros = "0x0000000000000000000000000000000000000000000000000000000000000000";
function parseOffchainLookup(data) {
  const result = {
    sender: "",
    urls: [],
    calldata: "",
    selector: "",
    extraData: "",
    errorArgs: []
  };
  assert$1(dataLength(data) >= 5 * 32, "insufficient OffchainLookup data", "OFFCHAIN_FAULT", {
    reason: "insufficient OffchainLookup data"
  });
  const sender = dataSlice(data, 0, 32);
  assert$1(dataSlice(sender, 0, 12) === dataSlice(zeros, 0, 12), "corrupt OffchainLookup sender", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup sender"
  });
  result.sender = dataSlice(sender, 12);
  try {
    const urls = [];
    const urlsOffset = getNumber(dataSlice(data, 32, 64));
    const urlsLength = getNumber(dataSlice(data, urlsOffset, urlsOffset + 32));
    const urlsData = dataSlice(data, urlsOffset + 32);
    for (let u2 = 0; u2 < urlsLength; u2++) {
      const url = _parseString(urlsData, u2 * 32);
      if (url == null) {
        throw new Error("abort");
      }
      urls.push(url);
    }
    result.urls = urls;
  } catch (error) {
    assert$1(false, "corrupt OffchainLookup urls", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup urls"
    });
  }
  try {
    const calldata = _parseBytes(data, 64);
    if (calldata == null) {
      throw new Error("abort");
    }
    result.calldata = calldata;
  } catch (error) {
    assert$1(false, "corrupt OffchainLookup calldata", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup calldata"
    });
  }
  assert$1(dataSlice(data, 100, 128) === dataSlice(zeros, 0, 28), "corrupt OffchainLookup callbaackSelector", "OFFCHAIN_FAULT", {
    reason: "corrupt OffchainLookup callbaackSelector"
  });
  result.selector = dataSlice(data, 96, 100);
  try {
    const extraData = _parseBytes(data, 128);
    if (extraData == null) {
      throw new Error("abort");
    }
    result.extraData = extraData;
  } catch (error) {
    assert$1(false, "corrupt OffchainLookup extraData", "OFFCHAIN_FAULT", {
      reason: "corrupt OffchainLookup extraData"
    });
  }
  result.errorArgs = "sender,urls,calldata,selector,extraData".split(/,/).map((k2) => result[k2]);
  return result;
}
function checkProvider(signer, operation) {
  if (signer.provider) {
    return signer.provider;
  }
  assert$1(false, "missing provider", "UNSUPPORTED_OPERATION", { operation });
}
async function populate(signer, tx) {
  let pop = copyRequest(tx);
  if (pop.to != null) {
    pop.to = resolveAddress(pop.to, signer);
  }
  if (pop.from != null) {
    const from = pop.from;
    pop.from = Promise.all([
      signer.getAddress(),
      resolveAddress(from, signer)
    ]).then(([address, from2]) => {
      assertArgument(address.toLowerCase() === from2.toLowerCase(), "transaction from mismatch", "tx.from", from2);
      return address;
    });
  } else {
    pop.from = signer.getAddress();
  }
  return await resolveProperties(pop);
}
class AbstractSigner {
  constructor(provider) {
    __publicField(this, "provider");
    defineProperties(this, { provider: provider || null });
  }
  async getNonce(blockTag) {
    return checkProvider(this, "getTransactionCount").getTransactionCount(await this.getAddress(), blockTag);
  }
  async populateCall(tx) {
    const pop = await populate(this, tx);
    return pop;
  }
  async populateTransaction(tx) {
    const provider = checkProvider(this, "populateTransaction");
    const pop = await populate(this, tx);
    if (pop.nonce == null) {
      pop.nonce = await this.getNonce("pending");
    }
    if (pop.gasLimit == null) {
      pop.gasLimit = await this.estimateGas(pop);
    }
    const network = await this.provider.getNetwork();
    if (pop.chainId != null) {
      const chainId = getBigInt(pop.chainId);
      assertArgument(chainId === network.chainId, "transaction chainId mismatch", "tx.chainId", tx.chainId);
    } else {
      pop.chainId = network.chainId;
    }
    const hasEip1559 = pop.maxFeePerGas != null || pop.maxPriorityFeePerGas != null;
    if (pop.gasPrice != null && (pop.type === 2 || hasEip1559)) {
      assertArgument(false, "eip-1559 transaction do not support gasPrice", "tx", tx);
    } else if ((pop.type === 0 || pop.type === 1) && hasEip1559) {
      assertArgument(false, "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas", "tx", tx);
    }
    if ((pop.type === 2 || pop.type == null) && (pop.maxFeePerGas != null && pop.maxPriorityFeePerGas != null)) {
      pop.type = 2;
    } else if (pop.type === 0 || pop.type === 1) {
      const feeData = await provider.getFeeData();
      assert$1(feeData.gasPrice != null, "network does not support gasPrice", "UNSUPPORTED_OPERATION", {
        operation: "getGasPrice"
      });
      if (pop.gasPrice == null) {
        pop.gasPrice = feeData.gasPrice;
      }
    } else {
      const feeData = await provider.getFeeData();
      if (pop.type == null) {
        if (feeData.maxFeePerGas != null && feeData.maxPriorityFeePerGas != null) {
          pop.type = 2;
          if (pop.gasPrice != null) {
            const gasPrice = pop.gasPrice;
            delete pop.gasPrice;
            pop.maxFeePerGas = gasPrice;
            pop.maxPriorityFeePerGas = gasPrice;
          } else {
            if (pop.maxFeePerGas == null) {
              pop.maxFeePerGas = feeData.maxFeePerGas;
            }
            if (pop.maxPriorityFeePerGas == null) {
              pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
            }
          }
        } else if (feeData.gasPrice != null) {
          assert$1(!hasEip1559, "network does not support EIP-1559", "UNSUPPORTED_OPERATION", {
            operation: "populateTransaction"
          });
          if (pop.gasPrice == null) {
            pop.gasPrice = feeData.gasPrice;
          }
          pop.type = 0;
        } else {
          assert$1(false, "failed to get consistent fee data", "UNSUPPORTED_OPERATION", {
            operation: "signer.getFeeData"
          });
        }
      } else if (pop.type === 2) {
        if (pop.maxFeePerGas == null) {
          pop.maxFeePerGas = feeData.maxFeePerGas;
        }
        if (pop.maxPriorityFeePerGas == null) {
          pop.maxPriorityFeePerGas = feeData.maxPriorityFeePerGas;
        }
      }
    }
    return await resolveProperties(pop);
  }
  async estimateGas(tx) {
    return checkProvider(this, "estimateGas").estimateGas(await this.populateCall(tx));
  }
  async call(tx) {
    return checkProvider(this, "call").call(await this.populateCall(tx));
  }
  async resolveName(name) {
    const provider = checkProvider(this, "resolveName");
    return await provider.resolveName(name);
  }
  async sendTransaction(tx) {
    const provider = checkProvider(this, "sendTransaction");
    const pop = await this.populateTransaction(tx);
    delete pop.from;
    const txObj = Transaction.from(pop);
    return await provider.broadcastTransaction(await this.signTransaction(txObj));
  }
}
function copy(obj) {
  return JSON.parse(JSON.stringify(obj));
}
class FilterIdSubscriber {
  constructor(provider) {
    __privateAdd(this, _poll4);
    __privateAdd(this, _teardown);
    __privateAdd(this, _provider4, void 0);
    __privateAdd(this, _filterIdPromise, void 0);
    __privateAdd(this, _poller3, void 0);
    __privateAdd(this, _running3, void 0);
    __privateAdd(this, _network, void 0);
    __privateAdd(this, _hault, void 0);
    __privateSet(this, _provider4, provider);
    __privateSet(this, _filterIdPromise, null);
    __privateSet(this, _poller3, __privateMethod(this, _poll4, poll_fn3).bind(this));
    __privateSet(this, _running3, false);
    __privateSet(this, _network, null);
    __privateSet(this, _hault, false);
  }
  _subscribe(provider) {
    throw new Error("subclasses must override this");
  }
  _emitResults(provider, result) {
    throw new Error("subclasses must override this");
  }
  _recover(provider) {
    throw new Error("subclasses must override this");
  }
  start() {
    if (__privateGet(this, _running3)) {
      return;
    }
    __privateSet(this, _running3, true);
    __privateMethod(this, _poll4, poll_fn3).call(this, -2);
  }
  stop() {
    if (!__privateGet(this, _running3)) {
      return;
    }
    __privateSet(this, _running3, false);
    __privateSet(this, _hault, true);
    __privateMethod(this, _teardown, teardown_fn).call(this);
    __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
  }
  pause(dropWhilePaused) {
    if (dropWhilePaused) {
      __privateMethod(this, _teardown, teardown_fn).call(this);
    }
    __privateGet(this, _provider4).off("block", __privateGet(this, _poller3));
  }
  resume() {
    this.start();
  }
}
_provider4 = new WeakMap();
_filterIdPromise = new WeakMap();
_poller3 = new WeakMap();
_running3 = new WeakMap();
_network = new WeakMap();
_hault = new WeakMap();
_poll4 = new WeakSet();
poll_fn3 = async function(blockNumber) {
  try {
    if (__privateGet(this, _filterIdPromise) == null) {
      __privateSet(this, _filterIdPromise, this._subscribe(__privateGet(this, _provider4)));
    }
    let filterId = null;
    try {
      filterId = await __privateGet(this, _filterIdPromise);
    } catch (error) {
      if (!isError(error, "UNSUPPORTED_OPERATION") || error.operation !== "eth_newFilter") {
        throw error;
      }
    }
    if (filterId == null) {
      __privateSet(this, _filterIdPromise, null);
      __privateGet(this, _provider4)._recoverSubscriber(this, this._recover(__privateGet(this, _provider4)));
      return;
    }
    const network = await __privateGet(this, _provider4).getNetwork();
    if (!__privateGet(this, _network)) {
      __privateSet(this, _network, network);
    }
    if (__privateGet(this, _network).chainId !== network.chainId) {
      throw new Error("chaid changed");
    }
    if (__privateGet(this, _hault)) {
      return;
    }
    const result = await __privateGet(this, _provider4).send("eth_getFilterChanges", [filterId]);
    await this._emitResults(__privateGet(this, _provider4), result);
  } catch (error) {
    console.log("@TODO", error);
  }
  __privateGet(this, _provider4).once("block", __privateGet(this, _poller3));
};
_teardown = new WeakSet();
teardown_fn = function() {
  const filterIdPromise = __privateGet(this, _filterIdPromise);
  if (filterIdPromise) {
    __privateSet(this, _filterIdPromise, null);
    filterIdPromise.then((filterId) => {
      __privateGet(this, _provider4).send("eth_uninstallFilter", [filterId]);
    });
  }
};
class FilterIdEventSubscriber extends FilterIdSubscriber {
  constructor(provider, filter) {
    super(provider);
    __privateAdd(this, _event, void 0);
    __privateSet(this, _event, copy(filter));
  }
  _recover(provider) {
    return new PollingEventSubscriber(provider, __privateGet(this, _event));
  }
  async _subscribe(provider) {
    const filterId = await provider.send("eth_newFilter", [__privateGet(this, _event)]);
    return filterId;
  }
  async _emitResults(provider, results) {
    for (const result of results) {
      provider.emit(__privateGet(this, _event), provider._wrapLog(result, provider._network));
    }
  }
}
_event = new WeakMap();
class FilterIdPendingSubscriber extends FilterIdSubscriber {
  async _subscribe(provider) {
    return await provider.send("eth_newPendingTransactionFilter", []);
  }
  async _emitResults(provider, results) {
    for (const result of results) {
      provider.emit("pending", result);
    }
  }
}
const Primitive = "bigint,boolean,function,number,string,symbol".split(/,/g);
function deepCopy(value) {
  if (value == null || Primitive.indexOf(typeof value) >= 0) {
    return value;
  }
  if (typeof value.getAddress === "function") {
    return value;
  }
  if (Array.isArray(value)) {
    return value.map(deepCopy);
  }
  if (typeof value === "object") {
    return Object.keys(value).reduce((accum, key) => {
      accum[key] = value[key];
      return accum;
    }, {});
  }
  throw new Error(`should not happen: ${value} (${typeof value})`);
}
function stall(duration) {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}
function getLowerCase(value) {
  if (value) {
    return value.toLowerCase();
  }
  return value;
}
function isPollable(value) {
  return value && typeof value.pollingInterval === "number";
}
const defaultOptions = {
  polling: false,
  staticNetwork: null,
  batchStallTime: 10,
  batchMaxSize: 1 << 20,
  batchMaxCount: 100
  // 100 requests
};
class JsonRpcSigner extends AbstractSigner {
  constructor(provider, address) {
    super(provider);
    __publicField(this, "address");
    defineProperties(this, { address });
  }
  connect(provider) {
    assert$1(false, "cannot reconnect JsonRpcSigner", "UNSUPPORTED_OPERATION", {
      operation: "signer.connect"
    });
  }
  async getAddress() {
    return this.address;
  }
  // JSON-RPC will automatially fill in nonce, etc. so we just check from
  async populateTransaction(tx) {
    return await this.populateCall(tx);
  }
  // Returns just the hash of the transaction after sent, which is what
  // the bare JSON-RPC API does;
  async sendUncheckedTransaction(_tx) {
    const tx = deepCopy(_tx);
    const promises = [];
    if (tx.from) {
      const _from = tx.from;
      promises.push((async () => {
        const from = await resolveAddress(_from, this.provider);
        assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
        tx.from = from;
      })());
    } else {
      tx.from = this.address;
    }
    if (tx.gasLimit == null) {
      promises.push((async () => {
        tx.gasLimit = await this.provider.estimateGas({ ...tx, from: this.address });
      })());
    }
    if (tx.to != null) {
      const _to2 = tx.to;
      promises.push((async () => {
        tx.to = await resolveAddress(_to2, this.provider);
      })());
    }
    if (promises.length) {
      await Promise.all(promises);
    }
    const hexTx = this.provider.getRpcTransaction(tx);
    return this.provider.send("eth_sendTransaction", [hexTx]);
  }
  async sendTransaction(tx) {
    const blockNumber = await this.provider.getBlockNumber();
    const hash2 = await this.sendUncheckedTransaction(tx);
    return await new Promise((resolve, reject) => {
      const timeouts = [1e3, 100];
      const checkTx = async () => {
        const tx2 = await this.provider.getTransaction(hash2);
        if (tx2 != null) {
          resolve(tx2.replaceableTransaction(blockNumber));
          return;
        }
        this.provider._setTimeout(() => {
          checkTx();
        }, timeouts.pop() || 4e3);
      };
      checkTx();
    });
  }
  async signTransaction(_tx) {
    const tx = deepCopy(_tx);
    if (tx.from) {
      const from = await resolveAddress(tx.from, this.provider);
      assertArgument(from != null && from.toLowerCase() === this.address.toLowerCase(), "from address mismatch", "transaction", _tx);
      tx.from = from;
    } else {
      tx.from = this.address;
    }
    const hexTx = this.provider.getRpcTransaction(tx);
    return await this.provider.send("eth_signTransaction", [hexTx]);
  }
  async signMessage(_message) {
    const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
    return await this.provider.send("personal_sign", [
      hexlify(message),
      this.address.toLowerCase()
    ]);
  }
  async signTypedData(domain, types, _value2) {
    const value = deepCopy(_value2);
    const populated = await TypedDataEncoder.resolveNames(domain, types, value, async (value2) => {
      const address = await resolveAddress(value2);
      assertArgument(address != null, "TypedData does not support null address", "value", value2);
      return address;
    });
    return await this.provider.send("eth_signTypedData_v4", [
      this.address.toLowerCase(),
      JSON.stringify(TypedDataEncoder.getPayload(populated.domain, types, populated.value))
    ]);
  }
  async unlock(password) {
    return this.provider.send("personal_unlockAccount", [
      this.address.toLowerCase(),
      password,
      null
    ]);
  }
  // https://github.com/ethereum/wiki/wiki/JSON-RPC#eth_sign
  async _legacySignMessage(_message) {
    const message = typeof _message === "string" ? toUtf8Bytes(_message) : _message;
    return await this.provider.send("eth_sign", [
      this.address.toLowerCase(),
      hexlify(message)
    ]);
  }
}
class JsonRpcApiProvider extends AbstractProvider {
  constructor(network, options) {
    super(network);
    __privateAdd(this, _scheduleDrain);
    __privateAdd(this, _options2, void 0);
    // The next ID to use for the JSON-RPC ID field
    __privateAdd(this, _nextId, void 0);
    // Payloads are queued and triggered in batches using the drainTimer
    __privateAdd(this, _payloads, void 0);
    __privateAdd(this, _drainTimer, void 0);
    __privateAdd(this, _notReady, void 0);
    __privateAdd(this, _network2, void 0);
    __privateSet(this, _nextId, 1);
    __privateSet(this, _options2, Object.assign({}, defaultOptions, options || {}));
    __privateSet(this, _payloads, []);
    __privateSet(this, _drainTimer, null);
    __privateSet(this, _network2, null);
    {
      let resolve = null;
      const promise = new Promise((_resolve) => {
        resolve = _resolve;
      });
      __privateSet(this, _notReady, { promise, resolve });
    }
    const staticNetwork = this._getOption("staticNetwork");
    if (staticNetwork) {
      assertArgument(staticNetwork === network, "staticNetwork MUST match network object", "options", options);
      __privateSet(this, _network2, staticNetwork);
    }
  }
  _getOption(key) {
    return __privateGet(this, _options2)[key];
  }
  get _network() {
    assert$1(__privateGet(this, _network2), "network is not available yet", "NETWORK_ERROR");
    return __privateGet(this, _network2);
  }
  /*
   {
      assert(false, "sub-classes must override _send", "UNSUPPORTED_OPERATION", {
          operation: "jsonRpcApiProvider._send"
      });
  }
  */
  async _perform(req) {
    if (req.method === "call" || req.method === "estimateGas") {
      let tx = req.transaction;
      if (tx && tx.type != null && getBigInt(tx.type)) {
        if (tx.maxFeePerGas == null && tx.maxPriorityFeePerGas == null) {
          const feeData = await this.getFeeData();
          if (feeData.maxFeePerGas == null && feeData.maxPriorityFeePerGas == null) {
            req = Object.assign({}, req, {
              transaction: Object.assign({}, tx, { type: void 0 })
            });
          }
        }
      }
    }
    const request = this.getRpcRequest(req);
    if (request != null) {
      return await this.send(request.method, request.args);
    }
    return super._perform(req);
  }
  async _detectNetwork() {
    const network = this._getOption("staticNetwork");
    if (network) {
      return network;
    }
    if (this.ready) {
      return Network.from(getBigInt(await this.send("eth_chainId", [])));
    }
    const payload = {
      id: __privateWrapper(this, _nextId)._++,
      method: "eth_chainId",
      params: [],
      jsonrpc: "2.0"
    };
    this.emit("debug", { action: "sendRpcPayload", payload });
    let result;
    try {
      result = (await this._send(payload))[0];
    } catch (error) {
      this.emit("debug", { action: "receiveRpcError", error });
      throw error;
    }
    this.emit("debug", { action: "receiveRpcResult", result });
    if ("result" in result) {
      return Network.from(getBigInt(result.result));
    }
    throw this.getRpcError(payload, result);
  }
  _start() {
    if (__privateGet(this, _notReady) == null || __privateGet(this, _notReady).resolve == null) {
      return;
    }
    __privateGet(this, _notReady).resolve();
    __privateSet(this, _notReady, null);
    (async () => {
      while (__privateGet(this, _network2) == null) {
        try {
          __privateSet(this, _network2, await this._detectNetwork());
        } catch (error) {
          console.log("JsonRpcProvider failed to startup; retry in 1s");
          await stall(1e3);
        }
      }
      __privateMethod(this, _scheduleDrain, scheduleDrain_fn).call(this);
    })();
  }
  async _waitUntilReady() {
    if (__privateGet(this, _notReady) == null) {
      return;
    }
    return await __privateGet(this, _notReady).promise;
  }
  _getSubscriber(sub) {
    if (sub.type === "pending") {
      return new FilterIdPendingSubscriber(this);
    }
    if (sub.type === "event") {
      if (this._getOption("polling")) {
        return new PollingEventSubscriber(this, sub.filter);
      }
      return new FilterIdEventSubscriber(this, sub.filter);
    }
    if (sub.type === "orphan" && sub.filter.orphan === "drop-log") {
      return new UnmanagedSubscriber("orphan");
    }
    return super._getSubscriber(sub);
  }
  get ready() {
    return __privateGet(this, _notReady) == null;
  }
  getRpcTransaction(tx) {
    const result = {};
    ["chainId", "gasLimit", "gasPrice", "type", "maxFeePerGas", "maxPriorityFeePerGas", "nonce", "value"].forEach((key) => {
      if (tx[key] == null) {
        return;
      }
      let dstKey = key;
      if (key === "gasLimit") {
        dstKey = "gas";
      }
      result[dstKey] = toQuantity(getBigInt(tx[key], `tx.${key}`));
    });
    ["from", "to", "data"].forEach((key) => {
      if (tx[key] == null) {
        return;
      }
      result[key] = hexlify(tx[key]);
    });
    if (tx.accessList) {
      result["accessList"] = accessListify(tx.accessList);
    }
    return result;
  }
  getRpcRequest(req) {
    switch (req.method) {
      case "chainId":
        return { method: "eth_chainId", args: [] };
      case "getBlockNumber":
        return { method: "eth_blockNumber", args: [] };
      case "getGasPrice":
        return { method: "eth_gasPrice", args: [] };
      case "getBalance":
        return {
          method: "eth_getBalance",
          args: [getLowerCase(req.address), req.blockTag]
        };
      case "getTransactionCount":
        return {
          method: "eth_getTransactionCount",
          args: [getLowerCase(req.address), req.blockTag]
        };
      case "getCode":
        return {
          method: "eth_getCode",
          args: [getLowerCase(req.address), req.blockTag]
        };
      case "getStorage":
        return {
          method: "eth_getStorageAt",
          args: [
            getLowerCase(req.address),
            "0x" + req.position.toString(16),
            req.blockTag
          ]
        };
      case "broadcastTransaction":
        return {
          method: "eth_sendRawTransaction",
          args: [req.signedTransaction]
        };
      case "getBlock":
        if ("blockTag" in req) {
          return {
            method: "eth_getBlockByNumber",
            args: [req.blockTag, !!req.includeTransactions]
          };
        } else if ("blockHash" in req) {
          return {
            method: "eth_getBlockByHash",
            args: [req.blockHash, !!req.includeTransactions]
          };
        }
        break;
      case "getTransaction":
        return {
          method: "eth_getTransactionByHash",
          args: [req.hash]
        };
      case "getTransactionReceipt":
        return {
          method: "eth_getTransactionReceipt",
          args: [req.hash]
        };
      case "call":
        return {
          method: "eth_call",
          args: [this.getRpcTransaction(req.transaction), req.blockTag]
        };
      case "estimateGas": {
        return {
          method: "eth_estimateGas",
          args: [this.getRpcTransaction(req.transaction)]
        };
      }
      case "getLogs":
        if (req.filter && req.filter.address != null) {
          if (Array.isArray(req.filter.address)) {
            req.filter.address = req.filter.address.map(getLowerCase);
          } else {
            req.filter.address = getLowerCase(req.filter.address);
          }
        }
        return { method: "eth_getLogs", args: [req.filter] };
    }
    return null;
  }
  getRpcError(payload, _error2) {
    const { method } = payload;
    const { error } = _error2;
    if (method === "eth_estimateGas" && error.message) {
      const msg = error.message;
      if (!msg.match(/revert/i) && msg.match(/insufficient funds/i)) {
        return makeError("insufficient funds", "INSUFFICIENT_FUNDS", {
          transaction: payload.params[0]
        });
      }
    }
    if (method === "eth_call" || method === "eth_estimateGas") {
      const result = spelunkData(error);
      const e = AbiCoder.getBuiltinCallException(method === "eth_call" ? "call" : "estimateGas", payload.params[0], result ? result.data : null);
      e.info = { error, payload };
      return e;
    }
    const message = JSON.stringify(spelunkMessage(error));
    if (typeof error.message === "string" && error.message.match(/user denied|ethers-user-denied/i)) {
      const actionMap = {
        eth_sign: "signMessage",
        personal_sign: "signMessage",
        eth_signTypedData_v4: "signTypedData",
        eth_signTransaction: "signTransaction",
        eth_sendTransaction: "sendTransaction",
        eth_requestAccounts: "requestAccess",
        wallet_requestAccounts: "requestAccess"
      };
      return makeError(`user rejected action`, "ACTION_REJECTED", {
        action: actionMap[method] || "unknown",
        reason: "rejected",
        info: { payload, error }
      });
    }
    if (method === "eth_sendRawTransaction" || method === "eth_sendTransaction") {
      const transaction = payload.params[0];
      if (message.match(/insufficient funds|base fee exceeds gas limit/i)) {
        return makeError("insufficient funds for intrinsic transaction cost", "INSUFFICIENT_FUNDS", {
          transaction,
          info: { error }
        });
      }
      if (message.match(/nonce/i) && message.match(/too low/i)) {
        return makeError("nonce has already been used", "NONCE_EXPIRED", { transaction });
      }
      if (message.match(/replacement transaction/i) && message.match(/underpriced/i)) {
        return makeError("replacement fee too low", "REPLACEMENT_UNDERPRICED", { transaction });
      }
      if (message.match(/only replay-protected/i)) {
        return makeError("legacy pre-eip-155 transactions not supported", "UNSUPPORTED_OPERATION", {
          operation: method,
          info: { transaction }
        });
      }
    }
    if (message.match(/the method .* does not exist/i)) {
      return makeError("unsupported operation", "UNSUPPORTED_OPERATION", {
        operation: payload.method,
        info: { error }
      });
    }
    return makeError("could not coalesce error", "UNKNOWN_ERROR", { error });
  }
  send(method, params) {
    const id2 = __privateWrapper(this, _nextId)._++;
    const promise = new Promise((resolve, reject) => {
      __privateGet(this, _payloads).push({
        resolve,
        reject,
        payload: { method, params, id: id2, jsonrpc: "2.0" }
      });
    });
    __privateMethod(this, _scheduleDrain, scheduleDrain_fn).call(this);
    return promise;
  }
  async getSigner(address) {
    if (address == null) {
      address = 0;
    }
    const accountsPromise = this.send("eth_accounts", []);
    if (typeof address === "number") {
      const accounts2 = await accountsPromise;
      if (address >= accounts2.length) {
        throw new Error("no such account");
      }
      return new JsonRpcSigner(this, accounts2[address]);
    }
    const { accounts } = await resolveProperties({
      network: this.getNetwork(),
      accounts: accountsPromise
    });
    address = getAddress(address);
    for (const account of accounts) {
      if (getAddress(account) === account) {
        return new JsonRpcSigner(this, account);
      }
    }
    throw new Error("invalid account");
  }
}
_options2 = new WeakMap();
_nextId = new WeakMap();
_payloads = new WeakMap();
_drainTimer = new WeakMap();
_notReady = new WeakMap();
_network2 = new WeakMap();
_scheduleDrain = new WeakSet();
scheduleDrain_fn = function() {
  if (__privateGet(this, _drainTimer)) {
    return;
  }
  const stallTime = this._getOption("batchMaxCount") === 1 ? 0 : this._getOption("batchStallTime");
  __privateSet(this, _drainTimer, setTimeout(() => {
    __privateSet(this, _drainTimer, null);
    const payloads = __privateGet(this, _payloads);
    __privateSet(this, _payloads, []);
    while (payloads.length) {
      const batch = [payloads.shift()];
      while (payloads.length) {
        if (batch.length === __privateGet(this, _options2).batchMaxCount) {
          break;
        }
        batch.push(payloads.shift());
        const bytes2 = JSON.stringify(batch.map((p2) => p2.payload));
        if (bytes2.length > __privateGet(this, _options2).batchMaxSize) {
          payloads.unshift(batch.pop());
          break;
        }
      }
      (async () => {
        const payload = batch.length === 1 ? batch[0].payload : batch.map((p2) => p2.payload);
        this.emit("debug", { action: "sendRpcPayload", payload });
        try {
          const result = await this._send(payload);
          this.emit("debug", { action: "receiveRpcResult", result });
          for (const { resolve, reject, payload: payload2 } of batch) {
            const resp = result.filter((r2) => r2.id === payload2.id)[0];
            if (resp == null) {
              return reject(new Error("@TODO: no result"));
            }
            if ("error" in resp) {
              return reject(this.getRpcError(payload2, resp));
            }
            resolve(resp.result);
          }
        } catch (error) {
          this.emit("debug", { action: "receiveRpcError", error });
          for (const { reject } of batch) {
            reject(error);
          }
        }
      })();
    }
  }, stallTime));
};
class JsonRpcApiPollingProvider extends JsonRpcApiProvider {
  constructor(network, options) {
    super(network, options);
    __privateAdd(this, _pollingInterval, void 0);
    __privateSet(this, _pollingInterval, 4e3);
  }
  _getSubscriber(sub) {
    const subscriber = super._getSubscriber(sub);
    if (isPollable(subscriber)) {
      subscriber.pollingInterval = __privateGet(this, _pollingInterval);
    }
    return subscriber;
  }
  get pollingInterval() {
    return __privateGet(this, _pollingInterval);
  }
  set pollingInterval(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error("invalid interval");
    }
    __privateSet(this, _pollingInterval, value);
    this._forEachSubscriber((sub) => {
      if (isPollable(sub)) {
        sub.pollingInterval = __privateGet(this, _pollingInterval);
      }
    });
  }
}
_pollingInterval = new WeakMap();
function spelunkData(value) {
  if (value == null) {
    return null;
  }
  if (typeof value.message === "string" && value.message.match("reverted") && isHexString(value.data)) {
    return { message: value.message, data: value.data };
  }
  if (typeof value === "object") {
    for (const key in value) {
      const result = spelunkData(value[key]);
      if (result) {
        return result;
      }
    }
    return null;
  }
  if (typeof value === "string") {
    try {
      return spelunkData(JSON.parse(value));
    } catch (error) {
    }
  }
  return null;
}
function _spelunkMessage(value, result) {
  if (value == null) {
    return;
  }
  if (typeof value.message === "string") {
    result.push(value.message);
  }
  if (typeof value === "object") {
    for (const key in value) {
      _spelunkMessage(value[key], result);
    }
  }
  if (typeof value === "string") {
    try {
      return _spelunkMessage(JSON.parse(value), result);
    } catch (error) {
    }
  }
}
function spelunkMessage(value) {
  const result = [];
  _spelunkMessage(value, result);
  return result;
}
class BrowserProvider extends JsonRpcApiPollingProvider {
  constructor(ethereum, network) {
    super(network, { batchMaxCount: 1 });
    __privateAdd(this, _request2, void 0);
    __privateSet(this, _request2, async (method, params) => {
      const payload = { method, params };
      this.emit("debug", { action: "sendEip1193Request", payload });
      try {
        const result = await ethereum.request(payload);
        this.emit("debug", { action: "receiveEip1193Result", result });
        return result;
      } catch (e) {
        const error = new Error(e.message);
        error.code = e.code;
        error.data = e.data;
        error.payload = payload;
        this.emit("debug", { action: "receiveEip1193Error", error });
        throw error;
      }
    });
  }
  async send(method, params) {
    await this._start();
    return await super.send(method, params);
  }
  async _send(payload) {
    assertArgument(!Array.isArray(payload), "EIP-1193 does not support batch request", "payload", payload);
    try {
      const result = await __privateGet(this, _request2).call(this, payload.method, payload.params || []);
      return [{ id: payload.id, result }];
    } catch (e) {
      return [{
        id: payload.id,
        error: { code: e.code, data: e.data, message: e.message }
      }];
    }
  }
  getRpcError(payload, error) {
    error = JSON.parse(JSON.stringify(error));
    switch (error.error.code || -1) {
      case 4001:
        error.error.message = `ethers-user-denied: ${error.error.message}`;
        break;
      case 4200:
        error.error.message = `ethers-unsupported: ${error.error.message}`;
        break;
    }
    return super.getRpcError(payload, error);
  }
  async hasSigner(address) {
    if (address == null) {
      address = 0;
    }
    const accounts = await this.send("eth_accounts", []);
    if (typeof address === "number") {
      return accounts.length > address;
    }
    address = address.toLowerCase();
    return accounts.filter((a) => a.toLowerCase() === address).length !== 0;
  }
  async getSigner(address) {
    if (address == null) {
      address = 0;
    }
    if (!await this.hasSigner(address)) {
      try {
        await __privateGet(this, _request2).call(this, "eth_requestAccounts", []);
      } catch (error) {
        const payload = error.payload;
        throw this.getRpcError(payload, { id: payload.id, error });
      }
    }
    return await super.getSigner(address);
  }
}
_request2 = new WeakMap();
const abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Approval",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "ApprovalForAll",
    type: "event"
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "Transfer",
    type: "event"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_image",
        type: "string"
      }
    ],
    name: "addCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "admin",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "artist",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_admin",
        type: "address"
      }
    ],
    name: "assignAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_artist",
        type: "address"
      }
    ],
    name: "assignArtist",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      }
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    name: "candidates",
    outputs: [
      {
        internalType: "uint256",
        name: "canId",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "name",
        type: "string"
      },
      {
        internalType: "string",
        name: "image",
        type: "string"
      },
      {
        internalType: "bool",
        name: "resigned",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "countVotes",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address"
      }
    ],
    name: "changeOwner",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "_resigned",
        type: "bool"
      }
    ],
    name: "disableCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "getApproved",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "getBalance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "getPig",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "pigId",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "name",
            type: "string"
          },
          {
            internalType: "uint256",
            name: "cost",
            type: "uint256"
          },
          {
            internalType: "string",
            name: "image",
            type: "string"
          },
          {
            internalType: "bool",
            name: "isOwned",
            type: "bool"
          }
        ],
        internalType: "struct Kyuri.Pig",
        name: "",
        type: "tuple"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address"
      },
      {
        internalType: "address",
        name: "operator",
        type: "address"
      }
    ],
    name: "isApprovedForAll",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "isPaused",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_image",
        type: "string"
      }
    ],
    name: "list",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "maxSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "mint",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_image",
        type: "string"
      }
    ],
    name: "modifyCandidate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256"
      }
    ],
    name: "modifyCost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      },
      {
        internalType: "string",
        name: "_name",
        type: "string"
      },
      {
        internalType: "string",
        name: "_image",
        type: "string"
      }
    ],
    name: "modifyPig",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "ownerOf",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bool",
        name: "_pause",
        type: "bool"
      }
    ],
    name: "pausePoll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "pigFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256"
      }
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "regFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "resetTotalVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_voterAddress",
        type: "address"
      }
    ],
    name: "resetVoter",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "resetVotes",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes"
      }
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [],
    name: "selfRegister",
    outputs: [],
    stateMutability: "payable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address"
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool"
      }
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256"
      }
    ],
    name: "setPigFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_cost",
        type: "uint256"
      }
    ],
    name: "setRegFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4"
      }
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalCandidates",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [],
    name: "totalVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256"
      }
    ],
    stateMutability: "view",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address"
      },
      {
        internalType: "address",
        name: "to",
        type: "address"
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256"
      }
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_id",
        type: "uint256"
      }
    ],
    name: "vote",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function"
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address"
      }
    ],
    name: "voters",
    outputs: [
      {
        internalType: "bool",
        name: "authorised",
        type: "bool"
      },
      {
        internalType: "uint256",
        name: "whom",
        type: "uint256"
      },
      {
        internalType: "bool",
        name: "voted",
        type: "bool"
      }
    ],
    stateMutability: "view",
    type: "function"
  }
];
const config = {
  "1": {
    eVote: {
      address: "0xB95BE2Acdf69E9A5357606f7031933c598259772"
    }
  },
  "5": {
    eVote: {
      address: "0xB95BE2Acdf69E9A5357606f7031933c598259772"
    }
  },
  "80001": {
    eVote: {
      address: "0xB95BE2Acdf69E9A5357606f7031933c598259772"
    }
  },
  "11155111": {
    eVote: {
      address: "0xB95BE2Acdf69E9A5357606f7031933c598259772"
    }
  },
  abi
};
const Navbar = ({ theme, toggleTheme, isLoading, account, isAdmin, refreshPage, ensName, ensAvatar, accountBalance, connectWalletHandler, BtnLoad: BtnLoad2, isOwner, isVoter, nftBalance, chainID, isArtist, isPaused }) => {
  const connectWalletButton = () => {
    return /* @__PURE__ */ jsx("button", { onClick: connectWalletHandler, type: "button", className: "flex items-center rounded-lg bg-cyan-700 hover:bg-cyan-600 px-4 py-2 text-white btn-width", children: isLoading ? /* @__PURE__ */ jsx(BtnLoad2, {}) : "Connect" });
  };
  return /* @__PURE__ */ jsx("nav", { className: "flex absolute top-3 right-3", children: /* @__PURE__ */ jsxs("ul", { children: [
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      theme == "light" ? /* @__PURE__ */ jsx("svg", { onClick: toggleTheme, className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" }) }) : /* @__PURE__ */ jsx("svg", { onClick: toggleTheme, className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 20 20", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" }) }),
      account && /* @__PURE__ */ jsx("p", { className: "text-xs", children: "🟢" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm", children: account && chainID == "1" ? "Mainnet" : chainID == "5" ? "Görli" : chainID == "11155111" ? "Sepolia" : chainID == "137" ? "Polygon" : chainID == "80001" ? "Mumbai" : "" }),
      account && /* @__PURE__ */ jsx(KyuriLogo, {}),
      ensName && (ensAvatar ? /* @__PURE__ */ jsx("img", { src: ensAvatar, className: "avatar" }) : ""),
      account ? /* @__PURE__ */ jsx("button", { className: "rounded-lg bg-green-700 hover:bg-green-600 px-4 py-2 text-white", onClick: refreshPage, children: ensName ? ensName : account.slice(0, 6) + "..." + account.slice(38, 42) }) : connectWalletButton()
    ] }) }),
    /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      account && (chainID == "1" || chainID == "5" || chainID == "11155111") && /* @__PURE__ */ jsx(EthLogo, {}),
      account && (chainID == "137" || chainID == "80001") && /* @__PURE__ */ jsx(MaticLogo, {}),
      account && parseFloat(accountBalance)
    ] }) }),
    /* @__PURE__ */ jsxs("li", { className: "text-2xl", children: [
      nftBalance > 0 && /* @__PURE__ */ jsx(Link, { to: "/Owned", children: "📇" }),
      account && /* @__PURE__ */ jsx(Link, { to: "/ShopPig", children: "🏪" }),
      nftBalance > 0 && (!isPaused && (!isVoter.voted && (isVoter.authorised && /* @__PURE__ */ jsx(Link, { to: "/OpenVote", children: "🗳" })))),
      nftBalance > 0 && (!isPaused && (!isVoter.voted && (!isVoter.authorised && /* @__PURE__ */ jsx(Link, { to: "/Registration", children: "🔏" })))),
      (account == isAdmin || isVoter.voted) && /* @__PURE__ */ jsx(Link, { to: "/CheckVote", children: "📋" }),
      account && /* @__PURE__ */ jsx(Link, { to: "/", children: "📄" })
    ] })
  ] }) });
};
const Candidate = ({ candidate, eVote, provider, id: id2, BtnLoad: BtnLoad2, connectWalletHandler, loadData, isVoter }) => {
  const [voteLoading, setVoteLoading] = reactExports.useState(false);
  const voteHandler = async () => {
    setVoteLoading(true);
    try {
      const signer = await provider.getSigner();
      const transaction = await eVote.connect(signer).vote(candidate.canId);
      console.log("Submitted! Transaction ID: ", transaction.hash);
      await transaction.wait();
      console.log("Done! Voted successfully!");
      connectWalletHandler();
      loadData();
    } catch (error) {
      console.log(error);
    }
    setVoteLoading(false);
  };
  return /* @__PURE__ */ jsx(Fragment$1, { children: !candidate.resigned && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: "m-1 bg-emerald-100 rounded-2xl", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-slate-500", children: /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("img", { src: candidate.image, className: "h-52" }),
      candidate.name,
      /* @__PURE__ */ jsx("br", {})
    ] }) }),
    isVoter.authorised && !isVoter.voted ? /* @__PURE__ */ jsx(
      "button",
      {
        className: "justify-center rounded-lg bg-orange-600 hover:bg-orange-500 px-4 py-2 text-white btn-width",
        onClick: () => voteHandler(),
        children: voteLoading ? /* @__PURE__ */ jsx(BtnLoad2, {}) : /* @__PURE__ */ jsx("span", { children: "pig" })
      }
    ) : /* @__PURE__ */ jsx("button", { className: "justify-center rounded-lg bg-slate-400 px-4 py-2 text-white btn-width", disabled: true, children: "Unavailable" })
  ] }) }) });
};
const OpenVote = ({ ArrowLoad: ArrowLoad2, BtnLoad: BtnLoad2, account, connectWalletHandler, isVoter }) => {
  const [provider, setProvider] = reactExports.useState(null);
  const [eVote, setEVote] = reactExports.useState(null);
  const [totalCandidate, setTotalCandidate] = reactExports.useState(null);
  const [candidates, setCandidates] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const loadData = async () => {
    setLoading(true);
    try {
      const provider2 = new BrowserProvider(window.ethereum);
      setProvider(provider2);
      const network = await provider2.getNetwork();
      const eVote2 = new Contract(config[network.chainId.toString()].eVote.address, config.abi, provider2);
      setEVote(eVote2);
      const totalCandidate2 = await eVote2.totalCandidates();
      setTotalCandidate(parseInt(totalCandidate2));
      const candidates2 = [];
      for (var i = 1; i <= totalCandidate2; i++) {
        const candidate = await eVote2.candidates(i);
        candidates2.push(candidate);
      }
      ;
      setCandidates(candidates2);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    loadData();
  }, []);
  const [searchName, setSearchName] = reactExports.useState("");
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-10" }),
    account ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "🔎",
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search...",
          onChange: (event) => {
            setSearchName(event.target.value);
          },
          className: "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
      ),
      " ",
      isVoter.authorised ? isVoter.voted ? "⚫️" : "🟢" : "🔴",
      loading && /* @__PURE__ */ jsxs("div", { className: "w-full h-full grid grid-cols-1 grid-rows-1 place-items-center", children: [
        /* @__PURE__ */ jsx(ArrowLoad2, {}),
        "Loading..."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-container", children: candidates.filter((candidate) => {
        if (searchName == "") {
          return candidate;
        } else if (candidate.name.toLowerCase().includes(searchName.toLowerCase())) {
          return candidate;
        }
      }).map((candidate, index2) => (
        // <Candidate candidate={candidate} eVote={eVote} provider={provider} id={index + 1} key={index} BtnLoad={BtnLoad} connectWalletHandler={connectWalletHandler} loadData={loadData} isVoter={isVoter}/>
        /* @__PURE__ */ jsx(Candidate, { candidate, eVote, provider, id: index2 + 1, BtnLoad: BtnLoad2, connectWalletHandler, loadData, isVoter }, index2)
      )) })
    ] }) : "Please Connect🔌Wallet"
  ] });
};
const CountVote = ({ candidate }) => {
  return /* @__PURE__ */ jsx(Fragment$1, { children: !candidate.resigned && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: "m-1 bg-emerald-100 rounded-lg", children: [
    /* @__PURE__ */ jsx("h4", { className: "text-slate-500", children: candidate.name }),
    /* @__PURE__ */ jsxs("h4", { className: "text-slate-500", children: [
      "Vote: ",
      parseInt(candidate.countVotes)
    ] })
  ] }) }) });
};
const CheckVote = ({ ArrowLoad: ArrowLoad2, account, totalVote }) => {
  const [provider, setProvider] = reactExports.useState(null);
  const [eVote, setEVote] = reactExports.useState(null);
  const [totalCandidate, setTotalCandidate] = reactExports.useState(null);
  const [candidates, setCandidates] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const loadData = async () => {
    setLoading(true);
    try {
      const provider2 = new BrowserProvider(window.ethereum);
      setProvider(provider2);
      const network = await provider2.getNetwork();
      const eVote2 = new Contract(config[network.chainId.toString()].eVote.address, config.abi, provider2);
      setEVote(eVote2);
      const totalCandidate2 = await eVote2.totalCandidates();
      setTotalCandidate(parseInt(totalCandidate2));
      const candidates2 = [];
      for (var i = 1; i <= totalCandidate2; i++) {
        const candidate = await eVote2.candidates(i);
        candidates2.push(candidate);
      }
      ;
      setCandidates(candidates2);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    loadData();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-10" }),
    account ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "Total Vote Count: ",
      totalVote,
      loading && /* @__PURE__ */ jsxs("div", { className: "w-full h-full grid grid-cols-1 grid-rows-1 place-items-center", children: [
        /* @__PURE__ */ jsx(ArrowLoad2, {}),
        "Loading..."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-container", children: candidates.map((candidate, index2) => /* @__PURE__ */ jsx(CountVote, { candidate, eVote, provider, id: index2 + 1 }, index2)) })
    ] }) : "Please Connect🔌Wallet"
  ] });
};
const Registration = ({ BtnLoad: BtnLoad2, connectWalletHandler, isVoter, regFee }) => {
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const changeHandler = async () => {
    setIsLoading(true);
    const provider = new BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    const network = await provider.getNetwork();
    const contract = new Contract(config[network.chainId.toString()].eVote.address, config.abi, signer);
    try {
      const tx = await contract.selfRegister({ value: regFee });
      console.log("Submitted! Transaction ID: ", tx.hash);
      await tx.wait();
      console.log("Done! Voter Registered!");
      connectWalletHandler();
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-10" }),
    isVoter.authorised ? isVoter.voted ? "⚫️voted" : "🟢voter" : "🔴nonvoter",
    /* @__PURE__ */ jsx("br", {}),
    !isVoter.authorised && (regFee > 0 && "🗳" + parseFloat(formatEther(regFee)) + "🏷"),
    !isVoter.authorised && (regFee > 0 && /* @__PURE__ */ jsx("br", {})),
    !isVoter.authorised && !isVoter.voted ? /* @__PURE__ */ jsx("button", { className: "justify-center rounded-lg bg-orange-600 hover:bg-orange-500 px-4 py-2 text-white btn-width", onClick: changeHandler, children: isLoading ? /* @__PURE__ */ jsx(BtnLoad2, {}) : "Register" }) : /* @__PURE__ */ jsx("button", { className: "justify-center rounded-lg bg-slate-400 px-4 py-2 text-white btn-width", disabled: true, children: "Registered" })
  ] });
};
const Readme = ({ ArrowLoad: ArrowLoad2 }) => {
  const [data, setData] = reactExports.useState([]);
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const callData = async () => {
    try {
      setIsLoading(true);
      const data_call = await fetch(`https://bafybeiek2p6uyqlpv6dupopd4iajbo56eg2dmngyyd67ql2gtcela3dsi4.ipfs.w3s.link/note.json`);
      const data2 = await data_call.json();
      setData(data2);
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  reactExports.useEffect(() => {
    callData();
  }, []);
  const [searchTitle, setSearchTitle] = reactExports.useState("");
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-10" }),
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
      "🔎",
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search...",
          onChange: (event) => {
            setSearchTitle(event.target.value);
          },
          className: "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
      )
    ] }),
    isLoading && /* @__PURE__ */ jsx("br", {}),
    isLoading && /* @__PURE__ */ jsxs("div", { className: "w-full h-full grid grid-cols-1 grid-rows-1 place-items-center", children: [
      /* @__PURE__ */ jsx(ArrowLoad2, {}),
      "Loading..."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-container", children: data.filter((record) => {
      if (searchTitle == "") {
        return record;
      } else if (record.title.toLowerCase().includes(searchTitle.toLowerCase())) {
        return record;
      }
    }).map((record) => {
      return /* @__PURE__ */ jsxs("div", { className: "w-4/5 sm:w-3/5 text-start", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs py-1", children: record.date && record.date }),
        /* @__PURE__ */ jsx("p", { className: "text-lg font-bold py-2", children: record.title && record.title }),
        record.sentence1 && record.sentence1,
        record.sentence1 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence2 && record.sentence2,
        record.sentence2 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence3 && record.sentence3,
        record.sentence3 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence4 && record.sentence4,
        record.sentence4 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence5 && record.sentence5,
        record.sentence5 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence6 && record.sentence6,
        record.sentence6 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence7 && record.sentence7,
        record.sentence7 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence8 && record.sentence8,
        record.sentence8 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence9 && record.sentence9,
        record.sentence9 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence10 && record.sentence10,
        record.sentence10 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.sentence11 && record.sentence11,
        record.sentence11 && /* @__PURE__ */ jsx("p", { className: "py-2" }),
        record.image && /* @__PURE__ */ jsx("img", { src: record.image }),
        record.image && /* @__PURE__ */ jsx("p", { className: "py-1" }),
        record.author && record.author,
        record.author && /* @__PURE__ */ jsx("p", { className: "py-2" })
      ] }, record.id);
    }) })
  ] });
};
const Pig = ({ pig, eVote, id: id2, BtnLoad: BtnLoad2, connectWalletHandler, accountBalance, loadShop, chainID }) => {
  const [buyLoading, setBuyLoading] = reactExports.useState(false);
  const buyHandler = async () => {
    setBuyLoading(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const transaction = await eVote.connect(signer).mint(pig.pigId, { value: pig.cost });
      console.log("Submitted! Transaction ID: ", transaction.hash);
      await transaction.wait();
      console.log("Done! Transaction Confirmed!");
      connectWalletHandler();
      loadShop();
    } catch (error) {
      console.log(error);
    }
    setBuyLoading(false);
  };
  return /* @__PURE__ */ jsx(Fragment$1, { children: !pig.isOwned && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: "m-1 bg-emerald-100 rounded-2xl", children: [
    /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-800", children: pig.isOwned ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("img", { src: pig.image, className: "h-52 w-52 grayscale hover:invert" }),
      /* @__PURE__ */ jsx("del", { children: pig.name }),
      " ",
      id2,
      " ",
      pig.pigId.toString()
    ] }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
      /* @__PURE__ */ jsx("img", { src: pig.image, className: "h-52" }),
      pig.name
    ] }) }),
    /* @__PURE__ */ jsx("h4", { className: "text-slate-500", children: pig.isOwned ? /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsx("small", { children: /* @__PURE__ */ jsx("span", { children: "Sold" }) }) }) : /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "Price:",
      /* @__PURE__ */ jsx("strong", { children: formatUnits(pig.cost.toString(), "ether") }),
      (chainID == "1" || chainID == "5" || chainID == "11155111") && "ETH",
      (chainID == "137" || chainID == "80001") && "MATIC"
    ] }) }),
    !pig.isOwned && (accountBalance < parseFloat(formatEther(pig.cost)) ? /* @__PURE__ */ jsx("button", { className: "justify-center rounded-lg bg-slate-400 px-4 py-2 text-white btn-width", disabled: true, children: "Not Enough Fund" }) : /* @__PURE__ */ jsx(
      "button",
      {
        className: "justify-center rounded-lg bg-orange-600 hover:bg-orange-500 px-4 py-2 text-white btn-width",
        onClick: () => buyHandler(),
        children: buyLoading ? /* @__PURE__ */ jsx(BtnLoad2, {}) : /* @__PURE__ */ jsx("span", { children: "Buy" })
      }
    ))
  ] }) }) });
};
const ShopPig = ({ ArrowLoad: ArrowLoad2, BtnLoad: BtnLoad2, account, connectWalletHandler, accountBalance, chainID }) => {
  const [eVote, setEVote] = reactExports.useState(null);
  const [pigs, setPigs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const loadShop = async () => {
    setLoading(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      const eVote2 = new Contract(config[network.chainId.toString()].eVote.address, config.abi, provider);
      setEVote(eVote2);
      const maxSupply = await eVote2.maxSupply();
      const pigs2 = [];
      for (var i = 1; i <= maxSupply; i++) {
        const pig = await eVote2.getPig(i);
        pigs2.push(pig);
      }
      ;
      setPigs(pigs2);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    loadShop();
  }, []);
  const [searchName, setSearchName] = reactExports.useState("");
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-10" }),
    account ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
      "🔎",
      /* @__PURE__ */ jsx(
        "input",
        {
          type: "text",
          placeholder: "Search...",
          onChange: (event) => {
            setSearchName(event.target.value);
          },
          className: "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        }
      ),
      loading && /* @__PURE__ */ jsxs("div", { className: "w-full h-full grid grid-cols-1 grid-rows-1 place-items-center", children: [
        /* @__PURE__ */ jsx(ArrowLoad2, {}),
        "Loading..."
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex-container", children: pigs.filter((pig) => {
        if (searchName == "") {
          return pig;
        } else if (pig.name.toLowerCase().includes(searchName.toLowerCase())) {
          return pig;
        }
      }).map((pig, index2) => /* @__PURE__ */ jsx(Pig, { pig, eVote, id: index2 + 1, BtnLoad: BtnLoad2, connectWalletHandler, accountBalance, loadShop, chainID }, index2)) })
    ] }) : "Please Connect🔌Wallet"
  ] });
};
const MyPig = ({ pig, eVote, id: id2, account, BtnLoad: BtnLoad2, connectWalletHandler, pigFee, loadPig }) => {
  const [owner, setOwner] = reactExports.useState(null);
  const [ensAddress, setEnsAddress] = reactExports.useState(null);
  const getOwner = async () => {
    if (pig.isOwned) {
      const owner2 = await eVote.ownerOf(id2);
      setOwner(owner2.toLowerCase());
    }
  };
  reactExports.useEffect(() => {
    getOwner();
  }, []);
  const getAddressFromEns = async () => {
    try {
      const provider = new BrowserProvider(window.ethereum);
      const ensAddress2 = await provider.resolveName(values.targetAddress);
      setEnsAddress(ensAddress2);
    } catch (err) {
    }
  };
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const initialValues = {
    targetAddress: "",
    tokenName: "",
    tokenImage: ""
  };
  const [values, setValues] = reactExports.useState(initialValues);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };
  const transferHandler = async () => {
    setIsLoading(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();
      const contract = new Contract(config[network.chainId.toString()].eVote.address, config.abi, signer);
      const transaction = await contract["safeTransferFrom(address,address,uint256)"](account, values.targetAddress, id2);
      console.log("Submitted! Transaction ID: ", transaction.hash);
      await transaction.wait();
      console.log("Done! Pig Transferred!");
      connectWalletHandler();
      loadPig();
      getOwner();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  const modifyHandler = async () => {
    setIsLoading(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const network = await provider.getNetwork();
      const contract = new Contract(config[network.chainId.toString()].eVote.address, config.abi, signer);
      const transaction = await contract.modifyPig(id2, values.tokenName, values.tokenImage, { value: pigFee });
      console.log("Submitted! Transaction ID: ", transaction.hash);
      await transaction.wait();
      console.log("Done! Pig Modified!");
      connectWalletHandler();
      loadPig();
      getOwner();
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  reactExports.useEffect(() => {
    getAddressFromEns();
  }, [values.targetAddress]);
  const info = "eip155:1/erc721:0xB95BE2Acdf69E9A5357606f7031933c598259772/" + pig.pigId.toString();
  const [copied, setCopied] = reactExports.useState(false);
  return /* @__PURE__ */ jsx(Fragment$1, { children: owner == account && /* @__PURE__ */ jsx(Fragment$1, { children: /* @__PURE__ */ jsxs("div", { className: "m-1 bg-emerald-100 rounded-2xl", children: [
    /* @__PURE__ */ jsx("img", { src: pig.image, className: "h-52" }),
    /* @__PURE__ */ jsx("h3", { className: "font-bold text-slate-800", children: pig.name }),
    /* @__PURE__ */ jsxs("div", { className: "flex", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          name: "targetAddress",
          type: "string",
          value: values.targetAddress,
          onChange: handleInputChange,
          placeholder: "Paste Address/ENS",
          className: "shadow appearance-none border rounded py-2 px-1 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
        }
      ),
      isAddress(values.targetAddress) ? "✔️" : ensAddress && "✔️"
    ] }),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "justify-center rounded-lg bg-orange-600 hover:bg-orange-500 px-4 py-2 text-white btn-width",
        onClick: () => transferHandler(),
        children: isLoading ? /* @__PURE__ */ jsx(BtnLoad2, {}) : /* @__PURE__ */ jsx("span", { children: "Transfer" })
      }
    ),
    /* @__PURE__ */ jsx("small", { children: /* @__PURE__ */ jsxs("div", { className: "flex justify-center", children: [
      info.slice(9, 21) + "..." + info.slice(55, 65),
      /* @__PURE__ */ jsx("svg", { onClick: () => {
        navigator.clipboard.writeText(info);
        setCopied(true);
      }, className: "w-5 h-5", fill: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: /* @__PURE__ */ jsx("path", { d: "M5.50282 4.62705L5.5 6.75V17.2542C5.5 19.0491 6.95509 20.5042 8.75002 20.5042L17.3663 20.5045C17.0574 21.3782 16.224 22.0042 15.2444 22.0042H8.75002C6.12667 22.0042 4 19.8775 4 17.2542V6.75C4 5.7693 4.62745 4.93512 5.50282 4.62705ZM17.75 2C18.9927 2 20 3.00735 20 4.25001V17.25C20 18.4926 18.9927 19.5 17.75 19.5H8.75002C7.50736 19.5 6.50002 18.4926 6.50002 17.25V4.25001C6.50002 3.00735 7.50736 2 8.75002 2H17.75ZM17.75 3.50001H8.75002C8.33581 3.50001 8.00002 3.8358 8.00002 4.25001V17.25C8.00002 17.6642 8.33581 18 8.75002 18H17.75C18.1642 18 18.5 17.6642 18.5 17.25V4.25001C18.5 3.8358 18.1642 3.50001 17.75 3.50001Z" }) }),
      copied && "copied"
    ] }) }),
    /* @__PURE__ */ jsxs("form", { children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          name: "tokenName",
          type: "string",
          value: values.tokenName,
          onChange: handleInputChange,
          placeholder: "Enter New Name",
          className: "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
        }
      ),
      /* @__PURE__ */ jsx("br", {}),
      /* @__PURE__ */ jsx(
        "input",
        {
          name: "tokenImage",
          type: "string",
          value: values.tokenImage,
          onChange: handleInputChange,
          placeholder: "Enter New Image URL",
          className: "shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-center"
        }
      ),
      /* @__PURE__ */ jsx("br", {})
    ] }),
    pigFee > 0 && "🐷" + parseFloat(formatEther(pigFee)) + "🏷",
    pigFee > 0 && /* @__PURE__ */ jsx("br", {}),
    /* @__PURE__ */ jsx(
      "button",
      {
        className: "justify-center rounded-lg bg-orange-600 hover:bg-orange-500 px-4 py-2 text-white btn-width",
        onClick: modifyHandler,
        children: isLoading ? /* @__PURE__ */ jsx(BtnLoad2, {}) : "Modify"
      }
    )
  ] }) }) });
};
const Owned = ({ ArrowLoad: ArrowLoad2, account, BtnLoad: BtnLoad2, connectWalletHandler, pigFee }) => {
  const [eVote, setEVote] = reactExports.useState(null);
  const [pigs, setPigs] = reactExports.useState([]);
  const [loading, setLoading] = reactExports.useState(false);
  const loadPig = async () => {
    setLoading(true);
    try {
      const provider = new BrowserProvider(window.ethereum);
      const network = await provider.getNetwork();
      const eVote2 = new Contract(config[network.chainId.toString()].eVote.address, config.abi, provider);
      setEVote(eVote2);
      const maxSupply = await eVote2.maxSupply();
      const pigs2 = [];
      for (var i = 1; i <= maxSupply; i++) {
        const pig = await eVote2.getPig(i);
        pigs2.push(pig);
      }
      ;
      setPigs(pigs2);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  reactExports.useEffect(() => {
    loadPig();
  }, []);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsx("div", { className: "py-10" }),
    "🔐",
    loading && /* @__PURE__ */ jsxs("div", { className: "w-full h-full grid grid-cols-1 grid-rows-1 place-items-center", children: [
      /* @__PURE__ */ jsx(ArrowLoad2, {}),
      "Loading..."
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex-container", children: pigs.map((pig, index2) => /* @__PURE__ */ jsx(MyPig, { pig, eVote, id: index2 + 1, account, BtnLoad: BtnLoad2, connectWalletHandler, pigFee, loadPig }, index2)) })
  ] });
};
function App() {
  const [provider, setProvider] = reactExports.useState(null);
  const [chainID, setChainID] = reactExports.useState(null);
  const [account, setAccount] = reactExports.useState(null);
  const [ensName, setEnsName] = reactExports.useState(null);
  const [ensAvatar, setEnsAvatar] = reactExports.useState(null);
  const [accountBalance, setAccountBalance] = reactExports.useState(null);
  const [nftBalance, setNftBalance] = reactExports.useState(null);
  const [totalVote, setTotalVote] = reactExports.useState(null);
  const [isVoter, setIsVoter] = reactExports.useState("");
  const [isAdmin, setIsAdmin] = reactExports.useState("");
  const [isOwner, setIsOwner] = reactExports.useState("");
  const [isArtist, setIsArtist] = reactExports.useState("");
  const [isPaused, setIsPaused] = reactExports.useState("");
  const [pigFee, setPigFee] = reactExports.useState("");
  const [regFee, setRegFee] = reactExports.useState("");
  const [isLoading, setIsLoading] = reactExports.useState(false);
  const [theme, setTheme] = reactExports.useState("light");
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };
  reactExports.useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Please Connect🔌your account through browser extension or access this dApp via Wallet app. i.e., MetaMask🦊");
    }
    try {
      setIsLoading(true);
      const provider2 = new BrowserProvider(window.ethereum);
      setProvider(provider2);
      const network = await provider2.getNetwork();
      const contract = new Contract(config[network.chainId.toString()].eVote.address, config.abi, provider2);
      setChainID(network.chainId.toString());
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0].toLowerCase());
      const accountBalance2 = await provider2.getBalance(accounts[0]);
      setAccountBalance(formatEther(accountBalance2));
      const nftBalance2 = await contract.balanceOf(accounts[0]);
      setNftBalance(parseInt(nftBalance2));
      const isVoter2 = await contract.voters(accounts[0]);
      setIsVoter(isVoter2);
      const isAdmin2 = await contract.admin();
      setIsAdmin(isAdmin2.toLowerCase());
      const isArtist2 = await contract.artist();
      setIsArtist(isArtist2.toLowerCase());
      const isOwner2 = await contract.owner();
      setIsOwner(isOwner2.toLowerCase());
      const isPaused2 = await contract.isPaused();
      setIsPaused(isPaused2);
      const pigFee2 = await contract.pigFee();
      setPigFee(pigFee2);
      const regFee2 = await contract.regFee();
      setRegFee(regFee2);
      const totalVote2 = await contract.totalVotes();
      setTotalVote(parseInt(totalVote2));
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  };
  const getEnsName = async () => {
    try {
      const ensName2 = await provider.lookupAddress(account);
      setEnsName(ensName2);
      const resolver = ensName2 ? await provider.getResolver(ensName2) : null;
      const avatar = resolver ? await resolver._getAvatar() : null;
      setEnsAvatar(avatar.url);
    } catch (err) {
      console.log("No Avatar Detected!");
    }
  };
  reactExports.useEffect(() => {
    if (account) {
      getEnsName();
    }
  }, [account]);
  function refreshPage() {
    window.location.reload();
  }
  return (
    // <BrowserRouter> // NOTE: use HashRouter instead while deploying the frontend to ipfs
    /* @__PURE__ */ jsxs(HashRouter, { children: [
      /* @__PURE__ */ jsx(Navbar, { theme, toggleTheme, isLoading, account, isAdmin, refreshPage, ensName, ensAvatar, accountBalance, connectWalletHandler, BtnLoad, isOwner, isVoter, nftBalance, chainID, isArtist, isPaused }),
      /* @__PURE__ */ jsxs(Routes, { children: [
        /* @__PURE__ */ jsx(Route, { path: "*", element: /* @__PURE__ */ jsx(Readme, { ArrowLoad }) }),
        /* @__PURE__ */ jsx(Route, { path: "/", element: /* @__PURE__ */ jsx(Readme, { ArrowLoad }) }),
        nftBalance > 0 && /* @__PURE__ */ jsx(Route, { path: "/Owned", element: /* @__PURE__ */ jsx(Owned, { ArrowLoad, account, BtnLoad, connectWalletHandler, pigFee }) }),
        account && /* @__PURE__ */ jsx(Route, { path: "/ShopPig", element: /* @__PURE__ */ jsx(ShopPig, { ArrowLoad, BtnLoad, account, connectWalletHandler, accountBalance, chainID }) }),
        nftBalance > 0 && (!isPaused && (!isVoter.voted && (isVoter.authorised && /* @__PURE__ */ jsx(Route, { path: "/OpenVote", element: /* @__PURE__ */ jsx(OpenVote, { ArrowLoad, BtnLoad, account, connectWalletHandler, isVoter }) })))),
        nftBalance > 0 && (!isPaused && (!isVoter.voted && (!isVoter.authorised && /* @__PURE__ */ jsx(Route, { path: "/Registration", element: /* @__PURE__ */ jsx(Registration, { BtnLoad, connectWalletHandler, isVoter, regFee }) })))),
        (account == isAdmin || isVoter.voted) && /* @__PURE__ */ jsx(Route, { path: "/CheckVote", element: /* @__PURE__ */ jsx(CheckVote, { ArrowLoad, account, totalVote }) })
      ] })
    ] })
  );
}
const index = "";
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsx(React.StrictMode, { children: /* @__PURE__ */ jsx(App, {}) })
);
