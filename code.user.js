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

function scraptSubjects() {
    const tableSubjects = $('tbody')[0]
    const rows = tableSubjects.children

    for (var i = 0; i < rows.length; i++) {
        var row = rows[i]
        var subjectCode = row.children[1].innerText
        var subjectName = row.children[2].innerText
        var subjectCredit = row.children[3].innerText
        var subjectStatus = row.children[4].innerText
        console.log(subjectCode, subjectName, subjectCredit, subjectStatus)
    }
}

// how to run this function when the page is loaded?



