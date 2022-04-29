<?php

$input = json_decode(file_get_contents('php://input'), true);

if($input === null || !isset($input['UNID']) ){
	http_response_code(400);
	die();
}

require_once('env.php');

$YmdHis = date('YmdHis');

$msg =	[
	'MSH|^~\&|ENLIGHTEN|KIOSK|IMPERIALTIE|IE|'.$YmdHis.'||SIU^Z01|'.$YmdHis.'|P|2.3',
	'SCH|'.$input['UNID'].'.000^HNAMSCHEVID|32119377.000^HNAMSCHEVID|||||||||^^^20220321080428||||||||||||||Checked In',
	'NTE|1|Scheduling Comments',
	'PID|1|31078673^^^RYJ MRN^MRN|31078673^^^RYJ MRN^MRN||xxx^xx^^^^^Current||||||^^^^^GBR^H^^""||^Home^^~^Mobile||""|||||||||||||||',
	'PD1|""|""|xxx^^F85669|G8736817^xx^xx^xx^^^^^External Id|""||""|""',
	'PV1|1|OUTPATIENT|||||||||||||||||13327605^^^RYJ Attendance Num^VISITID|||||||||||||||||||||||||20220321080428',
	'RGS|1',
	'AIL|1||^^^^^AMB^SM Main OPD|APPOINTMENT'
];

file_get_contents(TIE_URI, false, stream_context_create(['http' => ['timeout' => 3, 'content' => chr(28) . implode(chr(13), $msg) . chr(30)]]));

?>