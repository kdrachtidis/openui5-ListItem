sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.ListView.Scenarios-Static", {
        onInit: function () {
            var sURL = "/";
            var amodel = new sap.ui.model.odata.ODataModel(sURL, true);
            var oModel = new sap.ui.model.json.JSONModel();
            amodel.read("/Scenarios", {
                success: function (oRetrievedResult) {
                    oModel.setData(oRetrievedResult);
                },
                error: function (oError) { alert(`Error ${oError}`); }
            });
            this.getView().setModel(oModel);
        },
        onPress: function (oEvent) {
            var oItem, oCtx, oAttr, sType, sParentType;
            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();
            oAttr = oCtx.getProperty("ScenarioNo");
            sType = oItem.getMetadata().getName();
            sParentType = oItem.getParent().getMetadata().getName();
            this.getRouter().navTo("sap.uxap.ObjectPageSubSection/" + sParentType + "/" + sType + "/" + oAttr);
            console.log(sParentType + "/" + sType + "/" + oAttr);
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
}
);
