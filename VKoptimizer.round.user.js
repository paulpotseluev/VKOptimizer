// ==UserScript==
// @name         VK Optimizer Round Photos
// @namespace    http://vk.com/
// @updateURL   https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.round.user.js
// @downloadURL https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.round.user.js
// @version      0.43.4
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
addGlobalStyle('body {font-family:Arial !important}');
//Сокращаем высоту блока фотографий на странице профиля
addGlobalStyle('#profile_photos_module {height:40px !important}');
//Скрываем фотографии с экрана
addGlobalStyle('.crisp_image {display:none !important}');
//Включаем первьюшки видео
addGlobalStyle('.video_item_thumb {display:block !important}');
//Изменяем шрифт в окне диалогов:
addGlobalStyle('.im-chat-input--text {font-family: Arial !important;color: #000 !important;}');
//Изменяем шрифт в окне создания поста
addGlobalStyle('#post_field,.like_share_text {font-family: Arial !important;color: #000 !important;}');
addGlobalStyle('#wpe_text, .wpe_text {font-family: Arial !important}');
//...Шрифт окна комментов тоже меняем
addGlobalStyle('.reply_field {font-family: Arial !important;color: #000 !important;}');\
//Исправляем размеры превью в постах
addGlobalStyle('.wall_module div.page_media_link_desc_wrap {color: #33567f !important; }');
addGlobalStyle('.page_media_link_img {max-height:200px}');
addGlobalStyle('.wall_module div.page_media_link_desc_wrap {padding: 5px 15px 6px;}');
addGlobalStyle('body {background:none}');
addGlobalStyle('.wall_module .wall_posts.all>.all~.all, .wall_module .wall_posts.own>.own~.own, .wall_module .wall_posts.postponed>.postponed~.postponed, .wall_module .wall_posts.suggested>.suggest~.suggest, .wall_module .wall_posts_search>.post~.post,._post,.post {margin: 0px;border-radius:0px;}');
//Фиксируем левую навигационную панель, чтобы пространство слева от основного блока было заполнено
addGlobalStyle('.side_bar_inner {position: fixed !important; margin-top:46px !important}');