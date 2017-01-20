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
			$TextGroup .= '<div class="port-modal-text-body"><p>To work with ViewFind is an extreme pleasure. They are a socially conscious group who are creating large waves in both the photojournalism, and corporate advertisement arenas. </p>
				<p>Most of my time was spent on maintaning, and improving on the existing website. Which would include bug fixes, and the creation of multi-media stories. The other half of my time was dedicated towards leading efforts in the creation of a new generation website. My most notable contribution is the storycreator, which is a webapp that allows users to upload images for our editorial staff to turn into visually stunning stories.</p></div>';
			$TextGroup .= '<div class="port-modal-text-link"><a href="http://www.viewfind.com">Checkout ViewFind</a></div>';
			$TextGroup .= '</div>';


		}
		elseif ($bannerName=='dk') {
			$PhotoGroup = '<div class="port-modal-images-inner">';
			$PhotoGroup .= '<img src="../assets/dk-port1.jpg" />';
			$PhotoGroup .= '<img src="../assets/dk-port2.jpg" />';
		
			$PhotoGroup .= '</div>';

			$TextGroup = '<div class="port-modal-text-inner">';
			$TextGroup .= '<div class="port-modal-text-header">Dolls Kill</div>';
			$TextGroup .= '<div class="port-modal-text-body"><p>DollsKill is a midsized ecommerce business, who does an amazing job at marketing and branding. Their flavor appeals to young females with a rebelous flair.</p>
				<p>When I worked with DK my main tasks were to update landing pages, for their ever changing campaigns. The DK site ran on Magento, so I had to pick up that cms rather quickly. My biggest contribution to the company was the animated header, and an improvement on their customer service email flow.</p></div>';
			$TextGroup .= '<div class="port-modal-text-link"><a href="http://www.dollskill.com/">Checkout Dolls Kill</a></div>';
			$TextGroup .= '</div>';

		}
		elseif ($bannerName=='pab') {
			$PhotoGroup = '<div class="port-modal-images-inner">';
			$PhotoGroup .= '<img src="../assets/pab-port1.jpg" />';
			$PhotoGroup .= '<img src="../assets/pab-port2.jpg" />';
		
			$PhotoGroup .= '</div>';

			$TextGroup = '<div class="port-modal-text-inner">';
			$TextGroup .= '<div class="port-modal-text-header">Precision Auto Body Shop</div>';
			$TextGroup .= '<div class="port-modal-text-body"><p>
			Family owned business are one of my personal favorites. Precision Auto Body is an honest shop founded by three brothers. It is pleasure to see local businesses doing great work. 
			</p>
				<p>My task was straightforward, create a brochure site with Wordpress. I also integrated Visualcomposer, which would allow the client to make future changes w/o coding.</p></div>';
			$TextGroup .= '<div class="port-modal-text-link"><a href="http://precisionautobodyshop.com/">Checkout Precision Auto Body Shop</a></div>';
			$TextGroup .= '</div>';
		}

	}

	$modal = '<div class="port-modal-wrapper"> ';
	$modal.= '<div class="port-modal-images">'.$PhotoGroup.'</div>';
	$modal.= '<div class="port-modal-detail">'.$TextGroup.'</div>';
	$modal.= '</div>';


	echo $modal;

	?>