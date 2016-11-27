import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';

@Injectable()
export class QuestionsServiceService {

  url:string = 'http://xbase.esy.es/index.php';
  body = {};

  constructor( private http: Http ) { }

  get requestOptions() : RequestOptions {
          let headers  = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
          let options  = new RequestOptions({ headers: headers });   
          return options;
  }

  buildQuery( params : any ) {
      return this.http_build_query( params );
  }
  query( data : any, successCallback : any, errorCallback  : any ) {
    let body = this.buildQuery( data );
    this.http.post( this.url, body, this.requestOptions )
      .subscribe( data => {
        try {
          let re = JSON.parse( data['_body'] );
          if ( re['code'] ) return errorCallback( re['message'] );
          //console.log('query::sucess: ', data);
          successCallback( re['data'] );
        }
        catch( e ) {
            //console.log(data);
            errorCallback(data['_body']);
        }
      });
  }


http_build_query (formdata : any, numericPrefix='', argSeparator='') { 
    var urlencode = this.urlencode;
    var value : any
    var key : any
    var tmp : any = []
    var _httpBuildQueryHelper = function (key : any, val : any, argSeparator : any) {
        var k : any
        var tmp : any = []
        if (val === true) {
        val = '1'
        } else if (val === false) {
        val = '0'
        }
        if (val !== null) {
        if (typeof val === 'object') {
            for (k in val) {
            if (val[k] !== null) {
                tmp.push(_httpBuildQueryHelper(key + '[' + k + ']', val[k], argSeparator))
            }
            }
            return tmp.join(argSeparator)
        } else if (typeof val !== 'function') {
            return urlencode(key) + '=' + urlencode(val)
        } else {
            throw new Error('There was an error processing for http_build_query().')
        }
        } else {
        return ''
        }
    }

    if (!argSeparator) {
        argSeparator = '&'
    }
    for (key in formdata) {
        value = formdata[key]
        if (numericPrefix && !isNaN(key)) {
        key = String(numericPrefix) + key
        }
        var query = _httpBuildQueryHelper(key, value, argSeparator)
        if (query !== '') {
        tmp.push(query)
        }
    }
    return tmp.join(argSeparator)
  }
  urlencode (str : any) {
    str = (str + '')
    return encodeURIComponent(str)
      .replace(/!/g, '%21')
      .replace(/'/g, '%27')
      .replace(/\(/g, '%28')
      .replace(/\)/g, '%29')
      .replace(/\*/g, '%2A')
      .replace(/%20/g, '+')
  }  

}
