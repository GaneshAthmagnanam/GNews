import { Component } from '@angular/core';
import { NavController, Platform, AlertController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import {
    CricNewsProvider
} from '../../providers/cric-news/cric-news';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { ModalController } from 'ionic-angular';
import { AboutContentPage } from '../about-content/about-content';
import { LanguagePage } from '../language/language';
var xmlData;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 public readMore:any;
  public title:any;
  public desc:any;
  public link:any;
  public image:any;
  public valueItem:any;



  public title1:any;
  public title_india:any;
  public title_world:any;
  public title_movies:any;
  public title_cricket:any;
  testRadioOpen: boolean;
  public testRadioResult:any;
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
  constructor(public viewCtrl: ViewController,public modalCtrl: ModalController,private iab: InAppBrowser, public alertCtrl: AlertController,private platform: Platform,public rData: CricNewsProvider,public navCtrl: NavController) {
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
                this.title1 = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                
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

  settingsPage() {
    let modal = this.modalCtrl.create(LanguagePage);
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
 dismiss() {
    this.viewCtrl.dismiss();
  }


doExecute(){
var i=0;
console.log("ethukku"+this.testRadioResult);
/*let modal = this.modalCtrl.create(LanguagePage);
    modal.present();*/
 if(this.testRadioResult=="English"){
  this.testRadioOpen = false;}

  else{
  console.log("1A");

  if(this.testRadioResult=="Tamil"){
  var tamil_news =this.rData.getTamil(); 
  //if(visitedTamil == false){
  //visitedTamil=true;
  console.log("2A");
   tamil_news.subscribe(data => {
                console.log("3A");
                //தமிழ்
                this.testRadioResult="தமிழ்";
                this.valueItem="Tamil";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagNameNS('http://search.yahoo.com/mrss/','thumbnail')[0].getAttribute('url');
                this.readMore="மேலும் படிக்க";
                this.move();
                //alert("not from home"+this.image+this.readMore);
                //console.log("ethukku"+this.image);
            }); 
            console.log("4A");
  //}console.log("2A");
  i=0;
  /*else {
            i = i + 1;
              if (i > 23) {
                i = 0;
              }
            tamil_news.subscribe(data => {
                
                console.log("C"+i);
                //தமிழ்
                this.testRadioResult="தமிழ்";
                this.valueItem="Tamil";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="மேலும் படிக்க";
                //console.log("ethukku"+this.image);
            }); 
        }       
        */
}
  
  else if(this.testRadioResult=="Hindi"){
  var hindi_news =this.rData.getHindi(); 
  //console.log("visited status"+visited);
  //if(visitedHindi == false){
  //visitedHindi=true;
  
   hindi_news.subscribe(data => {
                console.log("D"+i);
                //hindi
                this.testRadioResult="हिन्दी";
                this.valueItem="Hindi";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagNameNS('http://search.yahoo.com/mrss/','thumbnail')[0].getAttribute('url');
                this.readMore="और पढ़ें";
                this.move();
                //console.log("ethukku"+this.image);
            });
            i=0;
 /*}
 else{
   i = i + 1;
              if (i > 23) {
                i = 0;
              }
hindi_news.subscribe(data => {
                console.log("E"+i);
                //hindi
                this.testRadioResult="हिन्दी";
                this.valueItem="Hindi";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="और पढ़ें";
                //console.log("ethukku"+this.image);
            });

 }*/
  //              this.dismiss();
  }
  else if(this.testRadioResult=="Urdu"){
       var Urdu_news =this.rData.getUrdu(); 
   //if(visitedMalayalam == false){
  //visitedMalayalam=true;
   Urdu_news.subscribe(data => {
                
                //malayalam
                this.testRadioResult="اردو میں خبریں";
                this.valueItem="Urdu";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                //this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("enclosure")[0].getAttribute('url');
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagNameNS('http://search.yahoo.com/mrss/','thumbnail')[0].getAttribute('url');
                this.readMore="مزید پڑھ";
                this.move();
                //console.log("ethukku"+this.image);
            });
            i=0;
            
  }
  else if(this.testRadioResult=="Sinhala"){
       var Sinhala_news =this.rData.getSinhala(); 
   //if(visitedMalayalam == false){
  //visitedMalayalam=true;
   Sinhala_news.subscribe(data => {
                
                //malayalam
                this.testRadioResult="සිංහල පුවත්";
                this.valueItem="Sinhala";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                //this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("enclosure")[0].getAttribute('url');
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagNameNS('http://search.yahoo.com/mrss/','thumbnail')[0].getAttribute('url');
                this.readMore="වැඩිදුර කියවන්න";
                this.move();
                //console.log("ethukku"+this.image);
            });
            i=0;
            
  }
  else if(this.testRadioResult=="Malayalam"){
   var Malayalam_news =this.rData.getMalayalam(); 
   var re1 = /&nbsp;/gi; 
   var re2 = /<p>/gi;
   var re3 = /<\/p>/gi;
   //if(visitedMalayalam == false){
  //visitedMalayalam=true;
   Malayalam_news.subscribe(data => {
                
                //malayalam
                this.testRadioResult="മലയാളം";
                this.valueItem="Malayalam";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.title = this.title.replace(re1,"");
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.desc = this.desc.replace(re1,"");
                this.desc = this.desc.replace(re2,"");
                this.desc = this.desc.replace(re3,"");
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("enclosure")[0].getAttribute('url');
                this.readMore="കൂടുതല് വായിക്കുക";
                this.move();
                //console.log("ethukku"+this.image);
            });
            i=0;
           /* }
else{
   i = i + 1;
              if (i > 23) {
                i = 0;
              }
  Malayalam_news.subscribe(data => {
                
                //malayalam
                this.testRadioResult="മലയാളം";
                this.valueItem="Malayalam";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("enclosure")[0].getAttribute('url');
                this.readMore="കൂടുതല് വായിക്കുക";
                //console.log("ethukku"+this.image);
            }); 
    }       */     //this.dismiss();
  }
  else if(this.testRadioResult=="Nepali"){
   var Nepali_news =this.rData.getNepali(); 
   //if(visitedMalayalam == false){
  //visitedMalayalam=true;
   Nepali_news.subscribe(data => {
                
                //malayalam
                this.testRadioResult="नेपाली समाचार";
                this.valueItem="Nepali";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                //this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("enclosure")[0].getAttribute('url');
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagNameNS('http://search.yahoo.com/mrss/','thumbnail')[0].getAttribute('url');
                this.readMore="थप पढ्नुहोस्";
                this.move();
                //console.log("ethukku"+this.image);
            });
            i=0;
  
  }
  else if(this.testRadioResult=="Bengali"){
         var Bengali_news =this.rData.getBengali(); 
   //if(visitedMalayalam == false){
  //visitedMalayalam=true;
   Bengali_news.subscribe(data => {
                
                //malayalam
                this.testRadioResult="বাংলা খবর";
                this.valueItem="Bengali";
                var parser = new DOMParser();
                xmlData = parser.parseFromString(data, "application/xml");

                // var elems = document.querySelectorAll('item,title')
                this.title = xmlData.getElementsByTagName("item")[0].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.desc = xmlData.getElementsByTagName("item")[0].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                //this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("enclosure")[0].getAttribute('url');
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagNameNS('http://search.yahoo.com/mrss/','thumbnail')[0].getAttribute('url');
                this.readMore="আরও পড়ুন";
                this.move();
                //console.log("ethukku"+this.image);
            });
            i=0;
  }
 
  }


 
  }

  

  move(){
  
  this.navCtrl.push(LanguagePage, {
    lang: this.valueItem,
    head: this.testRadioResult,
    t:this.title,
    d:this.desc,
    l:this.link,
    im:this.image,
    read:this.readMore,
    dd:xmlData
});
  }


doRadio() {
    let alert = this.alertCtrl.create();
    alert.setTitle('Select Language');

    alert.addInput({
      type: 'radio',
      label: 'English',
      value: 'English',
      checked: true
    });

    alert.addInput({
      type: 'radio',
      label: 'Tamil',
      value: 'Tamil'
    });

    alert.addInput({
      type: 'radio',
      label: 'Hindi',
      value: 'Hindi'
    });

    alert.addInput({
      type: 'radio',
      label: 'Malayalam',
      value: 'Malayalam'
    });

    alert.addInput({
      type: 'radio',
      label: 'Sinhala',
      value: 'Sinhala'
    });

    alert.addInput({
      type: 'radio',
      label: 'Urdu',
      value: 'Urdu'
    });
    alert.addInput({
      type: 'radio',
      label: 'Nepali',
      value: 'Nepali'
    });

    alert.addInput({
      type: 'radio',
      label: 'Bengali',
      value: 'Bengali'
    });

    alert.addButton('Cancel');
    alert.addButton({
      text: 'Ok',
      handler: data => {
        console.log('Radio data:', data);
        this.testRadioOpen = false;
        this.testRadioResult = data;
        this.doExecute();
      }
    });

    alert.present().then(() => {
      this.testRadioOpen = true;
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
          handler: () => { this.exitApp1() }
        }]

           }).present();}
           else{
             return null;
           }
 }
 exitApp1(){



    this.platform.ready().then(() => {
            this.platform.registerBackButtonAction(() => {
                navigator['app'].exitApp();                
            });
        });
    //this.platform.exitApp();
    //exit(0);
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


