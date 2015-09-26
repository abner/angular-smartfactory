(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/// <reference path="../../.tmp/typings/angularjs/angular.d.ts" />
/// <reference path="../../.tmp/typings/requirejs/require.d.ts" />
var Factory = require('rosie').Factory;
var faker = require('faker');
var angular = require('angular');
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
        FactoryWrapper.prototype.attr = function (name, dependenciesOrValue, value) {
            if (dependenciesOrValue && dependenciesOrValue.constructor === Array) {
                this.wrappedFactory = this.wrappedFactory.attr(name, dependenciesOrValue, value);
            }
            else {
                this.wrappedFactory = this.wrappedFactory.attr(name, [], dependenciesOrValue);
            }
            return this;
        };
        FactoryWrapper.prototype.sequence = function (name, dependencies, builder) {
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
    angular.module('smartFactory', []).service('Factory', smartFactory.Service);
}
else {
    if (console && console.error) {
        if (typeof (angular) == 'undefined') {
            console.error('smartFactory not registered beacuse angular is missing');
        }
        if (typeof (faker) == 'undefined') {
            console.error('smartFactory not registered beacuse faker.js is missing');
        }
        if (typeof (Factory) == 'undefined') {
            console.error('smartFactory not registered beacuse angular rosie is missing');
        }
    }
}
module.exports = smartFactory;


},{}],2:[function(require,module,exports){
/// <reference path="../../.tmp/typings/jasmine/jasmine.d.ts"/>
/// <reference path="../../.tmp/typings/angularjs/angular.d.ts"/>
/// <reference path="../../.tmp/typings/angularjs/angular-mocks.d.ts"/>
/// <reference path="../../.tmp/typings/requirejs/require.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var smartFactory = require('./factories');
var angular = require('angular');
var ngMock = require('angular-mocks/ngMock');
console.log(ngMock);
describe('smartFactory', function () {
    var FactoryService;
    var USER_OBJ = { id: 1, name: 'Man Withname 1' };
    beforeEach(angular.mock.module('smartFactory'));
    beforeEach(inject(function (_Factory_) {
        FactoryService = _Factory_;
        FactoryService.define('user').sequence('id').attr('name', ['id'], function (seq) { return 'Man Withname ' + seq; });
    }));
    var DecoratedUser = (function () {
        function DecoratedUser() {
        }
        DecoratedUser = __decorate([
            smartFactory.config('user'), 
            __metadata('design:paramtypes', [])
        ], DecoratedUser);
        return DecoratedUser;
    })();
    it('defines factories throung Factory without dependencies argument', function () {
        FactoryService.define('usersimple').attr('name', 'John');
        expect(FactoryService.build('usersimple')).toEqual({ name: 'John' });
    });
    it('defines Factory', function () {
        expect(FactoryService.build('user')).toEqual(USER_OBJ);
    });
    it('has factory exposed on decorated class', function () {
        expect(FactoryService.for(DecoratedUser).build()).toEqual(USER_OBJ);
    });
});


},{"./factories":1}]},{},[2])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJmYWN0b3JpZXMuc3BlYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSh7MTpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL2FuZ3VsYXJqcy9hbmd1bGFyLmQudHNcIiAvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy9yZXF1aXJlanMvcmVxdWlyZS5kLnRzXCIgLz5cbnZhciBGYWN0b3J5ID0gcmVxdWlyZSgncm9zaWUnKS5GYWN0b3J5O1xudmFyIGZha2VyID0gcmVxdWlyZSgnZmFrZXInKTtcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xudmFyIHNtYXJ0RmFjdG9yeTtcbihmdW5jdGlvbiAoc21hcnRGYWN0b3J5KSB7XG4gICAgZnVuY3Rpb24gY29uZmlnKGZhY3RvcnlOYW1lKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICB0YXJnZXQuX19yb3NpZUZhY3RvcnlOYW1lX18gPSBmYWN0b3J5TmFtZTtcbiAgICAgICAgICAgIHRhcmdldC5mYWN0b3J5ID0ge1xuICAgICAgICAgICAgICAgIGxpc3Q6IGZ1bmN0aW9uIChzaXplLCBvdmVycmlkZU9iaikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gRmFjdG9yeS5idWlsZExpc3QodGFyZ2V0Ll9fcm9zaWVGYWN0b3J5TmFtZV9fLCBzaXplLCBvdmVycmlkZU9iaik7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBidWlsZDogZnVuY3Rpb24gKG92ZXJyaWRlT2JqKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBGYWN0b3J5LmJ1aWxkKHRhcmdldC5fX3Jvc2llRmFjdG9yeU5hbWVfXywgb3ZlcnJpZGVPYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH07XG4gICAgfVxuICAgIHNtYXJ0RmFjdG9yeS5jb25maWcgPSBjb25maWc7XG4gICAgdmFyIEZha2VyV3JhcHBlciA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIEZha2VyV3JhcHBlcigpIHtcbiAgICAgICAgfVxuICAgICAgICBGYWtlcldyYXBwZXIuZmluZE5hbWUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mYWtlci5uYW1lLmZpbmROYW1lKCk7XG4gICAgICAgIH07XG4gICAgICAgIEZha2VyV3JhcHBlci5mYWtlciA9IGZha2VyO1xuICAgICAgICByZXR1cm4gRmFrZXJXcmFwcGVyO1xuICAgIH0pKCk7XG4gICAgc21hcnRGYWN0b3J5LkZha2VyV3JhcHBlciA9IEZha2VyV3JhcHBlcjtcbiAgICB2YXIgRmFjdG9yeVdyYXBwZXIgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICBmdW5jdGlvbiBGYWN0b3J5V3JhcHBlcigpIHtcbiAgICAgICAgfVxuICAgICAgICBGYWN0b3J5V3JhcHBlci5kZWZpbmUgPSBmdW5jdGlvbiAobmFtZSwgY29uc3RydWN0b3IpIHtcbiAgICAgICAgICAgIHZhciBmYWMgPSBuZXcgRmFjdG9yeVdyYXBwZXIoKTtcbiAgICAgICAgICAgIGZhYy53cmFwcGVkRmFjdG9yeSA9IHRoaXMuZmFjdG9yeS5kZWZpbmUobmFtZSwgY29uc3RydWN0b3IpO1xuICAgICAgICAgICAgcmV0dXJuIGZhYztcbiAgICAgICAgfTtcbiAgICAgICAgRmFjdG9yeVdyYXBwZXIuYnVpbGQgPSBmdW5jdGlvbiAobmFtZSwgYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5idWlsZChuYW1lLCBhdHRyaWJ1dGVzLCBvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgRmFjdG9yeVdyYXBwZXIuYnVpbGRMaXN0ID0gZnVuY3Rpb24gKG5hbWUsIHNpemUsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuYnVpbGQobmFtZSwgc2l6ZSwgYXR0cmlidXRlcywgb3B0aW9ucyk7XG4gICAgICAgIH07XG4gICAgICAgIEZhY3RvcnlXcmFwcGVyLmF0dHJpYnV0ZXMgPSBmdW5jdGlvbiAoYXR0cmlidXRlcywgb3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5hdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgICAgICB9O1xuICAgICAgICBGYWN0b3J5V3JhcHBlci5vcHRpb25zID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3Rvcnkub3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgfTtcbiAgICAgICAgRmFjdG9yeVdyYXBwZXIuZXh0ZW5kID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuZXh0ZW5kKG5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBGYWN0b3J5V3JhcHBlci5mb3IgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAoKHRhcmdldC5fX3Jvc2llRmFjdG9yeU5hbWVfXykgJiYgKHRhcmdldC5mYWN0b3J5KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQuZmFjdG9yeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZmFjdG9yeSByZWdpc3RlcmVkIGZvciAnICsgdGFyZ2V0LnRvU3RyaW5nKCkgKyAnIHBsZWFzZSBjaGVjayEnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgRmFjdG9yeVdyYXBwZXIucHJvdG90eXBlLmF0dHIgPSBmdW5jdGlvbiAobmFtZSwgZGVwZW5kZW5jaWVzT3JWYWx1ZSwgdmFsdWUpIHtcbiAgICAgICAgICAgIGlmIChkZXBlbmRlbmNpZXNPclZhbHVlICYmIGRlcGVuZGVuY2llc09yVmFsdWUuY29uc3RydWN0b3IgPT09IEFycmF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVkRmFjdG9yeSA9IHRoaXMud3JhcHBlZEZhY3RvcnkuYXR0cihuYW1lLCBkZXBlbmRlbmNpZXNPclZhbHVlLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLndyYXBwZWRGYWN0b3J5ID0gdGhpcy53cmFwcGVkRmFjdG9yeS5hdHRyKG5hbWUsIFtdLCBkZXBlbmRlbmNpZXNPclZhbHVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICBGYWN0b3J5V3JhcHBlci5wcm90b3R5cGUuc2VxdWVuY2UgPSBmdW5jdGlvbiAobmFtZSwgZGVwZW5kZW5jaWVzLCBidWlsZGVyKSB7XG4gICAgICAgICAgICBpZiAoZGVwZW5kZW5jaWVzID09PSB1bmRlZmluZWQgJiYgYnVpbGRlciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVkRmFjdG9yeSA9IHRoaXMud3JhcHBlZEZhY3Rvcnkuc2VxdWVuY2UobmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChkZXBlbmRlbmNpZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMud3JhcHBlZEZhY3RvcnkgPSB0aGlzLndyYXBwZWRGYWN0b3J5LnNlcXVlbmNlKG5hbWUsIFtdLCBidWlsZGVyIHx8IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy53cmFwcGVkRmFjdG9yeSA9IHRoaXMud3JhcHBlZEZhY3Rvcnkuc2VxdWVuY2UobmFtZSwgZGVwZW5kZW5jaWVzLCBidWlsZGVyIHx8IG51bGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIEZhY3RvcnlXcmFwcGVyLmZhY3RvcnkgPSBGYWN0b3J5O1xuICAgICAgICByZXR1cm4gRmFjdG9yeVdyYXBwZXI7XG4gICAgfSkoKTtcbiAgICBzbWFydEZhY3RvcnkuRmFjdG9yeVdyYXBwZXIgPSBGYWN0b3J5V3JhcHBlcjtcbiAgICB2YXIgU2VydmljZSA9IChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGZ1bmN0aW9uIFNlcnZpY2UoKSB7XG4gICAgICAgICAgICByZXR1cm4gRmFjdG9yeVdyYXBwZXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFNlcnZpY2U7XG4gICAgfSkoKTtcbiAgICBzbWFydEZhY3RvcnkuU2VydmljZSA9IFNlcnZpY2U7XG59KShzbWFydEZhY3RvcnkgfHwgKHNtYXJ0RmFjdG9yeSA9IHt9KSk7XG5pZiAoKHR5cGVvZiAoYW5ndWxhcikgIT0gJ3VuZGVmaW5lZCcpKSB7XG4gICAgYW5ndWxhci5tb2R1bGUoJ3NtYXJ0RmFjdG9yeScsIFtdKS5zZXJ2aWNlKCdGYWN0b3J5Jywgc21hcnRGYWN0b3J5LlNlcnZpY2UpO1xufVxuZWxzZSB7XG4gICAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICBpZiAodHlwZW9mIChhbmd1bGFyKSA9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignc21hcnRGYWN0b3J5IG5vdCByZWdpc3RlcmVkIGJlYWN1c2UgYW5ndWxhciBpcyBtaXNzaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoZmFrZXIpID09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdzbWFydEZhY3Rvcnkgbm90IHJlZ2lzdGVyZWQgYmVhY3VzZSBmYWtlci5qcyBpcyBtaXNzaW5nJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiAoRmFjdG9yeSkgPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ3NtYXJ0RmFjdG9yeSBub3QgcmVnaXN0ZXJlZCBiZWFjdXNlIGFuZ3VsYXIgcm9zaWUgaXMgbWlzc2luZycpO1xuICAgICAgICB9XG4gICAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzbWFydEZhY3Rvcnk7XG5cblxufSx7fV0sMjpbZnVuY3Rpb24ocmVxdWlyZSxtb2R1bGUsZXhwb3J0cyl7XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL2phc21pbmUvamFzbWluZS5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy9hbmd1bGFyanMvYW5ndWxhci5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy9hbmd1bGFyanMvYW5ndWxhci1tb2Nrcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy9yZXF1aXJlanMvcmVxdWlyZS5kLnRzXCIvPlxudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIGRlY29yYXRvcnMucmVkdWNlUmlnaHQoZnVuY3Rpb24obywgZCkgeyByZXR1cm4gKGQgJiYgZChvKSkgfHwgbzsgfSwgdGFyZ2V0KTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gZGVjb3JhdG9ycy5yZWR1Y2VSaWdodChmdW5jdGlvbihvLCBkKSB7IHJldHVybiAoZCAmJiBkKHRhcmdldCwga2V5KSksIHZvaWQgMDsgfSwgdm9pZCAwKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gZGVjb3JhdG9ycy5yZWR1Y2VSaWdodChmdW5jdGlvbihvLCBkKSB7IHJldHVybiAoZCAmJiBkKHRhcmdldCwga2V5LCBvKSkgfHwgbzsgfSwgZGVzYyk7XG4gICAgfVxufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgc21hcnRGYWN0b3J5ID0gcmVxdWlyZSgnLi9mYWN0b3JpZXMnKTtcbnZhciBhbmd1bGFyID0gcmVxdWlyZSgnYW5ndWxhcicpO1xudmFyIG5nTW9jayA9IHJlcXVpcmUoJ2FuZ3VsYXItbW9ja3MvbmdNb2NrJyk7XG5jb25zb2xlLmxvZyhuZ01vY2spO1xuZGVzY3JpYmUoJ3NtYXJ0RmFjdG9yeScsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgRmFjdG9yeVNlcnZpY2U7XG4gICAgdmFyIFVTRVJfT0JKID0geyBpZDogMSwgbmFtZTogJ01hbiBXaXRobmFtZSAxJyB9O1xuICAgIGJlZm9yZUVhY2goYW5ndWxhci5tb2NrLm1vZHVsZSgnc21hcnRGYWN0b3J5JykpO1xuICAgIGJlZm9yZUVhY2goaW5qZWN0KGZ1bmN0aW9uIChfRmFjdG9yeV8pIHtcbiAgICAgICAgRmFjdG9yeVNlcnZpY2UgPSBfRmFjdG9yeV87XG4gICAgICAgIEZhY3RvcnlTZXJ2aWNlLmRlZmluZSgndXNlcicpLnNlcXVlbmNlKCdpZCcpLmF0dHIoJ25hbWUnLCBbJ2lkJ10sIGZ1bmN0aW9uIChzZXEpIHsgcmV0dXJuICdNYW4gV2l0aG5hbWUgJyArIHNlcTsgfSk7XG4gICAgfSkpO1xuICAgIHZhciBEZWNvcmF0ZWRVc2VyID0gKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZnVuY3Rpb24gRGVjb3JhdGVkVXNlcigpIHtcbiAgICAgICAgfVxuICAgICAgICBEZWNvcmF0ZWRVc2VyID0gX19kZWNvcmF0ZShbXG4gICAgICAgICAgICBzbWFydEZhY3RvcnkuY29uZmlnKCd1c2VyJyksIFxuICAgICAgICAgICAgX19tZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCBbXSlcbiAgICAgICAgXSwgRGVjb3JhdGVkVXNlcik7XG4gICAgICAgIHJldHVybiBEZWNvcmF0ZWRVc2VyO1xuICAgIH0pKCk7XG4gICAgaXQoJ2RlZmluZXMgZmFjdG9yaWVzIHRocm91bmcgRmFjdG9yeSB3aXRob3V0IGRlcGVuZGVuY2llcyBhcmd1bWVudCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgRmFjdG9yeVNlcnZpY2UuZGVmaW5lKCd1c2Vyc2ltcGxlJykuYXR0cignbmFtZScsICdKb2huJyk7XG4gICAgICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcnNpbXBsZScpKS50b0VxdWFsKHsgbmFtZTogJ0pvaG4nIH0pO1xuICAgIH0pO1xuICAgIGl0KCdkZWZpbmVzIEZhY3RvcnknLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcicpKS50b0VxdWFsKFVTRVJfT0JKKTtcbiAgICB9KTtcbiAgICBpdCgnaGFzIGZhY3RvcnkgZXhwb3NlZCBvbiBkZWNvcmF0ZWQgY2xhc3MnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5mb3IoRGVjb3JhdGVkVXNlcikuYnVpbGQoKSkudG9FcXVhbChVU0VSX09CSik7XG4gICAgfSk7XG59KTtcblxuXG59LHtcIi4vZmFjdG9yaWVzXCI6MX1dfSx7fSxbMl0pIl0sImZpbGUiOiJzbWFydEZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==