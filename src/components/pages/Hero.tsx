import { useState } from "react";


export const Hero = () => {

    const [notAvailable, setNotAvailable] = useState(false);

    const handleClik = (): void => {
        setNotAvailable(true);

        setTimeout(() => {
            setNotAvailable(false);
        }, 3000);
    }

    return (
        <section className="hero center">
            <div className="hero__background">
                <div className="hero__background_img" ></div>
                <div className="hero__background_img" ></div>
                <div className="hero__background_img" ></div>
            </div>
            <div className="hero__info">
                <h2 className="hero__info_text">Доступно на всех платформах</h2>
                <button className={`hero__info_button ${notAvailable ? 'notAvailable' : ''}`} onClick={handleClik} disabled={notAvailable}>{notAvailable ? 'Данное действие пока не доступно' : 'Узнать больше'}</button>
            </div>
        </section>
    )
}
