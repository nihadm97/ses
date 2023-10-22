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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Učenice i učenici II 4 i III 1 razreda posjetili Carinski terminal Sarajevo u Rajlovcu</h6>
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