import React from 'react';
import PopupWithForm from './PopupWithForm';

/* попап редактирования имени профиля */

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {
  const cardNameRef = React.useRef();
  const cardLinkRef = React.useRef();

  function handleSubmit(evt) {
    // Запрещаем браузеру переходить по адресу формы
    evt.preventDefault();
    console.log(cardNameRef);
    onAddPlace({
      name: cardNameRef.current.value,
      link: cardLinkRef.current.value,
    });
    cardNameRef.current.value = '';
    cardLinkRef.current.value = '';
  }

  return (
    <PopupWithForm
      name="images"
      isOpen={isOpen}
      title="Новое место"
      buttonText="Создать"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label popup__label_value_name">
          <input
            required={true}
            minLength={2}
            maxLength={30}
            type="text"
            className="popup__input"
            id="name"
            placeholder="Название"
            ref={cardNameRef}
          />
          <span className="popup__input-error popup__input-error_type_name"></span>
        </label>

        <label className="popup__label popup__label_value_description">
          <input
            required={true}
            type="url"
            className="popup__input"
            id="link"
            placeholder="Ссылка на картинку"
            ref={cardLinkRef}
          />
          <span className="popup__input-error popup__input-error_type_link"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default AddPlacePopup;
