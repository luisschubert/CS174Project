$(init);
function init()
{
    //cloneDragMe();
    $(".dragMe").draggable();
    $('#makeMeDroppable').droppable( {
        drop: handleDropEvent
    } );
    //$("#target").droppable();
    //$("#target").bind("drop", highlightTarget);
    //$("#target").bind("dropout", resetTarget);

    $("div").addClass("ui-widget")
            .addClass("ui-widget-content")
            .addClass("ui-corner-all");
    $(":header").addClass("ui-widget-header")
                .addClass("ui-corner-all");
}

function handleDropEvent( event, ui ) {
    console.log("faggot!!!!");
    var draggable = ui.draggable;
    alert( 'The square with ID "' + draggable.attr('id') + '"has been added to the shopping cart!' );
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