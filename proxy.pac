var sites = ['https://www.example.com/', 'https://example.com', ]; // - sites where the proxy server will be used


var proxy = 'yourip:yourport'; // ip:port of proxy server


























function FindProxyForURL(url, host) {
    for (var i = 0; i < sites.length; i++) {
        if (url.indexOf(sites[i]) === 0) {
            return 'PROXY '+proxy;
        }
    }
    return 'DIRECT';
}
