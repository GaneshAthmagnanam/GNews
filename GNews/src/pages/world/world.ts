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
import { Platform } from 'ionic-angular';
import { TextToSpeech } from '@ionic-native/text-to-speech';
import { SocialSharing } from '@ionic-native/social-sharing';
import { InAppBrowser } from '@ionic-native/in-app-browser';
var xmlData;
var visited = false;
var i = 0;
/**
 * Generated class for the WorldPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
    selector: 'page-world',
    templateUrl: 'world.html',
})
export class WorldPage {
    title: any;
    desc: any;
    public j=0;
    image: any;
    link:any;
    content: any;

    constructor(public platform: Platform, private tts: TextToSpeech, private iab: InAppBrowser, private sharingVar: SocialSharing, public loadingCtrl: LoadingController, public rData: CricNewsProvider, public navCtrl: NavController, public navParams: NavParams) {
        var newsItems = this.rData.getWorld();
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
                this.link=xmlData.getElementsByTagName("item")[0].getElementsByTagName("link")[0].childNodes[0].nodeValue;
                //this.desc = xmlData.getElementsByTagName('desc')[i].childNodes[0].nodeValue;
                this.image = this.desc.substring(10, this.desc.indexOf("' "));
                this.desc = this.desc.substring(this.desc.indexOf("/>") + 2);
                //console.log("fgj"+this.title+"desc is"+this.desc+"image is"+this.image);

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
                this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;
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
    speak(event){
       console.log("a"+this.j);
       this.platform.ready().then(() => {
        if(this.j==0){
            
            console.log("b"+this.j);   
            let textOrOptions;
            if(i==0){   
                console.log("c"+this.j);
                textOrOptions={
                text:"Good Morning. Welcome to G News. Section World. Headlines. "+this.title+". Detailed News. "+this.desc,
                locale:"en-US",
                rate:0.8
            }
            this.tts.speak(textOrOptions)
            .then(() => console.log('Success'))
            .catch((reason: any) => console.log(reason));
            }
            else{
                //this.j=this.j+1;
                textOrOptions={
                text:"Headlines. "+this.title+". Detail Description. "+this.desc,
                locale:"en-US",
                rate:0.8
            }
    
                this.tts.speak(textOrOptions)
                .then(() => console.log('Success'))
                .catch((reason: any) => console.log(reason));
            }
            
            this.j=this.j+1; 
            console.log("d"+this.j);
        }
        else{
            
            console.log("e"+this.j);
            this.tts.stop();
            this.j=this.j-1;
            console.log("f"+this.j);
        }
        
        console.log("g"+this.j);
        });
   }



    swipeEvent(e){
        if(e.direction == 2){
            this.gotToHome();
        }
        if(e.direction == 4){
            this.gotoPrevious();
        }
    }
    whatsappShare(){
    this.sharingVar.share(this.title,this.desc, this.image /*Image*/,  "https://drive.google.com/file/d/0B1mw3GMKieahVEhpY0pUTlI1WXJEczByRllnM2lfa0VfUDdz/view?usp=drivesdk" /* url */)
      .then(()=>{
        //alert("Success");
      },
      ()=>{
         //alert("failed");
      })
    }
    openBrowser(){
      console.log("inside open browser"+this.link);
      const browser = this.iab.create(this.link,'_blank');
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
        this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;



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
        this.link=xmlData.getElementsByTagName("item")[i].getElementsByTagName("link")[0].childNodes[0].nodeValue;



        //var newsItems =this.rData.getRemoteData();

        /*newsItems.subscribe(datax=>{
         
        this.title=datax[this.i].title;
        this.content=datax[this.i].content;
        console.log(this.i);
         
        });
        */


    }


}