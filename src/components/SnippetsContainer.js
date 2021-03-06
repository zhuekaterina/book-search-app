import Snippet from './Snippet';
import NoResultsSnippet from './NoResultsSnippet';

function SnippetsContainer(props) {

    return (
        <section className="snippets-container">
            {
                props.isEmpty
                ? <NoResultsSnippet 
                    inputValue={props.inputValue}/>
                : props.books.map((book) => (
                    <Snippet 
                        key={book.key}
                        book={book}
                        path={book.path}
                        title={book.title}
                        author={book.author}
                        cover={book.coverId}
                        onOpenPopup={props.onOpenPopup}
                        onChosenBook={props.onChosenBook}
                    />
                ))
            }
        </section>
    );
}
  
export default SnippetsContainer;
