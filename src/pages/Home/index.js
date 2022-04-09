import "./home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <main>
        <section className="main-section-shop">
          <h1>Nvidia Geforce RTX Series</h1>
          <p>Now available for preorder, shipping April, 2022</p>
          <Link className="shop-btn" to="/shop">Shop Now</Link>
        </section>
      </main>
    </div>
  );
};

export default Home;
