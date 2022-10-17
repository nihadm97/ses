import React from "react";
import { createPopper } from "@popperjs/core";

const SkolskiDropdown = () => {
  // dropdown props
  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "left-start",
    });
    setDropdownPopoverShow(true);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };
  return (
    <>
      <a
        className="text-blueGray-500 py-1 px-3"
        href="#pablo"
        ref={btnDropdownRef}
        onClick={(e) => {
          e.preventDefault();
          dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
        }}
      >
        <i className="fas fa-ellipsis-v"></i>
      </a>
      <div
        ref={popoverDropdownRef}
        className={
          (dropdownPopoverShow ? "block " : "hidden ") +
          "bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg min-w-48"
        }
      >
        <a
          href="https://drive.google.com/file/d/10ydsxl3rhHL2XswRnQiCKW-BPs1PTA7R/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravila škole
        </a>
        <a
          href="https://drive.google.com/file/d/1z0svW4oU8Gp7YXky21GG65kIJ0H2zoV6/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o kućnom redu 
        </a>
        <a
          href="https://drive.google.com/file/d/1NGqfBFg6KuV0HTsqEyyi-qZ71Ob5Eunb/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o korištenju vlastitih prihoda
        </a>
        <a
          href="https://drive.google.com/file/d/1-GCAppQ9v9-KUGtpUC0r1eQVUNANOPpn/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o sukobu interesa
        </a>
        <a
          href="https://drive.google.com/file/d/1uSzeMjKNz71nl-YxnbLQyAktgXMCyl41/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o zaštiti na radu 
        </a>
        <a
          href="https://drive.google.com/file/d/1NF7kBd3FawyZ1uVTZ4RxJcG1W36ao2Pd/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o II izmjenama i dopunama pravilnika o radu 
        </a>
        <a
          href="https://drive.google.com/file/d/1fY68_q27E7ActhnFUY6OSrRKpJXp5lMJ/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
rel="noreferrer"
        >
          Pravilnik o radu
        </a>
        <a
          href="https://drive.google.com/file/d/1Knp8DpLgiFvJpqGHrW1hfpehZKq6CHgI/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Izmjene i dopune pravilnika o radu
        </a>
      </div>
    </>
  );
};

export default SkolskiDropdown;
