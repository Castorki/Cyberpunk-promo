import { useState, type ChangeEvent, type SubmitEvent, useRef } from "react"
import { xboxPicture, psPicture } from "../../assets"
import type { FormData } from '../../types/types'

export const Game = () => {

    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [file, setFile] = useState<File | null>(null);
    const [checkbox, setCheckbox] = useState<boolean>(false);
    const [emptyField, setEmptyField] = useState<boolean>(false);
    const [wrongEmail, setWrongEmail] = useState<boolean>(false);
    const [showError, setShowError] = useState<boolean>(false);
    const [showSuccess, setShowSucces] = useState<boolean>(false);
    const [showIsLoading, setShowIsLoading] = useState<boolean>(false);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
        const { name, value, checked, files } = e.target;

        switch (name) {
            case 'userName':
                setName(value);
                break;
            case 'userEmail':
                setEmail(value);
                break;
            case 'userPicture':
                if (files && files[0]) {
                    setFile(files[0]);
                }
                break;
            case 'userAgreement':
                setCheckbox(checked);
                break;
        }
    }

    const checkValability = (): number | FormData => {

        if (name.trim() === '' || email.trim() === '') {
            setEmptyField(true);

            setTimeout(() => {
                setEmptyField(false)
            }, 3000);
            return -1;
        }

        if (!email.includes('@')) {
            setWrongEmail(true);

            setTimeout(() => {
                setWrongEmail(false)
            }, 3000);
            return -1;
        }

        if (!checkbox || !file) {
            setEmptyField(true);

            setTimeout(() => {
                setEmptyField(false)
            }, 3000);

            return -1;
        }

        return {
            name: name,
            email: email,
            file: file,
            checkbox: checkbox
        };
    }

    const handleSubmit = async (e: SubmitEvent<HTMLFormElement>): Promise<undefined | string> => {
        e.preventDefault();

        const formData: number | FormData = checkValability();

        if (typeof formData === 'number') {
            return;
        }

        const response: boolean = true

        try {

            setShowIsLoading(true);

            // const response: Response = await fetch('', {
            //     method: 'POST',
            //     body: JSON.stringify(formData),
            //     headers: {
            //         authorization: '',
            //         'Content-Type': 'application/json'
            //     }
            // })


            if (response) /*(response.ok)*/ {
                setShowSucces(true);

                setTimeout(() => {
                    setShowSucces(false)
                }, 3000);

                setName('');
                setEmail('');
                setFile(null);
                setCheckbox(false);

                if (fileInputRef.current) {
                    fileInputRef.current.value = ''
                };

            } else {
                setShowError(true);
                setTimeout(() => setShowError(false), 3000);
                // return `Error ${response.status}: ${response.statusText || 'No status text'}`
                return `Error: 'No status text'`
            }

        } catch (error) {
            console.log('Ошибка: ', error);
        } finally {
            setShowIsLoading(false)
        }

    }

    return (
        <section className="game center">
            <h2 className="game__title">Играй и выигрывай!</h2>
            <p className="game__article">Играй в <span className="game__article_specialColor">Cyberpunk 2077</span> и получи возможность выиграть консоль <span className="game__article_specialColor">Xbox Series X</span> или <span className="game__article_specialColor">Sony PlayStation 5!</span> Заполни форму ниже и приложи скриншот о покупке игры. Итоги розыгрыша будут подведены 1 февраля. Удачи! {';)'}</p>
            <div className="game__container">
                <form className="game__form" noValidate onSubmit={handleSubmit}>
                    <input
                        className="game__form_nameInput"
                        id="userName"
                        type="text"
                        name="userName"
                        value={name}
                        onChange={handleChange}
                        placeholder="Как тебя зовут?"
                        required
                    />
                    <input
                        className="game__form_emailInput"
                        id="userEmail"
                        type="email"
                        name="userEmail"
                        value={email}
                        onChange={handleChange}
                        placeholder="Твой е-mail"
                        required
                    />
                    <div className="game__form_fileInputContainer">
                        <label className="game__form_uploadPicLabel" htmlFor="userPicture">
                            {file ?
                                <span className="uploadPicture-text">{file.name}</span>
                                :
                                <>
                                    <span className="uploadPicture-text">Прикрепить скриншот</span>
                                    <span className="uploadPicture-extention">.png / .jpg / .pdf</span>
                                </>
                            }
                        </label>
                        <input
                            ref={fileInputRef}
                            className="game__form_userPictureInput"
                            id="userPicture"
                            type="file"
                            name="userPicture"
                            onChange={handleChange}
                            accept=".png, .jpg, .pdf"
                            required
                        />
                    </div>
                    <button className="game__form_submitButton" type="submit">Отправить</button>
                    <div className="game__form_checkBox">
                        <input className="game__form_userAgreementCheck" type="checkbox" id="userAgreement" name="userAgreement"
                            onChange={handleChange} checked={checkbox}
                            required />
                        <label className="game__form_userAgreementLabel" htmlFor="userAgreement">Согласен на обработку персональных данных</label>
                    </div>
                </form>
                {showIsLoading && (
                    <div className='loading'>
                        Данные отправляются на сервер. Это может занять какое-то время...
                    </div>
                )}
                {showSuccess && (
                    <div className="success">
                        Заявка успешно оформлена!
                    </div>
                )}
                {wrongEmail && (
                    <div className="wrongEmail">
                        Неккоректный адрес электроной почты!
                    </div>
                )}
                {emptyField && (
                    <div className="emptyField">
                        Не все поля были заполнены!
                    </div>
                )}
                {showError && (
                    <div className="requestError">
                        Что-то пошло не так. Попробуйте ещё раз позже или обратитесь в тех. поддержку.
                    </div>
                )}
                <div className="game__console">
                    <img className="game__console_img xbox" src={xboxPicture} alt="Xbox"></img>
                    <img className="game__console_img ps" src={psPicture} alt="PlayStation 5"></img>
                </div>
            </div>
        </section>
    )
}
