import { hpLogo, monitor, crossImg, cyberpunkLogo } from "../../assets"
import { useAppSelector } from "../../hooks/typedStateHook"

export const HP = () => {

    const hpList = useAppSelector(state => state.hpList.items);

    return (
        <section className="hp center">
            <div className="hp__logos">
                <img className="hp__logos_item" src={monitor} alt=""></img>
                <div className="hp__logos_wrapper">
                    <img className="hp__logos_item" src={hpLogo} alt=""></img>
                    <img className="hp__logos_item" src={crossImg} alt=""></img>
                    <img className="hp__logos_item" src={cyberpunkLogo} alt=""></img>
                </div>
            </div>
            <div className="hp__info">
                <h2 className="hp__info_title">Полное погружение вместе с HP</h2>
                <p className="hp__info_article">
                    Погрузись в современные экшен-игры с реалистичным изображением с помощью монитора с диагональю 23,8 дюйма, созданном для отображения максимально насыщенных цветов. Успевай реагировать на любые события с временем отклика 1 мс и частотой в 144 Гц!
                </p>
                <ul className="hp__info_list">
                    {hpList.map(item => (
                        <li key={item.id} className="hp__list_element"
                            style={{ backgroundImage: `url(../src/assets/${item.mark}.svg)` }}>{item.descr}</li>
                    ))}
                </ul>
                <button className="hp__info_btn">Подробнее</button>
            </div>
        </section>
    )
}
