(this["webpackJsonpbook-search"]=this["webpackJsonpbook-search"]||[]).push([[0],{11:function(e,t,o){},13:function(e,t,o){"use strict";o.r(t);var n=o(1),s=o.n(n),c=o(4),a=o.n(c),i=(o(11),o(2)),r=o(0);var p=function(e){var t,o=s.a.useState(""),n=Object(i.a)(o,2),c=n[0],a=n[1];function p(){e.onSubmit(c)}function u(e){e.preventDefault(),p()}return Object(r.jsx)("section",{className:"form-container",children:Object(r.jsxs)("form",{className:"search-form",onSubmit:u,children:[Object(r.jsx)("input",{onKeyUp:function(){clearTimeout(t),t=setTimeout(p,1e3)},onKeyDown:function(){clearTimeout(t)},className:"search-form__field",onChange:function(e){e.preventDefault(),a(e.target.value)},placeholder:"Which book do you look for?"}),Object(r.jsx)("button",{className:"search-form__button",onClick:u})]})})};var u=function(){return Object(r.jsxs)("header",{className:"header",children:[Object(r.jsx)("h1",{className:"header__title",children:"BOOKSHELVES"}),Object(r.jsx)("h2",{className:"header__subtitle",children:"Book Search App"})]})};var l=function(e){return Object(r.jsxs)("div",{className:"snippet",onClick:function(){e.onOpenPopup(e.book),e.onChosenBook(e.path)},children:[Object(r.jsx)("img",{src:"https://covers.openlibrary.org/b/olid/"+e.cover+"-S.jpg",className:"snippet__cover",alt:"#"}),Object(r.jsxs)("div",{className:"snippet__titles",children:[Object(r.jsx)("p",{className:"snippet__name",children:e.title}),Object(r.jsx)("p",{className:"snippet__author",children:"by ".concat(e.author)})]})]})};var b=function(e){return Object(r.jsxs)("div",{className:"snippet snippet-no-results",children:[Object(r.jsx)("p",{className:"snippet-no-results__text",children:"Could not find a book with a name starting with "}),Object(r.jsx)("p",{className:"snippet-no-results__title",children:'"'.concat(e.inputValue,'"')})]})};var h=function(e){return Object(r.jsx)("section",{className:"snippets-container",children:e.isEmpty?Object(r.jsx)(b,{inputValue:e.inputValue}):e.books.map((function(t){return Object(r.jsx)(l,{book:t,path:t.path,title:t.title,author:t.author,cover:t.coverId,onOpenPopup:e.onOpenPopup,onChosenBook:e.onChosenBook},t.key)}))})};var j=function(){var e=new Date;return Object(r.jsx)("footer",{className:"footer",children:Object(r.jsxs)("p",{className:"footer__copyright",children:["\xa9 ",e.getFullYear()," Bookshelves"]})})};var _=function(e){return Object(r.jsx)("div",{className:"popup-book ".concat(e.isOpened&&"popup-book_opened"),children:Object(r.jsxs)("figure",{className:"popup-book__container",children:[Object(r.jsx)("button",{type:"button",className:"popup-book__close-button",name:"close-button",onClick:e.onClose}),Object(r.jsx)("img",{className:"popup-book__image",src:"https://covers.openlibrary.org/b/olid/"+e.book.coverId+"-L.jpg",alt:"#"}),Object(r.jsxs)("div",{className:"popup-book__titles",children:[Object(r.jsx)("p",{className:"popup-book__title popup-book__name popup-book__title_bold",children:e.book.title}),Object(r.jsx)("p",{className:"popup-book__title popup-book__author",children:"by ".concat(e.book.author)}),Object(r.jsx)("p",{className:"popup-book__title popup-book__date",children:"Published in ".concat(e.bookInfo.date)}),Object(r.jsxs)("p",{className:"popup-book__title popup-book__publishers",children:["by ",e.bookInfo.publishers]}),Object(r.jsxs)("p",{className:"popup-book__title popup-book__isbn",children:["ISBN 10: ",e.bookInfo.isbn10]}),Object(r.jsxs)("p",{className:"popup-book__title popup-book__isbn",children:["ISBN 13: ",e.bookInfo.isbn13]}),Object(r.jsx)("a",{className:"popup-book__title popup-book__link",href:"https://openlibrary.org".concat(e.book.path),target:"_blank",rel:"noreferrer",children:"https://openlibrary.org".concat(e.book.path)})]})]})})},k=o(5),d=o(6),f=new(function(){function e(t){var o=t.baseUrl;Object(k.a)(this,e),this._baseUrl=o}return Object(d.a)(e,[{key:"_getResStatus",value:function(e){return e.ok?e.json():Promise.reject("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e.status))}},{key:"getBookList",value:function(e){var t=this;return fetch("".concat(this._baseUrl,"/search.json?title=").concat(e)).then((function(e){return t._getResStatus(e)}))}},{key:"getBook",value:function(e){var t=this;return fetch("".concat(this._baseUrl).concat(e,".json")).then((function(e){return t._getResStatus(e)}))}}]),e}())({baseUrl:"https://openlibrary.org"});var m=function(){var e=s.a.useState(!1),t=Object(i.a)(e,2),o=t[0],n=t[1],c=s.a.useState([]),a=Object(i.a)(c,2),l=a[0],b=a[1],k=s.a.useState({}),d=Object(i.a)(k,2),m=d[0],O=d[1],x=s.a.useState(!1),v=Object(i.a)(x,2),g=v[0],N=v[1],y=s.a.useState(""),S=Object(i.a)(y,2),B=S[0],C=S[1],I=s.a.useState({}),w=Object(i.a)(I,2),P=w[0],U=w[1];return Object(r.jsxs)("div",{className:"page",children:[Object(r.jsx)(u,{}),Object(r.jsx)(p,{onSubmit:function(e){f.getBookList(e).then((function(e){if(0===e.numFound)N(!0);else{N(!1);var t=e.docs.map((function(e){return{title:e.title,author:e.author_name||"Unknown author",coverId:e.cover_edition_key,key:e.key,path:e.seed[0]}}));b(t)}})).then((function(){C(e)})).catch((function(e){console.log(e)}))}}),Object(r.jsx)(h,{onChosenBook:function(e){f.getBook(e).then((function(e){U({date:e.publish_date,isbn10:e.isbn_10||"unknown",isbn13:e.isbn_13||"unknown",publishers:e.publishers})})).catch((function(e){console.log(e)}))},onOpenPopup:function(e){n(!0),O(e)},books:l,isEmpty:g,inputValue:B}),Object(r.jsx)(j,{}),Object(r.jsx)(_,{isOpened:o,onClose:function(){n(!1)},book:m,bookInfo:P})]})},O=function(e){e&&e instanceof Function&&o.e(3).then(o.bind(null,14)).then((function(t){var o=t.getCLS,n=t.getFID,s=t.getFCP,c=t.getLCP,a=t.getTTFB;o(e),n(e),s(e),c(e),a(e)}))};a.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(m,{})}),document.getElementById("root")),O()}},[[13,1,2]]]);
//# sourceMappingURL=main.043ecb80.chunk.js.map