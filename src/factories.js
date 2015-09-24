var ngFactories;
(function (ngFactories) {
    var FactoryWrapper = (function () {
        function FactoryWrapper() {
        }
        FactoryWrapper.prototype.define = function (name, constructor) {
            return Factory.define(name, constructor);
        };
        FactoryWrapper.prototype.build = function (name, attributes, options) {
            return Factory.build(name, attributes, options);
        };
        FactoryWrapper.prototype.buildList = function (name, size, attributes, options) {
            return Factory.build(name, size, attributes, options);
        };
        return FactoryWrapper;
    })();
    var Service = (function () {
        function Service() {
            this.factories = {};
        }
        return Service;
    })();
    ngFactories.Service = Service;
})(ngFactories || (ngFactories = {}));
