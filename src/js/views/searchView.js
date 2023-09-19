class SearchView {
  #parentEl = document.querySelector('.search');

  getQuery() {
    const val = this.#parentEl.querySelector('.search__field').value;
    this.#clear();
    return val;
  }

  #clear() {
    this.#parentEl.querySelector('.search__field').value = '';
  }
  addHandlerSearch(handler) {
    //we cannot directly use handler because when we submit a form page will reload so we need to prevent default action first.
    this.#parentEl.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();
