<?php
try
{
// create PHP Data Object
$pdo = new PDO('mysql:host=localhost;dbname=glutenfree', 'root', 'mme2015');
$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->exec('SET NAMES "utf8"');
}
catch (PDOException $e)
{
$error = 'Unable to connect to the database server: '.$e->getMessage();
include 'error_inc.php';
exit();
}
/*
if($_POST['restaurants']){
    include("glutenfree.php");
    $name = msyql_escape_String($_POST['name']);
    $adress = msyql_escape_String($_POST['adress']);
    $zip = msyql_escape_String($_POST['zip'])
    $country = msyql_escape_String($_POST['country'])
    $cuisine = msyql_escape_String($_POST['cuisine'])

    $sql = "insert into restaurants 
            values ($name , $adress, $zip, $country, $cuisine)";
}*/


$sql = 'INSERT INTO restaurants SET
name = :name,
adress = :adress,
zip = :zip,
country = :country,
cuisine = :cuisine;
$s = $pdo->prepare($sql);

$s->bindValue(':name', $_POST['name']);
$s->bindValue(':adress', $_POST['adress']);
$s->bindValue(':zip', $_POST['zip']);
$s->bindValue(':country',  $_POST['country']);
$s->bindValue(':zip', $_POST['cuisine']); //optional, not required
$s->execute();
$response = array('message' => 'insert done');
} catch (PDOException $e) {
$error = 'Error adding user: ' . $e->getMessage();
$response = array('databaseError' => $error);
$json = json_encode($response); // return json
echo $json;
}

?>