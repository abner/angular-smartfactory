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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhY3Rvcmllcy5zcGVjLnRzIl0sIm5hbWVzIjpbIkRlY29yYXRlZFVzZXIiLCJEZWNvcmF0ZWRVc2VyLmNvbnN0cnVjdG9yIl0sIm1hcHBpbmdzIjoiQUFBQSwrREFBK0Q7QUFDL0QsaUVBQWlFO0FBQ2pFLHVFQUF1RTtBQUN2RSxpRUFBaUU7Ozs7Ozs7Ozs7OztBQUdqRSxJQUFZLFlBQVksV0FBTSxhQUFhLENBQUMsQ0FBQTtBQVM1QyxRQUFRLENBQUMsY0FBYyxFQUFFO0lBS3ZCLElBQUksY0FBa0QsQ0FBQztJQUN2RCxJQUFLLFFBQVEsR0FBVyxFQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLGdCQUFnQixFQUFDLENBQUM7SUFHeEQsVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7SUFFaEQsVUFBVSxDQUFDLE1BQU0sQ0FBQyxVQUFDLFNBQTZDO1FBQzlELGNBQWMsR0FBRyxTQUFTLENBQUM7UUFDM0IsY0FBYyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBQyxDQUFDLElBQUksQ0FBQyxFQUFFLFVBQUMsR0FBUSxJQUFNLE1BQU0sQ0FBQyxlQUFlLEdBQUcsR0FBRyxDQUFDLENBQUEsQ0FBQyxDQUFDLENBQUM7SUFDbEgsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUlKO1FBQUFBO1FBR0FDLENBQUNBO1FBSEREO1lBQUNBLFlBQVlBLENBQUNBLE1BQU1BLENBQUNBLE1BQU1BLENBQUNBOzswQkFHM0JBO1FBQURBLG9CQUFDQTtJQUFEQSxDQUhBLEFBR0NBLElBQUE7SUFFRCxFQUFFLENBQUMsaUVBQWlFLEVBQUU7UUFDcEUsY0FBYyxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxDQUFDO1FBQ3pELE1BQU0sQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxDQUFDLENBQUM7SUFDdkUsQ0FBQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsaUJBQWlCLEVBQUU7UUFDcEIsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDekQsQ0FBQyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsd0NBQXdDLEVBQUU7UUFDM0MsTUFBTSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEUsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJmYWN0b3JpZXMuc3BlYy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCIuLi8uLi8udG1wL3R5cGluZ3MvamFzbWluZS9qYXNtaW5lLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL2FuZ3VsYXJqcy9hbmd1bGFyLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL2FuZ3VsYXJqcy9hbmd1bGFyLW1vY2tzLmQudHNcIi8+XG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vLi4vLnRtcC90eXBpbmdzL3JlcXVpcmVqcy9yZXF1aXJlLmQudHNcIi8+XG5cblxuaW1wb3J0ICogYXMgc21hcnRGYWN0b3J5IGZyb20gJy4vZmFjdG9yaWVzJztcbi8vIDxyZWZlcmVuY2UgcGF0aD1cIi4vZmFjdG9yaWVzLnRzXCIgLz5cblxuXG5cbi8vc21hcnRGYWN0b3J5LmZha2VyID0gZmFrZXI7XG4vL3NtYXJ0RmFjdG9yeS5GYWN0b3J5ID0gRmFjdG9yeTtcblxuXG5kZXNjcmliZSgnc21hcnRGYWN0b3J5JywgKCkgPT4ge1xuXG5cblxuICAvLyBEZWZpbml0aW9uc1xuICB2YXIgRmFjdG9yeVNlcnZpY2U6IHR5cGVvZiBzbWFydEZhY3RvcnkuRmFjdG9yeVdyYXBwZXI7XG4gIHZhciAgVVNFUl9PQko6IE9iamVjdCA9IHtpZDogMSwgbmFtZTogJ01hbiBXaXRobmFtZSAxJ307XG5cbiAgLy8gYmVmb3JlRWFjaFxuICBiZWZvcmVFYWNoKGFuZ3VsYXIubW9jay5tb2R1bGUoJ3NtYXJ0RmFjdG9yeScpKTtcblxuICBiZWZvcmVFYWNoKGluamVjdCgoX0ZhY3RvcnlfOiB0eXBlb2Ygc21hcnRGYWN0b3J5LkZhY3RvcnlXcmFwcGVyKSA9PiB7XG4gICAgRmFjdG9yeVNlcnZpY2UgPSBfRmFjdG9yeV87XG4gICAgRmFjdG9yeVNlcnZpY2UuZGVmaW5lKCd1c2VyJykuc2VxdWVuY2UoJ2lkJykuYXR0cignbmFtZScsWydpZCddLCAoc2VxOiBhbnkpID0+IHtyZXR1cm4gJ01hbiBXaXRobmFtZSAnICsgc2VxO30pO1xuICB9KSk7XG5cbiAgLy8gY2xhc3MgZGVjb3JhdGVkXG4gIC8qKiBvbmx5IGZvciB0eXBlc2NyaXB0ICoqL1xuICBAc21hcnRGYWN0b3J5LmNvbmZpZygndXNlcicpXG4gIGNsYXNzIERlY29yYXRlZFVzZXIge1xuXG4gIH1cblxuICBpdCgnZGVmaW5lcyBmYWN0b3JpZXMgdGhyb3VuZyBGYWN0b3J5IHdpdGhvdXQgZGVwZW5kZW5jaWVzIGFyZ3VtZW50JywgKCkgPT4ge1xuICAgIEZhY3RvcnlTZXJ2aWNlLmRlZmluZSgndXNlcnNpbXBsZScpLmF0dHIoJ25hbWUnLCAnSm9obicpO1xuICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcnNpbXBsZScpKS50b0VxdWFsKHsgbmFtZTogJ0pvaG4nIH0pO1xuICB9KTtcblxuICBpdCgnZGVmaW5lcyBGYWN0b3J5JywgKCkgPT4ge1xuICAgIGV4cGVjdChGYWN0b3J5U2VydmljZS5idWlsZCgndXNlcicpKS50b0VxdWFsKFVTRVJfT0JKKTtcbiAgfSk7XG5cbiAgLyoqIG9ubHkgZm9yIHR5cGVzY3JpcHQgKiovXG4gIGl0KCdoYXMgZmFjdG9yeSBleHBvc2VkIG9uIGRlY29yYXRlZCBjbGFzcycsICgpID0+IHtcbiAgICBleHBlY3QoRmFjdG9yeVNlcnZpY2UuZm9yKERlY29yYXRlZFVzZXIpLmJ1aWxkKCkpLnRvRXF1YWwoVVNFUl9PQkopO1xuICB9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9