# angular-smartfactory

[![Circle CI](https://circleci.com/gh/abner/angular-smartfactory.svg?style=svg)](https://circleci.com/gh/abner/angular-smartfactory)

Smart Factories to angular testing and prototyping

Angular module which would be used to register objects factories which allow to create objects 
and list of objects in a smart way. 

It depends on [***rosie.js***](https://github.com/rosiejs/rosie) and [***faker.js***](https://github.com/Marak/faker.js) and provide Angular Service which would be injected to your angular tests, services or controllers.

Thanks  to https://github.com/Marak and rosiejs TEAM to these amazings libraries !!!

-------------------------
How to use:

Install smartFactory using bower or npm:

```sh
bower install angular-smartfactory
```

or 

```sh
npm install angular-smartfactory
```


Add the smartFactory.js file to you page (if you are using the factories in your controllers or services) and/or to your karma conf files (it using for tests):

```html
<script type="text/javascript" src="bower_components/angular-smartfactory/src/smartFactory.js"></script>
```

If you want use Factory and Faker while prototyping or testing you could add smartFactory as a dependency to your application,
so you can define factories to use in your controllers, services or tests;

```js
angular.module('yourApp', ['smartFactory']);
```

then define your Factories

```js
angular.module('yourApp').run(['Factory', 'faker', function(Factory, faker){
	Factory.define('user')
				.sequence('id')
				.attr('name', function(){ return faker.name.findName(); })
				.attr('email', 'name' ,function(name) { return faker.internet.email(name, ''); } );
	Factory.define('task')
				.sequence('id')
				.attr('description', faker.Lorem.sentence(3, 7))
				.attr('status', function() { return faker.helpers.randomize['open', 'closed', 'canceled']; });
}]);

```

then you can inject Factory and faker services to your services, controllers or tests to build objects or list of objects ...

```js
angular.module('yourApp').controller('MyController', function($scope, Factory){
	$scope.members = Factory.buildList('user', 10);
	$scope.currentUser = Factory.build('user');
	$scope.tasks = Factory.buildList('task', 25);
});
``` 