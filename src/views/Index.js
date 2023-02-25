import React from "react";
import { Link } from "react-router-dom";
import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import UpisNavbar from "components/Navbars/UpisNavbar";
import Footer from "components/Footers/Footer.js";
import biblioteka from './images/biblioteka.webp';
import historija1 from './images/historija1.webp';
import historija2 from './images/historija2.webp';
import historija3 from './images/historija3.webp';
import historija4 from './images/historija4.webp';

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
      <section id="pocetna" className="header relative  flex h-screen bg-center" style={{
               backgroundSize: 'cover', alignSelf: 'center', minHeight: "800px"
            }}>
        <UpisNavbar fixed/>
        <div className="container flex flex-wrap absolute">
          <div  className="flex flex-wrap py-2">
          <div className="w-full md:w-8/12 ml-20 lg:w-8/12 xl:w-8/12 px-10">
            <div id = "div" className="sm:pt-0 rounded text-center lg:text-left hidden" style={{backgroundColor: "rgb(0, 0, 0, 0.5"}}>
              <h2 className="font-serif text-4xl text-white">
              Dobro došli u Ekonomsku školu!
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
              <h4 className="text-xl font-semibold uppercase mb-6" style={{color: "rgb(254, 125, 1)"}}>Informacije za učenike</h4>
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
              <h4 className="text-xl font-semibold uppercase mb-6" style={{color: "#92d050"}}>Ostale informacije</h4>
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
                  <h4 className="text-2xl font-bold text-white">
                    BIBLIOTEKA
                  </h4>
                  <p className="text-xl font-light mt-2 text-white">
                 U nizu aktivnosti kojima obiluje Srednja ekonomska škola, Sarajevo želja nam je podići i čitalačku svijest mladih.  
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
                      <b>"Da uništite kulturu, ne morate spaliti knjige. Dovoljno je da ih ljudi prestanu čitati.”</b><br></br><p className="mb-4 text-blueGray-500 text-sm" style={{float: "right"}}> – Ray Bradbury</p> 
                      </h6>
                      <br></br>
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
                    <br></br>
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                      Radno vrijeme i kontakt
                      </h6>
                      <p className="mb-1 text-blueGray-500">
                      Svaki radni dan od 08–16h
                      </p>
                      <p className="mb-1 text-blueGray-500">
                      Kontakt: 033/724–617
                      </p>
                      <p className="mb-1 text-blueGray-500">
                      Amra Lagumdžija, bibliotekar
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
            <div className="w-full md:w-7/12 px-4 mr-auto ml-auto mt-32">
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

            <div className="w-full md:w-7/12 px-12 md:px-4 ml-auto mr-auto mt-48 text-center md:text-left">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
              O školi...
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Nakon 1945. godine, škola je nosila svoj prvobitni naziv Trgovačka akademija. Od 27. juna 1951. godine dobiva ime Srednja ekonomska škola u Sarajevu, a zatim 1960. godine Ekonomska škola "Hasan Brkić" u Sarajevu. U toku rata 1992-1995. godine ponovno dobiva naziv Srednja ekonomska škola u Sarajevu. 
Ove promjene naziva nisu uticale niti mijenjale profil Škole.  
Kao Trgovačka akademija u Sarajevu od 1919. godine radila je u zgradi na uglu Obale i Zmaj-Jovine ulice (danas Gimnazijska ulica). Vremenom je ta austrougarska zgrada postala neuslovna za potrebe savremene nastave i znatno povećanog broja učenika. Zbog toga je namjenski izgrađena zgrada u Ulici Vojvode Putnika (danas Ulica Zmaja od Bosne), koja je u to vrijeme bila prilagođena najsavremenijim uslovima odvijanja nastavnog procesa.</p>
<p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
Nedugo poslije preseljenja u novu zgradu, Ekonomska škola u Sarajevu je 1962. godine proslavila 50-godišnjicu svog postojanja. Nizom manifestacija obilježena je jubilarna godina ove cijenjene i uspješne škole. U novoadaptiranu i proširenu zgradu uselilo se na Dan škole - 1. oktobra 1977. godine. Istovremeno je bila proslavljena i 65-godišnjica postojanja Škole, što je uvećalo radost useljenja. U novoadaptiranoj zgradi nalazilo se 27 kabineta, 2 fiskulturne sale, biblioteka, čitaonica i ostale potrebne prostorije.  
Time je Ekonomska škola dobila modernu i relativno prostranu školsku zgradu u kojoj se nastava odvijala sve do rata 1992. godine.
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
              Povodom obilježavanja 65-godišnjice postojanja Ekonomskoj školi "Hasan Brkić" u Sarajevu je dodijeljeno najviše priznanje za njen dugogodišnji, izuzetan i vrlo kvalitetan obrazovno-vaspitni rad. Ukazom Predsjednika SFRJ Josipa Broza Tita (od 25.9.1978. godine) Ekonomskoj školi "Hasan Brkić" Sarajevo dodijeljen je Orden rada sa Crvenom zastavom. 
Ovo odlikovanje bilo je priznanje za sve generacije učenika, profesora i drugih radnika, koji su ostavili dio sebe u ovoj Školi i tako stvorili vaspitno-obrazovnu ustanovu koja služi kao svijetao primjer.
              </p>
            </div>
          </div>
        </div>


       
      </section>
      <Footer />
    </>
  );
}
