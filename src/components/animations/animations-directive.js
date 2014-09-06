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
.directive('animations', function ($rootScope, $timeout, animationsTemplatePath) {
  return {
    restrict: 'A',
    scope: {
      hackState: '=',
      animations: '='
    },
    templateUrl: animationsTemplatePath,
    link: function (scope, element, attrs) {
      // TODO:

      scope.hack = hack;
      scope.timeline = null;
      
      var currentAnimationWrapper, carouselTimeout, currentAnimationIndex,
          isFirstViewContentLoadedEvent;

      // Add an event handler to the parent scope
      scope.hackState.handleAnimationTabClick = handleAnimationTabClick;

      carouselTimeout = null;
      currentAnimationIndex = 0;
      isFirstViewContentLoadedEvent = true;

      $rootScope.$on('$viewContentLoaded', function (event) {
        if (isFirstViewContentLoadedEvent) {
          console.log('Triggering animation from the initial load of the page');

          isFirstViewContentLoadedEvent = false;

          var questionSet1 = [
            document.getElementById('car-question-set-1-question-1'),
            document.getElementById('car-question-set-1-question-2'),
            document.getElementById('car-question-set-1-question-3')
          ];

          var questionSet2 = [
            document.getElementById('car-question-set-2-question-1'),
            document.getElementById('car-question-set-2-question-2'),
            document.getElementById('car-question-set-2-question-3')
          ];

          var questionSet3 = [
            document.getElementById('car-question-set-3-question-1'),
            document.getElementById('car-question-set-3-question-2'),
            document.getElementById('car-question-set-3-question-3')
          ];

          var questionSet4 = [
            document.getElementById('car-question-set-4-question-1'),
            document.getElementById('car-question-set-4-question-2'),
            document.getElementById('car-question-set-4-question-3')
          ];

          scope.timeline = new TimelineMax();

          scope.timeline.add(TweenMax.staggerFrom(questionSet1, 1.75, {x:"60", alpha:0}, 0.3));
          scope.timeline.add(TweenMax.staggerTo(questionSet1, 1, {x:"-60", alpha:0}, 0.3), "+=3");

          scope.timeline.add(TweenMax.staggerFrom(questionSet2, 1.75, {x:"60", alpha:0}, 0.3), "+=2");
          scope.timeline.add(TweenMax.staggerTo(questionSet2, 1, {x:"-60", alpha:0}, 0.3), "+=3");

          scope.timeline.add(TweenMax.staggerFrom(questionSet3, 1.75, {x:"60", alpha:0}, 0.3), "+=2");
          scope.timeline.add(TweenMax.staggerTo(questionSet3, 1, {x:"-60", alpha:0}, 0.3), "+=3");

          scope.timeline.add(TweenMax.staggerFrom(questionSet4, 1.75, {x:"60", alpha:0}, 0.3), "+=2");
          scope.timeline.add(TweenMax.staggerTo(questionSet4, 1, {x:"-60", alpha:0}, 0.3), "+=3");

//          $timeout(function () {
//            handleAnimationTabClick(animations[currentAnimationIndex], false);
//          }, 500);
        }
      });

      // ---  --- //

      function handleAnimationTabClick(animation, wasHumanClick) {
        console.log('Animation tab click: wasHumanClick=' + wasHumanClick);

//        // Do not allow animations to run that were triggered from timeouts that occurred after the
//        // auto-transition was cancelled
//        if (wasHumanClick || !$rootScope.carouselHasRunOnce) {
//          delayedDestroy(currentSwiffyStage, currentAnimationWrapper);
//
//          scope.hackState.selectedAnimation = animation;
//
//          addNewSwiffyAnimation(animation.swiffyObject);
//        }
//
//        // Cancel any current auto-transition timeout
//        if (carouselTimeout) {
//          $timeout.cancel(carouselTimeout);
//          carouselTimeout = null;
//        }
//
//        // Was this "click" triggered as part of the auto-transition?
//        if (!$rootScope.carouselHasRunOnce && !wasHumanClick) {
//          // Start a timeout for the next auto-transition
//          carouselTimeout = $timeout(function () {
//            // Stop the auto-transition after running through each animation once
//            if (currentAnimationIndex >= 3) {
//              $rootScope.carouselHasRunOnce = true;
//              return;
//            }
//
//            currentAnimationIndex = (currentAnimationIndex + 1) % 4;
//
//            handleAnimationTabClick(swiffyAnimations[currentAnimationIndex], false);
//          }, 6000);
//        } else {
//          $rootScope.carouselHasRunOnce = true;
//        }
      }

//      function delayedDestroy(swiffyStage, swiffyWrapper) {
//        if (swiffyWrapper) {
//          swiffyWrapper.addClass('hidden');
//        }
//
//        setTimeout(function () {
//          console.log('Destroying old swiffy animation');
//
//          destroySwiffy(swiffyStage, swiffyWrapper);
//        }, 700);
//      }
//
//      function addNewSwiffyAnimation(swiffyObject) {
//        console.log('Starting new swiffy animation');
//
//        // Create a wrapper element
//        currentAnimationWrapper = angular.element('<div></div>');
//        currentAnimationWrapper.addClass(' animations-wrapper');
//
//        // Add the wrapper element as the first child of the swiffy container panel
//        element.prepend(currentAnimationWrapper);
//
//        // Create and start the swiffy animation
//        currentSwiffyStage = new swiffy.Stage(currentAnimationWrapper[0], swiffyObject, {});
//        currentSwiffyStage.start();
//      }
//
//      function destroySwiffy(swiffyStage, swiffyWrapper) {
//        if (swiffyStage) {
//          swiffyStage.destroy();
//        }
//
//        if (swiffyWrapper) {
//          swiffyWrapper.empty();
//          swiffyWrapper.remove();
//        }
//      }
    }
  };
});
