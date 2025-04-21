sap.ui.define([
    "./BaseController",
    // "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox"
  ], (Controller, MessageBox) => {
    "use strict";
  
    return Controller.extend("app.flightproject.controller.CreateView", {
        onInit() {
        },
        onCreate: function () {
            // Payload
            var oCarrid = this.getView().byId("carridInput");
            var oConnid = this.getView().byId("connidInput");
            var oFldate = this.getView().byId("fldateInput");
            var oBookid = this.getView().byId("bookidInput");
            var oOdate = this.getView().byId("orderDateInput");
            var oPassname = this.getView().byId("passnameInput");
            var oCountryto = this.getView().byId("countrytoInput");
            var oCountryfr = this.getView().byId("countryfrInput");
            var oPrice = this.getView().byId("priceInput");
            var oCurrency = this.getView().byId("currencyInput");
  
            // Get values
            let sCarrid = oCarrid.getValue();
            let sConnid = oConnid.getValue();
            let sFldate = oFldate.getValue();
            let sBookid = oBookid.getValue();
            let sOdate = oOdate.getValue();
            let sPassname = oPassname.getValue();
            let sCountryto = oCountryto.getValue();
            let sCountryfr = oCountryfr.getValue();
            let sPrice = oPrice.getValue();
            let sCurrency = oCurrency.getValue();
  
            var odate = new Date(sOdate).getTime();
            let fdate = "\/Date(" + odate + ")\/";
  
            let payload = {
                "Carrid": sCarrid,
                "Connid": sConnid,
                "Fldate": sFldate,
                "Bookid": sBookid,
                "OrderDate": sOdate,
                "Passname": sPassname,
                "Countryto": sCountryto,
                "Countryfr": sCountryfr,
                "Price": sPrice,
                "Currency": sCurrency
            };
  
            let oModel = this.getOwnerComponent().getModel();
            let entity = "/zvraddhi_22Set";
            // let that=this
  
            oModel.create(entity, payload, {
                success: function () {
                    MessageBox.success("Record inserted successfully")
                },
                error: function (error) {
                    MessageBox.error("Error inserting record: " + error.message)
                }
            });
        }
    });
  });