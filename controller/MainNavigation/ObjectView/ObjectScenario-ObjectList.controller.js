sap.ui.define([
    'DemoUXapp/controller/BaseController'
], function (BaseController) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectScenario-ObjectList", {
        onInit: function () {
            var sURL = "/";
            var amodel = new sap.ui.model.odata.ODataModel(sURL, true);
            this.getView().setModel(amodel);

            var oRouter = this.getRouter();
            oRouter.getRoute("sap.uxap.ObjectPageSubSection/sap.m.List/sap.m.ObjectListItem").attachMatched(this._onRouteMatched, this);
        },

        _onRouteMatched: function (oEvent) {
            var oArgs, oView;

            oArgs = oEvent.getParameter("arguments");
            oView = this.getView();

            oView.bindElement({
                path: "/Scenarios(" + oArgs.scenarioId + ")",
                events: {
                    change: this._onBindingChange.bind(this),
                    dataRequested: function (oEvent) {
                        oView.setBusy(true);
                    },
                    dataReceived: function (oEvent) {
                        oView.setBusy(false);
                    }
                }
            });
        }
    });

    return Controller;
});