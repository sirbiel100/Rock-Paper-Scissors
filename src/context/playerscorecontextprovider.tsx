"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ScoreContextType = {
    playerOneScore: number;
    playerTwoScore: number;
    setPlayerOneScore: (value: number | ((prev: number) => number)) => void;
    setPlayerTwoScore: (value: number | ((prev: number) => number)) => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const PlayerScoreProvider = ({ children }: { children: React.ReactNode }) => {
    const [playerOneScore, setPlayerOneScoreState] = useState(0);
    const [playerTwoScore, setPlayerTwoScoreState] = useState(0);

    useEffect(() => {
        const playerOneStored = localStorage.getItem("playeronescore");
        const playerTwoStored = localStorage.getItem("playertwoscore");
        if (playerOneStored) {
            setPlayerOneScoreState(JSON.parse(playerOneStored));
        }
        if (playerTwoStored) {
            setPlayerTwoScoreState(JSON.parse(playerTwoStored));
        }
    }, []);

    const setPlayerOneScore = (value: number | ((prev: number) => number)) => {
        setPlayerOneScoreState(prev => {
            const newValue = typeof value === "function" ? value(prev) : value;
            localStorage.setItem("playeronescore", JSON.stringify(newValue));
            return newValue;
        });
    };

    const setPlayerTwoScore = (value: number | ((prev: number) => number)) => {
        setPlayerTwoScoreState(prev => {
            const newValue = typeof value === "function" ? value(prev) : value;
            localStorage.setItem("playertwoscore", JSON.stringify(newValue));
            return newValue;
        });
    };

    return (
        <ScoreContext.Provider value={{
            playerOneScore,
            playerTwoScore,
            setPlayerOneScore,
            setPlayerTwoScore,
        }}>
            {children}
        </ScoreContext.Provider>
    );
};

export const usePlayerScore = () => {
    const context = useContext(ScoreContext);
    if (!context) throw new Error("useScore must be used within ScoreProvider");
    return context;
};
