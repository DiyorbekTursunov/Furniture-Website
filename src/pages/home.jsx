import Navbar from "../components/Navbar/navbar";
import product_1 from "../assets/product_1.png";
import product_2 from "../assets/product_2.png";
import product_3 from "../assets/product_3.png";
import Cabinet from "../assets/Cabinet.png";
import couch from '../assets/couch.png'
import green_chair from '../assets/green_chair.png'
import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";


const Home = () => {
  const navigate = useNavigate()

  function navigateToFurneturePage() {
    navigate('/furnitures')
  }
  return (
    <div className="home_wrapper">
      <header className="header_wrapper">
        <Navbar />
        <main className="header_main">
          <h1>Discover The Best Furniture for You!</h1>
          <button className="header_btn" onClick={() => navigateToFurneturePage()}>Explore All Products</button>
        </main>
      </header>
      <section className="container">
        <div className="section__top">
          <h2 className="section__top__heading">Shop Popular Categories</h2>
          <button className="section__top__btn" onClick={() => navigateToFurneturePage()}>See All</button>
        </div>
        <div className="popular__products">
          <div className="popular__product">
            <h3 className="popular__product__heading">Chair</h3>
            <img
              src={product_1}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
          <div className="popular__product">
            <h3 className="popular__product__heading">Chair</h3>
            <img
              src={product_2}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
          <div className="popular__product">
            <h3 className="popular__product__heading">Chair</h3>
            <img
              src={product_3}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
          <div className="popular__product">
            <h3 className="popular__product__heading">Cabinet</h3>
            <img
              src={Cabinet}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
        </div>
      </section>
      <section className="container couch_section flex items_center justify_between">
        <img src={couch} alt="couch" className=""/>
        <div className="couch__titles">
          <h2>Simple Couch for Your Weekend</h2>
          <p>
            Enjoy your weekends with your families using our lastest Simple couch
            set!
          </p>
          <button className="header_btn" onClick={() => navigateToFurneturePage()}>Explore All Products</button>
        </div>
      </section>
      <section className="container">
        <div className="section__top">
          <h2 className="section__top__heading">Shop the latest</h2>
          <button className="section__top__btn" onClick={() => navigateToFurneturePage()}>See All</button>
        </div>
        <div className="popular__products">
          <div className="popular__product">
            <h3 className="popular__product__heading">Chair</h3>
            <img
              src={product_3}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
          <div className="popular__product">
            <h3 className="popular__product__heading">Chair</h3>
            <img
              src={product_2}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
          <div className="popular__product">
            <h3 className="popular__product__heading">Chair</h3>
            <img
              src={Cabinet}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
          <div className="popular__product">
            <h3 className="popular__product__heading">Cabinet</h3>
            <img
              src={product_1}
              alt="product_1"
              className="popular__product__img"
            />
          </div>
        </div>
      </section>
      <section className="container chair_section flex items_center justify_between">
        <div className="couch__titles">
          <h2>Simple Chair for Your Weekend</h2>
          <p>
            Enjoy your weekends with your families using our lastest Simple Chair
            set!
          </p>
          <button className="header_btn" onClick={() => navigateToFurneturePage()} >Explore All Products</button>
        </div>
        <img src={green_chair} alt="couch" className=""/>
      </section>  
    </div>
  );
};

export default Home;
