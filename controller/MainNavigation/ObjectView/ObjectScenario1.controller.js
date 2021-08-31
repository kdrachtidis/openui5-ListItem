sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectScenario1", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "ItemNo": 1,
                "Name": "Replicating Cost Center",
                "Documentation": "Replicating Cost Centers from SAP S/4 HANA 1610 to Employee Centrals",
                "ExecutionInstanceID": "5ca679d5-b8a8-11e7-9b49-00163e412ead",
                "CompletedTasks": "5",
                "AllTasks": "7",
                "Completion": "72",
                "Status": "Running",
                "StatusInfoState": "Success"
            }));
        }
    });

    return Controller;
});