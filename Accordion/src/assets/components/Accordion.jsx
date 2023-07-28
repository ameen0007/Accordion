import React from "react";
import "./Accordion.css";
import { Data } from "./Data";
import { useState } from "react";

export const Accordion = () => {
  const [accid, setaccordionid] = useState();
  const [currentclick, setClick] = useState(false);
  const click = (id) => {
    setaccordionid(id);
    if (accid === id) {
      setClick(!currentclick);
    }
  };

  return (
    <div className="maindiv">
      <div className="backgroundimagecontainer">
        <img src="\src\assets\image 1.png" alt="" className="img" />
      </div>
      <h1 className="faq">faq</h1>

      <div className="accodionbox">
        {Data &&
          Data?.map(({ id, question, answer }) => (
            <div className="AccodionWrap" key={id}>
              <div className="accQuestion" onClick={() => click(id)}>
                <h3 className="h3">{question}</h3>
              </div>
              {accid === id && currentclick && (
                <div className="accAnswer">
                  <p className="p">{answer}</p>
                </div>
              )}
            </div>
          ))}
      </div>
    </div>
  );
};
