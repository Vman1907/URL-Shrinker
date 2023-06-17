function checkUrl(url) {
    let givenURL;
    try {
        givenURL = new URL(url);
    } catch (error) {
        console.log(error)
        return false;
    }
    return givenURL.protocol === "https:" || givenURL.protocol === "http:"
        ? true
        : false;
}

export default checkUrl;
