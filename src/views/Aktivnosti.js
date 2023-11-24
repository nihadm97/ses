import React from 'react'
import Menu from "components/Navbars/Menu.js";
import Footer from "components/Footers/Footer.js";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import slika1 from './stem1.jpg';
import slika2 from './stem2.jpg';
import slika3 from './stem3.jpg';
import slika4 from './stem4.jpg';
import slika5 from './stem5.jpg';
import dan1 from './images/dan1.jpg';
import dan2 from './images/dan2.jpg';
import dan3 from './images/dan3.jpg';
import dan4 from './images/dan4.jpg';
import dan5 from './images/dan5.jpg';
import dan6 from './images/dan6.jpg';
import dan7 from './images/dan7.jpg';
import dan8 from './images/dan8.jpg';
import dan9 from './images/dan9.jpg';
import video from './images/video2.mp4';
import spars2 from './images/spars2.jpg';
import spars3 from './images/spars3.jpg';
import spars4 from './images/spars4.jpg';
import vrh1 from './images/vrh1.jpg';
import streliste0 from './images/streliste0.jpg';
import streliste1 from './images/streliste1.jpg';
import muzej1 from './images/muzej1.jpg';
import muzej2 from './images/muzej2.jpg';
import muzej3 from './images/muzej3.jpg';
import muzej4 from './images/muzej4.jpg';
import jabuka1 from './images/jabuka1.jpg';
import jabuka2 from './images/jabuka2.jpg';
import jabuka3 from './images/jabuka3.jpg';
import jabuka4 from './images/jabuka4.jpg';
import jabuka5 from './images/jabuka5.jpg';
import videojabuka from './images/videojabuka1.mp4';
import izlet1 from './images/izlet1.jpg';
import izlet2 from './images/izlet2.jpg';
import izlet3 from './images/izlet3.jpg';
import izlet4 from './images/izlet4.jpg';
import izlet5 from './images/izlet5.jpg';
import izlet6 from './images/izlet6.jpg';
import izlet7 from './images/izlet7.jpg';
import izlet8 from './images/izlet8.jpg';
import izlet9 from './images/izlet9.jpg';
import carina1 from './images/carina1.jpg';
import carina2 from './images/carina2.jpg';
import carina3 from './images/carina3.jpg';
import carina4 from './images/carina4.jpg';
import carina5 from './images/carina5.jpg';
import g1 from './images/g1.jpg';
import g2 from './images/g2.jpg';
import g3 from './images/g3.jpg';
import svila1 from './images/svila1.jpg';
import svila2 from './images/svila2.jpg';
import svila3 from './images/svila3.jpg';
import svila5 from './images/svila5.jpg';
import opasno1 from './images/opasno1.jpg';
import opasno2 from './images/opasno2.jpg';
import opasno3 from './images/opasno3.jpg';
import ejs1 from './images/ejs1.jpg';
import ejs2 from './images/ejs2.jpg';
import ejs3 from './images/ejs3.jpg';
import bib1 from './images/bib1.jpg';
import bib2 from './images/bib2.jpg';
import bib3 from './images/bib3.jpg';
import pismenost1 from './images/pismenost1.jpg';
import pismenost2 from './images/pismenost2.jpg';
import pismenost3 from './images/pismenost3.jpg';
import stednja1 from './images/stednja1.jpg';
import stednja2 from './images/stednja2.jpg';
import stednja3 from './images/stednja3.jpg';
import stednja4 from './images/stednja4.jpg';
import stednja5 from './images/stednja5.jpg';
import mete from './images/mete.jpg';
import sajamaaa1 from './images/sajamaaa1.jpg';
import sajamaaa2 from './images/sajamaaa2.jpg';
import sajamaaa3 from './images/sajamaaa3.jpg';
import sajamaaa4 from './images/sajamaaa4.jpg';
import sajamaaa5 from './images/sajamaaa5.jpg';
import sajamaaa6 from './images/sajamaaa6.jpg';
import selo1 from './images/selo1.jpg';
import selo2 from './images/selo2.jpg';
import selo3 from './images/selo3.jpg';
import selo4 from './images/selo4.jpg';
import selo5 from './images/selo5.jpg';
import selo6 from './images/selo6.jpg';
import selo7 from './images/selo7.jpg';

const Projekti = () => {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "aktivnosti");

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
    <Menu fixed/>
   
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Susret škola Dugog Sela i Sarajeva</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={selo1} alt="" />
                    </div>
                    <div>
                        <img src={selo2} alt="" />
                    </div>
                    <div>
                        <img src={selo3} alt="" />
                    </div>
                    <div>
                        <img src={selo4} alt="" />
                    </div>
                    <div>
                        <img src={selo5} alt="" />
                    </div>
                    <div>
                        <img src={selo6} alt="" />
                    </div>
                    <div>
                        <img src={selo7} alt="" />
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
                  ETwinning projekat “Besplatna, a čista” je u petak, 10.11. 2023. godine, okupio učenice i učenike iz tri škole na 
trosatnoj radionici vezanoj za obnovljive izvore energije. 

</p> 
                  <p className="mb-4 text-blueGray-500">Srednja škola Dugo Selo iz Republike Hrvatske 
bila je domaćin radionice, na kojoj su se njihove/i učenice i učenici zajedno sa učenicama i učenicima naše škole i Srednje 
zubotehničke škole, Sarajevo, Etwinning teams kroz kvizove, prezentacije i praktične demonstracije 
družili/e i učili/i. Naredno druženje je zakazano za decembar u Sarajevu!
 </p> 
                  <p className="mb-4 text-blueGray-500">Učenici/e Srednje ekonomske škole, Sarajevo, Amar Suljević, Emina Priganica, Emina Ligata, Ena Šehić, 
Lamija Halilović, Nejra Mušić, te profesorice Lejla Hujdur i Edina Kopić su prisustvovali/e trosatnom 
programu koji je uključivao edukativne i zabavne sadržaje. Učenici/e iz sarajevskih škola su pripremili 
Kahoot kviz o poznavanju grada Sarajeva. Pobjednicima kviza uručene su prigodne nagrade.
 
</p>
                  <p className="mb-4 text-blueGray-500">Profesor Srednje škole Dugo Selo, Republika Hrvatska, Vedran Strmečki, održao je zanimljivo 
predavanje o sunčevoj energiji. Realizirane su radionice na 3D printeru, dronu i solarnim automobilima, o 
čemu je sačinjen i videozapis. Posebno je bio zanimljiv Kahoot kviz na temu poznavanja problematike 
obnovljivih izvora energije i ušteda energije.
</p> 
 
                  <p className="mb-4 text-blueGray-500">Uslijedio je obilazak grada Zagreba, posjeta Muzeju čokolade Zagreb i Interliberu, 45. Međunarodnom 
sajmu knjiga na zagrebačkom velesajmu.

</p> 
<p className="mb-4 text-blueGray-500">Zahvaljujemo Srednjoj školi Dugo Selo za gostoprimstvo! 
</p> 
<p className="mb-4 text-blueGray-500">Radujemo se novom susretu i novim projektima!
</p> 
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">IX SAJAM BOSANSKOHERCEGOVAČKE PRIVREDE 2023</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={sajamaaa1} alt="" />
                    </div>
                    <div>
                        <img src={sajamaaa2} alt="" />
                    </div>
                    <div>
                        <img src={sajamaaa3} alt="" />
                    </div>
                    <div>
                        <img src={sajamaaa4} alt="" />
                    </div>
                    <div>
                        <img src={sajamaaa5} alt="" />
                    </div>
                    <div>
                        <img src={sajamaaa6} alt="" />
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
                  Učenici/e četvrtog razreda naše škole su sa profesoricama Lejlom Hujdur, Vildanom Čelić, Lamijom Šabanović i profesorom Edinom
Selmanović, posjetili IX SAJAM BOSNSKOHERCEGOVAČKE PRIVREDE, u sarajevskom centru Skenderija.

</p> 
                  <p className="mb-4 text-blueGray-500">Ovogodišnji sarajevski Sajam od 02. do 05. novembra, 2023. godine se održava pod motom: „Domaći 
proizvod u službi građana BIH“.  
 </p> 
                  <p className="mb-4 text-blueGray-500">Svojim kvalitetom, sajamske manifestacije zauzimaju veliki značaj u privrednim dešavanjima ovog dijela 
Evrope. Preko 1500 izlagača i suizlagača, prezentiraju svoje proizvode i usluge. Zahvaljujući 
dugogodišnjoj uspješnosti, organizaciji i realizaciji ovih manifestacija, te stečenom ugledu i renomeu, 
sarajevski Sajam je član UFI i EASE. 
 
</p>
                  <p className="mb-4 text-blueGray-500">Fokus Sajma je na razvoju sektora malog i srednjeg poduzetništva kao generatoru regionalnog i lokalnog 
rasta i razvoja. Stručno edukativni program koji se održava na centralnom prezentacionom prostoru 
dvorane Skenderija, bio je u fokusu interesovanja izlagača, posjetilaca i medija.Učenici/e su imali priliku 
za razgovore sa izlagačima, nove spoznaje, inovacije, trendove u oblasti realnog poslovnog svijeta i 
poslovne prakse, što će zasigurno doprinijeti njihovoj poslovnoj kreativnosti i kompetencijama.
</p> 
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Uspjeh naše učenice Zerine Zec na Međunarodnom  takmičenju u ritmičkoj gimastici, OBUDA CUP 2023, Budimpešta</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Gimnastika%201.jpg?alt=media&token=3b595afe-98b0-48c9-be7f-5b0f60e38fb3" alt="" />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Gimnastika%201.jpg?alt=media&token=3b595afe-98b0-48c9-be7f-5b0f60e38fb3" alt="" />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Gimnastika%201.jpg?alt=media&token=3b595afe-98b0-48c9-be7f-5b0f60e38fb3" alt="" />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Gimnastika%203.jpg?alt=media&token=8728970f-8202-4f8e-bf53-b5ebed7d5071" alt="" />
                    </div>
                    <div>
                        <img src="https://firebasestorage.googleapis.com/v0/b/obavijesti-b3310.appspot.com/o/Gimnastika%204.jpg?alt=media&token=305fec67-6abf-426c-809d-18e5f7ba9777" alt="" />
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
                  Takmičenje u ritmičkoj gimastici je održano u subotu i nedjelju, 28. i 29. oktobra 2023. godine, u Budimpešti, pod nazivom „ OBUDA CUP 2023“ i okupilo je oko 300 takmičara iz petnaest zemalja Evrope, Kipra, Italije, Ukrajine, Slovačke, ... 

</p> 
                  <p className="mb-4 text-blueGray-500">Pored kluba KRG „Željezničar“, Sarajevo,  još tri kluba iz BiH su uzela učešće na takmičenju.  Zerina Zec je nastupila u najtežem programu, tzv.  A programu i osvojila tri medalje u najjačoj konkurenciji: 2. mjesto, rekvizit traka, 3. mjesto rekvizit obruč i 4. mjesto, u ukupnom poretku.   
 </p> 
                  <p className="mb-4 text-blueGray-500">Takmičarski program je uključivao tri vježbe i tri rekvizita: vježbu sa obručem, vježbu sa loptom i vježbu sa trakom. 
</p>
                  <p className="mb-4 text-blueGray-500">Čestitamo našoj Zerini Zec i poželimo joj još mnogo medalja! 
</p> 
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">SARAJEVSKA METEOROLOŠKA STANICA: ČUVAR VREMENSKIH TAJNI GRADA NA MILJACKI</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={mete} alt="" />
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
                  U srcu Bosne i Hercegovine, njenom glavnom gradu Sarajevu, jedna mala, ali iznimno važna instituacija neprestano prati i bilježi sve promjene u atmosferi i klimatske promjene u našem gradu. Riječ je o sarajevskoj Meteorološkoj stanici na Bjelavama, koja već godinama služi kao ključni izvor informacija o vremenskim prilikama našeg grada, i šire. Zbog toga smo je mi, učenici prvog razreda,  jednog od posljednjih dana prelijepog oktobra, kažu nam najtoplijeg otkad se od 1888. u Sarajevu mjeri temperatura, posjetili u sklopu projekta “Dan Grada”, u pratnji profesorica Suade Tadić I Minje Hozo. 

</p> 
                  <p className="mb-4 text-blueGray-500">Meteorološka stanica ima dugu historiju i tradiciju u prikupljanju podataka o vremenskim prilikama u našem gradu. Osnovana je davne 1887. godine, kada je austrougarska vojska za svoje potrebe postavila tri meteorološke stanice u Bosni i Hercegovini, među njima i sarajevsku. Ozvaničila je Zemaljska vlada, formirajući i centralni zavod, a njena gradnja započinje 1900. Od tog vremena krenulo se sa redovnim mjerenjima i objavljivanjem godišnjih rezultata i vremenskih promjena u Sarajevu i cijeloj državi: temperature, vlažnosti zraka, brzine vjetra, količine oborina i zračnog pritiska. Ovi podaci su  već skoro 150 godina od neprocjenjive važnosti za mnoge aspekte svakodnevnog života u gradu.   
 </p> 
                  <p className="mb-4 text-blueGray-500">U Meteorološkoj stanici tog sunčanog dana dočekala su nas dva uposlenika, koji su nas ukratko upoznali sa njenim historijatom, ali i raznim djelatnostima kojima se bavi, prateći vremenske i klimatske promjene. Upoznali su nas sa svakodnevnim mjerenjem dnevne temperature zraka, koje se obavlja instrumentima “sakrivenim” u malim drvenim bijelim prozračnim kutijama. Nakon toga, uveli su nas u unutrašnjost stanice, gdje nam je dežurni meteorolog pokazao satelitski prikaz Zemlje i na licu mjesta prognozu za narednih nekoliko dana pomoću posebne aplikacije.  
</p>
                  <p className="mb-4 text-blueGray-500">Puni utisaka, time smo svoju posjetu Meteorološkoj stanici završili. 
</p> 
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Svjetski dan štednje obilježen i na času matematike</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={stednja1} alt="" />
                    </div>
                    <div>
                        <img src={stednja2} alt="" />
                    </div>
                    <div>
                        <img src={stednja3} alt="" />
                    </div>
                    <div>
                        <img src={stednja4} alt="" />
                    </div>
                    <div>
                        <img src={stednja5} alt="" />
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
                  Maturantice smjera Bankarski tehničar su, u okviru obilježavanja Svjetskog dana štednje, uz mentorstvo profesorice Lejle Hujdur, realizovale časove učenicama i učenicima II razreda o koristima i značaju štednje. 

</p> 
                  <p className="mb-4 text-blueGray-500">Sa učenicama i učenicima su realizovale kviz o vlastitim navikama štednje uz asocijacije na ovu temu.  
 </p> 
                  <p className="mb-4 text-blueGray-500">Urađena je i SWOT analiza sa ciljem analize snaga, slabosti, prijetnji i prilika vezano za štednju. 
</p>
                  <p className="mb-4 text-blueGray-500">Učenice i učenici su pokazale/i zavidan nivo poznavanja uzroka i posljedica vezanih za ulogu ekonomsko-društvenog konteksta štednje.
</p> 
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Dani medijske i informacijske pismenosti, Centar za zdravo starenje Novo Sarajevo</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={pismenost1} alt="" />
                    </div>
                    <div>
                        <img src={pismenost2} alt="" />
                    </div>
                    <div>
                        <img src={pismenost3} alt="" />
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
                  Centar za promociju civilnog društva, Sarajevo je organizovao radionicu „Dani medijske i 

informacijske pismenosti“ u Centru za zdravo starenje, Novo Sarajevo, 30. oktobra 2023. godine.


</p> 
                  <p className="mb-4 text-blueGray-500">Učenici/e naše škole i profesorica Emina Svraka su prisustvovali/e ovoj radionici. Cilj radionice je 

osnaživanje starijih osoba za usvajanje informatičkih vještina, razvijanje svijesti o važnosti medijske 

pismenosti i kritičkog promišljanja medijskih sadržaja. Kampanja ima za cilj da skrene pažnju na značaj 

odgovornog i sigurnog korištenja digitalnih tehnologija, razvoj svijesti o važnosti medijske pismenosti, 

osnaživanje građana, građanki i mladih za kritičko promišljanje medijskih sadržaja.
 </p> 
                  <p className="mb-4 text-blueGray-500">Informacijska i medijska pismenost preduslov je sigurnosti na Internetu, jer bez temeljnih znanja o 

korištenju informacijsko-komunikacijske tehnologije i društvenih medija, nije moguće postići zavidan 

stepen sigurnosti na Internetu. 
 
</p>
                  <p className="mb-4 text-blueGray-500">Značaj odabrane teme ogleda se u činjenici da su mladi danas dodatno izloženi različitim štetnim 

sadržajima i dezinformacijama, kako putem medija, tako i društvenih mreža, dok ulazak u digitalnu sferu 

koja se razvija užurbanim tempom starijim osobama može biti odbojan ili zastrašujući zbog mnoštva 

opcija koje se nude.

</p> 
 
                  <p className="mb-4 text-blueGray-500">Informacijska i medijska pismenost je osnova za poboljšanje pristupa informacijama i znanju, slobodi 

izražavanja i kvalitetnom obrazovanju. Ona označava vještine i stavove neophodne za vrednovanje 

funkcija medija i ostalih dobavljača informacija, uključujući one na Internetu, za pronalaženje, procjenu i 

kreiranje informacija i medijskog sadržaja.


</p> 
<p className="mb-4 text-blueGray-500">Obilježavanjem Dana medijske i informacijske pismenosti, koje se održavaju od 19. do 29.10.2023. 

godine, upravo se želi ukazati na činjenicu koliko je u savremenom svijetu važno razvijati medijsku pismenost, te 

odgovorno i sigurno upotrebljavati informacije, kritički procjenjivati i stvarati medijski sadržaj.

</p> 
<p className="mb-4 text-blueGray-500">Cilj radionice je razvijanje vještina kritičkog razmišljanja koja su potrebna za procjenu, analizu složenih 

stanja i prepoznavanja razlika između mišljenja i činjenica.
</p> 
<p className="mb-4 text-blueGray-500">Ne zaboravimo:
</p> 
<p className="mb-4 text-blueGray-500">Tvoja privatnost - tvoja sigurnost!

</p> 
<p className="mb-4 text-blueGray-500">Ne vjeruj svemu na internetu!
</p> 
<p className="mb-4 text-blueGray-500">Budi oprezan na internetu!
</p> 
<p className="mb-4 text-blueGray-500">Prijavi sadržaj koji te uznemirava!

</p> 
<p className="mb-4 text-blueGray-500">
Ne budi dio elektronskog nasilja!
</p> 
<p className="mb-4 text-blueGray-500">Zahvaljujemo Centru za promociju civilnog društva za promociju medijske i informacijske pismenosti i 

doprinos unapređenju kompetencija naših učenica i učenika. Naravno, i za priliku za međugeneracijsku saradnju i 

umrežavanje.
</p> 
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Nacionalni dan svjesnosti o bibliotekama</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={bib1} alt="" />
                    </div>
                    <div>
                        <img src={bib2} alt="" />
                    </div>
                    <div>
                        <img src={bib3} alt="" />
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
Univerzitet u Sarajevu, 27. oktobra 2023. godine, obilježio je Nacionalni dan svjesnosti o bibliotekama u Bosni i Hercegovini.
Cilj Nacionalnog dana svjesnosti o bibliotekama je podsjetiti građanke i građane na važnost učešća biblioteka u izgradnji društva znanja. </p> 
                  <p className="mb-4 text-blueGray-500">Tim povodom, biblioteke (javne, akademske, školske i specijalne) učestvovale su u promociji bibliotečko - informacijskih usluga.</p> 
                  <p className="mb-4 text-blueGray-500">Učenice i učenici naša škole uključile/i su se  u ovu aktivnost realizacijom teme <i>Pismenost kroz vjekove</i>.
</p>
                  <p className="mb-4 text-blueGray-500">Učenik Benjamin Tabaković prezentovao je ovu temu, koja je dobila poseban značaj aktivnim učešćem prisutnih  učenica i učenika. Pored iznošenja vlastitih stavova i mišljenja, navodile/i su i primjere kako poboljšati pismenost u našem društvu.
</p> 
                  <p className="mb-4 text-blueGray-500">Profesorice Vedina Širbegović i Amra Lagumdžija su bile u ulozi moderatorica Projekta, te vodile debatu sa učenicama i učenicima, koje/i su, na sebi svojstven način, komentarisale/i o ličnom pristupu knjizi, čitanju i opismenjavanju. </p> 
                  <p className="mb-4 text-blueGray-500">Era razvoja informatičkih tehnologija pomaže svakom pojedincu da dobije željenu informaciju, ali, osjećaj koji imam dok moji prstu listaju pročitane stranice knjige je neobjašnjivo lijep,  istakla je jedna od prisutnih učenica.</p>  
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">IV4 i IV5 razred u posjeti Sarajevskoj berzi (SASE)
</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={ejs1} alt="" />
                    </div>
                    <div>
                        <img src={ejs2} alt="" />
                    </div>
                    <div>
                        <img src={ejs3} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">

                  <p className="mb-4 text-blueGray-500">Uposlenici Sarajevske berze su u srijedu, 25.10.2023. godine, za učenice i učenike IV4 i IV5 razreda, organizovali edukativnu radionicu o berzanskom poslovanju i naporima da osiguraju najviše standarde u prometu vrijednosnih papira i budu jedan od pokretača potpunog razvoja tržišta kapitala i ekonomskog  razvoja Bosne i Hercegovine.</p> 
                  <p className="mb-4 text-blueGray-500">Zakon o vrijednosnim papirima definiše berzu kao «mjesto za povezivanje ponude i potražnje vrijednosnih papira i poslovanje vrijednosnim papirima, po unaprijed utvrđenim pravilima». Povezivanjem ponude i potražnje za vrijednosnim papirima dolazi se do kurseva (ili cijena) vrijednosnih papira kojima se trguje. </p> 
                  <p className="mb-4 text-blueGray-500">Treća funkcija berze jeste osiguravanje informacija o ponudi i potražnji kao i o tržišnoj vrijednosti trgovanih vrijednosnih papira. Trgovanje na Sarajevskoj berzi se odvija na kotaciji i slobodnom tržištu i to kontinuiranim i aukcijskim trgovanjem. </p> 
                  <p className="mb-4 text-blueGray-500">Kotacija se sastoji iz različitih tržišta kao što su tržišta dionicama privrednih društava, investicijskih fondova i sl. Slobodno trgovanje odvija se unutar nekoliko segmenata i podsegmenata berze. Na Sarajevskoj berzi-burzi trguje se elektronski, bez prisustva brokera na Berzi. Brokeri su preko svojih radnih stanica povezani sa Berzanskim trgovinskim sistemom (BTS). Trgovati mogu samo ovlašteni brokeri i dileri članova SASE.</p> 
                  <p className="mb-4 text-blueGray-500">Učenice i učenici su iskazale/i poseban interes za Bitcoin, decentraliziranu, distribuiranu, anonimnu platnu mrežu, a ujedno i virtualnu kriptovalutu koju ta platna  mreža  koristi, te aktuelne trendove na tržištu digitalnih valuta.</p> 
                  <p className="mb-4 text-blueGray-500">Zahvaljujemo g-dinu Hodžić Ahmetu iz Odbora za reviziju SASE za entuzijazam i vrhunski profesionalizam  u educiranju naših učenica i učenika.</p> 
                  <p className="mb-4 text-blueGray-500">Posjeta je realizovana u okviru projekta  UPOZNAJ PRIVREDU KANTONA SARAJEVO, kojeg vodi Indira Zeković, prof.</p> 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Predavanje o opasnosti od mina</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={opasno1} alt="" />
                    </div>
                    <div>
                        <img src={opasno2} alt="" />
                    </div>
                    <div>
                        <img src={opasno3} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">

                  <p className="mb-4 text-blueGray-500">Dana 17. i 18. oktobra pripadnici EUFOR-a su održali predavanje za učenike II i III razreda. </p> 
                  <p className="mb-4 text-blueGray-500">Cilj predavanja je podizanje svijesti učenica i učenika o opasnostima od mina i neeksplodiranih ubojitih sredstava.</p> 
                  <p className="mb-4 text-blueGray-500">Prezentovani su pojmovi vezano za mine i NUS, načini uočavanja istih, minirana područja, oznake za upozorenje, a posebno značajno, način na koji će izbjeći opasnost i pravilno reagovati u slučaju uočavanja NUS-a.</p> 
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">"<i>Putem svile</i>" sa Hamzom Ridžalom </h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={svila1} alt="" />
                    </div>
                    <div>
                        <img src={svila2} alt="" />
                    </div>
                    <div>
                        <img src={svila3} alt="" />
                    </div>
                    <div>
                        <img src={svila5} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">

                  <p className="mb-4 text-blueGray-500">U srijedu, 18.10. 2023. održana je promocija knjige <i>Putem svile</i>, autorskog dvojca Hamze Ridžala i Ediba Kadića. Promociji su prosustvovale/i učenice i učenici IV3 i III4 razreda, te prof. Ermina Muratović. </p> 
                  <p className="mb-4 text-blueGray-500">Ugostili smo putopisca Hamzu Ridžala, neobično, ali ubrzo su uloge zamijenjene, jer smo mi postali gosti na Ridžalovom putovanju kroz drevnu Rumeliju, Anadoliju i mnoge zemlje kroz koje je ovaj divni čovjek prošao sa prijateljem Edibom Kadićem. </p> 
                  <p className="mb-4 text-blueGray-500">Ovo korisno predavanje obilovalo je autorovim poučnim anegdotama, iskušenjima, doživljajima i duhovnim perspektivama. Ridžalovo i Kadićevo putovanje promijenilo nas je i podsjetilo da snovi nisu nedostižni, oni su u nama i mogući su.</p> 
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">OBILJEŽAVANJE SVJETSKOG DANA JABUKA</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={jabuka1} alt="" />
                    </div>
                    <div>
                        <img src={jabuka2} alt="" />
                    </div>
                    <div>
                        <img src={jabuka3} alt="" />
                    </div>
                    <div>
                        <img src={jabuka4} alt="" />
                    </div>
                    <div>
                        <img src={jabuka5} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">

                  <p className="mb-4 text-blueGray-500">Tradicija obilježavanja Dana jabuke započela je 20. oktobra davnih devedesetih godina u Londonu s ciljem promocije njenih zdravstvenih benefita i demonstracije mnogobrojnih sorti koje se u Engleskoj uzgajaju. </p> 
                  <p className="mb-4 text-blueGray-500">Vremenom su, tradiciju obilježavanja Dana jabuke, prihvatile brojne škole i udruženja širom svijeta, što je, već odavno, tradicija i u našoj školi.  </p> 
                  <p className="mb-4 text-blueGray-500">Poseban značaj pridaje se promociji svakodnevnog konzumiranja jabuke zbog njenog nezamjenjivog uticaja na  zdravlje čovjeka.</p> 
                  <p className="mb-4 text-blueGray-500">U čast <i>kraljici voća</i>, naše/i vrijedne/i učenice i učenici prvog razreda, koje su pripremale profesorice, Merima Likić i Edina Kopić, organizovale/i su izložbu likovnih radova, edukativnih panoa i degustaciju raznih delicija od jabuke. </p> 
                  <p className="mb-4 text-blueGray-500">Na štandovima su izložene jabuke različitih vrsta, pekmezi, jabukovače, tufahije, te drugi kolači od jabuka. </p> 
                  <p className="mb-4 text-blueGray-500">Pored zdravstvenih kvaliteta jabuke, učenice i učenici su istakle/i i vezu jabuke u hemiji, fizici, književnosti i drugim naukama. </p> 
                  <p className="mb-4 text-blueGray-500">Na kraju su poručile/i da se jedu jabuke, shodno izreci - <i>Jedna jabuka na dan, tjera doktora iz kuće van.</i></p> 
 

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
               <video src={videojabuka} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/>
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Učenice i učenici II4 i III1 razreda posjetili Carinski terminal Sarajevo u Rajlovcu</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={carina1} alt="" />
                    </div>
                    <div>
                        <img src={carina2} alt="" />
                    </div>
                    <div>
                        <img src={carina3} alt="" />
                    </div>
                    <div>
                        <img src={carina4} alt="" />
                    </div>
                    <div>
                        <img src={carina5} alt="" />
                    </div>


                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Uposlenice i uposlenici Carinskog terminala Sarajevo, upoznale/i su učenice i učenike sa carinskim tarifama, postupcima i procedurama kod uvoza i izvoza, relevantnom legislativom u ovoj oblasti, informatičkim aspektima carinskih procedura, zabranama, ograničenjima, oslobađanjima u ovoj oblasti, saradnjom sa nivoima zakonodavne, sudske i izvršne vlasti.
</p>
                  <p className="mb-4 text-blueGray-500">Prezentovana im je i uloga Carinske uprave u ostvarivanju zahtjevnih ciljeva koje pred BiH postavlja proces približavanja Evropskoj uniji, a to su: ubrzanje protoka roba i ljudi uz
istovremeno jačanje kontrole, podizanje nivoa bezbjednosti građana, razvijanje saradnje sa relevantnim domaćim i međunarodnim institucijama s ciljem harmonizacije procedura i
usklađivanja zakonodavstva prema zahtjevima EU, bolju razmjenu informacija s drugim institucijama, efikasnu borbu protiv ilegalne trgovine i druge oblike carinskih ili poreskih
prevara.
</p>
                  <p className="mb-4 text-blueGray-500">Zahvaljujemo uposlenicama i uposlenicima Carinskog terminala Rajlovac za vrhunski profesionalizam u realizaciji ove
edukativne radionice koja dodatno doprinosi edukaciji našim vrijednim učenicama i učenicima.

</p>
                  <p className="mb-4 text-blueGray-500">Posjeta je realizovana u okviru projekta <i>Upoznaj privredu Kantona Sarajevo</i> kojeg vodi, izuzetno vrijedna i profesiji maksimalno posvećena, profesorica Indira Zeković.</p>
                       
              
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Obilježavanje godišnjice pogibije Komandanta Zaima Imamovića</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={g1} alt="" />
                    </div>
                    <div>
                        <img src={g2} alt="" />
                    </div>
                    <div>
                        <img src={g3} alt="" />
                    </div>
                    

                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Dana 9.10.2023. godine, učenice i učenici trećeg i četvrtog razreda,  koje je vodio profesor Sejad Šenderović, prisustvovale/i su obilježavanju 28. godišnjice pogibije a.r. pukovnika i Komandanta 14. divizije Prvog Korpusa ARBiH, Zaima Imamovića.
</p>
                  <p className="mb-4 text-blueGray-500">Tim povodom su u organizaciji PD "Zlatni ljiljan" posjetile/i mjesto pogibije Čelinu na planini Treskavici, gdje je održano prigodno predavanje Komandantovih saboraca o njegovom ratnom putu. </p>
                  <p className="mb-4 text-blueGray-500">Program je upotpunjen polaganjem cvijeća na Spomen obilježju posvećenom herojima odbrane Trnova, te 
završen zajedničkim tradicionalnim ručkom - vojničkim grahom. 
</p>
                  

                       
              
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Realizovan školski izlet</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={izlet1} alt="" />
                    </div>
                    <div>
                        <img src={izlet2} alt="" />
                    </div>
                    <div>
                        <img src={izlet3} alt="" />
                    </div>
                    <div>
                        <img src={izlet4} alt="" />
                    </div>
                    <div>
                        <img src={izlet5} alt="" />
                    </div>
                    <div>
                        <img src={izlet5} alt="" />
                    </div>
                    <div>
                        <img src={izlet6} alt="" />
                    </div>
                    <div>
                        <img src={izlet7} alt="" />
                    </div>
                    <div>
                        <img src={izlet8} alt="" />
                    </div>
                    <div>
                        <img src={izlet9} alt="" />
                    </div>

                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">U petak, 6. oktobra 2023. godine, realizovan je redovan školski izlet. Prema želji učenica i učenika upriličene su tri destinacije. 
</p>
                  <p className="mb-4 text-blueGray-500">S jedne strane, mlađe/i učenice/učenici birale/i su putovanje vozom u prelijepi Mostar, čije staro jezgro grada pod UNESCO-vom zaštitom, ne možete zaobići i uvijek će vas jednako fascinirati svojom ljepotom. </p>
                  <p className="mb-4 text-blueGray-500">U pratnji razrednica, profesorica i profesora, stručne službe Škole i direktorice, učenice i učenici posjetile/i su Gimnaziju Mostar, te Šantićev park, u neposrednoj blizini Starog mosta, gdje se nalazi bista Alekse Šantića. Prisjetile/i smo se i Šantićeve lijepe Emine. 
</p>
                  <p className="mb-4 text-blueGray-500">Učenice i učenici trećeg i četvrtog razreda, odlučile/i su se za boravak u prirodi i druženje uz sportske i zabavne aktivnosti na Spomeniku prirode Vrelo Bosne i izletištu Stojčevac. I jedni i drugi uživali su u ugodnom druženju, okupanom sunčevim zrakama, što je doprinijelo cjelokupnom užitku.</p>

                       
              
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Posjeta Historijskom muzeju BiH</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={muzej1} alt="" />
                    </div>
                    <div>
                        <img src={muzej2} alt="" />
                    </div>
                    <div>
                        <img src={muzej3} alt="" />
                    </div>
                    <div>
                        <img src={muzej4} alt="" />
                    </div>

                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Učenici/učenice IV4 razreda posjetile/i su, u pratnji razrednice, profesorice Indire Zeković, Historijski muzej Bosne i Hercegovine, 3.oktobra 2023. godine.
</p>
                  <p className="mb-4 text-blueGray-500">Tematska struktura muzeja, kao centralne institucije za proučavanje i muzeološko prikazivanje historije Bosne i Hercegovine, obuhvata vrijeme od njenog prvog spominjanja u historijskim izvorima do savremene države BiH. Zasebna oblast istraživanja i prezentacije je period Bosne i Hercegovine od 1990. godine do danas, s impresivnom zbirkom o opkoljenom Sarajevu. Muzej posjeduje fond od oko 400.000 muzejskih predmeta, dokumenata i umjetničkih djela.
Kustos muzeja g-din Nermin Pustahija, prezentirao je učenicama i učenicima, između ostalog, sadržaje izložbe o bosanskohercegovačkoj kinematografiji. Predmeti iz Drugog svjetskog rata i predmeti iz perioda socijalizma služe za proučavanje i muzeološko prikazivanje vremena od 1941. do 1990. godine.</p>
                  <p className="mb-4 text-blueGray-500">Enterijeri  Historijskog muzeja ukrašeni su mozaicima i umjetničkim djelima. Tako je i u depou gdje su sklonjeni mnogi važni eksponati.
</p>
                  <p className="mb-4 text-blueGray-500">Učenici/učenice su bile/i u prilici da pogledaju izložbu gastro baštine BiH. Posjetiocima se nudi jedinstvena kolekcija autentičnih artefakata koji datiraju od srednjovjekovnog razdoblja do austrougarskog perioda. Kustos je učenicama i učenicima prezentirao priče i historijske činjenice iz tradicije i običaja naših predaka.</p>
<p className="mb-4 text-blueGray-500">Zahvaljujemo uposlenicima Muzeja za vrhunski profesionalizam u organizaciji posjete i značajan doprinos edukaciji o historiji BiH.</p>
                       
              
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Edukativno - rekreativne aktivnosti nastavljene su obilaskom brda Žuč, smještenog nadomak Sarajeva </h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={streliste0} alt="" />
                    </div>
                    <div>
                        <img src={streliste1} alt="" />
                    </div>

                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Tom prilikom, obišle/i su strelište i u organizaciji SK "Karakal" naučili osnove sportskog streljaštva, te gađali iz pištolja. Učenice/i su postigle/i izuzetne rezultate prilikom gađanja i dobile/ipohvale od instruktora. 
</p>
                  <p className="mb-4 text-blueGray-500">Ovakvim i sličnim aktivnostima u vrijeme vikenda učenice i učenici, u pratnji profesora, pokazuju kako se i slobodno vrijeme može organizovati zanimljivo i korisno.</p>
                       
              
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Nastavljamo osvajati vrhove</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={vrh1} alt="" />
                    </div>

                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Dana,17. septembra 2023. godine, učenice i učenici trećeg razreda, popeli su se na vrh Trebevića u pratnji profesora, mr. Šenderović Sejada.</p>
                  <p className="mb-4 text-blueGray-500">Uživale/i su u prirodnim ljepotama olimpijske planine i dodatno se educirale/i o osnovama planinarstva, topografije i orijentacije na nepoznatom terenu.</p>
                       
              
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Posjeta dopredsjedavajućeg Općinskog vijeća, Nedima Salihagića i predstavnika KK SPARS-a</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={spars2} alt="" />
                    </div>
                    <div>
                        <img src={spars3} alt="" />
                    </div>
                    <div>
                        <img src={spars4} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Dana 20.9.2023, neposredno prije utakmice sa KK Vojvodina, svojim prisustvom počastili su nas dopredsjedavajući Općinskog vijeća Novo Sarajevo, Nedim Salihagić, reprezentativac SPARS-a - Ajdin Penava i saigrač iz kluba Marquise Moore.</p>
                  <p className="mb-4 text-blueGray-500">Tom prilikom učenicama i učenicima poklonjene su ulaznice za predstojeći događaj.</p>
                  <p className="mb-4 text-blueGray-500">Zahvaljujemo KK SPARS, a posebno gosp. Nedimu Salihagiću za inicijativu posjete Školi, koja je dodatno doprinijela našoj saradnji sa Općinom Novo Sarajevo.</p>  
                       
              
 

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">SRETAN 111. ROĐENDAN</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={dan1} alt="" />
                    </div>
                    <div>
                        <img src={dan2} alt="" />
                    </div>
                    <div>
                        <img src={dan3} alt="" />
                    </div>
                    <div>
                        <img src={dan4} alt="" />
                    </div>
                    <div>
                        <img src={dan5} alt="" />
                    </div>
                    <div>
                        <img src={dan6} alt="" />
                    </div>
                    <div>
                        <img src={dan7} alt="" />
                    </div>
                    <div>
                        <img src={dan8} alt="" />
                    </div>
                    <div>
                        <img src={dan9} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">1. oktobra obilježavamo dan škole.</p>
                  <p className="mb-4 text-blueGray-500">Povodom toga upućujemo iskrene čestitke našoj dragoj direktorici, svim uposlenicima, učenicima, roditeljima i saradnicima sa željom da i svake naredne godine budemo među najboljim školama i zajedničkim snagama učestvujemo u misiji odgoja i obrazovanja budućih nosioca društva.</p> 
              
 

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
               <video src={video} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/>
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">II HUB STEM TAKMIČENJE</h6>
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
                    <div>
                        <img src={slika3} alt="" />
                    </div>
                    <div>
                        <img src={slika4} alt="" />
                    </div>
                    <div>
                        <img src={slika5} alt="" />
                    </div>
                    
                    
                </Carousel>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
                    
                  <p className="mb-4 text-blueGray-500">Dana, 03.06.2023. godine, održano je II HUB STEM takmičenje iz oblasti Science, Technology, Engineering, Mathematics u organizaciji Homework HUB-a.</p>
                  <p className="mb-4 text-blueGray-500">Na takmičenju je učestvovalo više od četrdesetak srednjoškolaca prvog i drugog razreda srednjih škola Kantona Sarajevo.</p> 
                  <p className="mb-4 text-blueGray-500">Izuzetna nam je čast istaći da su naše učenice i učenici, pored značajne usvojenosti teorijskih sadržaja iz predmeta Biologije, Hemije i Fizike, pokazali izvanredne vještine i u eksperimentalnom dijelu, uključujući i 3D printer.</p> 
                  <p className="mb-4 text-blueGray-500">Naše zadovoljstvo je još više iz razloga što u Nastavnom planu i programu Srednje ekonomske škole, Sarajevo nema predmeta Bilogija, Hemija se izučava samo u prvom polugodištu prvog razreda, predmet Fizika izučava se samo u prvom razredu, te da nemamo niti jedan opremljen laboratorijski kabinet u kojem bi se mogli izvoditi eksperimenti.</p> 
                  <p className="mb-4 text-blueGray-500">Takmičarsku ekipu naše škole pripremala je i vodila profesorica Hemije, Edina Kopić, a takmičile/i su se sljedeće/i učenice/i:</p> 
                  <p className="mb-4 text-blueGray-500">1. Arman Hadžić, I3 (64 boda);</p>
                  <p className="mb-4 text-blueGray-500">2. Sara Anjum, II6 (50 bodova);</p>  
                  <p className="mb-4 text-blueGray-500">3. Terik Kamenjašević, I3 (49 bodova);</p>
                  <p className="mb-4 text-blueGray-500">4. Merjem Omić, I3 (47 bodova).</p>
                  <p className="mb-4 text-blueGray-500">Osim postignutih rezultata, koji nas čine iznimno ponosnim, puno važnijom smatramo činjenicu da smo uspjeli u namjeri da odgajamo i obrazujemo generacije koje ulažu maksimalan trud i djeluju bez bilo kakvog pritiska, djeluju iz želje da svakodnevno saznaju nešto novo motivisani za višim životnim postignućima.</p>
                  <p className="mb-4 text-blueGray-500">Iskrene čestitke učenicama/učenicima i profesoricama/profesorima STEM grupe predmeta za postignute rezultate!</p>     
              
 

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