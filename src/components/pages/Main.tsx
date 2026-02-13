import { About } from "./About"
import { Game } from "./Game"
import { Hero } from "./Hero"

export const Main = () => {
    return (
        <main className="main ">
            <Hero />
            <About />
            <Game />
        </main>
    )
}
