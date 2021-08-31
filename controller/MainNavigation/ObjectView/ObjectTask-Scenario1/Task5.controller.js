sap.ui.define([
    'DemoUXapp/controller/BaseController',
    'sap/ui/model/json/JSONModel'
], function (BaseController, JSONModel) {
    "use strict";

    var Controller = BaseController.extend("DemoUXapp.controller.MainNavigation.ObjectView.ObjectTask-Scenario1.Task1", {
        onInit: function () {
            this.getView().setModel(new JSONModel({
                "TaskNo": 5,
                "Name": "Configure Integration Flow",
                "Id": "A00005",
                "Sequence": "INIT01",
                "Type": "User Task",
                "Role": "SAP Cloud Platform Integration Configuration",
                "Assignee": "Andrew Fuller",
                "Status": "Completed",
                "StatusInfoState": "Success",
                "Date": "October 10, 2019",
                "ScenarioNo": 1,
                "ScenarioName": "Replicating Cost Center",
                "Description": "The integration flow content required for SFSF EC to S/4HANA communication requires configuration. This step describes how to configure the integration flow for cost center replication."
            }));
        },
        onPressNext: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/6");
        },
        onPressPrevious: function (oEvent) {
            this.getRouter().navTo("ObjectPageLayout/1/Object/4");
        },
        getRouter: function () {
            return sap.ui.core.UIComponent.getRouterFor(this);
        }
    });

    return Controller;
});