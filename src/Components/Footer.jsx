import React from "react";
import Order from "./Order";
function Footer() {
  //   return React.createElement("footer", null, "We're currently open");
  const hours = new Date().getHours();
  const openHours = 8;
  const closeHours = 22;
  const isOpen = hours >= openHours && hours <= closeHours;
  //   if (hours > openHours && hours < closeHours) alert("We're open currently");
  //   else alert("Sorry We're closed");
  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHours={closeHours} openHours={openHours} />
      ) : (
        <p>
          We're happy to welcome you between {openHours}:00 and {closeHours}:00
        </p>
      )}
    </footer>
  );
}
export default Footer;
