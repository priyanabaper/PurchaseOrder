/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"priyan/ZPO/test/integration/NavigationJourneyPhone",
		"priyan/ZPO/test/integration/NotFoundJourneyPhone",
		"priyan/ZPO/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});