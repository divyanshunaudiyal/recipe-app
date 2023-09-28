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
      return this._generateMarkupTextRight(curPage);
    }

    //last page
    if (curPage == numPages && numPages > 1) {
      return this._generateMarkupTextleft(curPage);
    }

    //other page
    if (curPage > 1 && curPage < numPages) {
      return this._generateMarkupTextBoth(curPage);
    }
    //page 1 ,there are no more pages
    return ``;
  }

  _generateMarkupTextRight(pageNum) {
    return `
    <button class="btn--inline pagination__btn--next">
    <span>PAGE ${pageNum + 1}</span>
    <svg class="search__icon">
      <use href="${icons}svg#icon-arrow-right"></use>
    </svg>
  </button>
    `;
  }
  _generateMarkupTextleft(pageNum) {
    return `
      <button class="btn--inline pagination__btn--prev">
      <svg class="search__icon">
        <use href="${icons}svg#icon-arrow-left"></use>
      </svg>
      <span>PAGE ${pageNum - 1}</span>
    </button>
      `;
  }
  _generateMarkupTextBoth(pageNum) {
    return `
      
   ${this._generateMarkupTextleft(pageNum)}
   ${this._generateMarkupTextRight(pageNum)}

    `;
  }

  addHandlerCLick(handler) {
    document
      .querySelector('.pagination')
      .addEventListener('click', function (e) {
        const btn = e.target.closest('.btn--inline');
        if (!btn) return;
        // btn.innerText=PAGE 1,PAGE 2 ... PAGE N
        handler(+btn.innerText.slice(5)); //to eliminate 'PAGE ' from 'PAGE NO'
      });
  }
}

export default new paginationView();
