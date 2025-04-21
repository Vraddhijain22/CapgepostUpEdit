sap.ui.define([
    "./BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"
], (Controller,Filter,FilterOperator,MessageBox) => {
    "use strict";
 
    return Controller.extend("app.capgepost27.controller.UpdateView", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this._onRouteMatched, this)
        },
        _onRouteMatched:function(oEvent){
            let index=oEvent.getParameter("arguments").indexUpdate
            let sPath="CustomerModel>/"+index
            let oView=this.getView()
            oView.bindElement(sPath)
        },
       
        onUpdate: function () {
            // Payload
            var oCarrid = this.getView().byId("carridInput");
            var oConnid = this.getView().byId("connidInput");
            var oFldate = this.getView().byId("fldateInput");
            var oBookid = this.getView().byId("bookidInput");
            var oOdate = this.getView().byId("orderDateInput");
  
            // Get values
            let sCarrid = oCarrid.getValue();
            let sConnid = oConnid.getValue();
            let sFldate = oFldate.getValue();
            let sBookid = oBookid.getValue();
            let sOdate = oOdate.getValue();
  
            var odate = new Date(sOdate).getTime();
            let fdate = "\/Date(" + odate + ")\/";
  
            let payload = {
                "Carrid": sCarrid,
                "Connid": sConnid,
                "Fldate": sFldate,
                "Bookid": sBookid,
                "OrderDate": sOdate
            };
  
            let oModel = this.getOwnerComponent().getModel();
            let entity = "/ZVR_SPRINT1_ENTITYSet";
  
            oModel.create(entity, payload, {
                success: function () {
                    MessageBox.success("Record inserted successfully")
                },
                error: function (error) {
                    MessageBox.error("record updation failed: " + error.message)
                }
            });
        }
       

   
    });
});