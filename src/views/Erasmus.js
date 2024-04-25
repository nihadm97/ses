import React from 'react'
import ProjektiNavbar from "components/Navbars/ProjektiNavbar.js";
import Footer from "components/Footers/Footer.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


import eu from './eu.png';
import erasmus0 from './images/erasmus0.jpg';
import erasmus1 from './images/erasmus1.jpg';
import erasmus2 from './images/erasmu2.jpg';
import erasmus3 from './images/erasmu3.jpg';
import erasmus4 from './images/erasmu4.jpg';
import erasmus5 from './images/erasmus5.jpg';
import erasmus6 from './images/erasmus6.jpg';
import erasmus7 from './images/erasmus7.jpg';
import erasmus8 from './images/erasmus8.jpg';

import opis1 from './images/Opis1.png';
import opis2 from './images/Opis2.png';
import opis3 from './images/Opis3.png';
import opis4 from './images/Opis4.png';

import opisi from './images/Opisi.png';
import vodic from './images/Vodic.png';

const Erasmus = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);

  return (
    <>
    <ProjektiNavbar fixed/>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                  <h6 className="text-xl mb-1 font-semibold text-center uppercase">Opisi preduzetničkih kompetencija</h6>
                        <img src={opisi} alt="" />
                        <br></br>
                        <p className="mb-4 text-blueGray-500">
                        U ovom materijalu, saznaćete koje su to ključne preduzetničke kompetencije prema EntreComp modelu, kao i detaljne opise sa praktičnim primjerima svake od 15 kompetencija koje se smatraju ključnim za ovladavanje preduzetničkim načinom razmišljanja i promjenu stavova u funkciji preduzimanja inicijativa za stvaranje novih vrijednosti - umjesto klasičnih programa za osnivanje i upravljanje MSP (malim i srednjim preduzećima). </p>
                        <a href='https://drive.google.com/file/d/1MvTUMEJReeD_SDWYNYMNHRA27wXgzowR/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>

                    </div>

                    </div>
                  </div>
                </div>
                <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                  <h6 className="text-xl mb-1 font-semibold text-center uppercase">Vodič za trenere</h6>
                        <img src={vodic} alt="" />
                        <br></br>
                        <p className="mb-4 text-blueGray-500">
                        U ovom materijalu, kreiranom kao putokaz nastavnicima kako da uspješno organizuju radionice po modelu PBL (učenja zasnovanog na projektu), saznaćete, između ostalog, kako napraviti ravnotežu između izazova i podrške, kako uspostaviti povjerenje i otvoreni razgovor bez isticanja autoriteta, kako ohrabriti učešće svih bez auto-cenzure – uvođenjem prava na grešku, kako balansirati odnos između dominantnih i tihih učenika i kako stimulisati saradnju na zajedničkom rješavanju problema.</p>
                        <a href='https://drive.google.com/file/d/16PGsODckTeTeBctJGEKnClJCUCRI-BkR/view?usp=sharing' target="_blank" className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  style= {{backgroundColor: '#92d050'}} >Preuzmi materijal</a>

                    </div>

                    </div>
                  </div>
                </div>
            </div>
            </div>

          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">projekat OPEN FUTURE  </h6>
    <img src={eu} width="50" height="50" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <img src={opis1} alt="" />
                    </div>

                    </div>
                  </div>
                </div>
                <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <img src={opis2} alt="" />
                    </div>

                    </div>
                  </div>
                </div>
            </div>
            </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <img src={opis3} alt="" />
                    </div>

                    </div>
                  </div>
                </div>
                <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                      
                  <div>
                        <img src={opis4} alt="" />
                    </div>

                    </div>
                  </div>
                </div>
            </div>
            </div>
          </section>
          
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
          <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
    <h6 className="text-xl mb-1 font-semibold uppercase mr-2">Erasmus + projekat OPEN FUTURE  </h6>
    <img src={eu} width="50" height="50" alt="" />
</span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={erasmus0} alt="" />
                    </div>
                    <div>
                        <img src={erasmus1} alt="" />
                    </div>
                    <div>
                        <img src={erasmus2} alt="" />
                    </div>
                    <div>
                        <img src={erasmus3} alt="" />
                    </div>
                    <div>
                        <img src={erasmus4} alt="" />
                    </div>
                    <div>
                        <img src={erasmus5} alt="" />
                    </div>
                    <div>
                        <img src={erasmus6} alt="" />
                    </div>
                    <div>
                        <img src={erasmus7} alt="" />
                    </div>
                    <div>
                        <img src={erasmus8} alt="" />
                    </div>
                    
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">

                  <p className="mb-4 text-blueGray-500">
                  U nizu aktivnosti kojima naša škola obiluje i po kojima smo prepoznati, kako od strane domaćih, tako i evropskih organizacija, direktorica Amira Kadrispahić, potpisala je Memorandum o međunarodnoj saradnji sa učesnicama i učesnicima projekta Open Future u Novom Sadu.
</p> 
<p className="mb-4 text-blueGray-500">
Nosilac i koordinator Projekta je Naučni centar za kreativni razvoj Ideall - Novi Sad.
</p> 
<p className="mb-4 text-blueGray-500">
Učesnice i učesnici u Projektu, pored naše škole, su Ekonomska i upravna škola iz Osijeka i Srednja mješovita škola „Danilo Kiš“ iz Budve.
</p> 
<p className="mb-4 text-blueGray-500">
Finansijer Projekta, koji će trajati dvije godine u periodu <b>od 1.12.2023. do 30.11.2025. godine</b>,  jeste <b>Evropska Unija - program Erasmus +.</b></p>
<p className="mb-4 text-blueGray-500">
Projekat ima za cilj razvoj i jačanje nivoa ključnih preduzetničkih kompetencija profesorica/profesora i učenica/učenika stručnih škola primjenom sistematske metodologije, inovativnog pristupa i posebno razvijenih materijala za ove namjene, što će rezultirati poboljšanim nivoom potencijala zaposlenosti. 
</p> 
<p className="mb-4 text-blueGray-500">
Osnovni cilj sticanja preduzetničkih kompetencija za svakog pojedinca je razvijanje sposobnosti za aktivno učešće u društvu, upravljanje sopstvenim životom i karijerom, te preduzimanje inicijativa za stvaranje novih vrijednosti. 
</p> 
<p className="mb-4 text-blueGray-500">
Zadatak Projekta je obuka za petnaest ključnih preduzetničkih vještina prema usvojenom <b>EntreComp modelu</b>, koje su važne za sve vrste aktivnosti iz svakodnevnog života, a odnose se na lični razvoj, razmišljanje, vještine i sposobnosti u okviru tehnoloških, demografskih i društvenih izazova. Učenice i učenici će u toku planiranih projektnih aktivnosti, između ostalog, razvijati i  kritičko razmišljanje, kreativnost i komunikacijske vještine, koje će podsticati njihovo samopouzdanje, samopoštovanje i sinergiju između učenica/učenika i njihovih profesorica/profesora.
</p> 
<p className="mb-4 text-blueGray-500">
Program predviđa obuku profesorica/profesora, a zatim prijenos stečenih znanja i vještina učenicama/učenicima putem <b>PBL (Project Based Learning)</b> - učenja zasnovanog na projektima, gdje učenice i učenici aktivno učestvuju u pronalaženju načina za rješavanje problema.
</p> 
<p className="mb-4 text-blueGray-500">
Prvi susret u Novom Sadu i pripremne aktivnosti za realizaciju Projekta će nam ostati u dubokom sjećanju zahvaljujući izuzetnom profesionalcu, prof.dr. Zdravku Živković, kojem smo neizmjerno zahvalni što je našu školu birao za partnera u Projektu.
</p> 
<p className="mb-4 text-blueGray-500">
Direktorici su se na ovom putovanju pridružile i profesorice Edina Kopić i Lamija Šabanović, koje, također, učestvuju u realizaciji Projekta.
</p> 
<p className="mb-4 text-blueGray-500">
Sigurni smo da će i učenice/učenici škola učesnica, pored projektnih aktivnosti, steći nove životne prijatelje kao i mi, a što je i najviša blagodat ovakvih susreta.
</p> 
             
</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    
    <Footer />
    </>
  )
}

export default Erasmus