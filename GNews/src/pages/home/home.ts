import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {
    CricNewsProvider
} from '../../providers/cric-news/cric-news';
var xmlData;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public title:any;
  public description_match1:any;
  public description_match2:any;
  arr_description_match1:any=[];
  arr_description_match2:any=[];
  team1_name_match1:any;
  team2_name_match1:any;
  team1_name_match2:any;
  team2_name_match2:any;
  constructor(public rData: CricNewsProvider,public navCtrl: NavController) {
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