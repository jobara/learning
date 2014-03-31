/* globals paper */

var demo = demo || {};

(function (demo, $) {
    "use strict";

    demo.initCircle = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        var myCircle = new paper.Path.Circle(new paper.Point(100, 70), 50);
        myCircle.fillColor = "black";
    };

    demo.initRectangle = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        var rectangle = new paper.Rectangle(new paper.Point(50, 50), new paper.Point(150, 100));
        var path = new paper.Path.Rectangle(rectangle);
        path.fillColor = "#e9e9ff";
        path.selected = true;
    };

    demo.initRoundedRectangle = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        var rectangle = new paper.Rectangle(new paper.Point(50, 50), new paper.Point(150, 100));
        var cornerSize = new paper.Size(20, 20);
        var path = new paper.Path.RoundRectangle(rectangle, cornerSize);
        path.fillColor = "black";
    };

    demo.initPolygon = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        // Create a triangle shaped path
        var triangle = new paper.Path.RegularPolygon(new paper.Point(80, 70), 3, 50);
        triangle.fillColor = "#e9e9ff";
        triangle.selected = true;

        // Create a decahedron shaped path
        var decahedron = new paper.Path.RegularPolygon(new paper.Point(200, 70), 10, 50);
        decahedron.fillColor = "#e9e9ff";
        decahedron.selected = true;
    };
})(demo, jQuery);
