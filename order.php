<?php

$array = json_decode($_POST["cart"], true);
$item = $array[0];
$total = 0;
try {
    // Connect to the database.
    $con = new PDO("mysql:host=localhost;dbname=tester", "Tester", "Tester");
    $con->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    // Prepared statement query.
    $query = "SELECT price " .
        "FROM shoppingcart " .
        "WHERE itemName = :name ";
    $ps = $con->prepare($query);
    $ps->bindParam(':name', $item);

    foreach ($array as $single) {
        $ps->execute();
        $row = $ps->setFetchMode(PDO::FETCH_ASSOC);
        $total = $total + $row;
    }

    return $total;

} catch (PDOException $ex) {
    print 'ERROR: ' . $ex->getMessage();
}

?>