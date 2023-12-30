import "./footer.css";
import { Link } from "react-router-dom";

import Google_Play_Badge from "../../assets/Google_Play_Badge.png";
import App_Store_Badge from "../../assets/App_Store_Badge.png";

const Footer = () => {
  return (
    <div className="footer__wrapper">
      <div className="container footer__container">
        <div className="footer_nav">
          <ul className="footer_ul">
            <li className="footer_li">
              <span>Company</span>
            </li>
            <li className="footer_li">
              <Link className="link link__Home" to={"/"}>
                home
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__furnitures" to={"/furnitures"}>
                furnitures
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__my__works" to={"/my-works"}>
                my works
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__contact__us" to={"/contact-us"}>
                contact us
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__purchase" to={"purchase"}>
                purchase
              </Link>
            </li>
          </ul>
          <ul className="footer_ul">
            <li className="footer_li">
              <span>Support</span>
            </li>
            <li className="footer_li">
              <Link className="link link__Home" to={"/"}>
                Help Center
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__furnitures" to={"/furnitures"}>
                Safety Center
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__my__works" to={"/my-works"}>
                Community Guidelines
              </Link>
            </li>
          </ul>
          <ul className="footer_ul">
            <li className="footer_li">
              <span>Legal</span>
            </li>
            <li className="footer_li">
              <Link className="link link__Home" to={"/"}>
                Cookies Policy
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__furnitures" to={"/furnitures"}>
                Privacy Policy
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__my__works" to={"/my-works"}>
                Terms of Service
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__contact__us" to={"/contact-us"}>
                Law Enforcement
              </Link>
            </li>
            <li className="footer_li">
              <Link className="link link__purchase" to={"purchase"}></Link>
            </li>
          </ul>
          <ul className="footer_ul">
            <li className="footer_li">
              <span>Install App</span>
            </li>
            <li className="footer_li">
              <Link>
                <img src={Google_Play_Badge} alt="Google_Play_Badge" />
              </Link>
            </li>
            <li className="footer_li">
              <Link>
                <img src={App_Store_Badge} alt="App_Store_Badge" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
