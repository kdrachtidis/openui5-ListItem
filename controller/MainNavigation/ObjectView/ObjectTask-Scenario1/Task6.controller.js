sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectTask-Scenario1.Task1", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "TaskNo": 6,
                "Name": "Create Trusted Connection",
                "Id": "A00006",
                "Sequence": "INIT01",
                "Type": "User Task",
                "Role": "SAP S/4HANA Configuration",
                "Assignee": "Janet Leverling",
                "Status": "Ready",
                "StatusInfoState": "None",
                "Date": "October 10, 2019",
                "ScenarioNo": 1,
                "ScenarioName": "Replicating Cost Center",
                "Description": "For the communication between the S/4HANA system and the SAP Gateway a trusted RFC connection is required. The following procedure will execute a task list performing the required steps."
            }));
        },
        onPressNext: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/7");
        },
        onPressPrevious: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/5");
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
});