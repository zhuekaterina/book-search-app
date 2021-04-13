import React from 'react';

function SearchForm(props) {

    const [inputValue, setInputValue] = React.useState('');

    let timeOut;

    function handleKeyUp() {
        clearTimeout(timeOut);
        timeOut = setTimeout(handleSubmit, 1000);
    }

    function handleKeyDown() {
        clearTimeout(timeOut);
    }

    function handleInputChange(evt) {
        evt.preventDefault();
        setInputValue(evt.target.value);
    }

    function handleSubmit() {
        props.onSubmit(inputValue);
    }

    function handleFormSubmit(evt) {
        evt.preventDefault();
        handleSubmit();
    }

    return (
        <section className="form-container">
            <form className="search-form" onSubmit={handleFormSubmit}>
                <input onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} className="search-form__field" onChange={handleInputChange} placeholder="Which book do you look for?" />
                <button className="search-form__button" onClick={handleFormSubmit}></button>
            </form>
        </section>
    );
}
  
export default SearchForm;
