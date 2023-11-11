import Carousel from "../components/Carousel";
import Services from "../components/Services";
import "../styles/homepage.css";
function HomePage() {
  return (
    <div className="home-page">
      <Carousel />
      <Services />
    </div>
  );
}

export default HomePage;
