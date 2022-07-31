import React from 'react';

function Main({onEditAvatar, onEditProfile, onAddPlace }) {
/*     const handleEditAvatarClick = () => {
        document.querySelector('.popup_type_avatar').classList.add('popup_opened');
        document.querySelector('body').classList.add('page_active');
    };

    const handleEditProfileClick = () => {
        document.querySelector('.popup_type_info').classList.add('popup_opened');
        document.querySelector('body').classList.add('page_active');
    }; */

/*     const handleAddPlaceClick = () => {
        document.querySelector('.popup_type_images').classList.add('popup_opened');
        document.querySelector('body').classList.add('page_active');
    }; */

    return (
        <>
            <section className="profile">
                <div className="profile__pic">
                    <button className="profile__edit-avatar" type="button" 
                    onClick={onEditAvatar}></button>
                    <img src="./images/avatar.jpg" alt="аватар" className="profile__avatar" />
                </div>

                <div className="profile__info">
                    <div className="profile__main">
                        <h1 className="profile__title"></h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            onClick={onEditProfile}
                        ></button>
                    </div>
                    <p className="profile__description"></p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace }></button>
            </section>

            <section className="elements"></section>

{/*             <div className="popup popup_type_info">
                <div className="popup__container popup__container_type_info">
                    <h2 className="popup__title">Редактировать профиль</h2>

                    <form autoComplete="off" noValidate className="popup__form popup__form_type_info" name="info">
                        <fieldset className="popup__fieldset">
                            <label className="popup__label popup__label_value_name">
                                <input
                                    required
                                    minLength="2"
                                    maxLength="40"
                                    type="text"
                                    className="popup__input"
                                    id="title"
                                    placeholder="Введите имя профиля"
                                />
                                <span className="popup__input-error popup__input-error_type_title"></span>
                            </label>

                            <label className="popup__label popup__label_value_description">
                                <input
                                    required
                                    minLength="2"
                                    maxLength="200"
                                    type="text"
                                    className="popup__input"
                                    id="description"
                                    placeholder="Введите описание профиля"
                                />
                                <span className="popup__input-error popup__input-error_type_description"></span>
                            </label>
                        </fieldset>
                        <button type="submit" className="popup__submit-button popup__submit-button_type_info">
                            Сохранить
                        </button>
                    </form>
                    <button className="popup__exit-button" type="button"></button>
                </div>
            </div> */}

{/*             <div className="popup popup_type_images">
                <div className="popup__container popup__container_type_images">
                    <h2 className="popup__title">Новое место</h2>
                    <form autoComplete="off" noValidate className="popup__form popup__form_type_images" name="images">
                        <fieldset className="popup__fieldset">
                            <label className="popup__label popup__label_value_name">
                                <input
                                    required
                                    minLength="2"
                                    maxLength="30"
                                    type="text"
                                    className="popup__input"
                                    id="name"
                                    placeholder="Название"
                                />
                                <span className="popup__input-error popup__input-error_type_name"></span>
                            </label>

                            <label className="popup__label popup__label_value_description">
                                <input
                                    required
                                    type="url"
                                    className="popup__input"
                                    id="link"
                                    placeholder="Ссылка на картинку"
                                />
                                <span className="popup__input-error popup__input-error_type_link"></span>
                            </label>
                        </fieldset>

                        <button type="submit" className="popup__submit-button popup__submit-button_type_images">
                            Создать
                        </button>
                    </form>

                    <button className="popup__exit-button" type="button"></button>
                </div>
            </div> */}

            <div className="popup popup_type_delete-image">
                <div className="popup__container popup__container_type_delete-image">
                    <h2 className="popup__title">Вы уверены?</h2>
                    <form className="popup__form">
                        <button type="submit" className="popup__submit-button popup__submit-button_type_delete-image">
                            Да
                        </button>
                    </form>
                    <button className="popup__exit-button" type="button"></button>
                </div>
            </div>

{/*             <div className="popup popup_type_avatar">
                <div className="popup__container popup__container_type_avatar">
                    <h2 className="popup__title">Обновить аватар</h2>
                    <form
                        autoComplete="off"
                        noValidate
                        className="popup__form popup__form_type_avatar"
                        name="avatar"
                    >
                        <fieldset className="popup__fieldset">
                            <label className="popup__label popup__label_value_name">
                                <input
                                    required
                                    type="url"
                                    className="popup__input"
                                    id="avatar"
                                    placeholder="Ссылка на картинку"
                                />
                                <span className="popup__input-error popup__input-error_type_avatar"></span>
                            </label>
                        </fieldset>

                        <button type="submit" className="popup__submit-button popup__submit-button_type_avatar">
                            Создать
                        </button>
                    </form>

                    <button className="popup__exit-button" type="button"></button>
                </div>
            </div> */}

            <div className="popup popup_type_image">
                <div className="popup__looking">
                    <img src="./images/logo.svg" alt="" className="popup__image" />
                    <button className="popup__exit-button" type="button"></button>
                    <h2 className="popup__description"></h2>
                </div>
            </div>

            <template className="image-template">
                <article className="element">
                    <img src="./images/logo.svg" alt="" className="element__image" />
                    <div className="element__title">
                        <h2 className="element__text"></h2>
                        <div className="element__item">
                            <button className="element__like" type="button"></button>
                            <p className="element__likes"></p>
                        </div>
                    </div>
                    <button className="element__remove" type="submit"></button>
                </article>
            </template>
        </>
    );
}

export default Main;
