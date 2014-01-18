/**
 * This shows the numeric text keyboard by default but can
 * get to the alpha keyboard. onKeyCode here only allows
 * numbers, delete and backspace buttons to be used.
 *
 * This could turn the pattern into RegExp and check the
 * character (transform from keyCode) against to see if allowed.
 */

Ext.define('Tawks.form.NumberInput', {
    extend : 'Ext.field.Text',
    xtype  : 'numberinput',

    config : {
        pattern : '[0-9]*'
    },

    updatePattern : function(pattern) {
        var component = this.getComponent();

        component.updateFieldAttribute('pattern', pattern);
    },

    initialize : function() {
        this.callParent();

        var component = this.getComponent();

        component.input.on({
            scope   : this,
            keydown : 'onKeyDown'
        });
    },

    onKeyDown : function(e) {
        var code = e.browserEvent.keyCode;

        if (!(code >= 48 && code <= 57) && !(code >= 97 && code <= 105) && code !== 46 && code !== 8) {
            e.stopEvent();
        }
    }
});