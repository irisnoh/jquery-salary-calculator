console.log('in js');

$(document).ready(onReady);

function onReady () {
    console.log ('in jquery!');
    $('#submitButton').on('click', addNew)
}

function addNew () {
    const addFirstName = $('submitFirstName').val();
    console.log ($('#submitFirstName').val());

    //const addLastName = $('submitLastName').val();
}