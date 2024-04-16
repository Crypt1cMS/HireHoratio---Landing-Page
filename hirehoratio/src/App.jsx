import './App.css'
import heroBg from './assets/hero-bg.png'
import whyHoratio from './assets/Why-Horatio.png'
import Bilt from './assets/Bilt.png'
import Cleancult from './assets/Cleancult.png'
import Kargo from './assets/Kargo.png'
import KraveBeauty from './assets/KraveBeauty.png'
import MagnoliaBakery from './assets/MagnoliaBakery.png'
import OPositive from './assets/OPositive.png'
import Pair from './assets/Pair.png'
import Ro from './assets/Ro.png'
import Squatch from './assets/Squatch.png'
import theSkimm from './assets/theSkimm.png'
import Suppercoffee from './assets/Suppercoffee.png'
import background from './assets/background1.png'
import footerbg from './assets/footerBackground.png'

function App() {

  return (
    <>
      <main>

        <nav>
          
          <div className="nav-horatio-branding">
            <h2>horatio</h2>
          </div>

        </nav>

        <section className='hero-container'>
          <img src={heroBg} alt="Background Picture" />

          <div className="hero-wrapper">
            <div className="hero-text-content">
              <h1>EXCEPTIONAL CUSTOMER SUPPORT WITH HORATIO</h1>
              <p>Experience the future of customer with Horatio's personalized care, world-class talent, and cutting-edge technology.</p>
              <button type='submit'>LET'S CHAT</button>
            </div>

            
            <div className="scroller" data-direction="left" data-speed="fast">

              <ul className='scroller__inner'>
                <li>
                  <img src={Bilt} alt="Brand" />
                </li>

              
                <li>
                  <img src={Cleancult} alt="Brand" />
                </li>


                <li>
                  <img src={Kargo} alt="Brand" />
                </li>

                
                <li>
                  <img src={KraveBeauty} alt="Brand" />
                </li>

                
                <li>
                  <img src={MagnoliaBakery} alt="Brand" />
                </li>

                <li>
                  <img src={OPositive} alt="Brand" />
                </li>

                
                <li>
                  <img src={Pair} alt="Brand" />
                </li>

                
                <li>
                  <img src={Ro} alt="Brand" />
                </li>

                
                <li>
                  <img src={Squatch} alt="Brand" />
                </li>

                
                <li>
                  <img src={theSkimm} alt="Brand" />
                </li>

                <li>
                  <img src={Suppercoffee} alt="Brand" />
                </li>
              </ul>

            </div>
            
          </div>
          
        </section>

        <section className='why-horatio-container'>
          <img src={whyHoratio} alt="Why Horatio background" />

          <div className="why-horatio-text">
            <h1>WHY CHOOSE HORATIO?</h1>
          </div>
        </section>

        <section className='grid-options-why-horatio'>

          <img src={background} alt="Backgorund Picture" />

          <div className="grid-items-container">

            <div className="grid-items" id='starter-grid-item'>

              <div className="bg-color-icon-blue">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M342.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 178.7l-57.4-57.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l80 80c12.5 12.5 32.8 12.5 45.3 0l160-160zm96 128c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 402.7 54.6 297.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l128 128c12.5 12.5 32.8 12.5 45.3 0l256-256z"/></svg>
              </div>

              <div className="grid-item-text">
                <h2>QUALITY ASSURANCE</h2>
                <p>Achieve excellence with our consistent, high-quality suppor with a <span>98% average QA score.</span></p>
              </div>

            </div>

            <div className="grid-items" id='middle-grid-2'>

              <div className="bg-color-icon-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M0 128C0 92.7 28.7 64 64 64H256h48 16H576c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H320 304 256 64c-35.3 0-64-28.7-64-64V128zm320 0V384H576V128H320zM178.3 175.9c-3.2-7.2-10.4-11.9-18.3-11.9s-15.1 4.7-18.3 11.9l-64 144c-4.5 10.1 .1 21.9 10.2 26.4s21.9-.1 26.4-10.2l8.9-20.1h73.6l8.9 20.1c4.5 10.1 16.3 14.6 26.4 10.2s14.6-16.3 10.2-26.4l-64-144zM160 233.2L179 276H141l19-42.8zM448 164c11 0 20 9 20 20v4h44 16c11 0 20 9 20 20s-9 20-20 20h-2l-1.6 4.5c-8.9 24.4-22.4 46.6-39.6 65.4c.9 .6 1.8 1.1 2.7 1.6l18.9 11.3c9.5 5.7 12.5 18 6.9 27.4s-18 12.5-27.4 6.9l-18.9-11.3c-4.5-2.7-8.8-5.5-13.1-8.5c-10.6 7.5-21.9 14-34 19.4l-3.6 1.6c-10.1 4.5-21.9-.1-26.4-10.2s.1-21.9 10.2-26.4l3.6-1.6c6.4-2.9 12.6-6.1 18.5-9.8l-12.2-12.2c-7.8-7.8-7.8-20.5 0-28.3s20.5-7.8 28.3 0l14.6 14.6 .5 .5c12.4-13.1 22.5-28.3 29.8-45H448 376c-11 0-20-9-20-20s9-20 20-20h52v-4c0-11 9-20 20-20z"/></svg>
              </div>

              <div className="grid-item-text">
                <h2>MULTILINGUAL PROFICIENCY</h2>
                <p>Break barriers with our multilingual support, ensuring no customer is left behind.</p>
              </div>

            </div>

            <div className="grid-items" id='middle-grid-3'>

              <div className="bg-color-icon-blue">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"/></svg>
              </div>

              <div className="grid-item-text">
                <h2>24/7 SUPPORT</h2>
                <p>Around-the-clock assistance to your customers, ensuring they always have the help they need, whenever they need it.</p>
              </div>

            </div>

            <div className="grid-items" id='ending-grid-item'>

              <div className="bg-color-icon-cyan">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zm-312 8v64c0 13.3 10.7 24 24 24s24-10.7 24-24l0-64c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80-96V280c0 13.3 10.7 24 24 24s24-10.7 24-24V120c0-13.3-10.7-24-24-24s-24 10.7-24 24zm80 64v96c0 13.3 10.7 24 24 24s24-10.7 24-24V184c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>
              </div>

              <div className="grid-item-text">
                <h2>ANALYTICS INSIGHTS</h2>
                <p>Make informed decisions with our real-time analytics and actionable feedback, driving informed decision-making and strategic growth.</p>
              </div>

            </div>

          </div>

          <div className="after-grid-headline">
            <h1>SOLVING YOUR BIGGEST CUSTOMER SERVICE CHALLENGES</h1>
            <p>Reduce response times while managing- high-volume inqueries without sacrificing quality. Our scalable solutions not only adapt to your growth but also add to it by enhancing customer satisfaction and loyalty. </p>
          </div>

        </section>

        <footer>

          <img src={footerbg} alt="Footer background picture" />

          <div className="footer-container">
            <h1>READY TO TRANSFORM YOUR CUSTOMER SERVICE?</h1>
            <p>Let's make your customer service the driver of your brand's success.</p>
            <button type='submit'>UPGRADE YOUR CUSTOMER SERVICE</button>
          </div>

        </footer>

      </main>
    </>
  )
}

export default App
