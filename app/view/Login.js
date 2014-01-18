/*
 * File: app/view/Login.js
 *
 * This file was generated by Sencha Architect version 2.2.3.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.3.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.3.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

Ext.define('Tawks.view.Login', {
    extend: 'Ext.form.Panel',
    alias: 'widget.login',

    config: {
        itemId: 'login',
        items: [
            {
                xtype: 'fieldset',
                itemId: 'loginFieldSet',
                title: 'Use your Boise State login and password:',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'UserName',
                        name: 'UserName',
                        placeHolder: 'Username'
                    },
                    {
                        xtype: 'passwordfield',
                        itemId: 'password',
                        name: 'Password',
                        placeHolder: 'Password'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'loginButton',
                margin: '10 30 10 30',
                text: 'Login'
            }
        ]
    }

});