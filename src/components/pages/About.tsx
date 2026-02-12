import { bigCity, city1, city2 } from "../../assets"

export const About = () => {
    return (
        <section className="about center">
            <h2 className="about__title">Найт-Сити изменит тебя навсегда!</h2>
            <p className="about__article"><span className="about__article specialColor">Cyberpunk 2077</span> — приключенческая ролевая игра, действие которой происходит в мегаполисе Найт-Сити, где власть, роскошь и модификации тела ценятся выше всего. Ты играешь за V, наёмника в поисках устройства, позволяющего обрести бессмертие. Ты сможешь менять киберимпланты, навыки и стиль игры своего персонажа, исследуя открытый мир, где твои поступки влияют на ход сюжета и всё, что тебя окружает.</p>
            <div className="about__photo">
                <img className="about__photo_item" src={city1} alt=""></img>
                <img className="about__photo_item big" src={bigCity} alt=""></img>
                <img className="about__photo_item" src={city2} alt=""></img>
            </div>
        </section>
    )
}
