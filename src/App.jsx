import myphoto from './assets/me.jpeg';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Calculator from './Calculator.jsx';
import introVideo from './assets/intro.mp4';
import { useState } from 'react';

function Home() {
  const [showIntro, setShowIntro] = useState(
    !sessionStorage.getItem('introSeen')
  );

  const finishIntro = () => {
    sessionStorage.setItem('introSeen', 'yes');
    setShowIntro(false);
  };

  if (showIntro) {
    return (
      <div className='intro'>
        <video src={introVideo} autoPlay muted playsInline onEnded={finishIntro} />
        <button className='skip' onClick={finishIntro}>SKIP</button>
      </div>
    );
  }

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
        <ul>
          <li>I am Kevin, a first year BSc Computer Science student at St Joseph's College, Trichy.</li>
          <li>I enjoy building with code and I am learning HTML, CSS, JavaScript and React.</li>
          <li>I am building my first projects, including a React to-do list.</li>
          <li>I am interested in building websites, creating animations, and solving programming problems.</li>
          <li>I am good in Python and C++, and I am improving my JavaScript.</li>
          <li>I am fluent in English and Tamil, and I can manage in Hindi.</li>
        </ul>
        <Link to='/'><button>RETURN</button></Link>
      </div>
    </div>
  );
}



function Projects() {
  return (
    <div className='panel open'>
      <h1>PROJECTS</h1>
      <h3>< Link to='/calculator'>CALCULATOR</Link></h3>
      <Link to='/'><button>RETURN</button></Link>
    </div>
  );
}

function Works() {
  return (
    <div className='panel open about-page'>
    <div className='about-text'>  
      <h1>WORKS</h1>
      <h2>I started this portfolio with React. First I made the home page in App.jsx, with my photo, my name and four buttons: About, Projects, Works and Contact. I used App.css to give the page colors, spacing and a background image. 

Then I learned React Router. With Routes, Route and Link, every button opens its own page, so I did not need to use state to change pages. I made the About page with my photo and my details, and the Contact page with links to my email, phone, LinkedIn and GitHub.

For my first project, I built a calculator in a new file called Calculator.jsx. I used useState to store the numbers on the screen. Each key adds its value, and the equals key does the math. I styled it in CSS and added a press effect on the keys. I also added floating plus, minus, multiply and divide symbols that appear before the calculator opens.

I added an intro video that plays the first time, and a media query so the site also works on mobile phones. At the end I pushed everything to GitHub with Git and published it with GitHub Pages.</h2>
      <Link to='/'><button>RETURN</button></Link>
    </div>
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
      <Route path='/calculator' element={<Calculator />} />
    </Routes>
  );
}

export default App;