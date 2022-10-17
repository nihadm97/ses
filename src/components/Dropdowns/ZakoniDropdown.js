import React from "react";
import { createPopper } from "@popperjs/core";

const ZakoniDropdown = () => {
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
          href="https://drive.google.com/file/d/1ApKlMK_oAEhW3-ycY7oq5DRUHpjuvSQS/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Okvirni Zakon o osnovnom i srednjem obrazovanju u Bosni i Hercegovini
        </a>
        <a
          href="https://drive.google.com/file/d/1VUGosMwvJKznvVp5l8_7qlHCGVX4K2YO/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o srednjem obrazovanju Kantona Sarajevo
        </a>
        <a
          href="https://drive.google.com/file/d/1rCeABemYVmZxG9dhQHx_lYE3DqThNL9k/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o izmjeni zakona o srednjem obrazovanju
        </a>
        <a
          href="https://drive.google.com/file/d/1y95SJ7NuZ5H50t-Uo3kExKwJcymeNSWZ/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o radu Federacije BiH
        </a>
        <a
          href="https://drive.google.com/file/d/1rLH0ZbasEqwhVpaEyDb-HGz79Oje9Hpo/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
         Zakon o izmjenama i dopunama Zakona o radu     
        </a>
        <a
          href="https://drive.google.com/file/d/1dpvoOEDw8TU8eKT0YtJkrY4N3N6f_t7-/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Zakon o javnim nabavkama
        </a>
      </div>
    </>
  );
};

export default ZakoniDropdown;
