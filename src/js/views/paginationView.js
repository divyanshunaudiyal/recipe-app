import view from './view';
import icons from 'url:../../img/icons.svg';

class paginationView extends view {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);
    //page 1, there are more pages
    if (this._data.page == 1 && numPages > 1) {
      return ` 1st page and others`;
    }

    //last page
    if (this._data.page == numPages && numPages > 1) {
      return `last page`;
    }

    //other page
    if (this._data.page > 1 && this._data.page < numPages) {
      return `othr page`;
    }
    //page 1 ,there are no more pages
    return `only 1 page`;
  }
}

export default new paginationView();
