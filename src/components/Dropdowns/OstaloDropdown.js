import React from "react";
import { createPopper } from "@popperjs/core";

const OstaloDropdown = () => {
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
          href="https://drive.google.com/file/d/1ZaYvO8ZZlmItEt1NjTJdIcfD1cutRgbS/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Kolektivni ugovor
        </a>
        <a
          href="https://mon.ks.gov.ba/propisi"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Ostali propisi
        </a>
        <a
          href="https://drive.google.com/file/d/1ZLyiKOcmCfA5gn-KsyhCS5yXaHaU9mi9/view?usp=sharing"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Obrazac za prijavu nasilja
        </a>
      </div>
    </>
  );
};

export default OstaloDropdown;
