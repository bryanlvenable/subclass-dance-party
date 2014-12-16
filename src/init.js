$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");

    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 5000
    );
    dancers.push(dancer);
    $('body').append(dancer.$node);
  });
  $(".lineUp").on("click", function(event){
    dancers.forEach(function (dancer) {
      dancer.$node.css({left: 100 });
    });

  });
  $(".nearestPartner").on("click", function(event){
    var distance = function(aTop, aBot, bTop, bBot){
      y = aTop - bTop;
      x = aBot - bBot;
      var c = Math.sqrt(y*y + x*x);
      return c;
    };

    var closest = distance(dancer[0].top - dancer[1], dancer[0].left);
    dancers.forEach(function (dancer) {
      var closestDancer = distance(dancer.top, dancer.left);
      if (closestDancer < closest)){
        closest = closestDancer;
      }
    });

  })
});

