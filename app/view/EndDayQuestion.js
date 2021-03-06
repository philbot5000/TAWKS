/*
 * File: app/view/EndDayQuestion.js
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

Ext.define('Tawks.view.EndDayQuestion', {
    extend: 'Ext.form.Panel',

    config: {
        itemId: 'endDayQuestion',
        items: [
            {
                xtype: 'fieldset',
                title: 'How satisfied are you with your productivity<br /> today?',
                items: [
                    {
                        xtype: 'radiofield',
                        label: 'Very Satisfied',
                        labelWidth: '60%',
                        name: 'satisfaction',
                        value: 'Very Satisfied'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Satisfied',
                        labelWidth: '60%',
                        name: 'satisfaction',
                        value: 'Satisfied'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Neutral',
                        labelWidth: '60%',
                        name: 'satisfaction',
                        value: 'Neutral'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Dissatisfied',
                        labelWidth: '60%',
                        name: 'satisfaction',
                        value: 'Dissatisfied'
                    },
                    {
                        xtype: 'radiofield',
                        label: 'Very Dissatisfied',
                        labelWidth: '60%',
                        name: 'satisfaction',
                        value: 'Very Dissatisfied'
                    }
                ]
            },
            {
                xtype: 'button',
                itemId: 'endDayQuestionButton',
                margin: '10 30 10 30',
                text: 'Submit'
            }
        ]
    }

});