import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, LoadingController, ViewController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SocialSharing } from '@ionic-native/social-sharing';
import {CricNewsProvider} from '../../providers/cric-news/cric-news';
var xmlData;
var i = 0;
var visitedTamil = false;
var visitedHindi = false;
var visitedMalayalam = false;
var visitedTelugu = false;
@Component({
  selector: 'page-language',
  templateUrl: 'language.html'
})
export class LanguagePage {
  
  public readMore:any;
  public title:any;
  public desc:any;
  public link:any;
  public image:any;
  public languageValue:any;
  public valueItem:any;
  pages: Array<{title: string, component: any}>;
  testRadioOpen: boolean;
  public testRadioResult:any;
  constructor(public viewCtrl: ViewController,public loadingCtrl: LoadingController, private iab: InAppBrowser, private sharingVar: SocialSharing,public rData: CricNewsProvider,public alerCtrl: AlertController,public navCtrl: NavController, public navParams: NavParams) {
 
 this.languageValue=this.navParams.get('lang');
 console.log("lang value is"+this.languageValue)
 if(this.languageValue=="Tamil" ||this.languageValue=="Sinhala" ||this.languageValue=="Urdu" ||this.languageValue=="Bengali" || this.languageValue=="Nepali" || this.languageValue=="English" || this.languageValue=="Hindi" || this.languageValue=="Malayalam"){
 this.doExecute1();

 }
 else{
 this.doRadio();
  }
  //tamil news
  


  //ends here
  

   // console.log('ionViewDidLoad LanguagePage'+app);
  }

  ionViewDidLoad() {
    //console.log('ionViewDidLoad LanguagePage'+this.app.rootPage);
  }

  doExecute(){
  
  console.log("A"+i);
  if(this.testRadioResult=="Tamil"){
  var tamil_news =this.rData.getTamil(); 
  //if(visitedTamil == false){
  //visitedTamil=true;
  
   tamil_news.subscribe(data => {
                console.log("B"+i);
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="மேலும் படிக்க";
                //console.log("ethukku"+this.image);
            }); 
  //}
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
  else if(this.testRadioResult=="English"){
                this.dismiss();
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="और पढ़ें";
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="مزید پڑھ";
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="වැඩිදුර කියවන්න";
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="थप पढ्नुहोस्";
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="আরও পড়ুন";
                //console.log("ethukku"+this.image);
            });
            i=0;
  }
 
  }


  doExecute1(){
  
  if(this.languageValue=="Tamil"){
 
  var tamil_news =this.rData.getTamil(); 
   tamil_news.subscribe(data => {
                console.log("F"+i);
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="மேலும் படிக்க";
                //console.log("ethukku"+this.image);
            }); 
            i=0;
}
else if(this.languageValue=="English"){
console.log("ethukku"+"here");
  this.dismiss();
}


else if(this.languageValue=="Hindi"){
  var hindi_news =this.rData.getHindi(); 
   hindi_news.subscribe(data => {
                console.log("G"+i);
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="और पढ़ें";
                //console.log("ethukku"+this.image);
            });
            i=0;
  //              this.dismiss();
  }
  else if(this.languageValue=="Malayalam"){
  var re1 = /&nbsp;/gi; 
  var re2 = /<p>/gi;
  var re3 = /<\/p>/gi;
   var Malayalam_news =this.rData.getMalayalam(); 
   Malayalam_news.subscribe(data => {
                console.log("inside malayalam");
                //&nbsp;
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
                //console.log("ethukku"+this.image);
            });  
            i=0;
                //this.dismiss();
  }
  else if(this.languageValue=="Bengali"){
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="আরও পড়ুন";
                //console.log("ethukku"+this.image);
            });
            i=0;
  }
  else if(this.languageValue=="Nepali"){
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="थप पढ्नुहोस्";
                //console.log("ethukku"+this.image);
            });
            i=0;
  }
  else if(this.languageValue=="Urdu"){
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="مزید پڑھ";
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
                this.image = xmlData.getElementsByTagName("item")[0].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                this.readMore="වැඩිදුර කියවන්න";
                //console.log("ethukku"+this.image);
            });
            i=0;
            
  }

  }


  openBrowser(){
      console.log("inside open browser"+this.link);
      const browser = this.iab.create(this.link,'_blank');

    }
    
    whatsappShare(){
    this.sharingVar.share(this.title,this.desc, this.image /*Image*/,  "https://drive.google.com/file/d/0B1mw3GMKieahVEhpY0pUTlI1WXJEczByRllnM2lfa0VfUDdz/view?usp=drivesdk" /* url */)
      
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }


  doRadio() {
    let alert = this.alerCtrl.create();
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

  gotToHome() {
        var re1 = /&nbsp;/gi; 
        var re2 = /<p>/gi;
        var re3 = /<\/p>/gi;

        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();

        i = i + 1;
        if (i > 23) {

            i = 0;
        }

                console.log("1"+"radio value is"+this.valueItem);
                //this.testRadioResult==this.languageValue
                this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
                this.title = this.title.replace(re1,"");
                console.log("2");
                this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.desc = this.desc.replace(re1,"");
                this.desc = this.desc.replace(re2,"");
                this.desc = this.desc.replace(re3,"");
                console.log("3");
                this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                console.log("4");
                if(this.valueItem=="Malayalam"){
                console.log("5");
                    this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("enclosure")[0].getAttribute('url');
                }
                else{
                console.log("6");
                this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                }



    }

    gotoPrevious() {
        var re1 = /&nbsp;/gi; 
        var re2 = /<p>/gi;
        var re3 = /<\/p>/gi;

        let loader = this.loadingCtrl.create({
            content: "Please wait...",
            duration: 500
        });
        loader.present();
        console.log("previous 1" + i);

        i = i - 1;
        if (i < 0) {

            i = 23;
        }
        console.log("previous2" + i);
        this.title = xmlData.getElementsByTagName("item")[i].getElementsByTagName("title")[0].childNodes[0].nodeValue;
        this.title = this.title.replace(re1,"");
                this.desc = xmlData.getElementsByTagName("item")[i].getElementsByTagName("description")[0].childNodes[0].nodeValue;
                this.desc = this.desc.replace(re1,"");
                this.desc = this.desc.replace(re2,"");
                this.desc = this.desc.replace(re3,"");
                this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                if(this.valueItem=="Malayalam"){
                console.log("5");
                    this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("enclosure")[0].getAttribute('url');
                }
                else{
                console.log("6");
                this.image = xmlData.getElementsByTagName("item")[i].getElementsByTagName("media:thumbnail")[0].getAttribute('url');
                }



    }



}
