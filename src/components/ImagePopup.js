const React = require('react');

function ImagePopup(props) {
    return (
        <div className={`popup popup_type_image ${props.card ? 'popup_opened' : ''}`}>
            <div className="popup__looking">
                <img
                    src={props.card ? props.card.link : '#'}
                    alt={props.card ? props.card.name : ''}
                    className="popup__image"
                />
                <button className="popup__exit-button" type="button" onClick={props.onClose}></button>
                <h2 className="popup__description">{props.card ? props.card.name : ''}</h2>
            </div>
        </div>
    );
}

export default ImagePopup;
