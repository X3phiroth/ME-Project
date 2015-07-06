$(document).ready(function () {
    $("#bildwechsel").fadeSlideShow({
        width: 500,
        height: 300,
        speed: "slow",
        interval: 5000
    });
    $(".text1").toggle();
    $("#showMore").click(function () {
        var $this = $(this);
        $this.text($this.text() === "Show Less" ? "Show More" : "Show Less");
        // $(this).text("Show Less");
        $(".text1").toggle();
    });
});
