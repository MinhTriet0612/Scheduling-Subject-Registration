// ==UserScript==
// @name         Scheduling Subject Registration
// @namespace    http://tampermonkey.net/
// @version      2024-07-03
// @description  try to take over the world!
// @author       You
// @match        https://uis.ptithcm.edu.vn/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @require      http://code.jquery.com/jquery-3.6.0.min.js
// @grant        GM_addStyle
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        unsafeWindow
// @run-at       document-start


// ==/UserScript==


GM_addStyle(`
 .card-header {
        border-radius: 15px !important;
        border-bottom: 1px solid rgba(0, 0, 0, 0.125) !important;
        padding: 0.75rem 1.25rem !important;
        margin-bottom: 0 !important;
    }

    .container-fluid {
        border-radius: 15px !important;
        box-shadow: 0 20px 50px rgba(0, 0, 0, 0.3) !important;

    }

    .card {
        border: 0px solid rgba(0, 0, 0, 0.125) !important;
        border-radius: 15px !important;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.125) !important;
    }

    .btn-primary {
        border: 0px solid rgba(0, 0, 0, 0.125) !important;
        border-radius: 15px !important;
        box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.125) !important;
    }


    /* D?u m?t */
    html {
        background: #f2f2f2;
    }
    body {
        background: inherit !important;
        margin: 0;
        font-family: "Inter", sans-serif;
    }

    .banner {
        background-color: #fff !important;
    }

    .banner {
        display: block;
        width: 100% !important;
        height: 728px !important;
        border-bottom-left-radius: 15px !important;
        border-bottom-right-radius: 15px !important;

    }

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

    .editTKB {
        background-color:#AD171C !important;
    }

    .editTKB > i {
        color: #fff !important;
    }

    #tkb_div {
        height: auto;
        width: 80% !important;
        margin-left: 10% !important;
        margin-right: 10% !important;
        margin-top: 60px;
        align-items: center;
        justify-content: center;
        background-color: #fefefe;
    }

    .danhsachmonhoc_text {
        text-align: center;
        margin: auto;
    }

    .tkb_preview_table > thead {
        background-color: #AD171C;
    }

    .tkb_preview_table > thead > tr > th {
        color: #fff;
        padding: 0.5px;
        text-align: center;
    }

    .cellqh {
        border: 1px solid green;
        max-width: 8px;
        max-height: 8px;
        font-size: 8px;
        position: relative;
        border-bottom: 1px dotted black;
    }

    .tooltiptext {
        font-size: 8px;
    }

    .cellqh .tooltiptext {
        visibility: hidden;
        width: 120px;
        background-color: black;
        color: #fff;
        text-align: center;
        padding: 5px 0;
        border-radius: 6px;
        position: absolute;
        z-index: 1;
        display: block;
        float: left;
      }
      .cellqh:hover .tooltiptext:not(:empty) {
        visibility: visible;
      }

      .cellqh:hover .tooltiptext {
        visibility: visible;
      }

    .starttimerow {
        padding: 1px;
        vertical-align: middle;
        border-top: 0.2px solid #edeef2;
        background-color: #AD171C;
        color: #fff;
        max-width: 30px;
        max-height: 10px;
        font-size: 8px;
    }

    .chonngaydiv {
        text-align: center;
        margin-bottom: 10px;
        background-color: #fefefe;
        border-collapse: collapse;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
        align-items: center;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
    }

    .danhsachmonhoc {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 10px;
        flex-wrap: wrap;
        background-color: #fefefe;
        border-collapse: collapse;
        flex-direction: column;
    }

    .dropdownlecture {
        text-align: center;
        margin-bottom: 10px;
        margin-top: 30px;
        background-color: #fefefe;
        border-collapse: collapse;
        border-radius: 10px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.02);
        background-color: #fefefe;
        margin-left: 30%;
        margin-right: 30%;
        width: 40%;
    }

    input[type="date"]::-webkit-datetime-edit, input[type="date"]::-webkit-inner-spin-button, input[type="date"]::-webkit-clear-button {
        color: #fff;
        position: relative;
    }

      input[type="date"]::-webkit-datetime-edit-year-field {
        position: absolute !important;
        border-left:1px solid #8c8c8c;
        padding: 2px;
        color:#000;
        left: 56px;
      }

      input[type="date"]::-webkit-datetime-edit-month-field {
        position: absolute !important;
        border-left:1px solid #8c8c8c;
        padding: 2px;
        color:#000;
        left: 26px;
      }


    input[type="date"]::-webkit-datetime-edit-day-field {
        position: absolute !important;
        color:#000;
        padding: 2px;
        left: 4px;
    }
`)

{

    function useState(initialValue) {
        let state = initialValue;
        const listeners = [];

        function setState(newValue) {
            state = newValue;
            listeners.forEach(listener => listener(state));
        }

        function getState() {
            return state;
        }

        function subscribe(listener) {
            listeners.push(listener);
        }

        return [getState, setState, subscribe];
    }

    // Initialize state
    const [getCount, setCount, subscribe] = useState(0);

    // Function to render the component
    function render() {
        $('#app').html(`<p>Count: ${getCount()}</p>`);
    }
    // Subscribe render function to state changes
    subscribe(render);

    // Initial render
    render();

    // Event listener to modify state
    $('#increment-button').click(function() {
        setCount(getCount() + 1);
    });
}


window.onload = function() {
    unsafeWindow.scraptSubjects = scraptSubjects;
    unsafeWindow.drawTable = drawTable;
    unsafeWindow.process = process;
    unsafeWindow.ensureDropdownEventListener = ensureDropdownEventListener
    unsafeWindow.ensureCheckBoxEventListener = ensureCheckBoxEventListener


    const floatingButton = document.createElement('button');
    floatingButton.innerHTML = `<button class="float"><i class="fa fa-cogs"></i></button>`;
    floatingButton.onclick = function() {
        process()
        ensureDropdownEventListener()
        ensureCheckBoxEventListener()


    }

    document.body.appendChild(floatingButton)
    // we have input's class name, so how to combine with?

}





//////////////////////////////////////////////////////
// Below block for listening any event
//
document.addEventListener('click', function(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        text = target.textContent || target.innerText;
    console.log(text + " " + target.className + " - " + target)
    const key = target.getAttribute("key")
    console.log(key)

}, false);


// tracking event of changing my dropdown


//////////////////////////////////////////////

var specialValue = 55546;


class Subject {
    constructor(subjectCode, subjectName, groupCode, teamCode, classCode, timeTable) {
        this.subjectCode = subjectCode
        this.subjectName = subjectName
        this.groupCode = groupCode
        this.teamCode = teamCode.trim().length >= 1 ? teamCode : ''
        this.classCode = classCode
        this.timeTable = reformatRoutine(timeTable)
    }
}



const subjects = new Map();
const nameStoring = new Map();

function scraptSubjects() {
    let nameStoring = new Map();
    unsafeWindow.subjects = subjects;
    $(".custom-control").attr("style", "display :none !important");
    const tableSubjects = $('tbody')[0]
    const rows = tableSubjects.children

    for (let i = 0; i < rows.length; i++) {
        // enable checked for this input
        const subject = new Subject(
            rows[i].children[1].innerText,
            rows[i].children[2].innerText,
            rows[i].children[3].innerText,
            rows[i].children[4].innerText,
            rows[i].children[6].innerText,
            rows[i].children[9].innerText
        )

        nameStoring.set(rows[i].children[1].innerText, rows[i].children[2].innerText)


        const key = subject.subjectCode + subject.groupCode + subject.teamCode
        subjects.set
            (
                key,
                subject
            ); // key -value

        // modify checkbox
        let form = $(rows[i]).find("form")
        let tag = `<input type='checkbox' class='editCheckBoxInput' value="${key}">`
        form.append(tag)

    }

    subjects.forEach((value, key) => {
        console.log(key, value)
    })

    // add dropdown
    var dropDown = $(".dropdownlecture");
    dropDown.empty();
    dropDown.append('<option value ="all" class ="">All</option>');

    for (let [key, value] of nameStoring) {
        dropDown.append(`<option value ="${key}">${key} ${value}</option>`);
    }

    // dropDown.append('<option value ="' + key + '">' + value.subjectName + '</option>');
}


function ensureDropdownEventListener() {
    var timer = setInterval(() => {
        var inputEle;
        if ($('.dropdownlecture').length == 0) {
            return;
        }

        else {
            $(".dropdownlecture").change(function(event) {
                if (inputEle == undefined) {
                    inputEle = document.getElementsByClassName("form-control form-control-sm small text-secondary ng-untouched ng-pristine ng-valid")[0]
                }

                if (event.target.value == "all") {
                    inputEle.value = "";
                }
                else {
                    inputEle.value = event.target.value
                }

                const inputEvent = new Event('input', {
                    bubbles: true,
                    cancelable: true,
                });
                inputEle.dispatchEvent(inputEvent);

            })
            clearInterval(timer);
        }
    }, 200)
}

function ensureCheckBoxEventListener() {
    var timer = setInterval(() => {
        if ($('.editCheckBoxInput').length == 0) {
            return;
        }
        else {
            $('.editCheckBoxInput').change(function(event) {
                const key = event.target.value
                const subject = subjects.get(key)
                console.log(subject)
                // if (event.target.checked) {
                //     drawSubject(subject)
                // } else {
                //     removeSubject(subject)
                // }

                if (event.target.checked) {
                    // drawSubject(subject)
                    console.log("checked")
                }
                else {
                    // removeSubject(subject)
                    console.log("unchecked")
                }
            })
            clearInterval(timer);
        }
    }, 200)
}


function reformatRoutine(str) {
    try {
        if (str.trim() == "")
            return [];

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
            if (item.indexOf("đến") == -1) {
                let [day, time, date] = item.split(",");
                let [startDay, startMonth, startYear] = date.split("/");
                let [start, end] = time.replace("tiết", "").trim().split("->").map((item) => parseInt(item));
                startYear = startYear.replace(/\D/g, "");

                return {
                    day: dayInWeek.get(day),
                    time: [start, end],
                    start: new Date('20' + startYear, startMonth, startDay),
                    end: new Date('20' + startYear, startMonth, startDay)
                };
            }

            let [day, time, date] = item.split(",");
            let [start, end] = date.split("đến");
            let [startDay, startMonth, startYear] = start.split("/");
            let [endDay, endMonth, endYear] = end.split("/");
            endYear = endYear.replace(/\D/g, "");

            time = time.replace("tiết", "").trim().split("->").map((item) => parseInt(item));

            return {
                day: dayInWeek.get(day),
                time: time,
                start: new Date('20' + startYear, startMonth, startDay),
                end: new Date('20' + endYear, endMonth, endDay)
            };


        });

    } catch (e) {
        console.log(e);
        return [];
    }
}







function drawTable() {
    // let rows = 14; //14 tiết
    // let cols = 80;
    // let tables = []
    let tkb_div = $('<div id="tkb_div" class="row d-flex justify-content-center pt-1"></div>')

    // for (let i = 1; i <= 2; i++) {
    //     let count = 0;
    //     let table_id = "tkbPreview" + i;
    //     tables[i] = $('<table style="z-index:-100;table-layout:fixed;text-align:center;border-collapse: collapse;" class="tkb_preview_table" id=' + table_id + '><thead> <th></th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th><th>2</th><th>3</th><th>4</th><th>5</th><th>6</th><th>7</th><th>8</th><th>|</th> </thead><tbody>');
    //     let tkb_separator, start_time_in_hr;
    //     for (let r = 0; r < rows; r++) {
    //         if (r % 2) tkb_separator = 'border-bottom:2px solid #ad171c;'
    //         else tkb_separator = '';
    //         start_time_in_hr = r + 7;
    //         //Thêm hàng, thời gian bắt đầu tiết
    //         let tr = $('<tr style="height:1px;' + tkb_separator + '"><td class="starttimerow">' + start_time_in_hr + '</td>');
    //         for (let c = 0; c < cols; c++) {
    //             if ((c + 1) % 8) {
    //                 count++;
    //                 $('<td class="cellqh" id="' + (70 * (i - 1) * 14 + count + specialValue) + '">' + "+" + '<span class="tooltiptext"></span></td>').appendTo(tr);
    //             } else {
    //                 //divider
    //                 $('<td style="height:0px; width: 15px; background-color: #fff"></td>').appendTo(tr);
    //             }
    //         }
    //         tr.appendTo(tables[i]);
    //     }
    //
    //
    // $('</tbody></table>').appendTo(tables[i]);
    // tkb_div.append(tables[i])

    // }
    tkb_div.append('<div class="chonngaydiv"><label for="datetimepicker">Chọn ngày bắt đầu tuần đầu tiên (Xem trong TKB tuần)    </label><input class="inputdate" id="datetimepicker" type="date" value="2023-08-14"></input><br></div>');
    tkb_div.append('<select class="dropdownlecture"><option value="" class="label_dropdownlecture">Chọn môn</option></select>')
    tkb_div.append('<div class="danhsachmonhoc_text"><strong>Các môn đã đăng ký<strong></div>')
    tkb_div.append('<div class="danhsachmonhoc"></div>')

    //Thêm vào trang
    $("div.card-body.p-0 div.row.d-flex.justify-content-center.text-nowrap.pt-1").prepend(tkb_div)
    console.log("Đã thêm bảng TKB")

}



function process() {
    if (
        $('#tkb_div').length == 0
    ) {
        drawTable()
    }

    if (
        subjects.size == 0 && nameStoring.size == 0
    ) {
        scraptSubjects()
    }
}

