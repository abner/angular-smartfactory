var smartFactory;
(function (smartFactory) {
    var FactoryWrapper = (function () {
        function FactoryWrapper() {
        }
        FactoryWrapper.define = function (name, constructor) {
            var fac = new FactoryWrapper();
            fac.wrappedFactory = this.factory.define(name, constructor);
            return fac;
        };
        FactoryWrapper.build = function (name, attributes, options) {
            return this.factory.build(name, attributes, options);
        };
        FactoryWrapper.buildList = function (name, size, attributes, options) {
            return this.factory.build(name, size, attributes, options);
        };
        FactoryWrapper.attributes = function (attributes, options) {
            return this.factory.attributes(attributes, options);
        };
        FactoryWrapper.options = function (options) {
            return this.factory.options(options);
        };
        FactoryWrapper.extend = function (name) {
            return this.factory.extend(name);
        };
        FactoryWrapper.for = function (target) {
            if ((target.__rosieFactoryName__) && (target.factory)) {
                return target.factory;
            }
            else {
                throw new Error('no factory registered for ' + target.toString() + ' please check!');
            }
        };
        FactoryWrapper.prototype.attr = function (name, dependencies, value) {
            this.wrappedFactory = this.wrappedFactory.attr(name, dependencies, value);
            return this;
        };
        FactoryWrapper.prototype.sequence = function (name, dependencies, builder) {
            this.wrappedFactory = this.wrappedFactory.sequence(name, dependencies, builder);
            return this;
        };
        FactoryWrapper.factory = Factory;
        return FactoryWrapper;
    })();
    smartFactory.FactoryWrapper = FactoryWrapper;
    var Service = (function () {
        function Service() {
            return FactoryWrapper;
        }
        return Service;
    })();
    smartFactory.Service = Service;
})(smartFactory || (smartFactory = {}));
if (angular && faker && Factory) {
    angular.module('smartFactory', []).service('Factory', smartFactory.Service);
}
else {
    if (console && console.error) {
        if (!angular) {
            console.error('ngFactories not registered beacuse angular is missing');
        }
        if (!faker) {
            console.error('ngFactories not registered beacuse faker.js is missing');
        }
        if (!Factory) {
            console.error('ngFactories not registered beacuse angular rosie is missing');
        }
    }
}
