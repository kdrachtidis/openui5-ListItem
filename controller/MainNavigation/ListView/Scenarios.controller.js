sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.ListView.Scenarios", {
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
            var oItem, oCtx, oAttr;
            oItem = oEvent.getSource();
            oCtx = oItem.getBindingContext();
            oAttr = oCtx.getProperty("ScenarioNo");
            
            this.getRouter().navTo("sap.uxap.ObjectPageLayout/sap.uxap.ObjectPageDynamicHeaderTitle/scenario", {
                scenarioId: oAttr
            });
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
}
);
