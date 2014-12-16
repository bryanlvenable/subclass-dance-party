var FlashyDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="flashy"><img src="https://38.media.tumblr.com/a43ec138e78db8cb2481b905a0ff7d16/tumblr_mtya9hzCOQ1rhcgoho1_500.gif" /></span>');
  this.$node.css({top: top, left: left});
};

FlashyDancer.prototype = Object.create(Dancer.prototype);

FlashyDancer.prototype.constructor = FlashyDancer;

FlashyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  Dancer.prototype.step.call(this);
  this.$node.toggle();
};
