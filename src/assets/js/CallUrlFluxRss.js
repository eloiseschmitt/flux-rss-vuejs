//let parseString = require('xml2js').parseString;
export default function getFeedRss(url) {
    return url
    /* this.axios
        .get(url)
        .then(response => {
            parseString(response.data, function (err, result) {
                return result
            });
        })
        .catch(error => console.log(error)); */
}