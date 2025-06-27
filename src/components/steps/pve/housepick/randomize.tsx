import { Dispatch, SetStateAction } from "react";

type itemType = "rock" | "paper" | "scissors" | "";

export const randomizeHousePick = ({setPick} : {setPick : Dispatch<SetStateAction<itemType>>}) => {
    const items: itemType[] = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * items.length);
    setPick(items[randomIndex]);
}
