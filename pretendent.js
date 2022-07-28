/*const moreAdsBtn = document.querySelector('.more-ads__btn');
const dataItems = document.querySelectorAll('.data__item');
moreAdsBtn.onclick = () => {
  for (let item of dataItems) {
    if (item.classList.contains('hide-block')) {
      item.classList.remove('hide-block');
    }
  }
};*/

/************Отредактировать резюме************ */
const editResume = document.querySelector('.edit-resume');
const edits = document.querySelectorAll('.edit');
const resumeMainInfo = document.querySelector('.resume-main__info');
const infoItems = resumeMainInfo.querySelectorAll('p');
const adressWrap = document.querySelector('.adress__wrap');
const skillsWrapList = document.querySelector('.skills__wrap-list');
const liRemoves = document.querySelectorAll('.li-remove');
const listItems = document.querySelectorAll('.keys-listitem');
const titleEdits = document.querySelectorAll('.title-edit');
const tdTitles = document.querySelectorAll('.td-title');
const contactsWrap = document.querySelector('.contacts-wrap');
const contactsWrapEdit = document.querySelector('.contacts-wrap__edit');

editResume.addEventListener('click', function () {
  for (let item of edits) {
    item.classList.remove('initial-hide');
  }
  for (let item of liRemoves) {
    item.classList.remove('initial-hide');
  }
  for (let item of infoItems) {
    item.classList.add('edit-info');
  }
  for (let item of listItems) {
    item.classList.add('item-edit');
  }
  for (let item of titleEdits) {
    item.classList.add('title-edit-show');
  }
  for (let item of tdTitles) {
    if (item.childNodes[1]) {
      if (item.childNodes[1].tagName == 'SPAN') {
        item.classList.add('goup');
      }
    }
  }

  contactsWrap.style.display = 'none';
  contactsWrapEdit.style.display = 'flex';

  adressWrap.classList.add('edit-info');
  skillsWrapList.classList.add('edit-info');
});
/**********Конец отредактировать резюме***********/


/***************Добавить в черный список************ */
const btnBlack = document.querySelector('.btn-black');
const toBlack = 'Добавить в черный список';
const fromBlack = 'Убрать из черного списка';
let inBlackList = false;

btnBlack.addEventListener('click', toBlackList);

function toBlackList() {
  if (!inBlackList) {
    if (inFavorite) {
      toFavorite();
    }
    btnBlack.classList.add('pressed');
    btnBlack.querySelector('span').innerText = fromBlack;
    inBlackList = !inBlackList;
  } else {
    btnBlack.classList.remove('pressed');
    btnBlack.querySelector('span').innerText = toBlack;
    inBlackList = !inBlackList;
  }
}
/***********Конец добавить в черный список********** */

/***************Добавить в избранное************ */
const btnFavorite = document.querySelector('.btn-favorite');
const addtoFavorite = 'Добавить в избранное';
const fromFavorite = 'Убрать из избранного';
let inFavorite = false;

btnFavorite.addEventListener('click', toFavorite);

function toFavorite() {
  if (!inFavorite) {
    if (inBlackList) {
      toBlackList();
    }
    btnFavorite.classList.add('pressed');
    btnFavorite.querySelector('span').innerText = fromFavorite;
    inFavorite = !inFavorite;
  } else {
    btnFavorite.classList.remove('pressed');
    btnFavorite.querySelector('span').innerText = addtoFavorite;
    inFavorite = !inFavorite;
  }
}
/***********Конец добавить в избранное********** */