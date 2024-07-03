// ==UserScript==
// @name         Scheduling Subject Registration
// @namespace    http://tampermonkey.net/
// @version      2024-07-03
// @description  try to take over the world!
// @author       You
// @match        https://uis.ptithcm.edu.vn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      http://code.jquery.com/jquery-2.1.0.min.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @run-at       document-start


// ==/UserScript==


GM_addStyle(`
    .float {
        position: fixed;
        z-index: 1;
        width:60px;
        height:60px;
        bottom:40px;
        right:40px;
        color: #000000;
        background: #FFF;
        border-radius: 50%;
        border: none;
        transition: box-shadow 400ms cubic-bezier(0.2, 0, 0.7, 1), transform 200ms cubic-bezier(0.2, 0, 0.7, 1);
      }

    .float:after {
        font-size: 2.5em;
        line-height: 1.1em;
      }

    .float:hover {
        transform: rotate(45deg);
        box-shadow: 0 0 1px 15px rgba(138, 59, 88, 0.4), 0 0 1px 30px rgba(138, 59, 88, 0.1), 0 0 1px 45px rgba(138, 59, 88, 0.1);
      }
`)

window.onload = function() {
    unsafeWindow.scraptSubjects = scraptSubjects;

    const floatingButton = document.createElement('button');
    floatingButton.innerHTML = `<button class="float"><i class="fa fa-cogs"></i></button>`;
    floatingButton.onclick = function() {
        scraptSubjects()
    }

    document.body.appendChild(floatingButton)

    let elements = document.querySelectorAll(".clickable.ng-untouched.ng-pristine.ng-valid input[type='checkbox']");
    for (let i = 0; i < elements.length; i++) {
        let element = $(elements[i]);
        if (element.prop("checked") == true) {
            element.prop("checked", false);
            let clickEvent = new Event("click");
            elements[i].dispatchEvent(clickEvent);
        }

    }
    var table_data = createArray(3, rows * cols);

    for (var tmp1738 = 1; tmp1738 < 3; tmp1738++) for (var tmp1739 = 0; tmp1739 < rows * cols; tmp1739++) table_data[tmp1738][tmp1739] = new Map();
    for (var i = 0; i < 2; i++) {
        var table_id = "tkb_preview_table" + (i + 1);
        tables[i] = $('<table style="table-layout:fixed;text-align:center;border-collapse: collapse;" class="tkb_preview_table" id=' + table_id + '><thead> <th></th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>|</th> </thead><tbody>');
        var tkb_separator, start_time_in_hr;
        for (var r = 0; r < rows; r++) {
            if (r == 1) tkb_separator = 'border-bottom:2px solid blue;'
            else tkb_separator = '';
            if (r < 2) {
                start_time_in_hr = r * 2 + 7;
            } else {
                start_time_in_hr = r * 2 + 8;
            }
            var tr = $('<tr style="height:1px;' + tkb_separator + '"><td>' + start_time_in_hr + '</td>');
            for (var c = 0; c < cols; c++)
                if ((c + 1) % 7) {
                    $('<td ud_id="' + (r * cols + c) + '" class="bvk_table_cell" style="border:solid green 1px;height:1px;">' + AVAILABLE + '</td>').appendTo(tr);
                } else {
                    $('<td ud_id="' + (r * cols + c) + '" class="bvk_table_cell" style="height:0px;"></td>').appendTo(tr);
                }
            tr.appendTo(tables[i]);
        }
        $('</tbody></table>').appendTo(tables[i]);
        tkb_div.append(tables[i])
    }

}

class Component { // component for holding table data
    constructor(data) {
        this.data = {}
    }

    setData(data) {
        this.element = document.createElement('div')
        this.element.innerHTML = this.template()
    }
}

this.setData = function(data) {
    this.render()
    this.data = data
}



class Subject {
    constructor(subjectCode, subjectName, groupCode, teamCode, classCode, timeTable) {
        this.subjectCode = subjectCode
        this.subjectName = subjectName
        this.groupCode = groupCode
        this.teamCode = teamCode.trim().length >= 1 ? teamCode : ''
        this.classCode = classCode
        this.timeTable = reformatTimeTable(timeTable)
    }
}


class Schedule {
    constructor(startTime, endTime, classPeriods) {
        this.startTime = startTime
        this.endTime = endTime
        this.classPeriods = classPeriods
    }
}


const subjects = [];
function scraptSubjects() {
    const tableSubjects = $('tbody')[0]
    const rows = tableSubjects.children
    for (let i = 0; i < rows.length; i++) {
        subjects.push(new Subject(
            rows[i].children[1].innerText, // subjectCode
            rows[i].children[2].innerText, // subjectName
            rows[i].children[3].innerText, // groupCode
            rows[i].children[4].innerText, // teamCode
            rows[i].children[6].innerText, // classCode
            rows[i].children[9].innerText // timeTable
        ))
    }

    subjects.forEach(subject => {
        console.log(subject)
    })
}



function reformatTimeTable(str) {
  str = str.toLowerCase();

  const dayInWeek = new Map([
    ["thứ 2", 2],
    ["thứ 3", 3],
    ["thứ 4", 4],
    ["thứ 5", 5],
    ["thứ 6", 6],
    ["thứ 7", 7],
    ["chủ nhật", 8]
  ]);



  return str.split("\n").map((item) => {
    let [day, time, date] = item.split(",");
    let [start, end] = date.split("đến");
    let [startDay, startMonth, startYear] = start.split("/");
    let [endDay, endMonth, endYear] = end.split("/");

    // "24(TH)" -> 24
    endYear = endYear.replace(/\D/g, "");


    time = time.replace("tiết", "").trim().split("->").map((item) => parseInt(item));

    return {
      day: dayInWeek.get(day),
      time: time,
      start: new Date('20' + startYear, startMonth, startDay),
      end: new Date('20' + endYear, endMonth, endDay)
    };
  });
}

