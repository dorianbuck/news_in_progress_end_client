import React from "react";
import { useSelector } from "react-redux";

const Footer = () => {
  const {flashMessage} = useSelector((state) => state);
  return (
    <footer data-cy="footer">
      <p>Copyright © News In Progress {new Date().getFullYear()}</p>
      {flashMessage && <h4 data-cy="flash-message">{flashMessage.content}</h4>}
    </footer>
  );
};

export default Footer;
