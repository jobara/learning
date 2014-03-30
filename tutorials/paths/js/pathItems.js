var demo = demo || {};

(function (demo, $) {
    demo.initSegments = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        var myPath = new paper.Path();
        myPath.strokeColor = 'black';
        myPath.add(new paper.Point(0, 0), new paper.Point(100, 50));

        // insert a segment between the two existing
        // segments in the path:
        myPath.insert(1, new paper.Point(30, 40));
    };

    demo.initSmoothing = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        var path = new paper.Path();
        path.strokeColor = 'black';
        path.add(new paper.Point(30, 75));
        path.add(new paper.Point(30, 25));
        path.add(new paper.Point(80, 25));
        path.add(new paper.Point(80, 75));
        path.closed = true;

        // Select the path, so we can see its handles:
        path.fullySelected = true;

        // Create a copy of the path and move it 100pt to the right:
        var copy = path.clone();
        copy.fullySelected = true;
        copy.position.x += 100;

        // Smooth the segments of the copy:
        copy.smooth();
    };

    demo.initClosingPaths = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        var myPath = new paper.Path();
        myPath.strokeColor = 'black';
        myPath.add(new paper.Point(40, 90));
        myPath.add(new paper.Point(90, 40));
        myPath.add(new paper.Point(140, 90));

        // joins the first and last segments to close the path
        myPath.closed = true;
    };

    demo.initRemovingSegments = function (elm) {
        var canvas = $(elm);
        paper.setup(canvas[0]);

        var myCircle = new paper.Path.Circle(new paper.Point(100, 70), 50);
        myCircle.strokeColor = 'black';
        myCircle.selected = true;

        // Removes a segment from the path at the specified index
        myCircle.removeSegment(0);

        // remove will remove the item from the project
        // myCircle.remove();
    };
})(demo, jQuery);
