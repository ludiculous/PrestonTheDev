<?php

$bannerName = $_POST['bannerName'];
$PhotoGroup = '';
$TextGroup = '';

if(isset($bannerName)){
	if($bannerName=='vf'){
		$PhotoGroup = '<div class="port-modal-images-inner">';
		$PhotoGroup .= '<img src="../assets/vf-port1.jpg" />';
		$PhotoGroup .= '<img src="../assets/vf-port2.jpg" />';
		$PhotoGroup .= '<img src="../assets/vf-port3.jpg" />';

		$PhotoGroup .= '</div>';

		$TextGroup = '<div class="port-modal-text-inner">';
		$TextGroup .= '<div class="port-modal-text-header">ViewFind</div>';
		$TextGroup .= '<div class="port-modal-text-body"><p>To work with ViewFind is an extreme pleasure. They are a very socially conscious group of people who </p><p>Most of my time was spent on maintaning, and improving on the existing website. Which would include bug fixes, and the creation of multi-media stories.</p></div>';
		$TextGroup .= '<div class="port-modal-text-link"><a href="http://www.viewfind.com">Checkout ViewFind</a></div>';
		$TextGroup .= '</div>';


	}
	elseif ($bannerName=='dk') {
		$PhotoGroup = 'DollsKill Stuff';
	}
	elseif ($bannerName=='pab') {
		$PhotoGroup = 'Precision Auto Body Stuff';
	}

}

$modal = '<div class="port-modal-wrapper"> ';
$modal.= '<div class="port-modal-images">'.$PhotoGroup.'</div>';
$modal.= '<div class="port-modal-detail">'.$TextGroup.'</div>';
$modal.= '</div>';


echo $modal;

?>