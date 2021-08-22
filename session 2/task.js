'use strict';

const getname = function() {

    while(true){
        var name=prompt("Please Enter your name:");
        if (name.trim() != "") return name;
    }
     }


const checkpassword = function() {

     for(let i=0;i<3;i++){
        var pass=prompt("Please Enter your password:");
        if (pass.trim() != ""&& pass==123) return pass;
        }

        alert("you’ve entered wrong password 3 times");
    }

const getmonth = function() {
    while(true){
        var month=prompt("Please Enter your birth month:");
        if (!isNaN(month)&& month>=1&& month<=12) return month;
        }
   
       }

const getday = function() {
    while(true){
        var day=prompt("Please Enter your birth day:");
        if (!isNaN(day)&& day>=1&& day<=31) return day;
        }
       
     }

const gethoroscope=function(name,month,day){
let horoscope=["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn","Aquarius","Pisces"]
if (month==3&&day>=21||month==4&&day<=19 ) alert(name + ": your horoscope is "+horoscope[0]);
else if (month==4&&day>=20||month==5&&day<=20 ) alert(name + ": your horoscope is "+horoscope[1]);
else if (month==5&&day>=21||month==6&&day<=20 ) alert(name + ": your horoscope is "+horoscope[2]);
else if (month==6&&day>=21||month==7&&day<=22 ) alert(name + ": your horoscope is "+horoscope[3]);
else if (month==7&&day>=23||month==8&&day<=22 ) alert(name + ": your horoscope is "+horoscope[4]);
else if (month==8&&day>=23||month==9&&day<=22 ) alert(name + ": your horoscope is "+horoscope[5]);
else if (month==9&&day>=23||month==10&&day<=22 ) alert(name + ": your horoscope is "+horoscope[6]);
else if (month==10&&day>=23||month==11&&day<=21 ) alert(name + ": your horoscope is "+horoscope[7]);
else if (month==11&&day>=22||month==12&&day<=21 ) alert(name + ": your horoscope is "+horoscope[8]);
else if (month==12&&day>=22||month==1&&day<=19 ) alert(name + ": your horoscope is "+horoscope[9]);
else if (month==1&&day>=20||month==2&&day<=18 ) alert(name + ": your horoscope is "+horoscope[10]);
else if (month==2&&day>=19||month==3&&day<=20 ) alert(name + ": your horoscope is "+horoscope[11]);


}

var name=getname();
if (checkpassword()){
    var month=getmonth();
var day=getday();
gethoroscope(name,month,day);
}
