$("#bubbleButton").click(function() {
if($('#bubble').is(':hidden')) {
$("#bubble").css("display", "block");
}
else {
$("#bubble").css("display", "none");
}
}

);
$(".conarrative-button-close").click(function() {
if($('#bubble').is(':hidden')) {
$("#bubble").css("display", "block");
} else {
$("#bubble").css("display", "none");}
});
;
// ID of the Google Spreadsheet
var spreadsheetID="1FokJsNlBlRqEDY1Sk2YAlJPhWNd3JFyl5nceyvDpvpo";
// Make sure the spreadsheet is published to the web
var url="https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
var str=window.location.pathname;
str=str.substring(str.indexOf("/") + 1);
str=str.substring(str.indexOf("/") + 1);
addressURL=str.substring(str.indexOf("/") + 1);
$.getJSON(url, function(data) {
var entry=data.feed.entry[0];
$('#addressURL').prepend(entry["gsx$"+addressURL].$t);
}

);