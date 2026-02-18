import { pcLogo, playstationLogo, stadiaLogo, xboxLogo, buyPhoto } from '../../assets/index.ts';

export const Buy = () => {
    return (
        <section className="buy">
            <img className="buy__photo" src={buyPhoto} alt=""></img>
           <div className='buy__info-container'>
           <div className="buy__info">
                <h2 className="buy__info_title">Купить игру Cyberpunk 2077</h2>
                <p className='buy__info_listTitle'>В комплект входит:</p>
                <ul className="buy__info_set">
                    <li className="buy__set_element">Футляр с игровыми дисками</li>
                    <li className="buy__set_element">Футляр с кодом для загрузки игры и дисками (pc)</li>
                    <li className="buy__set_element">Справочник с информацией об игровом мире</li>
                </ul>
                <p className='buy__info_listTitle'>Выберите платформу:</p>
                <ul className="buy__info_platforms">
                    <li className="buy__platforms_element">
                        <img src={pcLogo} alt=""></img>
                    </li>
                    <li className="buy__platforms_element">
                        <img src={xboxLogo} alt=""></img>
                    </li>
                    <li className="buy__platforms_element">
                        <img src={stadiaLogo} alt=""></img>
                    </li>
                    <li className="buy__platforms_element">
                        <img src={playstationLogo} alt=""></img>
                    </li>
                </ul>
            </div>
           </div>
        </section>
    )
}
