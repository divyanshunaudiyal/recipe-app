import icons from '../../img/icons.svg';

export default class view {
  _data;
  //function to initialize _data
  render(data) {
    if (!data || (Array.isArray(data) && data.length == 0))
      return this.renderError();

    this._data = data;

    this._clear();
    this._parentElement.insertAdjacentHTML(
      'afterbegin',
      this._generateMarkup()
    );
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }
  renderSpinner() {
    const markup = `<div class="spinner">
      <svg>
        <use href="${icons}svg#icon-loader"></use>
      </svg>
      </div> `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //render error message
  renderError(msg = this._errorMessage) {
    const markup = `
      <div class="error">
              <div>
                <svg>
                  <use href="${icons}svg#icon-alert-triangle"></use>
                </svg>
              </div>
              <p>------------${msg}------------- </p>
            </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  //render success message
  renderMessage(msg = this._message) {
    const markup = `
      <div class="message">
              <div>
                <svg>
                  <use href="${icons}svg#icon-smile"></use>
                </svg>
              </div>
              <p>------------${msg}------------- </p>
            </div>
      `;
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }
}
