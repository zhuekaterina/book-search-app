function Snippet(props) {

    function openPopup() {
        props.onOpenPopup(props.book);
        if(props.cover) {
            props.onChosenBook(props.cover);
        } else {
            props.onChosenBook(props.bookPath);
        }
    }


    return (
        <div className="snippet" onClick={openPopup}>
                <img src={"https://covers.openlibrary.org/b/olid/" + props.cover + "-S.jpg"} className="snippet__cover" alt="#" />
                <div className="snippet__titles">
                    <p className="snippet__name">{props.title}</p>
                    <p className="snippet__author">{`by ${props.author}`}</p>
                </div>
        </div>
    );
}
  
export default Snippet;