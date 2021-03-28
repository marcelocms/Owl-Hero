import logo from "./logo.svg";
import "./LandingPage.css";
import HeaderBackground from "./components/img/backgrounds_Head.gif";
import HeroCard from "./components/img/Hero_card.png";
import OwlCard from "./components/img/Owl_card.png";
import Menu from "./components/img/Menu_Footer.png";
import Navbar from "../src/components/navigation/navigation";
import TeacherTitle from "./components/img/teachers.png";
import Galaxy from "./components/img/galaxy.gif";

function LandingPage() {
  return (
    <div className="App">
      <body>
        <Navbar />
        <section className="header-card hero-columns">
          <div>
            <img className="hero-owl-card" src={OwlCard} />
          </div>
          <div>
            <img className="hero-owl-card" src={HeroCard} />
          </div>
        </section>

        {/* <img className="menu-footer fixed-menu" src={Menu} /> */}

        <img src={HeaderBackground} />
        <img src={TeacherTitle} />
        <img src={Galaxy} />

        <div className="footer">
          <button className="header-button">Install Now</button>
          <img src={Menu} />
        </div>
      </body>
    </div>
  );
}

export default LandingPage;
