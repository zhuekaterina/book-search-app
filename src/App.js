import React from 'react';
import SearchForm from './components/SearchForm';
import Header from './components/Header';
import SnippetsContainer from './components/SnippetsContainer';
import Footer from './components/Footer';
import PopupWithBook from './components/PopupWithBook';

function App() {

  const [popupIsOpened, setPopupOpened] = React.useState(false);

  function handleOpenPopup() {
    setPopupOpened(true);
  }

  function handleClosePopup() {
    setPopupOpened(false);
  }

  return (
    <div className="page">
      <Header />
      <SearchForm />
      <SnippetsContainer onOpenPopup={handleOpenPopup}/>
      <Footer />
      <PopupWithBook isOpened={popupIsOpened} onClose={handleClosePopup} />
    </div>
  );
}

export default App;
