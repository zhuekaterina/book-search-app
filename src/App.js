import React from 'react';
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import SnippetsContainer from './components/SnippetsContainer';
import Footer from './components/Footer';
import PopupWithBook from './components/PopupWithBook';
import { api } from './utils/api.js';

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
      console.log(data);
      if (data.numFound === 0) {
        setBookListEmpty(true);
      } else {
        setBookListEmpty(false);
        console.log(data);
        const books = data.docs.map((book) => {
          return {
            title: book.title,
            author: book.author_name || 'Unknown author',
            date: book.first_publish_year,
            coverId: book.cover_edition_key,
            key: book.key,
            isbn: book.isbn
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
        isbn10: data.isbn_10,
        isbn13: data.isbn_13,
        publishers: data.publishers,
        link: data.works.key
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
