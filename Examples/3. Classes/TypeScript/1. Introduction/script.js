/**
* Created by pavelpat on 03.06.14.
*/
var SomeClass = (function () {
    function SomeClass() {
        this._property = 'Test';
        alert('Class constructor called!');
    }
    /**
    * Публичный метод.
    */
    SomeClass.prototype.someMethod = function () {
        alert('someMethod() called');
    };

    /**
    * Статичный метод.
    */
    SomeClass.someStaticMethod = function () {
        alert('someStaticMethod() called');
    };

    Object.defineProperty(SomeClass.prototype, "property", {
        /**
        * Аксессор свойства.
        */
        get: function () {
            return this._property;
        },
        enumerable: true,
        configurable: true
    });
    return SomeClass;
})();

// Ок.
SomeClass.someStaticMethod();

// Ок.
var instance = new SomeClass();
instance.someMethod();
//# sourceMappingURL=script.js.map
