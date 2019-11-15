console.log('in js');

$(document).ready(onReady);

let employeeObject = []
    ;

function onReady() {
    console.log('in jquery!');
    $('#submitButton').on('click', addNew)
    $('tbody').on('click', '.deleteButton', deleteRow) // needs to be on tbody because on delete didn't happen yet
    $('#totalMonthly').text(totalMonthlySalary)
}
// add inputs to append to table
function addNew() {
    console.log('in my addNew');
    let newEmployeeObject = {
        firstName: $('#submitFirstName').val(),
        lastName: $('#submitLastName').val(),
        id: $('#submitId').val(),
        title: $('#submitTitle').val(),
        annualSalary: $('#submitAnnualSalary').val()
    }
    // could have also done ${newEmployeeObject.firstName} instead of + newEmployeeObject.firstName +
    employeeObject.push(newEmployeeObject);
    $(`#employeeRows`).append(`
        <tr>
                <td>` + newEmployeeObject.firstName + `</td>  
                <td>` + newEmployeeObject.lastName + `</td>
                <td>` + newEmployeeObject.id + `</td>
                <td>` + newEmployeeObject.title + `</td>
                <td>` + dollarSign.format(newEmployeeObject.annualSalary) + `</td>
                <td>
        <button class="deleteButton"> Delete </button> </td>
            </tr>`);
    $('.inputs').val(''); // this will empty the inputs
    totalMonthlySalary();

}
// calculates monthly salary and to display total
function totalMonthlySalary() {
    let totalYearlySalary = 0;
    // could do employeeObject.forEach(function(employeeObject)) instead of a for loop as well
    for (let i = 0; i < employeeObject.length; i++) {
        console.log('is this totaling?');
        totalYearlySalary += Number(employeeObject[i].annualSalary);
    };

    let months = 12;
    let monthlySalary = Number(totalYearlySalary) / Number(months);


    $('#totalMonthly').text(dollarSign.format(monthlySalary));
    checkMonthlySalary();

    function checkMonthlySalary() {
        console.log('checking Red');
        if (monthlySalary < 20000) {
            $('#totalMonthly').removeClass('red');
            return true;
        } else {
            $('#totalMonthly').addClass('red');
            return false;
        }
    }
}

// deletes whole row
function deleteRow() {
        $(this).closest('tr').remove()
        console.log('this was deleted');
}
// formating for $
const dollarSign = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
})