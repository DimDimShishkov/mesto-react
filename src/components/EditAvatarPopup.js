import { CurrentUserContext } from 'contexts/CurrentUserContext';
import React from 'react';
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = React.useRef()

  function handleSubmit(evt) {
    evt.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value
    });
    avatarRef.current.value = ''
  }

  return (
    <PopupWithForm
      name="avatar"
      isOpen={isOpen}
      title="Обновить аватар"
      buttonText="Сохранить"
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <fieldset className="popup__fieldset">
        <label className="popup__label popup__label_value_name">
          <input
            required={true}
            type="url"
            className="popup__input"
            id="avatar"
            placeholder="Ссылка на картинку"
            ref={avatarRef}
          />
          <span className="popup__input-error popup__input-error_type_avatar"></span>
        </label>
      </fieldset>
    </PopupWithForm>
  );
}

export default EditAvatarPopup;
