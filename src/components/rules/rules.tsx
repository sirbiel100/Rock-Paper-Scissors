import { useState } from "react"
import RulesMap from "../../../public/image-rules.svg"
import Close from "../../../public/icon-close.svg"
import style from "./style.module.sass"
import Image from "next/image"

export default function Rules() {
    const [isModalOpen, setIsMoodalOpen] = useState<boolean>(false)

    return (
        <section className={style.rules} style={{zIndex: isModalOpen ? 2 : 0}}>
            <button onClick={() => setIsMoodalOpen(true)}>RULES</button>

            {isModalOpen && (
                <>
                    <div className={style.modal}>
                        <header>
                            <h3>RULES</h3>
                            <Image src={Close} alt="close" onClick={() => setIsMoodalOpen(false)} />
                        </header>
                        <Image src={RulesMap} alt="rules" />
                    </div>
                    <div className={style.shadow} onClick={() => setIsMoodalOpen(false)}></div>
                </>
            )}
        </section>
    )
}