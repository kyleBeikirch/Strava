<?
	$riderID    = $_GET['rider'];
	$raw_return = file_get_contents('http://app.strava.com/api/v1/rides?athleteId=' . $riderID);
	echo $raw_return;

?>