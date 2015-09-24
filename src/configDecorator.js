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
})(smartFactory || (smartFactory = {}));
