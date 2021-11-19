import './App.css';
import pfp from './pfp.png';


function App() {
  return (
    <div className="App">
      <div className="wallpaper">
      <div className="fade-in-image">
        <div className="content">
          <div className="sidetext">
            <center>
              <img src={pfp} className="pfp" alt="Twitter PFP"/>
              <h1>TayDevz</h1>
              <h3>
                Linux/Cybersec Enthusiast.<br/>
                Full-Stack Developer.<br/>
                Privacy Advocate.
              </h3>
              <a href="https://twitter.com/XtraZXS"><i className="fab fa-twitter fa-2x"/></a>
              <a href="https://github.com/XXXTentacion"><i className="fab fa-github fa-2x"/></a>
              <a href="https://keybase.io/itori"><i className="fab fa-keybase fa-2x"/></a>
            </center>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default App;
