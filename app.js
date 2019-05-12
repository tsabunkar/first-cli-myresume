#!/usr/bin/env node

const aboutMe = require('./commands/aboutme');
const contactMe = require('./commands/contact');
const experience = require('./commands/experience');
const techskills = require('./commands/techskills');
const data = require('./data/data.json');
const inquirer = require('inquirer');

const index = () => {
    console.log('Welcome to mysite profile');
    // console.log(JSON.stringify(data));
    /* aboutMe();
    contactMe(); */
}

inquirer
    .prompt([
        /* Pass your questions in here */
        {
            type: 'list',
            choices: ['about_me', 'contact_me'],
            name: "answers1"
        }
    ])
    .then(resp => {
        // Use user feedback for... whatever!!
        console.log(resp);
        if (resp.answers1 === 'about_me') {
            aboutMe();
        }else if(resp.answers1 === 'contact_me'){
            contactMe();
        }
    });

index();