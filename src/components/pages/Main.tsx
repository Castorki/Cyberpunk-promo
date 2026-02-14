import { About } from "./About"
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
        </main>
    )
}
