import React from "react";
import prvirazred from './images/I razred.png';
import drugirazred from './images/II razred.png';
import trecirazred from './images/III razred.png';
import cetvrtirazred from './images/IV razred.png';
// components
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import NastavaNav from "components/Navbars/NastavaNavbar";
import Footer from "components/Footers/Footer.js";

export default function Nastava() {
  useEffect(() => {
    AOS.init({duration: 2000});
  }, []);
  return (
    <>
      <NastavaNav transparent />
      <main>

        <section className="pb-20 bg-blueGray-200 -mt-24" style={{paddingTop: "15%"}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Predmeti koji se izučavaju u prvom razredu (<span style={{color: "rgb(254, 125, 1)"}}>Bankarski tehničar</span>, <span style={{color: "rgb(146, 208, 80)"}}>Ekonomski tehničar</span>, <span>Oba smjera</span>):</h3>
              <ul className="text-lg leading-relaxed mt-4 mb-4">
                <li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li>
                <li>Engleski jezik</li>
                <li>Njemački jezik</li>
                <li>Tjelesni i zdravstveni odgoj </li>
                <li>Matematika</li>
                <li>Historija/Povijest</li>
                <li>Vjeronauka ili Kultura  religija</li>
                <li>Informatika</li>
                <li><span style={{color: "rgb(146, 208, 80)"}}>Fizika</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Osnove ekonomije</span></li>
                <li>Ekologija</li>
                <li>Geografija i ekonomska geografija</li>
                <li>Hemija i tehnologija sa poznavanjem robe</li>
                <li>Daktilografija sa poslovnim komunikacijama</li>
                <li style={{color: "rgb(254, 125, 1)"}}>Tehnike bankarskog računanja</li>
                <li style={{color: "rgb(254, 125, 1)"}}>Bankarsko poslovanje</li>
              </ul>
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={prvirazred}
                />
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

          <div  data-aos="fade-in" className="container mx-auto px-4" style={{marginBottom: "10%"}}>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  style={{marginBottom: "10%"}}
                  src={drugirazred}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">Predmeti koji se izučavaju u drugom razredu (<span style={{color: "rgb(254, 125, 1)"}}>Bankarski tehničar</span>, <span style={{color: "rgb(146, 208, 80)"}}>Ekonomski tehničar</span>, <span>Oba smjera</span>):</h3>
                <ul className="mt-4 text-lg leading-relaxed"><li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li><li>Engleski jezik</li><li><span style={{color: "rgb(146, 208, 80)"}}>Njemački jezik</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Poslovni njemački jezik</span></li><li>Tjelesni i zdravstveni odgoj </li><li>Matematika</li><li><span style={{color: "rgb(146, 208, 80)"}}>Historija/Povijest</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Bankarsko poslovanje</span></li><li>Vjeronauka ili Kultura  religija</li><li><span style={{color: "rgb(146, 208, 80)"}}>Informatika</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Poslovna informatika</span></li><li><span style={{color: "rgb(146, 208, 80)"}}>Marketing</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Marketing u bankarstvu</span></li><li><span style={{color: "rgb(146, 208, 80)"}}>Biznis ekonomija</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Tehnike bankarskog računanja</span></li><li style={{color: "rgb(254, 125, 1)"}}>Praktična nastava u bankama</li></ul>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-in" className="pb-20 bg-blueGray-200 -mt-24" style={{paddingTop: "15%"}}>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Predmeti koji se izučavaju u trećem razredu (<span style={{color: "rgb(254, 125, 1)"}}>Bankarski tehničar</span>, <span style={{color: "rgb(146, 208, 80)"}}>Ekonomski tehničar</span>, <span>Oba smjera</span>):</h3>
              <ul className="text-lg leading-relaxed mt-4 mb-4"><li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li><li>Engleski jezik</li><li><span style={{color: "rgb(146, 208, 80)"}}>Njemački jezik</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Poslovni njemački jezik</span></li><li>Tjelesni i zdravstveni odgoj </li><li>Matematika</li><li>Vjeronauka ili Kultura  religija</li><li>Građansko obrazovanje/Demokracija i ljudska prava</li><li><span style={{color: "rgb(146, 208, 80)"}}>Marketing</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Bankarsko poslovanje</span></li><li style={{color: "rgb(146, 208, 80)"}}><span>Biznis ekonomija</span></li><li style={{color: "rgb(146, 208, 80)"}}>Informatičke tehnologije</li><li><span style={{color: "rgb(146, 208, 80)"}}>Ekonomska matematika</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Uvod u bankarsko poslovanje</span></li><li style={{color: "rgb(254, 125, 1)"}}>Praktična nastava u bankama</li></ul>
              </div>
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={trecirazred}
                />
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

          <div  data-aos="fade-in" className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-6/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  style={{marginBottom: "10%"}}
                  src={cetvrtirazred}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">Predmeti koji se izučavaju u četvrtom razredu (<span style={{color: "rgb(254, 125, 1)"}}>Bankarski tehničar</span>, <span style={{color: "rgb(146, 208, 80)"}}>Ekonomski tehničar</span>, <span>Oba smjera</span>):</h3>
                <ul className="mt-4 text-lg leading-relaxed"><li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li><li>Engleski jezik</li><li><span style={{color: "rgb(146, 208, 80)"}}>Njemački jezik</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Poslovni engleski jezik</span></li><li>Tjelesni i zdravstveni odgoj </li><li style={{color: "rgb(254, 125, 1)"}}>Matematika</li><li>Vjeronauka ili Kultura  religija</li><li style={{color: "rgb(146, 208, 80)"}}>Biznis ekonomija</li><li><span style={{color: "rgb(146, 208, 80)"}}>Međunarodna ekonomija</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Bankarsko poslovanje</span> </li><li><span style={{color: "rgb(146, 208, 80)"}}>Evropska unija i međunarodna saradnja</span> ili <span style={{color: "rgb(254, 125, 1)"}}>Poslovno pravo</span></li><li style={{color: "rgb(146, 208, 80)"}}>Privredno pravo</li><li style={{color: "rgb(146, 208, 80)"}}>Izborni predmet (Knjigovodstvo, Bankarsko poslovanje. Preduzeće za vježbu, Matematika)</li><li style={{color: "rgb(254, 125, 1)"}}>Praktična nastava u bankama</li></ul>
                  
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
