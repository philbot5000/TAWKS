/*
 * File: app/controller/Activities.js
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

Ext.define('Tawks.controller.Activities', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'activities': 'showActivities'
        },

        control: {
            "list#activities": {
                itemtaphold: 'onActivitiesItemTaphold',
                itemtap: 'onActivitiesItemTap'
            }
        }
    },

    onActivitiesItemTaphold: function(dataview, index, target, record, e, eOpts) {
        console.log('tap hold');
        dataview.suspendEvents(true);



        var description = Ext.Msg.alert(record.data.type, record.data.description, 
        function(btn, something) {
            dataview.resumeEvents(true);
        });
    },

    onActivitiesItemTap: function(dataview, index, target, record, e, eOpts) {
        var main = Ext.getCmp('main');

        main.activity = record.data.type;
        console.log(main.activity);

        this.redirectTo('functions');
    },

    showActivities: function() {
        var main = Ext.getCmp('main'),
            view = Ext.create('Tawks.view.Activities');

        main.setActiveItem(view);
    }

});