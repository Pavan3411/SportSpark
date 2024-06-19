import React from 'react'

function Gallery() {
  return (
    <div>
        <div class="works" id="gallery">
		<div class="container">
			<div class="services-heading">
				<h3>Sporting Shots</h3>
				<div class="border border2"> </div>
			</div>
			<div class="gallery-grids">
				<div class="col-md-6 gallery-grids-left">
					<div class="gallery-grid">
						<a class="example-image-link" href="images/run.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
							<img src="images/run.jpg" alt="" />
						</a>
					</div>
					<div class="gallery-grids-left-sub">
						<div class="col-md-6 gallery-grids-left-subl">
							<div class="gallery-grid"><a class="example-image-link" href="images/golf-grass.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
									<img src="images/golf-grass.jpg" alt="" />
								</a>
							</div>
							<div class="gallery-grid gallery-grid-sub">
								<a class="example-image-link" href="images/indcricket.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
									<img  class="cricket" src="images/indcricket.jpg" alt="" />
								</a>
							</div>
						</div>
						<div class="col-md-6 gallery-grids-left-subr">
							<div class="gallery-grid">
								<a class="example-image-link" href="images/w4.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
									<img  className='football' src="images/w4.jpg" alt="" />
								</a>
							</div>
						</div>
						<div class="clearfix"> </div>
					</div>
				</div>
				<div class="col-md-6 gallery-grids-left">
					<div class="col-md-6 gallery-grids-right">
						<div class="gallery-grid">
							<a class="example-image-link" href="images/tennis.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
								<img class="tennis" src="images/tennis.jpg" alt="" />
							</a>
						</div>
					</div>
					<div class="col-md-6 gallery-grids-right">
						<div class="gallery-grid">
							<a class="example-image-link" href="images/athletics.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
								<img class="athletics" src="images/athletics.jpg" alt="" />
							</a>
						</div>
					</div>
					<div class="clearfix"> </div>
					<div class="gallery-grids-right1">
						<div class="gallery-grid">
							<a class="example-image-link" href="images/swimming.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
								<img class="swimming" src="images/swimming.jpg" alt="" />
							</a>
						</div>
					</div>
					<div class="col-md-6 gallery-grids-right">
						<div class="gallery-grid">
							<a class="example-image-link" href="images/basket.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
								<img class="basketball" src="images/basket.jpg" alt="" />
							</a>
						</div>
					</div>
					<div class="col-md-6 gallery-grids-right">
						<div class="gallery-grid">
							<a class="example-image-link" href="images/rugbyy.jpg" data-lightbox="example-set" data-title="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae cursus ligula">
								<img  class="rugby" src="images/rugbyy.jpg" alt="" />
							</a>
						</div>
					</div>
					<div class="clearfix"> </div>
				</div>
				<div class="clearfix"> </div>
				<script src="js/lightbox-plus-jquery.min.js"> </script>
			</div>
		</div>
	</div>
    </div>
  )
}

export default Gallery;