import Item from "@/components/steps/item/item";
import style from "./style.module.sass";

type itemType = "rock" | "paper" | "scissors" | "";

type HousePickProps = {
    getSelectedItem: string | null;
    housePick: string;
}

export default function HousePick({ getSelectedItem, housePick }: HousePickProps) {
    
    
    return (
        <section className={style["house-pick"]}>
            <div>
                <p>You Picked</p>
                <Item name={getSelectedItem as "rock" | "paper" | "scissors" | ""} disableClick={true} />
            </div>

            <div>
                <p>The House Picked</p>
                {housePick && <Item name={housePick as itemType} disableClick={true} />}
                {!housePick && <div className={style["house-pick-placeholder"]}></div>}
            </div>
        </section>
    )
}