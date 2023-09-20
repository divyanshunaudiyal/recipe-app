import view from './view';
import icons from 'url:../../img/icons.svg';

class resultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = ' No recipes found .Try Again ';
  _message = ' ';

  _generateMarkup() {
    return this._data.map(elem => this._generateMarkupPreview(elem)).join('');
  }

  _generateMarkupPreview(elem) {
    return `
            <li class="preview">
            <a class="preview__link " href="#${elem.id}">
              <figure class="preview__fig">
                <img src="${elem.image}" alt="${elem.title}" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${elem.title}</h4>
                <p class="preview__publisher">${elem.publisher}</p>
                
              </div>
            </a>
          </li>
            `;
  }
}

export default new resultsView();
