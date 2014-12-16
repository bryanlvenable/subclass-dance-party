var BatmanDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="batman"><img src="https://31.media.tumblr.com/tumblr_mecbh7XNdz1rgpyeqo1_500.gif" /></span>');
  this.$node.css({top: top, left: left});
};

BatmanDancer.prototype = Object.create(Dancer.prototype);

BatmanDancer.prototype.constructor = BatmanDancer;

BatmanDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
