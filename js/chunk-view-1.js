var hello = "hello";

function loadScript(url) {
    var script = document.createElement("script"); //Make a script DOM node
    script.src = url; //Set it's src to the provided URL
    document.head.appendChild(script); //Add it to the end of the head section of the page (could change 'head' to 'body' to add it to the end of the body section instead)
}


$(document).ready(function(){
    $(".text1").text(hello);
    $("button.click-me").on("click", function(){
        loadScript("js/chunk-view-2.js");
    });
});
