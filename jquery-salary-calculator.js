console.log('in js');

$(document).ready(onReady);

let testCounter = 10000; 

function onReady() {
    console.log('in jquery!');
    $('#submitButton').on('click', addNew)
    $('tbody').on('click', '.deleteButton', deleteRow)
    $('#totalMonthly').text(testCounter)
    //$('#submitButton').on('click', totalTotal)
}

function addNew() {
    const addFirstName = $('#submitFirstName').val();
    console.log($('#submitFirstName').val());

    const addLastName = $('#submitLastName').val();

    console.log($('#submitLastName').val());

    const addId = $('#submitId').val();
    console.log($('#submitId').val());

    const addTitle = $('#submitTitle').val();
    console.log($('#submitTitle').val());

    const addAnnualSalary = $('#submitAnnualSalary').val();
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
    console.log('this was deleted')
}

function totalSalary() {
    console.log('this will add');
    $(`.totalMonthly`).text(testCounter++);

}
