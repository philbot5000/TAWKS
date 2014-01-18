/*
 * File: app/controller/EndDayQuestion.js
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

Ext.define('Tawks.controller.EndDayQuestion', {
    extend: 'Ext.app.Controller',

    config: {
        routes: {
            'endDayQuestion': 'showEndDayQuestion'
        },

        control: {
            "button#endDayQuestionButton": {
                tap: 'onEndDayQuestionButtonTap'
            }
        }
    },

    onEndDayQuestionButtonTap: function(button, e, eOpts) {
        var form = Ext.ComponentQuery.query('#endDayQuestion')[0],
            me = this;

        form.setMasked({xtype:'loadmask', message: 'Loading...'});

        var entry = Ext.ComponentQuery.query('#endDayQuestion')[0].getValues();

        Ext.Ajax.request({
            url: 'https://dev-web.boisestate.edu/tawks/form/endofday',
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            params: Ext.encode(entry),
            success: function(response){
                var text = Ext.decode(response.responseText);
                form.setMasked(false);

                Ext.Msg.alert('TAWKS', text, 
                function(btn, something) {
                    // redirect to a completed page...
                    // no more questions to ask send answer up to server...
                    me.redirectTo('thankYou');

                });
            },
            failure: function(response) {
                console.log(response);
            }    
        });
    },

    showEndDayQuestion: function() {
        var main = Ext.getCmp('main'),
            view = Ext.create('Tawks.view.EndDayQuestion');

        main.setActiveItem(view);
    }

});