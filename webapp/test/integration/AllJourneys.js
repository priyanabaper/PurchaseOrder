/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ZCDS_CONTRACT in the list
// * All 3 ZCDS_CONTRACT have at least one to_purchase_item

sap.ui.require([
	"sap/ui/test/Opa5",
	"priyan/ZPO/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"priyan/ZPO/test/integration/pages/App",
	"priyan/ZPO/test/integration/pages/Browser",
	"priyan/ZPO/test/integration/pages/Master",
	"priyan/ZPO/test/integration/pages/Detail",
	"priyan/ZPO/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "priyan.ZPO.view."
	});

	sap.ui.require([
		"priyan/ZPO/test/integration/MasterJourney",
		"priyan/ZPO/test/integration/NavigationJourney",
		"priyan/ZPO/test/integration/NotFoundJourney",
		"priyan/ZPO/test/integration/BusyJourney"
	], function () {
		QUnit.start();
	});
});