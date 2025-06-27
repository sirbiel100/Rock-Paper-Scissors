import Triangle from "../../../../../public/bg-triangle.svg"
import Item from "@/components/steps/item/item";
import style from "./style.module.sass";
import Image from "next/image";

export default function PlayerChoice() {
    return (
        <section className={style["player-choice"]}>
            <Item name="rock" />
            <Item name="paper" />
            <Item name="scissors" />
            <Image src={Triangle} alt="triangle" className={style.triangle} />
        </section>
    )
}