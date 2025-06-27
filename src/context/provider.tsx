import { PlayerScoreProvider } from "./playerscorecontextprovider";
import { ScoreProvider } from "./scorecontextprovider";

export default function ContextProvider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <PlayerScoreProvider>
            <ScoreProvider>
                {children}
            </ScoreProvider>
        </PlayerScoreProvider>
    )
}