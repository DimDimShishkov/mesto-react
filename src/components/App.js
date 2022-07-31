/* import './App.css'; */

import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm1';
import api from 'utils/Api';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function biba () {
      console.log(isEditProfilePopupOpen)
    }

    function handleEditProfileClick() {
        console.log(isEditProfilePopupOpen);
        setEditProfilePopupOpen(true);
        setTimeout(biba, 10000)
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function handleSelectedCard(card) {
        setSelectedCard(card);
    }

    return (
        <div className="page">
            <Header />
            <Main 
            onEditAvatar={handleEditAvatarClick} 
            onEditProfile={handleEditProfileClick} 
            onAddPlace ={handleAddPlaceClick}/>
            <Footer />

            {/* попап редактирования имени профиля */}
            <PopupWithForm
                name="info"
                isOpen={isEditProfilePopupOpen}
                title="Редактировать профиль"
                buttonText="Сохранить"
                onClose={closeAllPopups}
            >
                <fieldset className="popup__fieldset">
                    <label className="popup__label popup__label_value_name">
                        <input
                            required
                            // minLength="2"
                            // maxLength="40"
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
                            // minLength="2"
                            // maxLength="200"
                            type="text"
                            className="popup__input"
                            id="description"
                            placeholder="Введите описание профиля"
                        />
                        <span className="popup__input-error popup__input-error_type_description"></span>
                    </label>
                </fieldset>
            </PopupWithForm>

            {/* попап редактирования аватара профиля */}
            <PopupWithForm
                name="avatar"
                isOpen={isEditAvatarPopupOpen}
                title="Обновить аватар"
                buttonText="Сохранить"
                onClose={closeAllPopups}
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
            </PopupWithForm>

            {/* попап добавления новой карточки */}
            <PopupWithForm
                name="images"
                isOpen={isAddPlacePopupOpen}
                title="Новое место"
                buttonText="Создать"
                onClose={closeAllPopups}
            >
                        <fieldset className="popup__fieldset">
                            <label className="popup__label popup__label_value_name">
                                <input
                                    required
                                    // minLength="2"
                                    // maxLength="30"
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
            </PopupWithForm>

        </div>
    );
}

export default App;
