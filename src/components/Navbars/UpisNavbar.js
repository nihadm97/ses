/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import etwi1 from './etwi1.jpg';
import etwi2 from './etwi2.png';




export default function Upis(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <div className="flex flex-wrap py-2">
        <div className="w-full">
          <nav className="fixed z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg shadow" style={{backgroundColor: "rgba(0, 0, 0, 0.5)"}}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <h2 className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75" style={{color: '#92d050'}} >SREDNJA EKONOMSKA ŠKOLA</h2>
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
                  style={{backgroundColor: '#92d050'}}
                >
                  <i className="fas fa-bars"></i>
                </button>
              </div>
              <div
                className={
                  "lg:flex flex-grow items-center" +
                  (menuOpen ? " flex" : " hidden")
                  
                }
                id="example-navbar-info"
              >
                <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/"
                      style={{color: '#92d050'}}
                    >
                      POČETNA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/nastava"
                      style={{color: '#92d050'}}
                    >
                      NASTAVA
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/informacije"
                      style={{color: '#92d050'}}
                    >
                      INFORMACIJE
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/projekti"
                      style={{color: '#92d050'}}
                    >
                      PROJEKTI
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/aktivnosti"
                      style={{color: '#92d050'}}
                    >
                      AKTIVNOSTI
                    </Link>
                  </li>
                  <li className="flex items-center">
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold"
                  href="https://www.facebook.com/Srednja-ekonomska-%C5%A1kola-Sarajevo-847192995623370/"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <i className="px-2 text-blueGray-400 fab fa-facebook text-lg leading-lg " />
                  
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold"
                  href="https://school-education.ec.europa.eu/en/etwinning"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <img src={etwi1} width="40" height="40"></img>
                  
                </a>
                <a
                  className="hover:text-blueGray-500 text-blueGray-700 flex items-center text-xs uppercase font-bold px-6"
                  href="https://sites.google.com/a/ses.edu.ba/srednja-ekonomska-skola---etwinning-tim/?fbclid=IwAR0xKMAKKGN0b65xh_OXHy_4GdzXJ03Z8QFAEd_4OSg0m17Ay9_D0IxcvWg"
                  target="_blank"
                  rel="noreferrer"
                  
                >
                  <img src={etwi2} width="30" height="30"></img>
                  
                </a>
              </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
}
