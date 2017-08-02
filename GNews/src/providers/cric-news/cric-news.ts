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
  
  getBengali(){
  var xmlData=this.http.get('http://feeds.bbci.co.uk/bengali/rss.xml')
    .map(response => response.text())
    return xmlData;
  }

  getNepali(){
  var xmlData=this.http.get('http://feeds.bbci.co.uk/nepali/rss.xml')
    .map(response => response.text())
    return xmlData;
  }

  getUrdu(){
  var xmlData=this.http.get('http://feeds.bbci.co.uk/urdu/rss.xml')
    .map(response => response.text())
    return xmlData;
  }

  getSinhala(){
  var xmlData=this.http.get('http://feeds.bbci.co.uk/sinhala/rss.xml')
    .map(response => response.text())
    return xmlData;
  }


  getHindi(){
  var xmlData=this.http.get('http://feeds.bbci.co.uk/hindi/rss.xml')
    .map(response => response.text())
    return xmlData;
  }
  getMalayalam(){
  var xmlData=this.http.get('http://anweshanam.com/index.php/rss/latest')
    .map(response => response.text())
    return xmlData;
  }
getTamil(){
  var xmlData=this.http.get('http://feeds.bbci.co.uk/tamil/rss.xml')
    .map(response => response.text())
    return xmlData;
  }
getHome(){

var xmlData=this.http.get('http://static.cricinfo.com/rss/livescores.xml')
    .map(response => response.text())
    return xmlData;
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
