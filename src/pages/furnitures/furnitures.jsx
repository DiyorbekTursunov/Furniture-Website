import Navbar from '../../components/Navbar/navbar'
import './furnitures.css'
import furneture_1 from '../../assets/furneture_1.png'
import furneture_2 from '../../assets/furneture_2.png'
import furneture_3 from '../../assets/furneture_3.png'
import furneture_4 from '../../assets/furneture_4.png'

const Furnitures = () => {
  return (
    <div className=''>
      <Navbar isDark={true}/>
      <div className='container container__furneture'>
        <h2 className='furneture__title'>Popular</h2>
        <div className='furnetures'>
          <div className='furneture'>
            <img src={furneture_1} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className='furneture'>
            <img src={furneture_2} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className='furneture'>
            <img src={furneture_3} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className='furneture'>
            <img src={furneture_4} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
        </div>
        <h2 className='furneture__title_2'>Popular</h2>
        <div className='furnetures'>
          <div className='furneture'>
            <img src={furneture_1} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className='furneture'>
            <img src={furneture_2} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className='furneture'>
            <img src={furneture_3} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
          <div className='furneture'>
            <img src={furneture_4} alt="furneture img" className='furneture__img' />
            <h2>BRIMNES</h2>
            <p>Cabinet with doors, white, 78x95 cm</p>
            <h2>Rp 1.299.000</h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Furnitures
