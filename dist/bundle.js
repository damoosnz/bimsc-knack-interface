// messages/message-functions.js
function removePopup(viewKey) {
  $("#" + viewKey + " .popup-message").remove();
}
function addPopup(viewKey, message, popupType) {
  var divSelector = $("#" + viewKey);
  var popup2 = $("<div>").addClass("popup-message");
  var messageDiv = $("<div>").html(message).css({
    marginBottom: "20px",
    fontSize: "18px",
    color: "#fff"
  });
  var progressBarContainer = $("<div>").addClass("progress-bar-container");
  var progressBar = $("<div>").attr("id", "popup-progress-bar-" + viewKey).addClass("popup-progress-bar");
  var progressText = $("<div>").attr("id", "progress-text-" + viewKey).addClass("progress-text").text("0%");
  progressBarContainer.append(progressBar);
  progressBarContainer.append(progressText);
  popup2.append(messageDiv);
  if (popupType === "progress") {
    popup2.append(progressBarContainer);
    console.log("progress popup");
  }
  var spinnerContainer = $("<div>").addClass("spinner-container");
  var spinner = $("<i>").addClass("fa fa-spinner fa-spin spinner").attr("id", "popup-spinner-" + viewKey);
  spinnerContainer.append(spinner);
  if (popupType === "spinner") {
    popup2.append(spinnerContainer);
    console.log("spinner popup");
  }
  console.log(popup2.html());
  divSelector.css("position", "relative").append(popup2);
}
function updatePopupProgress(viewKey, progress) {
  $("#popup-progress-bar-" + viewKey).css("width", progress + "%");
  $("#progress-text-" + viewKey).text(Math.round(progress) + "%");
}
var popup = {
  add: (viewKey, message, popupType) => addPopup(viewKey, message, popupType),
  remove: (viewKey) => removePopup(viewKey),
  update: (viewKey, progress) => updatePopupProgress(viewKey, progress)
};

// messages/message.js
var msg = {
  popup
};

// index.js
var knackInterface = {
  msg
};
export {
  knackInterface
};
//# sourceMappingURL=bundle.js.map
