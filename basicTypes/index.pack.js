(()=>{"use strict";var e,t;!function(e){e[e.GOLD_USER=0]="GOLD_USER",e[e.SILVER_USER=1]="SILVER_USER",e[e.BRONZE_USER=2]="BRONZE_USER"}(e||(e={})),function(e){e.ADMIN="ADMIN",e.READ_ONLY="READ_ONLY"}(t||(t={}));var n=document.querySelector("#returning-user"),a=document.querySelector("#user"),r=document.querySelector("#reviews");function i(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function o(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var c=o((function e(t,n,a){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.src=t,this.title=n,this.reviews=a})),l=[{name:"Sheia",stars:5,loyaltyUser:e.GOLD_USER,date:"2021-04-03",description:"Sheia"},{name:"Andrzej",stars:3,loyaltyUser:e.BRONZE_USER,date:"2021-03-28",description:12},{name:"Jane Doe",stars:5,loyaltyUser:e.GOLD_USER,date:"2022-01-28",description:!0},{name:"Omar",stars:2,loyaltyUser:e.SILVER_USER,date:"2021-03-27",description:e.BRONZE_USER}];l.sort((function(e,t){return Date.parse(t.date)-Date.parse(e.date)}));var s,u,d,m,y,p,g,S,f,v="John",E="Doe",L=!0,R=t.ADMIN,U=["Utrecht",Date(),25],h=new c("images/italian-property.jpg","Italian House",[{name:"Olive",stars:5,loyaltyUser:e.GOLD_USER,date:"12-04-2021"}]);s=l.length,u=l[0].name,d=l[0].loyaltyUser,r.innerHTML="review total "+s.toString()+"-last by "+u+(d==e.GOLD_USER?"⭐":""),m=L,y="".concat(v," ").concat(E),m&&null!=n&&n.innerHTML,null!=a&&(a.innerHTML=y),p=document.querySelector(".properties"),g=[{image:"images/colombia-property.jpg",title:"Colombian Shack",price:45,location:{firstLine:"shack 37",city:"Bogota",code:45632,country:"Colombia"},contact:[1123495082908,"marywinkle@gmail.com"],isAvailable:!0},{image:"images/poland-property.jpg",title:"Polish Cottage",price:25,location:{firstLine:"no 23",city:"Gdansk",code:343903,country:"Poland"},contact:[1123495082908,"garydavis@hotmail.com"],isAvailable:!1},{image:"images/london-property.jpg",title:"London Flat",price:30,location:{firstLine:"flat 15",city:"London",code:35433,country:"United Kingdom"},contact:[1123495082908,"andyluger@aol.com"],isAvailable:!0},{image:"images/malasia.jpeg",title:"Malia Hotel",price:35,location:{firstLine:"Room 4",city:"Malia",code:45334,country:"Malasya"},contact:[1123495082908,"andyluger@aol.com"],isAvailable:!0}].map((function(e){return'<div class="card">'.concat(e.title,'<br /><img src="').concat(e.image,'"/><br />').concat(R?e.price+"/night":"","</div>")})),null!=p&&(p.innerHTML=g.join("")),S=document.querySelector(".footer"),f=U[0]+" | "+U[1]+" | "+U[2]+"°C",null!=S&&(S.innerHTML=f);var b,D,O=document.querySelector(".container"),_=document.querySelector(".reviews"),M=document.querySelector("button"),w=0;null!=M&&M.addEventListener("click",(function(){return function(e){if(!w){w++;for(var t=function(e){return e.sort((function(e,t){return t.stars-e.stars})).slice(0,2)}(e),n=0;n<t.length;n++){var a=document.createElement("div");a.classList.add("review-card"),a.innerHTML=t[n].stars+" stars from "+t[n].name,null!=_&&_.appendChild(a)}null!=O&&null!=M&&O.removeChild(M)}}(l)})),b=document.querySelector(".main-image"),(D=document.createElement("img")).setAttribute("src",h.src),null!=b&&b.appendChild(D)})();