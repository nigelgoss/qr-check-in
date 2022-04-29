<?php

require_once('connect.php');

$input = json_decode(file_get_contents('php://input'), true);

if ($input === null){
	http_response_code(400);
	die();
}

$query = <<<BLOCK

SELECT	DISTINCT
		A.[UNID],
		CONVERT(VARCHAR(17), A.EVENT_START_DATETIME, 113) [ApptDT],
		P.FORENAME_1,
		'07' [MobileNo],
		'a@b.com' [Email]

from TBL_OP_APPOINTMENTS A

INNER JOIN VW_PATIENT_DEMO P
on A.PATIENT_ID = P.PATIENT_ID

where A.EVENT_STATUS <> 'Canceled'
AND CAST(EVENT_START_DATETIME AS DATE) = CAST(GETDATE() AS DATE)
AND A.LOCATION_AREA = :Location
and LEFT(SURNAME, 1) = :Surname
and DATEPART(DD,DATE_OF_BIRTH) = :Day
and LEFT(DATENAME (MM, DATE_OF_BIRTH), 3) = :Month

BLOCK;

$db = $conn->prepare($query);
$db->execute($input);
$res = $db->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($res);

?>
