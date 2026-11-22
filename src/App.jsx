import myphoto from './assets/me.jpeg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className='profile'>
      <img src={myphoto} alt='Kevin P' className='photo'
        style={{ width: '180px', height: '180px', borderRadius: '50%', objectFit: 'cover' }} />
      <h1>KEVIN.P</h1>
      <nav className='menu'>
        <Link to='/about'><button className='abt'>ABOUT</button></Link>
        <Link to='/projects'><button className='pro'>PROJECTS</button></Link>
        <Link to='/works'><button className='work'>WORKS</button></Link>
        <Link to='/contact'><button className='contact'>CONTACT</button></Link>
      </nav>
    </div>
  );
}
 function About() {
  return (
    <div className='panel open about-page'>
      <img src={myphoto} alt='Kevin P' className='about-photo' />
      <div className='about-text'>
        <h1>ABOUT MYSELF</h1>
        <p>I am Kevin. I am a first year undergraduate student in the BSc Computer Science program at St Joseph's College, Trichy. I enjoy building with code, and I am learning HTML, CSS, JavaScript and React. I am building my first projects, including a React to-do list. I am interested in building websites, creating animations, and solving problems in programming languages. I am good in Python and C++, and I am currently improving my JavaScript. I am fluent in English and Tamil, and I can manage in Hindi.</p>
        <Link to='/'><button>RETURN</button></Link>
      </div>
    </div>
  );
}



function Projects() {
  return (
    <div className='panel open'>
      <h1>PROJECTS</h1>
      <h3>Coming soon.</h3>
      <Link to='/'><button>RETURN</button></Link>
    </div>
  );
}

function Works() {
  return (
    <div className='panel open'>
      <h1>WORKS</h1>
      <h3>Write your works here.</h3>
      <Link to='/'><button>RETURN</button></Link>
    </div>
  );
}


function Contact() {
  return (
    <div className='panel open about-page'>
      <img src={myphoto} alt='Kevin P' className='about-photo' />
      <div className='about-text'>
        <h1>CONTACT</h1>
        <p>Email: <a href='mailto:kevinzahs2244@gmail.com'>kevinzahs2244@gmail.com</a></p>
        <p>Phone: <a href='tel:+91 9025929009'>+91 9025929009</a></p>
        <p>LinkedIn: <a href='https://www.linkedin.com/in/kevin-kevin-1398b6422?utm_source=share_via&utm_content=profile&utm_medium=member_android' target='_blank' rel='noreferrer'>My LinkedIn</a></p>
        <p>GitHub: <a href='https://github.com/Kevin-828' target='_blank' rel='noreferrer'>My GitHub</a></p>
        <p>Instagram: <a href='https://www.instagram.com/k_v_in_2?gwpx=MXRneW43N3R3ZjA0Yw==' target='_blank' rel='noreferrer'>My Instagram</a></p>
        <Link to='/'><button>RETURN</button></Link>
      </div>
    </div>
  );
}
function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/projects' element={<Projects />} />
      <Route path='/works' element={<Works />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  );
}

export default App;