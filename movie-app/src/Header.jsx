import "./Header.css";

function MainHeader(){
    return (
      <header className="header">
        <div className="brandName">MovieNation</div>
        <div className="section">
          <ul>
            <li>About</li>
            <li>Pricing</li>
            <li>Services</li>
          </ul>
        </div>
      </header>
    )
  }

  export default MainHeader;
  export {MainHeader};