import { useRouter } from "next/navigation";
import style from "./style.module.sass";
import Item from "@/components/steps/item/item";
import { useEffect, useState } from "react";
import { useScore } from "@/context/scorecontextprovider";

type itemType = "rock" | "paper" | "scissors" | "";

type ResultProps = {
    getSelectedItem: string | null;
    housePick: string;
    setHousePick: (pick: itemType) => void;
}

export default function Result({ getSelectedItem, housePick, setHousePick }: ResultProps) {
    const router = useRouter();
    const [result, setResult] = useState<"win" | "lose" | "draw" | null>(null);
    const { setScore } = useScore();



    const restart = () => {
        setHousePick("");
        router.push("/?step=playerchoice");
    }

    useEffect(() => {
        if (!getSelectedItem || !housePick) return;

        const playerChoice = getSelectedItem as itemType;
        const houseChoice = housePick as itemType;

        const determineResult = (): "win" | "lose" | "draw" => {
            if (playerChoice === houseChoice) return "draw";

            if (
                (playerChoice === "rock" && houseChoice === "scissors") ||
                (playerChoice === "paper" && houseChoice === "rock") ||
                (playerChoice === "scissors" && houseChoice === "paper")
            ) return "win";

            return "lose";
        };

        const result = determineResult();
        setResult(result);

    }, [getSelectedItem, housePick]);

    useEffect(() => {
        if (result === "win") {
            setScore(prev => prev + 1);
        }
    }, [result]);

    if (!housePick) return <div>Loading...</div>

    return (
        <section className={style.result}>
            <div>
                <p>You Picked</p>
                <Item name={getSelectedItem as itemType} disableClick={true} />
            </div>

            <div className={style["play-again"]}>
                <h2>
                    {result === "win" && "YOU WON"}
                    {result === "draw" && "DRAW"}
                    {result === "lose" && "YOU LOSE"}
                </h2>
                <button onClick={() => restart()}>PLAY AGAIN</button>
            </div>

            <div>
                <p>The House Picked</p>
                {housePick && <Item name={housePick as itemType} disableClick={true} />}
            </div>

        </section>
    )
}