import React from "react";
import styled from "styled-components";
import { toDo } from "./data";

function Practice() {
  return (
    <>
      {toDo.map((element, index) => {
        const { subject, website, teacher, content, url } = element;
        return (
          <div style = {{ backgroundImage:`url(${url})`}} className="article" key={index}>
              <div className="heading"> {subject} </div>
              <div className="sub-heading"> {teacher} </div>
              <div className="body"> {website} </div>
              <div className="body "> {content} </div>

          </div>
        );
      })}
    </>
  );
}

export default Practice;
