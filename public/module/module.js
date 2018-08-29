"use strict";
angular.module("App", ["ngRoute"]).config(($routeProvider) => {
    $routeProvider.otherwise({ redirectTo: "./components/component" });
  });;