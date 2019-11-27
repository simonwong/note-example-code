// webpack 辅助程序
(function (modules) {
    // 模块缓存对象
    var installedModules = {};

    // require 方法
    function __webpack_require__(moduleId) {

        // 检查模块是否在缓存中
        if (installedModules[moduleId]) {
            return installedModules[moduleId].exports;
        }
        // 创建模块并放入缓存
        var module = installedModules[moduleId] = {
            i: moduleId,
            l: false,
            exports: {}
        };

        // 执行模块方法
        // 这里就可以看出 commonjs 使用的 exports.a = 1 和 module.exports = { a: 1 } 是一样的
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

        // 设置 l 表示模块已经加载
        module.l = true;

        // 返回模块的导出对象
        return module.exports;
    }


    // 暴露所有模块
    __webpack_require__.m = modules;

    // 暴露模块缓存
    __webpack_require__.c = installedModules;

    // 为 harmony 导出定义的 getter 方法
    __webpack_require__.d = function (exports, name, getter) {
        if (!__webpack_require__.o(exports, name)) {
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
        }
    };

    // 在导出对象上定义 __esModule
    __webpack_require__.r = function (exports) {
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
        }
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
    };

    // 创建一个模拟的命名空间对象
    // mode & 1: value 是模块 id, 直接 __webpack_require__ 加载
    // mode & 2: 合并所有的属性到命名空间 ns 上
    // mode & 4: 当已经是 ns 对象的时候可以直接返回值
    // mode & 8|1: 行为类似于 require
    __webpack_require__.t = function (value, mode) {
        if (mode & 1) value = __webpack_require__(value);
        if (mode & 8) return value;
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        // 创建一个空的对象，并用 r 方法定义为 __esModule
        var ns = Object.create(null);
        __webpack_require__.r(ns);
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        if (mode & 2 && typeof value != 'string')
            for (var key in value) {
                __webpack_require__.d(ns, key, function (key) {
                    return value[key];
                }.bind(null, key));
            }
        return ns;
    };

    // getDefaultExport 方法为了兼容 non-harmony 模块
    __webpack_require__.n = function (module) {
        var getter = module && module.__esModule ?
            function getDefault() {
                return module['default'];
            } :
            function getModuleExports() {
                return module;
            };
        __webpack_require__.d(getter, 'a', getter);
        return getter;
    };

    // Object.prototype.hasOwnProperty.call
    __webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };

    // 公共路径
    __webpack_require__.p = "";


    // 加载入口模块并返回导出对象
    return __webpack_require__(__webpack_require__.s = "./src/index.js");
})({
    "./src-b/index.js": (function (module, __webpack_exports__, __webpack_require__) {
        "use strict";
        // 定义导出对象为 esModule 类型
        __webpack_require__.r(__webpack_exports__);
        /* harmony import */
        var _test__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./test */ "./src-b/test.js");
        
        // __webpack_require__.n 是兼容了两种倒入结果
        var _test__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_test__WEBPACK_IMPORTED_MODULE_0__);

        /************** es module 混合 commonjs **************/
        console.log(_test__WEBPACK_IMPORTED_MODULE_0__["logText"]);
    }),
    "./src-b/test.js": (function (module, exports) {
        /************** es module 混合 commonjs **************/
        var logText = '美好的周五又来了';
        module.exports = {
            logText: logText
        };
    })
});