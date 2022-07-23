const moreAdsBtn = document.querySelector('.more-ads__btn');
const dataItems = document.querySelectorAll('.data__item');
moreAdsBtn.onclick = () => {
  for (let item of dataItems) {
    if (item.classList.contains('hide-block')) {
      item.classList.remove('hide-block');
    }
  }
};