// // Tabs tabs.js
// const tabs = document.querySelectorAll('.tab'),
//    tabsContent = document.querySelectorAll('.tab-content'),
//    tabsParent = document.querySelector('.tabs-list');
// function hideTabContent() {
//    tabsContent.forEach(item => {
//       item.style.display = 'none';
//    });
//    tabs.forEach(tab => {
//       tab.classList.remove('tab-active');
//    });
// }
// function showTabContent(i = 0) {
//    tabsContent[i].style.display = '';
//    tabs[i].classList.add('tab-active');
// }
// hideTabContent();
// showTabContent();

// tabsParent.addEventListener('click', (event) => {
//    const target = event.target;
//    if (target && target.classList.contains('tab')) {
//       tabs.forEach((item, i) => {
//          if (target == item) {
//             hideTabContent();
//             showTabContent(i);
//          }
//       });
//    }
// });

// Tabs tabs.js
const tabs = document.querySelectorAll('.tab-2'),
   tabsContent = document.querySelectorAll('.tab-content'),
   tabsParent = document.querySelector('.tabs-list-2');
function hideTabContent() {
   tabsContent.forEach(item => {
      item.style.display = 'none';
   });
   tabs.forEach(tab => {
      tab.classList.remove('tab-2-active');
   });
}
function showTabContent(i = 0) {
   tabsContent[i].style.display = '';
   tabs[i].classList.add('tab-2-active');
}
hideTabContent();
showTabContent();

tabsParent.addEventListener('click', (event) => {
   const target = event.target;
   if (target && target.classList.contains('tab-2')) {
      tabs.forEach((item, i) => {
         if (target == item) {
            hideTabContent();
            showTabContent(i);
         }
      });
   }
});