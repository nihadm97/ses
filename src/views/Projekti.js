import React from 'react'
import ProjektiNavbar from "components/Navbars/ProjektiNavbar.js";
import Footer from "components/Footers/Footer.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import slika1 from './slika1.jpg';
import slika2 from './slika2.jpg';
import asa1 from './images/asa1.jpg';
import asa2 from './images/asa2.jpg';
import asa3 from './images/asa3.jpg';
import medijske0 from './images/medijske0.jpg';
import medijske1 from './images/medijske1.jpg';
import medijske2 from './images/medijske2.jpg';
import medijske3 from './images/medijske3.jpg';


const Projekti = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "projekti");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  const sortirani = [...users].sort((a, b) => b.Broj - a.Broj);
  return (
    <>
    <ProjektiNavbar fixed/>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Radionica Medijska i informacijska pismenost uz eTwinning</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={medijske0} alt="" />
                    </div>
                    <div>
                        <img src={medijske1} alt="" />
                    </div>
                    <div>
                        <img src={medijske2} alt="" />
                    </div>
                    <div>
                        <img src={medijske3} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">U srijedu, 25.10.2023. godine, održan je Sajam medijske i informacijske pismenosti. </p>
                  <p className="mb-4 text-blueGray-500">Centralnu manifestaciju Dana medijske i informacijske pismenosti, organizovala je Regulatorna agencija za komunikacije Bosne i Hercegovine (RAK). </p>
                  <p className="mb-4 text-blueGray-500">Učenice drugog razreda naše škole, u pratnji profesorice Lejle Hujdur, posjetile su Sajam i učestvovale u radionici Medijska i informacijska pismenost uz eTwinning. Bila je to prilika da učenice dobiju više informacija o eTwinningu i projektnoj nastavi, o načinima sigurnog korištenja interneta, o tehnikama razvoja kritickog mišljenja, te da, kroz interaktivne kvizove, nauče koristiti neke od web alata. </p> 
                  <p className="mb-4 text-blueGray-500">Učenice su ostvarile nova poznanstva, te istakle da im je ovaj Sajam bio jako zanimljiv i koristan.</p>      
              
 

</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Nastavak saradnje sa ASA bankom</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={asa1} alt="" />
                    </div>
                    <div>
                        <img src={asa2} alt="" />
                    </div>
                    <div>
                        <img src={asa3} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500"><i>"Niko nije beskoristan na ovom svijetu ko olakšava breme drugog."</i> - Charles Dickens</p>
                  <p className="mb-4 text-blueGray-500">U okviru Memoranduma o saradnji, kojeg je naša škola potpisala sa ASA bankom prošle godine, Školi je donirano izuzetno vrijedno nastavno sredstvo - smart TV.</p>
                  <p className="mb-4 text-blueGray-500">Ovom gestom, ASA banka je pokazala da je društveno odgovorna organizacija, te da je ulaganje u obrazovanje, ulaganje u budućnost.</p> 
                  <p className="mb-4 text-blueGray-500">Radujemo se nastavku naše saradnje, koju je započela direktorica Škole, Amira Kadrispahić, a u cilju unaprjeđenja nastavnog procesa.</p>      
              
 

</span>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">U POSJETI SPARKASSE BANK, SARAJEVO</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={slika1} alt="" />
                    </div>
                    <div>
                        <img src={slika2} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Učenice i učenici III5 razreda posjetili su SPARKASSE BANK, SARAJEVO.</p>
                  <p className="mb-4 text-blueGray-500">Sparkasse Bank dd BiH, članica je austrijske finansijske institucije Steiermärkische Sparkasse. Njihova matična banka Steiermärkische Sparkasse je najveća regionalna banka na jugu Austrije sa dvjestogodišnjom tradicijom poslovanja, te dugoročnom i održivom strategijom razvoja u zemljama regije.</p> 
                  <p className="mb-4 text-blueGray-500">Kao članica Erste Bank und Sparkassen Austrija, dio je najjače grupe banaka fokusiranih na poslovanje sa stanovništvom, malim i srednjim preduzećima u Evropi.</p> 
                  <p className="mb-4 text-blueGray-500">Nude široku paletu finansijskih proizvoda stanovništvu, malim i srednjim preduzećima, velikim kompanijama, institucionalnim klijentima, te javnom sektoru, stavljajući akcenat na brzinu i efikasnost pružanja usluga, te jačanje povjerenja i lojalnosti klijenata. Pokrenuli su i veliki broj društveno korisnih projekata za našu zajednicu u raznim segmentima. Dvostruki su vlasnik nagrade „DOBRO“ za korporativnu filantropiju i volonterizam.</p> 
                  <p className="mb-4 text-blueGray-500">Uposlenice i uposlenici banke upoznale/i su naše učenice i učenike sa vrijednostima banke, finansijskim proizvodima, organizacionim, marketinškim aspektima poslovanja, savremenim izazovima u bankarstvu i odgovorili na sva pitanja učenica i učenika koje/i su pokazale/i stanovit interes za aktivnosti banke.</p> 
                  <p className="mb-4 text-blueGray-500">Posjeta je realizovana u okviru projekta Upoznaj privredu Kantona Sarajevo, kojeg vodi Indira Zeković, prof.</p>  
              
 

</span>
                  </div>
                 
                </div>
              </div>
            </div>
            </div>
          </section>
    {sortirani.map(obj  => 
      <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">{obj.naslov}</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      {obj.slike.map(slika  => 
                    <div>
                        <img src={slika} alt="" />
                    </div>
                    )}
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    {obj.paragrafi.map(paragraf  => 
                  <p className="mb-4 text-blueGray-500">{paragraf}</p> 
              )}
 

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
                  {typeof obj.link=="string" ? <a href={obj.link} target="_blank" rel="noreferrer" style={{color: "#fe7d01"}} > Pročitaj više: </a>: ""} 
      {typeof obj.video=="string" ? <video src={obj.video} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/> : ""} 
              </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          
)}
    <Footer />
    </>
  )
}

export default Projekti