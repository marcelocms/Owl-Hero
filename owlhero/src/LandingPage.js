import react from "react";
import "./LandingPage.css";
import HeaderBackground from "./components/img/backgrounds_Head.gif";
import HeroCard from "./components/img/hero_card.png";
import OwlCard from "./components/img/owl_card.png";
import Menu from "./components/img/Menu_Footer.png";
import Navbar from "../src/components/navigation/navigation";
import TeacherTitle from "./components/img/teachers.png";
import OurImpact from "./components/img/impact.png";
import Galaxy from "./components/img/galaxy.gif";
import footer from "./components/img/footer.png";
import Gallery from "./components/img/gallery.png";
import LastFold from "./components/img/last_fold.gif";

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

        <img src={HeaderBackground} />
        <img className="teachers-title" src={TeacherTitle} />
        <img src={Galaxy} />
        <img className="our-impact-title" src={OurImpact} />
        <img className="our-impact-title" src={Gallery} />
        <img className="our-impact-title" src={LastFold} />
        <img className="our-impact-title" src={footer} />

        <div className="footer">
          <a href="https://github.com/cosmicRover/owlhero">
            <button className="header-button">Install Now</button>
          </a>
          <img src={Menu} />
        </div>
      </body>
    </div>
  );
}

export default LandingPage;
