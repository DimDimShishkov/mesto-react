import React from 'react';

function PopupWithForm(props) {
  
  function closePopup(evt) {
    if (evt.key === 'Escape' ||
    evt.target.classList.contains('popup_opened') ||
    evt.target.classList.contains('popup__exit-button')) {
      props.onClose()
    }
  }

  return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`} onClick={closePopup}>
      <div className="popup__container">
        <h2 className="popup__title">{props.title}</h2>

        <form autoComplete="off" noValidate className="popup__form" name={props.name} onSubmit={props.onSubmit}>
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

export default PopupWithForm;
