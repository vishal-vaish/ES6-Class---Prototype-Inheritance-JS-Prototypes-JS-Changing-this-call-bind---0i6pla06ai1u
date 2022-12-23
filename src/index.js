class API{
    #secure;
    constructor(url,method='GET'){
        this.url=url;
        this.method=method;
        this.#secure=url.startWith("https")
    }

    isSecure(){
        return this.#secure
    }
    updateUrl(url){
        this.url=url;
        this.#secure=url.startWith("https")
    }
}

module.exports = { API }
