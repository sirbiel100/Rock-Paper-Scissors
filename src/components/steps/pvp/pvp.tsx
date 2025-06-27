import { useSearchParams } from "next/navigation"
import PlayerChoice from "../pve/playerchoice/playerchoice"
import Result from "./result/result"

export default function PlayerVersusPlayer() {
    const searchParams = useSearchParams()
    const currentStep = searchParams.get("step")
    const playerOneChoice = searchParams.get("p1choice")
    const playerTwoChoice = searchParams.get("p2choice")

    return (
        <>
            {currentStep === "p1" &&
                <PlayerChoice />
            }

            {currentStep === "p2" &&
                <PlayerChoice />
            }

            {currentStep === "result" &&
                <Result 
                    playerOneItem={playerOneChoice}
                    playerTwoItem={playerTwoChoice}                
                />
            }
        </>
    )
}