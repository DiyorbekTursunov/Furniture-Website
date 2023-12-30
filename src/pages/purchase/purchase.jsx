import React, { useState } from "react";
import Navbar from "../../components/Navbar/navbar";
import "./purchase.css";
import furneture_3 from "../../assets/furneture_3.png";
import product_2 from "../../assets/product_2.png";

const Purchase = () => {
  const [count1, setcount1] = useState(1)
  const [count2, setcount2] = useState(1)
  const [count3, setcount3] = useState(1)
  return (
    <div>
      <Navbar isDark={true} />
      <main className="container">
        <div className="purchase">
          <div className="purchase_main_titles">
            <h1>Cart</h1>
            <p>2 ITEMS</p>
          </div>
          <div className="purchase_cars">
            <div className="purchase_card">
              <div className="purchase_card_main">
                <img src={product_2} alt="furneture img" className="purchase_card_main__img" />
                <div className="purchase_card_main__titles">
                  <div className="purchase_card_main__titles_per">
                    <h3 className="purchase_card_main__titles_per__heading">
                      Osmond Armchair
                    </h3>
                    <p className="purchase_card_main__titles_per__p">
                      <span>color</span>Gunnared biege
                    </p>
                  </div>
                  <div className="purchase_card_main_btns">
                    <div className="purchase_card_main_btns_box">
                      <button className="purchase_card_main_btns_box_plus" onClick={() => setcount1(count1 + 1)}>
                        +
                      </button>
                      <span className="purchase_card_main_btns_box_counter">
                        {count1}
                      </span>
                      <button className="purchase_card_main_btns_box_minus"  onClick={() => setcount1(count1 > 1 ? count1 - 1 : 1)}>
                        -
                      </button>
                    </div>
                    <button className="purchase_card_main_btns_remove">
                      remove
                    </button>
                  </div>
                </div>
              </div>
              <span>$149.99</span>
            </div>
            <div className="purchase_card">
              <div className="purchase_card_main">
                <img src={furneture_3} alt="furneture img" className="purchase_card_main__img" />
                <div className="purchase_card_main__titles">
                  <div className="purchase_card_main__titles_per">
                    <h3 className="purchase_card_main__titles_per__heading">
                      Osmond Armchair
                    </h3>
                    <p className="purchase_card_main__titles_per__p">
                      <span>color</span>Gunnared biege
                    </p>
                  </div>
                  <div className="purchase_card_main_btns">
                    <div className="purchase_card_main_btns_box">
                      <button className="purchase_card_main_btns_box_plus" onClick={() => setcount2(count2 + 1)}>
                        +
                      </button>
                      <span className="purchase_card_main_btns_box_counter">
                        {count2}
                      </span>
                      <button className="purchase_card_main_btns_box_minus"  onClick={() => setcount2(count2 > 1 ? count2 - 1 : 1)}>
                        -
                      </button>
                    </div>
                    <button className="purchase_card_main_btns_remove">
                      remove
                    </button>
                  </div>
                </div>
              </div>
              <span>$149.99</span>
            </div>
            <div className="purchase_card">
              <div className="purchase_card_main">
                <img src={furneture_3} alt="furneture img" className="purchase_card_main__img" />
                <div className="purchase_card_main__titles">
                  <div className="purchase_card_main__titles_per">
                    <h3 className="purchase_card_main__titles_per__heading">
                      Osmond Armchair
                    </h3>
                    <p className="purchase_card_main__titles_per__p">
                      <span>color</span>Gunnared biege
                    </p>
                  </div>
                  <div className="purchase_card_main_btns">
                    <div className="purchase_card_main_btns_box">
                      <button className="purchase_card_main_btns_box_plus" onClick={() => setcount3(count3 + 1)}>
                        +
                      </button>
                      <span className="purchase_card_main_btns_box_counter">
                        {count3}
                      </span>
                      <button className="purchase_card_main_btns_box_minus"  onClick={() => setcount3(count3 > 1 ? count3 - 1 : 1)}>
                        -
                      </button>
                    </div>
                    <button className="purchase_card_main_btns_remove">
                      remove
                    </button>
                  </div>
                </div>
              </div>
              <span>$149.99</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Purchase;
