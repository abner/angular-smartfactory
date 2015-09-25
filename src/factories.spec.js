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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy5zcGVjLnRzIl0sIm5hbWVzIjpbIkRlY29yYXRlZFVzZXIiLCJEZWNvcmF0ZWRVc2VyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0QsaUVBQWlFO0FBQ2pFLHVFQUF1RTtBQUN2RSxpRUFBaUU7Ozs7Ozs7Ozs7OztBQUdqRSxJQUFZLFlBQVksV0FBTSxhQUFhLENBQUMsQ0FBQTtBQUM1QyxJQUFZLE9BQU8sV0FBTSxTQUFTLENBQUMsQ0FBQTtBQUVuQyxJQUFPLE1BQU0sV0FBVyxzQkFBc0IsQ0FBQyxDQUFDO0FBRWhELE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7QUFTcEIsUUFBUSxDQUFDLGNBQWMsRUFBRTtJQUt2QixJQUFJLGNBQWtELENBQUM7SUFDdkQsSUFBSyxRQUFRLEdBQVcsRUFBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxnQkFBZ0IsRUFBQyxDQUFDO0lBR3hELFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDO0lBRWhELFVBQVUsQ0FBQyxNQUFNLENBQUMsVUFBQyxTQUE2QztRQUM5RCxjQUFjLEdBQUcsU0FBUyxDQUFDO1FBQzNCLGNBQWMsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFDLEdBQVEsSUFBTSxNQUFNLENBQUMsZUFBZSxHQUFHLEdBQUcsQ0FBQyxDQUFBLENBQUMsQ0FBQyxDQUFDO0lBQ2xILENBQUMsQ0FBQyxDQUFDLENBQUM7SUFJSjtRQUFBQTtRQUdBQyxDQUFDQTtRQUhERDtZQUFDQSxZQUFZQSxDQUFDQSxNQUFNQSxDQUFDQSxNQUFNQSxDQUFDQTs7MEJBRzNCQTtRQUFEQSxvQkFBQ0E7SUFBREEsQ0FIQSxBQUdDQSxJQUFBO0lBRUQsRUFBRSxDQUFDLGlFQUFpRSxFQUFFO1FBQ3BFLGNBQWMsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxNQUFNLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBRUgsRUFBRSxDQUFDLGlCQUFpQixFQUFFO1FBQ3BCLE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3pELENBQUMsQ0FBQyxDQUFDO0lBR0gsRUFBRSxDQUFDLHdDQUF3QyxFQUFFO1FBQzNDLE1BQU0sQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RFLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUMiLCJmaWxlIjoiZmFjdG9yaWVzLnNwZWMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL2phc21pbmUvamFzbWluZS5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy9hbmd1bGFyanMvYW5ndWxhci5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy9hbmd1bGFyanMvYW5ndWxhci1tb2Nrcy5kLnRzXCIvPlxuLy8vIDxyZWZlcmVuY2UgcGF0aD1cIi4uLy4uLy50bXAvdHlwaW5ncy9yZXF1aXJlanMvcmVxdWlyZS5kLnRzXCIvPlxuXG5cbmltcG9ydCAqIGFzIHNtYXJ0RmFjdG9yeSBmcm9tICcuL2ZhY3Rvcmllcyc7XG5pbXBvcnQgKiBhcyBhbmd1bGFyIGZyb20gJ2FuZ3VsYXInO1xuXG5pbXBvcnQgbmdNb2NrID0gcmVxdWlyZSgnYW5ndWxhci1tb2Nrcy9uZ01vY2snKTtcblxuY29uc29sZS5sb2cobmdNb2NrKTtcbi8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZmFjdG9yaWVzLnRzXCIgLz5cblxuXG5cbi8vc21hcnRGYWN0b3J5LmZha2VyID0gZmFrZXI7XG4vL3NtYXJ0RmFjdG9yeS5GYWN0b3J5ID0gRmFjdG9yeTtcblxuXG5kZXNjcmliZSgnc21hcnRGYWN0b3J5JywgKCkgPT4ge1xuXG5cblxuICAvLyBEZWZpbml0aW9uc1xuICB2YXIgRmFjdG9yeVNlcnZpY2U6IHR5cGVvZiBzbWFydEZhY3RvcnkuRmFjdG9yeVdyYXBwZXI7XG4gIHZhciAgVVNFUl9PQko6IE9iamVjdCA9IHtpZDogMSwgbmFtZTogJ01hbiBXaXRobmFtZSAxJ307XG5cbiAgLy8gYmVmb3JlRWFjaFxuICBiZWZvcmVFYWNoKGFuZ3VsYXIubW9jay5tb2R1bGUoJ3NtYXJ0RmFjdG9yeScpKTtcblxuICBiZWZvcmVFYWNoKGluamVjdCgoX0ZhY3RvcnlfOiB0eXBlb2Ygc21hcnRGYWN0b3J5LkZhY3RvcnlXcmFwcGVyKSA9PiB7XG4gICAgRmFjdG9yeVNlcnZpY2UgPSBfRmFjdG9yeV87XG4gICAgRmFjdG9yeVNlcnZpY2UuZGVmaW5lKCd1c2VyJykuc2VxdWVuY2UoJ2lkJykuYXR0cignbmFtZScsWydpZCddLCAoc2VxOiBhbnkpID0+IHtyZXR1cm4gJ01hbiBXaXRobmFtZSAnICsgc2VxO30pO1xuICB9KSk7XG5cbiAgLy8gY2xhc3MgZGVjb3JhdGVkXG4gIC8qKiBvbmx5IGZvciB0eXBlc2NyaXB0ICoqL1xuICBAc21hcnRGYWN0b3J5LmNvbmZpZygndXNlcicpXG4gIGNsYXNzIERlY29yYXRlZFVzZXIge1xuXG4gIH1cblxuICBpdCgnZGVmaW5lcyBmYWN0b3JpZXMgdGhyb3VuZyBGYWN0b3J5IHdpdGhvdXQgZGVwZW5kZW5jaWVzIGFyZ3VtZW50JywgKCkgPT4ge1xuICAgIEZhY3RvcnlTZXJ2aWNlLmRlZmluZSgndXNlcnNpbXBsZScpLmF0dHIoJ25hbWUnLCAnSm9obicpO1xuICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcnNpbXBsZScpKS50b0VxdWFsKHsgbmFtZTogJ0pvaG4nIH0pO1xuICB9KTtcblxuICBpdCgnZGVmaW5lcyBGYWN0b3J5JywgKCkgPT4ge1xuICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcicpKS50b0VxdWFsKFVTRVJfT0JKKTtcbiAgfSk7XG5cbiAgLyoqIG9ubHkgZm9yIHR5cGVzY3JpcHQgKiovXG4gIGl0KCdoYXMgZmFjdG9yeSBleHBvc2VkIG9uIGRlY29yYXRlZCBjbGFzcycsICgpID0+IHtcbiAgICBleHBlY3QoRmFjdG9yeVNlcnZpY2UuZm9yKERlY29yYXRlZFVzZXIpLmJ1aWxkKCkpLnRvRXF1YWwoVVNFUl9PQkopO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIuL3RzIn0=