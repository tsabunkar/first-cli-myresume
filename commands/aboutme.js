const data = require('../data/data.json');


const aboutMe = () => {
    console.log('It is about me..(TEJAS SABUNAKR)');
/* 
    const dataObject = JSON.stringify(data);
    const dataObj = JSON.parse(dataObject); */
/*     console.log(typeof (dataObject));
    console.log(typeof (dataObj)); */
    console.log(data.summary);
}

module.exports = aboutMe;
