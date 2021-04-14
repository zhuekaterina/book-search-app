import { apiInfo } from './utils.js';

class Api {
    constructor({baseUrl}) {
        this._baseUrl = baseUrl;
    }

    _getResStatus(res) {
        if (res.ok) {
            return res.json();
          }
          return Promise.reject(`Ошибка: ${res.status}`);
    }

    getBookList(request) {
        return fetch(`${this._baseUrl}/search.json?title=${request}`
        )
        .then(res => this._getResStatus(res));
    }

    getBook(request) {
        return fetch(`${this._baseUrl}${request}.json`
        )
        .then(res => this._getResStatus(res));
    }

}

export const api = new Api(apiInfo);