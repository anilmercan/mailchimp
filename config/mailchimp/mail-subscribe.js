var MailChimpAPI = require('mailchimp').MailChimpAPI;

var apiKey = 'bab5db6e92d992a4244da62038793ddc-us14';

var MailChimpAPI = require('mailchimp').MailChimpAPI;

var apiKey = 'bab5db6e92d992a4244da62038793ddc-us14';
var MailChimpListId = '23661393b6';  // Change this to your List ID
var mcApi = new MailChimpAPI(apiKey, { version : '1.3', secure : false });
module.exports.mcApi=mcApi;
module.exports.MailChimpListId=MailChimpListId;