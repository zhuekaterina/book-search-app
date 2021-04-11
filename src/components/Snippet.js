function Snippet(props) {

    function openPopup() {
        props.onOpenPopup();
    }

    return (
        <div className="snippet" onClick={openPopup}>
                <img src="http://covers.openlibrary.org/b/olid/OL7440033M-S.jpg" className="snippet__cover" alt="#" />
                <p className="snippet__name">Name</p>
                <p className="snippet__author">Author</p>
        </div>
    );
}
  
export default Snippet;