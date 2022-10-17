import React from "react";
import { createPopper } from "@popperjs/core";

const PravilniciDropdown = () => {
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
          href="https://drive.google.com/file/d/1dOtnFY-MJUu_5xUNWq6weHAkKu5C5Ls7/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pedagoški standardi i normativi
        </a>
        <a
          href="https://drive.google.com/file/d/11zrCJ4WN55ZeUvQU68lZ7i4KM7xMUpz3/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Izmjene i dopune pedagoških standarda i normativa
        </a>
        <a
          href="https://drive.google.com/file/d/1XR2uBC4EpsMXxUJ2M_kHBypdL0JSTJMp/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o vođenju pedagoške dokumentacije i evidencije
        </a>
        <a
          href="https://drive.google.com/file/d/15NKxsRyviEGGISEbsufBsJc1pLghsdQv/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o izmjenama i dopunama pravilnika o vođenju pedagoške dokumentacije i evidencije
        </a>
        <a
          href="https://drive.google.com/file/d/1f2569-NNBpOFDw8qsz24I47RzeRRCE77/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o praćenju, vrednovanju i ocjenjivanju učenika osnovnih i srednjih škola u Kantonu Sarajevo
        </a>
        <a
          href="https://drive.google.com/file/d/16jU87NHT36RnyP-KiHCUfS3CdX2eMjuV/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o sadržaju i načinu polaganja mature
        </a>
        <a
          href="https://drive.google.com/file/d/16aApZEbMVZVIus6VObbNf5zg-MeKSkZ7/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o ishrani učenika u osnovnim i srednjim školama KS
        </a>
        <a
          href="https://drive.google.com/file/d/1QmXrcup-6wyZCQakpcKOXmFl_u3iMlqg/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o organizaciji i realizaciji izleta
        </a>
        <a
          href="https://drive.google.com/file/d/13ar0MYFilUkfmWp4XKFhyBZb1eGxU0rH/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o inkluzivnom obrazovanju
        </a>
        <a
          href="https://drive.google.com/file/d/1wSau8-x0BMYfV8e3254cBAKBYWotZKqq/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o ocjenjivanju, napredovanju i sticanju stručnih zvanja
        </a>
        <a
          href="https://drive.google.com/file/d/1P3GSRDc-OC3kBfRwySazdUKM0BiQ3qpX/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik sa kriterijima za prijem radnika u radni odnos
        </a>
        <a
          href="https://drive.google.com/file/d/1SfvuTQdUTQIUGrsnAp64w16A6O5WT5Un/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik sa kriterijima za iskazivanje prestanka potrebe za zaposlenicima
        </a>
        <a
          href="https://drive.google.com/file/d/1qFGbtleryR6xE8KgkD_EaPDu0Z0Sh68c/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o izboru, nadležnostima i načinu rada školskih odbora
        </a>
        <a
          href="https://drive.google.com/file/d/1GbXXLsF-6iL7ONvZjwhMAGtAj2ZjROsP/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o internoj evaluaciji znanja učenika
        </a>
        <a
          href="https://drive.google.com/file/d/1T1ybtIUUDpnuk6azTdsQ580TxoJdeReY/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o načinu rada školskih odbora
        </a>
        <a
          href="https://drive.google.com/file/d/1DYLnrjKWqGufk1s9oYaCQ_fFwbDA0OLz/view"
          className={
            "text-sm py-2 px-4 font-normal block w-full whitespace-nowrap bg-transparent text-blueGray-700"
          }
          target="_blank"
          rel="noreferrer"
        >
          Pravilnik o izboru, kriterijima za izbor, nadležnostima i radu direktora
        </a>
      </div>
    </>
  );
};

export default PravilniciDropdown;
