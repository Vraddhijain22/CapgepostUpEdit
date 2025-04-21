sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (Controller) => {
  "use strict";

  return Controller.extend("app.capgepost27.controller.BaseController", {
      onInit() {
      },
      getRouter: function(){
          return this.getOwnerComponent().getRouter()
      },
      getModel:function(){
          return this.getOwnerComponent().getModel()
      }
  });
});