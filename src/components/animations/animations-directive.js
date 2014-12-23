'use strict';

angular.module('animationsDirective', [])

.constant('animationsTemplatePath', hack.rootPath + '/dist/templates/components/animations/animations.html')

/**
 * @ngdoc directive
 * @name animations
 * @description
 *
 * A panel for managing animations.
 */
.directive('animations', function ($rootScope, $interval, animationsTemplatePath, $timeout) {
  return {
    restrict: 'A',

    scope: {
      hackState: '=',
      animations: '='
    },

    templateUrl: animationsTemplatePath,

    link: function (scope, element, attrs) {
      scope.hack = hack;
      scope.selectedLabel = null;
      scope.timeline = null;
      
      var carScreen               = document.getElementById('hero-screen'),
          carScreenInitialAlpha   = 0.7,
          $headlines              = $(document).find('.question-set'),
          questions               = [],
          isFirstViewContentLoadedEvent = true;

      // Add an event handler to the parent scope
      scope.hackState.handleAnimationTabClick = handleAnimationTabClick;
      initSlider();

      function initSlider(){
        if (isFirstViewContentLoadedEvent) {
          $headlines.each(function( i ){
            var main = $(this).find('.main');
            var sub = $(this).find('.sub');
            questions.push([ main[0], sub[0] ]);
          });

          playSlider();

          isFirstViewContentLoadedEvent = false;
        }
      }

      function playSlider(){
        var carouselInterval = $interval(function() {
          var currentLabel = scope.timeline.currentLabel();

          if (scope.selectedLabel != currentLabel) {
              scope.selectedLabel = currentLabel;
          }
        }, 500);

        scope.timeline = new TimelineMax();

        scope.timeline.add("start");

        scope.timeline.add("set-1", "+=2");
        scope.timeline.add(TweenMax.from(carScreen, 1.5, {alpha:0}), "+=2");
        scope.timeline.add(TweenMax.staggerFrom(questions[0], 1.75, {x:"60", alpha:0}, 0.3), "-=1.0");
        scope.timeline.add(TweenMax.staggerTo(questions[0], 1, {x:"-60", alpha:0}, 0.3), "+=3");
        scope.timeline.add(TweenMax.to(carScreen, 0.75, {alpha:0}), "-=1");

        scope.timeline.add("set-2", "+=2");
        scope.timeline.add(TweenMax.to(carScreen, 1.5, {alpha:carScreenInitialAlpha}), "+=2");
        scope.timeline.add(TweenMax.staggerFrom(questions[1], 1.75, {x:"60", alpha:0}, 0.3), "-=1");
        scope.timeline.add(TweenMax.staggerTo(questions[1], 1, {x:"-60", alpha:0}, 0.3), "+=3");
        scope.timeline.add(TweenMax.to(carScreen, 0.75, {alpha:0}), "-=1");

        scope.timeline.add("set-3", "+=2");
        scope.timeline.add(TweenMax.to(carScreen, 1.5, {alpha:carScreenInitialAlpha}), "+=2");
        scope.timeline.add(TweenMax.staggerFrom(questions[2], 1.75, {x:"60", alpha:0}, 0.3), "-=1");
        scope.timeline.add(TweenMax.staggerTo(questions[2], 1, {x:"-60", alpha:0}, 0.3), "+=3");
        scope.timeline.add(TweenMax.to(carScreen, 0.75, {alpha:0}), "-=1");

        scope.timeline.add("set-4", "+=2");
        scope.timeline.add(TweenMax.to(carScreen, 1.5, {alpha:carScreenInitialAlpha}), "+=2");
        scope.timeline.add(TweenMax.staggerFrom(questions[3], 1.75, {x:"60", alpha:0}, 0.3), "-=1");
        scope.timeline.add(TweenMax.staggerTo(questions[3], 1, {x:"-60", alpha:0}, 0.3), "+=3");
        scope.timeline.add(TweenMax.to(carScreen, 0.75, {alpha:0}), "-=1");

        scope.timeline.add("end");
        scope.timeline.repeat(-1);
      }

      function handleAnimationTabClick(animation, wasHumanClick) {
        scope.timeline.seek(animation.label, false);
      }
    }
  };
});
