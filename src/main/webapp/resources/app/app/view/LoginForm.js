Ext.define("App.view.LoginForm", {
    extend: "Ext.panel.Panel",

    requires: [
        "App.view.LoginFormController",
        "App.view.LoginFormModel"
    ],

    title: '로그인',

    bodyPadding: 10,

    controller: "loginform",

    viewModel: {
        type: "loginform"
    },

    defaultType: 'textfield',

    items: [
        {
            fieldLabel: '사용자명',
            name: 'username',
            allowBlank: false,
            reference: 'username'
        },
        {
            fieldLabel: '패스워드',
            name: 'password',
            allowBlank: false,
            reference: 'password'
        }
    ],

    buttons: [
        {
            text: '로그인',
            formBind: true,
            listeners: {
                click: 'onLoginClick'
            }
        }
    ]
});
