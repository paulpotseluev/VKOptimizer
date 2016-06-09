// ==UserScript==
// @name         VK Optimizer
// @namespace    http://vk.com/
// @version      0.3
// @description  Скрипт, изменяющий внешний вид страницы ВКонтакте с новым дизайном для более удобного восприятия.
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
addGlobalStyle('.is_rtl {font-family:Arial !important}');
addGlobalStyle('#profile_photos_module {height:40px !important}');
addGlobalStyle('.crisp_image {display:none !important}');