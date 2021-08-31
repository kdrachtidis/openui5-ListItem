sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel"
], function (Controller, JSONModel) {
	var oPageController = Controller.extend("DemoUXapp.controller.MainNavigation.GraphView.Scenario2", {
		onInit: function () {
			var oModel = new JSONModel(jQuery.sap.getModulePath("DemoUXapp.localService.mockdata", "/Graph-Scenario2.json"));
			this.getView().setModel(oModel);
		}
	});
	return oPageController;
});
