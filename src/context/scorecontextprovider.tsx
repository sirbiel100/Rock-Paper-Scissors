"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type ScoreContextType = {
    score: number;
    setScore: (value: number | ((prev: number) => number)) => void;
};

const ScoreContext = createContext<ScoreContextType | undefined>(undefined);

export const ScoreProvider = ({ children }: { children: React.ReactNode }) => {
    const [score, setScoreState] = useState(0);

    useEffect(() => {
        const stored = localStorage.getItem("score");
        if (stored) {
            setScoreState(JSON.parse(stored));
        }
    }, []);

    const setScore = (value: number | ((prev: number) => number)) => {
        setScoreState(prev => {
            const newValue = typeof value === "function" ? value(prev) : value;
            localStorage.setItem("score", JSON.stringify(newValue));
            return newValue;
        });
    };

    return (
        <ScoreContext.Provider value={{ score, setScore }}>
            {children}
        </ScoreContext.Provider>
    );
};

export const useScore = () => {
    const context = useContext(ScoreContext);
    if (!context) throw new Error("useScore must be used within ScoreProvider");
    return context;
};
