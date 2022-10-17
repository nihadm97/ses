import React from "react";

import UpisNavbar from "components/Navbars/UpisNavbar";
import Footer from "components/Footers/Footer.js";
import direktorica from './images/direktorica.jpg';
import Background from './images/zeleno.jpg'
import Background1 from './images/zeleno1.jpg'
import background from "./images/pozadina.jpg"

import { db } from "./firebase-config";
import { collection, getDocs} from "firebase/firestore";
import { useState, useEffect } from "react";

export default function Uposleni() {
  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "uposlenici");
  const [users1, setUsers1] = useState([]);
  const usersCollectionRef1 = collection(db, "saradnici");

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef1);
      setUsers1(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getUsers();
  }, []);
  return (
    <>
      <UpisNavbar transparent/>
      <main className="profile-page" style={{marginTop:"-5%"}}>
        <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${background})` }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            ></span>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
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
        </section>
        <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64" style={{padding: "5%", marginBottom: "15%", backgroundImage: `url(${Background1})`, backgroundSize: 'cover', alignSelf: 'center'}}>
              <div className="px-8">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center text-center">
                    <div className="relative">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    Amira Kadrispahić
                  </h3>
                    <img src={direktorica}/>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    Direktorica
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    Profesor islamske teologije i Magistar pedagogije
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center ">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      Drage učenice i dragi učenici, roditelji, uposlenice i uposlenici, partneri, a posebno, dragi heroji za katedrom  i najvažniji nosioci društva u cjelini - profesorice i profesori! Srednja ekonomska škola, Sarajevo je od samog postojanja pa sve do danas iznjedrila brojne generacije izuzetno uspješnih učenika. Svjesni ubrzanih tehničkih i tehnoloških promjena u društvu nastojimo biti u trendu i pratiti savremene metode učenja i podučavanja. Nastava je u našoj školi usmjerena na učenika, a životni učitelji su voditelji nastavnog procesa. Učenik istražuje, analizira, diskutuje i ima slobodu da dostojanstveno iznosi vlastito mišljenje. Velika važnost pridaje se volji i emociji učenika, što rezultira interdisciplinarnim pristupom nastavnim sadržajima, ugodnom emocionalnom atmosferom, multimedijalnim učenjem i dostizanjem individualnih maksimuma.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
                </div>
                
          {users.map(obj  => 
              <div>
              <div className="relative inline-flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64" style={{padding: "5%", marginBottom: "15%", backgroundImage: `url(${Background})`, backgroundSize: 'cover', marginTop:"-5%", alignSelf: 'center'}}>
              <div className="px-8">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center text-center">
                    <div className="relative">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {obj.Ime}
                  </h3>
                    <img src={obj.Slika}/>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {obj.Pozicija}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                    {obj.Titula}
                  </div>
                </div>
              </div>
                </div>
                </div>
                )}
              {users1.map(obj  => 
              <div>
              <div className="relative inline-flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64" style={{padding: "5%", marginBottom: "15%", backgroundImage: `url(${Background})`, backgroundSize: 'cover', marginTop:"-5%", alignSelf: 'center'}}>
              <div className="px-8">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center text-center">
                    <div className="relative">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-2">
                    {obj.Ime}
                  </h3>
                    <img src={obj.Slika}/>
                    </div>
                  </div>
                </div>
                <div className="text-center mt-12">
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                    {obj.Pozicija}
                  </div>
                </div>
              </div>
                </div>
                </div>
                )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
