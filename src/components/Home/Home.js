import './Home.scss'
import mountains from '../../assets/bg/Montanhas.png'

const Home = () => {
  return (
    <section className='app__hero d-flex justify-content-center align-items-center'>
      <div className='app__hero-text d-flex justify-content-center align-items-center flex-column'>
      <div className='app__heading text-white'>
      <h1>The Next Generation</h1>
      <h4>eDiscovery platform</h4>
      </div>
      <div className='app__p'>
      <p className='text-center text-white'>We're redefining efficiency in the eDiscovery process, harmonizing speed, intelligence, adaptability, and user-centric design.</p>
      </div>
      <a href='/#contact' alt="try now"><button className='btn app__hero-btn rounded-pill px-5 py-3 mt-2 mx-auto' type='button'>Try now</button></a>
      </div>
      <img src={mountains} alt='Mountains' className='mountains'/>
    </section>
  )
}

export default Home
