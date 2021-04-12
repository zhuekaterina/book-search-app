import Snippet from './Snippet';

function SnippetsContainer(props) {

    return (
        <section className="snippets-container">
            {props.books.map((book) => (
                <Snippet 
                key={book.key}
                book={book}
                title={book.title}
                author={book.author}
                cover={book.coverId}
                onOpenPopup={props.onOpenPopup}
                />
            ))}
        </section>
    );
}
  
export default SnippetsContainer;
