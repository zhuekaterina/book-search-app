function PopupWithBook(props) {

    return (
        <div className={`popup-book ${props.isOpened && 'popup-book_opened'}`}>
            <figure className="popup-book__container">
                <button type="button" className="popup-book__close-button" name="close-button" onClick={props.onClose}></button>
                <img className="popup-book__image" src={"https://covers.openlibrary.org/b/olid/" + props.book.coverId + "-L.jpg"} alt="Book cover." />
                <div className="popup-book__titles">
                    <p className="popup-book__title popup-book__name popup-book__title_bold">{props.book.title}</p>
                    <p className="popup-book__title popup-book__author">{`by ${props.book.author}`}</p>
                    <p className="popup-book__title popup-book__date">{`Published in ${props.bookInfo.date}`}</p>
                    <p className="popup-book__title popup-book__publishers">by {props.bookInfo.publishers}</p>
                    <p className="popup-book__title popup-book__isbn">ISBN 10: {props.bookInfo.isbn10}</p>
                    <p className="popup-book__title popup-book__isbn">ISBN 13: {props.bookInfo.isbn13}</p>
                    <a className="popup-book__title popup-book__link" href={`https://openlibrary.org${props.book.path}`} target="_blank" rel="noreferrer">{`https://openlibrary.org${props.book.path}`}</a>
                </div>
            </figure>
        </div>
    );
}
  
export default PopupWithBook;
