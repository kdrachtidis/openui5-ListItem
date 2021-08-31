sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectTask-Scenario1.Task1", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "TaskNo": 3,
                "Name": "Deploy SuccessFactors Credentials",
                "Id": "A00003",
                "Sequence": "INIT01",
                "Type": "User Task",
                "Role": "SAP Cloud Platform Integration Configuration",
                "Assignee": "Andrew Fuller",
                "Status": "Completed",
                "StatusInfoState": "Success",
                "Date": "October 10, 2019",
                "ScenarioNo": 1,
                "ScenarioName": "Replicating Cost Center",
                "Description": "For the communication triggered by the SAP Cloud Platform Integration runtime to Employee Central user credentials are required. This step describes the steps to create and deploy the credentials."
            }));
        },
        onPressNext: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/4");
        },
        onPressPrevious: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/2");
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
});