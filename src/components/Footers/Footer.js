import React from "react";
import brošura from './brošura.webp';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer className="relative bg-blueGray-200 pt-8 pb-6">
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
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-center lg:text-left">
            <div className="w-full lg:w-6/12 px-4 ml-auto">
              <h4 className="text-4xl font-semibold">Pogledajte našu digitalnu brošuru!</h4><br></br>
              <a href="https://drive.google.com/file/d/1d_S55STNrqjxftG9UGZGNowqN_J253F9/view?usp=sharing" target="_blank" rel="noreferrer">
              <img src={brošura} alt="Logo" className="lg:w-4/12 px-2 ml-auto inline-block"/></a>
              
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap items-top mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <br></br>
                  <br></br>
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    ADRESA
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        JU Srednja ekonomska škola, Sarajevo
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Zmaja od Bosne 39
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        71000, Sarajevo
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                      >
                        Bosna i Hercegovina
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <br></br>
                  <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                    OSTALE REFERENCE
                  </span>
                  <ul className="list-unstyled">
                  <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://jn.ks.gov.ba/pretraga/31"
                      >
                        Javne nabavke
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="https://drive.google.com/file/d/1r4Cfg5sNGS8AGF8yw6uYojIBixihhP-2/view"
                      >
                        Nabavka opreme za fuskulturnu salu
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        href="http://upis.unsa.ba/"
                      >
                        Upis na fakultet
                      </a>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/uposlenici"
                      >
                        Radnice i radnici
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm"
                        to="/kontakt"
                      >
                        Kontaktirajte nas
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-blueGray-300" />
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4 mx-auto text-center">
              <div className="text-sm text-blueGray-500 font-semibold py-1">
                Copyright © {new Date().getFullYear()} by{" "}
                <a
                  href="https://nihadm97.github.io/Portfolio/#/"
                  className="text-blueGray-500 hover:text-blueGray-800"
                >
                  Nihad Mehmedović
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
