$(init);
total = new Array();
function init()
{
    //cloneDragMe();
    $(".dragMe").draggable();
    $('#droppable').droppable( {
        drop: handleDropEvent
    } );

    jQuery.data
}

function handleDropEvent( event, ui ) {
    var draggable = ui.draggable;
    //alert( 'The square with ID "' + draggable.attr('id') + '"has been added to the shopping cart!' );
    $("#output-result").append("<br> "+draggable.attr('id') + "</br>");
    total.push(draggable.attr('id'));
    deleteImage( ui.draggable);
    testArray();
}

function deleteImage( $item ) {
    $item.fadeOut(function() {

    });
    //$item.appendTo("cart-area").fadeIn;
}

function testArray() {
    for (var i in total) {
        alert(total[i]);
    }
}

function sentCart() {
    alert('sending');
}
