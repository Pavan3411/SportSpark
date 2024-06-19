import React, { useEffect, useState } from 'react';
import "./sportscard.css";
import axios from 'axios';


function  Sportscard() {

  const [livematch,setlivematch]=useState(true);
  const [upcoming, setupcoming]=useState(false);
  const [resultipl, setresultipl]=useState(false);
  const [upcomingSeries, setUpcomingSeries] = useState([]);
  const [news, setNews] = useState([]);
  const API_KEY = '37a6f3ee98c340be81b157bc24fabe12'; 

const handlelive = () => {
  setlivematch(true);
  setupcoming(false);
  setresultipl(false);
}
const handleupcoming = () => {
  setlivematch(false);
  setupcoming(true);
  setresultipl(false);
}
const handleresult = () => {
  setlivematch(false);
  setupcoming(false);
  setresultipl(true);
}

useEffect(() => {
  const fetchUpcomingSeries = async () => {
    const options = {
      method: 'GET',
      url: 'https://free-cricket-live-score1.p.rapidapi.com/matches',
      headers: {
        'X-RapidAPI-Key': 'd7710d330cmsh3b976a91d792354p150999jsn01537b814050',
        'X-RapidAPI-Host': 'free-cricket-live-score1.p.rapidapi.com'
      }
    };

    try {
      const response = await axios.request(options);
     
      // Filter IPL matches
      const iplMatches = response.data.res.matches.filter(match => {
        return match.srsKey === 'ipl_2024'; // Change 'ipl_2024' to match your desired IPL series key
      });

      // Now 'iplMatches' contains only IPL matches
      setUpcomingSeries(iplMatches);
      console.log(iplMatches);
    } catch (error) {
      console.error(error);
    }
  };

  if (upcoming) {
    fetchUpcomingSeries();
  }
}, [upcoming]);
useEffect(() => {
  const fetchNews = async () => {
    try {
      const response = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=${API_KEY}`);
      const data = await response.json();
      setNews(data.articles);
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };

  fetchNews();
}, []);


  

  return (
<div className='main-box'>
  <div className='sports-nav'>
    <nav className='nav-header'>
    <p className='nav-title active-link' onClick={handlelive}>Live</p>
    <p className='nav-title' onClick={handleupcoming}>Upcoming IPL Match</p>
    <p className='nav-title' onClick={handleresult}>Results</p>
    </nav>
    </div>
    
  {livematch && 
    
    (
    <div className='tab-contents active-tab'>
    <div className='left-column'>
      <div className='left-column-content'>
      <div className='live-details'>
    <h1>Live Match</h1>
    <p>Game 24 of 25 <span className='live-box'>Live</span></p>
    <p className='time'>Starts 4:30 PM<span className='bell'><i class="fa-solid fa-bell"></i></span></p>
    
    </div>
    <img src='https://tse1.mm.bing.net/th?id=OIP.bK1cAv_Gb-HBXnWX1-xFegHaGl&pid=Api&P=0&h=180' className='team-logo'/>
    <p>KKR       324/5(19.3)</p>
    <img src='https://tse1.mm.bing.net/th?id=OIP.PwJ7_DYK8aZ92wRhGqOMawHaFu&pid=Api&P=0&h=180' className='team-logo'/>
    <p>SRH     <span> Yet to Bat</span></p>
    <a href="https://www.stc.org/roundtable/wp-content/uploads/sites/34/2019/06/AI_Now_2018_Report.pdf" download class="btn">Download </a>
    </div>
    {/* <button className='live-video-button'>Live Video</button> */}
    <iframe src="https://indveng-criccoder.vercel.app/Hindi.html"  title="live-match-video"
    className='live-match-video'></iframe>
    </div>
    <div className='right-column'>
     <div className='team-header'>
     <p className='nav-title active-link'>KKR</p>
    <p className='nav-title'>SRH</p>
    </div> 
    

<div className='team-names'>
<div className='team-name-1'> 
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   <p>Rohit Sharma</p>
   <h6>Batsman</h6>
   </div>
   <div className='team-name-2'>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   <p>M S Dhoni</p>
   <h6>Wicketkeeper</h6>
   </div>

</div>
   
   
   
    </div>
    <div className="news-box-match">
      <h1>Top Sports Headlines</h1>
      <ul className="news-order">
        {news.map((article, index) => (
          <li key={index} className="news-list">
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              {article.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>

    )}
{upcoming && (
  
    <div className='tab-contents-upcoming'>


    <div className='left-column-upcoming'>
    {upcomingSeries.map(match => (
      <div key={match._id} class="match-card">
        <p class="match-details">{match.srs}</p>
        <p class="match-details-test">{match.matchSuffix}</p>
        <p class="match-teams">{match.teams.t1.name} vs {match.teams.t2.name}</p>
        <p class="match-info">Venue: {match.venue}</p>
        <p class="match-info">Time: {new Date(match.time * 1000).toLocaleString()}</p>
      </div>
    ))}
    </div>
    </div>

)
}
{resultipl && (
  <div className='result-main'>
    <div className='tab-contents-result'>

<div className='result-name'>
<h4>England Tour of India ,2024</h4>
</div>
<div className='result-detail'>
<h6><b>England vs India </b><span> 4th Test</span></h6> 

<p>Feb23 - Feb 27  .  9:30 AM at Ranchi, JSCA International Stadium Complex</p>
</div>

<div className='score-box'>
   <p> ENG   363 & 145</p>
   <p> IND   307 & 192-5</p>
   <h6> India won by 5 wkts</h6>
</div>
</div>
<div className='tab-contents-result'>

<div className='result-name'>
<h4>England Tour of India ,2024</h4>
</div>
<div className='result-detail'>
<h6><b>England vs India </b><span> 4th Test</span></h6> 

<p>Feb23 - Feb 27  .  9:30 AM at Ranchi, JSCA International Stadium Complex</p>
</div>

<div className='score-box'>
   <p> ENG   363 & 145</p>
   <p> IND   307 & 192-5</p>
   <h6> India won by 5 wkts</h6>
</div>
</div>
<div className='tab-contents-result'>

<div className='result-name'>
<h4>England Tour of India ,2024</h4>
</div>
<div className='result-detail'>
<h6><b>England vs India </b><span> 4th Test</span></h6> 

<p>Feb23 - Feb 27  .  9:30 AM at Ranchi, JSCA International Stadium Complex</p>
</div>

<div className='score-box'>
   <p> ENG   363 & 145</p>
   <p> IND   307 & 192-5</p>
   <h6> India won by 5 wkts</h6>
</div>
</div>
<div className='tab-contents-result'>

<div className='result-name'>
<h4>England Tour of India ,2024</h4>
</div>
<div className='result-detail'>
<h6><b>England vs India </b><span> 4th Test</span></h6> 

<p>Feb23 - Feb 27  .  9:30 AM at Ranchi, JSCA International Stadium Complex</p>
</div>

<div className='score-box'>
   <p> ENG   363 & 145</p>
   <p> IND   307 & 192-5</p>
   <h6> India won by 5 wkts</h6>
</div>
</div>


  </div>
    

)
}

    
</div>
  )
}

export default Sportscard;