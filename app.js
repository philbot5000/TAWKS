/*
 * File: app.js
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

//@require @packageOverrides
Ext.Loader.setConfig({

});

Ext.application({
    models: [
        'Function',
        'Activity',
        'SocialItem',
        'Time',
        'User'
    ],
    stores: [
        'Functions',
        'Activities',
        'Social',
        'Times',
        'User'
    ],
    views: [
        'Main',
        'Working',
        null,
        'Social',
        'Location',
        'Activities',
        'Start',
        'Login',
        'Register',
        'TimePicker',
        'EndDayQuestion',
        'AddFunction',
        'ThankYou',
        'Success',
        'Pending',
        'MyPicker',
        'TimeOut',
        null,
        'Functions',
        'SecondaryFunction'
    ],
    requires: [
        'Ext.MessageBox',
        'Ext.ux.field.DateTimePicker',
        'Ext.ux.picker.DateTime'
    ],
    controllers: [
        'Register',
        'Login',
        'Main',
        'Start',
        'Working',
        'Functions',
        'Activities',
        'Social',
        'Location',
        'EndDayQuestion',
        'ThankYou',
        'Success',
        'Pending',
        'TimeOut',
        'SecondaryFunction'
    ],
    name: 'Tawks',

    launch: function() {

        setInterval(function(){

            var main = Ext.getCmp('main'),
                view = main.getActiveItem().getItemId();

            if(view !== 'thankYou' && view !=='register' && view !== 'start' && view !== 'success' && view !== 'login') {
                var timeOut = Ext.create('Tawks.view.TimeOut');

                main.setActiveItem(timeOut);

            }
            // 10 mins...
        },600000);
        Ext.create('Tawks.view.Main', {fullscreen: true});
    },

    createPickers: function(day) {
        var morn = new Date('1 Jan, 2010 08:00:00'),
            night = new Date('1 Jan, 2010 23:00:00');


        var pickers = [
        {
            xtype: 'datetimepickerfield',
            name : day+'StartTime',
            itemId: day+'StartTime',
            value: morn,
            cancelButton: null,
            placeHolder: 'Don\'t Contact',
            clearIcon: false,
            dateTimeFormat : 'h:i:A',
            autoSelect: false,
            picker: {
                yearFrom: 1980,
                minuteInterval : 1,
                ampm : true,
                slotOrder: ['hour','minute','ampm']
            }
        },
        {
            xtype: 'datetimepickerfield',
            name : day+'EndTime',
            itemId: day+'EndTime',
            value: night,
            cancelButton: null,
            placeHolder: 'Don\'t Contact',
            clearIcon: false,
            dateTimeFormat : 'h:i:A',
            autoSelect: false,
            picker: {
                yearFrom: 1980,
                minuteInterval : 1,
                ampm : true,
                slotOrder: ['hour','minute','ampm']
            }
        }

        ];

        return pickers;
    }

});
