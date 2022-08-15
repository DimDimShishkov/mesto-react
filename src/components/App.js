import { CurrentUserContext } from 'contexts/CurrentUserContext';
import React from 'react';
import { api } from '../utils/api';
import AddPlacePopup from './AddPlacePopup';
import DeleteCardPopup from './DeleteCardPopup';
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from './EditProfilePopup';
import Footer from './Footer';
import Header from './Header';
import ImagePopup from './ImagePopup';
import Main from './Main';

function App() {
  const [pageBlock, setPageBlock] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false);
  const [isDeletePlacePopupOpen, setDeletePlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setAddPlacePopupOpen(false);
    setSelectedCard(null);
    setDeletePlacePopupOpen(false);
  }

  function handlePageScroll() {
    if (pageBlock) {
      document.body.style.overflow = "hidden"
    }
    document.body.style.overflow = "visible"
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

  function handleCardDeleteClick(card) {
    setDeletePlacePopupOpen(card);
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
        setCards((prevState) => {
          return prevState.map((card) => (card._id === res._id ? res : card));
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  // функция удаления картинки
  function handleCardDelete(id) {
    setIsLoading(true);
    api
      .handleDeleteServerCard(id)
      .then(() => {
        setCards((prevState) => {
          return prevState.filter((card) => card._id !== id);
        });
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
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
    setIsLoading(true);
    api
      .handleUploadProfileAvatar(data)
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

  // функция добавления карточки
  function handleAddPlaceSubmit(card) {
    setIsLoading(true);
    api
      .handleUploadCard(card)
      .then((res) => {
        setCards([res, ...cards]);
        closeAllPopups();
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div
        className={`page`}
      >
        <Header />
        <Main
          onEditAvatar={handleEditAvatarClick}
          onEditProfile={handleEditProfileClick}
          onAddPlace={handleAddPlaceClick}
          onCardClick={onCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDeleteClick}
        />

        <Footer />

        {/* попап редактирования имени профиля */}
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onUpdateUser={handleUpdateUser}
          onClose={closeAllPopups}
          isLoading={isLoading}
        ></EditProfilePopup>

        {/* попап редактирования аватара профиля */}
        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onUpdateAvatar={handleUpdateAvatar}
          onClose={closeAllPopups}
          isLoading={isLoading}
        ></EditAvatarPopup>

        {/* попап добавления новой карточки */}
        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onAddPlace={handleAddPlaceSubmit}
          onClose={closeAllPopups}
          isLoading={isLoading}
        ></AddPlacePopup>

        {/* попап просмотра карточки */}
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        {/* попап удаления карточки */}
        <DeleteCardPopup
          isOpen={isDeletePlacePopupOpen}
          onCardDelete={handleCardDelete}
          onClose={closeAllPopups}
          isLoading={isLoading}
        ></DeleteCardPopup>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
