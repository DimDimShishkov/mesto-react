/* import './App.css'; */

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

function App() {
    const test = console.log(123);
    return (
      <body className="page">

    <Header />

    <section class="profile">
      <div class="profile__pic">
        <button class="profile__edit-avatar" type="button"></button>
        <img src="./images/avatar.jpg" alt="аватар" class="profile__avatar" />
      </div>

      <div class="profile__info">
        <div class="profile__main">
          <h1 class="profile__title"></h1>
          <button class="profile__edit-button" type="button"></button>
        </div>
        <p class="profile__description"></p>
      </div>
      <button class="profile__add-button" type="button"></button>
    </section>

    <section class="elements"></section>

    {/* <!-- попап смены информации профиля --> */}
    <div class="popup popup_type_info">
      <div class="popup__container popup__container_type_info">
        <h2 class="popup__title">Редактировать профиль</h2>

        <form
          autocomplete="off"
          novalidate
          class="popup__form popup__form_type_info"
          name="info"
        >
          <fieldset class="popup__fieldset">
            <label class="popup__label popup__label_value_name">
              <input
                required
                minlength="2"
                maxlength="40"
                type="text"
                class="popup__input"
                id="title"
                placeholder="Введите имя профиля"
              />
              <span
                class="popup__input-error popup__input-error_type_title"
              ></span>
            </label>

            <label class="popup__label popup__label_value_description">
              <input
                required
                minlength="2"
                maxlength="200"
                type="text"
                class="popup__input"
                id="description"
                placeholder="Введите описание профиля"
              />
              <span
                class="popup__input-error popup__input-error_type_description"
              ></span>
            </label>
          </fieldset>
          <button
            type="submit"
            class="popup__submit-button popup__submit-button_type_info"
          >
            Сохранить
          </button>
        </form>
        <button class="popup__exit-button" type="button"></button>
      </div>
    </div>

    {/* <!-- попап загрузки картинки --> */}
    <div class="popup popup_type_images">
      <div class="popup__container popup__container_type_images">
        <h2 class="popup__title">Новое место</h2>
        <form
          autocomplete="off"
          novalidate
          class="popup__form popup__form_type_images"
          name="images"
        >
          <fieldset class="popup__fieldset">
            <label class="popup__label popup__label_value_name">
              <input
                required
                minlength="2"
                maxlength="30"
                type="text"
                class="popup__input"
                id="name"
                placeholder="Название"
              />
              <span
                class="popup__input-error popup__input-error_type_name"
              ></span>
            </label>

            <label class="popup__label popup__label_value_description">
              <input
                required
                type="url"
                class="popup__input"
                id="link"
                placeholder="Ссылка на картинку"
              />
              <span
                class="popup__input-error popup__input-error_type_link"
              ></span>
            </label>
          </fieldset>

          <button
            type="submit"
            class="popup__submit-button popup__submit-button_type_images"
          >
            Создать
          </button>
        </form>

        <button class="popup__exit-button" type="button"></button>
      </div>
    </div>

    {/* <!-- попап удаления карточки --> */}
    <div class="popup popup_type_delete-image">
      <div class="popup__container popup__container_type_delete-image">
        <h2 class="popup__title">Вы уверены?</h2>
        <form class="popup__form">
          <button
            type="submit"
            class="popup__submit-button popup__submit-button_type_delete-image"
          >
            Да
          </button>
        </form>

        <button class="popup__exit-button" type="button"></button>
      </div>
    </div>

    {/* <!-- попап смены аватара --> */}
    <div class="popup popup_type_avatar">
      <div class="popup__container popup__container_type_avatar">
        <h2 class="popup__title">Обновить аватар</h2>
        <form
          autocomplete="off"
          novalidate
          class="popup__form popup__form_type_avatar"
          name="new-avatar"
        >
          <fieldset class="popup__fieldset">
            <label class="popup__label popup__label_value_name">
              <input
                required
                type="url"
                class="popup__input"
                id="avatar"
                placeholder="Ссылка на картинку"
              />
              <span
                class="popup__input-error popup__input-error_type_avatar"
              ></span>
            </label>
          </fieldset>

          <button
            type="submit"
            class="popup__submit-button popup__submit-button_type_avatar"
          >
            Создать
          </button>
        </form>

        <button class="popup__exit-button" type="button"></button>
      </div>
    </div>

    {/* <!-- попап просмотра картинки --> */}
    <div class="popup popup_type_image">
      <div class="popup__looking">
        <img src="./images/logo.svg" alt="" class="popup__image" />
        <button class="popup__exit-button" type="button"></button>
        <h2 class="popup__description"></h2>
      </div>
    </div>

{/*     <!-- темплейт для новой картинки --> */}
    <template class="image-template">
      <article class="element">
        <img src="./images/logo.svg" alt="" class="element__image" />
        <div class="element__title">
          <h2 class="element__text"></h2>
          <div class="element__item">
            <button class="element__like" type="button"></button>
            <p class="element__likes"></p>
          </div>
        </div>
        <button class="element__remove" type="submit"></button>
      </article>
    </template>


      <Footer />
      </body>
      )
}

export default App;
