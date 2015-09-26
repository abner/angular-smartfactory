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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNtYXJ0RmFjdG9yeS50cyJdLCJuYW1lcyI6WyJGYWN0b3J5U2VydmljZSIsIkZhY3RvcnlTZXJ2aWNlLmNvbnN0cnVjdG9yIiwiRmFjdG9yeVNlcnZpY2UuZGVmaW5lIiwiRmFjdG9yeVNlcnZpY2UuYnVpbGQiLCJGYWN0b3J5U2VydmljZS5idWlsZExpc3QiLCJGYWN0b3J5U2VydmljZS5hdHRyaWJ1dGVzIiwiRmFjdG9yeVNlcnZpY2Uub3B0aW9ucyIsIkZhY3RvcnlTZXJ2aWNlLmV4dGVuZCIsIkZhY3RvcnlTZXJ2aWNlLmZvciIsIkZhY3RvcnlTZXJ2aWNlLmF0dHIiLCJGYWN0b3J5U2VydmljZS5zZXF1ZW5jZSIsIlNlcnZpY2VDb25zdHJ1Y3RvciIsIlNlcnZpY2VDb25zdHJ1Y3Rvci5jb25zdHJ1Y3RvciJdLCJtYXBwaW5ncyI6IkFBS0EsQ0FBQyxVQUFVLE9BQTBCLEVBQUUsWUFBaUIsRUFBRSxLQUFVO0lBRWxFO1FBQUFBO1FBK0RBQyxDQUFDQTtRQXZEZUQscUJBQU1BLEdBQXBCQSxVQUFxQkEsSUFBWUEsRUFBRUEsV0FBc0JBO1lBQ3ZERSxJQUFJQSxHQUFHQSxHQUFvQkEsSUFBSUEsY0FBY0EsRUFBRUEsQ0FBQ0E7WUFDaERBLEdBQUdBLENBQUNBLGNBQWNBLEdBQW1CQSxJQUFJQSxDQUFDQSxPQUFPQSxDQUFDQSxNQUFNQSxDQUFDQSxJQUFJQSxFQUFFQSxXQUFXQSxDQUFDQSxDQUFDQTtZQUM1RUEsTUFBTUEsQ0FBQ0EsR0FBR0EsQ0FBQ0E7UUFDYkEsQ0FBQ0E7UUFFYUYsb0JBQUtBLEdBQW5CQSxVQUFvQkEsSUFBWUEsRUFBRUEsVUFBa0JBLEVBQUVBLE9BQWdCQTtZQUNwRUcsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0EsT0FBT0EsQ0FBQ0EsS0FBS0EsQ0FBQ0EsSUFBSUEsRUFBRUEsVUFBVUEsRUFBRUEsT0FBT0EsQ0FBQ0EsQ0FBQ0E7UUFDdkRBLENBQUNBO1FBRWFILHdCQUFTQSxHQUF2QkEsVUFBd0JBLElBQVlBLEVBQUVBLElB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SUFBSUEsQ0FBQ0EsQ0FBQ0E7Z0JBQ05BLElBQUlBLENBQUNBLGNBQWNBLEdBQWdDQSxJQUFJQSxDQUFDQSxjQUFlQSxDQUFDQSxRQUFRQSxDQUFDQSxJQUFJQSxFQUFFQSxZQUFZQSxFQUFFQSxPQUFPQSxJQUFJQSxJQUFJQSxDQUFDQSxDQUFDQTtZQUN4SEEsQ0FBQ0E7WUFDREEsTUFBTUEsQ0FBQ0EsSUFBSUEsQ0FBQ0E7UUFDZEEsQ0FBQ0E7UUE1RE1WLHNCQUFPQSxHQUFRQSxZQUFZQSxDQUFDQTtRQUM1QkEsb0JBQUtBLEdBQVFBLEtBQUtBLENBQUNBO1FBNkQ1QkEscUJBQUNBO0lBQURBLENBL0RBLEFBK0RDQSxJQUFBO0lBRUQ7UUFFRVc7WUFDRUMsTUFBTUEsQ0FBQ0EsY0FBY0EsQ0FBQ0E7UUFDeEJBLENBQUNBO1FBSUhELHlCQUFDQTtJQUFEQSxDQVJBLEFBUUNBLElBQUE7SUFFRCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLGtCQUFrQixDQUFDLENBQUM7QUFFNUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxLQUFLLENBQUMsQ0FBQyIsImZpbGUiOiJzbWFydEZhY3RvcnkuanMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBhbmd1bGFyOiBuZy5JQW5ndWxhclN0YXRpYztcbmRlY2xhcmUgdmFyIEZhY3Rvcnk6IGFueTtcbmRlY2xhcmUgdmFyIGZha2VyOiBhbnk7XG5cbi8qIHRzbGludDpkaXNhYmxlICovXG4oZnVuY3Rpb24gKGFuZ3VsYXI6IG5nLklBbmd1bGFyU3RhdGljLCByb3NpZUZhY3Rvcnk6IGFueSwgZmFrZXI6IGFueSk6IHZvaWQge1xuLyogdHNsaW50OmVuYWJsZSAqL1xuICBjbGFzcyBGYWN0b3J5U2VydmljZSB7XG4gICAgc3RhdGljIGZhY3Rvcnk6IGFueSA9IHJvc2llRmFjdG9yeTtcbiAgICBzdGF0aWMgZmFrZXI6IGFueSA9IGZha2VyO1xuXG4gICAgd3JhcHBlZEZhY3Rvcnk6IGFueTtcbiAgICBuYW1lOiBzdHJpbmc7XG5cblxuICAgIHB1YmxpYyBzdGF0aWMgZGVmaW5lKG5hbWU6IFN0cmluZywgY29uc3RydWN0b3I/OiBGdW5jdGlvbik6ICBzbWFydEZhY3RvcnkuSVJvc2llRmFjdG9yeSB7XG4gICAgICB2YXIgZmFjOiBGYWN0b3J5U2VydmljZSA9ICBuZXcgRmFjdG9yeVNlcnZpY2UoKTtcbiAgICAgIGZhYy53cmFwcGVkRmFjdG9yeSA9IDxGYWN0b3J5U2VydmljZT50aGlzLmZhY3RvcnkuZGVmaW5lKG5hbWUsIGNvbnN0cnVjdG9yKTtcbiAgICAgIHJldHVybiBmYWM7XG4gICAgfVxuXG4gICAgcHVibGljIHN0YXRpYyBidWlsZChuYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZXM/OiBhbnlbXSwgb3B0aW9ucz86IE9iamVjdCk6IE9iamVjdCB7XG4gICAgICByZXR1cm4gdGhpcy5mYWN0b3J5LmJ1aWxkKG5hbWUsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYnVpbGRMaXN0KG5hbWU6IHN0cmluZywgc2l6ZTogbnVtYmVyLCBhdHRyaWJ1dGVzPzogYW55W10sIG9wdGlvbnM/OiBPYmplY3QpOiBPYmplY3RbXSB7XG4gICAgICByZXR1cm4gdGhpcy5mYWN0b3J5LmJ1aWxkKG5hbWUsIHNpemUsIGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgYXR0cmlidXRlcyhhdHRyaWJ1dGVzOiBPYmplY3QsIG9wdGlvbnM/OiBPYmplY3QpOiBPYmplY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5hdHRyaWJ1dGVzKGF0dHJpYnV0ZXMsIG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgb3B0aW9ucyhvcHRpb25zOiBPYmplY3QpOiBPYmplY3Qge1xuICAgICAgcmV0dXJuIHRoaXMuZmFjdG9yeS5vcHRpb25zKG9wdGlvbnMpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZXh0ZW5kKG5hbWU6IHN0cmluZyk6IHNtYXJ0RmFjdG9yeS5JUm9zaWVGYWN0b3J5IHtcbiAgICAgIHJldHVybiB0aGlzLmZhY3RvcnkuZXh0ZW5kKG5hbWUpO1xuICAgIH1cblxuICAgIHB1YmxpYyBzdGF0aWMgZm9yKHRhcmdldDogYW55KSA6IHNtYXJ0RmFjdG9yeS5GYWN0b3J5RmFjaWxpdGllcyB7XG4gICAgICBpZiAoKCg8YW55PnRhcmdldCkuX19yb3NpZUZhY3RvcnlOYW1lX18pICYmICAoKDxhbnk+dGFyZ2V0KS5mYWN0b3J5KSkge1xuICAgICAgICByZXR1cm4gKDxzbWFydEZhY3RvcnkuSUNvbnN0cnVjdG9yV2l0aEZhY3Rvcnk+KDxhbnk+dGFyZ2V0KSkuZmFjdG9yeTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gZmFjdG9yeSByZWdpc3RlcmVkIGZvciAnICsgdGFyZ2V0LnRvU3RyaW5nKCkgKyAnIHBsZWFzZSBjaGVjayEnKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBhdHRyKG5hbWU6IHN0cmluZywgZGVwZW5kZW5jaWVzT3JWYWx1ZTogYW55IHwgc3RyaW5nW10sIHZhbHVlPzogYW55KTogc21hcnRGYWN0b3J5LklSb3NpZUZhY3Rvcnkge1xuICAgICAgaWYgKGRlcGVuZGVuY2llc09yVmFsdWUgJiYgZGVwZW5kZW5jaWVzT3JWYWx1ZS5jb25zdHJ1Y3RvciA9PT0gQXJyYXkpIHtcbiAgICAgICAgdGhpcy53cmFwcGVkRmFjdG9yeSA9ICg8c21hcnRGYWN0b3J5LklSb3NpZUZhY3Rvcnk+dGhpcy53cmFwcGVkRmFjdG9yeSkuYXR0cihuYW1lLCBkZXBlbmRlbmNpZXNPclZhbHVlLCB2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLndyYXBwZWRGYWN0b3J5ID0gKDxzbWFydEZhY3RvcnkuSVJvc2llRmFjdG9yeT50aGlzLndyYXBwZWRGYWN0b3J5KS5hdHRyKG5hbWUsIFtdLCBkZXBlbmRlbmNpZXNPclZhbHVlKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgc2VxdWVuY2UobmFtZTogc3RyaW5nLCBkZXBlbmRlbmNpZXM/OiBzdHJpbmdbXSwgYnVpbGRlcj86IEZ1bmN0aW9uKSA6IHNtYXJ0RmFjdG9yeS5JUm9zaWVGYWN0b3J5IHtcbiAgICAgIGlmIChkZXBlbmRlbmNpZXMgPT09IHVuZGVmaW5lZCAmJiBidWlsZGVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy53cmFwcGVkRmFjdG9yeSA9ICg8c21hcnRGYWN0b3J5LklSb3NpZUZhY3Rvcnk+dGhpcy53cmFwcGVkRmFjdG9yeSkuc2VxdWVuY2UobmFtZSk7XG4gICAgICB9IGVsc2UgaWYgKGRlcGVuZGVuY2llcyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMud3JhcHBlZEZhY3RvcnkgPSAoPHNtYXJ0RmFjdG9yeS5JUm9zaWVGYWN0b3J5PnRoaXMud3JhcHBlZEZhY3RvcnkpLnNlcXVlbmNlKG5hbWUsIFtdLCBidWlsZGVyIHx8IG51bGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy53cmFwcGVkRmFjdG9yeSA9ICg8c21hcnRGYWN0b3J5LklSb3NpZUZhY3Rvcnk+dGhpcy53cmFwcGVkRmFjdG9yeSkuc2VxdWVuY2UobmFtZSwgZGVwZW5kZW5jaWVzLCBidWlsZGVyIHx8IG51bGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gIH1cblxuICBjbGFzcyBTZXJ2aWNlQ29uc3RydWN0b3Ige1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICByZXR1cm4gRmFjdG9yeVNlcnZpY2U7XG4gICAgfVxuXG5cblxuICB9XG5cbiAgYW5ndWxhci5tb2R1bGUoJ3NtYXJ0RmFjdG9yeScsIFtdKS5zZXJ2aWNlKCdGYWN0b3J5JywgU2VydmljZUNvbnN0cnVjdG9yKTtcblxufSkoYW5ndWxhciwgRmFjdG9yeSwgZmFrZXIpO1xuIl0sInNvdXJjZVJvb3QiOiIuL3RzIn0=