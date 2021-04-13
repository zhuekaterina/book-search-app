function Snippet(props) {

    function openPopup() {
        props.onOpenPopup(props.book);
        props.onChosenBook(props.cover)
    }


    return (
        <div className="snippet" onClick={openPopup}>
                <img src={"http://covers.openlibrary.org/b/olid/" + props.cover + "-S.jpg"} className="snippet__cover" alt="#" />
                <div className="snippet__titles">
                    <p className="snippet__name">{props.title}</p>
                    <p className="snippet__author">{`by ${props.author}`}</p>
                </div>
        </div>
    );
}
  
export default Snippet;