// ==UserScript==
// @name         VK Optimizer Round Photos
// @namespace    http://vk.com/
// @updateURL   https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.round.user.js
// @downloadURL https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.round.user.js
// @version      0.4
// @description  Скрипт, изменяющий внешний вид страницы ВКонтакте с новым дизайном для более удобного восприятия. Аватарки и фотографии — круглые.
// @author       Paul Potseluev
// @match        https://new.vk.com/*
// @grant        none
// ==/UserScript==

function addGlobalStyle(css) {
    var head, style;
    head = document.getElementsByTagName('head')[0];
    if (!head) { return; }
    style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML = css;
    head.appendChild(style);
}
//Изменяем шрифт на нормальный
addGlobalStyle('.is_rtl {font-family:Arial !important}');
//Сокращаем высоту блока фотографий на странице профиля
addGlobalStyle('#profile_photos_module {height:40px !important}');
//Скрываем фотографии с экрана
addGlobalStyle('.crisp_image {display:none !important}');
//Изменяем шрифт в окне диалогов:
addGlobalStyle('.im-chat-input--text {font-family: Arial !important;color: #000 !important;}');
//Изменяем шрифт в окне создания поста
addGlobalStyle('#post_field {font-family: Arial !important;color: #000 !important;}');
//...Шрифт окна комментов тоже меняем
addGlobalStyle('.reply_field {font-family: Arial !important;color: #000 !important;}');
//В меню сообщений прилепим правое меню к правой части страницы, освободив место для колонки сообщений
addGlobalStyle('.im-right-menu.ui_rmenu {right:20px !important}');
//Исправляем внешний вид иконки "Онлайн"
addGlobalStyle('.online::after {bottom: 1%;right: 1%;border: 1px solid rgba(221, 255, 216, 0.79);height: 6px;width: 6px;}');
addGlobalStyle('.chat_tab_imgcont.online:after {bottom: 1px;right: 1px;border: 1px solid #fff;height: 5px;width: 5px;}');
//Исправляем счётчик сообщений в чате
addGlobalStyle('.chat_tab_counter {top: 6px;left: 6px;height: 8px;min-width: 5px;border-radius: 6px;padding: 3px 3px;font-size: 11px;}');