import React from 'react';
import {api} from './api';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';
import PopupWithForm from './PopupWithForm';

function App() {
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);
    const [userName, setUserName] = React.useState();
    const [userAvatar, setUserAvatar] = React.useState();
    const [userDescription, setUserDescription] = React.useState();

    function closeAllPopups() {
        setEditAvatarPopupOpen(false);
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    function handleEditAvatarClick() {
        setEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setAddPlacePopupOpen(true);
    }

    function onCardClick(card) {
        setSelectedCard(card);
    }

    React.useEffect(() => {
      api.handleDownloadProfileInfo()
          .then((res) => {
              setUserName(res.name);
              setUserAvatar(res.avatar);
              setUserDescription(res.about);
          })
          .catch((err) => {
              console.log(err);
          });
  });

    return (
        <div className="page">
            <Header />
            <Main
                onEditAvatar={handleEditAvatarClick}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onCardClick={onCardClick}
                userName={userName}
                userAvatar={userAvatar}
                userDescription={userDescription}
            />

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

            {/* попап просмотра карточки */}
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
    );
}

export default App;
