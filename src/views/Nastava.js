import React from "react";
import Video2 from './images/VideoN3.webp';
import Video4 from './images/VideoN4.webp';
import Video1 from './images/VideoN1.webp';
import Video3 from './images/VideoN2.webp';
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
          <div className="container mx-auto px-4 text-center md:text-left">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Predmeti koji se izučavaju u prvom razredu:</h3>
              <ul className="text-lg leading-relaxed mt-4 mb-4">
                <li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li>
                <li>Engleski jezik</li>
                <li>Njemački jezik</li>
                <li>Tjelesni i zdravstveni odgoj </li>
                <li>Matematika</li>
                <li>Historija/Povijest</li>
                <li>Vjeronauka ili Kultura  religija</li>
                <li>Informatika</li>
                <li>Fizika (Osnove ekonomije za smjer bankarski tehničar)</li>
                <li>Ekologija</li>
                <li>Geografija i ekonomska geografija</li>
                <li>Hemija i tehnologija sa poznavanjem robe</li>
                <li>Daktilografija sa poslovnim komunikacijama</li>
                <li>Tehnike bankarskog računanja (za smjer bankarski tehničar)</li>
                <li>Bankarsko poslovanje (za smjer bankarski tehničar)</li>
              </ul>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Video1}
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

          <div  data-aos="fade-in" className="container mx-auto px-4 text-center md:text-left" style={{marginBottom: "10%"}}>
            <div className="items-center flex flex-wrap">
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  style={{marginBottom: "10%"}}
                  src={Video2}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
                <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">Predmeti koji se izučavaju u drugom razredu:</h3>
                <ul className="mt-4 text-lg leading-relaxed"><li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li>
                <li>Engleski jezik</li>
                <li>Njemački jezik (Poslovni njemački jezik za smjer bankarski tehničar)</li>
                <li>Tjelesni i zdravstveni odgoj </li>
                <li>Matematika</li>
                <li>Historija/Povijest (Bankarsko poslovanje za smjer bankarski tehničar)</li>
                <li>Vjeronauka ili Kultura  religija</li>
                <li>Informatika (Poslovna informatika za smjer bankarski tehničar)</li>
                <li>Marketing (Marketing u bankarstvu za smjer bankarski tehničar</li>
                <li>Biznis ekonomija (Tehnike bankarskog računanja za smjer bankarski tehničar)</li>
                <li>Praktična nastava u bankama (za smjer bankarski tehničar)</li></ul>
                  
                </div>
              </div>
            </div>
          </div>
        </section>
        <section data-aos="fade-in" className="pb-20 bg-blueGray-200 -mt-24" style={{paddingTop: "15%"}}>
          <div className="container mx-auto px-4 text-center md:text-left">
            <div className="flex flex-wrap items-center mt-32">
              <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <h3 className="text-3xl mb-2 font-semibold leading-normal">Predmeti koji se izučavaju u trećem razredu:</h3>
              <ul className="text-lg leading-relaxed mt-4 mb-4">
                <li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li>
                <li>Engleski jezik</li>
                <li>Njemački jezik (Poslovni njemački jezik)</li>
                <li>Tjelesni i zdravstveni odgoj</li>
                <li>Matematika</li>
                <li>Vjeronauka ili Kultura  religija</li>
                <li>Građansko obrazovanje/Demokracija i ljudska prava</li>
                <li>Marketing (Bankarsko poslovanje za smjer bankarski tehničar)</li>
                <li>Biznis ekonomija</li>
                <li>Informatičke tehnologije</li>
                <li>Ekonomska matematika (Uvod u bankarsko poslovanje za smjer bankarski tehničar)</li>
                <li>Praktična nastava u bankama (za smjer bankarski tehničar)</li></ul>
              </div>
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  src={Video3}
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
              <div className="w-full md:w-4/12 ml-auto mr-auto px-4">
                <img
                  alt="..."
                  className="max-w-full rounded-lg shadow-lg"
                  style={{marginBottom: "10%"}}
                  src={Video4}
                />
              </div>
              <div className="w-full md:w-5/12 ml-auto mr-auto px-4 text-center md:text-left">
                <div className="md:pr-12">
                <h3 className="text-3xl font-semibold">Predmeti koji se izučavaju u četvrtom razredu:</h3>
                <ul className="mt-4 text-lg leading-relaxed">
                  <li>Bosanski jezik i knjiženost/Hrvatski jezik i knjiženost/Srpski jezik i knjiženost</li>
                  <li>Engleski jezik</li>
                  <li>Njemački jezik (Poslovni engleski jezik za smjer bankarski tehničar)</li>
                  <li>Tjelesni i zdravstveni odgoj</li>
                  <li>Matematika</li>
                  <li>Vjeronauka ili Kultura  religija</li>
                  <li>Biznis ekonomija</li>
                  <li>Međunarodna ekonomija (Bankarsko poslovanje za smjer bankarski tehničar)</li>
                  <li>Evropska unija i međunarodna saradnja (Poslovno pravo za smjer bankarski tehničar)</li>
                  <li>Privredno pravo</li>
                  <li>Izborni predmet (Knjigovodstvo, Bankarsko poslovanje, Preduzeće za vježbu, Matematika) za smjer bankarski tehničar</li>
                  <li>Praktična nastava u bankama (za smjer bankarski tehničar)</li></ul>
                  
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
