// Wait for document to be ready
$(document).ready(function() {
    $("#clickBtn").click(function() {
        // Generate random color
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        let color = "rgb(" + r + ", " + g + ", " + b + ")";
        // jQuery .css() method
        $("body").css("background-color", color);
    });
});
