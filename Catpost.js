var dr = document.querySelectorAll("pmt");
function labelthumbs(e){ output ='<ul>';
for(var t=0;t<numpostse;t++){var i,r=e.feed.entry[t],l=r.title.$t;
if(t==e.feed.entry.length)break;
var output;
for(var n=0;n<r.link.length;n++){if("replies"==r.link[n].rel&&"text/html"==r.link[n].type)r.link[n].title,r.link[n].href;if("alternate"==r.link[n].rel){i=r.link[n].href;break}}
output= output + '<li id="linktps">';
output=  output + '<a href="'+i+'" id="ltadre" target ="_top">'+l+"</a>";
output=  output + "</li>";}
output=  output + "</ul>";
document.write(output);
