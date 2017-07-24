import {
    Component
} from '@angular/core';
import {
    NavController,
    NavParams,
    LoadingController
} from 'ionic-angular';
import {
    CricNewsProvider
} from '../../providers/cric-news/cric-news';
var xmlData;
var visited = false;
var i = 0;
/**
 * Generated class for the MoviesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-movies',
    templateUrl: 'movies.html',
})
export class MoviesPage {
    title: any;
    desc: any;
    image: any;
    content: any;

    constructor(public rData: CricNewsProvider, public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController) {
        var newsItems = this.rData.getMovies();
        //console.log("here v go"+newsItems);
        if (visited == false) {
            visited = true;

            newsItems.subscribe(data => {
                if (data) {
                    console.log('fetching your xml');
                    //console.log("everything"+data); // this shows me everything
                }
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                //this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = this.desc.substring(10, this.desc.indexOf("' "));
                this.desc = this.desc.substring(this.desc.indexOf("/>") + 2);
                console.log("fgj" + this.title + "desc is" + this.desc + "image is" + this.image);

            });
        } 
        else {
            i = i + 1;
              if (i > 18) {
                i = 0;
              }
                console.log("i value is" + i);
                newsItems.subscribe(data => {
                if (data) {
                    console.log('fetching your xml');
                    //console.log("everything"+data); // this shows me everything
                }
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                //this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = this.desc.substring(10, this.desc.indexOf("' "));
                this.desc = this.desc.substring(this.desc.indexOf("/>") + 2);
                console.log("fgj" + this.title + "desc is" + this.desc + "image is" + this.image);
                /* if(repeatNo==this.title && i==0){
                   this.title="";
                   this.desc="";
                   this.image="";
                    visited=false;
                 }*/


            });
        }

    }

    gotToHome() {

        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();




        i = i + 1;
        if (i > 18) {

            i = 0;
        }


        this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        //this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
        this.image = this.desc.substring(10, this.desc.indexOf("' "));
        this.desc = this.desc.substring(this.desc.indexOf("/>") + 2);




        //var newsItems =this.rData.getRemoteData();

        /*newsItems.subscribe(datax=>{
         
        this.title=datax[this.i].title;
        this.content=datax[this.i].content;
        console.log(this.i);
         
        });*/



    }

    gotoPrevious() {

        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
        console.log("previous 1" + i);

        i = i - 1;
        if (i < 0) {

            i = 18;
        }
        console.log("previous2" + i);
        this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        //this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
        //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
        this.image = this.desc.substring(10, this.desc.indexOf("' "));
        this.desc = this.desc.substring(this.desc.indexOf("/>") + 2);




        //var newsItems =this.rData.getRemoteData();

        /*newsItems.subscribe(datax=>{
         
        this.title=datax[this.i].title;
        this.content=datax[this.i].content;
        console.log(this.i);
         
        });
        */


    }


}