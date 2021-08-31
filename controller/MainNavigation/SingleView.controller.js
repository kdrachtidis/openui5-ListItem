sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.SingleView", {
        onInit: function (evt) {
            var oModel = new JSONModel(sap.ui.require.toUrl("DemoUXapp/localService/mockdata") + "/FilterBar.json");
            this.getView().setModel(oModel);
        }
    });

    return Controller;
});