sap.ui.define([
  'sap/ui/core/mvc/Controller',
  'sap/ui/model/json/JSONModel'
], function (Controller, JSONModel) {
  "use strict";

  var Controller = Controller.extend("DemoUXapp.controller.init", {

    onInit: function () {
      var oModel = new JSONModel(sap.ui.require.toUrl("DemoUXapp/localService/mockdata") + "/Navigation.json");
      this.getView().setModel(oModel);
      this._setToggleButtonTooltip(!sap.ui.Device.system.desktop);
    },

    /**
     * Convenience method for accessing the router.
     * @public
     * @returns {sap.ui.core.routing.Router} the router for this component
     */
    getRouter: function () {
      return sap.ui.core.UIComponent.getRouterFor(this);
    },

    onItemSelect: function (oEvent) {
      var oItem = oEvent.getParameter('item');
      var sKey = oItem.getKey();
      // console.log(sKey);
      this.getRouter().navTo(sKey);
    },

    onSideNavButtonPress: function () {
      var sViewId = this.getView().getId();
      var oToolPage = sap.ui.getCore().byId(sViewId + "--rootApp");
      var bSideExpanded = oToolPage.getSideExpanded();
      this._setToggleButtonTooltip(bSideExpanded);
      oToolPage.setSideExpanded(!oToolPage.getSideExpanded());
    },

    _setToggleButtonTooltip: function (bLarge) {
      var oToggleButton = this.getView().byId('sideNavigationToggleButton');
      if (bLarge) {
        oToggleButton.setTooltip('Large Size Navigation');
      } else {
        oToggleButton.setTooltip('Small Size Navigation');
      }
    }
  });
  return Controller;
});
