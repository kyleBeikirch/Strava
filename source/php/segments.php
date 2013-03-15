<?
	$rideID    = $_GET['ride'];
	$raw_return = file_get_contents('http://app.strava.com/api/v1/rides/' . $rideID . '/efforts');
	echo $raw_return;

?>