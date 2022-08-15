import { CurrentUserContext } from 'contexts/CurrentUserContext';
import React from 'react';
import { api } from '../utils/api';
import AddPlacePopup from './AddPlacePopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
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
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState();
  const [cards, setCards] = React.useState([]);

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
    console.log(card)
    setSelectedCard(card);
  }

  // загрузка данных пользователя
  React.useEffect(() => {
    api
      .handleDownloadProfileInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // загрузка карточек
  React.useEffect(() => {
    api
      .handleDownloadCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // функция установки лайка на картинку
  function handleCardLike(id, isLiked) {
    api
      .handleCardLikes(id, !isLiked)
      .then((res) => {
        setCards(cards.map((card) => (card._id === res._id ? res : card)));
      })
      .catch((err) => {
        console.log(err);
      });
  }

    // функция удаления картинки
    function handleCardDelete(id) {
      api
        .handleDeleteServerCard(id)
        .then((res) => {
          setCards(cards.filter((card) => (card._id !== res._id)));
        })
        .catch((err) => {
          console.log(err);
        });
    }

    // функция редактирования профиля
    function handleUpdateUser(data) {
      setIsLoading(true);
      api
      .handleUploadProfileInfo(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
    }

    // функция редактирования аватара
    function handleUpdateAvatar(data) {
      api
      .handleUploadProfileAvatar(data)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
    }

    // функция добавления карточки
    function handleAddPlaceSubmit(card) {
      api
      .handleUploadCard(card)
      .then((res) => {
        setCards([res, ...cards]); 
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
    }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={onCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />

        <Footer />

        {/* попап редактирования имени профиля */}
        <EditProfilePopup isOpen={isEditProfilePopupOpen} onUpdateUser={handleUpdateUser } onClose={closeAllPopups} isLoading={isLoading}></EditProfilePopup>

        {/* попап редактирования аватара профиля */}
        <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onUpdateAvatar={handleUpdateAvatar } onClose={closeAllPopups}></EditAvatarPopup>

        {/* попап добавления новой карточки */}
        <AddPlacePopup isOpen={isAddPlacePopupOpen} onAddPlace={handleAddPlaceSubmit } onClose={closeAllPopups}></AddPlacePopup>
{/*         <PopupWithForm
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
              <input required type="url" className="popup__input" id="link" placeholder="Ссылка на картинку" />
              <span className="popup__input-error popup__input-error_type_link"></span>
            </label>
          </fieldset>
        </PopupWithForm> */}

        {/* попап просмотра карточки */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
