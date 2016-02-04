Ext.define('App.view.LoginFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.loginform',

    onLoginClick: function (comp, e, eOpts) {
        var usernameField = this.lookupReference('username');
        var passwordField = this.lookupReference('password');

        console.log(usernameField.getValue());
        console.log(passwordField.getValue());

        Ext.Ajax.request({
            url: "/login.do",
            method: "GET",
            params: {
                "username": this.lookupReference('username').getValue(),
                "password": this.lookupReference('password').getValue()
            },
            success: function (result, request) {
                var jsonData = Ext.util.JSON.decode(result.responseText);
                console.info(result.responseText);
                console.info(jsonData);
            },
            failure: function (result, request) {
                Ext.Msg.alert("Failed", result.responseText);
            }

        });
    }
});
