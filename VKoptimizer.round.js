// ==UserScript==
// @name         VK Optimizer Round Photos
// @namespace    http://vk.com/
// @updateURL   https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.round.user.js
// @downloadURL https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.round.user.js
// @version      0.42.2
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
addGlobalStyle('#post_field,.like_share_text {font-family: Arial !important;color: #000 !important;}');
//...Шрифт окна комментов тоже меняем
addGlobalStyle('.reply_field {font-family: Arial !important;color: #000 !important;}');\
