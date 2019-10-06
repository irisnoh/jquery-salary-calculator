console.log('in js');

$(document).ready(onReady);

let employeeObject = [
    {
        firstName: '',
        lastName: '',
        id: '',
        title: '',
        annualSalary: '',
    }
];

function onReady() {
    console.log('in jquery!');
    $('#submitButton').on('click', addNew)
    $('tbody').on('click', '.deleteButton', deleteRow)
    $('#totalMonthly').text(totalMonthlySalary)
}

function addingEmployees () {

}
/*function totalMonthlySalary() {
    let totals = [0];
    console.log('is this totaling?');
    var dataRows = $("#countSalary");
    var ts = $("#countMe"); //need this to be a number not an object
    var tb = parseInt(ts)
    console.log(typeof tb);
console.log (tb);
    dataRows.each(function () {
        console.log('its not working ruth');
        $(this).find(tb.each(function (i) {
            totals[i] += parseInt($(this).text());
        }));
    });
    $("#totalMonthly").each(function (i) {
        $(this).text(Number.totals[i]);
    });

}; */



//need to make this an array?
function addNew() {
    console.log('in addNew');
    //const addFirstName = $('#submitFirstName').val();
    console.log($('#submitFirstName').val());

    //const addLastName = $('#submitLastName').val();

    console.log($('#submitLastName').val());

   //const addId = $('#submitId').val();
    console.log($('#submitId').val());

    //const addTitle = $('#submitTitle').val();
    console.log($('#submitTitle').val());

    //const addAnnualSalary = $('#submitAnnualSalary').val();
    console.log($('#submitAnnualSalary').val());

    $(`tbody`).append(`
        <tr>
                <td>${addFirstName}</td>
                <td>${addLastName}</td>
                <td>${addId}</td>
                <td>${addTitle}</td>
                <td>${addAnnualSalary}</td>
                <td>
                    <button class="deleteButton"> Delete </button>
                </td>
            </tr>`);

}

function deleteRow() {
    $(this).closest('tr').remove()
    console.log('this was deleted');
}
