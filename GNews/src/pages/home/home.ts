import { Component } from '@angular/core';
import { NavController, Platform, AlertController, NavParams, LoadingController } from 'ionic-angular';
import {
    CricNewsProvider
} from '../../providers/cric-news/cric-news';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { AboutContentPage } from '../about-content/about-content';
var xmlData;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public title:any;
  public title_india:any;
  public title_world:any;
  public title_movies:any;
  public title_cricket:any;

  //desc
  public desc_india:any;
  public desc_world:any;
  public desc_movies:any;
  public desc_cricket:any;


  //image
  public image_india:any;
  public image_world:any;
  public image_movies:any;
  public image_cricket:any;

  //link
  public link_india:any;
  public link_world:any;
  public link_movies:any;
  public link_cricket:any;


  x:any;
  public description_match1:any;
  public description_match2:any;
  arr_description_match1:any=[];
  arr_description_match2:any=[];
  team1_name_match1:any;
  team2_name_match1:any;
  team1_name_match2:any;
  team2_name_match2:any;
  constructor(public modalCtrl: ModalController,private iab: InAppBrowser, public alertCtrl: AlertController,private platform: Platform,public rData: CricNewsProvider,public navCtrl: NavController) {
    this.platform.ready().then(() => {
 console.log( navigator.onLine);
 this.isOffline();


//navigator.Connection.type === 'none' ? this.isOffline() : console.log('online');
}
);
//india news

   //Math.floor(Math.random() * 6) + 1  
   
   this.loadData();

   var india_news =this.rData.getIndia(); 
   india_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_india = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_india = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_india=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_india = this.desc_india.substring(10, this.desc_india.indexOf("' "));
                

            }); 
//world news
   var world_news =this.rData.getWorld(); 
   world_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_world = xmlData.getElementsByTagName("item")[1].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_world = xmlData.getElementsByTagName("item")[1].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_world=xmlData.getElementsByTagName("item")[1].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_world = this.desc_world.substring(10, this.desc_world.indexOf("' "));
                

            }); 
//movies news
   var movies_news =this.rData.getMovies(); 
   movies_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_movies = xmlData.getElementsByTagName("item")[2].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_movies = xmlData.getElementsByTagName("item")[2].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_movies=xmlData.getElementsByTagName("item")[2].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_movies = this.desc_movies.substring(10, this.desc_movies.indexOf("' "));
                

            }); 
//cricket news
   var cricket_news =this.rData.getRemoteData(); 
   cricket_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_cricket = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_cricket = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_cricket=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_cricket = this.desc_cricket.substring(10, this.desc_cricket.indexOf("' "));
                

            });                         




    var newsItems = this.rData.getHome(); 
    newsItems.subscribe(data => {
                if (data) {
                    console.log('fetching your xml');
                    //console.log("everything"+data); // this shows me everything
                }
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                
                this.description_match1 = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                console.log("desc is"+this.description_match1);
                this.arr_description_match1=this.description_match1.split("v",2);
                this.team1_name_match1=this.arr_description_match1[0];
                this.team2_name_match1=this.arr_description_match1[1];
                this.description_match2 = xmlData.getElementsByTagName("item")[1].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.arr_description_match2=this.description_match2.split("v",2);
                this.team1_name_match2=this.arr_description_match2[0];
                this.team2_name_match2=this.arr_description_match2[1];
                //this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                //this.image = this.desc.substring(10, this.desc.indexOf("' "));
                //this.desc = this.desc.substring(this.desc.indexOf("/>") + 2);
                //console.log("fgj" + this.arr_description);

                /* if(repeatNo==this.title && i==0){
                   this.title="";
                   this.desc="";
                   this.image="";
                    visited=false;
                 }*/



                //repeatNo = this.title;

            }); 
  }

presentModal() {
    let modal = this.modalCtrl.create(AboutContentPage);
    modal.present();
  }

loadData(){

    var item_india=Math.floor(Math.random() * 6) + 1;
   var item_world=Math.floor(Math.random() * 6) + 1;
   var item_movie=Math.floor(Math.random() * 6) + 1;
   var item_cricket=Math.floor(Math.random() * 6) + 1;

   var india_news =this.rData.getIndia(); 
   india_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_india = xmlData.getElementsByTagName("item")[item_india].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_india = xmlData.getElementsByTagName("item")[item_india].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_india=xmlData.getElementsByTagName("item")[item_india].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_india = this.desc_india.substring(10, this.desc_india.indexOf("' "));
                

            }); 
//world news
   var world_news =this.rData.getWorld(); 
   world_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_world = xmlData.getElementsByTagName("item")[item_world].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_world = xmlData.getElementsByTagName("item")[item_world].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_world=xmlData.getElementsByTagName("item")[item_world].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_world = this.desc_world.substring(10, this.desc_world.indexOf("' "));
                

            }); 
//movies news
   var movies_news =this.rData.getMovies(); 
   movies_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_movies = xmlData.getElementsByTagName("item")[item_movie].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_movies = xmlData.getElementsByTagName("item")[item_movie].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_movies=xmlData.getElementsByTagName("item")[item_movie].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_movies = this.desc_movies.substring(10, this.desc_movies.indexOf("' "));
                

            }); 
//cricket news
   var cricket_news =this.rData.getRemoteData(); 
   cricket_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_cricket = xmlData.getElementsByTagName("item")[item_cricket].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_cricket = xmlData.getElementsByTagName("item")[item_cricket].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_cricket=xmlData.getElementsByTagName("item")[item_cricket].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_cricket = this.desc_cricket.substring(10, this.desc_cricket.indexOf("' "));
                

            });                         

    var india_news =this.rData.getIndia(); 
   india_news.subscribe(data => {
                
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title_india = xmlData.getElementsByTagName("item")[item_india].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc_india = xmlData.getElementsByTagName("item")[item_india].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link_india=xmlData.getElementsByTagName("item")[item_india].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image_india = this.desc_india.substring(10, this.desc_india.indexOf("' "));
                

            });         

}


  openBrowser(x){
      console.log("inside open browser"+x);
      const browser = this.iab.create(x,'_blank');

    }

  isOffline(){

   

   if(navigator.onLine!=true){
this.x = document.getElementById('mainpage');
this.x.style.display = 'none';
 
   return this.alertCtrl.create({
              title: 'Connection Status',
              subTitle: 'No network connection',
              enableBackdropDismiss: false,
              buttons: [{
          text: "OK",
          handler: () => { this.exitApp() }
        }]

           }).present();}
           else{
             return null;
           }
 }
 exitApp(){
    this.platform.exitApp();
  }
  doRefresh(refresher) {
    this.isOffline();
    console.log('Begin async operation', refresher);

    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
    if(this.isOffline()==null){
        this.loadData();
        var newsItems = this.rData.getHome(); 
    newsItems.subscribe(data => {
                if (data) {
                    console.log('fetching your xml');
                    //console.log("everything"+data); // this shows me everything
                }
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                
                this.description_match1 = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                console.log("desc is"+this.description_match1);
                this.arr_description_match1=this.description_match1.split("v",2);
                this.team1_name_match1=this.arr_description_match1[0];
                this.team2_name_match1=this.arr_description_match1[1];
                this.description_match2 = xmlData.getElementsByTagName("item")[1].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.arr_description_match2=this.description_match2.split("v",2);
                this.team1_name_match2=this.arr_description_match2[0];
                this.team2_name_match2=this.arr_description_match2[1];
                //this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                //this.image = this.desc.substring(10, this.desc.indexOf("' "));
                //this.desc = this.desc.substring(this.desc.indexOf("/>") + 2);
                //console.log("fgj" + this.arr_description);

                /* if(repeatNo==this.title && i==0){
                   this.title="";
                   this.desc="";
                   this.image="";
                    visited=false;
                 }*/



                //repeatNo = this.title;

            }); 

  }
 }

}
