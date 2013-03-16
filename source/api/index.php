<?php

require 'Slim/Slim.php';

$app = new Slim();

$app->get('/rider/:id',	'getRides');
$app->get('/effort/:id', 'getSegments');

$app->run();

function getRides($id) {
	$riderID    = $_GET['rider'];
	$raw_return = file_get_contents('http://app.strava.com/api/v1/rides?athleteId=' . $id);
	echo $raw_return;
}

function getSegments($id) {
	$rideID    = $_GET['ride'];
	$raw_return = file_get_contents('http://app.strava.com/api/v1/rides/' . $rideID . '/efforts');
	echo $raw_return;
}


?>