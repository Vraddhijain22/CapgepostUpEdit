sap.ui.define([
    "./BaseController",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
    "sap/m/MessageBox"
], (Controller,Filter,FilterOperator,MessageBox) => {
    "use strict";
 
    return Controller.extend("app.capgepost27.controller.CustomerViewb27", {
        onInit() {
            let oModel = this.getModel();
            let entity = "/ZVR_SPRINT1_ENTITYSet";

            oModel.read(entity, {
                success: (odata, resp) => {
                    let jModel =this.getOwnerComponent().getModel("CustomerModel")
                    jModel.setData(odata.results)
                    // let oModelJs = new sap.ui.model.json.JSONModel(odata.results);
                    // this.getView().setModel(oModelJs, "CustomerModel");
                },
                error: (error) => {
                    console.error("Error reading data: ", error);
                    // Additional error handling logic
                }
            });
        },

        onRowSelection:function(oEvent){
            let oItem=oEvent.getParameter("listItem")
            let oContext=oItem.getBindingContextPath("CustomerModel")
            let aItems=oContext.split("/") //array items
            let index=aItems[aItems.length-1]
            let oRouter=this.getRouter()
            oRouter.navTo("RouteDetailView",{
                indexDetail:index
            })
        },

        onDelete:function(oEvent){
            let oContext=oEvent.getSource().getBindingContext("CustomerModel").getObject();
            MessageBox.warning("Are you sure about deleting this entry?",{
                onClose:(choice)=>{
                    if(choice==='OK'){
                        this._onDeleteCall(oContext)
                    }
                }
            })
        },

        _onDeleteCall:function(parm){
            let key1 =parm.Carrid; 
            let key2 =parm.Connid;
            let key3 =parm.Bookid;
            let key4 =parm.Fldate.replace(/-/g,'');

            let oModel=this.getOwnerComponent().getModel(); //get Model - gets the main data and manage the data and bind it to the UI.
            // /customerEntitySet(3)
            let entity="/ZVR_SPRINT1_ENTITYSet(Carrid='"+key1+"',Connid='"+key2+"',Bookid='"+key3+"',Fldate='"+key4+"')";
            oModel.remove(entity,{
                success:(resp)=>{
                    MessageBox.success("Entry deleted successfully!");
                },
                error:(error)=>{
                    MessageBox.error("Deletion failed");
                }
            })
        },
 
        onFilter:function(){
            let aFilter=[]
            let sAir=this.getView().byId("idAir").getValue()
            let sConn=this.getView().byId("idConn").getValue()
            let sBook=this.getView().byId("onBook").getValue()
 
            if(sAir){
              let filterName=new Filter("Carrid", FilterOperator.Contains,sAir)                    
              aFilter.push(filterName)
            }
            if(sConn){
             let filterName=new Filter("Connid", FilterOperator.Contains,sConn)                    
             aFilter.push(filterName)
            }
            if(sBook){
                let filterName=new Filter("Bookid", FilterOperator.Contains,sBook)                    
                aFilter.push(filterName)
               }
         
            let oTable=this.getView().byId("table")
            let bindingInfo=oTable.getBinding("items")
            if (bindingInfo) {
                bindingInfo.filter(aFilter);
            }
        },

        onCreate:function(){
            var oRouter=this.getRouter()
            oRouter.navTo("RouteCreateView")
        }
   
    });
});