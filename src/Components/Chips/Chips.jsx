import React, { useContext, useEffect } from "react";
import { CardContext } from "../../utils/card-context";

const Chips = () => {
  const { state, dispatch } = useContext(CardContext);

  return (
    <div className="chips-container">
      <div
        onClick={() => {
          dispatch({ type: "All" });
        }}
        className={`chips ${state.catSelect==="All" && "selected"}`}
      >
        All
      </div>
      <div
        onClick={() => {
          dispatch({ type: "Games" });
        }}
        className={`chips ${state.catSelect==="Games" && "selected"}`}
      >
        Games
      </div>
      <div
        onClick={() => {
          dispatch({ type: "Sci_Fi" });
        }}
        className={`chips ${state.catSelect==="Sci_Fi" && "selected"}`}
      >
        Sci-Fi
      </div>
      <div
        onClick={() => {
          dispatch({ type: "JavaScript" });
        }}
        className={`chips ${state.catSelect==="JavaScript" && "selected"}`}
      >
        JavaScript
      </div>
      <div
        onClick={() => {
          dispatch({ type: "Documentary" });
        }}
        className={`chips ${state.catSelect==="Documentary" && "selected"}`}
      >
        Documentary
      </div>
      <div
        onClick={() => {
          dispatch({ type: "Saga" });
        }}
        className={`chips ${state.catSelect==="Saga" && "selected"}`}
      >
        Saga
      </div>
      <div
        onClick={() => {
          dispatch({ type: "Comedy" });
        }}
        className={`chips ${state.catSelect==="Comedy" && "selected"}`}
      >
        Comedy
      </div>
      <div
        onClick={() => {
          dispatch({ type: "Podcasts" });
        }}
        className={`chips ${state.catSelect==="Podcasts" && "selected"}`}
      >
        Podcasts
      </div>
      <div
        onClick={() => {
          dispatch({ type: "Movies" });
        }}
        className={`chips ${state.catSelect==="Movies" && "selected"}`}
      >
        Movies
      </div>
    </div>
  );
};

export default Chips;
