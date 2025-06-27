"use client";

import Rules from "@/components/rules/rules";
import styles from "./page.module.sass";
import Score from "@/components/score/score";
import Steps from "@/components/steps/steps";
import GameMode from "@/components/mode/gamemode";


export default function Home() {


  return (
    <section className={styles.page}>
      <Score />
      <Steps />
      <Rules />
      <GameMode />
    </section>
  );
}
