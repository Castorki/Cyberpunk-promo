import { buyPhoto } from '../../assets/index.ts';
import { useAppSelector } from "../../hooks/typedStateHook"

export const Buy = () => {

    const setInfo = useAppSelector(state => state.buyList.items)
    const platformsList = useAppSelector(state => state.platforms.items)


    return (
        <section className="buy">
            <img className="buy__photo" src={buyPhoto} alt=""></img>
            <div className='buy__info-container'>
                <div className="buy__info">
                    <h2 className="buy__info_title">Купить игру Cyberpunk 2077</h2>
                    <p className='buy__info_listTitle'>В комплект входит:</p>
                    <ul className="buy__info_set">
                        {setInfo.map(item => (
                            <li key={item.id} className="buy__set_element"
                                style={{ backgroundImage: `url(../src/assets/${item.mark}.svg)` }}>{item.descr}</li>

                        ))}
                    </ul>
                    <p className='buy__info_listTitle'>Выберите платформу:</p>
                    <ul className="buy__info_platforms">
                        {platformsList.map(item => (
                            <li key={item.id} className="buy__platforms_element">
                                <img src={`../src/assets/${item.img}.svg`} alt={item.alt}></img>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}
