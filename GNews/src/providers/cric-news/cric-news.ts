import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the CricNewsProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CricNewsProvider {

  constructor(public http: Http) {
    console.log('Hello CricNewsProvider Provider');
  }
 getPolitics(){



var xmlData=this.http.get('http://www.news18.com/rss/politics.xml')
    .map(response => response.text())
    return xmlData;
  }
  getRemoteData(){



var xmlData=this.http.get('http://www.news18.com/rss/cricketnext.xml')
    .map(response => response.text())
    return xmlData;
  }
  getIndia(){



var xmlData=this.http.get('http://www.news18.com/rss/india.xml')
    .map(response => response.text())
    return xmlData;
  }
  getWorld(){



var xmlData=this.http.get('http://www.news18.com/rss/world.xml')
    .map(response => response.text())
    return xmlData;
  }
  getMovies(){



var xmlData=this.http.get('http://www.news18.com/rss/movies.xml')
    .map(response => response.text())
    return xmlData;
  }
}
