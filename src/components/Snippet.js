function Snippet(props) {

    function openPopup() {
        props.onOpenPopup(props.book);
    }

    return (
        <div className="snippet" onClick={openPopup}>
                <img src={"http://covers.openlibrary.org/b/id/" + props.cover + "-S.jpg"} className="snippet__cover" alt="#" />
                <p className="snippet__name">{props.title}</p>
                <p className="snippet__author">{props.author}</p>
        </div>
    );
}
  
export default Snippet;