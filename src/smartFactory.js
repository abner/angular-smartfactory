(function (angular, rosieFactory, faker) {
    var FactoryService = (function () {
        function FactoryService() {
        }
        FactoryService.define = function (name, constructor) {
            var fac = new FactoryService();
            fac.wrappedFactory = this.factory.define(name, constructor);
            return fac;
        };
        FactoryService.build = function (name, attributes, options) {
            return this.factory.build(name, attributes, options);
        };
        FactoryService.buildList = function (name, size, attributes, options) {
            return this.factory.build(name, size, attributes, options);
        };
        FactoryService.attributes = function (attributes, options) {
            return this.factory.attributes(attributes, options);
        };
        FactoryService.options = function (options) {
            return this.factory.options(options);
        };
        FactoryService.extend = function (name) {
            return this.factory.extend(name);
        };
        FactoryService.for = function (target) {
            if ((target.__rosieFactoryName__) && (target.factory)) {
                return target.factory;
            }
            else {
                throw new Error('no factory registered for ' + target.toString() + ' please check!');
            }
        };
        FactoryService.prototype.attr = function (name, dependenciesOrValue, value) {
            if (dependenciesOrValue && dependenciesOrValue.constructor === Array) {
                this.wrappedFactory = this.wrappedFactory.attr(name, dependenciesOrValue, value);
            }
            else {
                this.wrappedFactory = this.wrappedFactory.attr(name, [], dependenciesOrValue);
            }
            return this;
        };
        FactoryService.prototype.sequence = function (name, dependencies, builder) {
            if (dependencies === undefined && builder === undefined) {
                this.wrappedFactory = this.wrappedFactory.sequence(name);
            }
            else if (dependencies === undefined) {
                this.wrappedFactory = this.wrappedFactory.sequence(name, [], builder || null);
            }
            else {
                this.wrappedFactory = this.wrappedFactory.sequence(name, dependencies, builder || null);
            }
            return this;
        };
        FactoryService.factory = rosieFactory;
        FactoryService.faker = faker;
        return FactoryService;
    })();
    var ServiceConstructor = (function () {
        function ServiceConstructor() {
            return FactoryService;
        }
        return ServiceConstructor;
    })();
    angular.module('smartFactory', []).service('Factory', ServiceConstructor);
})(angular, Factory, faker);
