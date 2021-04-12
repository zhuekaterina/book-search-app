import React from 'react';

function SearchForm(props) {

    const [inputValue, setInputValue] = React.useState('');

    let timeOut;

    function handleKeyUp() {
        clearTimeout(timeOut);
        timeOut = setTimeout(handleTimeoutSubmit, 1000);
    }

    function handleKeyDown() {
        clearTimeout(timeOut);
    }

    function handleInputChange(evt) {
        evt.preventDefault();
        setInputValue(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        props.onSubmit(inputValue);
    }

    function handleTimeoutSubmit() {
        props.onSubmit(inputValue);
    }

    return (
        <section className="form-container">
            <form className="search-form" onSubmit={handleSubmit}>
                <input onKeyUp={handleKeyUp} onKeyDown={handleKeyDown} className="search-form__field" onChange={handleInputChange} placeholder="Which book do you look for?" />
                <button className="search-form__button" onClick={handleSubmit}></button>
            </form>
        </section>
    );
}
  
export default SearchForm;
