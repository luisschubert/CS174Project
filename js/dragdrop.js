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
    var draggable = ui.draggable;
    alert( 'The square with ID "' + draggable.attr('id') + '"has been added to the shopping cart!' );
    $("#output-result").append("<br> "+draggable.attr('id') + "</br>");
    deleteImage( ui.draggable);
}

function deleteImage( $item ) {
    $item.fadeOut(function() {

    });
    //$item.appendTo("cart-area").fadeIn;
}
