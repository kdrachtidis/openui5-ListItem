sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectTask-Scenario1.Task1", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "TaskNo": 7,
                "Name": "Summary",
                "Id": "A00007",
                "Sequence": "INIT01",
                "Type": "User Service Task",
                "Role": "Administration",
                "Assignee": "Nancy Davolio",
                "Status": "Yet to be executed",
                "StatusInfoState": "Warning",
                "Date": "October 10, 2019",
                "ScenarioNo": 1,
                "ScenarioName": "Replicating Cost Center",
                "Description": "Description..."
            }));
        },
        onPressPrevious: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/6");
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
});