{
    "xdsVersion": "2.2.3",
    "frameworkVersion": "touch23",
    "internals": {
        "type": "Ext.picker.Picker",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "itemId": "dateTime",
            "designer|userClassName": "DateTime"
        },
        "cn": [
            {
                "type": "Ext.Button",
                "reference": {
                    "name": "doneButton",
                    "type": "object"
                },
                "codeClass": null,
                "userConfig": {
                    "text": "Done"
                }
            },
            {
                "type": "Ext.Button",
                "reference": {
                    "name": "cancelButton",
                    "type": "object"
                },
                "codeClass": null,
                "userConfig": {
                    "text": "Cancel"
                }
            },
            {
                "type": "Ext.picker.Slot",
                "reference": {
                    "name": "slots",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "data": [
                        "[",
                        "    {\"text\":\"Jan\",\"value\":0},",
                        "    {\"text\":\"Feb\",\"value\":1},",
                        "\t{\"text\":\"Mar\",\"value\":2},",
                        "    {\"text\":\"Apr\",\"value\":3},",
                        "    {\"text\":\"May\",\"value\":4},",
                        "    {\"text\":\"Jun\",\"value\":5},",
                        "    {\"text\":\"Jul\",\"value\":6},",
                        "    {\"text\":\"Aug\",\"value\":7},",
                        "    {\"text\":\"Sep\",\"value\":8},",
                        "    {\"text\":\"Oct\",\"value\":9},",
                        "    {\"text\":\"Nov\",\"value\":10},",
                        "    {\"text\":\"Dec\",\"value\":11}",
                        "]"
                    ],
                    "itemId": "monthPickerSlot",
                    "maxWidth": null,
                    "minWidth": null,
                    "padding": null,
                    "style": null,
                    "width": null,
                    "align": "right",
                    "name": "month",
                    "title": ""
                },
                "cn": [
                    {
                        "type": "basiceventbinding",
                        "reference": {
                            "name": "listeners",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "fn": "onMonthPickerSlotpick1",
                            "implHandler": [
                                "//auto fill the days to match selected month of current year",
                                "var monthPickerSlot = Ext.ComponentQuery.query('#monthPickerSlot')[0],",
                                "    month = monthPickerSlot.selectedIndex + 1;",
                                "",
                                "var dayPickerSlot = Ext.ComponentQuery.query('#dayPickerSlot')[0];",
                                "",
                                "",
                                "function daysInMonth(month) ",
                                "{",
                                "",
                                "    return new Date(new Date().getFullYear(), month, 0).getDate();",
                                "}",
                                "",
                                "var days = daysInMonth(month),",
                                "    dayPickerSlotDataArray = [];",
                                "",
                                "for (var i = 1; i <= days; i ++)",
                                "{",
                                "    var data  = {",
                                "        \"text\": i,",
                                "        \"value\": i",
                                "    };",
                                "",
                                "    dayPickerSlotDataArray.push(data);",
                                "}",
                                "",
                                "//explination: setData() alone doesn't work, getStore().setData() seems to fix the problem",
                                "dayPickerSlot.getStore().setData();",
                                "",
                                "dayPickerSlot.setData(dayPickerSlotDataArray);",
                                ""
                            ],
                            "name": "slotpick"
                        }
                    }
                ]
            },
            {
                "type": "Ext.picker.Slot",
                "reference": {
                    "name": "slots",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "data": [
                        "[",
                        "    {\"text\":\"1\",\"value\":1},",
                        "    {\"text\":\"2\",\"value\":2},",
                        "    {\"text\":\"3\",\"value\":3},",
                        "    {\"text\":\"4\",\"value\":4},",
                        "    {\"text\":\"5\",\"value\":5},",
                        "    {\"text\":\"6\",\"value\":6},",
                        "    {\"text\":\"7\",\"value\":7},",
                        "    {\"text\":\"8\",\"value\":8},",
                        "    {\"text\":\"9\",\"value\":9},",
                        "    {\"text\":\"10\",\"value\":10},",
                        "    {\"text\":\"11\",\"value\":11},",
                        "    {\"text\":\"12\",\"value\":12},",
                        "    {\"text\":\"13\",\"value\":13},",
                        "    {\"text\":\"14\",\"value\":14},",
                        "    {\"text\":\"15\",\"value\":15},",
                        "    {\"text\":\"16\",\"value\":16},",
                        "    {\"text\":\"17\",\"value\":17},",
                        "    {\"text\":\"18\",\"value\":18},",
                        "    {\"text\":\"19\",\"value\":19},",
                        "    {\"text\":\"20\",\"value\":20},",
                        "    {\"text\":\"21\",\"value\":21},",
                        "    {\"text\":\"22\",\"value\":22},",
                        "    {\"text\":\"23\",\"value\":23},",
                        "    {\"text\":\"24\",\"value\":24},",
                        "    {\"text\":\"25\",\"value\":25},",
                        "    {\"text\":\"26\",\"value\":26},",
                        "    {\"text\":\"27\",\"value\":27},",
                        "    {\"text\":\"28\",\"value\":28},",
                        "    {\"text\":\"29\",\"value\":29},",
                        "    {\"text\":\"30\",\"value\":30},",
                        "    {\"text\":\"31\",\"value\":31}",
                        "]"
                    ],
                    "hidden": false,
                    "itemId": "dayPickerSlot",
                    "minWidth": null,
                    "width": null,
                    "name": "day",
                    "title": "dd"
                }
            },
            {
                "type": "Ext.picker.Slot",
                "reference": {
                    "name": "slots",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "data": [
                        "[",
                        "    {\"text\":\"12\",\"value\":0},",
                        "    {\"text\":\"01\",\"value\":1},",
                        "    {\"text\":\"02\",\"value\":2},",
                        "    {\"text\":\"03\",\"value\":3},",
                        "    {\"text\":\"04\",\"value\":4},",
                        "    {\"text\":\"05\",\"value\":5},",
                        "    {\"text\":\"06\",\"value\":6},",
                        "    {\"text\":\"07\",\"value\":7},",
                        "    {\"text\":\"08\",\"value\":8},",
                        "    {\"text\":\"09\",\"value\":9},",
                        "    {\"text\":\"10\",\"value\":10},",
                        "    {\"text\":\"11\",\"value\":11}",
                        "]"
                    ],
                    "itemId": "hourPickerSlot",
                    "minWidth": null,
                    "align": "right",
                    "name": "hour",
                    "title": "hh"
                }
            },
            {
                "type": "Ext.picker.Slot",
                "reference": {
                    "name": "slots",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "data": [
                        "[",
                        "    {\"text\":\"00\",\"value\":00},",
                        "    {\"text\":\"05\",\"value\":05},",
                        "    {\"text\":\"10\",\"value\":10},",
                        "    {\"text\":\"15\",\"value\":15},",
                        "    {\"text\":\"20\",\"value\":20},",
                        "    {\"text\":\"25\",\"value\":25},",
                        "    {\"text\":\"30\",\"value\":30},",
                        "    {\"text\":\"35\",\"value\":35},",
                        "    {\"text\":\"40\",\"value\":40},",
                        "    {\"text\":\"45\",\"value\":45},",
                        "    {\"text\":\"50\",\"value\":50},",
                        "    {\"text\":\"55\",\"value\":55}",
                        "]"
                    ],
                    "itemId": "minutePickerSlot",
                    "align": "center",
                    "name": "minute",
                    "title": "mm"
                }
            },
            {
                "type": "Ext.picker.Slot",
                "reference": {
                    "name": "slots",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "data": [
                        "[",
                        "    {\"text\":\"AM\",\"value\":0},",
                        "    {\"text\":\"PM\",\"value\":1}",
                        "]"
                    ],
                    "itemId": "ampmPickerSlot",
                    "minWidth": null,
                    "padding": null,
                    "width": null,
                    "align": null,
                    "name": "ampm",
                    "title": "ampm"
                }
            },
            {
                "type": "basiceventbinding",
                "reference": {
                    "name": "listeners",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "onPickerShow",
                    "implHandler": [
                        "this.on('hide', function() {",
                        "",
                        "    var //studyGroupCreator = Ext.ComponentQuery.query('#courseDashboardStudyGroupCreator')[0],",
                        "        monthPickerSlot = this.query('#monthPickerSlot')[0],",
                        "        dayPickerSlot = this.query('#dayPickerSlot')[0],",
                        "        selectedHour = this.query('#hourPickerSlot')[0].selectedIndex,",
                        "        selectedAmpm = this.query('#ampmPickerSlot')[0].selectedIndex,",
                        "        formDate = Ext.ComponentQuery.query('#date')[0],        ",
                        "        currentDate = new Date();",
                        "",
                        "    //a bug requires this next step in order to retrieve the correct value from the ",
                        "    var minutePickerSlot = this.query('#minutePickerSlot')[0],",
                        "        minutePickerSlotData = minutePickerSlot.getStore().data.all,",
                        "        selectedMinuteIndex = minutePickerSlot.selectedIndex,",
                        "        selectedMinute = minutePickerSlotData[selectedMinuteIndex].data.value;",
                        "",
                        "    //apply am/pm condition to the hour",
                        "    if (selectedAmpm === 1) ",
                        "    {",
                        "        selectedHour += 12;",
                        "    }",
                        "",
                        "    var selectedDate = new Date(currentDate.getFullYear(), monthPickerSlot.selectedIndex, dayPickerSlot.selectedIndex + 1, selectedHour, selectedMinute);",
                        "    //set the date to the selector field",
                        "    //studyGroupCreator.date = selectedDate;",
                        "    ",
                        "    console.log(Ext.Date.format(selectedDate, 'l F j g:i A'));",
                        "",
                        "    formDate.setValue(Ext.Date.format(selectedDate, 'l F j g:i A'));",
                        "    this.destroy();",
                        "});"
                    ],
                    "name": "show"
                }
            },
            {
                "type": "basiceventbinding",
                "reference": {
                    "name": "listeners",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "fn": "onPickerPainted",
                    "implHandler": [
                        "var monthPickerSlot = Ext.ComponentQuery.query('#monthPickerSlot')[0],",
                        "    dayPickerSlot = Ext.ComponentQuery.query('#dayPickerSlot')[0],",
                        "    hourPickerSlot = Ext.ComponentQuery.query('#hourPickerSlot')[0],",
                        "    minutePickerSlot = Ext.ComponentQuery.query('#minutePickerSlot')[0],",
                        "    ampmPickerSlot = Ext.ComponentQuery.query('#ampmPickerSlot')[0],",
                        "    currentDate = new Date();",
                        "",
                        "//set the value of the slots to today's date",
                        "monthPickerSlot.setValue(currentDate.getMonth());",
                        "dayPickerSlot.setValue(currentDate.getUTCDate());",
                        "minutePickerSlot.setValue(currentDate.getMinutes());",
                        "",
                        "if (currentDate.getHours() > 12) ",
                        "{",
                        "    hourPickerSlot.setValue(currentDate.getHours()-12);",
                        "    ampmPickerSlot.setValue(1);",
                        "",
                        "} else",
                        "{",
                        "    hourPickerSlot.setValue(currentDate.getHours());",
                        "    ampmPickerSlot.setValue(0);",
                        "}"
                    ],
                    "name": "painted"
                }
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}