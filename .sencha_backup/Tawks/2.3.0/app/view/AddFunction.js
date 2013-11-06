/*
 * File: app/view/AddFunction.js
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

Ext.define('Tawks.view.AddFunction', {
    extend: 'Ext.Panel',

    config: {
        itemId: 'addFunction',
        padding: 10,
        style: 'background: #EDEBF1;',
        zIndex: 2,
        hideOnMaskTap: false,
        modal: false,
        items: [
            {
                xtype: 'fieldset',
                title: 'Add a Function',
                items: [
                    {
                        xtype: 'textfield',
                        itemId: 'functionName',
                        name: 'functionName',
                        placeHolder: 'Function Name'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'submitFunction',
                margin: '10 30 10 30',
                text: 'Submit'
            },
            {
                xtype: 'button',
                itemId: 'cancelButton',
                margin: '10 30 10 30',
                ui: 'decline',
                text: 'Cancel'
            }
        ],
        listeners: [
            {
                fn: 'onSubmitFunctionTap',
                event: 'tap',
                delegate: '#submitFunction'
            },
            {
                fn: 'onCancelButtonTap',
                event: 'tap',
                delegate: '#cancelButton'
            }
        ]
    },

    onSubmitFunctionTap: function(button, e, eOpts) {
        var model = Ext.create('Tawks.model.Function'),
            view = Ext.ComponentQuery.query('#addFunction')[0],
            store = Ext.getStore('functions');

        model.set('type', Ext.ComponentQuery.query('#functionName')[0].getValue());

        store.add(model);
        store.sync();

        view.hide();
        view.destroy();
    },

    onCancelButtonTap: function(button, e, eOpts) {
        var view = Ext.ComponentQuery.query('#addFunction')[0];

        view.hide();
        view.destroy();
    }

});