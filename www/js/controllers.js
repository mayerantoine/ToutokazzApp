angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope,$http, $state,$ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
  
   // Form data for the signmodel modal
  $scope.signUpData = {};

  // Create the SignUp modal that we will use later
  $ionicModal.fromTemplateUrl('templates/creer-compte.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modalSignup = modal;
  });

  // Triggered in the SignUp modal to close it
  $scope.closesignUp = function() {
    $scope.modalSignup.hide();
  };

  // Open the SignUp modal
  $scope.signup = function() {
    $scope.modalSignup.show();
  };

  // Perform the SignUp action when the user submits the login form
  $scope.doSignUp = function() {
    console.log('Doing login', $scope.signUpData);

    // Simulate a SignUp delay. Remove this and replace with your SignUp
    // code if using a login system
    $timeout(function() {
      $scope.closesignUp();
    }, 1000);
  };
  
  $http.get("js/category.json").success(function(data){  
    $scope.categories = data;
  });
  
  /*
   * if given group is the selected group, deselect it
   * else, select the given group
   */
  $scope.toggleSection = function(section) {
    section.show = !section.show;
  };
  $scope.isSectionShown = function(section) {
    return section.show;
  };
  
    $http.get("js/data.json").success(function(data){  
    $scope.ads = data;
    $scope.selectedAd= $state.params.adId
  });
  
});


