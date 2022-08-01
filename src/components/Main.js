import React from 'react';
import api from '../utils/api';
import Card from './Card';

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, userName, userAvatar, userDescription}) {
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.handleDownloadCards()
            .then((res) => {
                setCards(res);
            })
            .catch((err) => {
                console.log(err);
            });
    });

    return (
        <>
            <section className="profile">
                <div className="profile__pic">
                    <button className="profile__edit-avatar" type="button" onClick={onEditAvatar}></button>
                    <img src={userAvatar} alt={userName} className="profile__avatar" />
                </div>

                <div className="profile__info">
                    <div className="profile__main">
                        <h1 className="profile__title">{userName}</h1>
                        <button className="profile__edit-button" type="button" onClick={onEditProfile}></button>
                    </div>
                    <p className="profile__description">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={onAddPlace}></button>
            </section>

            <section className="elements">
                {cards.map((card) => (
                    <Card
                        link={card.link}
                        name={card.name}
                        likes={card.likes.length}
                        key={card._id}
                        onCardClick={onCardClick}
                    />
                ))}
            </section>
        </>
    );
}

export default Main;
