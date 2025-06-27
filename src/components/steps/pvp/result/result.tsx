import { useRouter } from "next/navigation";
import style from "./style.module.sass";
import Item from "@/components/steps/item/item";
import { useEffect, useState } from "react";
import { usePlayerScore } from "@/context/playerscorecontextprovider";

type itemType = "rock" | "paper" | "scissors" | "";

type ResultProps = {
    playerOneItem: string | null;
    playerTwoItem: string | null;
}

export default function Result({ playerOneItem, playerTwoItem }: ResultProps) {
    const router = useRouter();
    const [result, setResult] = useState({
        playerOneWin: false,
        playerTwoWin: false
    });
    const { setPlayerOneScore, setPlayerTwoScore, playerOneScore } = usePlayerScore();



    const restart = () => {
        router.push("/?mode=pvp&step=p1");
    }


    // const determineResult = (): void => {
    //     if (!playerOneItem || !playerTwoItem) return;

    //     if (playerOneItem === playerTwoItem) {
    //         setResult({ playerOneWin: false, playerTwoWin: false });
    //         return
    //     }

    //     if (
    //         (playerOneItem === "rock" && playerTwoItem === "scissors") ||
    //         (playerOneItem === "scissors" && playerTwoItem === "paper") ||
    //         (playerOneItem === "paper" && playerTwoItem === "rock")
    //     ) {
    //         setResult(prev => ({ ...prev, playerOneWin: true }));
    //         console.log("Player One Score: ", playerOneScore)
    //         setPlayerOneScore(prev => prev + 1);
    //         console.log("Player One Score After Compute: ", playerOneScore)
    //         return;
    //     }

    //     setResult(prev => ({ ...prev, playerTwoWin: true }))
    //     setPlayerTwoScore(prev => prev + 1)
    // };



    useEffect(() => {

        const determineResult = (): void => {
        if (!playerOneItem || !playerTwoItem) return;

        if (playerOneItem === playerTwoItem) {
            setResult({ playerOneWin: false, playerTwoWin: false });
            return
        }

        if (
            (playerOneItem === "rock" && playerTwoItem === "scissors") ||
            (playerOneItem === "scissors" && playerTwoItem === "paper") ||
            (playerOneItem === "paper" && playerTwoItem === "rock")
        ) {
            setResult(prev => ({ ...prev, playerOneWin: true }));
            console.log("Player One Score: ", playerOneScore)
            setPlayerOneScore(prev => prev + 1);
            console.log("Player One Score After Compute: ", playerOneScore)
            return;
        }

        setResult(prev => ({ ...prev, playerTwoWin: true }))
        setPlayerTwoScore(prev => prev + 1)
    };

    determineResult()
    
    }, []);

    if (!playerOneItem || !playerTwoItem) return <div>Loading...</div>

    return (
        <section className={style.result} >
            <div>
                <p>Player One Picked</p>
                <Item name={playerOneItem as itemType} disableClick={true} />
            </div>

            <div className={style["play-again"]}>
                <h2>
                    {result.playerOneWin && "PLAYER ONE WIN"}
                    {result.playerTwoWin && "PLAYER TWO WIN"}
                    {(!result.playerOneWin && !result.playerTwoWin) && "DRAW"}
                </h2>
                <button onClick={() => restart()}>PLAY AGAIN</button>
            </div>

            <div>
                <p>Player Two Picked</p>
                <Item name={playerTwoItem as itemType} disableClick={true} />
            </div>

        </section>
    )
}