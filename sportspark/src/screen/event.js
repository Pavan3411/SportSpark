import React from 'react'
import {Link} from "react-router-dom";
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';

function Event()  {

	const [list,setlist] = useState([]);
	useEffect(()=> {
		axios.get('http://localhost:7654/api/getevent').then((Response)=> {
			setlist(Response.data);
		})
	},[]);
	// const viewcatsports = (catid) => {
		// alert(catid);
        // var viewbutton = document.getElementById("viewbutton").value;
        // alert(viewbutton);
        // axios.post('http://localhost:7654/api/viewcatsports',{viewbutton:viewbutton}).then((Response)=> {
        //     alert(Response.data.message);
        // })
    // }
  return (
    <div>
    
	<div class="team" id="team">
		<div class="container">
			<div class="w3-team-head">
				<h3>Sports LineUp</h3>
				</div>
				<div class="agile_team_grids">
				{ list.map((val)=> {
                                        return(
                                    <>
			
				<div class="col-md-3 agile_team_grid team-left-w3l-agile ">
					<div class="agile_team_grid_main">
						<img src="images/t11.jpg" alt=" " class="img-responsive" />
						<div class="p-mask">
							<ul class="social-icons">
							 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li> <a href="#"><i class="fa fa-twitter"></i></a>  </li>
									
									<li><a href="#"><i class="fa fa-dribbble"></i></a> </li>

							</ul>
						</div>
					</div>
					<div class="agile_team_grid1">
						<h3>{val.category_name}</h3>
						<p>Get Updates Here</p>
					</div>
					
					<div class="view-button-event">
                                        {/* <button type="submit" class="btn btn-primary" onClick={()=> viewcatsports(val.category_id)}><a href="/vieweventsports" class="text-primary-1">View</a></button> */}
										<Link to='/vieweventsports' class='view-button-event' state={{catid:val.category_id}}>
												View
										</Link>
                                    </div>
					
					
				</div>
				

				</>)})}</div>
				{/* <div class="col-md-3 agile_team_grid team-left-w3l-agile">
					<div class="agile_team_grid_main">
					<img src="images/t22.jpg" alt=" " class="img-responsive" />
						<div class="p-mask">
							<ul class="social-icons">
							 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li> <a href="#"><i class="fa fa-twitter"></i></a>  </li>
									
									<li><a href="#"><i class="fa fa-dribbble"></i></a> </li>

							</ul>
						</div>
					</div>
					<div class="agile_team_grid1">
						<h3>FOOTBALL</h3>
						<p>Champions League Final</p>
					</div>
				</div> */}
				{/* <div class="col-md-3 agile_team_grid team-left-w3l-agile">
					<div class="agile_team_grid_main">
					<img src="images/t33.jpg" alt=" " class="img-responsive" />
						<div class="p-mask">
							<ul class="social-icons">
								 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li> <a href="#"><i class="fa fa-twitter"></i></a>  </li>
									
									<li><a href="#"><i class="fa fa-dribbble"></i></a> </li>

							</ul>
						</div>
					</div>
					<div class="agile_team_grid1">
						<h3>BASKETBALL</h3>
						<p>NBA Finals</p>
					</div>
				</div>
				<div class="col-md-3 agile_team_grid team-left-w3l-agile">
					<div class="agile_team_grid_main">
						<img src="images/t44.jpg" alt=" " class="img-responsive" />
						<div class="p-mask">
							<ul class="social-icons">
								 <li><a href="#"><i class="fa fa-facebook"></i></a></li>
									<li> <a href="#"><i class="fa fa-twitter"></i></a>  </li>
									
									<li><a href="#"><i class="fa fa-dribbble"></i></a> </li>

							</ul>
						</div>
					</div>
					<div class="agile_team_grid1">
						<h3>GOLF</h3>
						<p>The Masters Tournament</p>
					</div>
				</div> */}
				<div class="clearfix"> </div>
		
			
		</div>
	</div>
    </div>
  )
}

export default Event;