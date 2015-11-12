$(init);
function init()
{
    //cloneDragMe();
    $(".dragMe").draggable();
    $('#droppable').droppable( {
        drop: handleDropEvent
    } );
}

function handleDropEvent( event, ui ) {
    console.log("faggot!!!!");
    var draggable = ui.draggable;
    alert( 'The square with ID "' + draggable.attr('id') + '"has been added to the shopping cart!' );
}
