import axios from "axios";
import "./viewmatch.css";
import React,{ useState, useEffect, useRef } from 'react';
import { useReactToPrint} from "react-to-print"

function Viewmatch({applystyles})  {
  const API_KEY = '37a6f3ee98c340be81b157bc24fabe12';
  let city= JSON.parse(sessionStorage.getItem('user_login'))
  let cn = city.cn
  const componentpdf = useRef();

  
  // alert(user_id)

  // alert(cn);

  // const location = useLocation();
  // const event_id = location.state.event_id;
  // alert(event_id)
    
    const [cricketscore,setcricketscore]=useState(false);
    const [schedule,setschedule]=useState(false);
    const [resultlocal,setresultlocal]=useState(false);
    const [matchinfo,setmatchinfo]=useState(true)
    const [list,setlist]=useState([])
    const [paymentCompleted, setPaymentCompleted] = useState(false);

    useEffect(()=> {
      axios.get("http://localhost:7654/api/getlocalinfo", { params: { city:cn},
      headers: {
        authorization: sessionStorage.getItem('authToken')
  
      } }
     
    ).then((Response) => {
      setlist(Response.data);
      });
    } ,[]);

  const handlescore = () => {
    setcricketscore(true);
    setschedule(false);
    setresultlocal(false);
    setmatchinfo(false);
  }      
  const handleschedule = () => {
    setcricketscore(false);
    setschedule(true);
    setresultlocal(false);
    setmatchinfo(false);
    
  }
  const handleresult = () => {
    setcricketscore(false);
    setschedule(false);
    setresultlocal(true);
    setmatchinfo(false);
  }   
  const handleinfo = () => {
    setcricketscore(false);
    setschedule(false);
    setresultlocal(false);
    setmatchinfo(true);
  }
  // useEffect(() => {
  //   alert("");
  //   const fetchliveiplscore = async() => {
  //     alert('i m in ');
  //     const options = {
  //       method: 'GET',
  //       url: 'https://ipl-2023-live-scores-match-details-and-points-table-api.p.rapidapi.com/getPointsTable',
  //       headers: {
  //         'X-RapidAPI-Key': '2138dc3ad6msh74c8bf1ebb0221fp150fc8jsnaf9705c9eb46',
  //         'X-RapidAPI-Host': 'ipl-2023-live-scores-match-details-and-points-table-api.p.rapidapi.com'
  //       }
  //     };
      
      
  //       const response = await axios.request(options);
  //       alert("check");
  //       alert(response.data);
  //       console.log(response.data);
     
  //   };
  //   if (cricketscore) {
  //     fetchliveiplscore();
  //   }
  // }, [cricketscore]);

  
  const handlePayment = () => {
    var merchant_order_id = Math.floor(Math.random() * 90000) + 10000;
    let amount;
    let user= JSON.parse(sessionStorage.getItem('user_login'))
    let user_id = user.user_id
    
    
    // const total = calculateTotal();
    const total = parseInt(199)

    const opt = {
        "key": "rzp_test_z61IaQhel6npTv",
        "amount": total * 100, 
        "name": "SportSpark",
        "description": "purchase schedule",
        "currency": "INR",
        "netbanking": true,
        "prefill": { 
            name: "Pavan Suthar",
            email: "sutharpavan9153@gmail.com",
            contact: 9328496120,
        },
        "notes": {
          soolegal_order_id: merchant_order_id,
        },
        "handler": function (response) {
            axios.post("http://localhost:7654/api/orderinsert", {
                amount: total,
                user_id : user_id
                // console.log(amount);
                // console.log(user_id);
                // event_id : event_id
            }).then((response) => {
              console.log(response.data);
      setPaymentCompleted(true);
      alert("Payment successful!");
      generatepdf();
    }).catch((error) => {
      console.error("Error inserting data:", error);
      alert("Failed to process payment. Please try again.");
    });
        },
        "theme": {
            "color": "#528FF0"
        }
    };

    var rzp1 = new window.Razorpay(opt);
    rzp1.open();


};
const generatepdf = useReactToPrint({
  content: ()=> componentpdf.current,
  documentTitle:"cricket-schedule",
  onAfterPrint:()=> alert("Pdf downloaded")
});
const handleDownload = () => {
  if (paymentCompleted) {
    generatepdf();
  } else {
    alert("Please make the payment first.");
    handlePayment();
  }
};
// useEffect(() => {
//   if (!paymentCompleted) {
//     handlePayment();
//   }
// }, []);

      
  return (
    <div>
    <div className='viewmatch-box'>
    {applystyles && <link rel='stylesheet' type='css' href='./viewmatch.css'/>}
        <nav className='navbar-match'>
        <ul className='match-ul'>
            <li className='menu-match'> <a className='match-link' onClick={handlescore}>Live Cricket Score</a> </li>
            <li className='menu-match'> <a className='match-link' onClick={handleschedule}>Cricket Schedule</a> </li>
            <li className='menu-match' onClick={handleresult}> <a className='match-link'>Match Results</a> </li>
            <li className='menu-match'> <a className='match-link' onClick={handleinfo}>Match Info</a> </li>
            <li className='menu-match'> <a className='match-link'>Commentary</a> </li>
            <li className='menu-match'> <a className='match-link'>Commentary</a> </li>
            <li className='menu-match'> <a className='match-link'>Commentary</a> </li>
        </ul>
        </nav>
        {cricketscore && (
          <div className="main-cricket-score">
            <div className="live-box-inf">
              <h6>Live Match</h6>
            </div>
          </div>
        )}
        
        {schedule && (
          <div>
            <div ref={componentpdf} style={{width:"100%"}}>
        <div> 
          <div className="match-date-content"> 
          <p className="date-content">Thur,04,April</p></div>
          <div className="match-content-live">
            <div className="time-local-GMT"><p>11:30 am</p>
          <p>6:00 am GMT 12:00 pm Local</p>
          </div>
          <div className="about-match-local">
            <p>Bangladesh Women vs Australia Women</p>
            <p>3rd T20I, Mirpur, April 04, 2024</p>
          </div>
          <div className="local-match-name">
            <p>Australia Women Tour of Bangladesh</p>
          </div>
          </div>
          <div className="match-content-live">
            <div className="time-local-GMT"><p>11:30 am</p>
          <p>6:00 am GMT 12:00 pm Local</p>
          </div>
          <div className="about-match-local">
            <p>Bangladesh Women vs Australia Women</p>
            <p>3rd T20I, Mirpur, April 04, 2024</p>
          </div>
          <div className="local-match-name">
            <p>Australia Women Tour of Bangladesh</p>
          </div>
          </div>
          <div className="match-content-live">
            <div className="time-local-GMT"><p>11:30 am</p>
          <p>6:00 am GMT 12:00 pm Local</p>
          </div>
          <div className="about-match-local">
            <p>Bangladesh Women vs Australia Women</p>
            <p>3rd T20I, Mirpur, April 04, 2024</p>
          </div>
          <div className="local-match-name">
            <p>Australia Women Tour of Bangladesh</p>
          </div>
          </div>
          <div className="match-content-live">
            <div className="time-local-GMT"><p>11:30 am</p>
          <p>6:00 am GMT 12:00 pm Local</p>
          </div>
          <div className="about-match-local">
            <p>Bangladesh Women vs Australia Women</p>
            <p>3rd T20I, Mirpur, April 04, 2024</p>
          </div>
          <div className="local-match-name">
            <p>Australia Women Tour of Bangladesh</p>
          </div>
          </div>
          
        </div>
        <div> 
          <div className="match-date-content">  
          <p className="date-content">Fri,05,April</p></div>
          <div className="match-content-live">
            <div className="time-local-GMT"><p>11:30 am</p>
          <p>6:00 am GMT 12:00 pm Local</p>
          </div>
          <div className="about-match-local">
            <p>Bangladesh Women vs Australia Women</p>
            <p>3rd T20I, Mirpur, April 05, 2024</p>
          </div>
          <div className="local-match-name">
            <p>Australia Women Tour of Bangladesh</p>
          </div>
          </div>
          <div className="match-content-live">
            <div className="time-local-GMT"><p>11:30 am</p>
          <p>6:00 am GMT 12:00 pm Local</p>
          </div>
          <div className="about-match-local">
            <p>Bangladesh Women vs Australia Women</p>
            <p>3rd T20I, Mirpur, April 05, 2024</p>
          </div>
          <div className="local-match-name">
            <p>Australia Women Tour of Bangladesh</p>
          </div>
          </div>
          
        </div>
        </div>
        <div>
          <button className="download-schedule" onClick={handleDownload}>Download</button>
        </div>
        </div>
        )}
        {resultlocal && (
          <div className="main-result-local">
          <div className="result-local-container">
            <div className="top-result">
              <h6 className="local-event-league" >Dhaka Premier Division Cricket League <span><a  className='see-all 'href="">See all</a></span></h6>
          
          </div>
          <div className="bottom-result">
            <div className="left-col-result">
              <p>RESULT</p>
              <p>46th Match, Fatullah, April 03, 2024, <a className="see-all" href="/">Dhaka Premier Division Cricket League</a></p>
              <p>Gazi Tyres Cricket Academy <span>84</span></p>
              <p>Gazi Group Cricketers <span>(19.3/50ov, T:85)86/1</span></p>
              <p>Gazi Group won by 9 wickets (with 183 balls remaining)</p>
              <p className="line"></p>
              <p> Summary <span style={{marginLeft: '50px'}}>Series</span></p>
              
            </div>
            <div className="right-col-result">
            <p>RESULT</p>
              <p>46th Match, Fatullah, April 03, 2024, <a className='see-all'href="/">Dhaka Premier Division Cricket League</a></p>
              <p>Gazi Tyres Cricket Academy <span>84</span></p>
              <p>Gazi Group Cricketers <span>(19.3/50ov, T:85)86/1</span></p>
              <p>Gazi Group won by 9 wickets (with 183 balls remaining)</p>
              <p className="line"></p>
              <p> Summary <span style={{marginLeft: '50px'}}>Series</span></p>

            </div>
          </div>
          </div>
          <div className="result-local-container">
            <div className="top-result">
              <h6 className="local-event-league">Dhaka Premier Division Cricket League<span><a  className='see-all 'href="">See all</a></span></h6>
          
          </div>
          <div className="bottom-result">
            <div className="left-col-result">
              <p>RESULT</p>
              <p>46th Match, Fatullah, April 03, 2024, <a className='see-all' href="/">Dhaka Premier Division Cricket League</a></p>
              <p>Gazi Tyres Cricket Academy <span>84</span></p>
              <p>Gazi Group Cricketers <span>(19.3/50ov, T:85)86/1</span></p>
              <p>Gazi Group won by 9 wickets (with 183 balls remaining)</p>
              <p className="line"></p>
              <p> Summary <span style={{marginLeft: '50px'}}>Series</span></p>
              
            </div>
            <div className="right-col-result">
            <p>RESULT</p>
              <p>46th Match, Fatullah, April 03, 2024, <a className='see-all'href="/">Dhaka Premier Division Cricket League</a></p>
              <p>Gazi Tyres Cricket Academy <span>84</span></p>
              <p>Gazi Group Cricketers <span>(19.3/50ov, T:85)86/1</span></p>
              <p>Gazi Group won by 9 wickets (with 183 balls remaining)</p>
              <p className="line"></p>
              <p> Summary <span style={{marginLeft: '50px'}}>Series</span></p>

            </div>
          </div>
          </div>
          <div className="result-local-container">
            <div className="top-result">
              <h6 className="local-event-league">Dhaka Premier Division Cricket League<span><a  className='see-all 'href="">See all</a></span></h6>
          
          </div>
          <div className="bottom-result">
            <div className="left-col-result">
              <p>RESULT</p>
              <p>46th Match, Fatullah, April 03, 2024, <a className='see-all' href="/">Dhaka Premier Division Cricket League</a></p>
              <p>Gazi Tyres Cricket Academy <span>84</span></p>
              <p>Gazi Group Cricketers <span>(19.3/50ov, T:85)86/1</span></p>
              <p>Gazi Group won by 9 wickets (with 183 balls remaining)</p>
              <p className="line"></p>
              <p> Summary <span style={{marginLeft: '50px'}}>Series</span></p>
              
            </div>
            <div className="right-col-result">
            <p>RESULT</p>
              <p>46th Match, Fatullah, April 03, 2024, <a className='see-all'href="/">Dhaka Premier Division Cricket League</a></p>
              <p>Gazi Tyres Cricket Academy <span>84</span></p>
              <p>Gazi Group Cricketers <span>(19.3/50ov, T:85)86/1</span></p>
              <p>Gazi Group won by 9 wickets (with 183 balls remaining)</p>
              <p className="line"></p>
              <p> Summary <span style={{marginLeft: '50px'}}>Series</span></p>

            </div>
          </div>
          </div>
          </div>
        )}
      {matchinfo && (
                <div className="match-info-main">
                  {list.map((val)=>{
                    return(
                      <div className="info-border">

                    <div className="search-match">
                        <label htmlFor="search">Search:</label>
                        <input type="search" id="search" />
                        <h6 className="city-inf">City: <span>{val.city}</span></h6>
                    </div>
                    <div className="match-info-1">
                        <div>
                            <p>Category: <span>{val.category_name}</span></p>
                            <p>Sport: <span>{val.sports_name}</span></p>
                        </div>
                        <div>
                            <h5>{val.event_name}</h5>
                            <p>Start Date: <span>{val.event_startdate}</span></p>
                            <p>End Date: <span>{val.event_enddate}</span></p>
                            
                        </div>
                    </div>
                    <div className="description-match-info">
                        <p>Description: <span>{val.description}</span></p>
                        <p>{matchinfo.amountType === 'premium' ? `Amount: ${val.amount}` : 'Free'}</p>
                        <p>{val.local ? 'Local Match' : 'National Match'}</p>
                    </div>
                    </div>
                    )
                  })}
                </div>
            )}
    </div>
    </div>
  )
}

export default Viewmatch;