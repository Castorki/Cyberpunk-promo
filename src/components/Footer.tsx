import { Link } from "react-router-dom";
import { CD_ProjektLogo, cyberpunkLogo } from "../assets/index";

export const Footer = () => {
    return (
        <footer className="footer ">
            <div className="footer__top center">
                <div className="footer__top_left">
                    <Link to={'/'} className="footer__top_link"><img src={cyberpunkLogo} alt=""></img></Link>
                    <Link to={'/'} className="footer__top_link"><img src={CD_ProjektLogo} alt=""></img></Link>
                </div>
                <div className="footer__top_right">
                    <Link to={'/'} className="footer__top_link">Лицензия</Link>
                    <Link to={'/'} className="footer__top_link">Политика конфиденциальности</Link>
                </div>
            </div>
            <div className="footer__bottom center">
                <small className="footer__bottom_text">CD PROJEKT®, Cyberpunk®, Cyberpunk 2077®</small>
            </div>
        </footer>
    )
}
