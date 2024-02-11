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
import goradzde1 from './images/goradzde1.jpg';
import goradzde2 from './images/goradzde2.jpg';
import goradzde3 from './images/goradzde3.jpg';
import goradzde4 from './images/goradzde4.jpg';
import goradzde5 from './images/goradzde5.jpg';
import goradzde6 from './images/goradzde6.jpg';
import goradzde7 from './images/goradzde7.jpg';
import goradzde9 from './images/goradzde8.jpg';
import goradzde8 from './images/goradzde26.jpg';
import goradzde10 from './images/goradzde9.jpg';
import goradzde11 from './images/goradzde10.jpg';
import goradzde12 from './images/goradzde11.jpg';
import goradzde13 from './images/goradzde12.jpg';
import goradzde14 from './images/goradzde13.jpg';
import goradzde15 from './images/goradzde14.jpg';
import goradzde16 from './images/goradzde15.jpg';
import goradzde17 from './images/goradzde16.jpg';
import goradzde18 from './images/goradzde17.jpg';
import goradzde19 from './images/goradzde18.jpg';
import goradzde20 from './images/goradzde19.jpg';
import goradzde21 from './images/goradzde20.jpg';
import goradzde22 from './images/goradzde21.jpg';
import goradzde23 from './images/goradzde22.jpg';
import goradzde24 from './images/goradzde23.jpg';
import goradzde25 from './images/goradzde24.jpg';
import goradzde26 from './images/goradzde25.jpg';

import glob1 from './images/glob1.jpg';
import glob2 from './images/glob2.jpg';
import glob3 from './images/glob3.jpg';
import glob4 from './images/glob4.jpg';
import glob5 from './images/glob5.jpg';
import glob6 from './images/glob6.jpg';
import glob7 from './images/glob7.jpg';
import glob8 from './images/glob8.jpg';
import glob9 from './images/glob9.jpg';

import ples1 from './images/ples1.jpg';
import ples2 from './images/ples2.jpg';
import ples3 from './images/ples3.jpg';
import ples4 from './images/ples4.jpg';
import plesvideo from './images/ples1.mp4';

import dzeki1 from './images/dzeki1.jpg';
import dzeki2 from './images/dzeki2.jpg';
import dzeki3 from './images/dzeki3.jpg';
import dzeki4 from './images/dzeki4.jpg';
import dzeki5 from './images/dzeki5.jpg';
import dzeki6 from './images/dzeki6.jpg';
import dzeki7 from './images/dzeki7.jpg';

import ha1 from './images/ha1.jpg';
import ha2 from './images/ha2.jpg';
import ha3 from './images/ha3.jpg';
import ha4 from './images/ha4.jpg';

import haa1 from './images/haa1.jpg';
import haa2 from './images/haa2.jpg';
import haa3 from './images/haa3.jpg';


import dand1 from './images/25ti1.jpg';
import dand2 from './images/25ti2.jpg';
import dand3 from './images/25ti3.jpg';
import dand4 from './images/25ti4.jpg';

import aaa1 from './images/aaa1.jpg';
import aaa2 from './images/aaa2.jpg';
import aaa3 from './images/aaa3.jpg';

import yunus1 from './images/yunus1.jpg';
import yunus2 from './images/yunus2.jpg';
import yunus3 from './images/yunus3.jpg';
import yunus4 from './images/yunus4.jpg';
import yunus5 from './images/yunus5.jpg';
import yunus6 from './images/yunus6.jpg';
import yunus7 from './images/yunus7.jpg';
import yunus8 from './images/yunus8.jpg';
import yunus9 from './images/yunus9.jpg';
import yunus10 from './images/yunus10.jpg';
import yunus11 from './images/yunus11.jpg';

import pazar1 from './images/pazar1.jpg';
import pazar2 from './images/pazar2.jpg';
import pazar3 from './images/pazar3.jpg';
import pazar4 from './images/pazar4.jpg';

import poduzetnici1 from './images/poduzetnici1.jpg';
import poduzetnici2 from './images/poduzetnici2.jpg';
import poduzetnici3 from './images/poduzetnici3.jpg';
import poduzetnici4 from './images/poduzetnici4.jpg';
import poduzetnici5 from './images/poduzetnici5.jpg';
import poduzetnici6 from './images/poduzetnici6.jpg';

import aids1 from './images/aids1.jpg';
import aids2 from './images/aids2.jpg';
import aids3 from './images/aids3.jpg';
import aids4 from './images/aids4.jpg';
import aids5 from './images/aids5.jpg';

import dandrzavnosti1 from './images/dandrzavnosti1.jpg';
import dandrzavnosti2 from './images/dandrzavnosti2.jpg';
import videoplesdd from './images/videoplesadd.mp4';

import dipanaida1 from './images/dipanaida1.jpg';
import dipanaida2 from './images/dipanaida2.jpg';
import dipanaida3 from './images/dipanaida3.jpg';
import dipanaida4 from './images/dipanaida4.jpg';

import centralna1 from './images/centralna1.jpg';
import centralna2 from './images/centralna2.jpg';
import centralna3 from './images/centralna3.jpg';
import centralna4 from './images/centralna4.jpg';
import centralna5 from './images/centralna5.jpg';
import centralna6 from './images/centralna6.jpg';

import vladimir1 from './images/vladimir1.jpg';
import vladimir2 from './images/vladimir2.jpg';
import vladimir3 from './images/vladimir3.jpg';

import argeta1 from './images/argeta1.jpg';
import argeta2 from './images/argeta2.jpg';
import argeta3 from './images/argeta3.jpg';
import argeta4 from './images/argeta4.jpg';
import argeta5 from './images/argeta5.jpg';

import stem23 from './images/stem23.jpg';
import stem1 from './images/stem1.jpg';
import stem2 from './images/stem2.jpg';
import stem3 from './images/stem3.jpg';
import stem4 from './images/stem4.jpg';
import stem5 from './images/stem5.jpg';
import stem6 from './images/stem6.jpg';
import stem7 from './images/stem7.jpg';
import stem8 from './images/stem8.jpg';
import stem9 from './images/stem9.jpg';

import skolap1 from './images/skolap1.jpg';
import skolap2 from './images/skolap2.jpg';

import radionica1 from './images/radionica1.jpg';
import radionica2 from './images/radionica2.jpg';
import radionica3 from './images/radionica3.jpg';

import zec1 from './images/zec1.jpg';
import zec2 from './images/zec2.jpg';
import zec3 from './images/zec3.jpg';
import zec4 from './images/zec4.jpg';
import zec5 from './images/zec5.jpg';
import zec6 from './images/zec6.jpg';
import zec7 from './images/zec7.jpg';
import zec8 from './images/zec8.jpg';
import zec9 from './images/zec9.jpg';

import burchd1 from './images/burch1.jpg';
import burchd2 from './images/burch2.jpg';
import burchd3 from './images/burch3.jpg';
import burchd4 from './images/burch4.jpg';
import burchd5 from './images/burch5.jpg';
import burchd6 from './images/burch6.jpg';
import burchd7 from './images/burch7.jpg';

import bamba0 from './images/bamba0.jpg';
import bamba1 from './images/bamba1.jpg';
import bamba2 from './images/bamba2.jpg';
import bamba3 from './images/bamba3.jpg';
import bamba4 from './images/bamba4.jpg';
import bamba5 from './images/bamba5.jpg';
import bamba6 from './images/bamba6.jpg';
import bamba7 from './images/bamba7.jpg';
import bamba8 from './images/bamba8.jpg';
import bamba9 from './images/bamba9.jpg';
import bamba10 from './images/bamba10.jpg';
import bamba11 from './images/bamba11.jpg';
import bamba12 from './images/bamba12.jpg';

import noc1 from './images/noc1.jpg';
import noc2 from './images/noc2.jpg';
import noc3 from './images/noc3.jpg';
import noc4 from './images/noc4.jpg';
import noc5 from './images/noc5.jpg';
import noc6 from './images/noc6.jpg';
import noc7 from './images/noc7.jpg';
import noc8 from './images/noc8.jpg';
import noc9 from './images/noc9.jpg';
import noc10 from './images/noc10.jpg';
import noc11 from './images/noc11.jpg';
import noc12 from './images/noc12.jpg';
import noc13 from './images/noc13.jpg';
import noc14 from './images/noc14.jpg';
import noc15 from './images/noc15.jpg';
import noc16 from './images/noc16.jpg';
import noc17 from './images/noc17.jpg';

import faris1 from './images/faris1.jpg';
import faris2 from './images/faris2.jpg';
import faris3 from './images/faris3.jpg';
import faris4 from './images/faris4.jpg';
import faris5 from './images/faris5.jpg';
import faris6 from './images/faris6.jpg';
import faris7 from './images/faris7.jpg';

import februar1 from './images/februar1.jpg';
import februar2 from './images/februar2.jpg';
import februar3 from './images/februar3.jpg';
import februar4 from './images/februar4.jpg';
import februar5 from './images/februar5.jpg';
import februar6 from './images/februar6.jpg';
import februar7 from './images/februar7.webp';
import februar8 from './images/februar8.jpg';

import sender1 from './images/sender1.jpg';
import sender2 from './images/sender2.jpg';
import sender3 from './images/sender3.jpg';
import sender4 from './images/sender4.jpg';
import sender5 from './images/sender5.jpg';

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Planinarska tura</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={sender1} alt="" />
                    </div>
                    <div>
                        <img src={sender2} alt="" />
                    </div>
                    <div>
                        <img src={sender3} alt="" />
                    </div>
                    <div>
                        <img src={sender4} alt="" />
                    </div>
                    <div>
                        <img src={sender5} alt="" />
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
Dana 08. februara 2024. godine, učenice i učenici trećeg i četvrtog razreda naše škole, realizovali su planinarsku turu kanjonom rijeke Rakitnice: selo Umoljani, Gradina, Dugo polje i Studeni potok (vodenice) u pratnji profesora Šenderović Sejada.</p>
<p className="mb-4 text-blueGray-500">
Tom prilikom, pored toga što su upoznali taj kraj, a neki od njih i po prvi put svjedočili ljepotama kojima Bjelašnica obiluje, određivali su orjentaciju u prostoru, ručali u restoranu Čardak, te detaljnije upoznali historiju i tradiciju naroda tog kraja. Na kraju druženja poigralo se i narodno kolo.</p>

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Nova posjeta kompaniji <i>Atlantic Argeta d.o.o. Sarajevo</i></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={februar1} alt="" />
                    </div>
                    <div>
                        <img src={februar2} alt="" />
                    </div>
                    <div>
                        <img src={februar3} alt="" />
                    </div>
                    <div>
                        <img src={februar4} alt="" />
                    </div>
                    <div>
                        <img src={februar5} alt="" />
                    </div>
                    <div>
                        <img src={februar6} alt="" />
                    </div>
                    <div>
                        <img src={februar7} alt="" />
                    </div>
                    <div>
                        <img src={februar8} alt="" />
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
Učenici i učenice II4, II5 i III1 razreda posjetili/e su 24.01.2024. godine kompaniju <i>Atlantic Argeta d.o.o. Sarajevo</i>, koja posluje u sastavu Atlantic Grupe, kao jedna od proizvodnji delikatesnog namaza Argeta. Atlantic Argeta d.o.o. Sarajevo bavi se isključivo proizvodnjom delikatesnih namaza samo iz komada čistog mesa, jer drugih proizvoda od mesa u svom asortimanu  nema, što ih diferencira od ostalih fabrika kada je u pitanju mesna industrija.</p>
<p className="mb-4 text-blueGray-500">
Uposlenici Argete su nas upoznali sa <i>korporativnim vrijednostima Atlantic Grupe</i>, a te vrijednosti su <i>rast, briga, otvorenost i strast</i>. Ove vrijednosti čine temelj poslovanja Atlantic Argeta d.o.o. Sarajevo. Imaju  ambiciozne <i>planove za proširenje kapaciteta, rast prodaje  i osvajanje novih tržišta</i>.</p>
<p className="mb-4 text-blueGray-500">
Beskompromisna kvaliteta proizvoda je temelj poslovanja jer žele ponuditi potrošačima proizvode visoke kvalitete. Potrošači su im najbitniji i u stalnom su fokusu R&D i marketing odjela, pa stalno smišljaju novitete, dodatne promjene i unapređenja proizvoda. Povjerenje je temelj dugoročnih odnosa s potrošačima i partnerima. Pouzdanost i kvaliteta proizvoda ključni su elementi imidža  kompanije kojoj se može vjerovati. <i>Argeta je brand broj 1</i> među mesnim paštetama u Europi i u Bosni i Hercegovini, a ta pozicija se gradila prvenstveno kvalitetom. Biti broj 1 u Evropi rezultat je iznimne kvalitete svih Argetinih proizvoda, jedinstvene recepture kao i predanog i profesionalnog rada svih timova zaduženih za upravljanje brandom Argeta. </p>
<p className="mb-4 text-blueGray-500">
Argeta se i ovom posjetom potrudila biti maksimalno transparentna  i naši učenici/ce  su se na licu mjesta uvjerili <i>u najviše standarde kvalitete i organizacije proizvodnje i vrhunsko upravljanje brendom  Argeta</i>.</p>
<p className="mb-4 text-blueGray-500">
Osim toga, <i>održivost</i> je još jedna ključna vrijednost koju promoviraju. Nastoje smanjiti ekološki utjecaj poslovanja i podržavati društveno odgovorne inicijative. Ovaj veliki brend, kroz niz različitih projekata, uključio se u lokalnu zajednicu svojim <i>društveno odgovornim ponašanjem</i>. Brojni sportski, humanitarni i obrazovni projekti uspješno su provedeni zahvaljujući spremnosti Argetinih uposlenika i uprave da pruže podršku lokalnoj zajednici, što je praksa koja će se nastaviti i u budućnosti.</p>
<p className="mb-4 text-blueGray-500">
Posjeta je realizirana u okviru projekta <i>UPOZNAJ PRIVREDU KANTONA SARAJEVO</i>, Indira Zeković, prof.</p>

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Oproštaj od Farisa, druga, srednjoškolca, djeteta ovog grada</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={faris1} alt="" />
                    </div>
                    <div>
                        <img src={faris2} alt="" />
                    </div>
                    <div>
                        <img src={faris3} alt="" />
                    </div>
                    <div>
                        <img src={faris4} alt="" />
                    </div>
                    <div>
                        <img src={faris5} alt="" />
                    </div>
                    <div>
                        <img src={faris6} alt="" />
                    </div>
                    <div>
                        <img src={faris7} alt="" />
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
Danas smo se oprostili od Farisa, druga, srednjoškolca, djeteta ovog grada. Minutom šutnje, fatihom i emotivnim govorom učenici i učenice naše škole su poslali snažnu poruku.</p>
 
<p className="mb-4 text-blueGray-500">
Minutom šutnje, fatihom i emotivnim govorom učenici i učenice naše škole su poslali snažnu poruku.</p>
<p className="mb-4 text-blueGray-500">
28. januar 2024. godine</p>
<p className="mb-4 text-blueGray-500">
23:33 h: -“nije gasni”</p>
<p className="mb-4 text-blueGray-500">
- “jesi pogođen?”</p>
<p className="mb-4 text-blueGray-500">
-“jesam”</p>
<p className="mb-4 text-blueGray-500">
Bile su zadnje riječi jedne nevine duše koja je stradala na mjestu na kojem se našla u pogrešno vrijeme. </p>
<p className="mb-4 text-blueGray-500">
Farisova priča počinje još u vrtiću, gdje je imao jednog druga od kojeg je bio nerazdvojan da ga je čak i sa svojih šest godina smatrao bratom. S njim je odrastao, neznajući da će taj isti drug nažalost gledati njegov posljednji trenutak života. </p>
<p className="mb-4 text-blueGray-500">
Faris je bio jedna od rijetkih osoba koja se u tom periodu nije šalila na bilo čiji račun. 
Uvijek je još kao i dječak nastojao pokazati svima nešto novo. </p>
<p className="mb-4 text-blueGray-500">
Kako je osnovna škola došla, druženje dva druga se nastavilo. Bili su nerazdvojni. Kao i svako dijete od nas Faris je imao svoj san. Ubrzo nakon osnovne škole došla je i srednja škola. Sa dva druga prešlo je na četiri. Družili su se, nisu bili problematični, uživali su zajedno i ne biste pomislili da imaju sposobnost da mrze bilo koga. Svima su bili spremni pomoći, bili su uvijek nasmijani i prije svega dobri ljudi. </p>
<p className="mb-4 text-blueGray-500">
Uprkos godinama koje su prošle nakon osnovne škole, svaki put kad bismo se sreli Farisa bi se uvijek sa istim toplim osmijehom pozdravio. To su trenuci koji će zauvijek ostati u sjećanjima. 
</p>
<p className="mb-4 text-blueGray-500">
28. januara 2024. godine nažalost se priča o četiri druga završila. Ostala su samo tri druga sa velikom prazninom u dušama i srcima. Ali uspomena na Farisa će da živi sve dok i mi živimo.</p>
<p className="mb-4 text-blueGray-500">
Nemojte podleći porocima kao što su sve vrste droga i ostalih opijata i nemojte raditi nezakonite stvari. Znamo da nam je, nažalost, ukorijenjeno u ovo današnje vrijeme da je to "kul" i da se tako stiče tinejdžersko iskustvo i živi život punim plućima, međutim, to je potpuno pogrešno. Pomislite na svoje roditelje, prijetelje i vama bliske i drage ljude prije nego počinite grešku koja se ne moze popraviti. Držite svoje voljene čvrsto uz sebe i svakodnevno ih podsjećajte koliko ih volite i koliko su vam bitni, jer nikada ne znate kad će biti posljednji trenutak. Učite i radite na sebi i svojoj budućnosti, bit ćete zahvalni sebi jednog dana za to. Svoju energiju ulažite u stvari koje su korisne za vas i koje ne štete ni vama ni okolini. Ovaj događaj svima mora da nam bude lekcija da budemo oprezni u svako doba dana i noći jer bilo ko od nas je mogao da se nađe u ovakvoj situaciji. </p>
<p className="mb-4 text-blueGray-500">
Mi kao zajednica moramo da se probudimo i da radimo na tome da se naš sistem uredi i da se svi osjećamo sigurno. Moramo pokrenuti priču o uvođenja doživotnog zatvora za ubistva. Naš dragi Faris je tek trebao da počne svoj život,  ni kriv ni dužan ostao je bez njega. Nije pravedno da ubica ikada opet ima priliku osjetiti privilegiju slobode i da dobije drugu priliku u životu nakon što je nevinome djetetu uzeo priliku da uopšte živi život.</p>

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Projekt <i>Paketići za sve</i></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={noc7} alt="" />
                    </div>
                    <div>
                        <img src={noc8} alt="" />
                    </div>
                    <div>
                        <img src={noc9} alt="" />
                    </div>
                    <div>
                        <img src={noc10} alt="" />
                    </div>
                    <div>
                        <img src={noc11} alt="" />
                    </div>
                    <div>
                        <img src={noc12} alt="" />
                    </div>
                    <div>
                        <img src={noc13} alt="" />
                    </div>
                    <div>
                        <img src={noc14} alt="" />
                    </div>
                    <div>
                        <img src={noc15} alt="" />
                    </div>
                    <div>
                        <img src={noc16} alt="" />
                    </div>
                    <div>
                        <img src={noc17} alt="" />
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
U saradnji sa Udruženjem mladih Start, profesorice Edina Kopić, Ermina Muratović i Lamija Šabanović su sa odjeljenjima III-3 i II-6 dale doprinos i učestvovale u projektu "Paketići za sve" i na taj način obradovali malu raju čije porodice nisu u stanju obezbijediti novogodišnje paketiće. Prikupili su novac i donirali dio paketića, jer sva djeca zaslužuju da imaju sretno djetinjstvo. </p>
 
<p className="mb-4 text-blueGray-500">
Ovim povodom su i članovi Dramske sekcije Srednje ekonomske škole Sarajevo izveli  novogodišnju predstavu "Ledengrad" za 250 mališana u Multimedijalnoj sali Općine Hadžići. U predstavi su glumili Džejla Bakaran, Ardan Bečić, Amina Nur Duran, Arman Ramić, Hanadi Oručević, Omar Mekić i Davud Pamuk. Za kostime su bile zadužene Adna Ploskić, Sumeja Ibrica, Nejla Nogo, Džena Kurtović, Anesa Ismic, Alejna Hadžić i Samira Bičević.
Autor predstave je prof. Ermina Muratović. Posebna sreća je bila vidjeti u toku izvrsne izvedbe predstave ozarena lica mališana. Bravo za našu sjajnu, talentovanu djecu!!!
Čestitamo i divnim mladim ljudima Udruženja Start na dobroj organizaciji, gostoprimstvu i mostu koji je spojio plemenitost i dobrotu.</p>

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Čarobna noć novogodišnjih paketića</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={noc1} alt="" />
                    </div>
                    <div>
                        <img src={noc2} alt="" />
                    </div>
                    <div>
                        <img src={noc3} alt="" />
                    </div>
                    <div>
                        <img src={noc4} alt="" />
                    </div>
                    <div>
                        <img src={noc5} alt="" />
                    </div>
                    <div>
                        <img src={noc6} alt="" />
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
Novogodišnja čarolija "Ledengrada" prosula je sjaj pahulja na sinoćnju podjelu paketića mališanima naših kolegica i kolega. Likovi princeze, vile Dragoljubice, djevojčice Dace, trola Lua, torbara Pece, Ledene Kraljice, čuvara Sjevera doveli su dječicu do Djeda Mraza. Radost je bila urnebesna uz ples i pjesme. Veliki pozdrav do narednog putovanja od članova dramske sekcije, Džejle, Armana, Hanadi, Davuda, Omara, Ardana, Amine Nur, Nejle, Sumeje, Ajle, Alejne, Anese, Samire, Džene i prof. Ermine. Naravno, hvala Sindikatu SEŠ, te profesoricama Edini Kopić i Lamiji Šabanović koje su pomogle da se realizuje ovo putovanje.</p>


</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Fondacija poduzetnika u BiH održala <i>Školu poduzetništva</i> u našoj školi</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={bamba0} alt="" />
                    </div>
                    <div>
                        <img src={bamba1} alt="" />
                    </div>
                    <div>
                        <img src={bamba2} alt="" />
                    </div>
                    <div>
                        <img src={bamba3} alt="" />
                    </div>
                    <div>
                        <img src={bamba4} alt="" />
                    </div>
                    <div>
                        <img src={bamba5} alt="" />
                    </div>
                    <div>
                        <img src={bamba6} alt="" />
                    </div>
                    <div>
                        <img src={bamba7} alt="" />
                    </div>
                    <div>
                        <img src={bamba8} alt="" />
                    </div>
                    <div>
                        <img src={bamba9} alt="" />
                    </div>
                    <div>
                        <img src={bamba10} alt="" />
                    </div>
                    <div>
                        <img src={bamba11} alt="" />
                    </div>
                    <div>
                        <img src={bamba12} alt="" />
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
                  U srijedu, 27.decembra 2023. godine Fondacija poduzetnika u Bosni i Hercegovini održala je Školu poduzetništva.  Edukativna i inspirativna radionica o poduzetništvu je okupila preko šezdeset učenika/ca iz nekoliko srednjih škola Kantona Sarajevo (Srednja ekonomska škola, Sarajevo, Srednja saobraćajna škola, Srednja mašinska škola, Prva gimnazija, Sarajevo i Željeznički školski centar, Sarajevo), te studente/ice Univerziteta u Sarajevu. Bila je  ovo prilika  mladima za realan uvid u svijet poduzetništva. Intencija je <i>edukacija mladih da prepoznaju šanse i prilike u BiH</i>, podsticaj za njihovo individualno usavršavanje i edukaciju, te promocija vrijednosti učenja za poduzetništvo jer <i>poduzetništvo otvara vrata raznim životnim mogućnostima i perspektivama. </i>

</p> 
<p className="mb-4 text-blueGray-500">
Poduzetništvo predstavlja sposobnost pojedinca da pretvara ideje u djela; podrazumijeva kreativnost, inovativnost, sposobnost razumnog preuzimanja rizika, sposobnost iskorištavanja prilika, sposobnost planiranja, organiziranja i vođenja projekata kako bi se postigli određeni ciljevi. Predavači iz Fondacije su svojim vlastitim poslovnim postignućima svjedočili  važnost etičnog ponašanja i etičkih vrijednosti te promovirali dobro upravljanje (odgovorno, transparentno, u skladu sa zakonom, participativno, efektivno, efikasno). 
Saradnja sa Fondacijom poduzetnika ima za cilj kreiranje podsticajnog okruženja za razvoj poduzetničkih kompetencija mladih, povezivanje škole s privredom, tržištem rada i lokalnom/ regionalnom zajednicom s posebnim naglaskom na mentorski rad i iskustveno učenje. Osjećaj za inicijativu i poduzetništvo, poduzetnička znanja, vještine i stavovi, razvijaju se, te je i ova edukativna radionica bila doprinos osnaživanju mladih i podsticaj <i>usvajanju  poduzetničkog mišljenja i djelovanja.</i>
</p> 
<p className="mb-4 text-blueGray-500">
Predavači su vlastitim poslovnim postignućima promovirali mladima sticanje radnih navika i razvoj osobina poduzetne osobe (<i>odgovornost, samostalnost, marljivost, inicijativnost, kreativnost, inovativnost, sposobnost donošenja odluka, samopouzdanje, odlučnost u djelovanju, spremnost na razuman rizik i upravljanje rizikom, mobilnost, fleksibilnost i dr. </i>) koja je tako osposobljena za prepoznavanje prilika i mogućnosti za samoaktualizaciju.</p>
<p className="mb-4 text-blueGray-500">
<i>Fondacija poduzetnika u Bosni i Hercegovini</i> je neprofitna organizacija koja ima za cilj podržati i unaprijediti poslovni ambijent u Bosni i Hercegovini, podržati razvoj poduzetništva u BiH, stvarati održive poslovne prilike za lokalne i mlade poduzetnike, te povećati konkurentnost i inovativnost domaćih proizvoda. Vizija Fondacije ogleda se u tome da postane vodeća organizacija koja podržava poduzetništvo i ekonomske inicijative, kako na lokalnom, tako i na internacionalnom nivou, <i>promoviše vrijednosti poduzetništva kao ključnog faktora razvoja lokalne zajednice i Bosne i Hercegovine</i>. Dalje,  pruža <i>edukaciju i mentorstvo</i> poduzetnicima kako bi unaprijedili svoja znanja, vještine i poslovanje,  podstiče inovacije unutar poslovne zajednice, <i>umrežava poduzetnike sa  investitorima</i> kako bi podržali razvoj njihovog poslovanja,  sudjeluje  u <i>kreiranju politika i inicijativa</i> za podršku  poduzetništva i ekonomskih  reformi u zemlji. 
<i>Predsjednica Udruženja poslovnih žena u BiH Aida Zubčević, vlasnik brenda FAVEDA</i>,  je inspirativno govorila o poduzetništvu i podijelila je svoja poslovna iskustva sa posebnim osvrtom na mogućnosti koje pružaju udruženja i fondacije za budući razvoj poduzetništva.  Dotakla se  teme poduzetništva žena, navodeći konkretne  izazove sa kojima se žene poduzetnice svakodnevno susreću.  
<i>Amra Žužić-Bećirbegović, idejni tvorac brenda BAMBA</i>,  brenda utemeljenog  2015. godine, a koji se odnosi na proizvodnju i prodaju dizajnerskih komada odjeće za spavanje i igru beba je  predstavila svoj put od ideje do biznisa. Posebno je naglasila  značaj dosljednosti i upornosti u ostvarivanju svojih poduzetničkih snova, te poručila da se trud uz podršku najmilijih uvijek višestruko vrati.
<i>Samir Vildić, predsjednik Upravnog odbora Fondacije</i> je govorio o potencijalima BiH, izazovima i prednostima poduzetništva u BiH, te aktuelnim naporima na umrežavanju sa našom poslovnom dijasporom. 
Ismail Šehić, direktor Fondacije je govorio šta sve treba znati o prilikama u EU, o EU programima i konkretnim mogućnostima koje ti programi nude mladima: <i>Youth Exchanges, Training Courses, European Solidarity Corps,  EYE Erasmus for Young Entrepreneurs,  drugim mogućnostima koje nudi  Salto Youth, European Youth Portal, Erasmus Joint Master Degree, Wellfound, Europeer, YOUTHPASS.</i> 
 
</p> 
<p className="mb-4 text-blueGray-500">
Nakon uspješno realizovane Š<i>kole poduzetništva, svečano je potpisan Memorandum o saradnji između Fondacije poduzetnika u Bosni i Hercegovini i Srednje ekonomske škole, Sarajevo. 
Memorandum su potpisali direktor Fondacije Ismail Šehić i direktorica naše škole  Amira Kadrispahić.</i>
Zahvaljujemo se  poduzetnicima/cama  Aidi Zubčević , Samiru Vildiću , Ismailu Sehiću i Amri Žužić-Bećirbegović za izuzetan doprinos unapređenju poduzetničkih kompetencija naših učenika, te Ilmi Čekić generalnom sekretaru Fondacije za organizaciju Škole poduzetništva.
Na kraju,  predsjednik Fondacije je učesnicima/ama uručio certifikate o završenoj Školi poduzetništva.
Saradnja će se nastaviti na  zajedničkim projektima! 
</p> 
<p className="mb-4 text-blueGray-500">
Projekat <i>UPOZNAJ PRIVREDU KANTONA SARAJEVO</i>, Indira zeković, prof.</p> 


</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Nastavljamo saradnju sa INTERNATIONAL BURCH UNIVERSITY (IBU)</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={burchd1} alt="" />
                    </div>
                    <div>
                        <img src={burchd2} alt="" />
                    </div>
                    <div>
                        <img src={burchd3} alt="" />
                    </div>
                    <div>
                        <img src={burchd4} alt="" />
                    </div>
                    <div>
                        <img src={burchd5} alt="" />
                    </div>
                    <div>
                        <img src={burchd6} alt="" />
                    </div>
                    <div>
                        <img src={burchd7} alt="" />
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
                  Učenici/ce četvrtih razreda i profesorice: Edina Kopić, Alma Živojević, Lejla Hujdur, Aida Babić, Kadribegović Sejdela i Indira Zeković posjetili/e su u utorak, 26.12. 2023.godine privatni univerzitet sa nastavom na engleskom jeziku. IBU je posvećen promoviranju kvaliteta, inovacija, preduzetništva, te razvoju mladih. Imajući u vidu  važnost individualnog doprinosa za napredak društva, IBU  pruža podršku studentima i u toku i nakon studija. Vodi ih maksima da je  <i>obrazovanje  važno, jer ima moć da oblikuje srca i umove. Profesori moraju biti fokusirani na individualne vještine i potrebe svakog studenta i otkrivanje njihovih skrivenih talenata i potencijala</i>. IBU nastoji <i>njegovati  ne samo intelekt već i srca studenata</i>, oblikujući ih da postanu ne samo uspješni profesionalci, inovativni mislioci spremni da oblikuju budućnost, <i>već i pojedinci puni saosjećanja i empatije</i>.
</p> 
<p className="mb-4 text-blueGray-500">
IBU ima kontinuiranu <i>podršku grupacije Stirling Education</i>, britanske obrazovne ustanove u njihovim profesionalnim nastojanjima da studentima pruže inovativne metode učenja, uslove za naučno-istraživački rad,  kroz razvoj modernih studijskih programa. Važan aspekt djelovanja je  i  stvaranje <i>prijateljskog akademskog okruženja</i> koje podstiče studente na preuzimanje vodeće uloge u <i>istraživanju ličnih i  intelektualnih potencijala, te  za kreativno, objektivno, kritičko razmišljanje i cjeloživotno učenje</i>. 
</p> 
<p className="mb-4 text-blueGray-500">
Naši učenici/ce su informisani/e o svim <i>studijskim programima IBU-a</i>, uključujući informacijske tehnologije, grafički dizajn i multimediju, menadžment, genetiku i bioinžinjering, arhitekturu, elektrotehniku, bankarstvo i finansije, digitalne komunikacije i odnose s javnošću, međunarodne odnose  i evropske studije, te engleski jezik i građevinarstvo. </p> 
<p className="mb-4 text-blueGray-500">
Učenici/ce su upoznati/e sa mogućnostima koje pruža <i>ERASMUS  program</i> razmjene studenata/tica. Prezentiran nam je i <i>program finansiranja i stipendiranja studenata IBU-a</i>, te kriteriji za evaluaciju. Na prijemnom ispitu se može  osvojiti i do 100% stipendije za studij na izabranom odsjeku IBU-a.  Prije ispita moguće je  učestvovati u pripremnoj nastavi. </p> 
<p className="mb-4 text-blueGray-500">
Za one koji razmišljaju o studiranju ekonomije i društvenih nauka, pogledajte stranicu Fakulteta ekonomije i društvenih nauka: <a href='https://www.ibu.edu.ba/faculty-of-economics-and-social-sciences'>https://www.ibu.edu.ba/faculty-of-economics-and-social-sciences</a>
Prezentirane su nam mogućnosti McGraw Hill platforme, vrijednog resursa koji se koristi u IBU obrazovanju. Posebno je bila  inspirativna radionica o preduzetništvu.
</p> 
<p className="mb-4 text-blueGray-500">
Impresivne su sportske opcije koje nudi IBU svojim studentima/cama. Dodatno, IBU ima i Startup Inkubator. Svi studenti/ce koji imaju poslovne ideje i žele ih razviti, mogu to učiniti uz pomoć profesora, koji su mentori u cijelom procesu osnivanja kompanije. Uslijedio je obilazak kampusa IBU-a.  </p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo uposlenicima/ama IBU-a na provedenim aktivnostima u cilju predstavljanja svih mogućnosti za svestrani razvoj ličnih i intelektualnih potencijala koje nude njihovi studijski programi.  </p>  
<p className="mb-4 text-blueGray-500">
Opširnije: <a href='https://www.ibu.edu.ba'>https://www.ibu.edu.ba</a></p> 

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">IV4 razred na izložbi slavnog slikara Safeta Zeca <i>MOLITVA</i> u Europe house</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={zec1} alt="" />
                    </div>
                    <div>
                        <img src={zec2} alt="" />
                    </div>
                    <div>
                        <img src={zec3} alt="" />
                    </div>
                    <div>
                        <img src={zec4} alt="" />
                    </div>
                    <div>
                        <img src={zec5} alt="" />
                    </div>
                    <div>
                        <img src={zec6} alt="" />
                    </div>
                    <div>
                        <img src={zec7} alt="" />
                    </div>
                    <div>
                        <img src={zec8} alt="" />
                    </div>
                    <div>
                        <img src={zec9} alt="" />
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
                  Učenici/ce IV4 razreda posjetili su izložbu u utorak, 19. decembra 2023.godine, u jednoj od najljepših zgrada iz autrougarskog perioda u Sarajevu. Najnovija izložba radova Safeta Zeca nazvana <i>Molitva</i> je svojom snažnom umjetničkom porukom univerzalnosti molitve i nade u boljitak čovjeka, osvojila publiku. Izložbu organizuje galerija Europe House u saradnji s Fondacijom Ivanka i Safet Zec. 
</p> 
<p className="mb-4 text-blueGray-500">
Dvije stvari dominantne su u <i>Molitvi</i>, jedna je bol, druga je nada. Najnoviji ciklus pridružuje se prethodnim autorovim radovima koji su istraživali simbolička značenja ruku, uključujući Exodus i Zagrljaj. Ciklusi svjedoče autorovu ostrašćenost rukama. Po riječima Safeta Zeca ruke su te koje su čudo, one stvaraju čuda. Motivi gomile ljudskih ruku podignutih u molitvi prema nebu bude saosjećanje u patnji, čežnju za božanskom milosti, ali i nadu u božju pomoć. Autora zanima molitva kao univerzalna vrijednost za sve ljude otkako je čovjeka. Izložba kao da je autorov poziv na molitvu svima, bez obzira kako to čine.
</p> 
<p className="mb-4 text-blueGray-500">
Glasovi različitih vjerskih tradicija u <i>Molitvi</i> Safeta Zeca odzvanjaju jednako snažnom potrebom za nadom i potvrđuju <i>snagu umjetnosti da nas povezuje.</i></p> 
<p className="mb-4 text-blueGray-500">
Priredio je preko 70 samostalnih izložbi u domovini i velikim metropolama širom svijeta. Član je svih značajnih umjetničkih asocijacija u Evropi, te ULUBiH-a. Za svoj rad je dobio preko 20 stručnih nagrada i priznanja. Godine 2007. dodijeljen mu je Orden za umjetnost i književnost Republike Francuske, proglašen je vitezom umjetnosti. Njegova djela su u značajnim evropskim i svjetskim galerijama i privatnim kolekcijama.</p> 
<p className="mb-4 text-blueGray-500">
Izložba Safeta Zeca <i>Molitva</i> bit će dostupna za građane od 18. decembra ove do 31. januara naredne godine, od ponedjeljka do petka u Europe House Sarajevo, kod Vječne vatre. <i>Preporučujemo da ju svakako posjetite!</i></p> 
<p className="mb-4 text-blueGray-500">
<b>Posjeta je realizirana u okviru projekta Muzeji Sarajeva koji vodi Indira Zeković, prof.</b></p> 
                  
</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Edukativna radionica KJU Odgojni centar: <i>Prevencija delinkventnog ponašanja</i> </h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={radionica1} alt="" />
                    </div>
                    <div>
                        <img src={radionica2} alt="" />
                    </div>
                    <div>
                        <img src={radionica3} alt="" />
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
                  Služba za preventivni rad <b>JU Odgojni centar Kantona Sarajevo</b> nastavlja saradnju sa osnovnim i srednjim školama u Kantonu Sarajevo s ciljem preventivnog djelovanja na društveno neprihvatljivo ponašanje  djece maloljetnika. 
</p> 
<p className="mb-4 text-blueGray-500">
U multimedijalnoj sali naše škole, 18. i 19.decembra 2023. godine održano je stručno predavanje za učenike i učenice drugih razreda na temu <b>Prevencija delinkventnog ponašanja</b>. 
</p> 
<p className="mb-4 text-blueGray-500">
Cilj ovih preventivnih programa, odnosno njihovog provođenja, sastoji se u tome da se kod maloljetnika postignu određene psihosocijalne promjene koje će ih učiniti čvrstim u borbi protiv delinkventnog ponašanja. Emocionalne osobine povezane s kriminalnim ponašanjem proističu iz emocionalne nestabilnosti, razdražljivosti, potištenosti, ljubomore i sl. Osobe s takvim karakteristikama ličnosti imaju teškoće i teže se prilagođavaju društvenim prilikama i procesima, te dolazi do češćih konflikata i na kraju do kriminalne djelatnosti. Mlada ličnost u toj dobi je nedovoljno izgrađena, ona je osjetljiva i na uticaje koji njen razvoj i ponašanje mogu usmjeriti u asocijalnom i antisocijalnom smjeru. Dalje, o kvaliteti sampoštovanja zavisi da li će dijete razvijati pozitivnu sliku o sebi, te to djeluje na njegovo ponašanje u socijalnoj okolini. Naglašen je značaj i vršnjačke podrške,  jer mladi imaju interes da dijele probleme i za međusobnu podršku. Ovo predavanje će zasigurno doprinijeti dubljem razmišljanju o životu i potrebi kanaliziranja unutarnje energije mladih u pravom smjeru. Na kraju, prevencija se sastoji u djelovanju na svestraniji razvoj ličnosti djeteta. Programi prevencije poremećaja u ponašanju u školskom okruženju trebali bi biti usmjereni na jačanje pojedinačnih kompetencija uključujući emocionalne, kognitivne, socijalne i ponašajne  kompetencije. Svakako da i podržavajuća školska klima višestruko smanjuje problematična ponašanja. Prikladni načini postupanja sa djecom i adolescentima sa problemima u ponašanju mogu dovesti do smanjivanja neprilagođenih ponašanja. Neophodno je da se djeci promovišu pozitivne vrijednosti u interesu stvaranja pozitivne klime u okruženju u kojem se nalaze.
</p> 
<p className="mb-4 text-blueGray-500">
Zahvaljujemo se JU Odgojni centar KS i predavaču Adnanu Džeparu, stručnom savjetniku, pedagogu ove ustanove za njihov doprinos unapređenju socijalnih kompetencija naših učenika/ca.
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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Škola poduzetništva</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={skolap1} alt="" />
                    </div>
                    <div>
                        <img src={skolap2} alt="" />
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
                  Fondacija poduzetnika BiH u saradnji sa našom školom organizuje Školu poduzetništva, 27.12.2023. godine, sa početkom u 10.00 sati.


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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">III HUB STEM TAKMIČENJE</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={stem1} alt="" />
                    </div>
                    <div>
                        <img src={stem2} alt="" />
                    </div>
                    <div>
                        <img src={stem3} alt="" />
                    </div>
                    <div>
                        <img src={stem4} alt="" />
                    </div>
                    <div>
                        <img src={stem5} alt="" />
                    </div>
                    <div>
                        <img src={stem6} alt="" />
                    </div>
                    <div>
                        <img src={stem7} alt="" />
                    </div>
                    <div>
                        <img src={stem8} alt="" />
                    </div>
                    <div>
                        <img src={stem9} alt="" />
                    </div>
                    <div>
                        <img src={stem23} alt="" />
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
                  HOMEWORK HUB, DJEČIJA KUĆA na Grbavici, je  u subotu, 16.12.2023. godine, organizirala III HUB STEM takmičenje za učenike/ce osnovnih i srednjih škola. 


</p> 
                  <p className="mb-4 text-blueGray-500">Preko šezdeset STEM-ovaca/ki prijavilo se za učešće u takmičenju. No, bila je ovo i smotra prijateljstva! Učenici/ce prvog razreda naše škole, njih jedanaest, takmičili su se u konkurenciji sa drugim razredima, što rezultate naših učenika/ca čini vrjednijim. 
</p>
                  <p className="mb-4 text-blueGray-500">Mnogo uzbuđenja, računanja, nestrpljenja u očekivanju rezultata, impresivne zainteresovanosti i strasti za eksperimentima, obilježilo je današnje takmičenje.


</p>
                  <p className="mb-4 text-blueGray-500">Ohrabrujuće je i impresivno, da su mladi  pokazali stanovitu strast za naukom.

 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Sadržaji takmičenja uključili su devedeset pitanja iz raznih oblasti, informatike, matematike, hemije, fizike, te eskperimente iz fizike i hemije. 

</p> 
<p className="mb-4 text-blueGray-500">Najviše bodova na takmičenju osvojio je učenik Kerim Husejnović I1 razred, 7. mjesto, Emina Karić I2 razred, 8. mjesto, te sljedeći/e učenici/ce sa neznatno manje bodova: Lamija Poljo I2, Hana Šehić I3, Omar Mekić I1, Berina Hebib I3, Huzeifa Gegić I1, Nudžejma Zildžić I2, Arman Ramić I4, Amina Nur Duran I4 i Tajra Berović I5. 

</p> 
<p className="mb-4 text-blueGray-500">Zahvaljujemo našim učenicima/ama što su svojim prisustvom uveličali ovu smotru znanja, nauke i prijateljstva! 


</p> 
<p className="mb-4 text-blueGray-500">Čestitamo za postignute rezultate!
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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase"><i>POSJETA KOMPANIJI ATLANTIC ARGETA DOO, SARAJEVO</i></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={argeta1} alt="" />
                    </div>
                    <div>
                        <img src={argeta2} alt="" />
                    </div>
                    <div>
                        <img src={argeta3} alt="" />
                    </div>
                    <div>
                        <img src={argeta4} alt="" />
                    </div>
                    <div>
                        <img src={argeta5} alt="" />
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
                  Učenici/ce III2 razreda i IV4 razreda, Mujkanović Amar, Ali Nesimović, Jamak Ema i Mulać Nejra, posjetili su kompaniju Argeta, Hadžići, u petak, 15.decembra 2023. godine.


</p> 
                  <p className="mb-4 text-blueGray-500">Atlantic Argeta d.o.o. Sarajevo posluje u sustavu Atlantic Grupe, kao jedna od proizvodnji delikatesnog namaza Argeta. Osnovana je u maju 2005. godine, kada je počela izgradnja fabrike za proizvodnju Argeta pašteta. Atlantic Argeta d.o.o. Sarajevo bavi se isključivo proizvodnjom delikatesnih namaza samo iz komada čistog mesa, jer drugih proizvoda od mesa u svom asortimanu nema, što ih izdvaja od ostalih fabrika kada je u pitanju mesna industrija.</p>
                  <p className="mb-4 text-blueGray-500">Popularnost Argete dokazuje činjenica da se svake sekunde u svijetu otvore četiri Argeta paštete. Svake godine proizvedu  više od 130.000.000. Riječ je o <b>najmodernijoj i visokotehnološkoj proizvodnji</b>, jer pod <b>strogom kontrolom</b> od prvih sirovina do zatvaranja pakovanja stvaraju <b>vrhunske proizvode</b>.

</p>
                  <p className="mb-4 text-blueGray-500"><b>Njihova strategija podrazumijeva iznad svega stalno praćenje trendova te ulaganje u inovacije i proizvodnju novih proizvoda koji zadovoljavaju potrebe potrošača!</b>

 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Upoznali su nas kako je <b>Argeta pozicionirana na evropskom tržištu</b>. Argeta je sa svojim proizvodima prisutna  u 33 zemlje, na četiri kontinenta, a najjača je upravo u Europi. Što se tiče kvaliteta proizvoda, Atlantic Argeta d.o.o Sarajevo rangirana je kao prvoplasirana u projektu  “100 najvećih u BiH i regionu”. Kad je u pitanju njihova poslovna strategija i politika kvaliteta, u Atlantic Grupi stvaraju okuse koje potrošači vole, počivaju  na modernoj i vlastitoj tehnologiji proizvodnje, koja ne zahtjeva aditive da bi se postigla trajnost proizvoda, zatim na stalnoj modernizaciji proizvodnih linija i na vrhunskom R&D odjelu. <b>Osluškujući potrebe  potrošača i tržišne trendove, stalno su razvijali proizvod, lansirali nove okuse i proizvode, te nalazili inovativne načine komunikacije s kupcima, a to nastavljaju i dalje.</b>

</p> 
<p className="mb-4 text-blueGray-500">Dalje, ukazali su nam <b>na prednosti  Argete u odnosu na veliku konkurenciju u BiH:</b> Argeta i nakon godina uspješnog poslovanja, oduševljava svoje ljubitelje novim, modernijim dizajnom. Novi izgled Argetinih pakovanja obraća se ljubiteljima na drugačiji, uočljiviji način. Kao centralni element novog dizajna, ilustracija približava kupca karakteru i priči koja stoji iza svakog ukusa.  

</p> 
<p className="mb-4 text-blueGray-500">Jedna od najvažnijih stvari <b>za Argetu je da održe obećanje dato ljudima, okolišu i zajednici</b>. Trude se da unaprijede zajednicu preko brige za  zaposlenike i njihove porodice. Dodatno se brinu i za šire društvo i radnu okolinu preko sve boljih proizvoda i preko što manjeg uticaja na okolinu, koristeći zelenu energiju u svim njihovim  fabrikama. Argeta je s ponosom dugogodišnji sponzor Sarajevo Film Festivala, što je jedan od najznačajnijih kulturnih događaja u zemlji. 

</p> 
<p className="mb-4 text-blueGray-500">Zahvaljujemo uposlenicima Argete za vrhunski profesionalizam u organizaciji posjete i priliku da naši učenici/ce uživo čuju lekcije iz marketinga od vrhunskih znalaca.

</p> 
<p className="mb-4 text-blueGray-500">Posjeta je realizirana u okviru projekta <b>UPOZNAJ PRIVREDU KANTONA SARAJEVO</b>, Indira Zeković, prof.

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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">DAN NAUKE U FEDERACIJI BIH – VLADIMIR PRELOG</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={vladimir1} alt="" />
                    </div>
                    <div>
                        <img src={vladimir2} alt="" />
                    </div>
                    <div>
                        <img src={vladimir3} alt="" />
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
                  12. decembar obilježava se kao Dan nauke u Federaciji BiH, u znak sjećanja na dan kada je 1975. godine eminentnom bosanskohercegovačkom naučniku, Vladimiru Prelogu, uručena Nobelova nagrada za hemiju. 


</p> 
                  <p className="mb-4 text-blueGray-500">Nagradu je dobio za svoje radove iz oblasti stereoizomerije organskih molekula. Rođen je u Sarajevu, 23. jula 1906. godine, a umro u Zürichu, 7. januara 1998. godine. Školovao se u rodnom gradu, Zagrebu i Osijeku. Univerzitetsko obrazovanje, te doktorat iz oblasti hemije stekao je u Češkoj. </p>
                  <p className="mb-4 text-blueGray-500">Područja njegovih istraživanja bila su, uglavnom, heterociklički spojevi, alkaloidi i antibiotici. Središnje zanimanje bila mu je stereohemija molekula, a zaokupljao ga je problem prostorne građe molekula. 


</p>
                  <p className="mb-4 text-blueGray-500">TU nauku uvodi naziv hemijska topologija za područje stereohemije, koja se bavi geometrijskim osobinama molekula. Pridonio je objašnjenju strukture stereoida, kinina, strihnina i drugih alkaloida, a sintetizirao je mnoge druge organske spojeve. 

 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Učenice i učenici prvog razreda, sa profesoricom Edinom Kopić, danas su časove hemije posvetile/i sjećanju na našeg nobelovca Vladimira Preloga i njegov naučni i pedagoški rad. 

</p> 
<p className="mb-4 text-blueGray-500">Pored zanimljivih prezentacija, pogledale/i su kratki dokumentarni film o životu i djelu Nobelovca. Prezentaciju su u holu naše škole mogle/i pogledati sve/i učenice i učenici, kao i sve/i radnice i radnici naše škole.

</p> 
<p className="mb-4 text-blueGray-500">Također, učenice/i koje/i pohađaju dodatnu nastavu iz Hemije uradile/i su edukativni pano o ovom velikanu, kao i modele strkturnih formula nekih organskih spojeva, objašnjavajući osobine molekula kojima se bavio Nobelovac.

</p> 
<p className="mb-4 text-blueGray-500">Za kraj aktivnosti, učenice/i su se prisjetile/i izreke Kralja hemije iz Sarajeva:

</p> 
<p className="mb-4 text-blueGray-500">„Nemojte se bojati raditi na nečemu velikom i zahtjevnom, jer ako se zaista trudite, uvijek će tu biti netko da vam otvori vrata“. Vladimir Prelog

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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Međugeneracijsko druženje povodom Dana državnosti BiH</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={dandrzavnosti1} alt="" />
                    </div>
                    <div>
                        <img src={dandrzavnosti2} alt="" />
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
                  Učenici i učenice plesne grupe Srednje ekonomske škole, u okviru obilježavanja Dana državnosti Bosne i Hercegovine, u petak 24. novembra 2023. godine, posjetili su Centar za zdravo starenje Novo Sarajevo sa profesoricom Dženanom Tanović-Hamzić.


</p> 
                  <p className="mb-4 text-blueGray-500">Plesna grupa izvela je tačku kojom su oduševili i zabavili publiku, koja je u velikom broju prisustvovala ovom svečanom događaju. </p>
                  <p className="mb-4 text-blueGray-500">Zahvaljujemo Centru za zdravo starenje za poziv i ukazano povjerenje, kao i plesnoj grupi koja je doprinijela ovom značajnom događaju. 

</p>
                  <p className="mb-4 text-blueGray-500">Sretni smo što smo i ovog puta bili u prilici sarađivati sa divnim ljudima iz Centra.

 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Više detalja možete pronaći na facebook stranici Centra. 

</p> 
<p className="mb-4 text-blueGray-500">Pripremila: Azra Selimbegović IV1 

</p> 
</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
                  <video src={videoplesdd} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/>
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">PROGRAM FONDACIJE PODUZETNIKA U BIH ZA MLADE: <b>ŠKOLA PODUZETNIŠTVA</b></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={poduzetnici1} alt="" />
                    </div>
                    <div>
                        <img src={poduzetnici2} alt="" />
                    </div>
                  <div>
                        <img src={poduzetnici3} alt="" />
                    </div>
                    <div>
                        <img src={poduzetnici4} alt="" />
                    </div>
                    <div>
                        <img src={poduzetnici5} alt="" />
                    </div>
                    <div>
                        <img src={poduzetnici6} alt="" />
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
                  Za učenice i učenike Srednje poslovne škole i Srednje ekonomske škole u Sarajevu, 1.decembra 2023. godine, Fondacija poduzetnika u BiH pripremila je program Škola poduzetništva u cilju predstavljanja poduzetničkog svijeta i nekih od segmenata koje on podrazumijeva. Sadržaji programa: poduzetništvo, pokretanje biznisa, fondovi EU, plasiranje ideja na tržištu, konkurentnost, mogućnosti i koraci neophodni za pokretanje uspješnog biznisa... 


</p> 
                  <p className="mb-4 text-blueGray-500">Respektabilni privrednici su podijelili svoje stručno znanje i uspješne poslovne priče: </p>
                  <p className="mb-4 text-blueGray-500">Mr Haris Muratovic: Važnost brendinga i vizualnog identiteta proizvoda; 

</p>
<p className="mb-4 text-blueGray-500">Dr Samir Vildić: Privredni potencijali BiH; 

</p>
<p className="mb-4 text-blueGray-500">Mr: Zašto pokrenuti vlastiti biznis - prednosti i nedostaci;  

</p>
<p className="mb-4 text-blueGray-500">Vedad Karović: Priča o putovao bih - jedan uspješan biznis primjer.  

</p>
<p className="mb-4 text-blueGray-500">Cilj programa jeste razvoj poduzetničkog duha, kreativnih ideja kod mladih, poduzetničkih kompetencija, inovativnosti, spremnosti za preuzimanje rizika, ... 

</p>
<p className="mb-4 text-blueGray-500">Sesija je bila interaktivna, učenici/ce su ispoljili stanovit interes za tematiku. Poseban naglasak predavači su stavili na eliminisanje negativne percepcije da je BiH besperspektivna, naprotiv, vlastitim poslovnim primjerima svjedočili su da BiH ima neiskorištene potencijale.  

</p>
<p className="mb-4 text-blueGray-500">Poduzetništvo vide kao najboljeg pokretača ekonomskog razvoja i blagostanja našeg društva. Naglasili su da mladi svojim poduzetničkim duhom i ulaskom u poduzetništvo donose promjene, mijenjaju društvo i omogućuju napredak. To su ujedno i razlozi zašto mlade treba na vrijeme educirati o poduzetništvu i potaknuti na ulazak u poduzetništvo.

</p>
<p className="mb-4 text-blueGray-500">Ismail Šehić, direktor Fondacije poduzetnika u BiH, na kraju sesije je poručio:  

</p>
<p className="mb-4 text-blueGray-500"><i>Nedamo mlade ljude, nedamo da im se servira negativna energija, nedamo da se ova država ne voli, nedamo da nam predstavljaju da je sve tužno i crno u ovom društvu! Hvala vam, mladi umovi, na nevjerovatnoj podršci i entuzijazmu! Vaša energija i odlučnost su pokretačka snaga pozitivnih promjena. Nastavimo inspirisati i motivisati jedni druge da dosegnemo nove visine i zajedno učinimo svijet boljim mjestom! Želim ohrabriti svakog mladog čovjeka da razmotri put poduzetništva. Ne bojte se preuzeti rizik i budite inovativni. Vaše ideje i vizije mogu biti upravo ono što naša ekonomija treba!</i>

</p>
<p className="mb-4 text-blueGray-500">Projekat: <i>Upoznaj  privredu Kantona Sarajevo</i>, Indira Zeković, prof. 

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
          
          <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Naida Đipa osvojila 3. mjesto u kategoriji literarnih radova na kantonalnom takmičenju srednjih škola povodom Dana državnosti BiH</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={dipanaida1} alt="" />
                    </div>
                    <div>
                        <img src={dipanaida2} alt="" />
                    </div>
                  <div>
                        <img src={dipanaida3} alt="" />
                    </div>
                    <div>
                        <img src={dipanaida4} alt="" />
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
                  Ministarstvo za odgoj i obrazovanje Kantona Sarajevo i JU Institut za razvoj preduniverzitetskog obrazovanja Kantona Sarajevo proglasili su najbolje literarne radove u kategoriji srednjih škola u Kantonu Sarajevo i naša škola je ponovo pokazala kakve talente odgaja i obrazuje osvojivši treće mjesto. 


</p> 
                  <p className="mb-4 text-blueGray-500">Čestitamo nagrađenoj učenici IV4 razreda Naidi Đipi, kao i njenoj mentorici profesorici Dženani Tanović-Hamzić.</p>
                  <p className="mb-4 text-blueGray-500">Organizatori su poručili da izuzetno cijene  doprinos i kreativnost u izražavanju ljubavi prema domovini, a naša nagrađena učenica je prisustvovala dodjeli nagrada i priznanja na svečanoj Akademiji povodom Dana državnosti BiH u organizaciji institucija  Kantona Sarajevo i udruženja Bosne i Hercegovine promovišući najviše ljudske, civilizacijske i tradicionalne vrijednosti kroz ovogodišnju temu: "Domovina, to se srcem izgovara." 

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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">NASTAVLJAMO SARADNJU SA  CENTRALNOM BANKOM BIH: POSJETA II5 I III2 RAZREDA</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={centralna1} alt="" />
                    </div>
                    <div>
                        <img src={centralna2} alt="" />
                    </div>
                  <div>
                        <img src={centralna3} alt="" />
                    </div>
                    <div>
                        <img src={centralna4} alt="" />
                    </div>
                    <div>
                        <img src={centralna5} alt="" />
                    </div>
                    <div>
                        <img src={centralna6} alt="" />
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
                  Učenici/ce II5  razreda su prisustvovali finansijskoj edukaciji  u centralnom uredu 28.11. 2023. godine, 
a III2 razred 4.12. 2023. godine u glavnoj jedinici Centralne banke.
  


</p> 
                  <p className="mb-4 text-blueGray-500">Predavači su upoznali učenike/ce sa ulogom i značajem Centralne banke Bosne i Hercegovine, obavezama CB koje proističu iz Valutnog odbora (Currency Board), platnim sistemom, aktuelnim monetarnim kretanjima u našoj zemlji, organizacionom strukturom CB, zakonskim okvirom, društveno odgovornim djelovanjem CB...</p>
                  <p className="mb-4 text-blueGray-500">Centralna banka Bosne i Hercegovine organizovana je po modelu valutnog odbora.To znači da ne može koristiti devizni kurs kao sredstvo za ublažavanje ekonomskih šokova, ne može kreirati novac bez pokrića i kreditirati vladu, odnosno posuđivati novac bankama i ne može direktno stimulisati ekonomski rast. Valutni odbor je aranžman s fiksnim deviznim kursom koji je vezan za valutu „sidro“, zlato ili čak korpu valuta, gdje se sav novac u opticaju može slobodno konvertovati u rezervnu valutu.

</p>
                  <p className="mb-4 text-blueGray-500">Saopćene su nam informacije o registrima JRR ( Jedinstveni registar računa) i CRK (Centralni registar kredita poslovnih subjekata i fizičkih lica) , te uputstva za korištenje i pristup aplikacijama. 
 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Učenici/ce II5 razreda su imali priliku  da pogledaju  i muzejsku postavku CB vezano za novčanice, kovanice, jubilarni novac, od vremena bivše Jugoslavije do danas. Prikazan nam je film iz inostrane tvornice gdje se proizvode naše novčanice.   

</p> 
<p className="mb-4 text-blueGray-500">Bilo je riječi i o statističkoj funkciji CB, što je jedna od standardnih ključnih funkcija u modernim centralnim bankama, jer je ona  neophodna za vođenje monetarne politike i analiziranje ekonomskih i finansijskih kretanja. Dobili smo informacije o sadržajima i načinu pristupa statističkom web portalu CB, što će učenicima koristiti za buduću istraživačku i poslovnu praksu.   

</p> 
<p className="mb-4 text-blueGray-500">U tematskom dijelu međunarodne saradnje, učenicima/ama su prezentirane informacije o međunarodnim finansijskim institucijama u kojima je BiH članica, kao i najvažnije informacije o njenim odnosima s navedenim institucijama. CB ima  kontinuiranu saradnju s institucijama EU kroz sastanke i misije, stručnjaci CBBiH su aktivni i u forumima i radnim grupama Eurostata i Evropskog sistema centralnih banaka (ESCB), kao platformama za prenos znanja i najboljih praksi centralnog bankarstva.    

</p> 
<p className="mb-4 text-blueGray-500">Preporučujemo da o svemu više saznate na: <a href='https://www.cbbh.ba'>https://www.cbbh.ba</a>; edukacijski materijal.

</p> 
<p className="mb-4 text-blueGray-500">Projekat: <b>UPOZNAJ PRIVREDU KANTONA SARAJEVO</b>. Indira Zeković, prof.

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
              <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Obilježen Svjetski dan borbe protiv AIDS-a i u našoj školi</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={aids1} alt="" />
                    </div>
                    <div>
                        <img src={aids2} alt="" />
                    </div>
                  <div>
                        <img src={aids3} alt="" />
                    </div>
                    <div>
                        <img src={aids4} alt="" />
                    </div>
                    <div>
                        <img src={aids5} alt="" />
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
                  Svjetski dan borbe protiv AIDS-a obilježava se 1. decembra svake godine. To je prilika da ljudi širom svijeta pruže podršku oboljelima i da se ujedine u borbi protiv HIV-a i AIDS-a.  


</p> 
                  <p className="mb-4 text-blueGray-500">Također, ovaj dan je prilika da se sjetimo svih onih koji su, nažalost, umrli od bolesti uzrokovanih AIDS-om. 

</p>
<p className="mb-4 text-blueGray-500">Procjenjuje se da trenutno trideset i osam miliona ljudi žive sa HIV virusom.  

</p>
<p className="mb-4 text-blueGray-500">Danas je postignut veliki napredak u liječenju HIV-a i razumijevanju puteva prijenosa, što nam omogućava bolju zaštitu od širenja virusa.  

</p>
<p className="mb-4 text-blueGray-500">Usprkos tome, mnogi i dalje ne poznaju načine zaštite, te koristimo ovu priliku da apelujemo na naše građane da se informišu o načinima prijenosa virusa i mogućnostima zaštite!

</p>
<p className="mb-4 text-blueGray-500">Svi mi možemo dati doprinos borbi protiv HIV-a, uz vrlo mali napor. Dovoljno je da zaštitimo sebe, te da poštujemo i podržavamo oboljele, a ne da ih diskriminišemo.
</p>
<p className="mb-4 text-blueGray-500">Učenici i učenice Srednje ekonomske škole proveli su niz aktivnosti povodom 1. decembra. 

</p>
<p className="mb-4 text-blueGray-500">Kao najvažniju aktivnost realizovali su edukativnu prezentaciju s ciljem podizanja svijesti i širenja znanja.


</p>
<p className="mb-4 text-blueGray-500">Također, napravili su crvene vrpce koje su nosili sve/i nastavnice/nastavnici i učenice/učenici kao znak solidarnosti i tolerancije s oboljelima koje društvo često diskrimiše. 

</p>
<p className="mb-4 text-blueGray-500">Nošenje crvene vrpce na Svjetski dan borbe protiv AIDS-a je jednostavan, ali snažan način protivljenja predrasudama koje ljudi imaju o ovoj bolesti, a često ih izazivaju nedostatak znanja i razumijevanja. 

</p>
<p className="mb-4 text-blueGray-500">Koordinatorice aktivnosti su profesorice Merima Likić i Edina Kopić.

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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Obnovljena saradnja sa Ekonomskom školom u Novom Pazaru</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={pazar3} alt="" />
                    </div>
                    <div>
                        <img src={pazar4} alt="" />
                    </div>
                  <div>
                        <img src={pazar1} alt="" />
                    </div>
                    <div>
                        <img src={pazar2} alt="" />
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
                  Nakon što je potpisala Protokol o međunarodnoj saradnji sa bratskom školom u Istanbulu, naša direktorica zaputila se prema Novom Pazaru.


</p> 
                  <p className="mb-4 text-blueGray-500">Boravak u Pazaru je još jedno predivno iskustvo i sretna sam da sam se ponovno vidjela sa direktorom Ivanom, profesoricama Irmom, Sabinom i profesorom Rifatom, istakla je direktorica Amira.</p>
                  <p className="mb-4 text-blueGray-500">Naime, naša saradnja traje dugi niz godina i posljednja posjeta našoj školi realizovana je 2019. godine. Period Covid pandemije onemogućio je kontinuiranu razmjenu, tako da je direktorica Amira odlučila obnoviti istu.

</p>
                  <p className="mb-4 text-blueGray-500">Radost susreta i nezaboravan doček, onako kako to samo Pazarci znaju, uvećana je evociranjem uspomena iz 2019. godine i planiranju učeničke razmjene u toku školske 2023.-2024. godine. 
 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Dogovoreno je da se posjete realizuju u periodu od februara do maja 2024. godine.  

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

    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">DOGOVORENE AKTIVNOSTI NA REALIZACIJI PROJEKTA <i>BRATSKE ŠKOLE</i> POD POKROVITELJSTVOM INSTITUTA YUNUS EMRE</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={yunus1} alt="" />
                    </div>
                    <div>
                        <img src={yunus2} alt="" />
                    </div>
                    <div>
                        <img src={yunus3} alt="" />
                    </div>
                    <div>
                        <img src={yunus4} alt="" />
                    </div>
                    <div>
                        <img src={yunus5} alt="" />
                    </div>
                    <div>
                        <img src={yunus6} alt="" />
                    </div>
                    <div>
                        <img src={yunus7} alt="" />
                    </div>
                    <div>
                        <img src={yunus8} alt="" />
                    </div>
                    <div>
                        <img src={yunus9} alt="" />
                    </div>
                    <div>
                        <img src={yunus10} alt="" />
                    </div>
                    <div>
                        <img src={yunus11} alt="" />
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
                  U periodu od 22. do 28. novembra 2023. godine, realizovana je posjeta školi Mustafa Kemal Anadolu Lisesi u Istanbulu. 


</p> 
                  <p className="mb-4 text-blueGray-500">Na sastanku, kojem su prisustvovale/i direktorica naše škole, Amira Kadrispahić, i direktor bratske škole, Juksel Kahraman, kao i profesori/ce obje škole, potpisan je međunarodni protokol o bratimljenju ovih dviju škola. Dogovorene su naredne zajedničke aktivnosti i uspostavljeno prijateljstvo. </p>
                  <p className="mb-4 text-blueGray-500">Projekat predviđa edukativne i kulturne posjete učenika/ca u pratnji direktorice, direktora i profesora/ca, kao i razmjenu ideja i dobrih praksi u oblasti obrazovanja.

</p>
                  <p className="mb-4 text-blueGray-500">Dogovorene su dvije posjete u ovoj školskoj godini. Prva posjeta realizovat će se u našoj školi, u mjesecu aprilu, dok će se druga posjeta realizovati u mjesecu maju, u školi Mustafa Kemal Anadolu Lisesi u Istanbulu. 
 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Incijator ove edukativno-kulturološke saradnje je Institut Yunus Emre, svjetska neprofitna organizacija turske vlade, koja promoviše turski jezik i bogatu kulturnu baštinu Turske, ali i nastoji prenijeti iskustva i tradiciju drugih nacija na svoje prostore.  

</p> 
<p className="mb-4 text-blueGray-500">Zahvaljujemo pokrovitelju Projekta, Institutu Yunus Emre, za inciranje saradnje sa školom Mustafa Kemal Anadolu Lisesi iz Istanbula, jer držimo da su kulturološke, edukativne aktivnosti i interakcija najproduktivnije platforme za saradnju i učenje.   

</p> 
<p className="mb-4 text-blueGray-500">Planirane aktivnosti imaju za cilj, ne samo predstavljati se, već i upoznati druge.   

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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Kongres <i>Djeca su stubovi svijeta</i></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={aaa1} alt="" />
                    </div>
                    <div>
                        <img src={aaa2} alt="" />
                    </div>
                    <div>
                        <img src={aaa3} alt="" />
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
                  Ovogodišnji, šesti po redu, međunarodni kongres <i>Djeca  su stubovi svijeta</i>, održan je u srijedu,  01. novembra 2023. godine, u Parlamentarnoj skupštini Bosne i Hercegovine, pod pokroviteljstvom Ministarstva za obrazovanje, nauku i mlade Kantona Sarajevo. Istaknuta je važnost očuvanja ljudskosti, te da problem čovječanstva nije nedostatak stručnjaka iz pojedinih oblasti, već progresivno gubljenje čovjeka u ljudskom biću. Djeca su sinoć, u okviru Kongresa, posjetila i spomen-obilježje ubijenoj djeci opkoljenog Sarajeva 1992–1995., te poslala poruku donosiocima vlasti i međunarodnoj zajednici da je neophodno da se naučna dostignuća i sredstva ulažu u liječenje, odgoj i obrazovanje djece, a ne u vojne svrhe.


</p> 
                  <p className="mb-4 text-blueGray-500">Organizator Kongresa je Udruženje <i>Djeca su stubovi svijeta</i>.  Održan je pod sloganom:  <i>Etika u filozofiji življenja – borba za čovjeka u ljudskom biću</i>. Kongres je podsjetio na vrijednosti koje promoviše Udruženje. Prije svega, značaj evropskog puta BiH i borba protiv svih društvenih devijacija, a u prvom redu na planu suzbijanja  korupcije koja ugrožava same temelje društva i države.
Kongresu su prisustvovale/i učenice i učenici iz II1 odjeljenja: Farah Brajanović, Lamija Korjenić, Nur Imamović, Sarah Osmanović i Eldar Poturović, u pratnji profesorice historije, Azemine Hujdur. </p>
                  <p className="mb-4 text-blueGray-500">Predsjednica udruženja <i>Djeca
su stubovi svijeta</i>, g-đa Fatima Hukić,  pozdravljajući učesnice i učesnike Kongresa, podsjetila je na vrijednosti i ciljeve koje ovo udruženje promoviše i naglasila je značaj kvalitetnog obrazovanja i etičkih načela u formiranju mladih ličnosti. Pozvala je mlade da se posvete kvalitetnom obrazovanju, radu i zalaganju, da se oslone na vlastite potencijale, te da istrajavaju na zacrtanim ciljevima i vrijednostima.
  
</p>
                  <p className="mb-4 text-blueGray-500">U drugom dijelu Kongresa uslijedile su radionice vezano za najaktuelnije teme današnjice. Učenici/ce su prezentirale/i svoja promišljanja i stavove o predstavljenoj temi. Sa Kongresa  je odaslana pozitivna poruka djece iz Bosne i Hercegovine da je evropska budućnost BiH i regiona, njihova budućnost. Mladi su na Kongresu iznijeli svoje viđenje situacije u BiH trenutno, ali i ideje šta se i na koji način može i mora učiniti u narednih nekoliko godina, kako bi se zaustavili neki od negativnih trendova. Mladi su demonstrirali potencijal da donesu pozitivne promjene u društvu. 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Kroz posvećenost i iskazani interes za teme poput etike, borbe protiv korupcije i proces integracije u EU, mladi ljudi su oduševili prisutne svojim znanjem, hrabrošću i pogledom na svijet. 

</p> 
<p className="mb-4 text-blueGray-500">Imperativ je poboljšanje socijalnih prava mladih, s posebnim naglaskom na uključivanje mladih u sve oblike i procese odlučivanja na svim razinama!  

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
    
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">25. novembar</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={dand1} alt="" />
                    </div>
                    <div>
                        <img src={dand2} alt="" />
                    </div>
                    <div>
                        <img src={dand3} alt="" />
                    </div>
                    <div>
                        <img src={dand4} alt="" />
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
                  25. novembar je datum koji nas podsjeća na hrabrost, jedinstvo i trajnu težnju ka slobodi. Gradimo mostove ka buducnosti, gradeći društvo u kojem se poštuju različitosti i cijeni sloboda svakog pojedinca. 


</p> 
                  <p className="mb-4 text-blueGray-500">Neka ovaj dan bude prilika da se prisjetimo puta kojeg smo prešli i da pogledamo prema budućnosti s optimizmom. </p>
                  <p className="mb-4 text-blueGray-500">Da i dalje postoje razlozi za optimizam i nada za bolje sutra, uvjerile/i su nas naše/i vrijedne/i učenice i učenici svojim izvedbama kojima su plijenile/i pažnju prisutnih gostiju. 
</p>
                  <p className="mb-4 text-blueGray-500">Zahvaljujemo svima koji su se pridružili školskoj priredbi, a posebnu zahvalnost iskazujemo predstavnicama i predstavnicima Instituta za razvoj preduniverzitetskog obrazovanja KS, te predstavnicama i predstavnicima Sektora za obrazovanje, kulturu i sport Općine Novo Sarajevo.
</p> 
 
                  <p className="mb-4 text-blueGray-500">Draga domovino sretan ti rođendan!

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
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Uspjesi naše Berine Hebib na takmičenjima ove plesne polusezone</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={ples1} alt="" />
                    </div>
                    <div>
                        <img src={ples2} alt="" />
                    </div>
                    <div>
                        <img src={ples3} alt="" />
                    </div>
                    <div>
                        <img src={ples4} alt="" />
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
                  SARAJEVO OPEN DANCE FESTIVAL 2023 održan je od 13. do 15. oktobra 2023. godine u sportskoj dvorani Hotela Hills, gde je organizovan niz uzbudljivih događaja. 


</p> 
                  <p className="mb-4 text-blueGray-500">Za ljubitelje sportskog plesa, organizovan je prestižni WDSF turnir za parove i solo plesačice, državno prvenstvo za parove i solo plesačice, bodovni turnir za parove i solo plesačice, školska liga koja je dodatno upotpunila ovu manifestaciju, te za buduće zvijezde plesne scene, kategorija “rising stars”. </p>
                  <p className="mb-4 text-blueGray-500">Svi ovi događaji donijeli su vrhunsku zabavu i nezaboravne trenutke za plesače i publiku. Bila je ovo svojevrsna proslava umjetnosti plesa u srcu Sarajeva!
</p>
                  <p className="mb-4 text-blueGray-500">SARAJEVO OPEN DANCE FESTIVAL 2023 nije bio samo prilika za takmičenje, već i za povezivanje plesača i ljubitelja plesa iz cijelog svijeta. Ovaj festival bio je i most između različitih kultura i jedinstvena prilika za razmjenu iskustava.
</p> 
 
                  <p className="mb-4 text-blueGray-500">Naša Berina Hebib nastupila je u latinoameričkim plesovima. Na takmičenju SARAJEVO OPEN DANCE FESTIVAL 2023, održanom 13.10.2023. godine, na državnom prvenstvu BiH u latinoameričkim plesovima plasirala se u finale u kategoriji YOUTH UNDER 21.

</p> 
<p className="mb-4 text-blueGray-500">Sljedećeg dana, na KV bodovnom turniru u kategoriji D3 YOUTH LA osvojila je prvo mjesto. 

Uslijedio je internacionalni turnir WDSF NORTH MACEDONIA OPEN DANCE 2023, koji je održan 18. i 19. novembra 2023. godine u Skoplju. Na KV TURNIRU u kategoriji YOUTH D3 LA , Berina je osvojila prvo mjesto u konkurenciji sedam djevojaka iz BiH, Srbije i Bugarske.

</p> 
<p className="mb-4 text-blueGray-500">Čestitamo našoj Berini Hebib za vrhunske rezultate kojim nas je učinila sretnim i ponosnim!

</p> 

</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
               
               <video src={plesvideo} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/>
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
          <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">NAŠA PODRŠKA OBILjEŽAVANjU SVJETSKOG DANA DIJABETESA</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={dzeki1} alt="" />
                    </div>
                    <div>
                        <img src={dzeki2} alt="" />
                    </div>
                    <div>
                        <img src={dzeki3} alt="" />
                    </div>
                    <div>
                        <img src={dzeki4} alt="" />
                    </div>
                    <div>
                        <img src={dzeki5} alt="" />
                    </div>
                    <div>
                        <img src={dzeki6} alt="" />
                    </div>
                    <div>
                        <img src={dzeki7} alt="" />
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
                  Učenici i učenice IV1 razreda naše škole su, u okviru obilježavanja Svjetskog dana  dijabetesa, u utorak 14. 11. 2023. godine,  zajedno sa svojom razrednicom prof. Dženanom Tanović-Hamzić, posjetili  Centar za zdravo starenje Novo Sarajevo u kojem su obilježili ovaj značajan datum, u saradnji sa Udruženjem oboljelih od dijabetesa i Zavodom za javno zdravstvo Kantona Sarajevo.


</p> 
                  <p className="mb-4 text-blueGray-500">Dan dijabetesa je dan posvećen podizanju svijesti o ovoj  bolesti današnjice i pružanju podrške onima koji svakodnevno prolaze kroz izazove dijabetesa. Ovaj dan nije samo dan u kalendaru, već prilika da se istakne snaga i upornost ljudi koji se suočavaju s ovim stanjem.</p>
                  <p className="mb-4 text-blueGray-500">Za nas je način rada i života, borba i ljubav koju šire i pružaju naše kolegice i kolege, također inspirativna i želimo posebnu zahvalnost iskazati našoj drugarici iz razreda Azri Selimbegović i našem drugu Tariku Belagošiju za sve čemu nas uče u ovoj borbi,  već skoro četiri godine.
</p>
                  <p className="mb-4 text-blueGray-500">Proveli smo i edukativno popodne učeći o pristupu zdravom načinu života, posebno fokusiranom na prevenciju dijabetesa.
</p> 
 
                  <p className="mb-4 text-blueGray-500">Ovaj događaj su uljepšale i naše učenice, prigodnim govorom i plesom te im ovim putem želimo izraziti zahvalnost. Također smo donijeli  simbolične poklone i pripremili međugeneracijski program te smo za naš doprinos ovom programu dobili  zahvalnice Udruženja.

</p> 
<p className="mb-4 text-blueGray-500">Ovo iskustvo će nam sigurno pomoći u očuvanju zdravlja i svjesnosti važnosti pravilne brige o sebi i drugima. 
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Globalna sedmica preduzetništva</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={glob1} alt="" />
                    </div>
                    <div>
                        <img src={glob2} alt="" />
                    </div>
                    <div>
                        <img src={glob3} alt="" />
                    </div>
                    <div>
                        <img src={glob4} alt="" />
                    </div>
                    <div>
                        <img src={glob5} alt="" />
                    </div>
                    <div>
                        <img src={glob6} alt="" />
                    </div>
                    <div>
                        <img src={glob7} alt="" />
                    </div>
                    <div>
                        <img src={glob8} alt="" />
                    </div>
                    <div>
                        <img src={glob9} alt="" />
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
                  U cilju promocije kulture preduzetništva kroz dijalog, razmjenu ideja i poslovnih informacija, te senzibiliziranja javnosti na temu preduzetničkih poduhvata, Općina Novo Sarajevo i ove godine se pridružila inicijativi obilježavanja Globalne sedmice preduzetništva.


</p> 
                  <p className="mb-4 text-blueGray-500">U toku organizacije dvodnevnog događaja pod nazivom "Preduzetnički dani Općine Novo Sarajevo", okupljeni su preduzetnici i budući lideri lokalnog startup ekosistema, kako bi zajedno doprinijeli razvoju zajednice i širenju preduzetničkog duha i energije.</p>
                  <p className="mb-4 text-blueGray-500">Projektom pod nazivom "Preduzetnički dani Općine Novo Sarajevo" koji je realizovan od 15. do 16. novembra 2023. godine, u Dječijoj kući, učesnicama  i učesnicima je omogućeno da čuju informacije o prilikama za finansiranje preduzetnika, važnosti komunikacije za poslovni uspjeh, ali i o tome kako izgraditi stabilan proizvod ili uslugu.
</p>
                  <p className="mb-4 text-blueGray-500">Bila je ovo sjajna prilika za učenice i učenike završnih razreda srednjih škola Općine Novo Sarajevo da pokažu svoj preduzetnički duh kroz kreiranje i prezentaciju biznis ideja. 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Našu školu su predstavljale učenice Emina Priganica, Mersiha Čaušević i Emina Ligata i učenici Amar Suljević i Ardan Bečić uz podršku pomoćnice direktorice Delile Ramić i profesorice Lamije Šabanović.

</p> 
<p className="mb-4 text-blueGray-500">Čestitamo našim učenicama i učenicima za inovativnu ideju koju su prezentovale/i i osvojeno drugo mjesto!
</p> 
<p className="mb-4 text-blueGray-500">Izvještaj pripremila: Emana Šahbaz, učenica IV1 razreda.
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Finansijska edukacija u Centralnoj banci BiH za vršnjačke edukatore i nastavnike</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={haa1} alt="" />
                    </div>
                    <div>
                        <img src={haa2} alt="" />
                    </div>
                    <div>
                        <img src={haa3} alt="" />
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
                  U okviru projekta saradnje i obuke nastavnog osoblja i učenica/učenika čiji je cilj da se srednjim školama omogući izvođenje finansijske edukacije kao fakultativne nastavne aktivnosti, u Centralnom uredu Centralne banke Bosne i Hercegovine (CBBiH) je u utorak, 14.11.2023. godine održana je edukacija učenika/ca IV4 razreda (Đipa Naida, Amila Aličković, Ajla Karup, Lejla Imširović, Haris Ibrišagić, Benjamin Lipovac, Velić Amina i Alagić Naida).


</p> 
                  <p className="mb-4 text-blueGray-500">Današnjom edukacijom u projekat su uključeni nastavnice/i i odabrane/i učenice/i u svojstvu vršnjačkih edukatora iz Srednje umjetničke škole, Sarajevo i Srednje ekonomske  škole Sarajevo. </p>
                  <p className="mb-4 text-blueGray-500">Edukacija je bila usmjerena na upravljanje ličnim finansijama, upoznavanje s osnovnim pojmovima i karakteristikama najzastupljenijih finansijskih proizvoda i usluga na tržištu, te na informisanje o važnosti odgovornog pristupa finansijskim proizvodima i uslugama.
</p>
                  <p className="mb-4 text-blueGray-500">CBBiH je u posljednjih nekoliko godina pokrenula, samostalno i u saradnji sa partnerskim organizacijama, niz aktivnosti na podizanju nivoa finansijske edukacije i inkluzije stanovništva u Bosni i Hercegovini. 
</p> 
 
                  <p className="mb-4 text-blueGray-500">Razlog zbog čega CBBiH insistira na stavljanju ove teme u fokus, jeste činjenica da CBBiH predsjedava Stalnim odborom za finansijsku stabilnost i koordinira djelatnosti entitetskih agencija za bankarstvo, te tako ima značajnu ulogu u održavanju finansijske stabilnosti u državi. 

</p> 
<p className="mb-4 text-blueGray-500">Sva navedena tijela, uz dodatak Agencije za osiguranje depozita Bosne i Hercegovine, predstavljaju mrežu finansijske stabilnosti. 
</p> 
<p className="mb-4 text-blueGray-500">U svrhu finansijske edukacije i inkluzije je i kreiranje Web stranice CBBiH kao platforme za učenje. Opširnije: <a href='https://www.cbbh.ba/'>https://www.cbbh.ba/</a>
</p> 
<p className="mb-4 text-blueGray-500">Njen osnovni cilj je unapređenje spoznaje o finansijama i finansijskim uslugama. Funkcionisanje finansijskih usluga, kao i njihova transparentnost, u velikoj mjeri zavise od razumijevanja te oblasti od strane zainteresovanih lica.
</p> 
<p className="mb-4 text-blueGray-500">Svim zainteresovanim licima potrebno je pružiti dovoljno informacija da bi uspjeli razumjeti osnovne finansijske pojmove i naučili da ih koriste pravilno. 
</p> 
<p className="mb-4 text-blueGray-500">Dobra informisanost o ovoj materiji preduslov je za podsticanje efektivne i široke, a ponajviše pravilne upotrebe dostupnih finansijskih usluga, za podsticanje štednje i efikasnijeg upravljanja novcem, za podsticanje odgovornog investiranja i sl. 
</p> 
<p className="mb-4 text-blueGray-500">Navedeno može doprinijeti unapređenju poslovnog okruženja, a daje i doprinos efikasnoj zaštiti potrošača, korisnika finansijskih usluga, prevencijom potencijalnih problema.
</p> 
<p className="mb-4 text-blueGray-500">Stoga, na ovoj web stranici se obrađuju, kreiraju i objavljuju materijali koji opisuju tematiku (osnovne informacije o novcu generalno, o domaćoj valuti, o ulozi CBBiH, o štednji i dr.) na stručan i edukativan način.

</p> 
<p className="mb-4 text-blueGray-500">Materijali su kreirani za sve starosne skupine, odnosno za sve slojeve društva  i obrađeni na način koji omogućava pružanje informacija onima koji nisu eksperti u ovim oblastima, a u potrazi su za osnovnim teoretskim znanjem i informacijama. 
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Projekat "Upoznaj Bosnu i Hercegovinu" - posjeta herojskom gradu Goražde</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={goradzde1} alt="" />
                    </div>
                    <div>
                        <img src={goradzde2} alt="" />
                    </div>
                    <div>
                        <img src={goradzde3} alt="" />
                    </div>
                    <div>
                        <img src={goradzde4} alt="" />
                    </div>
                    <div>
                        <img src={goradzde5} alt="" />
                    </div>
                    <div>
                        <img src={goradzde6} alt="" />
                    </div>
                    <div>
                        <img src={goradzde7} alt="" />
                    </div>
                    <div>
                        <img src={goradzde8} alt="" />
                    </div>
                    <div>
                        <img src={goradzde9} alt="" />
                    </div>
                    <div>
                        <img src={goradzde10} alt="" />
                    </div>
                    <div>
                        <img src={goradzde11} alt="" />
                    </div>
                    <div>
                        <img src={goradzde12} alt="" />
                    </div>
                    <div>
                        <img src={goradzde13} alt="" />
                    </div>
                    <div>
                        <img src={goradzde14} alt="" />
                    </div>
                    <div>
                        <img src={goradzde15} alt="" />
                    </div>
                    <div>
                        <img src={goradzde16} alt="" />
                    </div>
                    <div>
                        <img src={goradzde17} alt="" />
                    </div>
                    <div>
                        <img src={goradzde18} alt="" />
                    </div>
                    <div>
                        <img src={goradzde19} alt="" />
                    </div>
                    <div>
                        <img src={goradzde20} alt="" />
                    </div>
                    <div>
                        <img src={goradzde21} alt="" />
                    </div>
                    <div>
                        <img src={goradzde22} alt="" />
                    </div>
                    <div>
                        <img src={goradzde23} alt="" />
                    </div>
                    <div>
                        <img src={goradzde24} alt="" />
                    </div>
                    <div>
                        <img src={goradzde25} alt="" />
                    </div>
                    <div>
                        <img src={goradzde26} alt="" />
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
                  U okviru projekta "Upoznaj Bosnu i Hercegovinu"  učenice i učenici su u pratnji direktorice Škole, Amire Kadrispahić i profesorica Suade Tadić, Suvade Trako i Amre Lagumdžija, posjetile/i su herojski grad Goražde.

</p> 
                  <p className="mb-4 text-blueGray-500">U jutarnjim satima krenuli smo autobusom prema Goraždu u jednom ugodnom i lijepom druženju.
Prvo smo posjetili Mješoviti srednjoškolski centar Enver Pozderović u kome je zastupljen i smjer ekonomski tehničar.
Na vratima škole srdačno nas je dočekala direktorica Škole, Mula Imamović, kao i grupa učenica/učenika i profesorica.
 </p> 
                  <p className="mb-4 text-blueGray-500">U pratnji domaćina obišli smo Školu, prisustvovali časovima gdje smo se upoznali sa njihovim Nastavnim planom i programom kao i načinom organizovanja nastave.
Nakon obilaska Škole, položili smo cvijeće ubijenoj djeci Goražda u periodu 1992 - 1995. godine, obišli <i>most ispod mosta</i>. Posjetile/i smo i Zavičajni muzej grada Goražda, gdje nas je kustos detaljno informisao o ratnim dešavanjima, te načinu prevazilaženja istih o čemu svjedoče sačuvani eksponati.
 
</p>
                  <p className="mb-4 text-blueGray-500">Posebno nas je zadivilo izlaganje učenica koje su nas, kao i uvažena Direktorica, provele kroz ratna dešavanja i način na koji su se ljudi herojski nosili sa svim ratnim nevoljama.
</p> 
 
                  <p className="mb-4 text-blueGray-500">Dobrodošlicu su nam ukazali Premijer Bosansko podrinjskog kantona Edin Ćulov, kao i gradonačelnik Goražda Ernest Imamović, gdje smo dogovorili daljnju saradnju, kako između dvije škole, tako i sa zajednicom grada Goražda.

</p> 
<p className="mb-4 text-blueGray-500">Bilo je ovo jedno predivno putovanje i druženje u prelijepom herojskom gradu.
Ispunjeni nezaboravnim utiscima, vratili smo se u Sarajevo u večernjim satima.
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Studijska posjeta III1 razreda Centralnoj banci Bosne i Hercegovine</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={ha1} alt="" />
                    </div>
                    <div>
                        <img src={ha2} alt="" />
                    </div>
                    <div>
                        <img src={ha3} alt="" />
                    </div>
                    <div>
                        <img src={ha4} alt="" />
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
                  Učenici/ce III1 razreda, te učenici/e Đipa Naida, Aličković Amila, Zukanović Arman i Sumeja Džindo, prisustvovali su edukaciji na temu: Nadležnosti i funkcije Centralne banke, u četvrtak, 9.11. 2023. godine, u centralnom uredu Centralne banke BiH.

</p> 
                  <p className="mb-4 text-blueGray-500">Centralna banka se smatra bankarom države, odnosno, u punoj funkciji, banka je svih banaka.Osnovana  je 11. augusta 1997. godine Zakonom o CBBiH. Nadležnost je definisana Ustavom BiH. Centralna banka Bosne i Hercegovine  je jedina institucija Bosne i Hercegovine ovlaštena za vođenje monetarne politike u BiH. Osnovni cilj Centralne banke je stabilnost domaće valute.  Jedina je  institucija koja ima pravo da stavlja  i povlači iz opticaja novčanice i kovanice konvertibilne marke (KM). Dalje, nadgleda i prati stanje finansijske stabilnosti i pruža podršku ekonomskom razvoju države u okviru postojećeg makroekonomskog modela.
 </p> 
                  <p className="mb-4 text-blueGray-500">Prezentirane su nam <b><i>nadležnosti banke, organizacija banke, aranžman sa MMF-om (Currency board), informacije o RTGS i žirokliring sistemu, Jedinstvenom registru računa poslovnih subjekata (JRRPS) BiH, Centralnom registru kredita (CRK) pravnih i fizičkih lica u Bosni i Hercegovini.</i></b> 
 
</p>
                  <p className="mb-4 text-blueGray-500"><i>Zvanične statistike Centralne banke Bosne i Hercegovine</i> su integralni dio makroekonomskih statistika. Publikuju se  putem štampanih publikacija, web stranice CBBiH i međunarodne distribucije.
Učenicima/ama su predstavljeni i <i>aspekti međunarodne saradnje banke</i>. CB ima aktivne bilateralne odnose s drugim centralnim bankama, finansijskim institucijama i organizacijama  (ECB, EUROSTAT, EBRD, EFSE, USAID, SECO, GiZ i dr.) 

</p> 
<p className="mb-4 text-blueGray-500">CBBiH obavlja <i>ulogu fiskalnog agenta prema MMF-u</i>. U  ime vladinih institucija u Bosni i Hercegovini vodi račune, povlači sredstva, izvršava finansijske obaveze, prijem i distribuciju indirektnih poreza, vrši poslove depozitara i relevantnu korespodenciju. 
 </p> 
                  <p className="mb-4 text-blueGray-500">Saznali smo i šta <i>CB kao poslodavac omogućava</i> službenicima Centralne banke Bosne i Hercegovine:  izazovan posao, te konstantno učenje i razvoj u organizacijskoj kulturi visoke učinkovitosti i timskog rada u jednoj od najrespektabilnijih institucija u Bosni Hercegovini.
 
</p>
<p className="mb-4 text-blueGray-500">Prezentirane su nam i <i>aktivnosti CB u svjetlu društveno odgovornog marketinga: finansijska inkluzija i finansijska pismenost (edukacije, predavanja, Svjetski dan štednje, publikacije.) Promoviranjem finansijskih znanja i vještina kod stanovništva i povećanjem nivoa finansijske pismenosti</i>, doprinosi se finansijskoj stabilnosti, ali i većoj finansijskoj inkluziji pojedinca. 
<i>Centralna banka za obrazovanje</i>: pruža mogućnost studentima završnih godina prvog ciklusa studija na visokoškolskim ustanovama u Bosni i Hercegovini, prvenstveno ekonomskog smjera, da obave <i>ferijalnu praksu, te studijsku praksu u okviru postdiplomskog studija.</i>

 </p> 
                  <p className="mb-4 text-blueGray-500"><i>Zahvaljujemo uposlenicima CB za njihov doprinos unapređenju praktičnih kompetencija naših učenika/ca.
Projekat: Upoznaj privredu Kantona Sarajevo</i>, Indira Zeković, prof.
Opširnije na: <a href='https://www.cbbh.ba/'>https://www.cbbh.ba/</a>
 
 
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