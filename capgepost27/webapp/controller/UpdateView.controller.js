sap.ui.define([
    "./BaseController",
    "sap/m/MessageBox"
], (BaseController,MessageBox) => {
    "use strict";
 
    return BaseController.extend("app.capgepost27.controller.UpdateView", {
        onInit() {
            let oRouter=this.getRouter()
            oRouter.attachRoutePatternMatched(this._RouteMatched, this)
        },
        _RouteMatched:function(oEvent){
            let index=oEvent.getParameter("arguments").indexUpdate;
            let sPath="CustomerModel>/"+index;
            let oView=this.getView();
            oView.bindElement(sPath);
        },
       
        onUpdate: function () {
            // Payload
            var oCarrid = this.getView().byId("CarridInput");
            var oConnid = this.getView().byId("ConnidInput");
            var oFldate = this.getView().byId("FldateInput");
            var oBookid = this.getView().byId("BookidInput");
            var oOdate = this.getView().byId("OrderDateInput");
  
            // Get values
            let sCarrid = oCarrid.getValue();
            sCarrid=sCarrid.toUpperCase();
            let sConnid = oConnid.getValue();
            var sFldate = oFldate.getValue();
                sFldate=sFldate.replace(/-/g,"")
            let sBookid = oBookid.getValue();
            var sOdate = oOdate.getValue();
  
            // var odate = new Date(sOdate).getTime();
            // let fdate = "\/Date(" + odate + ")\/";
  
            let payload = {
                // "Carrid": sCarrid,
                // "Connid": sConnid,
                // "Fldate": sFldate,
                // "Bookid": sBookid,
                "OrderDate": sOdate
            };
            console.log(payload)
            let oModel=this.getOwnerComponent().getModel()
 
            let entity=`/ZVR_SPRINT1_ENTITYSet(Carrid='${sCarrid}',Connid='${sConnid}',Fldate='${sFldate}',Bookid='${sBookid}')`
            let that=this;
            oModel.update(entity, payload,{
               success:function(resp){
                   MessageBox.success("record updated",{
                       onClose:function(){
                           let oRouter=this.getRouter()
                           oRouter.navTo("RouteCustomerView")
                        
                       }.bind(that)
                   })
               },
               error:function(error){
                   MessageBox.error("record updation failed")
               }
            })
       }
   });
});




        