/*
 * File: app/view/Social.js
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

Ext.define('Tawks.view.Social', {
    extend: 'Ext.form.Panel',
    alias: 'widget.social',

    config: {
        itemId: 'social',
        items: [
            {
                xtype: 'fieldset',
                itemId: 'socialSet',
                title: 'With whom were you doing this activity?<br /> Choose all that apply.'
            },
            {
                xtype: 'button',
                itemId: 'socialButton',
                margin: '10 30 10 30',
                text: 'Next'
            }
        ]
    }

});