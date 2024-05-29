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

import ajla from './images/ajla.jpg';

import muza1 from './images/muza1.jpg';
import muza2 from './images/muza2.jpg';
import muza3 from './images/muza3.jpg';
import muza4 from './images/muza4.jpg';
import muza5 from './images/muza5.jpg';
import muza6 from './images/muza6.jpg';
import muza7 from './images/muza7.jpg';
import muza from './images/muza1.mp4';

import nasilje1 from './images/nasilje1.jpg';
import nasilje2 from './images/nasilje2.jpg';
import nasilje3 from './images/nasilje3.jpg';
import nasilje4 from './images/nasilje4.jpg';
import nasilje5 from './images/nasilje5.jpg';
import nasilje6 from './images/nasilje6.jpg';
import nasilje7 from './images/nasilje7.jpg';

import alija1 from './images/alija1.jpg';
import alija2 from './images/alija2.jpg';
import alija3 from './images/alija3.jpg';

import kino1 from './images/kino1.jpg';
import kino2 from './images/kino2.jpg';
import kino3 from './images/kino3.jpg';

import alma1 from './images/alma1.jpg';
import alma2 from './images/alma2.jpg';
import alma3 from './images/alma3.jpg';
import alma4 from './images/alma4.jpg';
import alma5 from './images/alma5.jpg';

import olimpijada from './images/40g.mp4';

import banka1 from './images/banka1.jpg';
import banka2 from './images/banka2.jpg';
import banka3 from './images/banka3.jpg';
import banka4 from './images/banka4.jpg';
import banka5 from './images/banka5.jpg';

import dzekii1 from './images/dzekii1.jpg';
import dzekii2 from './images/dzekii2.jpg';
import dzekii3 from './images/dzekii3.jpg';

import danas0 from './images/danas0.jpg';
import danas from './images/danas.jpg';
import danas1 from './images/danas1.jpg';
import danas2 from './images/danas2.jpg';
import danas3 from './images/danas3.jpg';
import danas4 from './images/danas4.jpg';

import pink from './images/pink.mp4';

import knjig1 from './images/knjig1.jpg';
import knjig2 from './images/knjig2.jpg';
import knjig3 from './images/knjig3.jpg';

import priredba1 from './images/priredba1.jpg';
import priredba2 from './images/priredba2.jpg';
import priredba3 from './images/priredba3.jpg';
import priredba4 from './images/priredba4.jpg';
import priredba5 from './images/priredba5.jpg';
import priredba6 from './images/priredba6.jpg';
import priredba7 from './images/priredba7.jpg';
import priredba8 from './images/priredba8.jpg';
import priredba9 from './images/priredba9.jpg';
import priredba10 from './images/priredba10.jpg';
import priredba11 from './images/priredba11.jpg';
import priredba12 from './images/priredba12.jpg';
import priredba13 from './images/priredba13.jpg';
import priredba14 from './images/priredba14.jpg';
import priredba from './images/priredba.mp4';

import sport1 from './images/sport1.jpg';
import sport2 from './images/sport2.jpg';
import sport3 from './images/sport3.jpg';
import sport4 from './images/sport4.jpg';
import sport5 from './images/sport5.jpg';
import sport6 from './images/sport6.jpg';

import star1 from './images/star1.jpg';
import star2 from './images/star2.jpg';
import star3 from './images/star3.jpg';

import finansije1 from './images/finansije1.jpg';
import finansije2 from './images/finansije2.jpg';
import finansije3 from './images/finansije3.jpg';
import finansije4 from './images/finansije4.jpg';
import finansije5 from './images/finansije5.jpg';

import indira1 from './images/indira1.jpg';
import indira2 from './images/indira2.jpg';
import indira3 from './images/indira3.jpg';
import indira4 from './images/indira4.jpg';

import posjeta from './images/posjeta.jpg';
import posjeta1 from './images/posjeta1.jpg';
import posjeta2 from './images/posjeta2.jpg';
import posjeta3 from './images/posjeta3.jpg';
import posjeta4 from './images/posjeta4.jpg';
import posjeta5 from './images/posjeta5.jpg';
import posjeta6 from './images/posjeta6.jpg';


import azemina1 from './images/azemina1.jpg';
import azemina2 from './images/azemina2.jpg';
import azemina3 from './images/azemina3.jpg';
import azemina4 from './images/azemina4.jpg';
import azemina5 from './images/azemina5.jpg';
import azemina6 from './images/azemina6.jpg';

import beograd from './images/beograd.jpg';
import beograd2 from './images/beograd2.jpg';
import beograd3 from './images/beograd3.jpg';

import naida from './images/naida.jpg';
import naida1 from './images/naida1.jpg';
import naida2 from './images/naida2.jpg';
import naida3 from './images/naida3.jpg';
import naida4 from './images/naida4.jpg';
import naida5 from './images/naida5.jpg';
import naida6 from './images/naida6.jpg';

import malik1 from './images/malik1.jpeg';
import malik2 from './images/malik2.jpeg';
import malik3 from './images/malik3.jpeg';

import gimn1 from './images/gimn1.jpg';
import gimn2 from './images/gimn2.jpg';
import gimn3 from './images/gimn3.jpg';
import gimn4 from './images/gimn4.jpg';
import gimn5 from './images/gimn5.jpg';

import marina1 from './images/marina1.jpg';
import marina2 from './images/marina2.jpg';

import volim1 from './images/volim1.jpg';
import volim2 from './images/volim2.jpg';
import volim3 from './images/volim3.jpg';
import volim4 from './images/volim4.jpg';
import volim5 from './images/volim5.jpg';

import edin1 from './images/edin1.jpg';
import edin2 from './images/edin2.jpg';
import edin3 from './images/edin3.jpg';

import cika1 from './images/cika1.jpg';
import cika2 from './images/cika2.jpg';
import cika3 from './images/cika3.jpg';
import cika4 from './images/cika4.jpg';
import cika5 from './images/cika5.jpg';
import cika6 from './images/cika6.jpg';

import radi1 from './images/radi1.jpg';
import radi2 from './images/radi2.jpg';
import radi3 from './images/radi3.jpg';
import radi4 from './images/radi4.jpg';
import radi5 from './images/radi5.jpg';
import radi6 from './images/radi6.jpg';
import radi7 from './images/radi7.jpg';
import radi8 from './images/radi8.jpg';
import radi from './images/radi.mp4';

import mmp1 from './images/mmp1.jpg';
import mmp2 from './images/mmp2.jpg';
import mmp3 from './images/mmp3.jpg';
import mmp4 from './images/mmp4.jpg';
import mmp5 from './images/mmp5.jpg';
import mmp6 from './images/mmp6.jpg';

import celjo from './images/celjo.jpg';
import celjo1 from './images/celjo1.jpg';
import celjo2 from './images/celjo2.jpg';
import celjo3 from './images/celjo3.jpg';
import celjo4 from './images/celjo4.jpg';
import celjo5 from './images/celjo5.jpg';
import celjo6 from './images/celjo6.jpg';
import celjo7 from './images/celjo7.jpg';
import celjo8 from './images/celjo8.jpg';

import almina1 from './images/almina1.jpg';
import almina2 from './images/almina2.jpg';
import almina3 from './images/almina3.jpg';
import almina4 from './images/almina4.jpg';
import almina5 from './images/almina5.jpg';
import almina6 from './images/almina6.jpg';
import almina7 from './images/almina7.jpg';

import grada1 from './images/grada1.jpg';
import grada2 from './images/grada2.jpg';
import grada3 from './images/grada3.jpg';
import grada4 from './images/grada4.jpg';
import grada5 from './images/grada5.jpg';

import hb from './images/hb.jpg';

import dom1 from './images/dom1.jpg';
import dom2 from './images/dom2.jpg';

import hemija1 from './images/hemija1.jpg';
import hemija2 from './images/hemija2.jpg';
import hemija3 from './images/hemija3.jpg';
import hemija4 from './images/hemija4.jpg';
import hemija5 from './images/hemija5.jpg';
import hemija6 from './images/hemija6.jpg';
import hemija7 from './images/hemija7.jpg';
import hemija8 from './images/hemija8.jpg';
import hemija9 from './images/hemija9.jpg';

import knjiges1 from './images/knjiges1.jpg';
import knjiges2 from './images/knjiges2.jpg';
import knjiges3 from './images/knjiges3.jpg';
import knjiges4 from './images/knjiges4.jpg';
import knjiges5 from './images/knjiges5.jpg';

import satler1 from './images/satler1.jpg';
import satler2 from './images/satler2.jpg';
import satler3 from './images/satler3.jpg';
import satler4 from './images/satler4.jpg';
import satler5 from './images/satler5.jpg';
import satler6 from './images/satler6.jpg';
import satler7 from './images/satler7.jpg';

import izborna1 from './images/izborna1.jpg';
import izborna2 from './images/izborna2.jpg';
import izborna3 from './images/izborna3.jpg';
import izborna4 from './images/izborna4.jpg';
import izborna9 from './images/izborna4.1.jpg';
import izborna5 from './images/izborna5.jpg';
import izborna6 from './images/izborna6.jpg';
import izborna7 from './images/izborna7.jpg';
import izborna8 from './images/izborna8.jpg';

import aod1 from './images/aod1.jpg';
import aod2 from './images/aod2.jpg';
import aod3 from './images/aod3.jpg';

import roditelji1 from './images/roditelji1.jpg';
import roditelji2 from './images/roditelji2.jpg';
import roditelji3 from './images/roditelji3.jpg';
import roditelji4 from './images/roditelji4.jpg';

import hiv from './images/hiv.jpg';
import hiv1 from './images/hiv1.jpg';
import hiv2 from './images/hiv2.jpg';
import hiv3 from './images/hiv3.jpg';

import tomislav from './images/tomislav.jpg';
import tomislav1 from './images/tomislav1.jpg';
import tomislav2 from './images/tomislav2.jpg';
import tomislav3 from './images/tomislav3.jpg';
import tomislav4 from './images/tomislav4.jpg';

import geoc11 from './images/Šljivo, suljo daris.jpg';
import geoc2 from './images/emina.jpg';
import geoc3 from './images/hatidža.jpg';
import geoc4 from './images/anes.jpg';
import geoc5 from './images/lejla.jpg';
import geoc6 from './images/zametica.jpg';
import geoc7 from './images/šljivo.jpg';
import geoc8 from './images/harmonikaš.jpg';
import geoc9 from './images/ilhan.jpg';
import geoc10 from './images/mela.jpg';
import geoc1 from './images/grupna.jpg';


import tehn1 from './images/tehn1.jpg';
import tehn2 from './images/tehn2.jpg';
import tehn3 from './images/tehn3.jpg';
import tehn4 from './images/tehn4.jpg';
import tehn5 from './images/tehn5.jpg';
import tehn6 from './images/tehn6.jpg';
import tehn7 from './images/tehn7.jpg';

import lep1 from './images/lep1.jpg';
import lep2 from './images/lep2.jpg';
import lep3 from './images/lep3.jpg';

import goran1 from './images/goran1.jpg';
import goran2 from './images/goran2.jpg';
import goran3 from './images/goran3.jpg';
import goran4 from './images/goran4.jpg';

import hocu1 from './images/hocu1.jpg';
import hocu2 from './images/hocu2.jpg';
import hocu3 from './images/hocu3.jpg';
import hocu4 from './images/hocu4.jpg';
import hocu5 from './images/hocu5.jpg';
import hocu6 from './images/hocu6.jpg';

import matu1 from './images/matu1.jpg';
import matu2 from './images/matu2.jpg';
import matu3 from './images/matu3.jpg';
import matu4 from './images/matu4.jpg';
import matu5 from './images/matu5.jpg';
import matu6 from './images/matu6.jpg';
import matu7 from './images/matu7.jpg';
import matu8 from './images/matu8.jpg';
import matu9 from './images/matu9.jpg';

import feda1 from './images/4315.jpeg';
import feda2 from './images/4334.jpeg';
import feda3 from './images/4341.jpeg';
import feda4 from './images/4346.jpeg';
import feda5 from './images/4347.jpeg';
import feda6 from './images/4357.jpeg';
import feda7 from './images/4374.jpeg';
import feda8 from './images/4377.jpeg';
import feda9 from './images/4390.jpeg';
import feda10 from './images/4395.jpeg';

import njem1 from './images/njem1.jpg';
import njem2 from './images/njem2.jpg';
import njem3 from './images/njem3.jpg';
import njem4 from './images/njem4.jpg';
import njem5 from './images/njem5.jpg';
import njem6 from './images/njem6.jpg';

import vece1 from './images/vece1.jpg';
import vece2 from './images/vece2.jpg';
import vece3 from './images/vece3.jpg';
import vece4 from './images/vece4.jpg';
import vece5 from './images/vece5.jpg';
import vece6 from './images/vece6.jpg';
import vece7 from './images/vece7.jpg';
import vece8 from './images/vece8.jpg';
import vece9 from './images/vece9.jpg';
import vece10 from './images/vece10.jpg';
import vece11 from './images/vece11.jpg';
import vece12 from './images/vece12.jpg';
import vece13 from './images/vece16.jpg';
import vece14 from './images/vece13.jpg';
import vece15 from './images/vece14.jpg';
import vece16 from './images/vece15.jpg';

import kasse1 from './images/kasse1.jpg';
import kasse2 from './images/kasse2.jpg';

import nab1 from './images/nab1.jpg';
import nab2 from './images/nab2.jpg';
import nab3 from './images/nab3.jpg';
import nab4 from './images/nab4.jpg';
import nab5 from './images/nab5.jpg';
import nab6 from './images/nab6.jpg';

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">MATURSKO VEČE 2024. 



</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={vece1} alt="" />
                    </div>
                    <div>
                        <img src={vece2} alt="" />
                    </div>
                    <div>
                        <img src={vece3} alt="" />
                    </div>
                    <div>
                        <img src={vece4} alt="" />
                    </div>
                    <div>
                        <img src={vece5} alt="" />
                    </div>
                    <div>
                        <img src={vece6} alt="" />
                    </div>
                    <div>
                        <img src={vece7} alt="" />
                    </div>
                    <div>
                        <img src={vece8} alt="" />
                    </div>
                    <div>
                        <img src={vece9} alt="" />
                    </div>
                    <div>
                        <img src={vece10} alt="" />
                    </div>
                    <div>
                        <img src={vece11} alt="" />
                    </div>
                    <div>
                        <img src={vece12} alt="" />
                    </div>
                    <div>
                        <img src={vece13} alt="" />
                    </div>
                    <div>
                        <img src={vece14} alt="" />
                    </div>
                    <div>
                        <img src={vece15} alt="" />
                    </div>
                    <div>
                        <img src={vece16} alt="" />
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
                  U petak, 17. 5. 2024. godine, maturanti i maturantice naše škole, generacija 2020/2024. godine, proslavila je matursko veče u Hotelu Holiday .</p>
<p className="mb-4 text-blueGray-500">
Divno vrijeme, divne haljine i odijela, ljepota i mladost, ozarena lica roditelja, razrednika, profesora, direktora, pedagoga... spojila je nekoliko srednjih škola, u nekoliko sala, u divno, nezaboravno matursko veče.</p>
<p className="mb-4 text-blueGray-500">
Nakon slikanja ispred hotela,  učenici i učenice četvrtih razreda naše škole dostojanstveno i ponosno, uz aplauz prisutnih otišli su na obilježavanje večeri koja ih definitivno odvodi u svijet odraslih. 
Direktorica naše škole, Amira Kadrispahić, je u ime razrednica ove divne generacije Dženane Tanović-Hamzić, Selme Jusić, Amre Hodžić, Indire Zeković, Aide Babić i Sanje Filipović, kao i predmetnih profesorica i profesora, uprave škole, te u svoje lično ime, prigodnim riječima pozdravila maturante i maturantice, emotivno ističući da odlazi još jedna neponovljiva generacija. 
</p>
<p className="mb-4 text-blueGray-500">
Nakon zajedničkih fotografija razreda, zabava je mogla da počne, muzika i ples...
Skoro do ponoći uživalo se u muzici i divnoj atmosferi, bilo je posebno emotivnih momenata, a suze na kraju znak su da smo svi zajedno obavili jedan divan, ozbiljan,  edukativan i važan zadatak....oblikovali smo ljude koji će imati znanja, sreće i kreativnosti da formiraju svoju budućnost. 
</p>
<p className="mb-4 text-blueGray-500">
Nadamo se značajnom uspjehu i na ispitu zrelosti i upisu na željene fakultete ili poslu u partnerskim bankama.
</p>
<p className="mb-4 text-blueGray-500">
Zbog svega, maturantice i maturanti, želimo da s posebnim emocijama i ponosom  pamtimo i da vi pamtite divne i važne trenutke provedene u našoj školi.
</p>
<p className="mb-4 text-blueGray-500">
Sretno!
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Predavači Agencije za javne nabavke Bosne i Hercegovine u našoj školi



</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={nab1} alt="" />
                    </div>
                    <div>
                        <img src={nab2} alt="" />
                    </div>
                    <div>
                        <img src={nab3} alt="" />
                    </div>
                    <div>
                        <img src={nab4} alt="" />
                    </div>
                    <div>
                        <img src={nab5} alt="" />
                    </div>
                    <div>
                        <img src={nab6} alt="" />
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
                  Admir Ćebić i Damir Ćorić, registrovani predavači Agencije, treneri za obuku u oblasti javnih nabavki, održali su za učenike/ce III1, II4  i II5 razreda u srijedu, 15. maja, u multimedijalnoj sali, stručno predavanje na  temu historijata, organizacije, odgovornosti, nadležnosti, legislative Agencije , programima obuke-modulima za uposlene u oblasti javnih nabavki prema Direktivi EU i prema Zakonu o javnim nabavkama BiH i podzakonskim aktima koji uključuju teoretski dio, ali i praktične zadatke i primjere dobre i loše prakse.</p>
<p className="mb-4 text-blueGray-500">
Agencija za javne nabavke Bosne i Hercegovine je samostalna, upravna organizacija ustanovljena Zakonom o javnim nabavkama BiH. Agencija ima sjedište u Sarajevu i dvije filijale u Banja Luci i Mostaru.. U prvoj fazi, informacioni sistem e-Nabavke podrazumijeva integraciju tri aplikacije i to, Registar ugovornih tijela i ponuđača, sistem za dostavu izvještaja o provedenim postupcima javnih nabavki-WisPPA i sistem za objavu obavijesti u postupcima javnih nabava-Go-Procure sa svim njihovim funkcionalnostima, dok se u drugoj fazi sistem e-Nabavke nadograđuje sa modulima e-Tendering i e-Aukcija. </p>
<p className="mb-4 text-blueGray-500">
Damir Ćorić je učenicima predstavio način pristupa portalu e-Nabavke putem adrese:  www.ejn.gov.ba.i i ukazao na trenutne opcije i mogućnosti koje portal pruža. Uspostavljanje jedinstvenog portala za e-nabavke  kreiralo je temelj za uspostavljanje efikasnog sistema e-nabavki u BiH. E-Nabavke nisu samo važan segment reforme e-uprave unutar Europske unije, nego je njihov razvoj i nivo usklađenosti predmet monitoringa i evaluacije izvještaja o napretku na tranzicijskom putu Bosne i Hercegovine prema članstvu. Elektronske javne nabavke u brojnim zemljama koriste se kao alat za unapređenje efikasnosti procesa nabavke roba, usluga i radova te ostvarivanja ušteda u javnom sektoru. Na portalu javnih nabavki BiH dostupna su e-obavještenja o javnim nabavkama, no nisu stvoreni uslovi za razvoj ostalih faza e-nabavke. Damir Ćorić je podcrtao i buduće korake u nadogradnji portala e-Nabavke, kao što je  dostavljanje ponuda od ponuđača, otvaranje pristiglih ponuda, evaluacija pristiglih ponuda, te izrada mobilne aplikacije za Android i iOS operativne sisteme.  
</p>
<p className="mb-4 text-blueGray-500">
Sljedeći dio predavanja se odnosio na nadležnosti i odgovornosti Agencije koje uključuju: pripremu i izradu propisa iz područja javne nabave, objavljivanje priručnika, uputa, standardnih obrazaca i modela, pružanje tehničke pomoći i savjetodavnih mišljenja, uspostavu sistema za praćenje provedbe postupaka, prikupljanje podataka, analiza i objavljivanje informacija o postupcima javne nabave, pokretanje, podržavanje i stvaranje preduvjeta za elektronske javne nabavke, organiziranje i održavanje obuka za ovlaštene predavače i službenike, izrada godišnjih izvještaja za Vijeće ministara BiH...
</p>
<p className="mb-4 text-blueGray-500">
Objasnili su nam i sistem e-Aukcija koji je elektronski proces provedbe dijela postupka javne nabavke, koji uključuje podnošenje novih cijena, izmijenjenih naniže, i/ili novih vrijednosti određenih elemenata ponude, a odvija se nakon početne ocjene ponuda i omogućava njihovo rangiranje pomoću automatskih metoda ocjenjivanja u sistemu e-Nabavke. 
</p>
<p className="mb-4 text-blueGray-500">
Na kraju sesije, predavači su profesionalno i sa puno entuzijazma odgovorili na pitanja naših učenika/ca. Hvala predavačima za njihov iznimno vrijedan doprinos razvoju kompetencija naših učenika potrebnih za snalaženje i rad u savremenom svijetu.
</p>
<p className="mb-4 text-blueGray-500">
Projekt Upoznaj privredu Kantona Sarajevo, Indira Zeković, prof.
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Edukativna radionica u  SPARKASSE BANK, SARAJEVO



</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={kasse1} alt="" />
                    </div>
                    <div>
                        <img src={kasse2} alt="" />
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
                  Učenici/ce III1 razreda i  Indira Zeković, prof. posjetili/e su SPARKASSE BANK, SARAJEVO, u ponedjeljak 13. maja.</p>
<p className="mb-4 text-blueGray-500">
Sparkasse Bank dd BiH je članica austrijske finansijske institucije Steiermärkische Sparkasse. Njihova matična banka Steiermärkische Sparkasse je najveća regionalna banka na jugu Austrije sa 200 godina tradicije u poslovanju, te dugoročnom i održivom strategijom razvoja u zemljama regije. Članica je Erste Bank und Sparkassen Austrija i dio je najjače grupe banaka fokusiranih na poslovanje sa stanovništvom, malim i srednjim preduzećima u Evropi. Moderna su banka koja zadržava tradicionalne vrijednosti Sparkasse, uz orijentaciju na poslovanje sa stanovništvom, malim i srednjim preduzećima.</p>
<p className="mb-4 text-blueGray-500">
Upoznali su nas sa širokom paletom finansijskih proizvoda stanovništvu, malim i srednjim preduzećima, velikim kompanijama, institucionalnim klijentima, te javnom sektoru. Stavljaju akcenat na brzinu i efikasnost pružanja usluga, te jačanje povjerenja i lojalnosti klijenata. Slijede bankarstvo orijentirano na održivost i dobrobit zajednice. Jedna su od najbrže rastućih, a istovremeno i najstabilnijih banaka u BiH. Ono što je još važnije, misiju građenja održivosti i finansijskog zdravlja su inkorporirali u svoj osnovni bankarski biznis, prije svega tako što dugoročnu stabilnost Banke i klijenata stavljaju iznad kratkoročnog profita. Vode odgovornu politiku kreditiranja i nastoje živjeti humano, fer bankarstvo i pratiti klijente sa dobrim inovativnim proizvodima, savjetovati kada rastu, ali isto tako biti uz njih u manje dobrim vremenima. Pri tome imaju u vidu širu sliku - uticaj koji banke mogu imati na privredu i koliko je mogu osnažiti. Ciljano se fokusiraju na one industrije i sektore koji generiraju najveći udio poslovne aktivnosti i novih radnih mjesta i koji, našu ekonomiju mogu učiniti istinski samostalnom i održivom. Svojim primjerom i dobrim praksama nastoje podsticati promjene u poimanju uloge bankarskog sektora, pokazuju da bankarstvo orijentirano na održivost i dobrobit zajednice, apsolutno ne znači manje finansijski uspješan model. Naprotiv, Sparkasse Banka je jedna od najbrže rastućih, a istovremeno i najstabilnijih banaka u BiH. Uspjeh zahvaljuju posvećenom timu zaposlenika i trude se biti banka u kojoj će oni osjećati zadovoljstvo i svrhu.  Doživljavaju ga i kao odgovornost, i nastavit će ga koristiti kako bi aktivno doprinosili kvaliteti života ljudi oko nas, održivosti ekonomije i planete koju ostavljamo budućim generacijama.  
</p>
<p className="mb-4 text-blueGray-500">
Osim što su nas uposlenici banke upoznali sa vrijednostima banke, finansijskim proizvodima, organizacionim, marketinškim aspektima poslovanja, savremenim izazovima u bankarstvu, odgovorili su i na sva pitanja učenika koji su pokazali stanovit interes za aktivnosti banke.  Bilo je tu i zanimljivih bankarskih priča iz njihove dobre prakse. Upriličili su nam i edukativnu radionicu: Kako prepoznati falsifikovane novčanice? 
</p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo uposlenicima banke za vrhunski profesionalizam u realizaciji posjete i njihov nemjerljivo vrijedan doprinos unapređenju kompetencija naših učenika. Hvala našoj Belmi Softić za organizaciju posjete Sparkasse Bank.
Projekt Upoznaj privredu Kantona.
</p>
<p className="mb-4 text-blueGray-500">
Projekt Upoznaj privredu Kantona Sarajevo, Indira Zeković, prof.
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">posjeta predstavnika stručne škole iz Njemačke




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={njem1} alt="" />
                    </div>
                    <div>
                        <img src={njem2} alt="" />
                    </div>
                    <div>
                        <img src={njem3} alt="" />
                    </div>
                    <div>
                        <img src={njem4} alt="" />
                    </div>
                    <div>
                        <img src={njem5} alt="" />
                    </div>
                    <div>
                        <img src={njem6} alt="" />
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
                  U Četvrtak, 16.05.2024, našu školu posjetili su predstavnici
stručne škole zapadne pokrajine "NRW" u Njemačkoj sa glavnim sjedištem u gradu Stolberg i sa podruznicom u gradu Simmerath.  Posjeta je realizovana u sklopu projekta Erasmus+ te  pronalasku partnera za saradnju. Riječ je o saradnji Job Shadowing and Hospitation, te strucnoj  razmjeni između profesora (nastavnika).
                  </p>
<p className="mb-4 text-blueGray-500">
Tim u sastavu :
Grubisić Tonci - tjelesni i zdravstveni odgoj
Erhard Ruettgers - matematika, vjeronauka i biologija, 
Emma Kreus - Njemački jezik, 
Miriam Effertz-Koegel  Socijalna radnica, danas su imali priliku družiti se sa predstavnicima naše škole, pomenutih profesija te vidjeti kako i na koji način škola i stručno osoblje rade. Direktorica škole Amira Kadrispahić poželjela je dobrodošlicu gostima te istakla da se radujemo saradnji u budućnosti. </p>
<p className="mb-4 text-blueGray-500">
Direktorica ističe da smo jako zahvalni što je naša škola prepoznata i odabrana za ovakvu saradnju koja će zasigurno biti od jako velikog značaja za sve nas.</p>


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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">VELIKO ZVONO ZA GENERACIJU 2020/2024.




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={matu1} alt="" />
                    </div>
                    <div>
                        <img src={matu2} alt="" />
                    </div>
                    <div>
                        <img src={matu3} alt="" />
                    </div>
                    <div>
                        <img src={matu4} alt="" />
                    </div>
                    <div>
                        <img src={matu5} alt="" />
                    </div>
                    <div>
                        <img src={matu6} alt="" />
                    </div>
                    <div>
                        <img src={matu7} alt="" />
                    </div>
                    <div>
                        <img src={matu8} alt="" />
                    </div>
                    <div>
                        <img src={matu9} alt="" />
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
                  U srijedu, 08. 5. 2024. godine, u našoj školi oglasilo se veliko zvono, jedinstveno i neobično, ali glasno.</p>
<p className="mb-4 text-blueGray-500">
Dočekali smo da uz pjesmu, ples, šale i suze ispraćamo još jednu divnu generaciju naše škole. </p>
<p className="mb-4 text-blueGray-500">
Svaka generacija nosi nešto posebno, ova je dostojanstveno prebrodila razne izazove. Iza vas i nas su bili i izazov zvani korona i izazov zvani online nastava i izazov vraćanja u školske klupe, razna takmičenja, učenje, vannastavne aktivnosti, altruizam i humanizam...</p>
<p className="mb-4 text-blueGray-500">
Generacijo 2020/2024., ponosni smo na vas i želimo vam sve najljepše u životu.
Sretno!</p>


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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">NA DRUŽENJU SA FEĐOM ŠTUKANOM




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      

                  <div>
                        <img src={feda3} alt="" />
                    </div>    
                  <div>
                        <img src={feda1} alt="" />
                    </div>
                    <div>
                        <img src={feda2} alt="" />
                    </div>
                  
                    <div>
                        <img src={feda4} alt="" />
                    </div>
                    <div>
                        <img src={feda5} alt="" />
                    </div>
                    <div>
                        <img src={feda6} alt="" />
                    </div>
                    <div>
                        <img src={feda7} alt="" />
                    </div>
                    <div>
                        <img src={feda8} alt="" />
                    </div>
                    <div>
                        <img src={feda9} alt="" />
                    </div>
                    <div>
                        <img src={feda10} alt="" />
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
                  <b>Fondacija Akademija za žene</b>, u suradnji sa <b>JU Srednjom ekonomskom školom, Sarajevo</b>, u utorak, 7. maja, u 13 h organizirala je razgovor roditelja, učenika/ca i nastavnika/ca sa Feđom Štukanom, bosanskohercegovačkim glumcem i piscem. 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Štukan u svom autobiografskom romanu Blank potpuno otvoreno, iskreno, gotovo bez imalo zadrške, piše o svom životu i iskustvima. Blank je autentična i istinita životna priča autora, ogoljena do kraja, budi snažne  emocije, snažno  komunicira sa čitaocima. Potresna je priča o mladom čovjeku koji je prošao rat u Bosni i Hercegovini, našao se u vrtlogu droge, kriminala i iz svega se uspio izvući, priča je ovo o životu i smrti, politici i vjeri, mržnji i ljubavi. Roman je nastajao sedam godina, a počinje sa snovima jednog dječaka koji je želio da postane pilot. Feđa Štukan je u Blanku letio, padao, preživio najmanje deset krugova pakla prije katarze i novog početka.  Već u prvim poglavljima romana na svijet  gleda iz rova, kroz snajper i preko puške iz koje se puca, ali sve je to prožeto unutrašnjim kolebanjima, moralnim preispitivanjima, pogledom na samoga sebe očima onog s druge strane.U stranicama romana, piše o užasima proživljenog rata i teške ovisnosti o heroinu s kojom se borio godinama, pa sve do aktivizma, proslavljenih uloga u Hollywoodu i ispunjenja mladenačkog sna, letenja. Pisanje ovog romana je Feđa Štukan započeo na nagovor Angeline Jolie i Brada Pitta tokom snimanja filma U zemlji krvi i meda. Do sada je preveden na italijanski, francuski i engleski jezik, obavezno je štivo na mostarskom sveučilištu, ali i na prestižnom londonskom Goldsmith sveučilištu. 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Kako recezenti ističu: <i>Najpotresniji dijelovi knjige možda i nisu oni ispovjedni i intimni, gledani unutarnjim očima, nego oni kad se uslijed neprestanog batrganja kroz život protagonistove oči podignu i svjedoče društvenim apsurdima, neuralgijama,siromašenju i klasnom raslojavanju. Pratimo ga u vojnim jedinicama, psihijatrijskoj ustanovi, kako tone u ovisnosti i pokreće sitni narko-biznis, nekoliko se puta izvlači od predoziranja, gomila prijatelja mu je poumirala, postaje glumac, aktivist, skida se s droge, prebolijeva hepatitis C, vozi paraglajdere i u ovom trenu okreće novu, praznu stranicu za ispisivanje – zato se po svemu sudeći knjiga zove Blank i nakon čitanja ostavlja katarzičan učinak. Priča je uvjerljiva, pripovijedanje teče, lik je živ, može ga se čuti kako viče, namirisati gnojne rane od uboda iglom, osjetiti šamare koje sebi lupa pred ogledalom. Protagonistova priča počinje sjećanjem na dječačku žudnju da postane pilot – da leti – no jedini let koji u ratnim vremenima uspijeva ostvariti je metaforični let na heroinu.</i>
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Nakon ostvarenih uloga u filmovima poput <i>Nafake, U zemlji krvi i meda, Savršen dan (A Perfect Day), Kursk, Nečista krv…</i> koji su samo dio njegove karijere, u posljednjih par godina ovaj sarajevski glumac odradio je sjajne role u serijama <i>Kotlina i Klan</i>, te planetarno popularnoj seriji <i>Tom Clancy´s Jack Ryan</i> gdje se pojavio u nekoliko epizoda zajedno s još jednim našim poznatim glumcem Aleksandrom Seksanom.
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Štukan je i producent, borac za ljudska prava, rock muzičar i pilot. Autor je na sesiji govorio o svojoj prošlosti obilježenoj ratom u Sarajevu, suštini života, beznađu, smrti, glumi, pisanju i pronalaženju snage za mir, pravdu i toleranciju. 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  <b>Riječju i djelovanjem autor jasno poručuje šta su njegove vrijednosti i čega se treba kloniti! Snažna je  korisnost koju ovaj roman može imati na oblikovanje percepcije o životu i stvarnosti!</b> Koristan je jer iskreno progovara o iskustvu droge, lošeg društva, rata, mafije. Iza svega se kriju nečiji interesi, instance moći koje nam serviraju vlastitu sliku stvarnosti predstavljajući je jedinom pravom i prirodnom. 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  <b>Bitno je raditi ono što vas pokreće, što volite, to je najbitnija stvar u životu, adrenalin vam daje samopouzdanje</b>, poručuje Feđa.
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  <b>Problem je u odnosu čovjeka, osobito mladog čovjeka, prema toj mogućnosti – uzeti ili ne uzeti. Roditelji i škola najodgovorniji su u pripremi mladih da se odupru  tom izazovu!</b> Za drogu postoje kvalitetne alternative. <b>Borba je za zdrav i osmišljen život u kojem drogiranje neće biti potrebno</b>. 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Realno je od <b>škole</b> očekivati da svojom <b>dosljednošću i upornošću pomogne djeci da što bolje spoznaju istinu o svijetu u kojem žive i u kojem će morati naći svoje mjesto</b>. Da prilagodba realnosti ne bi rezultirala štetnim posljedicama, <b>osnažimo  njihove kapacitete, pomozimo im da se ne prevare ili da ih drugi ne prevare</b>!Budući da su djeca uglavnom apstinenti i uglavnom se ponašaju zdravije od odraslih, nikako im ne bi trebalo kao rješenje nuditi koncept tzv. umjerene potrošnje sredstava ovisnosti. Treba im <b>otvoreno reći da su posljedice upotrebe  tih sredstava to opasnije što se ranije dijete (mlada osoba) izloži njihovom djelovanju</b>. Odrasli im zabranjuju piti, pušiti i drogirati se, ali ne zato što su djeca, već zato što je to za njih veoma štetno. Treba ih odgojiti da oblikuju ispravnije stavove od onih u svijetu odraslih, te tako osposobljeni, donesu odluku da <b>drogama kažu ne i da budu mudri  da ne započinju</b>. Naime, put je u ovisnost svaki današnji ovisnik, a da to zapravo nije ni pretpostavljao, počeo onim prvim nespretnim korakom – prvim eksperimentom. 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Zdrava ljudska priroda mora nastojati ovladati sobom, mora učiniti napor da u tom stalnom izazovu izbora donese odluke koje će joj pomoći da trijezno i svjesno istražuje fenomen života, smrti i svijeta u kojemu se sve to događa da bi svojom kreativnom, pokretačkom energijom dao barem mali doprinos promjenama <b>što će njemu samom, ali i njegovim bližnjima osigurati dobro danas i još bolje sutra</b>. Najvažnije je pronaći prihvatljiv način uticaja na djecu u procesu odrastanja i izgradnje vlastitog sistema vrijednosti prema kojemu je <b>od svega u životu zdravlje ipak najvažnije</b>, te da čovjek sam, ako je svjestan i za to osposobljen, najviše može pridonijeti zdravom i dugom životu izbjegavajući štetna i rizična ponašanja. Imperativ je <b>afirmirati prednosti zdravog stila življenja i etički vrijednog načina ponašanja</b>. Zato programi osposobljavanja pojedinca za samozaštitu zdravlja u okviru školskog sistema predstavljaju temelj strategije zaštite zdravlja u društvu općenito. Djecu treba osposobiti za pružanje pomoći i zaštite onih koji su u našoj blizini (načelo uzajamne pomoći), jer ako u tome uspijemo, manji će biti rizik da pojedinac olako prihvatiti negativan utjecaj drugih u oblikovanju vlastitog ponašanja koje se tiče zdravlja. <b>Djeci valja pristupati s mnogo poštovanja, vještine i osjećaja</b>, uvažavajući njihove vrlo različite naravi i specifične potrebe. Samo takvim odnosom odrasli mogu zadobiti poštovanje mladih. Zna se da djeca odbijaju prihvatiti savjete i odgojne mjere onih koje ne poštuju ili onih koji ih ne poštuju. Preventivno djelovanje  podrazumijeva  <b>djeci pomoći u njegovanju samopoštovanja</b>, ako se zna kolika je spremnost adolescenata da olako popuštaju pritiscima vršnjaka, zbog straha od mogućega odbacivanja ili ismijavanja, i kako često zbog samopotvrđivanja pred njima pokazuju sklonost visokorizičnim ponašanjima.  Mlade treba učiti brojnim socijalnim vještinama da bi ih se osposobilo za odgovarajuće reagovanje u kritičnim situacijama i da bi bili u stanju samopotvrđivati svoje ja upravo odbijanjem npr. upotrebe cigarete, alkohola ili neke druge droge. Imperativ je djecu potaknuti na razmišljanje, zauzimanje stava i donošenje odluke o tome što učiniti, npr. u situaciji kad im znanac, brat ili prijatelj ponudi drogu. Naravno da program učenja socijalnih vještina treba uključiti mnogo toga: npr. vježbanje samokontrole, ustrajnosti, učenje načina pokazivanja osjećaja (drugom polu, u porodici), načina rješavanja problema, učiti ih kako razumjeti i izbjegavati nezrele mehanizme odbrane osobnosti, učiti ih vještini komunikacije i odupiranju pritisku vršnjaka, učiti ih kako se zdravo zabavljati, prihvatljivo se samopotvrđivati, stvarati i održavati zdrave međuljudske odnose i još mnogo toga. Drugim riječima, <b>treba ih učiti, podsticati i odgajati da se zdravo i normalno ponašaju</b>. Treba li nabrajati razloge protiv destruktivnih aktivnosti ili sve prednosti koje donosi zdrav, moralan, kvalitetan, smislen i život u realnom svijetu? 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  <b>Suština je u volji pojedinca, u odluci da se i ne počne sa uzimanjem droge! To svako može!</b>
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Droga je veliko zlo, ona svakog ovisnika ostavlja na kraju nesretnog i bolesnog! 
                  </p>
                  <p className="mb-4 text-blueGray-500">
                  Učinimo svi, relevantni društveni činioci, roditelji, škola, sve da naša djeca ne izaberu put droge. Završimo riječima koje je Štukan uputio svojoj kćerki, ali i svakom djetetu, u nadi da će se izboriti za svoj jedan život: <b>Živote moj, ne idi mojim putem</b>. 
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">HUB UNIVERSITY FAIR – HUB SAJAM UNIVERZITETA




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={hocu1} alt="" />
                    </div>
                    <div>
                        <img src={hocu2} alt="" />
                    </div>
                    <div>
                        <img src={hocu3} alt="" />
                    </div>
                    <div>
                        <img src={hocu4} alt="" />
                    </div>
                    <div>
                        <img src={hocu5} alt="" />
                    </div>
                    <div>
                        <img src={hocu6} alt="" />
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
                  U petak, 26. aprila maturanti/ce  IV3 razreda sa razrednicom Amrom Hodžić su posjetili/e HUB univerzitetski sajam koji se održava u Dječijoj kući na Grbavici. </p>
<p className="mb-4 text-blueGray-500">
Homework Hub i JU Međunarodni centar za djecu i omladinu Novo Sarajevo, danas su organizovali treći HUB University Fair. Sajmu su  prisustvovali/e predstavnici/e preko dvadeset fakulteta i univerziteta. Na izuzetno zanimljiv i kreativan način predstavili su svoje programe, te pokazali da su spremni da svoja iskustva prenesu mlađim generacijama.</p>
<p className="mb-4 text-blueGray-500">
Izuzetno je izazovan period koji slijedi za maturante i maturantice! </p>
<p className="mb-4 text-blueGray-500">
HUB UNIVERSITY FAIR je prilika da naši maturanti/ce dobiju informacije “iz prve ruke” i da usmjere svoju karijeru u željenom smjeru! Na Sajmu Univerziteta imali su priliku da se  upoznaju se sa fakultetima i univerzitetima Kantona Sarajevo.</p>
<p className="mb-4 text-blueGray-500">
Učenici/ce su obišli/e štandove raznih fakulteta i dobili potrebne informacije vezano za upis, </p>
<p className="mb-4 text-blueGray-500">
Na sajmu su se predstavili/e predstavnici/ce Stomatološkog fakulteta, Medicinskog fakulteta, Veterinarskog fakulteta, Prirodno-matematičkog fakulteta, odsjek za fiziku i odsjek za hemiju, Filozofskog fakulteta, odsjek za arapski jezik i književnost, odsjek za historiju i odsjek za psihologiju kao i klub “Ibn Sina”, Građevinskog fakulteta, Ekonomskog fakulteta, Farmaceutskog fakulteta, Fakulteta za sport i tjelesni odgoj, Šumarskog fakulteta, Fakulteta zdravstvenih studija, International University of Sarajevo, International Burch University, Pedagoškog fakulteta, Elektrotehničkog fakulteta, predstavnici studentskog udruženja “Steleks”, također pored predstavnika/ca fakulteta na sajmu su se predstavili i predstavnici organizacije Hoću.ba kao i predstavnici SOS Dječijeg sela BiH ispred Yeep projekta.</p>
<p className="mb-4 text-blueGray-500">
Sajam je prvenstveno bio namjenjen učenicima i učenicama srednjih škola Kantona Sarajevo, ali je privukao pažnju i studenata/studentica koji su se kroz prezentacije upoznali sa radom i aktivnostima na pomenutim fakultetima. </p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">DANI ODBOJKE U SPORTSKOJ DVORANI GORAN ČENGIĆ  




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  
                  <div>
                        <img src={goran1} alt="" />
                    </div>
                    <div>
                        <img src={goran2} alt="" />
                    </div>
                    <div>
                        <img src={goran3} alt="" />
                    </div>
                    <div>
                        <img src={goran4} alt="" />
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
                  Kantonalno takmičenje iz nastavnog predmeta Tjelesni i zdavstveni odgoj, disciplina odbojka, za osnovne i srednje škole za školsku 2023./2024. godinu održano je u Sportskoj dvorani Goran Čengić, Novo Sarajevo, od 15.  do 26. aprila. U takmičenju je učestvovala 51 ekipa srednjih škola i 24 ekipe osnovnih škola u obje konkurencije. Takmičenje je trajalo do 26. aprila i odigrano je 75 utakmica. Naše ekipe vodili su profesorica Ankica Zulčić i profesor Adnan Čolić. Dvorana je danima bila pravo navijačko grotlo, sve je prštalo od sportskog naboja, pozitivne atmosfere, snage i radosti mladosti! Najveći poklon organizatorima je dvorana puna vesele i radosne djece.</p>
                  <p className="mb-4 text-blueGray-500">
                  Naša mladost nam je priredila vrhunski sportski događaj! Odbojkaši/ce su ispoljili/e  mnogo hrabrosti, srčanosti i entuzijazma na takmičenju! Bila je ovo smotra druženja, sporta, igre, prijateljstva, radosti! Ponosni smo na naše odbojkaše i odbojkašice!</p>
<p className="mb-4 text-blueGray-500">
Naše odbojkašice su prvu pobjedu odnijele u pretkolu takmičenja protiv Srednje medicinske škole Jezero. U osmini finala takmičenja, utakmica sa Gimnazijom Obala, Sarajevo je takođe okončana pobjedom naših odbojkašica. Uslijedilo je čertvrtfinale takmičenja, pobjeda protiv ekipe Bošnjačke gimnazije, plasman u polufinale takmičenja i utakmica sa ekipom Pete gimnazije. Nakon odigrana tri seta, naše odbojkašice nisu uspjele proći u finale. Utakmica za treće mjesto odigrana  je sa ekipom SŠC Ilijaš i pobjeda naše ekipe donijela nam je treće mjesto, čime smo odbranili prošlogodišnji plasman. </p>
<p className="mb-4 text-blueGray-500">
Bio je ovo snažan  doprinos popularizaciji sporta među mladima. Sport je alternativa slobodnom vremenu i mlade usmjerava prema zdravim navikama i pozitivnim vrijednostima! Sport razvija samopouzdanje, disciplinu i poštovanje sebe i drugih, što su ključne karakteristike za uspjeh u svim aspektima života. Omogućavajući im pristup sportu, pridonosimo mentalnom i fizičkom zdravlju djeteta. Djeca kroz sport poboljšavaju svoje socijalne vještine, razvijaju se kao potpune osobe sa stavom i vlastitim mišljenjem, omogućava im se pristup različitim životnim iskustvima koje možda ne bi imali prilike iskusiti u nastavi i u porodičnom okruženju.</p>
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Predstava "Leptir" na daskama Narodnog pozorišta Sarajevo




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={lep1} alt="" />
                    </div>
                    <div>
                        <img src={lep2} alt="" />
                    </div>
                    <div>
                        <img src={lep3} alt="" />
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
                  Narodno pozorište Sarajevo i Općina Novo Sarajevo obezbijediti su ulaznice za dramsku predstavu "Leptir" za učenice i učenike naše škole. U ponedjeljak, 22. aprila 2024. godine maturanti i maturantice, sa svojom predmetnom profesoricom Dženanom Tanović-Hamzić i profesoricama Minjom Hozo i  Suadom Tadić, prisustvovali su izuzetnom dramskom događaju koji je izazvao posebne emocije i otvorio aktuelna pitanja današnjice. </p>
<p className="mb-4 text-blueGray-500">
Predstava donosi probleme otuđenosti u porodici i nedostatak komunikacije što dovodi do tragedije. Ovakve predstave danas su posebno edukativne i svakako ih treba pogledati. Cjelokupnom dojmu doprinosi izuzetna gluma Aleksandra Seksana, Ermina Sijamije i Sanele Pepeljak. Posebno zadovoljstvo predstavljaju izuzetno pozitivni komentari i utisci naših učenika i učenica.</p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Završena je 1. Tehnicijada




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={tehn1} alt="" />
                    </div>
                    <div>
                        <img src={tehn2} alt="" />
                    </div>
                    <div>
                        <img src={tehn3} alt="" />
                    </div>
                    <div>
                        <img src={tehn4} alt="" />
                    </div>
                    <div>
                        <img src={tehn5} alt="" />
                    </div>
                    <div>
                        <img src={tehn6} alt="" />
                    </div>
                    <div>
                        <img src={tehn7} alt="" />
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
                  U Sportskoj dvorani “Amel Bećković” u Vogošći, danas (24.04.2024.godine) svečano je zatvorena Tehnicijada.</p>
<p className="mb-4 text-blueGray-500">
Tokom proteklih nekoliko dana, učenice i učenici sarajevskih srednjih stručnih i tehničkih škola nadmetali su se u brojnim sportskim disciplinama, a danas su onim najuspješnijima dodijeljena zaslužena priznajnja.
Ukupni rezultati su sljedeći:
</p>
<p className="mb-4 text-blueGray-500">
<b>Ekipni plasman:</b></p>
<p className="mb-4 text-blueGray-500">
1. Srednja ekonomska škola</p>
<p className="mb-4 text-blueGray-500">
2. Medicinska škola Bjelave</p>
<p className="mb-4 text-blueGray-500">
3. Srednjoškolski centar Vogošća</p>

<p className="mb-4 text-blueGray-500">
<b>Nogomet (učenice)</b></p>
<p className="mb-4 text-blueGray-500">
1. Srednja ugostiteljsko-turistička škola</p>
<p className="mb-4 text-blueGray-500">
2. Medicinska škola Sarajevo</p>
<p className="mb-4 text-blueGray-500">
3. Srednja ekonomska škola</p>

<p className="mb-4 text-blueGray-500">
<b>Odbojka (učenici)</b></p>
<p className="mb-4 text-blueGray-500">
1. Srednja medicinska Jezero</p>
<p className="mb-4 text-blueGray-500">
2. Elektrotehnička škola za energetiku</p>
<p className="mb-4 text-blueGray-500">
3. Ekonomska škola
</p>

<p className="mb-4 text-blueGray-500">
<b>Košarka (učenice)</b></p>
<p className="mb-4 text-blueGray-500">
1. Srednja ekonomska škola</p>
<p className="mb-4 text-blueGray-500">
2. Srednjoškolski centar Hadžići</p>
<p className="mb-4 text-blueGray-500">
3. Srednja ugostiteljsko – turistička škola
</p>

<p className="mb-4 text-blueGray-500">
<b>Stoni tenis (učenice)</b></p>
<p className="mb-4 text-blueGray-500">
1. Enra Subašić (Grafička škola)</p>
<p className="mb-4 text-blueGray-500">
2. Iman Suljić (Elektrotehnička škola)</p>
<p className="mb-4 text-blueGray-500">
3. Lejla Ljutika (Ekonomska škola)
</p>

<p className="mb-4 text-blueGray-500">
<b>Šah (učenice)</b></p>
<p className="mb-4 text-blueGray-500">
1. Lana Lucević (Medicinska škola)</p>
<p className="mb-4 text-blueGray-500">
2. Ema Efendić (Ekonomska škola)</p>
<p className="mb-4 text-blueGray-500">
3. Lamija Kurgaš (srednjoškolski centar Hadžići)
</p>

<p className="mb-4 text-blueGray-500">
Zahvaljujemo učesnicima i čestitamo osvajačima medalja.
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">SUSRETI GENERACIJA U GERONTOLOŠKOM CENTRU  NEDŽARIĆI 




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={geoc1} alt="" />
                    </div>
                    <div>
                        <img src={geoc2} alt="" />
                    </div>
                    <div>
                        <img src={geoc3} alt="" />
                    </div>
                    <div>
                        <img src={geoc4} alt="" />
                    </div>
                    <div>
                        <img src={geoc5} alt="" />
                    </div>
                    <div>
                        <img src={geoc6} alt="" />
                    </div>
                    <div>
                        <img src={geoc7} alt="" />
                    </div>
                    <div>
                        <img src={geoc8} alt="" />
                    </div>
                    <div>
                        <img src={geoc9} alt="" />
                    </div>
                    <div>
                        <img src={geoc10} alt="" />
                    </div>
                    <div>
                        <img src={geoc11} alt="" />
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
                  Učenici/ce  trećih razreda i profesorice Senida Čeljo i Amra Lagumdžija, posjetili/e su Gerontološki centar Nedžarići, u petak, 26. aprila.  Korisnicima Centra uručili smo  prigodne poklone. Susret s korisnicima Centra donio je svima radost i osjećaj ispunjenosti. Spoj mladosti i iskustva stvorio je izvanrednu atmosferu, a sjećanja će ostati nezaboravna. Uz tombolu koja je bila centralni događaj, učenici su se brinuli da svaki trenutak bude ispunjen veseljem i radošću. Nastupi talentovanih učenika, muzika i ples ispunili su srca svih prisutnih. </p>
<p className="mb-4 text-blueGray-500">
Raste  udio starijh osoba u ukupnoj populaciji i potrebno je voditi računa o kreiranju novih modaliteta pružanja podrške. Za sve članove društva, i mlade i stare, socijalna podrška je značajna. Nađimo slobodnog vremena koje bi posvetili starijim osobama! Uključivanjem osoba treće životne dobi u život zajednice poboljšavamo njihov kvalitet života i zadovoljstvo životom, ali i kvalitet našeg života i naše zadovoljstvo životom. Aktivnim sudjelovanjem u životu i aktivnostima zajednice, osobe treće životne dobi imaju priliku povećati broj svojih socijalnih interakcija i razviti pripadnost zajednici. Stariji su integralni dio zajednice u kojoj aktivnim uključivanjem žive, rade i stvaraju. Kvalitetnijim kontaktima sa svojom socijalnom mrežom (djeca, unuci, srodnici, prijatelji) postaju aktivniji  i zadovoljniji tim odnosima, više su uključeni u život zajednice. Ovakvi susreti podstiču stvaranje novih socijalnih veza između mlađih generacija i osoba treće životne dobi, te međugeneracijsku solidarnost. Projekti u kojima sudjeluju mlađe i starije osobe pokazali su da zajednički rad i dijeljenje iskustava svakako pridonose boljoj inkluziji starijih osoba u društvo,  povećavaju osjećaj vrijednosti i uključenosti. Imperativ je da djecu podstaknemo na  pozitivnije ponašanje prema starijim, odnosno ponašanje koje je zaštitničko. Ovakvi susreti su naš doprinos međugeneracijskoj integraciji.  Pružili smo  priliku našim učenicima da razviju nova prijateljstva i da aktivno sudjeluju u događanjima u zajednici. Bili su ovo susreti generacija na način da  starije osobe prenose svoja znanja i iskustva na mlađe generacije i obrnuto. Bilo je riječi i o korištenju tehnologija, a tu su mladi na svom terenu, putem kojih starije osobe mogu doći do brojnih informacija o zdravlju, uspostaviti kontakte sa prijateljima, dijeliti omiljene šale i slike, imati emocionalne dobrobiti i mogu komunicirati s porodicom i prijateljima.</p>
<p className="mb-4 text-blueGray-500">
Osobe treće životne dobi sastavni su dio našeg društva, imaju jednaka prava u njemu, te zaslužuju jednake prilike i naše ruke podrške! Ovaj susret je bio naš doprinos  podizanju svijesti o problemima s kojima se susreću osobe treće životne dobi, prilika za aktivno sudjelovanje u životu zajednice i kvalitetniji život zajednice, naš doprinos rješenjima integracije mladih i starih u zajednicu, te prilika kako bi svi prepoznali pozitivne efekte sudjelovanja  mladih i starih u zajednici.</p>
<p className="mb-4 text-blueGray-500">
Puno srdačnih pozdrava za naše prijatelje iz Gerontološkog centra Nedžarići.</p>
<p className="mb-4 text-blueGray-500">
Radujemo se narednom susretu!</p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">TOMISLAV CVITANUŠIĆ, OSVAJAČ KROVA SVIJETA, U NAŠOJ ŠKOLI




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={tomislav} alt="" />
                    </div>
                    <div>
                        <img src={tomislav1} alt="" />
                    </div>
                    <div>
                        <img src={tomislav2} alt="" />
                    </div>
                    <div>
                        <img src={tomislav3} alt="" />
                    </div>
                    <div>
                        <img src={tomislav4} alt="" />
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
                  U ponedjeljak, 29. aprila, Tomislav Cvitanušić je bio naš gost. Održao je motivacioni govor za naše učenike/ce. Govoreći o svojim životnim iskustvima, svjedočio je snagu motivacije i upornosti. </p>
<p className="mb-4 text-blueGray-500">
Tomislav Cvitanušić poznati je maratonac, triatlonac i alpinista iz Bosne i Hercegovine, koji vodi u nezaboravna putovanja, izuzetne sportske podvige. Tomislav nije samo uspješan sportaš već i dobitnik brojnih priznanja, uključujući i Specijalnu nagradu Olimpijskog komiteta BiH za promociju našeg sporta.</p>
<p className="mb-4 text-blueGray-500">
Prisutni su imali priliku upoznati se i s njegovim posljednjim postignućem, usponom na najviši vrh svijeta, Mount Everest. Everest je bio njegov dječački san. Krenuo je od Trebevića, uslijedio je Triglav, zatim planine u Evropi, svjetska velika gorja, i onda Everest, kao kruna karijere. On ne znači kraj karijere, već vam otvori potpuno novu perspektivu, postanete toliko svjesni svoje prolaznosti, poručio je Tomislav. Za uspone na vrhove poput Everesta, važni su i harmonija i međuljudski odnosi, ogromna količina ljudskosti i međusobnog poštovanja. Prva je osoba u BiH koja je završila šest najvećih svjetskih maratona. Nekoliko puta je uspješno završio najzahtjevniju, svjetsku triatlonsku utrku Ironman.</p>
<p className="mb-4 text-blueGray-500">
Predavanje i druženje sa Tomislavom Cvitanušićem, bila je prilika da učesnici saznaju više o njegovim iskustvima i izazovima koje je savladao. Bila nam je čast i zadovoljstvo ugostiti Tomislava čija životna priča može biti inspiracija i podstrek našim učenicima/ama za vlastita postignuća i napredak. </p>
<p className="mb-4 text-blueGray-500">
Neka nas Tomislavova životna priča motivira da istražujemo svoje granice i ostvarujemo sjajne lične podvige! Uvijek možemo biti bolji, napredovati, raditi na sebi , naučiti nešto novo!</p>


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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Prevencija HPV virusa 




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={hiv} alt="" />
                    </div>
                    <div>
                        <img src={hiv1} alt="" />
                    </div>
                    <div>
                        <img src={hiv2} alt="" />
                    </div>
                    <div>
                        <img src={hiv3} alt="" />
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
                  U ponedjeljak, 29. aprila, Zavod za javno zdravstvo Kantona Sarajevo (ZJZKS)  organizirao je edukativno predavanje o humanom papiloma virusu (HPV) i prevenciji, za učenike/ce četvrtih razreda naše škole.</p>
<p className="mb-4 text-blueGray-500">
Na predavanju su  prezentirane  osnovne informacije o infekciji HPV-om, posljedicama po zdravlje, te načinima prevencije i kontrole s fokusom na značaj imunizacije protiv HPV-a kao primarne prevencije u populaciji djevojčica i dječaka. Naglašeno je da iskustva zemalja koje su uvele imunizaciju protiv humanog papiloma virusa (HPV) pokazuju da se vakcinisanjem djevojčica i dječaka protiv HPV-a može spriječiti infekcija HPV-om i bolesti koje uzrokuje HPV, a to su u prvom redu karcinom cerviksa (vrata maternice), karcinomi u području usta, ali i drugi karcinomi te genitalne i negenitalne bradavice koje se javljaju kod velikog broja stanovnika. Istaknuta je važnost kontinuirane edukacije mladih utemeljene na pouzdanim naučnim informacijama, te važnost veće informisanosti i aktivnog učešća mladih u zaštiti vlastitog zdravlja. Savjetovano je  da se odazovu na pozive zdravstvenih ustanova na besplatnu imunizaciju protiv HPV-a i tako učinkovito zaštite od bolesti koje uzrokuje ovaj virus.</p>

<p className="mb-4 text-blueGray-500">
Za prevenciju je važna edukacija.Edukacija adolescenata o odgovornom spolnom ponašanju i poznavanje posljedica infekcije, predstavljaju kamen temeljac prevencije svih spolno prenosivih bolesti.
Poboljšanje prehrambenih navika, izbjegavanje pušenja i odgovorno spolno ponašanje pomoći će u smanjenju mogućnosti infekcije HPV-om. Primarna prevencija, edukacija i primjena vakcine, uz nastavak sekundarne prevencije putem skrininga, te odgovorno spolno ponašanje, najbolji su put sprječavanja zaraze HPV-om, a samim time i smanjenje stope incidence i smrtnosti od karcinoma grlića maternice.
</p>
 <p className="mb-4 text-blueGray-500">
 Zahvaljujemo se Zavodu za javno zdravlje   na ekspertskom predavanju koje je od iznimne važnosti za naše učenike/ce.</p>
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">EDUKATIVNA RADIONICA ŠKOLA RODITELJSTVA




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={roditelji3} alt="" />
                    </div>
                    <div>
                        <img src={roditelji4} alt="" />
                    </div>
                    <div>
                        <img src={roditelji1} alt="" />
                    </div>
                    <div>
                        <img src={roditelji2} alt="" />
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
                  U utorak, 16. aprila, pedagoginja Amila Kurtalić i psihologinja Marina Rubić. realizirale su radionicu Škola roditeljstva.</p>

<p className="mb-4 text-blueGray-500">
Ministarstvo obrazovanja Kantona Sarajevo u saradnji sa Institutom za preduniverzitetsko obrazovanje pokrenulo je program Škola roditeljstva. Program je namijenjen roditeljima, s ciljem razvijanja i unapređenja zdravstveno-psihološko-pedagoških kompetencija roditelja, da svako dijete odraste sretno i ostvari svoj kreativni potencijal.</p>


<p className="mb-4 text-blueGray-500">
Edukativni materijal Škole roditeljstva obuhvatio je sljedeće aktivnosti: kratki savjeti za roditelje, prijedlozi zajedničkih aktivnosti roditelja i djece, prijedlozi tema o kojima razgovaraju roditelji i djeca, snage šire porodične zajednice, kada i kako potražiti pomoć porodice i stručnjaka, kultura komunikacije i kako je mijenjamo, korak po korak, šta ne treba reći djetetu, najčešće roditeljske greške. </p>
<p className="mb-4 text-blueGray-500">
Program Škola roditeljstva uključuje pet ključnih tema, koje su prožete kroz sektor obrazovanja, zdravstva i socijalne zaštite: empatija, socijalne vještine (komunikacijske vještine, asertivno ponašanje), nenasilno rješavanje konflikata, samopoštovanje, samopouzdanje, samoefikasnost i samokontrola, odgojne metode. Kroz program pet radionica, roditeljima je pružena prilika da raspravljaju o brigama, strahovima, da razmijene iskustva sa drugim roditeljima, steknu potrebna znanja i samopouzdanje kako bi uspješno odgovorili na izazove roditeljstva. </p>
<p className="mb-4 text-blueGray-500">
Djeca i mladi tokom odrastanja prolaze kroz razvojne faze koje same po sebi mogu biti teške i za djecu i za roditelje. Nepravovremeno prepoznavanje problema i neadekvatan odgovor na problem, mogu značajno odrediti budućnost mlade osobe, što se nažalost ponekad završi oblicima ekstremnih i radikalnih ponašanja koji ugrožavaju život mlade osobe i porodice. Psihološki problemi roditelja i njihove djece su vrlo povezani Zato, ako ste prepoznali probleme kod svoje djece, ako želite s nekim razgovarati o problemu koji vas muči, dođite i razgovarajte s našim nastavnim, pedagoškim i psihološkim osobljem.</p>
<p className="mb-4 text-blueGray-500">
Odnos i saradnja između roditelja, kao prvih i najvažnijih odgajatelja djece i Škole, jedna je od ključnih stavki u odgojno-obrazovnom procesu razvoja djeteta. Roditelji su zajedno s učenicima i nastavnicima, jedan od bitnih faktora odgojno-obrazovnog rada u cjelini, a njihova komunikacija sa školom omogućava bolju saradnju i napredak za dobrobit djece i odgojno-obrazovnog sistema u cjelini. Školski savjetodavni rad podrazumijeva kontinuiranu aktivnost na tri razine odgojno-obrazovnog djelovanja, odnosno prema učenicima, nastavnicima, te roditeljima kako bi polučio pozitivan ishod. Način rada sa svakim od navedenih subjekata je poseban, a jedna od zajedničkih karakteristika je timski rad, te njihova međusobna aktivna saradnja. </p>
<p className="mb-4 text-blueGray-500">
Saradnja škole i porodice postaje imperativ. Tek prisna, sadržajno bogata i planski usmjerena saradnja porodice i škole je put ka punom uspjehu u odgoju mladih, svestrano obrazovanih, stvaralačkih i slobodnih ličnosti koji će graditi svijet u kojem ćemo mi, roditelji i nastavnici, jednog dana zavisiti od znanja, talenta, dobrote i empatije naše djece i učenika! </p>
<p className="mb-4 text-blueGray-500">
Roditelji, nastavnici i učenici rade na istom projektu, a to je odgoj, obrazovanje, usavršavanje, što je zapravo ulaganje u budućnost. Dakle, roditelji, nastavnici, djeca i škola su u istom timu.</p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo roditeljima za učešće u Školi roditeljstva!</p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">EDUKATIVNA RADIONICA AGENCIJE ZA OSIGURANJE DEPOZITA BIH (AODBIH) 




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={aod1} alt="" />
                    </div>
                    <div>
                        <img src={aod2} alt="" />
                    </div>
                    <div>
                        <img src={aod3} alt="" />
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
                  U četvrtak, 25.aprila,  Alma Aljović i Jasmina Hadžić  iz Agencije za osiguranje depozita Bosne i Hercegovine su održale  edukativnu radionicu na <i><b>temu Osiguranje depozita kao dio mreže finansijske sigurnosti</b></i> u multimedijalnoj sali naše škole za učenike/ce II5, IV4 i III1 razreda.
</p>

<p className="mb-4 text-blueGray-500">
Nakon posjeta Centralnoj banci i Agenciji za bankarstvo,  logičan slijed finansijske edukacije je Agencija za osiguranje depozita. Finansijska edukacija i jačanje finansijske inkluzije i stabilnosti svakog pojedinca i zajednice je važan segment opšteg obrazovanja,  jer samo finansijski educirana osoba može donositi ispravne finansijske odluke i  tako doprinositi finansijskoj stabilnosti zajednice. 
</p>


<p className="mb-4 text-blueGray-500">
AOD je samostalna, neprofitna, pravna osoba sa ovlašćenjima u skladu sa Zakonom. Agencija ima sjedište u Banjaluci i filijale u Sarajevu i Banjaluci. Fokus današnje edukacije su bili zadaci Agencije: 
</p>

<p className="mb-4 text-blueGray-500">
1. Osiguranje depozita fizičkih i pravnih osoba u bankama;</p>
<p className="mb-4 text-blueGray-500">
2. Izdavanje i oduzimanje certifikata o članstvu bankama;</p>
<p className="mb-4 text-blueGray-500">
3. Investiranje sredstava koja čine Fond za osiguranje depozita;</p>
<p className="mb-4 text-blueGray-500">
4. Isplata osiguranja depozita u slučaju prestanka rada banke;</p>
<p className="mb-4 text-blueGray-500">
5. Donošenje podzakonskih akata kojima se regulira osiguranje depozita i poslovanje Agencije;</p>
<p className="mb-4 text-blueGray-500">
6. Učešće u procesu restrukturiranja banaka.</p>

<p className="mb-4 text-blueGray-500">
<i><b>Cilj osiguranja depozita</b></i> je da osigura zaštitu i sigurnost depozita fizičkih i pravnih osoba i time doprinese očuvanju sveukupne financijske stabilnosti. Osiguranje depozita je dio mreže finansijske sigurnosti koje se uspostavlja sa ciljem zaštite deponenata.  Sistemom osiguranja depozita u Bosni i Hercegovini osiguravaju se depoziti u bankama, a  maksimalan iznos osiguranog depozita po deponentu i po banci je 70.000 konvertibilnih maraka. Sve banke sa dozvolom za rad u Bosni i Hercegovini su obuhvaćene sistemom za osiguranje depozita. Osiguranje depozita je besplatno za sve deponente. Premiju osiguranja plaćaju banke. <i><b>Glavni izvor finansiranja Fonda za osiguranje depozita (FOD)</b></i> je redovna premija osiguranja depozita koju plaćaju banke po tzv. sistemu ex-ante finansiranja. Pored redovne premije, finansiranje FOD se osigurava i kroz ostvareni višak prihoda  nad rashodima Agencije za osiguranje depozita Bosne i Hercegovine, kroz proces naplate na temelju subrogacije iz likvidacione ili stečajne mase, a moguće je i putem donacija.  Agencija ima mogućnost uvođenja vanredne premije, kao i mogućnost zaduživanja.</p>
<p className="mb-4 text-blueGray-500">
Učenici/ce su iskazali/e stanovit interes za tematiku osiguranja depozita  i na njihova brojna pitanja, Jasmina Hadžić je odgovorila sa puno entuzijazma i vrhunski profesionalno.Naravno, bilo je riječi i o konkretnim izazovima u pogledu očuvanja finansijske stabilnosti, a na koje je Agencija, zajedno sa CB BiH i Agencijom za bankarstvo BiH imala učinkovite odgovore.</p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo predavačima iz AOD-a za  izuzetan doprinos finansijskoj edukaciji naših učenika/ca.</p>
<p className="mb-4 text-blueGray-500">
Projekat Upoznaj privredu Kantona Sarajevo, Indira Zeković, prof.</p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">POSJETE ARHITEKTONSKOM I MAŠINSKOM FAKULTETU U OKVIRU IZBORNE NASTAVE IZ MATEMATIKE 




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={izborna1} alt="" />
                    </div>
                    <div>
                        <img src={izborna2} alt="" />
                    </div>
                    <div>
                        <img src={izborna3} alt="" />
                    </div>
                    <div>
                        <img src={izborna4} alt="" />
                    </div>
                    <div>
                        <img src={izborna9} alt="" />
                    </div>
                    <div>
                        <img src={izborna5} alt="" />
                    </div>
                    <div>
                        <img src={izborna6} alt="" />
                    </div>
                    <div>
                        <img src={izborna7} alt="" />
                    </div>
                    <div>
                        <img src={izborna8} alt="" />
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
                  Učenici/ce četvrtih razreda i profesori izborne nastave iz matematike Lejla Hujdur i Nihad Mehmedović su   posjetili Arhitektonski fakultet Univerziteta u Sarajevu, u petak, 19. aprila. Prezentirani su nam sadržaji petogodišnjeg studija arhitekture, najbolji studentski radovi u raznim tehnikama crtanja. Uslijedila su objašnjenja ko su arhitekte, šta je sve potrebno da znaju i koliko je njihov posao bitan u građevinskom procesu. Arhitektura je posebno zanimanje, iz kojeg izlazi sve ono što nas danas okružuje. Neboderi, željezničke stanice, mostovi, bazeni…Sve je to izašlo iz uma i mašte nekog arhitekte/ice, koji su svoje ideje i kreativnost uspjeli toliko detaljno prenijeti na papir, s kojeg su ideje oživjele i postale stvarnost. Proveli su nas kroz vrhunsku, tek renoviranu biblioteku,  te studentsku službu koja obavlja procedure upisa.



</p>

<p className="mb-4 text-blueGray-500">
U utorak, 23. aprila, posjetili smo Mašinski fakultet Univerziteta u Sarajevu. Posjeta je upriličena na Dan otvorenih vrata Mašinskog fakulteta. Učenici/ ce su imali/e priliku da se bliže upoznaju sa nastavnim i istraživačkim procesima na fakultetu kroz prezentaciju laboratorija , učionica, amfiteatara, biblioteke koja koristi vlastiti informacioni sistem putem kojeg se mogu pregledati sve publikacije i po potrebi izvršiti njihova rezervacija.Dalje, učenici su imali priliku da razgovaraju sa studentima iz studentskog udruženja  Mašinac,  koji su uzeli aktivno učešće u danu otvorenih vrata.

</p>


<p className="mb-4 text-blueGray-500">
Učenici/ce su probali/e virtual reality preko kojeg se rasklapa motor mašine, laboratorije sa 3D printerima, obradu drveta laserom. Lasersko rezanje može se upotrebljavati ne samo za rezanje metala već i rezanje plastike, keramike, drveta i stakla. Mašinski inženjeri projektuju mašine i alate, organizuju njihovu proizvodnju i bave se njihovim iskorišćavanjem. Stučnjaci su za pogonske motore, vozila i plovila, procesna i energetska postrojenja, nosive konstrukcije, vojnu tehniku. U radu primenjuju teorijska znanja iz prirodnih i tehničkih nauka, a služe se nacrtnim i matematičkim metodama, uz upotrebu pribora za crtanje i savremenih računara. Kroz  bogate akademske i praktične programe, Mašinski fakultet priprema svoje studente da postanu lideri u inovaciji, tehnološkom razvoju i rešavanju ključnih problema u industriji.





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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Evropska unija osigurala 1.000 računara za 15 srednjih stručnih škola u Bosni i Hercegovini




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={satler1} alt="" />
                    </div>
                    <div>
                        <img src={satler2} alt="" />
                    </div>
                    <div>
                        <img src={satler3} alt="" />
                    </div>
                    <div>
                        <img src={satler4} alt="" />
                    </div>
                    <div>
                        <img src={satler5} alt="" />
                    </div>
                    <div>
                        <img src={satler6} alt="" />
                    </div>
                    <div>
                        <img src={satler7} alt="" />
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
                  Šef Delegacije Evropske unije i specijalni predstavnik EU u BiH ambasador Johann Sattler posjetio je Srednju ekonomsku školu u Sarajevu 19. aprila kako bi prisustvovao isporuci 80 novih računara za opremanje informatičkih kabineta u ovoj školi.




</p>

<p className="mb-4 text-blueGray-500">
Isporučena informatička oprema je dio šire inicijative usmjerene na unapređenje digitalne pismenosti i kvaliteta obrazovanja u Bosni i Hercegovini. Srednja ekonomska škola jedna je od 15 srednjih stručnih škola širom zemlje koje su dobile nove računare.


</p>
<p className="mb-4 text-blueGray-500">
"Uvijek sam vjerovao da u školi ne učimo samo za ocjene ili ispite, već za život. Obrazovanje priprema mlade ljude za izazove s kojima će se susresti u životu. U 21. stoljeću, digitalne vještine su od suštinskog značaja, uključujući informacije o tome kako ostati siguran na internetu i kritički procijeniti izvore. Jako mi je drago što podržavamo buduću generaciju građana BiH da unaprijede svoje digitalne vještine isporukom 1.000 računara u 15 škola u BiH", rekao je ambasador Sattler.




</p>

<p className="mb-4 text-blueGray-500">
Vrijednost 1.000 računara koji su isporučeni srednjim stručnim školama u Bosni i Hercegovini iznosi 432.000 eura. Pored Srednje ekonomske škole u Sarajevu, računari su isporučeni srednjim školama u Odžaku, Tuzli, Srebreniku, Kalesiji, Kladnju, Zenici, Goraždu, Kiseljaku, Širokom Brijegu, Gacku, Trebinju, Prnjavoru i Sarajevu.






</p>
<p className="mb-4 text-blueGray-500">
“Ovo je doista nezaboravan trenutak za mene i za našu školu, te želim zahvaliti EU što je odabrala našu školu za posjetu. Mi smo škola koja je prepoznata u BiH, ali i u Evropi implementirajući razne EU projekte, uključujući i Erasmus+. Naša škola prati savremene obrazovne trendove, ali te trendove je nemoguće pratiti bez dobre informatičke i tehničke spreme. Mi ne bismo bili tu gdje jesmo da nemamo podršku prijatelja. Hvala što ste prepoznali naš rad i omogućili da nastavimo da širimo ideje dobra, da obrazujemo i pripremamo djecu za budućnost i tržiste rada", izjavila je Amira Kadrispahić direktorica Srednje ekonomske škole u Sarajevu.

</p>
<p className="mb-4 text-blueGray-500">
Podrška EU unapređenju obrazovnog sistema u Bosni i Hercegovini je višestruka. Samo u posljednje dvije godine, Evropska unija je izdvojila 16 miliona eura bespovratnih sredstava za podršku predškolskom, stručnom i visokoškolskom obrazovnom sektoru u Bosni i Hercegovini.

</p>
<p className="mb-4 text-blueGray-500">
Evropska unija trenutno izdvaja značajna sredstva i za unapređenje stručnog obrazovanja u srednjim školama u zemlji. Jedan od ključnih projekata vrijedan više od 3 miliona eura ima za cilj unapređenje kvaliteta i relevantnosti stručnog obrazovanja, prepoznavanje neformalnog učenja i unapređenje digitalnih i preduzetničkih kompetencija.

</p>
<p className="mb-4 text-blueGray-500">
Pored nabavke najsavremenije opreme i pružanja expertize za podršku obrazovnim reformama u zemlji, EU finansira i renoviranje obrazovnih institucija u cilju poboljšanja uslova rada za nastavno osoblje i učenike širom zemlje. EU trenutno finansira obnovu 20 srednjih stručnih škola, 20 predškolskih ustanova i 18 sportskih sala u osnovnim školama u BiH.

</p>
<p className="mb-4 text-blueGray-500">
Također, EU pruža značajnu podršku i kroz svoj Erasmus+ program koji podržava obrazovanje, obuku, mlade i sport u Evropi. Ovaj program pruža mogućnosti studentima, nastavnicima i stručnjacima da studiraju, obučavaju se i steknu iskustvo u inostranstvu. Srednja ekonomska škola u Sarajevu uspješno učestvuje u nekoliko EU programa uključujući ERASMUS+.

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Naši učenici na 35. Internacionalnom sajmu knjiga u Skenderiji




</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={knjiges1} alt="" />
                    </div>
                    <div>
                        <img src={knjiges2} alt="" />
                    </div>
                    <div>
                        <img src={knjiges3} alt="" />
                    </div>
                    <div>
                        <img src={knjiges4} alt="" />
                    </div>
                    <div>
                        <img src={knjiges5} alt="" />
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
                  Sajam knjiga je mjesto na kome se susreću ljudi i knjige! Knjiga povezuje i zbližava ljude, otvara svjetove, nudi prijateljstvo koje se nikad ne dovodi u pitanje, vezu u kojoj rastemo, prevazilazimo granice, liječimo vlastitu bit i povezujemo se sa sličnima!  


</p>

<p className="mb-4 text-blueGray-500">
Na Sajmu učestvuje, u svim dvoranama Skenderije na površini od 10.000 kvadratnih metara, 150 izdavačkih kuća koje su predstavile 130 novih knjiga i 175 autora i promotora na 86 promocija u Bosanskoj kući u dvorani Mirza Delibašić.




</p>
<p className="mb-4 text-blueGray-500">
Učenici/ce naše škole i profesorice Likić Merima, Alma Živojević i Lejla Avdagić posjetili su u petak, 19. aprila, 35. Internacionalni sarajevski sajam knjiga 2024.




</p>
<p className="mb-4 text-blueGray-500">
Međunarodni Sajam knjige u Skenderiji, već dugi niz godina, jedna je od najvećih i najposjećenijih manifestacija posvećenih pisanoj riječi u Bosni i Hercegovini i ujedno raskošna prezentacija naše recentne književne i kulturne produkcije, uključujući tu i djela iz svih naučnih oblasti, te publikacije namijenjene obrazovanju djece, učenika i studenata. 




</p>
<p className="mb-4 text-blueGray-500">
Organizatori su uspjeli privući brojne i ugledne izdavače iz regiona koji učestvuju na ovogodišnjem Sajmu.  Raznovrsni propratni programi, od promocija knjiga, susreta sa autorima, okruglih stolova i javnih debata do izložbi i kreativnih radionica za djecu i učenike osnovnih škola su dio ovogodišnjeg Sajma knjiga.





</p>
<p className="mb-4 text-blueGray-500">
Naši učenici su sa oduševljenjem i velikim zanimanjem propratili sadržaje ovogodišnjeg praznika knjige u Skenderiji. Posebno je bio zanimljiv Dječji paviljon u Domu mladih, Amfiteatru i Dancing dvorani, gdje se priređuju prezentacije i promocije knjiga za djecu i omladinu, radionice i igraonice posvećene stvaralaštvu najmlađih uključujući i pozorišna, muzička i filmska ostvarenja i nove IT tehnologije. 






</p>
<p className="mb-4 text-blueGray-500">
Sastavni dio sajamske ponude su i štandovi  udruženja, kulturnih i naučnih institucija BiH, Nacionalne univerzitetske biblioteke NUB BiH, Zemaljskog muzeja BiH, Historijskog muzeja BiH, Muzeja književnosti i pozorišne umjetnosti BiH, Društva pisaca BiH, Pen centra, IPC-a i drugih. I ove godine, to je već tradicija Sajma,  obilježen je Svjetski dan umjetnosti, Svjetski dan knjige i autorskih prava, te 70 godina evropske konvencije o kulturi.






</p>
<p className="mb-4 text-blueGray-500">
Na platou Skenderije posjetitelji mogu vidjeti Instalaciju - Obelisk  Memoria Bosnae autora Plasto Samira i Ulični performans i slikarsku radionicu Leonardo za sve generacije.






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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">13. OTVORENI DANI HEMIJE



</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                  <div>
                        <img src={hemija1} alt="" />
                    </div>
                    <div>
                        <img src={hemija2} alt="" />
                    </div>
                    <div>
                        <img src={hemija3} alt="" />
                    </div>
                    <div>
                        <img src={hemija4} alt="" />
                    </div>
                    <div>
                        <img src={hemija5} alt="" />
                    </div>
                    <div>
                        <img src={hemija6} alt="" />
                    </div>
                    <div>
                        <img src={hemija7} alt="" />
                    </div>
                    <div>
                        <img src={hemija8} alt="" />
                    </div>
                    <div>
                        <img src={hemija9} alt="" />
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
                  „Hemija je ljubav, a i ljubav je hemija.“




</p>

<p className="mb-4 text-blueGray-500">
Učenice i učenici prvog razreda su 17. aprila 2024. godine, u pratnji profesorice Edine Kopić,  prisustvovale/i manifestaciji 13. Otvoreni dani hemije. Manifestacija je održana u organizaciji Odsjeka za hemiju na Prirodno-matematičkom fakultetu, Univerziteta u Sarajevu.



</p>
<p className="mb-4 text-blueGray-500">
Nakon uvodnog predavanja profesorica i profesora na Odsjeku, studentice i studenti su kroz jednostavne i zanimljive eksperimente pokazale/i učenicama/ima koliko je hemija zanimljiva i koji je njen značaj u svakodnevnom životu, ali i u razvoju privrede. Učenice/i su obišle/i novoopremljene laboratorije Analitičke hemije, Opće i anorganske hemije, Organske hemije i biohemije, Fizikalne hemije, Radiohemije i hemijske tehnologije i Metodike nastave hemije.



</p>
<p className="mb-4 text-blueGray-500">
Cilj ove posjete je bio da se učenicama/ima približi Nastavni plan i program hemije koje/i redovno pohađaju i zašto je hemija zaista svuda oko nas. Posebna pažnja posvećena je praktičnoj organizaciji pri čemu su učenice/i imale/i priliku samostalno izvoditi eksperimente. 



</p>
<p className="mb-4 text-blueGray-500">
Izučavanje hemije kod učenica/ka razvija hemijsku pismenost i bazična znanja potrebna svakom pojedincu, jer su dio svakodnevnog života i rada, opšteg obrazovanja i kulture.




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Učenici/ce I4 razreda u posjeti Dječjem domu Bjelave


</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={dom1} alt="" />
                    </div>
                    <div>
                        <img src={dom2} alt="" />
                    </div>
                    <div>
                        <img src={dom1} alt="" />
                    </div>
                    <div>
                        <img src={dom2} alt="" />
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
                  Učenici/ce I4 razreda, zajedno sa  razrednicom Suadom Tadić, u četvrtak, 18. aprila, posjetili su Javnu ustanovu Dom za djecu bez roditeljskog staranja, Bjelave koji pružaju usluge smještaja, cjelokupnog zbrinjavanja, odgoja, obrazovanja, zdravstvene njege, cjelodnevnog boravka, poludnevnog boravka, te usluge psihosocijalne podrške djeci, mladima bez roditeljskog staranja, djeci čiji je razvoj ometen porodičnim prilikama i porodicama u riziku od razdvajanja.



</p>

<p className="mb-4 text-blueGray-500">
Dom za djecu bez roditeljskog staranja, Sarajevo osnovan je 1900. godine. Dom se nalazio na više lokacija u  Sarajevu. Poslije Drugog svjetskog rata ostao je samo na jednoj lokaciji na Bjelavama, gdje se i danas nalazi. Dugi niz godina Dom je mijenjao nazive.  U periodu od 1966. do 1992. godine je nosio naziv „Ljubica Ivezić“, a od 1997. godine je radio pod nazivom JU Dječji dom Bjelave.


</p>
<p className="mb-4 text-blueGray-500">
Današnja posjeta naših učenika/ca  predstavlja nastavak podrške koju naša škola pruža ovoj ustanovi. Uposlenici  Doma su srdačno i srčano ugostili naše učenike/ce. Uručili smo im prigodne darove za naše drugare/ice u Domu. Na žalost, nismo imali priliku družiti se sa djecom, jer ih je većina bila bolesna zbog zaraznih bolesti. Želimo im brz i uspješan oporavak! Čim ozdrave, doći ćemo da se družimo!


</p>

<p className="mb-4 text-blueGray-500">
Cilj ovakvih vršnjačkih druženja je da djeca budu upućena jedna na druge, razvijanje empatije i senzibiliteta, stvaranje mreže prijateljstava, privrženosti, što će poticati njihov zdrav razvoj, sazrijevanje i formiranje ličnosti.



</p>
<p className="mb-4 text-blueGray-500">
Zadovoljstvo nam je, sretni smo, što i naša škola može pomagati humani rad ustanove kao što je Dom za djecu bez roditeljskog staranja. Budimo i mi dijelom općih društvenih napora u domenu preventivnog i pravovremenog djelovanja, u odnosu na savremene prijetnje i rizike, sve kako bi pružili snažniji odgovor i preventivno razvijali otpornost društva i pojedinca! 



</p>
<p className="mb-4 text-blueGray-500">
Pružimo ruke, srca, djeci bez svojih roditelja i porodica, da bi ostvarila svoje pune potencijale za rast, razvoj i učenje! Svako dijete ima pravo na jednake šanse!




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Za učenika naše škole, Begić Haruna, prvo mjesto na 21. Kantonalnom takmičenju iz engleskog
jezika

</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={hb} alt="" />
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
                  Srednja ekonomska škola, Sarajevo imala je razloga za slavlje kada je
njen učenik Harun Begić, osvojio prestižno prvo mjesto na 21.
Kantonalnom takmičenju iz engleskog jezika održano 28.03.2024.
godine. Na kantonalnom takmičenju, Harun je briljirao, osvojivši ukupno
90 bodova od mogućih 100 u kategoriji III razreda srednjih stručnih
škola. Testiranje je obuhvatilo područja gramatike, vokabulara i
razumijevanja teksta, a Harun je demonstrirao izvanredno poznavanje
engleskog jezika.


</p>

<p className="mb-4 text-blueGray-500">
Harunova pobjeda nije došla iznenada. Već na školskom takmičenju,
održanom 15.3.2024., on je pokazao izvanredne sposobnosti osvajajući
prvo mjesto među svojim kolegicama i kolegama. S njim su, na školskom
takmičenju, učestvovali veoma vrijedni i talentovani učenici: Luka Rajak,
Nejra Šatara, Samira Bičević, Amina Imamović i Daris Nurković.
Čestitamo Harunu i njegovoj profesorici Senidi Čeljo na velikom
uspjehu.  

</p>
<p className="mb-4 text-blueGray-500">
Učenica Srednje ekonomske škole, Sarajevo, Ajla Karup, sjajno se plasirala na 21. Kantonalnom
takmičenju engleskog jezika, osvojivši četvrto mjesto u kategoriji IV razreda stručnih škola. Iskrene
čestitke Ajli i njenoj profesorici Svjetlani Vujaković.

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Dan Grada

</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={grada1} alt="" />
                    </div>
                    <div>
                        <img src={grada2} alt="" />
                    </div>
                    <div>
                        <img src={grada3} alt="" />
                    </div>
                    <div>
                        <img src={grada4} alt="" />
                    </div>
                    <div>
                        <img src={grada5} alt="" />
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
                  Povodom Dana grada Sarajeva, 06. aprila, u holu naše škole 05. aprila održan je performans učenika prvog razreda u okviru projekta “Dan Grada”. Učenici su u holu izveli zamišljenu šetnju kroz grad, a njihovo istraživanje o njemu prikazano je u sklopu filma, koji su napravili sami ili uz pomoć profesora. Uz prisustvo ostalih učenika prvog razreda, direktorice, profesora i uposlenika Škole iskazali su ljubav prema rodnom gradu i iskazali svoj veliki talenat u umjetničkom izražavanju.





</p>

<p className="mb-4 text-blueGray-500">
SPISAK UČESNIKA U PROJEKTU “DAN GRADA”:  

</p>
<p className="mb-4 text-blueGray-500">
IDEJA, TEKST I REŽIJA PERFORMANSA: prof Minja Hozo

</p>
<p className="mb-4 text-blueGray-500">
STRUČNI KOORDINATORI: prof Suada Tadić i Azemina Hujdur.

</p>
<p className="mb-4 text-blueGray-500">
TEHNIČKA IZRADA: Harun Džafić i Huzeife Gegić.



</p>
<p className="mb-4 text-blueGray-500">
NOVINARI: Nanah Kovačević i Nejra Bašović.



</p>
<p className="mb-4 text-blueGray-500">
GLUME: Ema Kuloglija, Omar Mekić, Hanadi Oručević, Dilaver Babić, Lejla Nogo, Kerim Husejnović, Danin Brutus, Lajla Bučan, Tajra Hasanbegović.




</p>
<p className="mb-4 text-blueGray-500">
PJEVAJU: Sajra Cerić i Belmin Ćorović.




</p>
<p className="mb-4 text-blueGray-500">
FOLKLOR: Ajna Halilović, Lamija Tabaković, Amina Begović, Adna Cernica, Zarah Hošić.




</p>
<p className="mb-4 text-blueGray-500">
SCENSKI POKRET: Zerina Zec i Berina Hebib.




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Staza sjećanja  od Trga djece Sarajeva do Baščaršije

</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={almina1} alt="" />
                    </div>
                    <div>
                        <img src={almina2} alt="" />
                    </div>
                    <div>
                        <img src={almina3} alt="" />
                    </div>
                    <div>
                        <img src={almina4} alt="" />
                    </div>
                    <div>
                        <img src={almina5} alt="" />
                    </div>
                    <div>
                        <img src={almina6} alt="" />
                    </div>
                    <div>
                        <img src={almina7} alt="" />
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
Instalacija Staza sjećanja postavljena je u Sarajevu, 5. aprila, na dan početka opsade Sarajeva, od Trga djece Sarajeva do Baščaršije. Stazom sjećanja slavili smo herojsku odbranu našeg grada, ali i odali počast, poštovanje i ljubav svim žrtvama agresije na Bosnu i Hercegovinu! 
</p>
<p className="mb-4 text-blueGray-500">
Volonteri i uposlenici Memorijalnog centra Sarajevo postavili su 11.541 par cipela za svakog ubijenog građanina Sarajeva, poginulog pripadnika Armije i MUP-a  RBiH. 
</p>
<p className="mb-4 text-blueGray-500">
Učenici/ce  II5 razreda naše škole, pedagoginja Amila Kurtalić i socijalna radnica Almina Hodžić  uručili su donaciju cipela Memorijalnom centru Kantona Sarajevo, te aktivno  sudjelovali u postavljanju Staze sjećanja i ostalim sadržajima programa.
</p>
<p className="mb-4 text-blueGray-500">
Memorijal su zajedno  organizirali Grad Sarajevo i Memorijalni centar Sarajevo. Prvo je održana šetnja glavnim ulicama Grada Sarajeva Maršala Tita, Ferhadija, Sarači, do Baščaršije.


</p>
<p className="mb-4 text-blueGray-500">
Tokom šetnje na određenim lokacijama bile su postavljene check-point table  s informacijama o događajima iz perioda opsade Sarajeva. Kompletna šetnja rutom od Trga djece Sarajeva do Baščaršije bila je popraćena prigodnim programom. Podsjetimo, obuću su donirali roditelji ubijene djece Sarajeva, pripadnici Armije RBiH, MUP-a RBiH, boračka udruženja,  brojni građani, ali i naši učenici/ce i uposlenici/ce koji su na ovaj način simbolično željeli biti dio memorijala na sve ubijene građane Sarajeva, poginule pripadnike Armije i MUP-a  RBiH. Svaki par postavljenih cipela simbolizira jednog od 11.541 Sarajlije čiji su koraci u periodu od 1992. do 1995. godine, nasilno zaustavljeni u vremenu.


</p>
<p className="mb-4 text-blueGray-500">
Građani Sarajeva prisjetili su se svakodnevnih patnji i stradanja. Opsada Sarajeva počela je 5. aprila 1992. godine, a okončana je 29. februara 1996. godine. Trajala je 1.425 dana. Bila je to jedna od najdužih opsada u historiji modernog ratovanja i najduža opsada jednog glavnog grada ikada.



</p>
<p className="mb-4 text-blueGray-500">
Staza sjećanja trajno će biti pohranjena u Memorijalnoj šumi na Hrasničkom stanu, na planini Igman. Riječ je o projektu Vlade Kantona Sarajevo i Memorijalnog centra Sarajevo.



</p>
<p className="mb-4 text-blueGray-500">
Nemjerljivo snažnu i emotivnu poruku, prisutnima je poslao Alija Hodžić, potpredsjednik Udruženja roditelja ubijene djece opkoljenog Sarajeva i otac ubijene djevojčice:



</p>
<p className="mb-4 text-blueGray-500">
“Ja njih vidim, gledajući ovu obuću, kao da su živi, kao da idu sada s nama, samo što ih ne uhvatimo za ruku… Tu su, prisutni su, krenuli su negdje, opominju ovaj narod.”



</p>
<p className="mb-4 text-blueGray-500">
Neka Staza sjećanja bude podstrek i inspiracija novim generacijama da se obrazovanjem, znanjem i kulturom sjećanja bore za bolje sutra našeg Sarajeva i domovine Bosne i Hercegovine!


</p>
<p className="mb-4 text-blueGray-500">
Neka nam svima, herojska borba i odbrana našeg grada, neizrecivo čudo bosanskog otpora i antifašistička ideja i nasljeđe ovoga grada i domovine, bude misao vodilja i snaga na životnim stazama!


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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Srednja ekonomska škola, Sarajevo na Info danu eTwinninga
</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={celjo} alt="" />
                    </div>
                    <div>
                        <img src={celjo1} alt="" />
                    </div>
                    <div>
                        <img src={celjo2} alt="" />
                    </div>
                    <div>
                        <img src={celjo3} alt="" />
                    </div>
                    <div>
                        <img src={celjo4} alt="" />
                    </div>
                    <div>
                        <img src={celjo5} alt="" />
                    </div>
                    <div>
                        <img src={celjo6} alt="" />
                    </div>
                    <div>
                        <img src={celjo7} alt="" />
                    </div>
                    <div>
                        <img src={celjo8} alt="" />
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
Etwinning je najveća zajednica odgojno-obrazovnih ustanova u Evropi. Na svom internet portalu eTwinning omogućava odgojno-obrazovnim radnicama i radnicima komunikaciju, umrežavanje, razmjenu dobrih praksi, realizaciju projektne nastave i kontinuirana, besplatna profesionalna usavršavanja na evropskom nivou.</p>
<p className="mb-4 text-blueGray-500">
Na Info eTwinning danu održanom 19. 3. 2024. godine, u Europe House u Sarajevu, a u organizaciji eTwinning ambasadorica i Državne organizacije za podršku eTwinningu Bosne i Hercegovine, realizovano je mnoštvo promotivnih i edukativnih aktivnosti za nastavnice, nastavnike, učenike i učenice. 
Info dan eTwinninga je organizovan s ciljem promocije eTwinninga kao neizostavnog alata u savremenoj učionici koji omogućava povećanje kompetencija, kako učenica i učenika, tako i nastavnica i nastavnika. </p>
<p className="mb-4 text-blueGray-500">
Ovom prilikom našu školu su, vrlo uspješno, predstavile prof. Senida Čeljo i učenice III-2 odjeljenja: Nejra Šatara, Naida Džekman, Lamija Borišić i Sanija Koštrebić. Učenice su prezentovale neke od svojih eTwinning projekata, a posebno su se osvrnule na projekat "Action Time"- najbolji projekat srednjih škola u BiH u 2023. godini, koji je nominovan za 'Evropsku nagradu'. Profesorica Čeljo je učestvovala u panel diskusiji na temu "Dobrobit u školi", zajedno sa prof. dr. Dženanom Husremović sa Filozofskog fakulteta, Aidom Terzić iz Agencije za predškolsko, osnovno i srednje obrazovanje BiH, te  učenicom Richmond Park International škole.</p>
<p className="mb-4 text-blueGray-500">
U sklopu ovog eTwinning događaja, učenice IV-6 odjeljenja Srednje ekonomske škole, Sarajevo su, uz mentorstvo prof. Lejle Hujdur, pripremile i vodile dvije radionice za učenike i učenice srednjih škola. Tako su Sanida Mekić i Emina Šarić vodile radionicu: "Ko sam ja?", a Lamija Dupovac i Dalija Silić: "Šta poslije srednje škole?". Info dan eTwinninga je bio dobro posjećen od strane nastavnica/nastavnika i učenica/učenika KS, te izuzetno medijski propraćen.</p>
<p className="mb-4 text-blueGray-500">
Sa ponosom ističemo da je Srednja ekonomska škola, Sarajevo u eTwinning zajednici još od 2015. godine. Za to vrijeme je u Školi realizovano mnoštvo eTwinning projekata, dobili smo niz državnih i evropskih oznaka kvaliteta za projekte koje su učenice i učenici radili, te posebnih nagrada za profesorice i profesore. Posljednje u nizu tih nagrada su: najistaknutiji eTwinner u BiH za 2023. -  prof. Lejla Hujdur, a najinovativniji eTwinner u BiH za 2023. godinu - prof. Senida Čeljo. Posebno je važno naglasiti da Škola duži niz godina dobiva oznaku eTwinning škole, a prof. Lejla Hujdur je i eTwinning ambasadorica za BiH. Sve ovo potvrđuje da je naša škola izuzetno posvećena unapređenju kvaliteta obrazovanja - naše/i profesorice i profesori unapređuju svoj rad kroz evropska profesionalna usavršavanja, a naše/i učenice i učenici stiču kompetencije kroz rad u evropskim eTwinning projektima.</p>






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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">POSJETE IZBORNE NASTAVE MATEMATIKE
</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={mmp1} alt="" />
                    </div>
                    <div>
                        <img src={mmp2} alt="" />
                    </div>
                    <div>
                        <img src={mmp3} alt="" />
                    </div>
                    <div>
                        <img src={mmp4} alt="" />
                    </div>
                    <div>
                        <img src={mmp5} alt="" />
                    </div>
                    <div>
                        <img src={mmp6} alt="" />
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
U četvrtak 21.03.2024. su maturanti naše škole, u pratnji prof. Lejle Hujdur i prof. Nihada Mehmedovića, posjetili Ekonomski fakultet Univerziteta u Sarajevu. To je bila prilika da učenici obiđu prostorije Ekonomskog fakulteta i detaljno se informišu o mogućnostima i uslovima studiranja na ovoj visoko-obrazovnoj ustanovi.</p>
<p className="mb-4 text-blueGray-500">
Posjeta EFSA je bila vrlo sadržajna i zanimljiva. Najprije su se našim učenicima obratili članovi Katedre za rukovodstvo i reviziiju: prof. dr. Ševala Isaković-Kaplan, rukovodilac i prof. dr. Haris Jahić, zamjenik . Održali su zanimljive prezentacije vezane za profesionalne mogućnosti koje se nude studentima koji se odluče za ovaj studij.</p>
<p className="mb-4 text-blueGray-500">
Nakon obraćanja uvaženih profesora, učenici su pogledali promotivni film Ekonomskog fakulteta, te prezentaciju svih smjerova i odsjeka, koje im je prezentirao PR tim EFSA. Ova prezentacija je bila vrlo informativna, a nakon nje je uslijedio razgovor u kome su učenici dobili odgovore na sva svoja pitanja i nedoumice.</p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo Ekonomskom fakultetu Univerziteta u Sarajevu na srdačnom dočeku.

</p>
<p className="mb-4 text-blueGray-500">
U cilju prikupljanja informacija o fakultetima i donošenju što kvalitetnije odluke o svom budućem zanimanju,  maturanti koji su na Izbornom predmetu Matematika su posjetili i Prirodno-matematički fakultet, kao i Fakultet za kriminalistiku, kriminologiju i sigurnosne studije, a u planu su i posjete Arhitektonskom, Mašinskom i Elektrotehničkom fakultetu Univerziteta u Sarajevu.

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Edukativne radionice, stručna predavanja, panel diskusije... na Sajmu EXPERT, 7. i 8. marta </h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={radi1} alt="" />
                    </div>
                    <div>
                        <img src={radi2} alt="" />
                    </div>
                    <div>
                        <img src={radi3} alt="" />
                    </div>
                    <div>
                        <img src={radi4} alt="" />
                    </div>
                    <div>
                        <img src={radi5} alt="" />
                    </div>
                    <div>
                        <img src={radi6} alt="" />
                    </div>
                    <div>
                        <img src={radi7} alt="" />
                    </div>
                    <div>
                        <img src={radi8} alt="" />
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
<b>Adnan Bahtić, iz ureda za komunikacije Centralne banke BiH</b> je održao edukativnu radionicu  na temu: <b>Uloga i značaj Centralne banke BiH</b>. Fokus je bio na kontinuiranim aktivnostima Centralne banke  koje  imaju za cilj da doprinesu monetarnoj stabilnosti finansijskog sistema i ekonomskom prosperitetu zemlje i ispunjavanju međunarodnih obaveza Bosne i Hercegovine. Centralna banka definira i kontrolira provođenje monetarne politike Bosne i Hercegovine, upravlja službenim deviznim rezervama ostvarenim izdavanjem domaće valute, pomaže i održava odgovarajuće platne i obračunske sisteme, koordinira djelatnosti Agencija za bankarstvo, koje su nadležne za izdavanje dozvola za rad i superviziju banaka.Učenicama IV4 razreda Alagić Anidi, Velić Amini, Karup Ajli i Đipa Naidi uručeni su certifikati Centralne banke kojim su postali vršnjački treneri programa finansijske edukacije i inkluzije mladih Centralne banke.Ulogu vršnjačkog trenera mogu prakticirati i u daljem nastavku školovanja, mogu imati ferijalnu praksu u Centralnoj banci i priliku da steknu praktično iskustvo i razvijaju profesionalne vještine pod mentorstvom  stručnjaka Centralne banke, te studijsku praksu za  postdiplomski i doktorski studij na visokoškolskim ustanovama u Bosni i Hercegovini koji se bave proučavanjem tema iz oblasti bankarstva i centralnog bankarstva.</p>
<p className="mb-4 text-blueGray-500">
<b>Ahmed Hodžić, rukovodilac odjela za trgovanje i nadzor Sarajevske berze (SASE)</b>, u svojstvu berzanskog eksperta,  učesnicima je predstavio sve aktivnosti SASE na osiguranju najviših standarda u prometu vrijednosnih papira i na potpunom razvoju tržišta kapitala  u funkciji ekonomskog razvoja Bosne i Hercegovine. Berze u osnovi služe kao primarna tržišta na kojima korporacije, vlade, i druge organizacije i institucije mogu prikupljati/povećati kapital usmjeravanjem sredstava investitora u produktivne pothvate.Tržište kapitala bavi se dugoročnim finansiranjem. Podcrtano je da pristup kapitalu i razvoj tržišta kapitala nesumnjivo su usko povezani s ekonomskim razvojem zemlje. Učesnici su imali priliku čuti o  prednostima finansiranja izdavanjem dionica posebno u kontekstu rasta i razvoja malih i srednjih poduzeća. Učenike/ce je posebno zanimala tematika kriptovaluta i imali su brojna pitanja na koja je berzanski ekspert Ahmed Hodžić sa puno entuzijazma odgovorio.</p>
<p className="mb-4 text-blueGray-500">
<b>Škola poduzetnštva Fondacije poduzetnika BiH</b> imala je za cilj i svrhu približiti i objasniti ulogu poduzetničkog obrazovanja u promociji poduzetništva kao kompetencije. </p>
<p className="mb-4 text-blueGray-500">
<b>Ilma Čekić,  generalni sekretar Fondacije poduzetnika u BiH i ujedno moderator panel diskusije</b>, održala je uvodno predavanje o  <b>Fondaciji poduzetnika u BiH</b>. Sljedeći dio njenog izlaganja bio je fokusiran na prezentiranje prilika EU za mlade. Fondacija podržava kreiranje politike razvoja malih, srednjih i velikih poduzeća te radi na uspostavljanju nacionalne komunikacijske resursne mreže, podržava odgovorne poduzetnike, promovira profesionalni razvoj mladih poduzetnika, pruža im savjetovanje, organizira seminare i radionice kako bi im pomogli u jačanju njihovog poslovanja.</p>
<p className="mb-4 text-blueGray-500">
<b>Selmir Šljivić, predsjednik skupštne poslodavaca Tuzlanskog kantona</b> je sa puno entuzijazma, srčanosti i patriotizma govorio na temu: <b>Poduzetništvo, vještine i ciljevi</b>. Naglasio je i svjedočio vlastitim poslovnim iskustvima koliko je važno podstaći kod djece razvoj inovativnosti, kreativnosti i inicijative koje su prijeko potrebne za bavljenje poduzetništvom.Kreativnost je bitna odlika uspješnog poduzetnika. Za poduzetništvo je potrebna radost, osjećaj da rastemo, doprinosimo, da smo ispunjeni i da smo dio nečega što ima smisla. Poduzetnička kompetencija odnosi se na sposobnost pojedinca da ideje pretvori u djelovanje te uključuje stvaralaštvo, inovativnost i spremnost na preuzimanje rizika, te sposobnost planiranja i vođenja projekata radi ostvarivanja ciljeva. Zaključio je da inovativnost i dobra procjena poslovnih pojedinaca direktno utječe na ekonomski razvoj zemlje.</p>
<p className="mb-4 text-blueGray-500">
<b>Dr Samir Vildić, Predsjednik upravnog odbora Fondacije poduzetnika</b> se bavio sljedećom temom: <b>Brend identitet i plasiranje proizvoda na tržište</b>. Brend je razlog zbog kojeg neko bira upravo ono što vi nudite, iako na tržištu ima na stotine sličnih ponuda. Brend identitet je onaj dio na koji imamo utjecaj, način na koji smo odabrali graditi svoj brend, te sve što u sklopu toga stvaramo unutar kompanije (kakvim ga prikazujemo, vizuelni identitet, “glas” i osobnost…).To je način na koji ga definišemo i kako želimo da ga javnost percipira. Brend identitet je najefikasniji način kojim bilo koja organizacija, proizvod ili stručnjak može steći konkurentsku prednost na danas prezasićenom tržištu. Brend nećete stvoriti preko noći, ali ulaganje vremena i ostalih resursa u izgradnju svog brenda uvijek se isplati, naglasio je Dr Vildić. Imperativ je da se tržište i tržišna niša odrede kako bi poslovanje bilo uspješno.</p>
<p className="mb-4 text-blueGray-500">
<b>Ademir Mehanović, član Upravnog odbora Fondacije poduzetnika</b> je učesnicima predstavio <b>Put od ideje do biznis</b>. Pokrenuti vlastito preduzeće nije lako. Mnogi su to uradili prije vas, često i bez visoke ekonomske stručne spreme i prethodnog iskustva. Ono što su oni imali, a što je vama potrebno, jeste dobra zamisao, te energija i upornost da tu ideju sprovedete u djelo. Ako to kombinujete sa temeljitim planiranjem, te ako znate kome se možete obratiti za podršku, onda imate sve elemente za uspješno poslovanje, poručio je učesnicima. </p>
<p className="mb-4 text-blueGray-500">
<b>Šemso Šurković, pomoćnik direktora za publicistiku i diseminaciju Federalnog zavoda za statistiku</b> učesnicima je predstavio <b>Federalni zavod za statistiku kao najznačajniji službeni izbor informacija</b>. Učenici/e su imali/e priliku da upoznaju relevatne baze pouzdanih, kvalitetnih, razumljivih, pravovremenih i međunarodno uporedivih statističkih podataka koje zadovoljavaju potrebe donositelja odluka, istraživača i ostalih domaćih i stranih korisnika i odražavaju stanje i promjene u ekonomskom, demografskom i socijalnom području, području životne sredine i prirodnih resursa. </p>






</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
                  <video src={radi} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/> 
          
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Marketing strategije razvoja tržišta SIKA proizvoda</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={cika1} alt="" />
                    </div>
                    <div>
                        <img src={cika2} alt="" />
                    </div>
                    <div>
                        <img src={cika3} alt="" />
                    </div>
                    <div>
                        <img src={cika4} alt="" />
                    </div>
                    <div>
                        <img src={cika5} alt="" />
                    </div>
                    <div>
                        <img src={cika6} alt="" />
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
U četvrtak, 07.03.2024. godine u okviru Sajma EKSPERT održano je takmičenje za najbolju Marketing strategiju razvoja tržišta SIKA proizvoda.</p>
<p className="mb-4 text-blueGray-500">
Na takmičenju su učestvovala četiri odjeljenja drugih razreda.   Učenici koji su predstavljali svoja odjeljenja su:</p>
<p className="mb-4 text-blueGray-500">
•	II-1: Naida Džihanić, Nur Imamović, Sarah Osmanović, Eldar Poturović i Namik Kuloglija.</p>
<p className="mb-4 text-blueGray-500">
•	II-2: Amra Dautović, Suada Redžić, Anida Kolić, Naida Agić, Amar Nurudini i Aldin Jačević.</p>
<p className="mb-4 text-blueGray-500">
•	II-3: Enida Bubić, Merjem Hanić, Hatidža Arnautović, Džejla Nezirević, Amina Gibović i Zerina Drakovac.  </p>
<p className="mb-4 text-blueGray-500">
•	II-4: Šejna Fako, Lejla Čaušević, Nejra Imamović, Esma Ćimić, Zerina Jelašković i Mejrema Bičo.</p>
<p className="mb-4 text-blueGray-500">
Učenici/ce naše škole vrijedno su radili/e na ovom projektu zajedno sa profesoricama Amrom Hodžić i Sandom Dupovac. </p>
<p className="mb-4 text-blueGray-500">
Njihova inovativnost, kreativnost i entuzijazam su  oduševili sve prisutne. Ovo takmičenje je bila prava prilika da afirmiramo  inovativnost, kreativnost naših učenika/ca. Pokazali su stanovitu samostalnost, samopuzdanje, vještine, što će im, sigurni smo, omogućiti da postanu kreativni upravljači svoje budućnosti.  Svi učesnici su impresionirali sjajnim idejama.</p>
<p className="mb-4 text-blueGray-500">
Takmičenje je pružilo priliku učesnicima da pokažu svoje vještine, inicijativnost, kreativnost i sposobnost timskog rada. Bila je i ovo prilika da razvijaju svoje učeničke kompetencije, jer djeca trajnije pamte kada kada dobiju priliku samostalno kreirati svoje kompetencije. Nije izostalo ni strasti, ni takmičarskog naboja.</p>
<p className="mb-4 text-blueGray-500">
Pobjednička marketing strategija razvoja tržišta preduzeća Sika bila je marketinška strategija II 4 razreda.</p>
<p className="mb-4 text-blueGray-500">
Marketinška strategija II 4 razreda bila je inventivna i originalna što ih je diferenciralo od ostalih takmičara.  Prepoznali su ključne potrebe i izazove kompanije Sika i kreirali marketinška  rješenja koja su imopresionirala publiku.
Iskrene čestitke za pobjedničku ekipu! Njihova pobjeda potvrđuje vrijednost inovacija i kvalitetnih ideja u modernom poslovnom okruženju. 
</p>
<p className="mb-4 text-blueGray-500">
Čestitamo i ostalim učesnicima na postignutim rezultatima!</p>





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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">XXVI Općinsko takmičenje iz pružanja prve pomoći u organizaciji Crvenog krsta Novo Sarajevo</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={edin1} alt="" />
                    </div>
                    <div>
                        <img src={edin2} alt="" />
                    </div>
                    <div>
                        <img src={edin3} alt="" />
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
Učenici/ce naše škole osvojili/e su drugo mjesto u konkurenciji šest srednjih škola sa područja Općine Novo Sarajevo.

</p>
<p className="mb-4 text-blueGray-500">
U subotu, 09.03.2024. godine, u prostorijama JU Osnovne škole Kovačići, Sarajevo, Crveni krst Novo Sarajevo je organizovao XXVI Općinsko takmičenje iz pružanja prve pomoći.</p>
<p className="mb-4 text-blueGray-500">
U takmičenju je uzelo učešća dvanaest ekipa,  ukupno preko sedamdeset učenika, te oko osamdeset volontera i profesionalaca.</p>
<p className="mb-4 text-blueGray-500">
Takmičenje je imalo za cilj motivaciju učenika za kvalitetno izučavanje i savladavanje elementarnih znanja u pružanju prve pomoći. Na ovogodišnjem takmičenju simulirano je pet nesreća, tipa saobraćajnih nesreća, migracija, požara, nesreća na gradilištu i minskom polju, uz realističan prikaz povreda, stanja i oboljenja nastradalih.</p>
<p className="mb-4 text-blueGray-500">
Učesnici/ce su pokazali stanovito znanje i vještine iz pružanja prve pomoći. </p>
<p className="mb-4 text-blueGray-500">
Članovi/ice naše ekipe bili/e su učenici/ce prvih razreda:  Asja Hadžić, Amna Alimajstorović, Sajra Zimić, Damir Konjhodžić, Hana Šehić, Emina Karić, zajedno sa profesorom Edinom Selmanovićem. U pripremama za takmičenje učestvovali su i Nejra Bašović i Harun Džafić. </p>
<p className="mb-4 text-blueGray-500">
Prva pomoć podrazumijeva mjere i postupke kojima se pomaže ozlijeđenoj ili oboljeloj osobi na mjestu događaja, sve kako bi se spasio ljudski život, izbjegla prijeteća opasnost ili ublažile zdravstvene poteškoće prije stizanja stručne pomoći (ljekara, hitne medicinske službe, službe za spašavanje ili drugih kvalifikovanih zdravstvenih radnika. To uključuje poziv hitne pomoći, osiguranje mjesta nesreće, te pomoć ranjeniku ili osobi sa zdravstvenom poteškoćom. Vježbe hitne pomoći odnose se na sljedeće vještine: ponašanje na mjestu nesreće, hitna pomoć ili mjere za spašavanje života prije dolaska hitne pomoći, te poziv hitne pomoći. Namjera organizatora je bila naglasiti značaj pravovremene i adekvatno pružene hitne medicinske pomoći stradalim i unesrećenim, kako u saobraćajnim nesrećama tako i u svim oblicima ozbiljnih i životno ugrožavajućih povreda, ne dovodeći u opasnost vlastiti život!</p>
<p className="mb-4 text-blueGray-500">
Čestitamo našim učenicima/cama na postignutim rezultatima!</p>





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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">2. naučno-popularni skup “Volim matematiku”</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={volim1} alt="" />
                    </div>
                    <div>
                        <img src={volim2} alt="" />
                    </div>
                    <div>
                        <img src={volim3} alt="" />
                    </div>
                    <div>
                        <img src={volim4} alt="" />
                    </div>
                    <div>
                        <img src={volim5} alt="" />
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
2. naučno-popularni skup “Volim matematiku”, u organizaciji Udruženja matematičara Kantona Sarajevo i Odsjeka za matematiku i kompjuterske nauke Prirodno-matematičkog fakulteta UNSA, je i ove godine okupio brojne zaljubljenike u matematiku. Bila je to prilika za druženje i  razmjenu matematičkih priča, vršenje matematičkih eksperimenata, te otkrivanje brojnih matematičkih zanimljivosti na radionicama i takmičenje u matematičkim kvizovima.

</p>
<p className="mb-4 text-blueGray-500">
Ovaj događaj je održan 4. i 5. marta u Dječijoj kući na Grbavici, a učenice Srednje ekonomske škole, Sarajevo i njihova profesorica Lejla Hujdur su se predstavile 3-minutnim prezentacijama. Tako je Irma Halep iz II-5 pričala o pametnoj matematici, Delila Čajić iz IV-6 o vezi matematike i muzike, dok je Lamija Dupovac iz IV-6 branila tvrdnju: "Štednja je mudrost trošenja". Profesorica Hujdur je prezentirala eTwinning projekat "Matematika i fudbal", te predstavila publici život i rad bosansko-hercegovačke matematičarke Vere Šnajder. Ovaj događaj bio je prilika za nova iskustva, znanja i prijateljstva, ali i najbolji način da se obilježi Međunarodni dan matematike. Čestitamo našim učenicama koje su sa entuzijazmom prihvatile izazov da učestvuju u ovom naučno-popularnom skupu i time potvrdile da matematika moze biti zanimljiva ukoliko je svakodnevno otkrivamo u stvarima koje nas okružuju.</p>






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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Ko zapravo pobjeđuje?</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={marina1} alt="" />
                    </div>
                    <div>
                        <img src={marina2} alt="" />
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
U nizu preventivnih aktivnosti, Udruženje za prevenciju ovisnosti NARKO-NE je u našoj školi održalo okrugli stol na temu Ko zapravo pobjeđuje?
</p>
<p className="mb-4 text-blueGray-500">
Izlagačice su bile Sanela Pekić, stručna saradnica za programe prevencije u školi, Udruženje za prevenciju ovisnosti NARKO-NE i Vedrana Novković, psihologinja, Zavod za bolesti ovisnosti Kantona Sarajevo te moderatorica Kerima Delibašić.</p>
<p className="mb-4 text-blueGray-500">
Ko zapravo pobjeđuje? je program prevencije kockanja mladih zasnovan na savremenim principima nauke. Namijenjen je učenicima prvih i drugih razreda srednjih škola i ima za cilj unaprijediti stručni pristup prevenciji kockanja i smanjiti kockanje kod ove populacije. Neki od specifičnih ciljeva programa su poboljšati i povećati znanje mladih o igrama na sreću, unaprijediti njihove socio-emocionalne vještine te razviti odgovorno ponašanje pri uključivanju u igre na sreću. Panelisti su podijelili svoja znanja i iskustva, ali i skrenuli pažnju na ključna pitanja i probleme koji se javljaju kod djece te koja su to rizična ponašanja na koja roditelji trebaju obratiti pažnju.</p>
<p className="mb-4 text-blueGray-500">
Program prevencije kockanja je podržan od strane Ministarstva za odgoj i obrazovanje Kantona Sarajevo i Instituta za razvoj preduniverzitetskog obrazovanja Kantona Sarajevo.
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Memorijalni turnir "Mersud Nikšić Nikša"</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={gimn1} alt="" />
                    </div>
                    <div>
                        <img src={gimn2} alt="" />
                    </div>
                    <div>
                        <img src={gimn3} alt="" />
                    </div>
                    <div>
                        <img src={gimn4} alt="" />
                    </div>
                    <div>
                        <img src={gimn5} alt="" />
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
U okviru Memorijalnog turnira "Mersud Nikšić Nikša", održano je takmičenje u Bošnjačkoj gimnaziji.

</p>
<p className="mb-4 text-blueGray-500">
Turnir je sadržavao sljedeće sportske discipline: odbojku, košarku, stoni tenis i šah.</p>
<p className="mb-4 text-blueGray-500">
Učenice i učenici naše škole ostvarili su tri zapažena rezultata: odbojkaši 1. mjesto, odbojkašice 3. mjesto i košarkaši 3. mjesto.</p>
<p className="mb-4 text-blueGray-500">
Voditelji sportskih timova su profesorica Ankica Zulčić i profesor Adnan Čolić.
</p>
<p className="mb-4 text-blueGray-500">
Iskrene čestitke učenicama i učenicima za postignute rezultate!</p>




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Malik Bektaš, član Hrvačkog kluba Željezničar, osvojio zlato na međunarodnom turniru u Rijadu</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={malik1} alt="" />
                    </div>
                    <div>
                        <img src={malik2} alt="" />
                    </div>
                    <div>
                        <img src={malik3} alt="" />
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
On se takmičio u seniorskoj konkurenciji u jednom od stilova po UWW (United World Wrestling) pravilima

</p>
<p className="mb-4 text-blueGray-500">
Malik Bektaš, član Hrvačkog kluba Željezničar, osvojio je prvo mjesto i zlatnu medalju na međunarodnom Greppling turniru.

Turnir je održan 2. i 3. marta u saudijskom Rijadu. Bektaš je na takmičenje otputovao 28. februara, a iz Saudijske Arabije se vratio s medaljom oko vrata.</p>
<p className="mb-4 text-blueGray-500">
On se takmičio u seniorskoj konkurenciji u jednom od stilova prema UWW (United World Wrestling) pravilima.

Na putu do zlatne medalje Bektaš je pobjeđivao domaće borce Suhaiba Madanija, potom Alvalida Althobaitija (Alwaleed) i Marvana Bukarija (Marwan Bukhari). </p>





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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">NAIDA ĐIPA -  2. mjesto na kantonalnom takmičenju u pisanju literarnih radova povodom 1. marta - Dana nezavisnosti BiH</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={naida} alt="" />
                    </div>
                    <div>
                        <img src={naida1} alt="" />
                    </div>
                    <div>
                        <img src={naida2} alt="" />
                    </div>
                    <div>
                        <img src={naida3} alt="" />
                    </div>
                    <div>
                        <img src={naida4} alt="" />
                    </div>
                    <div>
                        <img src={naida5} alt="" />
                    </div>
                    <div>
                        <img src={naida6} alt="" />
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
Ministarstvo za odgoj i obrazovanje Kantona Sarajevo i JU Institut za razvoj preduniverzitetskog obrazovanja Kantona Sarajevo proglasili su najbolje literarne radove u kategoriji srednjih škola u Kantonu Sarajevo i naša škola je osvojila  drugo mjesto. Organizatori su istakli da izuzetno cijene  kreativnost i originalnost u pisanju eseja i načinu izražavanja ljubavi i poštovanja prema domovini. Naša nagrađena učenica je prisustvovala dodjeli nagrada i čitala svoj rad na priredbi u Bosanskom kulturnom centru povodom Dana nezavisnosti BiH o temi: "Jedna si jedina, moja domovina." </p>
<p className="mb-4 text-blueGray-500">
Čestitamo nagrađenoj učenici IV4 razreda, Naidi Đipi, kao i njenoj mentorici, profesorici Dženani Tanović-Hamzić.</p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo kolektivu, direktorici, pomoćnici direktorice, kao i svim učenicama i učenicima na podršci koju nam pružaju u ostvarivanju značajnih rezultata.</p>
<p className="mb-4 text-blueGray-500">
Kako je ovo našoj Naidi treća nagrada iz predmeta B/H/S jezik i književnost, osvojila je sva tri mjesta iz svih oblasti jezika i književnosti, željeli smo znati kako se osjeća, jer mi smo ponosni na njene uspjehe.</p>
<p className="mb-4 text-blueGray-500">
Naida Đipa: </p>
<p className="mb-4 text-blueGray-500">
Kao maturantica ove škole, zahvalna sam na svemu što mi je ova škola pružila od bogatstva znanja pa sve do divnih poznanstava. Posebno sam zahvalna svima koji su prepoznali moj rad, znanje i moj talenat za pisanje, a jedna od takvih je moja draga profesorica Dženana bez koje ne bih postigla ovakve rezultate. Zahvalna sam što me svojom snažnom voljom podstakla da nižem ovakve uspjehe.  Biti prvi, drugi i treći na ovakvim takmičenjima  zaista je ponos, ali ne samo moj ponos, već ponos čitave Srednje ekonomske škole i njenog kolektiva. Ponosna sam  na sebe i što mi je ovo još jedan uspjeh u nizu što se Bosanskog jezika i književnosti tiče, a zahvalna sam svima  koji su doprinijeli mom uspjehu i omogućili mi da budem ovakva kakva jesam. Drago mi je što smo još jednom uspjeli pokazati da je Srednja ekonomska škola  jedna od najboljih u našem gradu.</p>




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">XIII Ekonomijada: Beograd - Čačak 28.02.- 02.03.2024. </h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={beograd} alt="" />
                    </div>
                    <div>
                        <img src={beograd2} alt="" />
                    </div>
                    <div>
                        <img src={beograd3} alt="" />
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
Regionalni susret srednjih ekonomskih škola održan je u periodu od 28.02. do 02.03. u Beogradu i Čačku. Tema za ovogodišnju Ekonomijadu vezana je za Zelenu ekonomiju, a učenici naše škole, Ajdin Kozadra III-5 i Ardan Bečić IV-4 razreda, uz mentorstvo profesora Emira Ustavdića i direktorice Amire Kadrispahić, uradili su Projektni rad na temu: Odlaganje i reciklaža elektronskog i elektroničkog otpada. </p>
<p className="mb-4 text-blueGray-500">
Mnoštvo kreativnih i tematskih radionica, kao i stručna predavanja na Ekonomskom fakultetu Univerziteta Beograd i Univerzitetu Singidunum, bili su neizostavni dio ovogodišnje XIII Ekonomijade. Vrijedni domaćini, učenici i učenice, profesori i profesorice i direktori Prve i Druge ekonomske škole, kao i Ekonomske škole iz Čačka, potrudili su se da steknemo nezaboravno iskustvo druženja, upoznavanja znamenitosti pomenutih gradova, ali i da razmijenimo iskustva i ideje za kvalitetnije i raznosvrsnije obrazovanje u srednjim ekonomskim školama.</p>
<p className="mb-4 text-blueGray-500">
Iako je susret bio dogovoren kao revijalni, a ne takmičarski, ne možemo, a da ne istaknemo, da su profesori drugih ekonomskih škola konstatovali da su naši učenici bili najspremniji, te da je naš projekat najkvalitetnije urađen, na što smo izuzetno ponosni. Dogovoreno je da se Ekonomijada 2025. godine realizuje u Banja Luci.</p>





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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">POSJETA BRUSA-BEZISTANU</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={azemina1} alt="" />
                    </div>
                    <div>
                        <img src={azemina2} alt="" />
                    </div>
                    <div>
                        <img src={azemina3} alt="" />
                    </div>
                    <div>
                        <img src={azemina4} alt="" />
                    </div>
                    <div>
                        <img src={azemina5} alt="" />
                    </div>
                    <div>
                        <img src={azemina6} alt="" />
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
U utorak, 13. februara 2024. godine, učenice i učenici I1 odjeljenja, u pratnji profesorice
Historije Azemine Hujdur posjetile/i su depadans Muzeja Sarajeva, Brusa-bezistan.</p>
<p className="mb-4 text-blueGray-500">
Tom prilikom učenice i učenici su obišli stalnu izložbenu postavku, koja je hronološki
podijeljena u tri dijela - prethistoriju, antiku i srednji vijek.</p>
<p className="mb-4 text-blueGray-500">
Na galeriji Muzeja izloženi su eksponati iz osmanskog perioda (poput veoma vrijedne opreme
osmanskog ratnika), te oni iz vremena Austro-Ugarske uprave u Sarajevu.</p>
<p className="mb-4 text-blueGray-500">
Najveću pažnju učenica i učenika privukla je maketa Baščaršije. Primjetiti su da brojni objekti
prikazani na maketi danas ne postoje (srušeni su iza Drugog svjetskog rata), a da je nekim
drugim promijenjen vanjski izgled ili prvobitna namjena.</p>
<p className="mb-4 text-blueGray-500">
Ono što je posebno važno je da su učenice i učenici kvalitetno i konstruktivno povezale/i znanje
iz naše učionice i historijske artefakte.</p>





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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">OBILJEŽILI SMO 136. ROĐENDAN ZEMALJSKOG MUZEJA</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={posjeta} alt="" />
                    </div>
                    <div>
                        <img src={posjeta1} alt="" />
                    </div>
                    <div>
                        <img src={posjeta2} alt="" />
                    </div>
                    <div>
                        <img src={posjeta3} alt="" />
                    </div>
                    <div>
                        <img src={posjeta4} alt="" />
                    </div>
                    <div>
                        <img src={posjeta5} alt="" />
                    </div>
                    <div>
                        <img src={posjeta6} alt="" />
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
U četvrtak, 01. februara 2024. godine, učenice i učenici I3 odjeljenja, u pratnji profesorice
Historije Azemine Hujdur posjetile/i su Zemaljski muzej Bosne i Hercegovine.</p>
<p className="mb-4 text-blueGray-500">
Povod posjete je obilježavanje 136. rođendana jedne od najznačajnijih kulturno-historijskih
institucija u Bosni i Hercegovini, koja je prava riznica bogatog materijalnog i nematerijalnog
kulturnog naslijeđa.</p>
<p className="mb-4 text-blueGray-500">
Učenice i učenici su, u toku posjete, bile/i u prilici obići brojne eksponate iz bogate zbirke
arheoloških, etnografskih, prirodnih nauka.</p>
<p className="mb-4 text-blueGray-500">
Ova posjeta im je omogućila bolji uvid u različite aspekte historije naše zemlje, razumijevanje i
poštovanje prema kulturno-historijskom naslijeđu Bosne i Hercegovine.</p>





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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Sportom protiv nasilja: prijateljske utakmice u našoj školi</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={sport1} alt="" />
                    </div>
                    <div>
                        <img src={sport2} alt="" />
                    </div>
                    <div>
                        <img src={sport3} alt="" />
                    </div>
                    <div>
                        <img src={sport4} alt="" />
                    </div>
                    <div>
                        <img src={sport5} alt="" />
                    </div>
                    <div>
                        <img src={sport6} alt="" />
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
Tokom februara, 15., 21., i 22., održane su prijateljske utakmice odjeljenja Treće gimnazije, Škole za okoliš i drvni dizajn i naše škole. Profesori/ce Treće gimnazije, Škole za okoliš i drvni dizajn, te naše škole Adnan Čolić i Ankica Zulčić su organizirali niz utakmica muških i ženskih timova i priredili nam mnogo sporta, druženja, smijeha, zabave, igre, radosti,...jer sport prije svega mora biti igra i radost.</p>
<p className="mb-4 text-blueGray-500">
Bile su ovo sedmice  međuškolske saradnje i partnerstva u cilju promoviranja  sporta za sprečavanje i borbu protiv nasilja. </p>
<p className="mb-4 text-blueGray-500">
Sport ima ključnu ulogu u izgradnji sigurnijeg društva i sprečavanju nasilja i kriminala među mladima. Sport nije samo tjelesna aktivnost. Pored  zdravlja, sport je značajan za sticanje  niza bitnih vrijednosti  kao što su  samodisciplina, poštovanje drugih  i  liderske  vještine. Fer-plej odnosi  u sportu su  najbolja prevencija  protiv nasilja  i taj  odnos treba njegovati.</p>
<p className="mb-4 text-blueGray-500">
Pokazalo se da djeca koja se bave sportom u većoj mjeri pokazuju sklonost prosocijalnim ponašanjima, te razvoju kohezije s drugima. Pojava nasilja i socijalne isključenosti među djecom u sportskim klubovima pokazala se kao vrlo rijetka.  Pored toga što doprinosi fizičkom, psihološkom i emotivnom blagostanju, sport takođe igra značajnu ulogu u zdravom društvenom razvoju i interakciji. Sport pomaže ljudima da nauče kako postavljati i postizati ciljeve kroz disciplinu i naporan rad. Sportom se njeguje razvoj donošenja odluka i liderskih sposobnosti, dok uči ljude kako da reaguju i na uspjeh i neuspjeh. Osobe koje učestvuju u sportu imaju priliku da poboljšaju svoje komunikacijske vještine i steknu dragocjeno iskustvo u saradnji i timskom radu. Sport omogućava ljudima koji možda inače nemaju priliku da se upoznaju i podijele svoja iskustva i zajedno rade na zajedničkom cilju. Ove socijalne vještine i iskustva lako se prenose na druge aspekte života i mogu poboljšati sposobnost osobe da uspije kao student, zaposleni, član zajednice. Sport takođe pruža alternativu rizičnom ili anti-socijalnom ponašanju, stvarajući dovoljnu strukturu, disciplinu i podsticaj da neke ljude drže dalje od droga, nasilja ili kriminalnih aktivnosti. Djeca i mladi se uče da poštuju druge i drugačije, da se energija usmjerava na sportsko takmičenje, a ne na nasilje. Sport je platforma za učenje i razvijanje vještina, kao što su disciplina, samopouzdanje i liderstvo, a ujedno u sportistu ukorijenjuje principe kao što su tolerancija, saradnja i poštovanje. Osim razvoja socijalnih i komunikacijskih vještina, djeca i mladi kroz sport uče upravljati vlastitim emocijama te oslobađaju nakupljeni stres što ima blagotvoran učinak na mentalno zdravlje.</p>
<p className="mb-4 text-blueGray-500">
Djeca koja se bave sportom sklonija su pozitivnom pristupu i snalaženju u situacijama pojave nasilja i socijalne isključenosti od ostale djece!</p>
<p className="mb-4 text-blueGray-500">
Sport može postati ogromna sila za pokretanje pozitivnih društvenih promjena, jer ima sposobnost da transformiše živote pojedinaca!</p>
<p className="mb-4 text-blueGray-500">
Sport gradi mostove, zbližava ljude i doprinosi izgradnji mirnijeg i sigurnijeg društva!</p>
<p className="mb-4 text-blueGray-500">
Sport može odigrati ključnu ulogu u osnaživanju mladih da postanu aktivni akteri pozitivnih promjena i podrže napore u prevenciji nasilja!</p>




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">S.T.A.R CHALLANGE 11. takmičenje u poduzetništvu</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={star1} alt="" />
                    </div>
                    <div>
                        <img src={star2} alt="" />
                    </div>
                    <div>
                        <img src={star3} alt="" />
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
S.T.A.R. Challenge je takmičenje u preduzetništvu za srednjoškolce iz cijele BiH, kojeg se sjećate pod nazivom MUNJA BUSINESS CHALLENGE. Održava se svake godine, počev od 2013. godine. U programu je do sada učestvovalo 150 srednjih škola iz 75 gradova sa blizu 2.300 učenika.</p>
<p className="mb-4 text-blueGray-500">
Učešćem na takmičenju S.T.A.R. Challenge mladi srednjoškolci razvijaju svijest o preduzetništvu i biznisu, rade na razvijanju niza vještina rješavanja problema, timskog rada i unapređivanja vlastitog samopouzdanja što je od ključne važnosti za snalaženje na tržištu rada. Unapređenje školstva, promjene u pristupu učenja, stvaranje pozitivne percepcije preduzetništva, razvijanje finansijske i digitalne pismenosti, može doprinijeti razvoju društva i stvoriti bolje uvjete za stvaranje generacije uspješnih poduzetnika. Kako bi se spriječio odlazak mladih i talentovanih ljudi i zadržalo ih se, potrebno im je stvoriti uvjete koji im omogućuju mogućnosti napredovanja, razvijanja njihovog znanja i profesionalnog razvoja.</p>
<p className="mb-4 text-blueGray-500">
Učenici/ce naše škole koji su uzeli/e učešća na 11. takmičenju u poduzetništvu, održanom 15.02.2024. godine, u Sarajevu, su Amra Gogalić IV4 razred, Najda Subašić IV3, Sumeja Džaferović IV3, Kerim Kulovac III6, zajedno sa profesoricama Amrom Hodžić, Vildanom Čelić i Sandom Dupovac. Ove godine takmičenje se sastoji od 5 regionalnih takmičenja: Sarajevo (15.02.), Tuzla (21.02.), Mostar (05.03.), Banja Luka (14.03.), Zenica (19.03.).
Učesnici su bili raspoređeni u devet timova i zajedničkim snagama, uz podršku mentora su radili na kreiranju biznis ideje na temu koju su predstavili partneri (USAID BiH i Turizam u BiH).
</p>
<p className="mb-4 text-blueGray-500">
Bila je ovo prilika da mladi  naprave prvi korak i ne oslanjaju se samo na državu, već
na  sebe i da probaju  svoje znanje i mogućnosti usmjeriti na svoje ciljeve i da ne odustaju!
</p>
<p className="mb-4 text-blueGray-500">
Ključne stavke potrebne za uspjeh su vjera u samog sebe, znanje, vizija i upornost!
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Vršnjački edukatori realizirali radionicu Upravljanje ličnim finansijama</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={finansije1} alt="" />
                    </div>
                    <div>
                        <img src={finansije2} alt="" />
                    </div>
                    <div>
                        <img src={finansije3} alt="" />
                    </div>
                    <div>
                        <img src={finansije4} alt="" />
                    </div>
                    <div>
                        <img src={finansije5} alt="" />
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
U sklopu projekta Upravljanje ličnim finansijama, kojeg organizira Centralna banka Bosne i Hercegovine i EFSE, učenici IV4 razreda imali su priliku da zajedno prisustvuju obuci koja je održana 4.12.2023. godine u prostorijama Centralne banke BiH. Cilj ove obuke je finansijska edukacija i inkluzija mladih u Bosni i Hercegovini, kako bi mogli da prepoznaju prednosti dostupnih finansijskih usluga i koriste ih s razumijevanjem i na racionalan i siguran način.</p>
<p className="mb-4 text-blueGray-500">
Kao nastavak  edukacije u  Centralnoj banci Bosne i Hercegovine, učenici IV4 razreda, Velić Amina, Ajla Karup, Haris Ibrišagić, Benjamin Lipovac, Đipa Naida, Alagić Naida, Imširović Lejla i Aličković Amila su  realizirali edukativnu radionicu 28. 2. 2024. godine za  učenike IV3 i III1 razreda  o upravljanju ličnim finansijama, u multimedijalnoj sali naše škole.  Radionici je prisustvovao i voditelj ovog projekta  Centralne banke Bosne i Hercegovine, Adnan Bahtić. Vršnjački edukatori su koristili edukative materijale Centralne banke, koji su  kreirani za sve starosne skupine, odnosno za sve slojeve društva i obrađeni na način koji omogućava pružanje dovoljno informacija onima koji nisu eksperti u ovim oblastima, a u potrazi su za osnovnim teoretskim znanjem i informacijama. Certifikati o uspješno završenoj edukaciji, vršnjačkim edukatorima će biti uručeni na stručnom predavanju Centralne banke na sajmu EXPERT koji naša škola organizira 7. i 8. marta.</p>
<p className="mb-4 text-blueGray-500">
Edukovanjem budućih edukatora, samostalno ili kroz saradnju s partnerskim institucijama, CBBiH kontinuirano radi na edukaciji i prenosu znanja na ciljne grupe. CBBiH insistira na finansijskoj edukaciji i inkluziji, jer CBBiH predsjedava Stalnim odborom za finansijsku stabilnost i koordinira djelatnosti entitetskih agencija za bankarstvo, te tako ima značajnu ulogu u održavanju finansijske stabilnosti u državi. Sva navedena tijela, uz Agenciju za osiguranje depozita Bosne i Hercegovine, predstavljaju mrežu finansijske stabilnosti.</p>
<p className="mb-4 text-blueGray-500">
Finansijska edukacija i inkluzija su preduslov da bi stanovništvo donosilo racionalne finansijske odluke. Ovakve aktivnosti reflektuju  stabilnost cijelom sistemu. </p>
<p className="mb-4 text-blueGray-500">
Centralna banka, kao društveno odgovorna institucija, pruža studentima završnih godina prvog ciklusa studija,  ekonomskog smjera, mogućnost obavljanja ferijalne prakse u Centralnoj banci Bosne i Hercegovine, te studentima postdiplomskog i doktorskog studija iz oblasti bankarstva i centralnog bankarstva, što je od iznimne važnosti za budući profesionalni razvoj naših učenika.</p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo Centralnoj banci za priliku da naši učenici steknu praktična znanja i vještine odgovornog i racionalnog upravljanja novcem, te da upotpune  znanja stečena tokom školovanja!</p>
<p className="mb-4 text-blueGray-500">
Projekat Upoznaj privredu Kantona Sarajevo, Indira Zeković, prof.</p>




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Edukativno predavanje u  Regionalnom centru Sarajevo UPRAVE ZA INDIREKTNO OPOREZIVANJE (UIO/UINO)</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={indira1} alt="" />
                    </div>
                    <div>
                        <img src={indira2} alt="" />
                    </div>
                    <div>
                        <img src={indira3} alt="" />
                    </div>
                    <div>
                        <img src={indira4} alt="" />
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
U srijedu, 28. februara 2024. godine, učenici IV5 i nekoliko učenika/ca IV3 razreda   posjetili su Regionalni centar Sarajevo UIO.</p>
<p className="mb-4 text-blueGray-500">
Uposlenici UIO su organizirali edukativno predavanje o sljedećim temama: poreski sistem u BiH, nadležnosti Uprave za indirektno oporezivanje, organizacija i upravljanje u UIO, osnove sistema PDV-a u BiH, porezni obveznik, registracija poreznih obveznika, kako se provodi porezna kontrola, digitalizacija u UIO...</p>
<p className="mb-4 text-blueGray-500">
Značajan dio predavanja se odnosio na elektronsko poslovanja sa UIO. Elektronske usluge UIO/UINO  su omogućile jednostavniji i efikasniji način korišćenja prava i izvršavanja obaveza po osnovu indirektnih poreza. U svakom trenutku porezni obveznici imaju pristup svojim podacima na e-portalu, prije svega podacima koji se vode u Jedinstvenom registru obveznika indirektnih poreza, podacima sa porezne kartice, tako da mogu vidjeti sve svoje proknjižene porezne prijave, porezne uplate i sl.</p>
<p className="mb-4 text-blueGray-500">
Elektronske usluge su novo poglavlje u komunikaciji sa korisnicima i sada je moguće elektronsko podnošenje prijava za PDV i akcizu.  Naime, prva elektronska usluga uz upotrebu kvalificirane elektronske potvrde,  omogućena je učesnicima u provoznom carinskom postupku koji od 01.08.2022. godine, carinske prijave za provoz potpisane kvalificiranim elektronskim potpisom, podnose elektronskim putem. UIO je ispunila sve propisane uvjete za izdavanje kvalifikovanih elektronskih potvrda koje će omogućiti elektronsko poslovanje, odnosno korištenje elektronskih dokumenata sa pravnom snagom papirnog dokumenta u skladu sa Zakonom o elektronskom dokumentu.  Cilj Uprave za indirektno oporezivanje je da u narednom periodu u potpunosti pređe na bespapirno poslovanje sa obveznicima indirektnih poreza, koji će uz posjedovanje kvalificirane elektronske potvrde izdate od strane UIO, sva svoja prava i obaveze moći ostvariti puno brže, jednostavnije i jeftinije, isključivo elektronskim putem. UIO je za sve obveznike indirektnih poreza, kao i sve građane u Bosni i Hercegovini, koji su nezadovoljni radom službenika UIO, neprimjerenim ponašanjem ili nezakonitim postupanjem istih, ustanovila mogućnost podnošenja primjedbi i elektronskim putem. Odsjek za profesionalne standarde provjerava svaku zaprimljenu primjedbu stručno, nepristrasno i efikasno.</p>
<p className="mb-4 text-blueGray-500">
Na kraju sesije, uposlenici Uprave su na naša pitanja odgovarali sa zadovoljstvom, stručno i profesionalno.</p>
<p className="mb-4 text-blueGray-500">
Projekat Upoznaj privredu Kantona Sarajeva, Indira Zeković, prof.</p>




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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Dan nezavisnosti Bosne i Hercegovine</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={priredba1} alt="" />
                    </div>
                    <div>
                        <img src={priredba2} alt="" />
                    </div>
                    <div>
                        <img src={priredba3} alt="" />
                    </div>
                    <div>
                        <img src={priredba4} alt="" />
                    </div>
                    <div>
                        <img src={priredba5} alt="" />
                    </div>
                    <div>
                        <img src={priredba6} alt="" />
                    </div>
                    <div>
                        <img src={priredba7} alt="" />
                    </div>
                    <div>
                        <img src={priredba8} alt="" />
                    </div>
                    <div>
                        <img src={priredba9} alt="" />
                    </div>
                    <div>
                        <img src={priredba10} alt="" />
                    </div>
                    <div>
                        <img src={priredba11} alt="" />
                    </div>
                    <div>
                        <img src={priredba12} alt="" />
                    </div>
                    <div>
                        <img src={priredba13} alt="" />
                    </div>
                    <div>
                        <img src={priredba14} alt="" />
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
Od prvih pisanih tragova iz X stoljeća pa kroz naredna stoljeća, naša domovina je prolazila kroz,
nekada teška, a nekada lijepa razdoblja.</p>
<p className="mb-4 text-blueGray-500">
Osvajali su je mnogi osvajači, dijelili je, ukidali joj državnost, ali ona je uvijek opstajala.</p>
<p className="mb-4 text-blueGray-500">
U nizu važnih događaja iz naše burne prošlosti i novije historije najvažnije mjesto pripada 1.
martu. Ovaj dan je zlatnim slovima upisan u njenu hiljadugodišnju tradiciju. To je dan kada su,
prije 32 godine, građani Bosne i Hercegovine izašli na referendum i izjasnili se za suverenu i
nezavisnu Bosnu i Hercegovinu, državu ravnopravnih građana i naroda koji u njoj žive…</p>
<p className="mb-4 text-blueGray-500">
Referendumskim izglasavanjem Bosna i Hercegovina je vratila i ostvarila svoju punu državnu
volju te postala ravnopravna s ostalim zemljama Jugoistočne Evrope. Sve to vrijeme, do 1.marta
1992. godine, ona je čuvala svoju teritorijalnu cjelovitost i ustavno-političku autonomiju.</p>
<p className="mb-4 text-blueGray-500">
Zemlje članice Evropske zajednice su 6.aprila 1992, godine, a dan kasnije i Sjedinjene Američke
Države priznale Bosnu i Hercegovinu kao nezavisnu i suverenu državu. Republika Bosna i
Hercegovina je primljena u Organizaciju ujedinjenih nacija 22. maja 1992.godine, čime je
konačno i zvanično postala država u punom obimu značenja tog pojma u savremenom svijetu.</p>
<p className="mb-4 text-blueGray-500">
Potvrdom bosanske državnosti njeni narodi i narodnosti su dokazali hiljadugodišnji kontinuitet,
svoju historiju i savremenost. Svoju državnotvornu ideju stoljećima čuvanu, branjenu i
zagovaranu konačno su pretvorili u stvarnost.</p>
<p className="mb-4 text-blueGray-500">
Time je, nažalost, započeo i historijski hod po mukama Bosne i Hercegovine kao suverene i
nezavisne države, zasnovane u najtežim ratnim okolnostima i na nesalomljivoj i jasno izraženoj
volji njenih građana I građanki da, kao svoji na svome, žive zajedno sa svima onima koji Bosnu i
Hercegovinu doživljavaju kao svoju domovinu.</p>
<p className="mb-4 text-blueGray-500">
Na dan kada je uslijedilo međunarodno priznanje, osvanule su barikade i izvršen je napad na
glavni grad Sarajevo. Time je započela višegodišnja agresija na međunarodno priznatu državu
Bosnu i Hercegovinu.</p>
<p className="mb-4 text-blueGray-500">
Danas zahvaljujući hrabrim Bosancima i Hercegovcima koji su četiri godine branili jedinu nam
domovinu, na svakom njenom dijelu teritorije, , dočekujemo još jedan 1. mart u miru i slobodi.</p>
<p className="mb-4 text-blueGray-500">
Bosno i Hercegovino, jedina nam domovino, sretan ti Dan nezavisnosti!</p>



</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
                  <video src={priredba} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/> 
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">posjeta Ekonomskom fakultetu u Sarajevu</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={knjig1} alt="" />
                    </div>
                    <div>
                        <img src={knjig2} alt="" />
                    </div>
                    <div>
                        <img src={knjig3} alt="" />
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
U srijedu, 28.02.2024. godine, su učenici četvrtog razreda naše škole, koji pohađaju izborni predmet Knjigovodstvo, bili u posjeti Ekonomskom fakultetu u Sarajevu i prisustvovali Match Me radionici "Accounting & Audit". Na radionici su imali priliku čuti korisna izlaganja: Raise Ratković (članice Uprave i Izvršne direktorice za finansije - Holdinga d.o.o. Sarajevo & Energopetrol d.d. Sarajevo), Tarika Alijagića (direktora Ernst&Younga d.o.o. Sarajevo) i Amre Salihović (konsultantice Revicon d.o.o. Sarajevo), te prisustvovati i učestvovati na Panelu "Izgradnja uspješne karijere u računovodstvu i reviziji".</p>



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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Dan ružičastih majica-Međunarodni dan borbe protiv vršnjačkog nasilja</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>

                  <div>
                        <img src={danas0} alt="" />
                    </div>  
                  <div>
                        <img src={danas} alt="" />
                    </div>
                    <div>
                        <img src={danas1} alt="" />
                    </div>
                    <div>
                        <img src={danas2} alt="" />
                    </div>
                    <div>
                        <img src={danas3} alt="" />
                    </div>
                    <div>
                        <img src={danas4} alt="" />
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
Dan ružičastih majica, poznatiji kao Pink Shirt Day,  obilježava se s ciljem podizanja svijesti o problemu vršnjačkog nasilja i promoviranja kulture nenasilja i tolerancije među mladima. 
</p>
<p className="mb-4 text-blueGray-500">
Učenici/ce, profesori/ce i pedagoško-psihiloška služba naše škole su u srijedu, 28. februara obukli/le ružičaste majice u znak podrške toj inicijativi.
</p>
<p className="mb-4 text-blueGray-500">
Ovaj dan predstavlja važan podsjetnik na izgradnju poštovanja i solidarnosti među mladima, kako bi se stvorilo sigurno okruženje u školama i zajednicama. Danas cijeli svijet nosi ružičaste majice, prepoznatljiv simbol globalne inicijative promocije borbe protiv vršnjačkog nasilja.
</p>
<p className="mb-4 text-blueGray-500">
Vršnjačkim nasiljem smatraju se ponavljajući postupci s namjerom izazivanja štete žrtvi, poput nanošenja boli, ponižavanja, isključivanja iz grupa i aktivnosti te širenja laži o žrtvi. U nasilju postoji neravnoteža moći, što ne znači nužno da osoba koja čini nasilje mora biti tjelesno jača – njena moć može  proizlaziti iz njene veće popularnosti. Uz nasilje uživo, sve je češće prisutno elektronsko nasilje (cyberbullying). Ono se odnosi na upotrebu informacionih i komunikacionih tehnologija u svrhe kao što su zadirkivanje, ponižavanja i prijetnje. Primjeri elektronskog nasilja uključuju vrijeđanje i slanje poruka mržnje, otkrivanje ličnih informacija o drugima i sl. Takvo je nasilje jednako ozbiljno kao i drugi oblici nasilja. Psihološka istraživanja pokazuju da vršnjačko nasilje dovodi do vrlo negativnih posljedica poput niskog samopoštovanja, slabijeg školskog uspjeha, anksioznosti i depresije, pa je nužno što prije reagovati na bilo kakvo nasilje, bilo da smo mu sami izloženi ili smo svjedočili nasilju nad nekim drugim. Dobro je razgovarati o tome s odraslom osobom od povjerenja kao što je roditelj, nastavnik ili stručni suradnik u školi. Ako se radi o elektronskom nasilju i osoba to nastavi činiti nakon što smo  zatražili da prestane, treba je blokirati i prijaviti administratoru društvene mreže, odnosno internetske stranice. Važno je sačuvati dokaz o nasilju (npr. snimak zaslona), ako on postoji, kako bismo ga mogli dokazati, no snimak nasilja nikako ne valja  širiti društvenim mrežama. </p>
<p className="mb-4 text-blueGray-500">
Svjedoci smo da je posljednjih godina vršnjačko nasilje u usponu, te smo svi odgovorni preduzeti sve mjere kako se nijedno dijete ne bi osjećalo nezaštićeno. Podrška žrtvama vršnjačkog nasilja ima ključnu ulogu u prevenciji i suzbijanju ovog problema. Imperativ je razgovarati s djecom, graditi njihovo samopouzdanje kako bi mogli prepoznati loš tretman i bilo koji oblik nasilja! Osnaživanje mladih da otvoreno pričaju o svojim iskustvima i da se obrate za pomoć je od izuzetne važnosti. Nastavit ćemo sa praksom da organiziramo razne edukativne programe, radionice u našoj školi, posvećene vršnjačkom nasilju i posljedicama koje ono ima, te sa aktivnostima na kojima se uči rješavanje sukoba na miran način.
</p>
<p className="mb-4 text-blueGray-500">
Zajedno, izgradimo sigurno i ugodno okruženje u kojem svako dijete može  razvijati svoj puni potencijal, bez straha od nasilja ili diskriminacije! </p>
<p className="mb-4 text-blueGray-500">
Recite i vi – STOP NASILJU i učinimo svijet boljim mjestom, jer nasilje  nikad nije opcija rješenja problema!
</p>



</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>    
                  <video src={pink} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/> 
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
    <section data-aos="fade-in" className="pb-20 bg-white w-full">
          <div className="container mx-auto px-4">
            <span className="text-sm block my-4 p-3 text-blueGray-700 rounded border border-solid border-blueGray-100">
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">BILI  SMO U SARAJEVSKOM RATNOM TEATRU - SARTR</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={dzekii1} alt="" />
                    </div>
                    <div>
                        <img src={dzekii2} alt="" />
                    </div>
                    <div>
                        <img src={dzekii3} alt="" />
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
Učenice i učenici četvrtih razreda su završetak prvog polugodišta obilježili odlaskom u pozorište SARTR, Sarajevski ratni teatar. Za većinu je ovo pozorište bilo nepoznanica, kao i njihov način rada te umjetnički repertoar. Gledali smo avangardnu predstavu "Totovi" autora Ištvana Erkenja, u režiji Andraša Urbana. Predstava donosi mađarsku komediju sa grotesknim i satiričnim elementima, dosta humora i odličnu glumu sarajevskih glumaca.</p>
<p className="mb-4 text-blueGray-500">
Kako je ovo godina u kojoj u postmodernoj  književnosti govorimo o apsurdu i savremenoj umjetnosti bilo je ovo jedno zanimljivo i poučno iskustvo. Tekst je aktuelan i u današnjem vremenu koje pred nas postavlja razne izazove. U organizaciji i pratnji bile su profesorice Dženana Tanović-Hamzić, Azemina Hujdur i Lejla Hujdur.</p>



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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Finansijska edukacija u Agenciji za bankarstvo Federacije BiH (FBA)</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={banka1} alt="" />
                    </div>
                    <div>
                        <img src={banka2} alt="" />
                    </div>
                    <div>
                        <img src={banka3} alt="" />
                    </div>
                    <div>
                        <img src={banka4} alt="" />
                    </div>
                    <div>
                        <img src={banka5} alt="" />
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
Učenici/ce IV4 i IV3 razreda prisustvovali/e su stručnom predavanju u Agenciji za bankarstvo, u srijedu, 14.februara 2024. godine.  FBA je osnovana krajem1996. godine, kao  samostalna, nezavisna i neprofitna institucija <b>za nadzor i licenciranje banaka</b>. Od osnivanja FBA je dala puni <b>doprinos reformi bankarskog sistema</b>.  Ključna uloga FBA je  <b>održavanje i očuvanje stabilnosti bankarskog sistema</b>. Admil Nukić, pomoćnik direktora za superviziju banaka nas je upoznao sa brojnim aspektima djelovanja ove institucije. </p>
<p className="mb-4 text-blueGray-500">
Fokus djelovanja FBA je  stvaranje jakog i stabilnog bankarskog, mikrokreditnog i lizing sistema, tržišno orijentisanog i oslonjenog na međunarodne standarde poslovanja i supervizije (nadzora) banaka, mikrokreditnih organizacija i lizing društava. Sljedeći dio predavanja odnosio se na organizacione aspekte ove institucije.</p>
<p className="mb-4 text-blueGray-500">
U daljem toku sesije prezentirani su nam zadaci FBA definirani Zakonom o Agenciji za bankarstvo. FBA izdaje dozvole za osnivanje i rad banaka, nadzire poslovanje banaka, ukida dozvole za rad banaka, donosi podzakonske akte kojima se reguliše rad banaka, pokreće, upravlja  i nadzire postupke privremene uprave, likvidacije, stečaja, saniranja banaka, tijesno sarađuje sa Centralnom bankom, ...</p>
<p className="mb-4 text-blueGray-500">
Banke,  mikrokreditne organizacije i lizing društva obavezni su omogućiti Agenciji pristup cjelokupnoj dokumentaciji radi obavljanja poslova iz nadležnosti FBA.Izvještaj o radu i poslovanju FBA podnosi Parlamentu Federacije BiH putem Vlade Federacije BiH. Agencija za bankarstvo FBiH  je dio evropske mreže regulatora i supervizora, u punom kapacitetu. </p>
<p className="mb-4 text-blueGray-500">
Zahvaljujući stalnom jačanju supervizorskih kapaciteta, FBA može dati podršku drugim regulatornim supervizorskim tijelima u regionu i šire. U prilici su da umjesto traženja podrške i pomoći, FBA daje podršku drugim supervizorima i regulatorima u specifičnim oblastima regulative i supervizije. </p>
<p className="mb-4 text-blueGray-500">
Učenike/ce je posebno zanimao širok spektar profesionalnih supervizorskih  iskustava koja su nastala u periodu od proteklih tri godine, od nastavka covid-krize do iznimno efikasnog  prilagođavanja prilikama makroekonomskih poremećaja u prošloj godini. Restrukturiranjem podružnica Sberbanke zaštićeni su interesi Federacije BiH i svih klijenata u bankarskom sistemu Federacije BiH i otklonjeni svi rizici i prijetnje po finansijski sistem.</p>
<p className="mb-4 text-blueGray-500">
Zahvaljujemo se uposlenicima FBA za izniman doprinos unapređenju finansijskih kompetencija naših učenika.</p>
<p className="mb-4 text-blueGray-500">
Projekat UPOZNAJ PRIVREDU KANTONA SARAJEVO, Indira Zeković, prof.</p>


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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Obilježavanje  četrdesetogodišnjice  XIV  ZOI u Sarajevu 1984. godine</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <video src={olimpijada} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/>
                    </div>
                  </div>
                </div>
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-">
                  <div className="px-4 py-5 flex-auto">
                  <span className="text-sm my-4 p-3 text-blueGray-700 rounded  border-solid border-blueGray-100">
 
<p className="mb-4 text-blueGray-500">
XIV  Zimske olimpijske igre u Sarajevu, održane su od 8. do 19. februara 1984. godine . Bio je ovo vhunski sportski događaj u nekadašnjoj Jugoslaviji. MOK na zasjedanju u Atini, 18. maja 1978. godine,  donosi konačnu odluku o izboru Sarajeva kao domaćina XIV Zimskih olimpijskih igara. Grad je postao ogromno gradilište, nicali su prekrasni objekti: Zetra, staza za bob i sankanje, skakaonice, dvorane, „bijele pruge“, žičare, hoteli, Olimpijsko selo i novinarsko naselje sa 2.640 stanova, saobraćajnice u pravcu planina i 28 zimsko-sportskih centara, koji su potvrdili da je Olimpijada, uz sve humanističke i sportske domete, za BiH  bila i iznimno veliki razvojni iskorak. Svi sportski objekti završeni su i opremljeni do jeseni 1982.</p>
<p className="mb-4 text-blueGray-500">
Zimske olimpijske igre iz 1984. godine u Sarajevu bile su festival radosti i jedinstva u gradu. Sarajevo je tih dvanaest dana bilo, sasvim u skladu sa olimpizmom, mjesto sportskog nadmetanja, međunarodnih susreta i veselja. Cijeli jedan grad je stajao zajedno, čistio snijeg i radosno, srcem i dušom, dočekivao goste iz cijelog svijeta. Same igre nikada nisu zaboravljene. Ondašnja maskota Vučko ostala je neraskidivo povezana s vizuelnim identitetom grada, a u njemu i dan danas postoji Olimpijska ulica.  Možda je najsnažniju ocjenu Zimskih olimpijskih igara  iz 1984. godine  izrekao Samaranov nasljednik na čelu MOK-a,  Žak Roga (Jacques Rogge):</p>
<p className="mb-4 text-blueGray-500">
<i>Olimpijske igre u Sarajevu 1984.  bile su igre nadahnuća i, iznad svega, imale su svoje ljudsko lice, ono najviše što ljudski rod može doseći kada djeluje u harmoniji na zajedničkom mirnodopskom rezultatu... Sarajevo će uvijek imati specijalno mjesto u srcu olimpijskog pokreta.</i></p>
<p className="mb-4 text-blueGray-500">
Sarajevo je donijelo mir među zemljama i narodima,  dobrobit mladima koji su nosili plamen sportskih i humanih vrijednosti inspirisanih olimpizmom.  U njima je učestvovalo 49 zemalja sa 1437 sportista u 39 disciplina, te 1254 trenera i rukovodilaca. Pratilo ih je 7.825 akreditovanih novinara i tehničkog osoblja iz 760 novinskih redakcija i 67 TV kuća. Evidentirano je 696.000 gledalaca i 10.450 volontera, koji su dali sve što su mogli da Sarajevo izgleda bajkovito i da ZOI. budu do tada najbolje organizovane u historiji zimskih olimpijada.</p>
<p className="mb-4 text-blueGray-500">
<b>U četvrtak,  08. februara, profesorice  Alma Živojević i Ankica Zulčić sa učenicima/cama I5 razreda, te marketinškom sekcijom, su priredili/le prigodne video sadržaje Zimske olimpijade iz 1984. godine, te koreografiju uz muziku otvaranja igara i donijeli/le nam atmosferu i radost te nezaboravne sarajevske zime. </b></p>
<p className="mb-4 text-blueGray-500">
<b>Zahvaljujemo se profesoricama i učenicima/cama koji su nam oživjeli sjećanja i ponos na ovaj nezaboravan olimpijski podvig našeg grada. Nježna „Pahuljica“ Miroslava Antonića i odvažni „Vučko“ Jože Trobeca, znak i maskota Igara, svjedočiće o tome vijekovima.</b></p>


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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Posjeta Olimpijskom muzeju Sarajeva</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={alma1} alt="" />
                    </div>
                    <div>
                        <img src={alma2} alt="" />
                    </div>
                    <div>
                        <img src={alma3} alt="" />
                    </div>
                    <div>
                        <img src={alma4} alt="" />
                    </div>
                    <div>
                        <img src={alma5} alt="" />
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
U srijedu, 14. februara 2024. godine,  profesorica Alma Karamujić, zajedno sa I2 razredom, posjetila je Olimpijski Muzej u Sarajevu.</p>
<p className="mb-4 text-blueGray-500">
Zgrada muzeja je podignuta na samom rubu padine sa prekrasnim pogledom na grad. Građena je po ugledu na dvorove i palate aristrokratije. Ovaj zamak u malom, fascinantan zbog bogatih ukrasa alpsko-folklornih stilskih elemenata i njemačke gotike, djelo izuzetnog arhitekte Karla Paržika, početkom rata u Sarajevu je granatiran i uništen. Obnova je potrajala do  2020. godine, kad je postao sjedište i Olimpijske akademije BiH,  prema uzoru na nacionalne olimpijske komitete u svijetu koji posjeduju takvu instituciju.</p>
<p className="mb-4 text-blueGray-500">
Olimpijski  muzej, kroz sport i umjetnost, promovira duh olimpizma, olimpijske vrijednosti, kreativnost, mladost i ostale pozitivne tekovine XIV Zimskih olimpijskih igara. Kroz segment sporta u Muzeju je osvijetljena priprema, organizacija i realizacija XIV ZOI u Sarajevu, a kroz segment umjetnosti Mapa svjetske grafike  Art and Sport sa djelima umjetnika kao što su Andy Warhol, Henry Moor, Michelangelo Pistoleto, kao i kolekcija savremenih umjetnika BiH, među kojima su djela Mersada Berbera, Boška Kućanskog,  Afana Ramića, Maria Mikulića, Mehmeda Zaimovića, itd. Olimpijski muzej u Sarajevu posjeduje opremu za video projekcije, te su učenicima  prezentirani filmovi sa otvaranja, trajanja i zatvaranja XIV ZOI. U okviru djelatnosti Olimpijskog muzeja prezentiraju se periodično razni programi, izložbe, predavanja i konferencije na temu sporta i umjetnosti. </p>
<p className="mb-4 text-blueGray-500">
Bile su ovo inspirativne lekcije našim učenicima iz naše slavne olimpijske prošlosti!</p>


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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Inspektori MUP-a KS održali predavanje na temu <b><i>Prevencija  maloljetničkog prestupništva i nasilja</i></b></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={nasilje1} alt="" />
                    </div>
                    <div>
                        <img src={nasilje2} alt="" />
                    </div>
                    <div>
                        <img src={nasilje3} alt="" />
                    </div>
                    <div>
                        <img src={nasilje4} alt="" />
                    </div>
                    <div>
                        <img src={nasilje5} alt="" />
                    </div>
                    <div>
                        <img src={nasilje6} alt="" />
                    </div>
                    <div>
                        <img src={nasilje7} alt="" />
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
15.02. 2024. godine, u multimedijalnoj sali naše škole, održano je edukativno predavanje na temu <i>Prevencija  maloljetničkog prestupništva i nasilja</i>. Predavači su bili Hasan Begić, inspektor MUP-a Kantona Sarajevo i koordinator za maloljetničko prestupništvo i nasilje i Vildana Šedo, inspektorica MUP-a KS.</p>
<p className="mb-4 text-blueGray-500">
Predavači su se posebno osvrnuli na ulogu policije u prevenciji maloljetničkog prestupništva i nasilja. Cilj je da mladi prepoznaju policiju kao resurs koji im stoji na raspolaganju za nošenje sa situacijama koje i sami procjenjuju opasnima.</p>
<p className="mb-4 text-blueGray-500">
Nastojali su unaprijediti stavove učenika/učenica o policiji, njihova znanja o njenoj ulozi i mogućnostima saradnje, povjerenje u pripadnike policije i spremnost na obraćanje policiji u situacijama ugrožene sigurnosti i percipirane opasnosti. S druge strane, današnja sesija će i policiji pomoći u osmišljavanju budućih programa za prevenciju maloljetničkog prestupništva. Policija u zajednici nova je filozofija policijskog djelovanja, a to podrazumijeva povjerenje građana u policiju i njihov osjećaj sigurnosti.</p>
<p className="mb-4 text-blueGray-500">
Jasno je da prevencija maloljetničkog prestupništva mora biti sistemski organizovana i planski koordinirana sinergija svih organa, ustanova i službi u čijoj je nadežnosti rad sa mladima, fokusiran na prevenciju i suzbijanje pojava prestupništva.</p>
<p className="mb-4 text-blueGray-500">
Niko se ne rađa kao kriminalac! </p>
<p className="mb-4 text-blueGray-500">
Učinimo svi zajedno da na vrijeme reagujemo na signale koje mlada osoba šalje porodici, školi, vršnjacima, tražeći pomoć i podršku!</p>
<p className="mb-4 text-blueGray-500">
I ova edukativna radionica o saradnji sa policijom i štetnosti kaznenih djela je doprinos da mladi izrastu  u odgovorne građane!</p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">SEŠ na projekciji filma <i>Deblokada</i>, Jasmile Žbanić </h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={kino1} alt="" />
                    </div>
                    <div>
                        <img src={kino2} alt="" />
                    </div>
                    <div>
                        <img src={kino3} alt="" />
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
U povodu obilježavanja četrdesetogodišnjice održavanja  Zimskih olimpijskih igara u Sarajevu, učenici/ce trećih razreda, psihologinja Marina Rubić i Almina Hodžić, socijalna radnica naše škole, prisustvovali su projekciji filma Deblokada redateljice Jasmile Žbanić, u kinu Meeting point. Zanimljivo je da je stvaranje ovog filma bio unikatan proces jer su u stvaranju filma mogli učestvovati svi građani sa pričama, fotografijama...</p>
<p className="mb-4 text-blueGray-500">
Film je ovo o Emeriku Blumu, legendarnom direktoru Energoinvesta i gradonačelniku Sarajeva. Bio je vizionar i čovjek od akcije. Emerik Blum,  Sarajlija genijalnih poslovnih i razvojnih vizija, je u ratom razrušenoj Bosni i Hercegovini od malog biroa s nekoliko zaposlenih napravio veliku i uspješnu svjetsku kompaniju Energoinvest koja je vodila Bosnu i Hercegovinu i cijelu Jugoslaviju naprijed, u  danas nezamislive, uspjehe i prosperitet.  Kroz unikatni, samoupravni model poslovanja, različit od socijalizma Istočnog bloka i kapitalističkog Zapada, kompanija donosi ogroman profit i progres čitavoj Jugoslaviji. Njegov Energoinvest je imao milijarde dolara prometa. Poslovao je u više od 20 zemalja, od Meksika do Malezije. Direktor Blum i njegovi saradnici stvaraju čudo! Kako je to bilo moguće? On nikad nije pristajao na male uspjehe već insistiranjem na znanju kao temelju, stremio i dosezao samo velike ciljeve, a ljudima iz vlastite poslovne sredine omogućavao da se edukuju u zemlji i inozemstvu ako su oni to željeli i htjeli. Njegova logika je bila da među stotinu edukovanih, jedan će biti genijalac i 'povući naprijed ostalih devedeset', kazala je jedna od svjedokinja u filmu, sudionica Energoinvestovog gigantskog uspjeha.</p>
<p className="mb-4 text-blueGray-500">
I da li su građani Bosne i Hercegovine zaboravili ko su i šta su nekada bili uz ljude kao što je Emerik Blum?, pitanja su koja postavlja autor Jasmila Žbanić. </p>
<p className="mb-4 text-blueGray-500">
Na kraju projekcije uslijedila je diskusija i učenici/ce su mogli/e da postavljaju pitanja glavnim akterima filma, što im je bilo posebno zanimljivo. Posebno je važno da film vide mladi ljudi, da vide da je postojala neka drugačija, bolja, BiH. Film o Blumu nije tu samo da pokaže kakvo čudo je bilo moguće u Bosni prije četrdeset  godina, nego da se zapitamo – da li je to čudo moguće danas? </p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Promocija naše škole u <i>Osnovnoj školi  Alija Nametak</i></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={alija1} alt="" />
                    </div>
                    <div>
                        <img src={alija2} alt="" />
                    </div>
                    <div>
                        <img src={alija3} alt="" />
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
Učenice IV1 razreda Šišić Emela, Kazazović Sajra i Mešak Medina, sa profesoricom Avdagić Lejlom, u utorak, 6. februara 2024. godine su posjetili <i>Osnovnu školu Alija Nametak</i>.</p>
<p className="mb-4 text-blueGray-500">
Sa mnogo entuzijazma i ljubavi prema svojoj školi, učenice su promovirale našu školu osnovcima.</p>
<p className="mb-4 text-blueGray-500">
Promociji naše Škole prisustvovali/e su učenici/ce završnog devetog razreda, tri odjeljenja. </p>
<p className="mb-4 text-blueGray-500">
U jednosatnoj promociji, prisutnim smo promovirali smjerove ekonomskog i bankarskog tehničara, sekcije, projekte, naše linkove sa institucijama, preduzećima, bankama, izlete, putovanja i ostale sadržaje našeg djelovanja kao škole u kreiranju obrazovanja i odgoja utemeljenog na potrebama naših učenika. Cilj nam je pružiti našim učenicima bogato obrazovno iskustvo kroz koje učenici mogu napredovati, razvijati se i realizirati svoj puni potencijal. Objasnili smo da je fokus našeg pristupa  na potrebama djeteta u cjelini, zdravlju, sigurnosti i psihičkom blagostanju djeteta, a ne samo na onom što se 'tiče škole'. Kratko, radimo da našim učenicima škola bude radost.</p>
<p className="mb-4 text-blueGray-500">
Niko se ne rađa kao kriminalac! </p>
<p className="mb-4 text-blueGray-500">
Prisutne smo pozvali da budu gosti edukativnog, promotivnog i prodajnog sajma <b>EKSPERT</b> koji priređujemo u našoj školi 7. i 8. marta. Sajam je  naš doprinos promociji uspješnih poslovnih priča i gradnja naših linkova sa privredom i institucijama. Naši učenici su glavni nosioci aktivnosti sajma i ovo je za njih prilika da povezuju teorijsko i praktično znanje.</p>
<p className="mb-4 text-blueGray-500">
Prisutni/e su pokazali/e stanovitu zainteresiranost da budu učenici/ce naše Škole i u nastavku promocije postavili brojna pitanja.</p>
<p className="mb-4 text-blueGray-500">
Na mladima svijet ostaje! </p>
<p className="mb-4 text-blueGray-500">
Učinimo sve da postanu kvalitetni ljudi!</p>

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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Ajla Karup, učenica IV4 razreda naše škole, osvojila prvo mjesto na HUB debati na njemačkom jeziku</h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={ajla} alt="" />
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
Homework HUB i JU Međunarodni centar za djecu i omladinu Novo Sarajevo realizovali su prvu HUB debatu na njemačkom jeziku za srednjoškolce/ke Kantona Sarajevo.</p>
<p className="mb-4 text-blueGray-500">
Prijavljeni učenici/ce,  njih petnaest iz srednjih škola sa područja Kantona Sarajevo,  u subotu, 10. februara, prisustvovali su HUB debati  u HUB Dječjoj kući. Koordinatorica ove aktivnosti bila je HUB članica tima, Alma Muharemović.</p>
<p className="mb-4 text-blueGray-500">
Teme HUB debate na njemačkom jeziku:</p>
<p className="mb-4 text-blueGray-500">
1.	Je li uredu da učenici i učenice koriste vještačku inteligenciju prilikom učenja?</p>
<p className="mb-4 text-blueGray-500">
2.	Da li žene imaju mjesto u nauci?</p>
<p className="mb-4 text-blueGray-500">
3.	Da li je broj muškaraca u nauci veći od broja žena?</p>
<p className="mb-4 text-blueGray-500">
4.	Dobijaju li muškarci više nagrada za njihov rad u nauci nego žene?</p>
<p className="mb-4 text-blueGray-500">
5.	Jesu li socijalne mreže štetne za psihičko zdravlje?</p>
<p className="mb-4 text-blueGray-500">
Ambasada Njemačke u BiH  je omogućila prigodne poklone za pet najboljih učenika/ca.</p>
<p className="mb-4 text-blueGray-500">
Za sve učesnike, bez sumnje,  bilo je ovo jedno izuzetno iskustvo. Bila je ovo i prilika da vidimo kako razmišljaju pripadnici generacije Z, generacije bržih mreža i formata kao što su Instagram, TikTok, Youtube shorts-a gdje se video i prenos informacija sve više skraćuje. Oni se vode kao prva digitalna generacija jer su odrasli sa tabletima i telefonima u rukama i životi su im od najranije dobi vezani za računare i mobitele. Oni su generacija  Z ili Zoomersi! Nevjerovatan razvoj tehnologije otvorio im je prozor u cijeli svijet, u novo, u drugačije. Upoznavanje novih osoba, navika, običaja, nepoznatih im kultura, stavova i vrijednosti, drugačijih razmišljanja, putovanja i spoznaja – ovoj je generaciji informacija mnogo dostupnija, svijet im je na dlanu.</p>
<p className="mb-4 text-blueGray-500">
Evidentno, pokazali su impresivnu moć prosuđivanja i kritičkog razmišljanja, savjesnog ponašanja, zbog čega su većinski bezrezervni individualci koji argumentovano kritikuju sisteme, države, ...
Spomenemo predstavnicu aktivista Gen Z, Gretu Thunberg koja je već sa 18 godina držala govore koji su promjenili globalnu osviještenost o klimatskim promjenama. Prisutni Zoomersi na HUB debati pokazali su da su spremni da zaista mijenjaju stvari, a ne da samo pričaju o promjenama. Vrlo su poduzetni i svjesni, ozbiljnije shvataju edukaciju i dokazali su nam da floskula na mladima svijet ostaje, nije isprazna.
</p>
<p className="mb-4 text-blueGray-500">
Nagrađeni učesnici HUB debate:</p>
<p className="mb-4 text-blueGray-500">
<b><i>1.	Ajla Karup, Srednja ekonomska škola Sarajevo</i></b></p>
<p className="mb-4 text-blueGray-500">
2.	Semina Šatara, Prva gimnazija Sarajevo</p>
<p className="mb-4 text-blueGray-500">
3.	Emilin Macić, Treća gimnazija Sarajevo</p>
<p className="mb-4 text-blueGray-500">
4.	Muris Čerkes, Druga gimnazija Sarajevo</p>
<p className="mb-4 text-blueGray-500">
5.	Semin Jaquet, Prva gimnazija Sarajevo</p>
<p className="mb-4 text-blueGray-500">
Čestitamo našoj Ajli Karup, učenici IV4 razreda, koja nas redovno obraduje nagradama sa  takmičenja u znanju njemačkog jezika!</p>
<p className="mb-4 text-blueGray-500">
Sve čestitke i  za njenu izuzetnu profesoricu njemačkog jezika Aidu Babić!</p>
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
              <h6 className="text-xl mb-1 font-semibold text-center uppercase">Posjeta <i><b>Muzeju Sarajevskog atentata (Sarajevo 1878-1918)</b></i></h6>
            </span>
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full px-6 text-center md:w-6/12">
                <div className="relative flex flex-col min-w-0 break-words bg-blueGray-200 w-full mb-8 shadow-lg">
                  <div className="py-5 flex-auto">
                  <Carousel autoPlay interval="10000" transitionTime="10000" infiniteLoop>
                      
                    <div>
                        <img src={muza1} alt="" />
                    </div>
                    <div>
                        <img src={muza2} alt="" />
                    </div>
                    <div>
                        <img src={muza3} alt="" />
                    </div>
                    <div>
                        <img src={muza4} alt="" />
                    </div>
                    <div>
                        <img src={muza5} alt="" />
                    </div>
                    <div>
                        <img src={muza6} alt="" />
                    </div>
                    <div>
                        <img src={muza7} alt="" />
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
Učenici/ce IV4  i IV3 razreda posjetili/le su Muzej Sarajevskog atentata, u  utorak 6.2. 2024. godine.</p>
<p className="mb-4 text-blueGray-500">
Stalna izložbena postavka <b><i>Sarajevo 1878-1918</i></b> čuva sjećanje na 40 godina austrougarske okupacije Bosne i Hercegovine i na događaj koji je bio povod za početak Prvog svjetskog rata, kada su ubijeni prijestolonasljednik Austrougarske monarhije Franc Ferdinand i njegova supruga Sofija. Depandans <b><i>Muzej Sarajevo 1878-1918</i></b> nalazi se u zgradi ispred koje je izvršen atentat i u njoj su na muzeološki način prezentirani historijski događaji. Postavka prikazuje izdavaštvo iz tog perioda, kulturu življenja, dokaze o osnivanju brojnih civilnih društva, likovnu umjetnost, arhitekturu, razvoj infrastrukture i administracije, te sve ono što je vezano za Sarajevski atentat, koji se dogodio 28. juna 1914. godine. Imali smo priliku pogledati originalno oružje korišteno tokom pružanja otpora okupaciji iz 1878. godine. Tu je i slika prvog gradonačelnika Sarajeva Mustaj-bega Fadilpašića,  jednog od organizatora otpora. Kada je u pitanju arhitektura iz tog perioda, Muzej posjeduje nekoliko fotografija reprezentativnih objekata izgrađenih tokom austrougarske okupacije poput Zemaljskog muzeja, Vijećnice ili prve hidrocentrale.</p>
<p className="mb-4 text-blueGray-500">
BiH je u sastavu Monarhije bila  zasebno područje, imala Bosanski sabor, odnosno parlament koji je bio smješten u Vijećnici. U Muzeju Sarajevo su dokazi o autonomnosti BiH u sastavu Monarhije poput grba i zastave, te putnih isprava iz tog perioda. Prezentirane su i uniforme bosanskih regimenata iz Prvog svjetskog rata. BiH je imala četiri regimente i najvažnija je bila Druga bošnjačka regimenta. Izložene su originalne svečane uniforme i pješadijsko oružje vojnika. U izložbenom prostoru postavljene  su lutke koje prikazuju Franca Ferdinanda i Sofiju u prirodnoj veličini.</p>
<p className="mb-4 text-blueGray-500">
Posjetitelji mogu vidjeti i tip pištolja kojim je izvršen atentat, kao i fotografije kretanja prijestolonasljednika u automobilu od Vijećnice do mjesta gdje je ubijen. Tu je i fotografija spomenika posvećenog Francu Ferdinandu i Sofiji napravljenog 1917. godine, koji je uklonjen dolaskom Kraljevine SHS. Posebnu priču imaju u kamenu izlivene Gavrilove stope.  Muzej je posljednjih godina osavremenjen modernom tehnologijom, gdje posjetitelji mogu pogledati brojne dokumente u elektronskoj formi.</p>
<p className="mb-4 text-blueGray-500">
U jednom dijelu muzeja prikazuju se scene iz igranog filma o Sarajevskom atentatu kako bi se na savremeniji način pokazao čin atentata, a tu je i originalni kratki snimak ulaska Franca i Sofije u Vijećnicu. </p>
<p className="mb-4 text-blueGray-500">
Preporučujemo da svakako posjetite muzejsku postavku <i><b>Sarajevo 1878-1918!</b></i></p>
<p className="mb-4 text-blueGray-500">
<i><b>Projekat Muzeji Sarajeva, Indira Zeković, prof.</b></i></p>
</span>
                  </div>
                  <div className="w-full md:w-9/12 ml-auto mr-auto px-4" style={{paddingBottom: "5%"}}>   
                  <video src={muza} width="800" height="600" controls="controls" className="w-full align-middle rounded-lg"/> 
               
           </div>
                </div>
              </div>
            </div>
            </div>
          </section>
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