(()=>{"use strict";var e,t;!function(e){e[e.GOLD_USER=0]="GOLD_USER",e[e.SILVER_USER=1]="SILVER_USER",e[e.BRONZE_USER=2]="BRONZE_USER"}(e||(e={})),function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(t||(t={}));var n=document.querySelector("#returning-user"),r=document.querySelector("#user"),o=document.querySelector("#reviews"),a=[{name:"Sheia",stars:5,loyaltyUser:e.GOLD_USER,date:"2021-04-03",description:"Sheia"},{name:"Andrzej",stars:3,loyaltyUser:e.BRONZE_USER,date:"2021-03-28",description:12},{name:"Jane Doe",stars:5,loyaltyUser:e.GOLD_USER,date:"2022-01-28",description:!0},{name:"Omar",stars:2,loyaltyUser:e.SILVER_USER,date:"2021-03-27",description:e.BRONZE_USER}];a.sort((function(e,t){return Date.parse(t.date)-Date.parse(e.date)}));var i,c,l,s,u,d,m,y,E,S="John",L="Doe",p=!0,R=t.ADMIN,U=["Utrecht",Date(),25];i=a.length,c=a[0].name,l=a[0].loyaltyUser,o.innerHTML="review total "+i.toString()+"-last by "+c+(l==e.GOLD_USER?"⭐":""),s=p,u="".concat(S," ").concat(L),s&&null!=n&&n.innerHTML,null!=r&&(r.innerHTML=u),R?alert("YOU COULD SEE THE PRICES"):alert("YOU COULD NOT SEE THE PRICES"),d=document.querySelector(".properties"),m=[{image:"images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[1123495082908,"marywinkle@gmail.com"],isAvailable:!0},{image:"images/poland-property.jpg",title:"Polish Cottage",price:25,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[1123495082908,"garydavis@hotmail.com"],isAvailable:!1},{image:"images/london-property.jpg",title:"London Flat",price:30,location:{firstLine:"flat 15",city:"London",code:35433,country:"United Kingdom"},contact:[1123495082908,"andyluger@aol.com"],isAvailable:!0}].map((function(e){return'<div class="card">'.concat(e.title,'<br /><img src="').concat(e.image,'"/><br /></div>')})),null!=d&&(d.innerHTML=m.join("")),y=document.querySelector(".footer"),E=U[0]+" | "+U[1]+" | "+U[2]+"°C",null!=y&&(y.innerHTML=E);var g=document.querySelector(".container"),v=document.querySelector(".reviews"),D=document.querySelector("button"),O=0;null!=D&&D.addEventListener("click",(function(){return function(e){if(!O){O++;for(var t=function(e){return e.sort((function(e,t){return t.stars-e.stars})).slice(0,2)}(e),n=0;n<t.length;n++){var r=document.createElement("div");r.classList.add("review-card"),r.innerHTML=t[n].stars+" stars from "+t[n].name,null!=v&&v.appendChild(r)}null!=g&&null!=D&&g.removeChild(D)}}(a)}))})();