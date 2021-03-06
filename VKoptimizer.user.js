// ==UserScript==
// @name         VK Optimizer
// @namespace    http://vk.com/
// @updateURL   https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.user.js
// @downloadURL https://github.com/paulpotseluev/VKOptimizer/raw/master/VKoptimizer.user.js
// @version      0.44.0
// @description  Скрипт, изменяющий внешний вид страницы ВКонтакте с новым дизайном для более удобного восприятия.
// @author       Paul Potseluev
// @match        https://vk.com/*
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
addGlobalStyle('#profile_photos_module {height:47px !important}');
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
addGlobalStyle('.reply_field {font-family: Arial !important;color: #000 !important;}');
//Исправляем внешний вид иконки "Онлайн"
addGlobalStyle('.online::after {bottom: 5%;right: 3%;border: 1px solid rgba(221, 255, 216, 0.79);height: 6px;width: 6px;}');
addGlobalStyle('.chat_tab_imgcont.online:after {bottom: 1px;right: 1px;border: 1px solid #fff;height: 5px;width: 5px;}');
addGlobalStyle('.friends_user_row .online:after {width: 6px; height: 6px}');
addGlobalStyle('.friends_user_row .online.mobile:after {height:10px;width:6px;bottom:4%;right:6%}');
addGlobalStyle('.friends_user_row .online:after {border: 2px solid #fff}');
//Исправляем счётчик сообщений в чате
addGlobalStyle('.chat_tab_counter {top: 6px;left: 6px;height: 8px;min-width: 5px;border-radius: 6px;padding: 3px 3px;font-size: 11px;}');
//Убираем круглые аватарки и прочие элементы
addGlobalStyle('.nim-peer--photo-w,.top_profile_img,.reply_img,.copy_post_img,.post_img,.cell_img,.people_cell_img,.group_box_image_link,.cell_img,.thumb,.poll_tt_image,.like_tt_image,.group_row_photo,.right_list_img,.page_video_play_icon,.chat_tab_img,.profile_career_img,.mention_tt_img,.audio_page_player_play.icon,.ow_ava.ow_ava_mid,.feedback_img,.friends_common_img,.notifier_image {border-radius:10% !important}');
addGlobalStyle('.audio_play {border-radius:10% !important; width: 20px !important; height: 20px !important; background: #577ca1 url(/images/icons/audio_playpause.png) no-repeat 6px 5px !important; margin-top:2px !important}');
addGlobalStyle('a.fc_msgs_img,img.fc_contact_photo,.mention_tt_person_img,.thumb_off,.thumb_on,.ow_ava.ow_ava_small,.feedback_group_photo_img,.audio_page_player_play .icon {border-radius:15% !important}');
addGlobalStyle('.friends_photo_img,.fans_fan_img,.group_row_img {border-radius:5% !important}');
//Исправляем размеры превью в постах
addGlobalStyle('.wall_module div.page_media_link_desc_wrap {color: #33567f !important; }');
addGlobalStyle('.page_media_link_img {max-height:200px}');
addGlobalStyle('.wall_module div.page_media_link_desc_wrap {padding: 5px 15px 6px;}');
addGlobalStyle('body {background:none}');
addGlobalStyle('.wall_module .wall_posts.all>.all~.all, .wall_module .wall_posts.own>.own~.own, .wall_module .wall_posts.postponed>.postponed~.postponed, .wall_module .wall_posts.suggested>.suggest~.suggest, .wall_module .wall_posts_search>.post~.post,._post,.post {margin: 0px;border-radius:0px;}');
//Фиксируем левую навигационную панель, чтобы пространство слева от основного блока было заполнено
addGlobalStyle('.side_bar_inner {position: fixed !important; margin-top:46px !important}');