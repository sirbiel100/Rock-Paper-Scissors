"use client"

import { useSearchParams } from "next/navigation";
import PlayerVersusEnviroment from "./pve/pve";
import PlayerVersusPlayer from "./pvp/pvp";


export default function Steps() {
    const searchParams = useSearchParams()
    const getCurrentGameMode = searchParams.get("mode")




    return (getCurrentGameMode === "pve" || !getCurrentGameMode)
        ?
        (
            <>
                <PlayerVersusEnviroment />
            </>
        )
        :

        (
            <>
                <PlayerVersusPlayer />
            </>
        );

}