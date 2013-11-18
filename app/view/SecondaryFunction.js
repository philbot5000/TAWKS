/*
 * File: app/view/SecondaryFunction.js
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

Ext.define('Tawks.view.SecondaryFunction', {
    extend: 'Ext.form.Panel',

    config: {
        itemId: 'secondaryFunction',
        items: [
            {
                xtype: 'container',
                docked: 'top',
                hidden: false,
                html: 'Please classify your activity according to a secondary function (Hold item for definition).',
                padding: 10,
                style: 'background: #EDEBF1; color: #555; font-size: 0.9em;'
            },
            {
                xtype: 'fieldset',
                itemId: 'functionSet',
                title: ''
            },
            {
                xtype: 'button',
                disabled: true,
                itemId: 'functionNext1',
                margin: '10 30 10 30',
                ui: 'forward',
                text: 'Next'
            }
        ]
    }

});