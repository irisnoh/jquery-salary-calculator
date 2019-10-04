console.log('in js');

$(document).ready(onReady);

function onReady () {
    console.log ('in jquery!');
    $('#submitButton').on('click', addNew)
}

function addNew () {
    const addFirstName = $('submitFirstName').val();
    $('#submitFirstName').append('')
    console.log ('adding new First Name');

}