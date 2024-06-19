import React from 'react'

import { useEffect } from "react";

function Testimonial() {
 useEffect (()=>{

      const testsliderid= 'owl-demo2';
    //  alert(testsliderid);
        window.intializeSlider1(testsliderid);
    
       },[])
   return (
    <div>
        <div class="test" id="testimonials">
	<div class="container">
	<div class="col-md-3 test-left-agileinfo">
	<h3 class="tittle-agileits-w3layouts">Testimonials</h3>
	</div>
		<div class="col-md-9 test-gr">
					<div class=" test-gri1">
					 <div id="owl-demo2" class="owl-carousel">
							<div class="agile">
							   	<div class="test-grid">
							   		<div class="col-md-8 test-grid1">
										<p class="para-w3-agile">SportSpark has made it so easy for me to keep up with all my favorite sports events. I love how user-friendly the platform is, and the real-time updates ensure I never miss a moment of the action!</p>
										<h4>Steve M.</h4>
										<span>Sports Fan</span>
									</div>	
									<div class="col-md-4 test-grid2">
										<img src="images/t1.jpg" alt="" class="img-r"/>
									</div>
								</div>	
								<div class="clearfix"></div>
							</div>
							<div class="agile">
							   	<div class="test-grid">
							   		<div class="col-md-8 test-grid1">
										<p class="para-w3-agile">I've been using SportSpark for a while now, and I can't imagine following sports without it. The personalized recommendations have introduced me to new events I never would have discovered otherwise. Highly recommend!</p>
										<h4>Emily B</h4>
										<span>Enthusiastic Viewer</span>
									</div>	
									<div class="col-md-4 test-grid2">
										<img src="images/t6.jpg" alt="" class="img-r"/>
									</div>
								</div>	
								<div class="clearfix"></div>
							</div>
							<div class="agile">
							   	<div class="test-grid">
							   		<div class="col-md-8 test-grid1">
										<p class="para-w3-agile">SportSpark has become my go-to platform for staying connected with the sports world. The comprehensive event listings and seamless navigation make it easy to find and enjoy all my favorite matches. I highly recommend it to all sports enthusiasts!</p>
										<h4>Alex S</h4>
										<span>Dedicated Spectator</span>
									</div>	
									<div class="col-md-4 test-grid2">
										<img src="images/t3.jpg" alt="" class="img-r"/>
									</div>
								</div>	
								<div class="clearfix"></div>
							</div>
							<div class="agile">
							   	<div class="test-grid">
							   		<div class="col-md-8 test-grid1">
										<p class="para-w3-agile">SportSpark has truly enhanced my sports viewing experience. The interactive features like live updates and community discussions make me feel more connected to the sports world. It become my go-to platform for all things sports!</p>
										<h4>Chris H</h4>
										<span>Sports Lover</span>
									</div>	
									<div class="col-md-4 test-grid2">
										<img src="images/t5.jpg" alt="" class="img-r"/>
									</div>
								</div>	
								<div class="clearfix"></div>
							</div>	
					</div>
				</div>	
		</div>
	</div>
</div>
<div class="banner-info">
	<div class="dott">
    <div class="wrapper agileinfo">
	<h3>FOOTBALL - Premier League 2024</h3>
        <div class="clock">
            <div class="column w3l days">
                <div class="timer w3" id="days"></div>
                <div class="aits text">DAYS</div>
            </div>
            <div class="column w3">
                <div class="timer w3layouts" id="hours"></div>
                <div class="agileits text">HOURS</div>
            </div>
         
            <div class="column wthree">
                <div class="timer w3las" id="minutes"></div>
                <div class="text aits">MINUTES</div>
            </div>
            
            <div class="column siteliga">
                <div class="timer stuoyal3w" id="seconds"></div>
                <div class="text wthree">SECONDS</div>
            </div>
        </div>
			<div class="w3-border-bottom">
				<h3>Geared up to view the match?</h3>
			</div>
          
        
    </div>
</div>
</div>
    </div>
  )
}

export default Testimonial;