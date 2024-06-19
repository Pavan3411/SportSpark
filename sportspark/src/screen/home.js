import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Home(){
	const [list, setList]=useState([])

	useEffect(() => {
		// axios.get("http://localhost:7654/api/fetchmatch")
		// 	.then((response) => {
		// 		setList(response.data);
		// 	});
		
		const sliderId = 'JiSlider';
		window.intializeSlider(sliderId);
	}, []);
	


return(

<div class="banner-silder" id="home">
		<div id="JiSlider" class="jislider">
			<ul>
				<li>
					<div class="w3layouts-banner-top">

							<div class="container">
								<div class="agileits-banner-info">
									 <h3>Discover Sports Event </h3>
									 <p>Explore diverse events </p>
									
								</div>	
							</div>
						</div>
				</li>
				<li>
						<div class="w3layouts-banner-top w3layouts-banner-top1">
						<div class="container">
								<div class="agileits-banner-info">
									<h3>Live Event Updates</h3>
									 <p>Stay Updated in real time</p>
									
								</div>	
							</div>
						</div>
				</li>
				<li>
						<div class="w3layouts-banner-top w3layouts-banner-top2">
							<div class="container">
								<div class="agileits-banner-info">
									 <h3>Engaging Community Forums</h3>
									 <p>Join discussions with Fans</p>
								</div>	
								
							</div>
						</div>
					</li>

			</ul>
		</div>
<div class="banner-bottom">
		<div class="container" style={{marginLeft: '-60px'}}>
			<div class="banner_bottom_agile_grids">
				<div class="wthree_banner_bottom_right_grids">
					<div class="col-md-3 banner_bottom_right_grid">
						{/* {list.map((val) => {
							return(
						<> */}
						<div class="view view-tenth">
							<div class="agile_text_box">
								<i class="fa fa-eye" aria-hidden="true"></i>
								<h3>Individual Sports</h3>
								
								<p>lorem ipsum lorem ipsum</p>
							</div>
							<div class="mask">
								<img src="images/a1.jpg" class="img-responsive" alt="" />
							</div>
						</div>
						{/* </>
						)
						})} */}
					</div>
					<div class="col-md-3 banner_bottom_right_grid">
						<div class="view view-tenth">
							<div class="agile_text_box">
								<i class="fa fa-building-o" aria-hidden="true"></i>
								<h3>Team Sports</h3>
								<p>Feel the excitement of teams working together in fun sports events</p>
							</div>
							<div class="mask">
								<img src="images/a2.jpg" class="img-responsive" alt="" />
							</div>
						</div>
					</div>
				
					<div class="col-md-3 banner_bottom_right_grid">
						<div class="view view-tenth">
							<div class="agile_text_box">
								<i class="fa fa-eraser" aria-hidden="true"></i>
								<h3>Combat Sports</h3>
								<p>Get pumped as fighters go head-to-head in intense sports battles</p>
							</div>
							<div class="mask">
								<img src="images/a3.jpg" class="img-responsive" alt="" />
							</div>
						</div>
					</div>
					
					<div class="col-md-3 banner_bottom_right_grid">
						<div class="view view-tenth">
							<div class="agile_text_box">
								<i class="fa fa-pencil-square-o" aria-hidden="true"></i>
								<h3>Endurance Sports</h3>
								<p>Be amazed as athletes conquer tough challenges in exciting sports events</p>
							</div>
							<div class="mask">
								<img src="images/a4.jpg" class="img-responsive" alt="" />
							</div>
						</div>
					</div>
				 
					
					<div class="clearfix"> </div>
			</div>
			<div class="clearfix"> </div>
		</div>
	</div>
</div>


      </div>





);


}
export default Home;