
console.log('client.js has been loaded');
let employees = [];

$(document).ready(onReady);

function onReady() {
    console.log('jquery is ready!');
    $('#addEmployee').on('click', handleNewEmployee);
    $('#employeeRows').on('click', '.deleteButton', deleteEmployee);
}

function handleNewEmployee() {
    console.log('new employee was added!');
    const newEmployee = {
        firstName: $('#firstName').val(),
        lastName: $('#lastName').val(),
        employeeId: $('#employeeId').val(),
        title: $('#title').val(),
        annualSalary: $('#annualSalary').val(),
    };
    console.log(newEmployee);
    employees.push(newEmployee);
    console.log(employees);
    renderEmployeeList();
    updateMonthlyTotal();
    $('.employeeInput').val('');
}

function renderEmployeeList() {
    $('#employeeRows').empty();
    employees.forEach(function (employee) {
        $('#employeeRows').append(`
            <tr>
                <td>${employee.firstName}</td>
                <td>${employee.lastName}</td>
                <td>${employee.employeeId}</td>
                <td>${employee.title}</td>
                <td>${employee.annualSalary}</td>
                <td>
                    <button class="deleteButton">
                        Delete
                    </button>
                </td>
            </tr> 
        `);
    });
}

function updateMonthlyTotal() {
    let sum = 0;
    console.log('updating monthly total');
    employees.forEach(function(employee) {
        sum += employee.annualSalary / 12;
    });
    $('#monthlyContainer').text(`Total Monthly Salary: $${sum}`);
}

function deleteEmployee() {
    console.log('delete button has been clicked');
    let employeeId = $(this).parent().prev().prev().prev().text();
    console.log(employeeId);
    // remove employee
    let updatedEmployeeArray = [];
    employees.forEach(function(employee) {
        if(employee.employeeId !== employeeId) {
            updatedEmployeeArray.push(employee);
        }
    });
    employees = updatedEmployeeArray;
    // display all employees
    renderEmployeeList();
    // update total
    updateMonthlyTotal();
}