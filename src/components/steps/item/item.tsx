import Image from "next/image";
import rock from "../../../../public/icon-rock.svg";
import paper from "../../../../public/icon-paper.svg";
import scissors from "../../../../public/icon-scissors.svg";
import { useRouter, useSearchParams } from "next/navigation";
import style from "./style.module.sass"

type ItemProps = {
    name: "rock" | "paper" | "scissors" | "";
    disableClick?: boolean;
}

export default function Item({ name, disableClick }: ItemProps) {
    const router = useRouter();
    const searchParams = useSearchParams()
    const isPvP = searchParams.get("mode") === "pvp";
    const playerOneChose = searchParams.get("p1choice")

    const goToNextStep = () => {
        if (disableClick) return;


        if (!isPvP) { // PVE Mode
            router.push(`/?item=${name}&step=housepick`);
            return;
        }

        /* PVP */ 
        if (!playerOneChose) { // Check if player one hasn't made a choice
            router.push(`/?mode=pvp&p1choice=${name}&step=p2`);
            return
        }

        router.push(`/?mode=pvp&p1choice=${playerOneChose}&p2choice=${name}&step=result`)
    }

    const colorStyle = {
        background:
            name === "rock" ? "linear-gradient(to bottom, #dc2e4e, #dd405d)" :
                name === "paper" ? "linear-gradient(to bottom, #4865f4, #5671f5)" :
                    "linear-gradient(to bottom, #ec9e0e, #eca922)",

        gridArea: name === "rock" ? "rock" :
            name === "paper" ? "paper" :
                "scissors",

        cursor: disableClick ? "default" : "pointer"
    };


    return (
        <main className={style.item} style={colorStyle} onClick={() => goToNextStep()}>
            <div className={style[name]}></div>
            <Image
                src={name === "rock" ? rock : name === "paper" ? paper : scissors}
                alt={name}
                width={100}
                height={100}
            />
        </main>
    )
}