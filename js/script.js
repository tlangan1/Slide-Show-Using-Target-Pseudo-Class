"use strict";

// This line of code executes when the page the script is loaded
addEventListener("load", onLoad);

// -------------------------------------------------------------
// The helper functions for the executable code above

// This function gets executed when the web page loading this script finishes loading
function onLoad(event) {
  var pageNumber = 1;

  document.querySelector(".initial-page").click();

  document
    .querySelector(".previous-page")
    .addEventListener("click", onPreviousPageClick);

  document
    .querySelector(".next-page")
    .addEventListener("click", onNextPageClick);

  // --------------------------------------------------
  // The helper functions for the executable code above

  function onPreviousPageClick(event) {
    pageNumber -= 1;
    document.querySelector(".next-page").href = "#p" + (pageNumber + 1);
    document.querySelector(".previous-page").href = "#p" + pageNumber;

    document.querySelector(".next-page").attributes["more_pages"].value = true;
    if (!document.querySelector("#p" + (pageNumber - 1))) {
      document.querySelector(".previous-page").attributes[
        "more_pages"
      ].value = false;
    }
  }

  function onNextPageClick(event) {
    pageNumber += 1;
    document.querySelector(".next-page").href = "#p" + pageNumber;
    document.querySelector(".previous-page").href = "#p" + (pageNumber - 1);

    document.querySelector(".previous-page").attributes[
      "more_pages"
    ].value = true;
    if (!document.querySelector("#p" + (pageNumber + 1))) {
      document.querySelector(".next-page").attributes[
        "more_pages"
      ].value = false;
    }
  }
}
