const https = require('https');


/**
 * [export description]
 * @type {Object}
 */

class ApiWrapper {

  constructor(secret) {

  };

  getRequest(url, cb) {

    let theUrl = this.mapUrl(url);

    https.get(theUrl, result => {

      result.setEncoding("utf8");
      let body = "";

      result.on("data", data => {
        body += data;

      });

      result.on("end", () => {
        body = JSON.parse(body);
        
        cb('', body);
      
      });

      result.on("error", () => {
        cb(JSON.parse(body));
      })
    });
  }


  /**
   * Function to overwrite url
   * 
   * @return {Void} When overwritting it should return string
   */
  mapUrl() {

  }
}

module.exports = ApiWrapper;

