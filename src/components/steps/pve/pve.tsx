import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { randomizeHousePick } from "./housepick/randomize";
import PlayerChoice from "./playerchoice/playerchoice";
import HousePick from "./housepick/housepick";
import Result from "./result/result";

type itemType = "rock" | "paper" | "scissors" | "";

export default function PlayerVersusEnviroment() {
    const [housePick, setHousePick] = useState<itemType>("");
    const searchParams = useSearchParams();
    const getSelectedItem = searchParams.get("item");
    const currentStep = searchParams.get("step");
    const router = useRouter();
    const RandomizePick = randomizeHousePick;

    useEffect(() => {
        if (currentStep === "housepick") {
            setTimeout(() => {
                RandomizePick({ setPick: setHousePick });
            }, 1500);

            setTimeout(() => {
                router.push(`/?item=${getSelectedItem}&step=result`);
            }, 2200);
        }

    }, [currentStep]);

    return (
        <>
            {(currentStep === "playerchoice" || currentStep === null) &&
                <PlayerChoice />
            }

            {currentStep === "housepick" &&
                <HousePick
                    getSelectedItem={getSelectedItem}
                    housePick={housePick}
                />
            }

            {currentStep === "result" &&
                <Result
                    getSelectedItem={getSelectedItem}
                    housePick={housePick}
                    setHousePick={setHousePick}
                />
            }
        </>
    )
}