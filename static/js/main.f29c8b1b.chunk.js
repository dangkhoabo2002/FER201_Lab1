(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,a){},16:function(e,t,a){e.exports=a.p+"static/media/logo.06e73328.svg"},17:function(e,t,a){},21:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(4),i=a.n(r),s=(a(14),a(16),a(17),a(2)),l={dark:{backgroundColor:"transparent",color:"white"},light:{backgroundColor:"white",color:"black"}},c={dark:!1,theme:l.light,toggle:function(){}},m=o.a.createContext(c);function h(e){var t=e.children,a=Object(n.useState)(!1),r=Object(s.a)(a,2),i=r[0],c=r[1];Object(n.useEffect)(function(){var e="true"===localStorage.getItem("dark");c(e)},[i]);var h=i?l.dark:l.light;return o.a.createElement(m.Provider,{value:{theme:h,dark:i,toggle:function(){var e=!i;localStorage.setItem("dark",JSON.stringify(e)),c(e)}}},t)}function u(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),a=t[0],o=t[1],r=Object(n.useState)(""),i=Object(s.a)(r,2),l=i[0],c=i[1];return setInterval(function(){!function(){var e=new Date,t=0;t=0===e.getHours()?12:e.getHours()>12?e.getHours()-12:e.getHours();var a=e.getMinutes()<10?parseInt("0"+e.getMinutes()):e.getMinutes(),n=e.getSeconds()<10?"0"+e.getSeconds():e.getSeconds(),r=e.getHours()>=12?"PM":"AM";c(r),o("".concat(t,":").concat(a,":").concat(n))}()},1e3),[a,l]}function d(){var e=u(),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useContext)(m),l=i.theme,c=i.toggle,h=i.dark;return o.a.createElement("div",null,o.a.createElement("div",{className:"toggle_menu"},o.a.createElement("img",{src:"https://www.vhv.rs/file/max/37/372285_menu-icon-png.jpg"})),o.a.createElement("div",{className:"navbar something"},o.a.createElement("div",{id:"MyClockDisplay",className:"clock",style:{backgroundColor:l.backgroundColor,color:l.color}},a,o.a.createElement("span",null,r)),o.a.createElement("nav",{style:{backgroundColor:l.backgroundColor,color:l.color}},o.a.createElement("ul",{className:"nav-cont"},o.a.createElement("li",null,o.a.createElement("a",{className:"active",href:"#home",style:{color:l.color}},"Home")),o.a.createElement("li",null,o.a.createElement("a",{href:"#review",style:{color:l.color}},"Review")),o.a.createElement("li",null,o.a.createElement("a",{href:"#booking",style:{color:l.color}},"Booking")),o.a.createElement("li",null,o.a.createElement("a",{className:"contact",href:"#Contact",style:{color:l.color}},"Contact")),o.a.createElement("li",null,o.a.createElement("div",{style:{position:"relative"}},o.a.createElement("a",{for:"theme_toggle",className:"switch-mode",href:"#",onClick:c,style:{backgroundColor:l.backgroundColor,color:l.color,outline:"none"}},"Switch to ",h?"Light":"Dark")))))))}var g=[{id:1,title:"Peaky Blinder",year:"2013-2022",nation:"USA",img:"assets/images/peakyblinder.jpg",info:"A gangster family epic set in 1900s England, centering on a gang who sew razor blades in the peaks of their caps, and their fierce boss Tommy Shelby."},{id:2,title:"The Boys",year:"2019",nation:"USA",img:"assets/images/the-boys.jpg",info:"THE BOYS is an irreverent take on what happens when superheroes, who are as popular as celebrities, as influential as politicians and as revered as Gods, abuse their superpowers rather than use them for good. Its the powerless against the super powerful as The Boys embark on a heroic quest to expose the truth about The Seven, and their formidable Vought backing."},{id:3,title:"Arcane",year:"2021",nation:"USA",img:"assets/images/Arcane-game.jpg",info:"Arcane (titled onscreen as Arcane: League of Legends) is an animated action-adventure streaming television series created by Christian Linke and Alex Yee. It was produced by the French animation studio Fortiche under the supervision of Riot Games and distributed by Netflix. Set in Riot League of Legends fictional universe, it primarily focuses on sisters Vi and Jinx. The series was announced at the League of Legends 10th anniversary celebration in 2019, and first released in November 2021. Following the conclusion of the first season, Riot Games and Netflix announced that a second season was in production for a post-2022 release."},{id:4,title:"Kimestu no Yaiba - Mugen Train",year:"2020",nation:"Japan",img:"assets/images/game4v-kimetsu-no-yaiba-chuyen-tau-vo-tan-phim-rieng-1.jpg",info:"Falling forever into an endless dream... Tanjiro and the group have completed their rehabilitation training at the Butterfly Mansion, and they arrive to their next mission on the Mugen Train, where over 40 people have disappeared in a very short period of time. Tanjiro and Nezuko, along with Zenitsu and Inosuke, join one of the most powerful swordsmen within the Demon Slayer Corps, Flame Hashira Kyojuro Rengoku, to face the demon aboard the Mugen Train on track to despair."},{id:5,title:"Avenger - End Game",year:"2019",nation:"USA",img:"assets/images/endgame.jpg",info:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos actions and restore balance to the universe."},{id:6,title:"Maze Runner - Scorch Trials",year:"2015",nation:"USA",img:"assets/images/mazerunner.jpg",info:"The plot of The Scorch Trials takes place immediately after the previous installment, as Thomas (O Brien) and his fellow Gladers have just escaped from the facilities of the powerful World Catastrophe Killzone Department (WCKD), which had imprisoned them. On the run in the desert and ruined cities, they must escape WCKD soldiers and face the perils of the Scorch, a desolate landscape filled with dangerous obstacles."},{id:7,title:"Money Heist",year:"2017",nation:"Spain",img:"assets/images/moneyheist.jpg",info:"Eight thieves take hostages and lock themselves in the Royal Mint of Spain as a criminal mastermind manipulates the police to carry out his plan."},{id:8,title:"Now You See Me",year:"2013",nation:"USA",img:"assets/images/nowyouseeme.jpg",info:"The plot follows an FBI agent and an Interpol detective who track and attempt to bring to justice a team of magicians who pull off bank heists and robberies during their performances and reward their audiences with the money."},{id:9,title:"Semantic Error",year:"2022",nation:"Korean",img:"assets/images/Semantic_Error_(TV_series).jpg",info:"Chu Sang Woo (Jae Chan) is a junior computer science majoring student who prizes reason, rules, and a rigid sense of what is right above all else. As part of his university work, he is told to work on a group project for the liberal arts, whereby the group is required to make a final presentation in order to pass the module. But as the rest of the group \u2013 whom he knows nothing about \u2013 have decided to leave him to do all the work on his own, he decides to remove their names, and make the presentation in his name."}];function p(){var e=Object(n.useState)([]),t=Object(s.a)(e,2),a=t[0],r=t[1],i=Object(n.useContext)(m),l=i.theme;i.toggle,i.dark;return o.a.createElement("div",{className:"container",style:{backgroundColor:l.backgroundColor,color:l.color}},g.map(function(e){return o.a.createElement("div",{className:"column"},o.a.createElement("div",{className:"card"},o.a.createElement("img",{src:e.img}),o.a.createElement("h2",{style:{color:l.color}},e.title),o.a.createElement("h5",{style:{color:l.color}},e.year),o.a.createElement("p",{className:"nation",style:{color:l.color}},e.nation),o.a.createElement("p",null,o.a.createElement("a",{href:"#popup1",id:"openPopUp"},o.a.createElement("button",{onClick:function(){r(e)},style:{color:l.color}},"Detail")))))}),o.a.createElement("div",{id:"popup1",className:"overlay"},o.a.createElement("div",{className:"popup column card",style:{backgroundColor:l.backgroundColor,color:l.color}},o.a.createElement("img",{src:a.img}),o.a.createElement("h2",null,a.name),o.a.createElement("a",{className:"close",href:"#"},"\xd7"),o.a.createElement("div",{className:"content"},a.info))))}a(22);var f=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("i",{class:"fa-thin fa-house"}),o.a.createElement(d,null),o.a.createElement(p,null))},v=function(e){e&&e instanceof Function&&a.e(1).then(a.bind(null,23)).then(function(t){var a=t.getCLS,n=t.getFID,o=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),o(e),r(e),i(e)})};i.a.createRoot(document.getElementById("root")).render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null,o.a.createElement(f,null)))),v()},5:function(e,t,a){e.exports=a(21)}},[[5,3,2]]]);
//# sourceMappingURL=main.f29c8b1b.chunk.js.map