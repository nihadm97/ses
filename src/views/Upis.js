import React from "react";
import { Link } from "react-router-dom";
import {useRef, useState} from "react";
import { send } from 'emailjs-com';
import background from "./images/pozadina.jpg"
// components
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpisNavbar from "components/Navbars/UpisNavbar";
import Footer from "components/Footers/Footer.js";
import upis1 from './images/upis1.jpg';
import video1 from './video.mp4';




export default function Upis() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  const [toSend, setToSend] = useState({
    from_name: '',
    to_name: '',
    message: '',
    reply_to: '',
  });
  const [toReceive, setReceive] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    console.log(toSend);
    send(
      'service_3w7ljkp',
      'template_rhbvj7n',
      toSend,
      '0yh5Kt8PCChHJPyOL'
    )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setReceive("USPJEŠNO POSLANA PORUKA !");
        setTimeout(window.location.reload(), 30000);
      })
      .catch((err) => {
        console.log('FAILED...', err);
      });

  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };
  const myRef = useRef(null)
  const ScrollDemo = () => {
    const myRef = useRef(null)
  }
   const executeScroll = () => myRef.current.scrollIntoView() 
  return (
    <>
      <UpisNavbar transparent />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75" style={{marginTop:"-5%"}}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${background})` }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-75 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-blueGray-200 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <Link
                   to="/projekti"
                  >
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                      <i className="fas fa-award"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Osvajanje nagrada</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Projekti nagrađeni su evropskom oznakom kvaliteta
                    </p>
                  </div>
                  </Link>
                </div>
              </div>
              
              <div onClick={executeScroll} className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5  shadow-lg rounded-full" style={{backgroundColor: "rgb(146, 208, 80)"}}>
                      
                    </div>
                    <h6 className="text-xl font-semibold">Upis u srednju ekonomsku školu</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Škola topline, sigurnosti i odgovornosti
                    </p>
                  </div>
                </div>
              </div>
            

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                <a href="https://drive.google.com/file/d/1QRXGFwETBVoFarQD2lMM0fZPSXx-_w81/view" target="_blank" rel="noreferrer">
                  <div className="px-4 py-5 flex-auto">
                  <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue-400">
                      <i className="fas fa-retweet"></i>
                    </div>
                    <h6 className="text-xl font-semibold">Slobodno vrijeme</h6>
                    <p className="mt-2 mb-4 text-blueGray-500">
                    Na kvalitetan način osmisle svoje slobodno vrijeme jer time poboljšavaju 
                    kvalitet života i zadovoljavaju svoje potrebe.
                    </p>
                  </div>
                  </a>
                </div>
              </div>
            </div>

            <div data-aos="fade-down" ref={myRef} className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-user-friends text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Dobrodošli!
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                Od 1999. godine uveden je novi BIZNIS PROGRAM u saradnji sa Tieghten Business College iz Odense u Danskoj.
                Svakom našem učeniku pružamo kvalitetno obrazovanje i svakome prilazimo jednako odgovorno od prvog školskog dana do diplome.
                Koje zvanje se stiče?

                </p>
                <Link to="/" className="font-bold text-blueGray-700 mt-8">
                Koje zvanje se stiče?
                </Link>
                <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-600">
                Završetkom Srednje ekonomske škole, Sarajevo stiče se zvanje ekonomski tehničar ili bankarski tehničar koje omogućava upis na različite fakultete društvenih, tehničkih, prirodnih nauka i na druge visokoškolske institucije. 
                </p>
              </div>

              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto" >
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500" style={{backgroundColor: '#92d050'}}>
                <img src={upis1} alt="Logo" width={"100"} height={"100"} className="w-full align-middle rounded-t-lg"/>
                  <blockquote className="relative p-8 mb-4" >
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                        style={{color: '#92d050'}}
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                    Možda vaš posao iz snova još ne postoji? Pomoći ćemo vam da ga kreirate!
                    </h4>
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="relative py-20">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-white fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>

          <div data-aos="fade-down" className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>
              <video src={video1} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/>
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                  <div className="text-Black-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-lightBlue-300" style={{backgroundColor: '#92d050'}}>
                    <i className="fas fa-rocket text-xl"></i>
                  </div>
                  <h3 className="text-3xl font-semibold">Po čemu se ističe naša škola?</h3>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Želimo da omogućimo učenicima kvalitetno znanje i mnogobrojne kontakte izvan škole, 
                  kako bi oni osigurali vlastitu budućnost, a time i ljepšu budućnost prostora u kojem su stasali.
                  Mnogobrojne inovacije u školi, od kojih izdvajamo sedmicu učenja na daljinu (online sedmica), 
                  učinile su da naša škola bude prepoznata u široj regiji kao inovativna što je okrunjeno i dvostrukom 
                  dodjelom titule Innovative School od strane Microsofta. Stimulišemo i podstičemo učenike:
                  </p>
                  <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Stimulišemo i podstičemo učenike:
                  </p>
                  <ul className="list-none mt-2">
                    <li data-aos="fade-left" className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-Black-600 bg-lightBlue-200 mr-3" style={{backgroundColor: '#92d050'}}>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Da otkriju i izgrađuju svoje talente
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-left" className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-Black-600 bg-lightBlue-200 mr-3" style={{backgroundColor: '#92d050'}}>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Da ovladaju praktičnim uputama vezanim za budućnost
                          </h4>
                        </div>
                      </div>
                    </li>
                    <li data-aos="fade-left" className="py-2">
                      <div className="flex items-center">
                        <div>
                          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-Black-600 bg-lightBlue-200 mr-3" style={{backgroundColor: '#92d050'}}>
                          </span>
                        </div>
                        <div>
                          <h4 className="text-blueGray-500">
                          Da otkriju i izgrađuju svoje talente
                          </h4>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="pb-20 relative block bg-blueGray-800" style={{backgroundColor:"#fe7d01"}}>
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20 h-20"
            style={{ transform: "translateZ(0)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-blueGray-800 fill-current"
                points="2560 0 2560 100 0 100"
                style={{color:"#fe7d01"}}
              ></polygon>
            </svg>
          </div>

          <div data-aos="fade-up" className="container mx-auto px-4 lg:pt-24 lg:pb-64" style={{paddingTop: "5%"}}>
            <div className="flex flex-wrap text-center justify-center">
              <div className="w-full lg:w-8/12 px-4">
                <h2 className="text-4xl font-semibold text-white uppercase">
                Bankarski tehničar 
                </h2>
                <p className="text-lg leading-relaxed mt-4 mb-4" style={{color:"white"}}>
                Od školske 2018/2019. godine učenici Kantona Sarajevo mogu pohađati novi smjer Bankarski tehničar u Srednjoj 
                ekonomskoj školi Sarajevo po dualnom sistemu obrazovanja koji se ugleda prema njemačkim standardima, kao i na i 
                zakonski okvir u Bosni i Hercegovini. U prvom razredu nastava se održava samo u školi. Od druge do četvrte godine 
                udio praktične nastave u bankama se kontinuirano povećava sa dva na tri dana.
                </p><p style={{color:"black"}}>
                Naši partneri Predstavništvo njemačke privrede u BiH i Raiffeisen Banka, kao i ProCredit Bank, Sberbank BH i NLB Banka 
                koje su podržale uvođenje novog smjera, zajedničkim angažmanom žele omogućiti povezanost školskog obrazovanja sa 
                praktičnim znanjem, lakši prelaz iz škole na tržište rada; kvalitetnu praktičnu nastavu u bankama i mogućnost zaposlenja 
                određenog broja učenika nakon okončanja obrazovanja.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap mt-12 justify-center" style={{marginBottom: "10%"}}>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-medal text-xl"></i>
                </div>
                <h6 className="text-xl mt-5 font-semibold text-white uppercase">
                Diploma bankarskih službenika
                </h6>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-poll text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold text-white uppercase">
                Omogućeno sticanje širokih praktičnih znanja 
                </h5>
              </div>
              <div className="w-full lg:w-3/12 px-4 text-center">
                <div className="text-blueGray-800 p-3 w-12 h-12 shadow-lg rounded-full bg-white inline-flex items-center justify-center">
                  <i className="fas fa-lightbulb text-xl"></i>
                </div>
                <h5 className="text-xl mt-5 font-semibold uppercase text-white">
                Prva profesionalna iskustva
                </h5>
              </div>
            </div>
          </div>
        </section>
        <section className="relative block py-24 lg:pt-0 bg-blueGray-800" style={{backgroundColor:"#fe7d01"}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200">
                  <form data-aos="fade-up" className="flex-auto p-5 lg:p-10" onSubmit={onSubmit}>
                    <h4 className="text-2xl font-semibold">
                      IMATE DODATNIH PITANJA OKO UPISA?
                    </h4>
                    <p className="leading-relaxed mt-1 mb-4 text-blueGray-500">
                      Pošaljite nam poruku...
                    </p>
                    <h3 style={{color: "black"}}>{toReceive}</h3>
                    <div className="relative w-full mb-3 mt-8">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="full-name"
                      >
                        IME I PREZIME
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="Ime Prezimenić"
                        name='from_name'
                        value={toSend.from_name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="email"
                      >
                        EMAIL
                      </label>
                      <input
                        type="email"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="vaš_email@gmail.com"
                        name='from_email'
                        value={toSend.from_email}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="mobile"
                      >
                        MOBITEL
                      </label>
                      <input
                        type="text"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        placeholder="063/123-456"
                        name='from_mobile'
                        value={toSend.from_mobile}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="relative w-full mb-3">
                      <label
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                        htmlFor="message"
                      >
                        PORUKA
                      </label>
                      <textarea
                        rows="4"
                        cols="80"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full"
                        placeholder="Vaša poruka..."
                        name='message'
                        value={toSend.message}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="text-center mt-6">
                      <button
                        className="bg-blueGray-800 text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type='submit'
                      >
                        POŠALJI PORUKU
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
