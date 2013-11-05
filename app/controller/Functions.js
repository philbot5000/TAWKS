/*
 * File: app/controller/Functions.js
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

Ext.define('Tawks.controller.Functions', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'functions': 'showFunctions'
        },

        control: {
            "list#functions": {
                itemtap: 'onFunctionsItemTap',
                itemtaphold: 'onFunctionsItemTaphold'
            }
        }
    },

    onFunctionsItemTap: function(dataview, index, target, record, e, eOpts) {
        var main = Ext.getCmp('main');


        if(record.data.type === "Add a Custom Function") {


        } else {


            main.functionType = record.data.type;

            console.log(main.functionType);
            this.redirectTo('social');
        }
    },

    onFunctionsItemTaphold: function(dataview, index, target, record, e, eOpts) {
        console.log('tap hold');
        dataview.suspendEvents(true);


        var description = Ext.Msg.alert(record.data.type, record.data.description, 
        function(btn, something) {
            dataview.resumeEvents(true);
        });
    },

    showFunctions: function() {
        var main = Ext.getCmp('main'),
            view = Ext.create('Tawks.view.Functions');

        main.setActiveItem(view);
    }

});