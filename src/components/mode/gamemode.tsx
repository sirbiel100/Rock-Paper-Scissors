import { useRouter } from "next/navigation";
import style from "./style.module.sass";
import { useState } from "react";

export default function GameMode() {
    const [currentMode, setCurrentMode] = useState({
        isPvP: false,
        isPvE: false
    })
    const router = useRouter();

    const changeGameMode = (mode: "pvp" | "pve") => {
        if (mode === "pvp") {
            router.push(`/?mode=${mode}&step=p1`)
            setCurrentMode({ ...currentMode, isPvE: false, isPvP: true })
            return
        }

        router.push(`/?mode=${mode}`);
        setCurrentMode({ ...currentMode, isPvP: false, isPvE: true })
    }

    return (
        <section className={style.gameModeContainer}>
            <div className={style.inputContainer}>
                <input type="radio" name="game_mode" id="pvp" className={style.pvp} onClick={() => changeGameMode("pvp")} defaultChecked={currentMode.isPvP} />
                <label htmlFor="pvp">
                    PVP
                    <div></div>
                </label>
            </div>

            <div className={style.inputContainer}>
                <input type="radio" name="game_mode" id="pve" className={style.pve} onClick={() => changeGameMode("pve")} defaultChecked={currentMode.isPvE || !currentMode.isPvP} /> {/* PvE set to Default */}
                <label htmlFor="pve">
                    PVE
                    <div></div>
                </label>
            </div>

            <div className={style.selectedMode}></div>
        </section>
    );
}