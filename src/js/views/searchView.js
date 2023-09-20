class SearchView {
  _parentEl = document.querySelector('.search');

  getQuery() {
    const val = this._parentEl.querySelector('.search__field').value;
    this._clear();
    return val;
  }

  _clear() {
    this._parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    //we cannot directly use handler because when we submit a form page will reload so we need to prevent default action first.
    this._parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
