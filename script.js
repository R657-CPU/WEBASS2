$(document).ready(function () {
    // Handle form submission
    $('#registrationForm').submit(function (event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Collect form data
        var name = $('#name').val();
        var email = $('#email').val();
        var phone = $('#phone').val();
        var address = $('#address').val();
        var country = $('#country').val();  // Get selected country
        var gender = $("input[name='gender']:checked").val();  // Get selected gender

        // Display success message and submitted data
        $('#successMessage').removeClass('hidden');
        $('#displayName').text(name);
        $('#displayGender').text(gender);  // Display gender
        $('#displayEmail').text(email);
        $('#displayPhone').text(phone);
        $('#displayAddress').text(address);
        $('#displayCountry').text(country);  // Display the selected country

        // Optionally clear the form after submission
        $('#registrationForm')[0].reset();
    });
});
