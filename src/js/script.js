'use strict';
window.addEventListener('DOMContentLoaded', () => {

   @@include("burger.js")
   @@include("tabs.js")

   @@include("spend.js")

   // const sidebarRight = document.querySelector('.sidebar-right'),
   //       sidebarBtn = sidebarRight.querySelector('#sidebarBtn');
   // sidebarBtn.addEventListener('click',(e) => {
   //    e.preventDefault();
   //    sidebarRight.classList.toggle('show-menu');


   //    // alert('Hello!');
   // });

   // Header-avatar
   const headerAvatar = document.querySelector('.header-avatar'),
      headerAvatarText = headerAvatar.querySelector('.header-avatar__text');
   headerAvatar.addEventListener('click', () => {
      headerAvatarText.classList.toggle('hide');
   });


   

   // class HeadTitle {
   //    constructor(title, parentSelector) {
   //       this.title = title;
   //       this.parent = document.querySelector(parentSelector);
   //    }
   //    render() {
   //       const element = document.createElement('div');
   //       element.innerHTML = `
   //       <h1 class="title">${this.title}</h1>
   //       `;
   //       this.parent.append(element);
   //    }
   // }

   // new HeadTitle(
   //    "Это тестовый заголовок!",
   //    '#test'
   // ).render();


});