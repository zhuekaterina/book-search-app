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

  function searchBooks(inputValue) {
    api
    .getBookList(inputValue)
    .then((data) => {
      console.log(data);
      const books = data.docs.map((book) => {
        return {
          title: book.title,
          author: book.author_name,
          year: book.first_publish_year,
          coverId: book.cover_i
        }
      })
      setBookList(books);
      console.log(books);
    })
    .catch((err) => {
      console.log(err);
    });
  }

  function handleOpenPopup(book) {
    setPopupOpened(true);
    setSelectedBook(book);
    console.log(book);
  }

  function handleClosePopup() {
    setPopupOpened(false);
  }

  return (
    <div className="page">
      <Header />
      <SearchForm onSubmit={searchBooks} />
      <SnippetsContainer onOpenPopup={handleOpenPopup} books={bookList}/>
      <Footer />
      <PopupWithBook isOpened={popupIsOpened} onClose={handleClosePopup} book={selectedBook} />
    </div>
  );
}

export default App;
