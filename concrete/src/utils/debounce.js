function debounce(callback, delay) {
    let fn = null;

    return function() {
        clearTimeout(fn);
        fn = setTimeout(callback, delay)
    }
}

export default debounce