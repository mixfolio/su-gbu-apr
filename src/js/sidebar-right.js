const sidebarRight = document.querySelector('.sidebar-right'),
   sidebarBtn = sidebarRight.querySelector('#sidebarBtn');
sidebarBtn.addEventListener('click', () => {
   sidebarRight.classList.toggle('show-menu');
});