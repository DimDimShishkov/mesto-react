 import React from 'react';
import PopupWithForm from './PopupWithForm';


/* попап редактирования имени профиля */

function EditProfilePopup(props) {
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);

  return (
    <PopupWithForm
    name="info"
    isOpen={isEditProfilePopupOpen}
    title="Редактировать профиль"
    buttonText="Сохранить"
    // onClose={closeAllPopups}
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
  );
}

export default EditProfilePopup;

/*function PopupWithForm(props) {
  return (
    <div onClick={props.onClose} className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>

        <form autoComplete="off" noValidate className="popup__form" name={props.name}>
          {props.children}
          <button type="submit" className="popup__submit-button">
            {props.buttonText}
          </button>
        </form>
        <button className="popup__exit-button" type="button" onClick={props.onClose}></button>
      </div>
    </div>
  );
}

      
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

export default PopupWithForm;
 */