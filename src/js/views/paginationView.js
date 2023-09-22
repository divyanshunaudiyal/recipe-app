import view from './view';
import icons from 'url:../../img/icons.svg';

class paginationView extends view {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    //page 1, there are more pages
    if (curPage == 1 && numPages > 1) {
      return `
      
      <button class="btn--inline pagination__btn--next">
      <span>PAGE ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}svg#icon-arrow-right"></use>
      </svg>
    </button>
      `;
    }

    //last page
    if (curPage == numPages && numPages > 1) {
      return `
      <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}svg#icon-arrow-left"></use>
      </svg>
      <span>PAGE ${curPage - 1}</span>
    </button>
      `;
    }

    //other page
    if (curPage > 1 && curPage < numPages) {
      return `
      
    <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}svg#icon-arrow-left"></use>
      </svg>
      <span>PAGE ${curPage - 1}</span>
    </button>

    <button class="btn--inline pagination__btn--next">
      <span>PAGE ${curPage + 1}</span>
      <svg class="search__icon">
        <use href="${icons}svg#icon-arrow-right"></use>
      </svg>
    </button>

    `;
    }
    //page 1 ,there are no more pages
    return ``;
  }

  addHandlerCLick(handler) {
    document
      .querySelector('.pagination')
      .addEventListener('click', function (e) {
        e.preventDefault();
        // const buttonClassList = e.target.classList;

        // // Check the classList to determine which button was clicked
        // if (buttonClassList.contains('pagination__btn--prev')) {
        //   // The previous button was clicked
        //   console.log('Previous button clicked');
        // } else if (buttonClassList.contains('pagination__btn--next')) {
        //   // The next button was clicked
        //   console.log('Next button clicked');
        // }

        const btn = e.target.closest('.btn--inline');
        // btn.innerText=PAGE 1,PAGE 2 ... PAGE N
        handler(+btn.innerText.slice(5)); //to eliminate 'PAGE ' from 'PAGE NO'
      });
  }
}

export default new paginationView();
