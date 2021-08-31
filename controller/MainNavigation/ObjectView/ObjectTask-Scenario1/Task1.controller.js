sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectTask-Scenario1.Task1", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "TaskNo": 1,
                "Name": "Assign Responsibilities",
                "Id": "A00001",
                "Sequence": "INIT01",
                "Type": "User Service Task",
                "Role": "Administration",
                "Assignee": "Nancy Davolio",
                "Status": "Completed",
                "StatusInfoState": "Success",
                "Date": "October 10, 2019",
                "ScenarioNo": 1,
                "ScenarioName": "Replicating Cost Center",
                "Description": "Description..."
            }));
        },
        onPressNext: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/2");
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
});