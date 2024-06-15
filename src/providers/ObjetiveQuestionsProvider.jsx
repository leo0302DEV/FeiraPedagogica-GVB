import React, { createContext, useState } from "react";

export const ObjetiveQuestionsContext = createContext();

export const ObjetiveQuestionsProvider = ({ children }) => {
  const [selectedAlternativeThree, setSelectedAlternativeThree] = useState("");
  const [selectedAlternativeFour, setSelectedAlternativeFour] = useState("");
  const [selectedAlternativeFive, setSelectedAlternativeFive] = useState("");
  const [selectedAlternativeSix, setSelectedAlternativeSix] = useState("");
  const [selectedAlternativeSeven, setSelectedAlternativeSeven] = useState("");

  return (
    <ObjetiveQuestionsContext.Provider
      value={{
        selectedAlternativeThree,
        setSelectedAlternativeThree,
        selectedAlternativeFour,
        setSelectedAlternativeFour,
        selectedAlternativeFive,
        setSelectedAlternativeFive,
        selectedAlternativeSix,
        setSelectedAlternativeSix,
        selectedAlternativeSeven,
        setSelectedAlternativeSeven,
      }}
    >
      {children}
    </ObjetiveQuestionsContext.Provider>
  );
};
