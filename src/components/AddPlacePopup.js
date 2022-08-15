import React from 'react';
import PopupWithForm from './PopupWithForm';

function AddPlacePopup({ isOpen, onClose, onAddPlace, isLoading }) {
  const cardNameRef = React.useRef();
  const cardLinkRef = React.useRef();
  const [buttonText, setButtonText] = React.useState('Создать');

  function handleSubmit(evt) {
    evt.preventDefault();
    if (isLoading) {
      setButtonText('Загрузка...');
    } else {
      setButtonText('Создать');
    }
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
      buttonText={buttonText}
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
