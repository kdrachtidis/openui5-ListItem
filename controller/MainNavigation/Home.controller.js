sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
    "use strict";

    var Controller = Controller.extend("DemoUXapp.controller.MainNavigation.Home", {
        onInit: function(){
            this.getView().setModel(new JSONModel({
                "message":"Various ways of navigation from master lists to objects. UI5 components used in current page: <em>sap.m.Page</em>, <em>sap.ui.layout.BlockLayout</em>. "
            }));
        }
    });

    return Controller;
});