$(init);
function init()
{
    //cloneDragMe();
    $(".dragMe").draggable();
    $("#target").droppable();
    $("#target").bind("drop", highlightTarget);
    $("#target").bind("dropout", resetTarget);

    $("div").addClass("ui-widget")
            .addClass("ui-widget-content")
            .addClass("ui-corner-all");
    $(":header").addClass("ui-widget-header")
                .addClass("ui-corner-all");
}
function cloneDragMe()
{
    console.log("fuck you i do what i want");
    for (i = 1; i <= 1; i++){
        zValue = 101 + i;
        yPos = 100 + 20*i + "px";
        $("div:first").clone()
                      .insertAfter("div:last")
                      .css("top", yPos)
                      .css("zIndex", zValue)
                      .append(" #" + i);
    }
}
function highlightTarget(event, ui)
{
    $("#target").addClass("ui-state-highlight")
                .html("Dropped ")
                .append(ui.draggable.text());
} 
function resetTarget(event, ui)
{
    $("#target").removeClass("ui-state-highlight")
                .html("Drop on me");
}