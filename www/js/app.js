// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
      
    .state('app.deposerannonce', {
    url: '/deposerannonce',
    views: {
      'menuContent': {
        templateUrl: 'templates/deposerannonce.html',
         controller: 'AppCtrl'
      }
      }
    })
  
    .state('app.categories', {
    url: '/categories',
    views: {
      'menuContent': {
        templateUrl: 'templates/categories.html',
         controller: 'AppCtrl'
      }
    }
  })
  
  .state('app.mesannonces', {
    url: '/mesannonces',
    views: {
      'menuContent': {
        templateUrl: 'templates/mesannonces.html',
         controller: 'AppCtrl'
      }
    }
  })
  
  .state('app.profile', {
    url: '/profile',
    views: {
      'menuContent': {
        templateUrl: 'templates/monprofil.html',
         controller: 'AppCtrl'
      }
    }
  })

  .state('app.invites', {
    url: '/invites',
    views: {
      'menuContent': {
        templateUrl: 'templates/invitezvosamis.html',
         controller: 'AppCtrl'
      }
    }
  })

  .state('app.contact', {
    url: '/contact',
    views: {
      'menuContent': {
        templateUrl: 'templates/contact.html',
         controller: 'AppCtrl'
      }
    }
  })
  
  .state('app.faq', {
    url: '/faq',
    views: {
      'menuContent': {
        templateUrl: 'templates/faq.html',
         controller: 'AppCtrl'
      }
    }
  })
  
  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html',
         controller: 'AppCtrl'
      }
    }
  })

   .state('app.annonces', {
      url: '/annonces',
      views: {
        'menuContent': {
          templateUrl: 'templates/annonces.html',
           controller: 'AppCtrl'
        }
      }
    })

    .state('app.details', {
          url: '/annonces/:adId',
          views: {
            'menuContent': {
              templateUrl: 'templates/details.html',
              controller: 'AppCtrl'
            }
          }
        })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/annonces');
});
