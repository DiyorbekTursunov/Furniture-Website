import Navbar from "../../components/Navbar/navbar";
import "./my_works.css";
import person from "../../assets/person.png";
import { useNavigate } from "react-router-dom";
import furneture_1 from '../../assets/furneture_1.png'
import furneture_2 from '../../assets/furneture_2.png'
import furneture_3 from '../../assets/furneture_3.png'
import furneture_4 from '../../assets/furneture_4.png'


const My_works = () => {
  const navigate = useNavigate();

  function navigateToFurneturePage() {
    navigate("/furnitures");
  }
  return (
    <div>
      <Navbar isDark={true} />
      <header className="container my_works_container flex justify_between items_center">
        <div className="my_works_title">
          <h1>Hello, I’m Brooklyn Gilbert</h1>
          <p>
            I'm a Freelance furniture maker based in Uzbekistan. I strive to
            create amazing and beautiful furniture through carefully crafted
            user-centered design.
          </p>
          <button>Say Hello!</button>
          <button
            className="my_works_title__btn"
            onClick={() => navigateToFurneturePage()}
          >
            See me in all my work
          </button>
        </div>
        <img src={person} alt="" />
      </header>
      <div className="container container__furneture">
        <h2 className="furneture__title">Popular</h2>
        <div className="furnetures">
          <div className="furneture">
            <img
              src={furneture_1}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className="furneture">
            <img
              src={furneture_2}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className="furneture">
            <img
              src={furneture_3}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className="furneture">
            <img
              src={furneture_4}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
        </div>
        <h2 className="furneture__title_2">Popular</h2>
        <div className="furnetures">
          <div className="furneture">
            <img
              src={furneture_1}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className="furneture">
            <img
              src={furneture_2}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className="furneture">
            <img
              src={furneture_3}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className="furneture">
            <img
              src={furneture_4}
              alt="furneture img"
              className="furneture__img"
            />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default My_works;
