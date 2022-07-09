import React from "react";
import { Button } from "../components/index";

function Welcome() {
  return (
    <div className="w-[100vw] h-[100vh] bg-slate-900 flex justify-center items-center text-white">
      <div className="w-[80%] flex flex-col items-center">
        <img src={require("../assets/images/e-learning.png")} alt="imagePres" />
        <p className="text-center">Daara-j plateform</p>
        <h1 className="text-xl">
          Interagissez entre camarades, créez une communauté active et faites des échanges sur des questions qui vous préoccupent.
        </h1>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos deleniti
          dolorum eaque porro fugit veritatis aut iste, voluptates harum
          excepturi?
        </p>
        <div className="my-4">
          <Button title="Se Connecter" styles="bg-blue-600" />
          <Button title="S'inscrire" styles="bg-white text-blue-600 ml-4" />
        </div>
        <div className="w-fit mb-2 px-2 bg-white text-black rounded-lg shadow-lg shadow-indigo-500/40">
          <div className="flex items-center">
            <div className="flex flex-col">
              <p className="text-xs">Notez votre expérience</p>
              <input type="range" name="rare" id="exp" min="0" max="5" />
            </div>
            <img
              style={{ width: "50px", height: "50px" }}
              src={require("../assets/icons/boy.png")}
              alt="smile"
            />
          </div>
        </div>
        <div className="w-fit px-2 bg-white text-black rounded-lg shadow-lg shadow-indigo-500/40">
          <div className="flex items-center">
            <img
              style={{ width: "50px", height: "50px", marginRight: "2px" }}
              src={require("../assets/icons/diagram.png")}
              alt="diagram"
            />
            <p className="text-xs">Total des postsk</p>
            <span className="bg-black rounded-full text-white p-2 ml-1">1k+</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Welcome };
