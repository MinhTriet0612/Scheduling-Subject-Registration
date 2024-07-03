// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      2024-07-03
// @description  try to take over the world!
// @author       You
// @match        https://uis.ptithcm.edu.vn/#/dangkymonhoc
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      http://code.jquery.com/jquery-2.1.0.min.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @require      file:///Users/alexng/Documents/Project/DangKyMonHocPrj/code.user.js


// @run-at       document-start
// ==/UserScript==


class Subject {
    constructor(isChecked, subjectCode, subjectName, groupCode, classCode, startTime, endTime) {
        this.subjectCode = subjectCode
        this.subjectName = subjectName
        this.groupCode = groupCode
        this.classCode = classCode
        this.startTime = startTime
        this.endTime = endTime
        this.isChecked = isChecked
    }
}

const subjects = [];
function scraptSubjects() {
    const tableSubjects = $('tbody')[0]
    const rows = tableSubjects.children
    for (var i = 0; i < rows.length; i++) {
        subjects.push(new Subject(false,
            rows[i].children[1].innerText,
            rows[i].children[2].innerText,
            rows[i].children[3].innerText,
            rows[i].children[4].innerText,
            rows[i].children[5].innerText,
            rows[i].children[6].innerText))
    }
}




subjects.forEach(subject => {
    console.log(JSON.stringify(subject))
})



// how to run this function when the page is loaded?



