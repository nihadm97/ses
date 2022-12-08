/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// components

import logo from './logo.webp';
import etwi1 from './etwi1.webp';
import etwi2 from './etwi2.webp';



export default function Navbar(props) {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
    <div className="flex flex-wrap py-2">
        <div className="w-full px-4">
          <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg bg-lightBlue-500 rounded" style={{backgroundColor: '#92d050'}}>
            <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
              <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <Link
                to="/"
                className="text-blueGray-700 text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
              >
                <img src={logo} alt="Logo" width={"80"} height={"80"} />
              </Link>
                
                <button
                  className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                  type="button"
                  onClick={() => setMenuOpen(!menuOpen)}
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
                    >
                      POČETNA
                    </Link>
                  </li>
                  { /* <li className="nav-item">
                    <Link
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      to="/informacije"
                    >
                      AKTI
                    </Link>
                      </li> */}
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/1WaJfIAQeHW9-hSgO23Ylhewtq7UzBr11/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TERMINI INFORMACIJA
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/1aDSt4lnMQW_HndlqPybB-TWPgY_NELzA/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      TERMINI KONSULTACIJA
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/1mpY0Ri9wgvlbjo3eeHmmwtUpsIw018xs/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ČLANOVI VIJEĆA RODITELJA
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                      href="https://drive.google.com/file/d/195wdYAgpifKIy2ssGqw3tzuiPqgftB44/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ČLANOVI VIJEĆA UČENIKA
                    </a>
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
