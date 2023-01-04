import React, { useState, useEffect } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { MdHourglassBottom, MdHourglassTop } from "react-icons/md";
import styles from "../styles/Loader.module.css";
interface messageProp {
  message: string;
}

function Loader({ message }: messageProp) {
  const [alternateGlass, setAlternateGlass] = useState(false);
  useEffect(() => {
    alternateFunction();
  }, []);

  const alternateFunction = () => {
    let state = false;
    setInterval(() => {
      state = !state;
      setAlternateGlass(state);
    }, 1500);
  };

  return (
    <div id={styles.loadContainer} className="row m-0">
      <div className="d-flex col-sm-5 m-2 flex-column align-items-center  justify-content-center p-5 shadow bg-white rounded">
        {alternateGlass ? (
          <MdHourglassBottom size={50} />
        ) : (
          <MdHourglassTop size={50} />
        )}
        <h5 className="mt-4 mb-3 fw-bold">{message}</h5>
        <AiOutlineLoading size={50} id={styles.loaderIcon} />
      </div>
    </div>
  );
}

export default Loader;
