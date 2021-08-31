sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectScenario2", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "ItemNo": 2,
                "Name": "Cloud Integration",
                "Documentation": "SAP Fiori Cloud Integration",
                "ExecutionInstanceID": "fd8cc8f5-b886-11e7-a497-00163",
                "CompletedTasks": "5",
                "AllTasks": "8",
                "Completion": "63",
                "Status": "Running",
                "StatusInfoState": "Success"
            }));
        }
    });

    return Controller;
});