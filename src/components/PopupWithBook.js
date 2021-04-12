function PopupWithBook(props) {
    return (
        <div className={`popup-book ${props.isOpened && 'popup-book_opened'}`}>
            <figure className="popup-book__container">
                <button type="button" className="popup-book__close-button" name="close-button" onClick={props.onClose}></button>
                <img className="popup-book__image" src={"http://covers.openlibrary.org/b/id/" + props.book.coverId + "-L.jpg"} alt="#" />
                <p className="text">{props.book.title}</p>
                <p className="text">{props.book.author}</p>
                <p className="text">{props.book.date}</p>
                <p className="text">Publisher</p>
                <p className="text">ISBN</p>
            </figure>
        </div>
    );
}
  
export default PopupWithBook;
