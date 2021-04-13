function NoResultsSnippet(props) {

    return (
        <div className="snippet snippet-no-results" >
                <p className="snippet-no-results__text">Could not find a book with a name starting with </p>
                <p className="snippet-no-results__title">{`"${props.inputValue}"`}</p>
        </div>
    );
}
  
export default NoResultsSnippet;