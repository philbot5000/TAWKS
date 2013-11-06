/*
 * File: app/controller/Social.js
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

Ext.define('Tawks.controller.Social', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'social': 'showSocial'
        },

        control: {
            "formpanel#social": {
                initialize: 'onSocialInitialize'
            },
            "button#socialButton": {
                tap: 'onSocialButtonTap'
            },
            "social checkboxfield": {
                change: 'onSocialCheckChange'
            }
        }
    },

    onSocialInitialize: function(component, eOpts) {
        var store = Ext.getStore('social'),
            checkboxes = [],
            socialSet = component.getComponent('socialSet');

        //  itemId: 'socialCheck',
        store.each(function (item, index, length) {
            var checkbox = { xtype: 'checkboxfield', value: item.data.type, label: item.data.type, labelWidth: '80%', labelWrap: true, name: 'social' };
            checkboxes.push(checkbox);

        });

        socialSet.add(checkboxes);
    },

    onSocialButtonTap: function(button, e, eOpts) {
        var form = Ext.ComponentQuery.query('#social')[0],
            main = Ext.getCmp('main'),
            values = [];


        Ext.Array.each(form.getValues().social, function(item, index) {
            if(item !== null) {
                values.push(item);
            }
        });
        main.social = values;
        console.log(main.social);

        if(values.length === 0) {
            var description = Ext.Msg.alert('TAWKS', 'You didn\'t choose anything.', 
            function(btn, something) {

            });
        } else {
            this.redirectTo('location');
        }
    },

    onSocialCheckChange: function(checkboxfield, newValue, oldValue, eOpts) {
        var value = checkboxfield.getValue(),
            checkboxes = Ext.ComponentQuery.query('checkboxfield');


        /*
        if(value === "Alone") {


        for(var i = 0; i < checkboxes.length; i++) {

        if(checkboxes[i].getValue() !== 'Alone') {
        checkboxes[i].uncheck();
        } else {
        checkboxes[i].check();

        }
        }

        console.log(value);

        //Ext.ComponentQuery.query('#social')[0].reset(); 
    } else {

        Ext.Array.each(checkboxes, function(item) {

            if(item.getValue() === 'Alone') {

                item.uncheck();   
            }

        });
        //Ext.ComponentQuery.query('#social')[0].reset(); 
    }*/
    },

    showSocial: function() {
        var main = Ext.getCmp('main'),
            view = Ext.create('Tawks.view.Social');

        main.setActiveItem(view);
    }

});