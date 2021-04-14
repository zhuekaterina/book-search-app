import React from 'react';
import SearchForm from './SearchForm';
import Header from './Header';
import SnippetsContainer from './SnippetsContainer';
import Footer from './Footer';
import PopupWithBook from './PopupWithBook';
import { api } from '../utils/api.js';

function App() {

  const [popupIsOpened, setPopupOpened] = React.useState(false);
  const [bookList, setBookList] = React.useState([]);
  const [selectedBook, setSelectedBook] = React.useState({});
  const [bookListEmpty, setBookListEmpty] = React.useState(false);
  const [inputValueForSnippetNoResults, setInputValueForSnippetNoResults] = React.useState('');
  const [selectedBookData, setSelectedBookData] = React.useState({});

  function searchBooks(inputValue) {
    api
    .getBookList(inputValue)
    .then((data) => {
      if (data.numFound === 0) {
        setBookListEmpty(true);
      } else {
        setBookListEmpty(false);
        const books = data.docs.map((book) => {
          return {
            title: book.title,
            author: book.author_name || 'Unknown author',
            coverId: book.cover_edition_key,
            key: book.key,
            path: book.seed[0]
          }
        })
        setBookList(books);
    }
    })
      .then(() => {
        setInputValueForSnippetNoResults(inputValue);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  function getBookInfo(key) {
    api
    .getBook(key)
    .then((data) => {
      setSelectedBookData({
        date: data.publish_date,
        isbn10: data.isbn_10 || 'unknown',
        isbn13: data.isbn_13 || 'unknown',
        publishers: data.publishers
      })
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleOpenPopup(book) {
    setPopupOpened(true);
    setSelectedBook(book);
  }

  function handleClosePopup() {
    setPopupOpened(false);
  }

  return (
    <div className="page">
      <Header />
      <SearchForm onSubmit={searchBooks} />
      <SnippetsContainer onChosenBook={getBookInfo} onOpenPopup={handleOpenPopup} books={bookList} isEmpty={bookListEmpty} inputValue={inputValueForSnippetNoResults}/>
      <Footer />
      <PopupWithBook isOpened={popupIsOpened} onClose={handleClosePopup} book={selectedBook} bookInfo={selectedBookData} />
    </div>
  );
}

export default App;
