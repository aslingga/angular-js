<?php
$url = "batur.aslingga.dev/v2/notification/list?email=angga.sanjaya@lkpp.go.id";

//  Initiate curl
$ch = curl_init();
// Disable SSL verification
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
// Will return the response, if false it print the response
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
// Set the url
curl_setopt($ch, CURLOPT_URL,$url);
// Execute
$result=curl_exec($ch);
// Closing
curl_close($ch);

// Will dump a beauty json :3
/* var_dump(json_decode($result, true)); */
$notifications = json_decode($result);
?>
<h3>Notifikasi</h3>
<ol>
    <?php foreach ($notifications->data as $row): ?>
    <li><a href="<?php echo $row->targetUrl; ?>" target="_blank"><?php echo $row->message; ?></a> [<?php echo $row->appName; ?>] oleh <strong><?php echo $row->sender; ?></strong> <small><i><?php echo $row->createdDate; ?></i></small></li>
    <?php endforeach;?>
</ol>