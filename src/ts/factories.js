/// <reference path="../../.tmp/typings/angularjs/angular.d.ts" />
/// <reference path="../../.tmp/typings/requirejs/require.d.ts" />
var Factory = require('rosie').Factory;
var faker = require('faker');
//import * as smartFactoryDecorator from './configDecorator';
var smartFactory;
(function (smartFactory) {
    function config(factoryName) {
        return function (target) {
            target.__rosieFactoryName__ = factoryName;
            target.factory = {
                list: function (size, overrideObj) {
                    return Factory.buildList(target.__rosieFactoryName__, size, overrideObj);
                },
                build: function (overrideObj) {
                    return Factory.build(target.__rosieFactoryName__, overrideObj);
                }
            };
        };
    }
    smartFactory.config = config;
    var FakerWrapper = (function () {
        function FakerWrapper() {
        }
        FakerWrapper.findName = function () {
            return this.faker.name.findName();
        };
        FakerWrapper.faker = faker;
        return FakerWrapper;
    })();
    smartFactory.FakerWrapper = FakerWrapper;
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
if ((typeof (angular) != 'undefined')) {
    console.log('BLIBLIBLI');
    angular.module('smartFactory', []).service('Factory', smartFactory.Service);
}
else {
    if (console && console.error) {
        if (typeof (angular) == 'undefined') {
            console.error('ngFactories not registered beacuse angular is missing');
        }
        if (typeof (faker) == 'undefined') {
            console.error('ngFactories not registered beacuse faker.js is missing');
        }
        if (typeof (Factory) == 'undefined') {
            console.error('ngFactories not registered beacuse angular rosie is missing');
        }
    }
}
module.exports = smartFactory;
