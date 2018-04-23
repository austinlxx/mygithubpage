$("#bubbleButton").click(function() {
		if ($('#bubble').is(':hidden')) {
			$("#bubble").css("display", "block");
		} else {
			$("#bubble").css("display", "none");
		}
	}

);
$(".conarrative-button-close").click(function() {
	if ($('#bubble').is(':hidden')) {
		$("#bubble").css("display", "block");
	} else {
		$("#bubble").css("display", "none");
	}
});;
// ID of the Google Spreadsheet
var spreadsheetID = "1FokJsNlBlRqEDY1Sk2YAlJPhWNd3JFyl5nceyvDpvpo";
// Make sure the spreadsheet is published to the web
var url = "https://spreadsheets.google.com/feeds/list/" + spreadsheetID + "/od6/public/values?alt=json";
var str = window.location.pathname;
str = str.substring(str.indexOf("/") + 1);
str = str.substring(str.indexOf("/") + 1);
addressURL = str.substring(str.indexOf("/") + 1);
$.getJSON(url, function(data) {
		var interactions = data.feed.entry[0];
		var interactionText = entry["gsx$" + addressURL].$t;
		interactionText = interactionText.replace(/(?:\r\n|\r|\n)/g, '<br />');
		var notes = data.feed.entry[1];
		var notesText = entry["gsx$" + addressURL].$t;
		notesText = notesText.replace(/(?:\r\n|\r|\n)/g, '<br />');
		$('#addressURL').append(notesText);
	}
);