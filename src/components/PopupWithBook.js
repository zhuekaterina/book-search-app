function PopupWithBook(props) {

    return (
        <div className={`popup-book ${props.isOpened && 'popup-book_opened'}`}>
            <figure className="popup-book__container">
                <button type="button" className="popup-book__close-button" name="close-button" onClick={props.onClose}></button>
                <img className="popup-book__image" src={"http://covers.openlibrary.org/b/olid/" + props.book.coverId + "-L.jpg"} alt="#" />
                <p className="text">{props.book.title}</p>
                <p className="text">{`by ${props.book.author}`}</p>
                <p className="text">{`Published in ${props.bookInfo.date}`}</p>
                <p className="text">{props.bookInfo.publishers}</p>
                <p className="text">{props.bookInfo.isbn10}, {props.bookInfo.isbn13}</p>
                <a href={`https://openlibrary.org/books/${props.book.coverId}`} target="_blank" rel="noreferrer" className="text">{`https://openlibrary.org/books/${props.book.coverId}`}</a>
            </figure>
        </div>
    );
}
  
export default PopupWithBook;
