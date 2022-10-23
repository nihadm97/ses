import React from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpisNavbar from "components/Navbars/UpisNavbar";
import Footer from "components/Footers/Footer.js";
import biblioteka from './images/biblioteka.jpg';
import historija1 from './images/historija1.jpg';
import historija2 from './images/historija2.jpg';
import historija3 from './images/historija3.jpg';
import historija4 from './images/historija4.jpg';
import Background from './images/skola.gif'
export default function Index() {

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "1");

  useEffect(() => {
    AOS.init({duration: 2000});
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  const [users1, setUsers1] = useState([]);
  const usersCollectionRef1 = collection(db, "2");

  useEffect(() => {
    const getUsers1 = async () => {
      const data = await getDocs(usersCollectionRef1);
      setUsers1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers1();
  }, []);
  const sortirani = [...users].sort((a, b) => b.Broj - a.Broj);
  const sortirani1 = [...users1].sort((a, b) => b.Broj - a.Broj);
  return (
    <>
      <section className="header relative  flex h-screen bg-center" style={{
              backgroundImage: `url(${Background})`, backgroundSize: 'cover', alignSelf: 'center', minHeight: "800px"
            }}>
        <UpisNavbar fixed/>
        <div className="container flex flex-wrap absolute">
          <div  className="flex flex-wrap py-2">
          <div className="w-full md:w-8/12 ml-20 lg:w-8/12 xl:w-8/12 px-10">
            <div id = "div" className="sm:pt-0 rounded text-center lg:text-left hidden" style={{backgroundColor: "rgb(0, 0, 0, 0.5"}}>
              <h2 className="font-serif text-4xl text-white">
              O školi topline, sigurnosti i odgovornosti
              </h2>
              <b><p className="mt-4 text-lg leading-relaxed text-white">Čovjekov je odgoj ogledalo u kojem pokazuje svoj portret. Podučavanje je profesija koja podučava sve druge profesije.
              </p></b>
              <div className="mt-12">
                <Link
                  to="/upis"
                  target="_blank"
                  rel="noreferrer"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style={{backgroundColor: '#92d050'}} 
                >
                  Upis u SEŠ
                </Link>
                <Link
                  to="/kontakt"
                  target="_blank"
                  rel="noreferrer"
                  className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Kontakt
                </Link>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-in" className="pb-40 relative bg-blueGray-100">
        
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-11/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32" style={{marginTop: "15%"}}>
              <div className="relative flex flex-col min-w-0 break-words bg-lightBlue w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500" style={{backgroundColor: '#92d050'}}>
              <img src={biblioteka} alt="Logo" width={"100"} height={"100"} className="w-full align-middle rounded-t-lg"/>
                <blockquote className="relative p-8 mb-4">
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
                    BIBLIOTEKA
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  Biblioteka Srednje ekonomske škole, Sarajevo je informacijsko, medijsko i komunikacijsko mjesto u školi. 
                  Kao izvor informacija namijenjena je prvenstveno učenicima, profesorima za potrebe nastave, 
                  ali i podrška u nastavnim i vannastavnim aktivnostima škole. Biblioteka je mjesto za realizaciju raznih projekata.
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-lightBlue">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Škola znanja, a ne škola ocjena
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      Svi učenici i profesori imaju pravo besplatno koristiti skolsku biblioteku.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        Knjige
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                      U prostorijama biblioteke korisnici se mogu koristiti knjigama, časopisima, novinama i ostalom knjižnom i neknjižnom građom.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">Posudbe</h6>
                      <p className="mb-4 text-blueGray-500">
                      Izvan biblioteke može se posuditi odjednom 2 knjige na rok od 15 dana, a lektira na rok od 7 dana.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Radno vrijeme i kontakt
                      </h6>
                      <br></br>
                      <p className="mb-1 text-blueGray-500">
                      Svaki radni dan od 08 – 16 h
                      </p>
                      <p className="mb-1 text-blueGray-500">
                      Tel.: 033 / 724 – 617
                      </p>
                      <p className="mb-1 text-blueGray-500">
                      Amra Lagumdžija, dipl. bibliotekar
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div data-aos="fade-up" className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                      <img
                        alt="..."
                        src={historija1}
                        width={"500"}
                        height={"300"}
                        className="max-w-full rounded-lg shadow-lg"
                      />
                  <br></br>
                  <img
                        alt="..."
                        src={historija2}
                        width={"500"}
                        height={"300"}
                        className="max-w-full rounded-lg shadow-lg"
                      />
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                <img
                        alt="..."
                        src={historija3}
                        width={"500"}
                        height={"300"}
                        className="max-w-full rounded-lg shadow-lg"
                      />
                  <br></br>
                  <img
                        alt="..."
                        src={historija4}
                        width={"500"}
                        height={"300"}
                        className="max-w-full rounded-lg shadow-lg"
                      />
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48 text-center md:text-left">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              Historijat od 1912. godine do danas
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Rasprava o otvaranju finansijske škole višeg stupnja vodila se nekoliko godina. 
              Tako već 1910. godine Trgovačka škola i obrtnička komora za BiH u Sarajevu u svom dopisu od 19.11.1910. godine upućenom 
              Zemaljskoj vladi za BiH traži otvaranje jednogodišnjeg merkatilnog tečaja za apsolvente srednjih škola i ujedno predlaže 
              da se u Sarajevu osnuje Trgovačka akademija ''sa sličnim uređenjem i nastavnom osnovom kao akademije u Monarhiji''. 
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Ta ideja dalje je razrađena u Trgovačkoj i obrtničkoj komori pa je na njenoj plenarnoj sjednici 19. i 20. juna 1911. godine pod tačkom 5. dato 
              detaljno obrazloženje o potrebi otvaranja Trgovačke akademije u Sarajevu. 
              Kao rezultati aktivnosti u oktobru 1912. godine u Sarajevu je otvorena Trgovačka akademija.
              </p>
            </div>
          </div>
        </div>


       
      </section>

      

      
      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
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

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg py-16 px-12 relative z-10"> 
      <section className="bg-white w-full">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div data-aos="fade-in" className="w-full text-center md:w-6/12 mt-4">
              <div>
                    <span className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full" style={{backgroundColor: "rgb(254, 125, 1)"}}>
                    </span>
              </div>
              <h4 className="text-xl font-semibold uppercase mb-6" style={{color: "rgb(254, 125, 1)"}}>Obavijesti za učenike</h4>
            {sortirani.map(obj  => 
                <div className="relative flex flex-col min-w-0 break-words w-full mb-2 rounded-lg">
                  <div className="flex-auto">
                  <a
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  href={obj.Link}
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  {obj.Naslov}
                  
                </a>
                  
                    </div>
                  </div>)}
                </div>
              <div data-aos="fade-in" className="w-full text-center md:w-6/12 mt-4">
              <div>
                    <span className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full" style={{backgroundColor: '#92d050'}}>
                    </span>
              </div>
              <h4 className="text-xl font-semibold uppercase mb-6" style={{color: "#92d050"}}>Ostale obavijesti</h4>
            {sortirani1.map(obj  => 
                <div className="relative flex flex-col min-w-0 break-words w-full mb-2 rounded-lg">
                  <div className="flex-auto">
                  <a
                  className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
                  href={obj.Link}
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  {obj.Naslov}
                  
                </a>
                  
                    </div>
                  </div>)}
              </div>
              
            </div>
            </div>
          </section>
          

          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
