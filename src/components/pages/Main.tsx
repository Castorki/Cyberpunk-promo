import { About } from "./About"
import { Buy } from "./Buy"
import { Game } from "./Game"
import { HP } from "./HP"
import { Hero } from "./Hero"

export const Main = () => {
    return (
        <main className="main ">
            <Hero />
            <About />
            <Game />
            <HP />
            <Buy />
        </main>
    )
}
