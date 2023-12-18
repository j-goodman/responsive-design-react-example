import './Homepage.css'
import basketball from './images/basketball-game.jpeg'
import soccer from './images/soccer-game.webp'
import pickleball from './images/pickleball-game.webp'
import { useState } from "react";

function Homepage() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <section>
        <div className="nav-bar">
            <div className="nav-bar-item">Home</div>
            <div className="nav-bar-item">About Us</div>
            <div className="nav-bar-item no-hover">
                <div>Search</div>
                <input type="text"></input>
            </div>
        </div>
        <div className="mobile-nav-bar">
            <div className="nav-bar-item" onClick={toggleDropdown}>☰</div>
        </div>
        {dropdownOpen ? (
            <div className="mobile-nav-dropdown">
            <div className="nav-bar-item">Home</div>
            <div className="nav-bar-item">About Us</div>
            <div className="nav-bar-item no-hover">
                <div>Search</div>
                <input type="text"></input>
            </div>
        </div>
        ) : (<div></div>)}
        <div className="main-body">
            <div className="homepage-photos">
                <img src={basketball}></img>
                <img src={soccer}></img>
                <img src={pickleball}></img>
            </div>
            <div className="homepage-text">
                <h1>This is the Homepage</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
            </div>
        </div>
    </section>
  );
}

export default Homepage;
