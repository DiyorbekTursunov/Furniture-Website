import Navbar from "../../components/Navbar/navbar";
import "./contact_us.css";
import post_1 from "../../assets/post_1.png";
import post_2 from "../../assets/post_2.png";
import post_3 from "../../assets/post_3.png";
import sofa from "../../assets/sofa.png";
import telegram_icon from "../../assets/telegram.svg";
import envelope from "../../assets/envelope.png";

const Contact_us = () => {
  return (
    <div>
      <Navbar isDark={true} />
      <div className="new_works_wrapper">
        <header className="container new_works_container">
          <h1>Our new works</h1>
          <div className="flex justify_between new_works">
            <div className="new_work">
              <img src={post_1} alt="furneture img" />
              <h3>First Time Home Owner Ideas</h3>
              <p>by Nana Ama on Nov 18th, 2023</p>
            </div>
            <div className="new_work">
              <img src={post_2} alt="furneture img" />
              <h3>First Time Home Owner Ideas</h3>
              <p>by Nana Ama on Nov 18th, 2023</p>
            </div>
            <div className="new_work">
              <img src={post_3} alt="furneture img" />
              <h3>First Time Home Owner Ideas</h3>
              <p>by Nana Ama on Nov 18th, 2023</p>
            </div>
          </div>
        </header>
      </div>
      <main className="container new_works_main_container">
        <div className="new_works_main flex justify_between items_center">
          <form className="new_works_main_form">
            <div className="new_works_main_titles flex items_center">
              <img
                src={envelope}
                alt="envelope"
                className="new_works_main_titles_img"
              />
              <p className="new_works_main_title">Subscribe to Newsletter , Contact us</p>
            </div>
            <div className="new_works_main_inputs flex items_center">
              <input
                type="text"
                className="new_works_main_input"
                placeholder="Enter your name"
              />
              <input
                type="email"
                className="new_works_main_input"
                placeholder="Enter your e-mail"
              />
              <button className="new_works_main_tg_icon">
                <img
                  src={telegram_icon}
                  alt="telegram_icon"
                  className="new_works_main_tg_icon_img"
                />
              </button>
            </div>
          </form>
          <img src={sofa} alt="sofa img" className="sofa_img"/>
        </div>
      </main>
    </div>
  );
};

export default Contact_us;
