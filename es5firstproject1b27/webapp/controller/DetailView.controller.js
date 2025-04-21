sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel"
],
function (Controller, JSONModel) {
    "use strict";
 
    return Controller.extend("app.es5firstproject1b27.controller.DetailView", {
        onInit: function () {
            let oRouter = this.getOwnerComponent().getRouter();
            oRouter.attachRoutePatternMatched(this.onRouteMatched, this);
        },
        onRouteMatched: function (oEvent) {
            let index = oEvent.getParameter("arguments").index;
            let sPath = "/BusinessPartnerSet('" + index + "')/ToSalesOrders";
            let oModel = this.getOwnerComponent().getModel();
            let entity = sPath; 
            let that = this;
            oModel.read(entity, {
                success: function (odata, response) {
                    var oModelOdata = new JSONModel(odata.results);
                    that.getView().setModel(oModelOdata, "SalesModel");
                },
                error: function (error) {
                    // Handle error
                }
            });
        },
        onListView: function () {
            let oRoute = this.getOwnerComponent().getRouter();
            oRoute.navTo("RouteView1");
        }
    });
});