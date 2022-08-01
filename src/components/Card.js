import React from 'react';

function Card(props) {
    function handleShowLikes() {
        if (props.likes > 0) {
            return true;
        } else {
            return false;
        }
    }

    function handleClick() {
        props.onCardClick(props);
    }

    return (
        <article className="element">
            <img src={props.link} alt={props.name} className="element__image" onClick={handleClick} />
            <div className="element__title">
                <h2 className="element__text">{props.name}</h2>
                <div className="element__item">
                    <button className="element__like" type="button"></button>
                    <p className={`element__likes ${handleShowLikes() ? 'element__likes_active' : ''}`}>
                        {props.likes}
                    </p>
                </div>
            </div>
            <button className="element__remove" type="submit"></button>
        </article>
    );
}

export default Card;
