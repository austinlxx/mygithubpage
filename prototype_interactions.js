$("#bubbleButton").click(function () {
	if ($('#bubble').is(':hidden')) {
		$("#bubble").css("display", "block");
	} else {
		$("#bubble").css("display", "none");
	}
}

);
$(".conarrative-button-close").click(function () {
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
$.getJSON(url, function (data) {
	var interactions = data.feed.entry[0];
	try {
		var interactionText = interactions["gsx$" + addressURL].$t;
		if (interactionText == "") {
			interactionText = "No interactions available.";
		} else
			interactionText = interactionText.replace(/(?:\r\n|\r|\n)/g, '<br />');
	}
	catch (error) {
		var interactionText = "No interactions available.";
	}
	var notes = data.feed.entry[1];
	try {
		var notesText = notes["gsx$" + addressURL].$t;
		if (notesText == "") {
			notesText = "No notes available.";
		} else
			notesText = notesText.replace(/(?:\r\n|\r|\n)/g, '<br />');
	}
	catch (error) {
		var notesText = "No notes available.";
	}
	$('#interactions').prepend(interactionText);
	$('#notes').prepend(notesText);
}
);