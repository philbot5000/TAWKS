/*
 * File: app/view/Main.js
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

Ext.define('Tawks.view.Main', {
    extend: 'Ext.Container',

    requires: [
        'Tawks.view.Working',
        'Ext.Toolbar'
    ],

    config: {
        id: 'main',
        layout: {
            type: 'card'
        },
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                title: 'TAWKS',
                items: [
                    {
                        xtype: 'button',
                        hidden: true,
                        ui: 'back',
                        text: 'Back'
                    }
                ]
            },
            {
                xtype: 'container',
                bottom: 0,
                height: 50,
                hidden: true,
                hideAnimation: {
                    type: 'slideOut',
                    direction: 'bottom'
                },
                itemId: 'bottom',
                showAnimation: {
                    type: 'slide',
                    direction: 'bottom'
                },
                style: 'border-top: 1px #000 solid; position: absolute; background: rgba(255,255,255, 0.9);',
                width: '100%',
                layout: {
                    align: 'center',
                    pack: 'end',
                    type: 'hbox'
                },
                items: [
                    {
                        xtype: 'button',
                        itemId: 'join',
                        margin: '0 10 0 0',
                        ui: 'forward',
                        text: 'Join'
                    }
                ]
            },
            {
                xtype: 'working'
            }
        ]
    }

});