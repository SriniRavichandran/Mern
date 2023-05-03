"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(x, y, z) {
        var _this = this;
        this.x = x;
        this.y = y;
        this.z = z;
        this.draw = function () {
            console.log("x is = " + _this.x, "y is = " + _this.y, "z is = " + _this.z);
        };
        this.drawRectangle = function () {
            console.log("drawing reactangle");
            _this.draw();
        };
        this.x = x;
        this.y = y;
        this.z = z;
    }
    Object.defineProperty(Point.prototype, "X", {
        get: function () {
            return this.x;
        },
        set: function (value) {
            this.x = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
