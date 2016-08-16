<?php

include_once 'dbconfig.php';
$db = new Database();

if($_REQUEST['api'] == 'users') {
$result = $db->select();
$user = json_encode($result);
echo $user;
}

if($_REQUEST['api'] == 'user' && $_REQUEST['uid'] != '') {
$uId = $_REQUEST['uid'];    
$result = $db->getUser($uId);
$user = json_encode($result);
echo $user;
}

if($_REQUEST['api'] == 'saveUser' && $_REQUEST['data'] != '') {
$userData = json_decode($_REQUEST['data'], true);
$fname = $userData['firstname'];
$email = $userData['emailaddress'];
$state = $userData['state'];
$city = $userData['city'];
$result = $db->saveUser($userData);
echo $result;
}

?>
