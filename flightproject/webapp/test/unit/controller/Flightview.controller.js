/*global QUnit*/

sap.ui.define([
	"app/flightproject/controller/Flightview.controller"
], function (Controller) {
	"use strict";

	QUnit.module("Flightview Controller");

	QUnit.test("I should test the Flightview controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
