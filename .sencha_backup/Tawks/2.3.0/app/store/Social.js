/*
 * File: app/store/Social.js
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

Ext.define('Tawks.store.Social', {
    extend: 'Ext.data.Store',

    requires: [
        'Tawks.model.SocialItem'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                type: 'Alone',
                description: ''
            },
            {
                type: 'Faculty Member(s) in My Department',
                description: ''
            },
            {
                type: 'Other Faculty at Boise State',
                description: ''
            },
            {
                type: 'Colleagues at Other Institutions',
                description: ''
            },
            {
                type: 'Undergraduate Student(s)',
                description: ''
            },
            {
                type: 'My Chair/Dean etc.',
                description: ''
            },
            {
                type: 'Staff',
                description: ''
            },
            {
                type: 'Graduate Student(s)',
                description: ''
            },
            {
                type: 'Family/Friend(s)',
                description: ''
            },
            {
                type: 'Community Member(s)',
                description: ''
            },
            {
                type: 'Prospective Faculty/Staff',
                description: ''
            },
            {
                type: 'Patient(s)',
                description: ''
            },
            {
                type: 'Alumni',
                description: ''
            }
        ],
        model: 'Tawks.model.SocialItem',
        storeId: 'social'
    }
});