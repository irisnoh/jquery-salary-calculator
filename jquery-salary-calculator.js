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
    //('#totalMonthly').text(totalMonthlySalary)
}
//need to make this an array?
function addNew() {
    console.log('in my addNew');
    let newEmployeeObject = {
        firstName: $('#submitFirstName').val(),
        lastName: $('#submitLastName').val(),
        id: $('#submitId').val(),
        title: $('#submitTitle').val(),
        annualSalary: $('#submitAnnualSalary').val()

    }
    employeeObject.push(newEmployeeObject);
    $(`tbody`).append(`
        <tr>
                <td>` + newEmployeeObject.firstName + `</td>
                <td>` + newEmployeeObject.lastName + `</td>
                <td>` + newEmployeeObject.id + `</td>
                <td>` + newEmployeeObject.title + `</td>
                <td>` + newEmployeeObject.annualSalary + `</td>
                <td>
        <button class="deleteButton"> Delete </button> </td>
            </tr>`);

}

function deleteRow() {
    $(this).closest('tr').remove()
    console.log('this was deleted');
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

};*/
