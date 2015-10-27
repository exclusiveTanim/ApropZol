var osname = Ti.Platform.osname;
// Booleans identifying the platforms are handy too
var isAndroid = (osname == 'android') ? true : false;
if (isAndroid) {
	// do Android specific stuff
	$.textField.backgroundColor="#DCDCDC";
	$.textField1.backgroundColor="#DCDCDC";
	$.textField.color="black";
	$.textField1.color="black";
	Ti.API.info("Platform is Android");
} else {
	// do iOS, mobileweb, or other platform stuff
	Ti.API.info("Platform is iOS");
}

function doClick(e) {
	Ti.API.info("Get Project Button was clicked");
	var user = $.textField.value;
	var pass = $.textField1.value;
	//Ti.API.info(user);
	if ((user === ' ') || (user.length == 0)) {
		alert('Please Enter Username');
	} else if ((pass.value === ' ') || (pass.length == 0)) {
		alert('Please Enter Password');
	} else {
		//transmit(e);
		var win2 = Alloy.createController('bluewin').getView();
		win2.open();
	}
	/*if (user == 'a' && pass == '1') {
		var win2 = Alloy.createController('bluewin').getView();
		//$.win1.openWindow(win2);
		win2.open();
	} else {
		alert('Insert valid user and password');
		$.textField.value = '';
		$.textField1.value = '';
	}*/

}

$.win1.open();
