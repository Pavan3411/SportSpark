import React, {useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


function Header() {
  let user = JSON.parse(sessionStorage.getItem('user_login'));
  const user_logout = () => {
    alert();
    sessionStorage.clear();
    window.location = '/';
  }
  const [input, setInput] = useState('');
  const [sportsData, setSportsData] = useState(null); // State to store fetched sports data

  cons
    fetch(`http://localhost:3000/vieweventsports?q=${input}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setSportsData(data); // Store fetched sports data in state
      })
      .catch((error) => {
        console.error('Error fetching sports data:', error);
        // Handle errors (e.g., show error message to user)
      });
  };

  const handleChange = (e) => {
    setInput(e.target.value); // Update input state with current value
  };
  return (
    <div>
      <div className="main_section_agile">
        <div className="agileits_w3layouts_banner_nav">
          <nav className="navbar navbar-default">
            <div className="navbar-header navbar-left" style={{display:'content'}}>
              <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <h1 className="project-name" style={{ display: 'inline-block', verticalAlign: 'middle' }}>SportSpark</h1>
              <div className="search-box" style={{ display: 'inline-block' }}>
              <input type="search" value={input}
                  onChange={handleChange} name="search" id="search-container" placeholder="Search Events" />
                <button className='search-button'  onClick={fetchData} ><FontAwesomeIcon icon={faSearch} /></button>
              </div>
            </div>
            <div className="collapse  navbar-right" id="bs-example-navbar-collapse-1" style={{display:"flex"}}>
              <nav className="menu--iris">
                <ul className="nav navbar-nav menu__list" style={{ display: 'inline-block', float: 'right' }}>
                  <li className="menu__item "><a href="/" className='menu__link scroll' >Home</a></li>
                  <li className="menu__item"><a href="/about" className="menu__link scroll">About</a></li>
                  <li className="menu__item"><a href="/event" className="menu__link scroll">Events</a></li>
                  <li className="menu__item"><a href="/gallery" className="menu__link scroll">Gallery</a></li>
                  <li className="menu__item"><a href="/testimonial" className="menu__link scroll">Testimonial</a></li>
                  {sessionStorage.getItem('user_login') == null ?
                    <>
                      <li className="menu__item"><a href="/login" className="menu__link scroll">Login</a></li>
                    </>
                    :
                    <>
                      <li className=""><a href="/login" className="">{user && user.user_fname}</a></li>
                      <li className="menu__item"><a onClick={() => user_logout()} className="menu__link scroll" href="#">LogOut</a></li>
                    </>
                  }
                  <li className="menu__item"><a href="contact" className="menu__link scroll">Contact Us</a></li>
                </ul>
              </nav>
            </div>
          </nav>
        </div>
      </div>
      {sportsData && (
        <div className="sports-results">
          <h2>Search Results</h2>
          <ul>
            {sportsData.map((sport) => (
              <li key={sport.id}>{sport.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
  
}


export default Header;