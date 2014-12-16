// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps){
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.setPosition(this.top, this.left);
  this.colors = ['red', 'green', 'yellow', 'violet', 'cyan', 'orange', 'blue'];
  this.$node.on('mouseover', function(event){

  });
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  var context = this;
  setTimeout(function () {
    context.step();
  }, this.timeBetweenSteps);
};

// this one sets the position to some random default point within the body
Dancer.prototype.setPosition = function(top, left){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: top,
    left: left
  };

  this.$node.css(styleSettings);
};

Dancer.prototype.distance = function(dancerA, dancerB){
  y = dancerA.top - dancerB.top;
  x = dancerA.left - dancerB.left;
  var c = Math.sqrt(y*y + x*x);
  return c;
};

Dancer.prototype.findClosest = function (event) {
  var closestDistance;
  var closestDancer;
  dancers.forEach(function (dancer) {
    if (event.top !== dancer.top && event.left !== dancer.left) {
      if (!closestDistance) {
        closestDistance = this.distance(event, dancer);
        closestDancer = dancer;
      } else {
        var currentDistance = this.distance(event, dancer);
        if (currentDistance < closestDistance) {
          closestDistance = currentDistance;
          closestDancer = dancer;
        }
      }
    }
  }.bind(this));
  var style = Math.floor(Math.random() * 10) + 'px solid ';
  var color = this.colors[Math.floor(Math.random() * this.colors.length-1)];
  this.$node.css('border', style + color);
  closestDancer.$node.css('border', style + color);
};


