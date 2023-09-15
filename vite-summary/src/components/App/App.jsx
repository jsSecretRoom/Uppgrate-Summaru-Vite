import './App.scss'
import DecoLine from '../DecoLine/DecoLine'
import DonutsProject from '../DonutsProject/DonutsProject'
import SocialLinks from '../SocialLinks/SocialLinks'

import Github from '../../assets/img/Github.svg'
import Instagram from '../../assets/img/Instagram.svg'
import Telegram from '../../assets/img/Telegram.svg'
import LinkedIn from '../../assets/img/LinkedIn.svg'
import MyFoto from '../../assets/my-foto.png'

import Card1 from '../../assets/card1.svg'
import Card2 from '../../assets/card2.svg'
import Card3 from '../../assets/card3.svg'
function App() {
  return (
    <div className='layaut'>
      <nav>
        <ul>
          <li><a href=""><img src="" alt="" /></a></li>
          <li><a href=""><img src="" alt="" /></a></li>
          <li><a href=""><img src="" alt="" /></a></li>
          <li><a href=""><img src="" alt="" /></a></li>
          <li><a href=""><img src={Telegram} alt="" /></a></li>
          <li><a href=""><img src={Instagram} alt="" /></a></li>
          <li><a href=""><img src={LinkedIn} alt="" /></a></li>
          <li><a href=""><img src={Github} alt="" /></a></li>
        </ul>
      </nav>
      <main>
        <section className='myself'>
          <div className='greeting-head'>
            <h1>Nice to meet you!</h1>
            <p>I'm a front end developer. On this page you will see my projects and learn about my technology stack.</p>
          </div>
          <div className='greeting'>
            <div className='greeting-body'>
              <h2>My name is Ruslan!</h2>
              <p> I am 23 years old, Mykolaiv Ukaina! I do most of the development in the second half of the year and get results in your field! At this stage, you can find your job, recognition, etc. d. projects with the possibility of their assessment! My metabolic rate and speed! I use new standards for writing code that validates new ones methods where necessary.</p>
            </div>
            <div className='my-foto'>
              <div className='foto'>
                <img src={MyFoto} alt="" />
              </div>
            </div>
          </div>
        </section>
        <DecoLine/>
        <SocialLinks/>
        <DecoLine/>
        <section className='skills'>
          <div className='my-skills'>
            <h3>Skills</h3>
            <div className='categoy-skill'>
              <div className='soft'>
                <p>Soft</p>
                <ul>
                  <li>Creative</li>
                  <li>Not conflicting</li>
                  <li>Stress resistant</li>
                  <li>Punctual</li>
                  <li>I know how to convince</li>
                  <li>I know how to evaluate people</li>
                </ul>
              </div>
              <div className='hard'>
                <p>Hard</p>
                <ul>
                  <li>Creative</li>
                  <li>Not conflicting</li>
                  <li>Stress resistant</li>
                  <li>Punctual</li>
                  <li>I know how to convince</li>
                  <li>I know how to evaluate people</li>
                </ul>
              </div>
              <div className='others'>
                <p>Others</p>
                <ul>
                  <li>Creative</li>
                  <li>Not conflicting</li>
                  <li>Stress resistant</li>
                  <li>Punctual</li>
                  <li>I know how to convince</li>
                  <li>I know how to evaluate people</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <DecoLine/>
        <section className='project1'>
          <div className='card-conteiner'>
            <p>Product cart creator!</p>
            <div className='cards'>
              <div className='cards-img'><img src={Card1} alt="" /></div>
              <div className='cards-img'><img src={Card2} alt="" /></div>
              <div className='cards-img'><img src={Card3} alt="" /></div>
            </div>
            
            <a href='https://cards-creator-vite.vercel.app/'> <button>Visit page!</button></a>
          </div>
        </section>
        <DonutsProject/>
        <DecoLine/>
        <section className='sorys-autorization'>
          <p>Event creator</p>
            <form action="authorization">
              <input type="text" />
              <input type="password" name="password" id="psvord" />
            </form>
            <button>Sign in</button>
        </section>
        <DecoLine/>
        <section className='my-massages'>
          <ul className='massage-conteinr'>
            <li>ewrwerwerwer</li>
            <li>ewrwerwerwer</li>
            <li>ewrwerwerwer</li>
            <li>ewrwerwerwer</li>
            <li>ewrwerwerwer</li>
            <li>ewrwerwerwer</li>
          </ul>
        </section>
        <DecoLine/>
        <SocialLinks/>
        <DecoLine/>
        <footer>
          <div className='futer-conteiner'>
            <p>Phone: +380677076893</p>
          </div>
        </footer>
      </main>
    </div>
  )
}

export default App
