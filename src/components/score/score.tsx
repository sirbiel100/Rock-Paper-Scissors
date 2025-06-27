import Image from "next/image";
import Logo from "../../../public/logo.svg";
import Reset from "../../../public/reset.svg";
import style from "./style.module.sass";
import { useScore } from "@/context/scorecontextprovider";
import { usePlayerScore } from "@/context/playerscorecontextprovider";
import { useSearchParams } from "next/navigation";

export default function Score() {
    const { score, setScore } = useScore();
    const { playerOneScore, playerTwoScore, setPlayerOneScore, setPlayerTwoScore } = usePlayerScore()
    const currentGameMode = useSearchParams().get("mode")
    const currentStep = useSearchParams().get("step")


    return (
        <section className={style["score-container"]}>
            {(currentGameMode === "pve" || !currentGameMode) &&
                <>
                    <Image src={Logo} alt="logo" />

                    <div className={style.score}>
                        <h1>SCORE</h1>
                        <p>{score}</p>
                        <div onClick={() => setScore(0)} className={style.reset}>
                            <Image src={Reset} alt="reset" />
                        </div>
                    </div>
                </>
            }

            {currentGameMode === "pvp" &&
                <>
                    <div className={style["pvp-score"]} style={{boxShadow: currentStep === "p1" ? "0 0 2em 1em #6f9dff" : "none"}}>
                        <h1>P1 Score</h1>
                        <p>{playerOneScore}</p>
                        <div onClick={() => setPlayerOneScore(0)} className={style.reset} >
                            <Image src={Reset} alt="reset" />
                        </div>
                    </div>

                    <Image src={Logo} alt="logo" />

                    <div className={style["pvp-score"]} style={{boxShadow: currentStep === "p2" ? "0 0 3em 1em #ff0505" : "none"}}>
                        <h1>P2 Score</h1>
                        <p>{playerTwoScore}</p>
                        <div onClick={() => setPlayerTwoScore(0)} className={style.reset} >
                            <Image src={Reset} alt="reset" />
                        </div>
                    </div>
                </>
            }

        </section>
    );
}