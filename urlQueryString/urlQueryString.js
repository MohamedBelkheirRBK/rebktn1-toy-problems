/*
URL Query String
Given a properly formatted URL, return the query string data as an array of key-value pairs, in the order that they appear.

HINT: You may use decodeURIComponent()

parseQueryString("http://example.com?a=hello&b=99") // [ [ "a", "hello" ], [ "b", "99" ] ]
parseQueryString("http://example.com?msg=hello%20world") // [ [ "msg", "hello world" ] ]
parseQueryString("http://example.com") // undefined
*/

function parseQueryString(url) {
    var keyPass = 0;
    var valuePass = 0;
    var queries = {};
    var start = url.indexOf('?')
    if(start<0)
        return ;
    
    url = url.slice(start+1)
    url = decodeURI(url)
    url = url.split('&').map((element)=>{
        return element.split('=')
    })
    
    return url;
}
