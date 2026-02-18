import { useState } from "react"
import { gameConsoles } from "../../assets"
import type { FormData } from '../../types/types'

export const Game = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [emptiField, setEmptyField] = useState<boolean>(false);
    const [wrongEmail, setWrongEmail] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [showSucces, setShowSucces] = useState<boolean>(false);
    const [showIsLoading, setShowIsLoading] = useState<boolean>(false);

    const checkValability = () => {

        if (name.trim() === '' || email.trim() === '') {
            setEmptyField(true);

            setTimeout(() => {
                setEmptyField(false)
            }, 3000);
            return -1;
        }

        if (!email.includes('@')) {
            setEmptyField(true);

            setTimeout(() => {
                setEmptyField(false)
            }, 3000);
            return -1;
        }

    }

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault();



    }

    return (
        <section className="game center">
            <h2 className="game__title">Играй и выигрывай!</h2>
            <p className="game__article">Играй в <span className="game__article_specialColor">Cyberpunk 2077</span> и получи возможность выиграть консоль <span className="game__article_specialColor">Xbox Series X</span> или <span className="game__article_specialColor">Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! {';)'}</p>
            <div className="game__container">
                <form className="game__form">
                    <input
                        className="game__form_nameInput"
                        id="userName"
                        type="text"
                        name="userName"
                        placeholder="Как тебя зовут?"
                        required
                    />
                    <input
                        className="game__form_emailInput"
                        id="userEmail"
                        type="email"
                        name="userEmail"
                        placeholder="Твой е-mail"
                        required
                    />
                    <div className="game__form_fileInputContainer">
                        <label className="game__form_uploadPicLabel" htmlFor="userPicture">
                            <span className="uploadPicture-text">Прикрепить скриншот</span>
                            <span className="uploadPicture-extention">.png / .jpg / .pdf</span>
                        </label>
                        <input
                            className="game__form_userPictureInput"
                            id="userPicture"
                            type="file"
                            name="userPicture"
                            accept=".png, .jpg, .pdf"
                            required
                        />
                    </div>
                    <button className="game__form_submitButton" type="submit">Отправить</button>
                    <div className="game__form_checkBox">
                        <input className="game__form_userAgreementCheck" type="checkbox" id="userAgreement" name="userAgreement" required />
                        <label className="game__form_userAgreementLabel" htmlFor="userAgreement">Согласен на обработку персональных данных</label>
                    </div>
                </form>
                <div className="game__console">
                    <img className="game__console_img" src={gameConsoles} alt="Game consoles: Xbox and PlayStation 5"></img>
                </div>
            </div>
        </section>
    )
}
