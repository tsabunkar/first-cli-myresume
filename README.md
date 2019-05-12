MyProfile/MyResume -
(Welcome message, description)
ABOUTME
EXPERIENCE
TECH SKILLS
CONTACT ME

-> Let us call each executable as command, -> Create a cmd folder
-> Data (All Json files)
-> Root Folder (will have welcome msg, description)

-----------------------------------------------------------------------------------------------------------
Dependencies -
cfonts
chalk
--function cli---
inquirer
commander
-----------------------------------------------------------------------------------------------------------


How to use this repo?
This repo is step-by-step guide. You can clone the repo or follow along.Every folder is marked below with what is expected in it.

0️⃣ Walkthrough [Theory]
Introduction to nodejs and CLI.

Folder : session-1/intro.md

1️⃣ Setup your machine [Codelab]
Folder : session-1

Install nodejs

Create a folder - "myprofile"

Create package.json

  npm init
2️⃣ Create your Data [Codelab]
Folder : session-2

Go to folder session-2/myprofile/data. If you want to update the content you can edit it in data.js

3️⃣ Code Time [Codelab]
Folder : session-3

Go to folder session-3/myprofile. In this we will identify the commands and add it to the commands folder.

To sync with data.js we have following commands (user input) :

about me
contact me
experience
summary
To print the choices on the terminal we will use the npm package inquirer.

4️⃣ Beautification
Folder : session-4

This section is totally optional. To make the CLI' content more colorful and presentable. We will use two more packages:

chalk : Will let us provide the colors to the texts.
cfonts : Will let us write a big fancy welcome message.
inquirer : Common interactive command line user interfaces.
commander : Common interactive command line user interfaces.
5️⃣ Publish NPM [Codelab]
How to make it Executable?
Add #!/usr/bin/env node on the top of index.js. Read about it here : https://en.wikipedia.org/wiki/Shebang_%28Unix%29

In package.json, add section of bin

"bin": {
    "myprofile": "./index.js"
}
Run the following command

 npm link
Now go to the terminal and write

 myprofile
Publish to NPM
Create an account in npmjs.com

On terminal run the following command & enter the username and password.

npm login
To publish

npm publish
You can check your package after publishing : https://www.npmjs.com/~{username}/{package-name}

How to run it?
Go to the desire folder. eg :

cd session-2/myprofile
Install the dependency

npm install
From the root of the myprofile run the following command to start the application

node index.js