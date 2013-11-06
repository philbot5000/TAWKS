/*
 * File: app/store/Activities.js
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

Ext.define('Tawks.store.Activities', {
    extend: 'Ext.data.Store',

    requires: [
        'Tawks.model.Activity'
    ],

    config: {
        autoLoad: true,
        data: [
            {
                type: 'Class Preparation',
                description: 'activities relating to the preparation of instructional materials (lecture notes, audio-visual supplements, assessments, exams, etc.)'
            },
            {
                type: 'Email',
                description: 'communication via electronic media (email proper)'
            },
            {
                type: 'Course Administration',
                description: 'activities relating to the administration of a course including writing a syllabus, uploading documents to Blackboard, grading, recording grades, making photocopies of instructional materials'
            },
            {
                type: 'Instruction',
                description: 'activities relating to the delivery of a course including lecturing, running a seminar, running a lab, practicums, and observation of student teachers.'
            },
            {
                type: 'Workshop/Conference',
                description: 'attendance at any professional meeting (teaching, research, service, administration, or professional development)'
            },
            {
                type: 'Travel',
                description: 'time spent going to and from any work related activity on campus as well as time spent going to and from work-related events off campus. Commuting to and from work is not travel.'
            },
            {
                type: 'Scheduling/Planning',
                description: 'activities surrounding preparatory work across teaching, research, service, and administration, including writing meeting agendas, scheduling courses, travel itineraries, drafting policies, preparing for meetings, organizing functions or events, and developing curriculum revisions or proposals'
            },
            {
                type: 'Dissemination',
                description: 'presentations at professional meetings over any function, including preparation/writing of notes, audio-visual materials, handouts or any other material related to dissemination of your professional activity (e.g., STEM Exploration Day)'
            },
            {
                type: 'Primary Research',
                description: 'activity relating to the production of generalizable knowledge (fieldwork, lab work, experiments, etc.)'
            },
            {
                type: 'Professional Conversation',
                description: 'conversations with colleagues about any professional topic (hallway conversations at the office, conversations at events, informal dinners with colleagues at conferences).'
            },
            {
                type: 'Manuscript/Writing',
                description: 'activity geared to the production of professional literature at all stages of the production cycle (i.e., drafting, reviewing colleague or copy editor comments, galley proofs, etc.)'
            },
            {
                type: 'Reading/Lit Review',
                description: 'Reading oriented to maintaining knowledge about the professional literature in your discipline.'
            },
            {
                type: 'Housekeeping',
                description: 'activities relating to creating an orderly work environment (i.e., cleaning up files, straightening offices and labs, and updating computers)'
            },
            {
                type: 'Reporting',
                description: 'activities associated with annual reporting, OSP effort reporting, travel approvals, expense reports, risk management, etc.'
            },
            {
                type: 'Research Development',
                description: 'writing grant proposals, working with OSP to develop grant proposals, submission processes'
            },
            {
                type: 'Phone Call',
                description: 'communication by means of the telephone, as well as skype, google circles, etc.'
            },
            {
                type: 'Student Recruitment and Awards',
                description: 'Activities involving making decisions about scholarships and other awards to current or future students'
            },
            {
                type: 'Peer Review',
                description: 'Any editorial work (making comments on a manuscript for a colleague, reviewer for a journal, editor of a journal, etc.) or grant review work.'
            },
            {
                type: 'Hiring/Recruitment',
                description: 'activities relating to hiring of faculty, professional staff, or administrators (i.e., search committee, interviews, attending a job talk, etc.)'
            },
            {
                type: 'Reception/Dinner',
                description: 'Formal special events organized by the university, college, or department/program or professional conference/association.'
            },
            {
                type: 'Marketing/PR',
                description: 'activities relating to the production of advertising or community outreach materials for the unit'
            },
            {
                type: 'Research Admin',
                description: 'activities relating to the management of existing research projects, including IRB renewals, effort reporting, writing reports for funding agencies, distributing funds through subcontracts.'
            },
            {
                type: 'Letter Writing',
                description: 'activity geared to writing letters (e.g., student recommendations, requests for external review of tenure portfolios, etc.)'
            }
        ],
        model: 'Tawks.model.Activity',
        storeId: 'activities'
    }
});