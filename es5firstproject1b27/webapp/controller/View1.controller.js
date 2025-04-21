sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";
 
    return Controller.extend("app.controller.View1", {
        onInit: function () {
            // Initialization code can go here
        },
        onSelectItem: function (oEvent) {
            let sId = oEvent.getParameter("selectedItem");
            let sKey = sId.getProperty("key");
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.navTo("RouteDetailView", {
                index: sKey
            });
        }
    });
});