"use client";
import React, { useState, useEffect, useMemo } from "react";
import Image from "next/image";
import astra from "../../../../public/Images/valorant-agents/astra.png";
import breach from "../../../../public/Images/valorant-agents/breach.png";
import brimstone from "../../../../public/Images/valorant-agents/brimstone.png";
import chamber from "../../../../public/Images/valorant-agents/chamber.png";
import cypher from "../../../../public/Images/valorant-agents/cypher.png";
import deadlock from "../../../../public/Images/valorant-agents/deadlock.png";
import fade from "../../../../public/Images/valorant-agents/fade.png";
import gecko from "../../../../public/Images/valorant-agents/gecko.png";
import harbor from "../../../../public/Images/valorant-agents/harbor.png";
import jett from "../../../../public/Images/valorant-agents/jett.png";
import killjoy from "../../../../public/Images/valorant-agents/killjoy.png";
import neon from "../../../../public/Images/valorant-agents/neon.png";
import omen from "../../../../public/Images/valorant-agents/omen.png";
import phoenix from "../../../../public/Images/valorant-agents/phoenix.png";
import raze from "../../../../public/Images/valorant-agents/raze.png";
import reyna from "../../../../public/Images/valorant-agents/reyna.png";
import sage from "../../../../public/Images/valorant-agents/sage.png";
import sova from "../../../../public/Images/valorant-agents/sova.png";
import viper from "../../../../public/Images/valorant-agents/viper.png";
import yoru from "../../../../public/Images/valorant-agents/yoru.png";
import "tailwindcss/tailwind.css";

const RandomAgentGenerator = () => {
  function getRandomAgentIndex(max) {
    return Math.floor(Math.random() * max);
  }

  const images = useMemo(
    () => [
      astra,
      breach,
      brimstone,
      chamber,
      cypher,
      deadlock,
      fade,
      gecko,
      harbor,
      jett,
      killjoy,
      neon,
      omen,
      phoenix,
      raze,
      reyna,
      sage,
      sova,
      viper,
      yoru,
    ],
    []
  );
  const agentNames = [
    "Astra",
    "Breach",
    "Brimstone",
    "chamber",
    "cypher",
    "deadlock",
    "fade",
    "gecko",
    "harbor",
    "jett",
    "killjoy",
    "neon",
    "omen",
    "phoenix",
    "raze",
    "reyna",
    "sage",
    "sova",
    "viper",
    "yoru",
  ];
  const [agent, setAgent] = useState(0);

  const handleClick = () => {
    const randomAgentImageIndex = getRandomAgentIndex(images.length);
    setAgent(randomAgentImageIndex);
  };

  const currentAgent = images[agent];
  const currentAgentName = agentNames[agent];

  return (
    <>
      <section className="flex flex-col justify-center items-center">
        <button className="generate-btn" onClick={handleClick}>
          get agent
        </button>
        {typeof window !== "undefined" && (
          <div className="w-380 h-800 block pt-8">
            <Image
              src={currentAgent}
              key={currentAgent}
              alt="valorant-agent"
              className="w-[350px] h-[650px]"
            />
            <h2 className="mt-2 text-center text-[33px] space-x-3 font-semibold">
              {currentAgentName}
            </h2>
          </div>
        )}
      </section>
    </>
  );
};

export default RandomAgentGenerator;
