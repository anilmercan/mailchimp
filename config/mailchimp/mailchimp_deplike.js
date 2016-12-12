var MailChimpExportAPI = require('mailchimp').MailChimpExportAPI;

var apiKey = 'bab5db6e92d992a4244da62038793ddc-us14';

try {
    var exportApi = new MailChimpExportAPI(apiKey, { version : '1.0', secure: false });
} catch (error) {
    console.log(error.message);
}


exportApi.list({ id : '23661393b6'  }, function (error, data) {
    if (error)
        console.log(error.message);
    else{
        console.log(data[0])
    }

});



