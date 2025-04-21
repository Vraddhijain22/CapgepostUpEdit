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
            let sFldate = oFldate.getValue();
            let sBookid = oBookid.getValue();
            let sOdate = oOdate.getValue();
  
            // var odate = new Date(sOdate).getTime();
            // let fdate = "\/Date(" + odate + ")\/";
  
            let payload = {
                "Carrid": sCarrid,
                "Connid": sConnid,
                "Fldate": sFldate,
                "Bookid": sBookid,
                "OrderDate": sOdate
            };
  
      

        oModel.update(entity,payload,{
            success:function(){
                MessageBox.success("record updated",{
                    onClose:function(){
                        let oRouter=that.getRouter()
                        oRouter.navTo("RouteCustomerView")
                        oCarrid.setValue("")
                        oConnid.setValue("")
                        oFldate.setValue("")
                        oBookid.setValue("")
                        oOrder.setValue("")
                    }
                })

            },
            error:function(){
                MessageBox.error("record updation failed")

            }
        })
        //first step get the model
        //we need the entity
        //method(theEntity,payload{})
   

}


       

   
    });
});