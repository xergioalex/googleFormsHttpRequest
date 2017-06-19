// Process contact form
$('#contact-form').submit(function(event) {
  event.preventDefault();
  $('#feedback').html('');
  setTimeout(function() {
    // Get data
    var data = {
      'entry.568194084': $('#form-name').val(),
      'entry.1303875942': $('#form-email').val(),
      'entry.807958025': $('#form-phone').val(),
      'entry.703388132': $('#form-message').val()
    };

    // Validate form
    var formSuccess = true;
    Object.keys(data).forEach(function(key, index) {
      if (!data[key]) {
        formSuccess = false;
        $('#feedback').html('<label class="text-danger">Please complete all fields</label>');
      }
    });

    if (formSuccess) {
      // Send request
      $.ajax({
        url: 'https://docs.google.com/forms/d/e/1FAIpQLSdnW7ixrovoi7V7sJQihWouPztZL4GoRMAP5SpoVh2UfMhxOQ/formResponse',
        type: 'POST',
        crossDomain: true,
        dataType: "xml",
        data: data,
        success: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on success');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log('Enter on error');
          $('#feedback').html('<label class="text-success">Message sent!</label>');
        }
      });
    }
  }, 300);
});
