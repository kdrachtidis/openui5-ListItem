sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectTask-Scenario1.Task1", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "TaskNo": 4,
                "Name": "Copy Cost Center Integration Flow",
                "Id": "A00004",
                "Sequence": "INIT01",
                "Type": "User Task",
                "Role": "SAP Cloud Platform Integration Configuration",
                "Assignee": "Andrew Fuller",
                "Status": "Completed",
                "StatusInfoState": "Success",
                "Date": "October 10, 2019",
                "ScenarioNo": 1,
                "ScenarioName": "Replicating Cost Center",
                "Description": "Cost Center replication between SFSF EC and S/4HANA requires prepackaged integration flow content from the SAP Cloud Platform Integration catalog. This step describes how to copy and activate the integration flow content for cost center replication."
            }));
        },
        onPressNext: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/5");
        },
        onPressPrevious: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/3");
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
});