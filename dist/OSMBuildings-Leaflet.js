var OSMBuildings=function(){function Ca(a,b){var c=a.x-b.x,d=a.y-b.y;return c*c+d*d}function Va(a){for(var b=Infinity,c=-Infinity,d=Infinity,f=-Infinity,e=0,g=a.length-3;e<g;e+=2)b=W(b,a[e]),c=Q(c,a[e]),d=W(d,a[e+1]),f=Q(f,a[e+1]);return{x:b+(c-b)/2<<0,y:d+(f-d)/2<<0}}function fa(a,b){var c={};a/=X;b/=X;c[Wa]=0>=b?90:1<=b?-90:Da*(2*Xa(Ya(H*(1-2*b)))-R);c[Za]=360*(1===a?1:(a%1+1)%1)-180;return c}function Ea(a,b,c){function d(a){if("XDomainRequest"in Y&&a!==f.readyState&&(f.readyState=a,f.onreadystatechange))f.onreadystatechange()}
a=a.replace(/\{ *([\w_]+) *\}/g,function(a,c){return b[c]||a});var f="XDomainRequest"in Y?new XDomainRequest:new XMLHttpRequest;f.onerror=function(){f.status=500;f.statusText="Error";d(4)};f.ontimeout=function(){f.status=408;f.statusText="Timeout";d(4)};f.onprogress=function(){d(3)};f.onload=function(){f.status=200;f.statusText="Ok";d(4)};f.onreadystatechange=function(){4===f.readyState&&f.status&&!(200>f.status||299<f.status)&&c&&f.responseText&&c(JSON.parse(f.responseText))};d(0);f.open("GET",a);
d(1);f.send(null);d(2);return f}function oa(a){Z=$+a.x;aa=x+a.y}function Fa(a){D=a.w;x=a.h;$=D/2<<0;pa=x/2<<0;Z=$;aa=x;y.setSize(D,x);qa=I-50}function Ga(a){E=a;X=$a<<E;a=fa(r+$,t+pa);Ha=Math.abs(40075040*ga(a.latitude)/ra(2,E+8));z=ra(0.95,E-N);sa=""+K.alpha(z);ha=""+ia.alpha(z);ba=""+S.alpha(z)}var Ia=Ia||Array,Ja=Ja||Array,m=Math,Ya=m.exp,ab=m.log,ta=m.sin,ga=m.cos,Ka=m.tan,Xa=m.atan,ja=m.atan2,W=m.min,Q=m.max,ka=m.sqrt,La=m.ceil,Ma=m.floor,ra=m.pow,Y=window,ua=document;Y.console||(Y.console={});
var M,va=function(a,b,c){0>c&&(c+=1);1<c&&(c-=1);return c<1/6?a+6*(b-a)*c:0.5>c?b:c<2/3?a+6*(b-a)*(2/3-c):a},bb={aliceblue:"#f0f8ff",antiquewhite:"#faebd7",aqua:"#00ffff",aquamarine:"#7fffd4",azure:"#f0ffff",beige:"#f5f5dc",bisque:"#ffe4c4",black:"#000000",blanchedalmond:"#ffebcd",blue:"#0000ff",blueviolet:"#8a2be2",brown:"#a52a2a",burlywood:"#deb887",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",cornflowerblue:"#6495ed",cornsilk:"#fff8dc",crimson:"#dc143c",cyan:"#00ffff",
darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkgray:"#a9a9a9",darkgreen:"#006400",darkkhaki:"#bdb76b",darkmagenta:"#8b008b",darkolivegreen:"#556b2f",darkorange:"#ff8c00",darkorchid:"#9932cc",darkred:"#8b0000",darksalmon:"#e9967a",darkseagreen:"#8fbc8f",darkslateblue:"#483d8b",darkslategray:"#2f4f4f",darkturquoise:"#00ced1",darkviolet:"#9400d3",deeppink:"#ff1493",deepskyblue:"#00bfff",dimgray:"#696969",dodgerblue:"#1e90ff",firebrick:"#b22222",floralwhite:"#fffaf0",forestgreen:"#228b22",
fuchsia:"#ff00ff",gainsboro:"#dcdcdc",ghostwhite:"#f8f8ff",gold:"#ffd700",goldenrod:"#daa520",gray:"#808080",green:"#008000",greenyellow:"#adff2f",honeydew:"#f0fff0",hotpink:"#ff69b4",indianred:"#cd5c5c",indigo:"#4b0082",ivory:"#fffff0",khaki:"#f0e68c",lavender:"#e6e6fa",lavenderblush:"#fff0f5",lawngreen:"#7cfc00",lemonchiffon:"#fffacd",lightblue:"#add8e6",lightcoral:"#f08080",lightcyan:"#e0ffff",lightgoldenrodyellow:"#fafad2",lightgray:"#d3d3d3",lightgreen:"#90ee90",lightpink:"#ffb6c1",lightsalmon:"#ffa07a",
lightseagreen:"#20b2aa",lightskyblue:"#87cefa",lightslategray:"#778899",lightsteelblue:"#b0c4de",lightyellow:"#ffffe0",lime:"#00ff00",limegreen:"#32cd32",linen:"#faf0e6",magenta:"#ff00ff",maroon:"#800000",mediumaquamarine:"#66cdaa",mediumblue:"#0000cd",mediumorchid:"#ba55d3",mediumpurple:"#9370db",mediumseagreen:"#3cb371",mediumslateblue:"#7b68ee",mediumspringgreen:"#00fa9a",mediumturquoise:"#48d1cc",mediumvioletred:"#c71585",midnightblue:"#191970",mintcream:"#f5fffa",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",
navajowhite:"#ffdead",navy:"#000080",oldlace:"#fdf5e6",olive:"#808000",olivedrab:"#6b8e23",orange:"#ffa500",orangered:"#ff4500",orchid:"#da70d6",palegoldenrod:"#eee8aa",palegreen:"#98fb98",paleturquoise:"#afeeee",palevioletred:"#db7093",papayawhip:"#ffefd5",peachpuff:"#ffdab9",peru:"#cd853f",pink:"#ffc0cb",plum:"#dda0dd",powderblue:"#b0e0e6",purple:"#800080",red:"#ff0000",rosybrown:"#bc8f8f",royalblue:"#4169e1",saddlebrown:"#8b4513",salmon:"#fa8072",sandybrown:"#f4a460",seagreen:"#2e8b57",seashell:"#fff5ee",
sienna:"#a0522d",silver:"#c0c0c0",skyblue:"#87ceeb",slateblue:"#6a5acd",slategray:"#708090",snow:"#fffafa",springgreen:"#00ff7f",steelblue:"#4682b4",tan:"#d2b48c",teal:"#008080",thistle:"#d8bfd8",tomato:"#ff6347",turquoise:"#40e0d0",violet:"#ee82ee",wheat:"#f5deb3",white:"#ffffff",whitesmoke:"#f5f5f5",yellow:"#ffff00",yellowgreen:"#9acd32"},T=function(a,b,c,d){this.H=a;this.S=b;this.L=c;this.A=d},m=T.prototype;m.toString=function(){var a=Math.min(360,Math.max(0,this.H)),b=Math.min(1,Math.max(0,this.S)),
c=Math.min(1,Math.max(0,this.L)),d=Math.min(1,Math.max(0,this.A)),f;if(0===b)a=f=b=c;else{var e=0.5>c?c*(1+b):c+b-c*b,c=2*c-e,a=a/360,b=va(c,e,a+1/3);f=va(c,e,a);a=va(c,e,a-1/3)}b*=255;f*=255;a*=255;return 1===d?"#"+(16777216+(b<<16)+(f<<8)+a).toString(16).slice(1,7):"rgba("+[Math.round(b),Math.round(f),Math.round(a),d.toFixed(2)].join()+")"};m.hue=function(a){return new T(this.H*a,this.S,this.L,this.A)};m.saturation=function(a){return new T(this.H,this.S*a,this.L,this.A)};m.lightness=function(a){return new T(this.H,
this.S,this.L*a,this.A)};m.alpha=function(a){return new T(this.H,this.S,this.L,this.A*a)};M=function(a){var b=0,c=0,d=0,f=1,e;a=(""+a).toLowerCase().replace("grey","gray");a=bb[a]||a;if(e=a.match(/^#(\w{2})(\w{2})(\w{2})$/))b=parseInt(e[1],16),c=parseInt(e[2],16),d=parseInt(e[3],16);if(e=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/))b=parseInt(e[1],10),c=parseInt(e[2],10),d=parseInt(e[3],10),f=e[4]?parseFloat(e[5]):1;b/=255;c/=255;d/=255;a=Math.max(b,c,d);var g=Math.min(b,c,d),h;e=(a+g)/
2;var k=a-g;if(k){g=0.5<e?k/(2-a-g):k/(a+g);switch(a){case b:h=(c-d)/k+(c<d?6:0);break;case c:h=(d-b)/k+2;break;case d:h=(b-c)/k+4}h*=60}else h=g=0;return new T(h,g,e,f)};var Na,m=Math,wa=m.PI,B=m.sin,J=m.cos,Oa=m.tan,Pa=m.asin,Qa=m.atan2,O=wa/180,la=23.4397*O;Na=function(a,b,c){c=O*-c;b*=O;a=a.valueOf()/864E5-0.5+2440588-2451545;var d=O*(357.5291+0.98560028*a),f=O*(1.9148*B(d)+0.02*B(2*d)+3E-4*B(3*d)),f=d+f+102.9372*O+wa,d=Pa(B(0)*J(la)+J(0)*B(la)*B(f)),f=Qa(B(f)*J(la)-Oa(0)*B(la),J(f));c=O*(280.16+
360.9856235*a)-c-f;return{altitude:Pa(B(b)*B(d)+J(b)*J(d)*J(c)),azimuth:Qa(B(c),J(c)*B(b)-Oa(d)*J(b))-wa/2}};var C={YARD_TO_METER:0.9144,FOOT_TO_METER:0.3048,INCH_TO_METER:0.0254,METERS_PER_LEVEL:3,clockwise:"CW",counterClockwise:"CCW",getWinding:function(a){var b,c,d,f,e=0,g,h;g=0;for(h=a.length-3;g<h;g+=2)b=a[g],c=a[g+1],d=a[g+2],f=a[g+3],e+=b*f-d*c;return 0<e/2?this.clockwise:this.counterClockwise},makeWinding:function(a,b){if(this.getWinding(a)===b)return a;for(var c=[],d=a.length-2;0<=d;d-=2)c.push(a[d],
a[d+1]);return c},toMeters:function(a){a=""+a;var b=parseFloat(a);return b===a||~a.indexOf("m")?b<<0:~a.indexOf("yd")?b*this.YARD_TO_METER<<0:~a.indexOf("ft")?b*this.FOOT_TO_METER<<0:~a.indexOf("'")?(a=a.split("'"),a[0]*this.FOOT_TO_METER+a[1]*this.INCH_TO_METER<<0):b<<0},getRadius:function(a){for(var b=90,c=-90,d=0,f=a.length;d<f;d+=2)b=W(b,a[d]),c=Q(c,a[d]);return 6378137*((c-b)/Da)/2<<0},materialColors:{brick:"#cc7755",bronze:"#ffeecc",canvas:"#fff8f0",concrete:"#999999",copper:"#a0e0d0",glass:"#e8f8f8",
gold:"#ffcc00",plants:"#009933",metal:"#aaaaaa",panel:"#fff8f0",plaster:"#999999",roof_tiles:"#f08060",silver:"#cccccc",slate:"#666666",stone:"#996666",tar_paper:"#333333",wood:"#deb887"},baseMaterials:{asphalt:"tar_paper",bitumen:"tar_paper",block:"stone",bricks:"brick",glas:"glass",glassfront:"glass",grass:"plants",masonry:"stone",granite:"stone",panels:"panel",paving_stones:"stone",plastered:"plaster",rooftiles:"roof_tiles",roofingfelt:"tar_paper",sandstone:"stone",sheet:"canvas",sheets:"canvas",
shingle:"tar_paper",shingles:"tar_paper",slates:"slate",steel:"metal",tar:"tar_paper",tent:"canvas",thatch:"plants",tile:"roof_tiles",tiles:"roof_tiles"},getMaterialColor:function(a){a=a.toLowerCase();return"#"===a[0]?a:this.materialColors[this.baseMaterials[a]||a]||null},alignProperties:function(a){var b={};a=a||{};b.height=this.toMeters(a.height);b.height||(a["building:height"]&&(b.height=this.toMeters(a["building:height"])),a.levels&&(b.height=a.levels*this.METERS_PER_LEVEL<<0),a["building:levels"]&&
(b.height=a["building:levels"]*this.METERS_PER_LEVEL<<0),b.height||(b.height=cb));b.minHeight=this.toMeters(a.min_height);b.min_height||(a["building:min_height"]&&(b.minHeight=this.toMeters(a["building:min_height"])),a.min_level&&(b.minHeight=a.min_level*this.METERS_PER_LEVEL<<0),a["building:min_level"]&&(b.minHeight=a["building:min_level"]*this.METERS_PER_LEVEL<<0));b.wallColor=a.wallColor||a.color;b.wallColor||(a.color&&(b.wallColor=a.color),a["building:material"]&&(b.wallColor=this.getMaterialColor(a["building:material"])),
a["building:facade:material"]&&(b.wallColor=this.getMaterialColor(a["building:facade:material"])),a["building:cladding"]&&(b.wallColor=this.getMaterialColor(a["building:cladding"])),a["building:color"]&&(b.wallColor=a["building:color"]),a["building:colour"]&&(b.wallColor=a["building:colour"]));b.roofColor=a.roofColor;b.roofColor||(a["roof:material"]&&(b.roofColor=this.getMaterialColor(a["roof:material"])),a["building:roof:material"]&&(b.roofColor=this.getMaterialColor(a["building:roof:material"])),
a["roof:color"]&&(b.roofColor=a["roof:color"]),a["roof:colour"]&&(b.roofColor=a["roof:colour"]),a["building:roof:color"]&&(b.roofColor=a["building:roof:color"]),a["building:roof:colour"]&&(b.roofColor=a["building:roof:colour"]));switch(a["building:shape"]){case "cone":case "cylinder":b.shape=a["building:shape"];break;case "dome":b.shape="dome";break;case "sphere":b.shape="cylinder"}if(("cone"===a["roof:shape"]||"dome"===a["roof:shape"])&&a["roof:height"])b.shape="cylinder",b.roofShape=a["roof:shape"],
b.roofHeight=this.toMeters(a["roof:height"]);b.roofHeight&&(b.height=Q(0,b.height-b.roofHeight));return b}},Ra,Sa=function(a){var b,c,d,f,e,g=[],h=[],k=0;d=[];switch(a.type){case "GeometryCollection":b=0;for(c=a.geometries.length;b<c;b++)if(g=Sa(a.geometries[b]))d=d.concat(g);return d;case "Polygon":f=a.coordinates;break;case "MultiPolygon":f=a.coordinates[0];break;default:return d}e=f[0];b=0;for(c=e.length;b<c;b++)g.push(e[b][1],e[b][0]),void 0!==e[b][2]&&(k+=e[b][2]);b=0;for(c=f.length-1;b<c;b++){e=
f[b+1];h[b]=[];a=0;for(d=e.length;a<d;a++)h[b].push(e[a][1],e[a][0]);h[b]=C.makeWinding(h[b],C.counterClockwise)}return[{outer:C.makeWinding(g,C.clockwise),inner:h.length?h:null,height:k/f[0].length}]};Ra=function(a,b){var c,d,f,e,g=[],h,k,j,l;c=0;for(d=a.length;c<d;c++)if(h=a[c],!("Feature"!==h.type||!1===b(h))){j=C.alignProperties(h.properties);k=Sa(h.geometry);f=0;for(e=k.length;f<e;f++){l=j;var n={},q=void 0;for(q in l)l.hasOwnProperty(q)&&(n[q]=l[q]);l=n;l.footprint=k[f].outer;if("cone"===l.shape||
"cylinder"===l.shape)l.radius=C.getRadius(l.footprint);l.holes=k[f].inner;l.id=h.id||h.properties.id||[l.footprint[0],l.footprint[1],l.height,l.minHeight].join();g.push(l)}}return g};var Ta,Ua=function(a){return(a=a.tags)&&!a.landuse&&(a.building||a["building:part"])&&(!a.layer||0<=a.layer)},ya=function(a){if(a){for(var b=[],c,d=0,f=a.length;d<f;d++)c=xa[a[d]],b.push(c[0],c[1]);b[b.length-2]!==b[0]&&b[b.length-1]!==b[1]&&b.push(b[0],b[1]);if(!(8>b.length))return b}},db=function(a,b){for(var c in b)b.hasOwnProperty(c)&&
(a[c]=b[c]);return a},za=function(a,b){var c=C.alignProperties(a.tags);a.id&&(c.id=a.id);b&&(c.footprint=C.makeWinding(b,C.clockwise));if("cone"===c.shape||"cylinder"===c.shape)c.radius=C.getRadius(c.footprint);return c},xa,ca,ma,na;Ta=function(a,b){xa={};ca={};ma=[];na=b;for(var c,d=0,f=a.length;d<f;d++)switch(c=a[d],c.type){case "node":xa[c.id]=[c.lat,c.lon];break;case "way":if(Ua(c)){var e=void 0,e=void 0;if((e=ya(c.nodes))&&!1!==na(c))e=za(c,e),ma.push(e)}else if(e=c.tags,!e||!e.highway&&!e.railway&&
!e.landuse)ca[c.id]=c;break;case "relation":var g=c,h=void 0,k=void 0;c=[];var j=k=void 0,l=void 0,e=void 0;if(Ua(g)&&!("multipolygon"!==g.tags.type&&"building"!==g.tags.type||!1===na(g))){for(var h=g.members,k=j=void 0,l=[],n=0,q=h.length;n<q;n++)j=h[n],"way"===j.type&&ca[j.ref]&&(!j.role||"outer"===j.role?k=ca[j.ref]:("inner"===j.role||"enclave"===j.role)&&l.push(ca[j.ref]));h=k?{outer:k,inner:l}:void 0;if(h&&(j=za(g),k=h.outer))if((l=ya(k.nodes))&&!1!==na(k)){k=za(k,l);g=0;for(l=h.inner.length;g<
l;g++)(e=ya(h.inner[g].nodes))&&c.push(C.makeWinding(e,C.counterClockwise));c.length&&(k.holes=c);ma.push(db(k,j))}}}return ma};var H=Math.PI,R=H/2,eb=H/4,Da=180/H,$a=256,N=15,Wa="latitude",Za="longitude",D=0,x=0,$=0,pa=0,r=0,t=0,E,X,K=M("rgba(200, 190, 180)"),ia=K.lightness(0.8),S=K.lightness(1.2),sa=""+K,ha=""+ia,ba=""+S,U,Ha=1,z=1,qa,cb=5,Z,aa,I=450,da,Aa={time:new Date,data:{},add:function(a,b){this.data[b]={data:a,time:Date.now()}},get:function(a){return this.data[a]&&this.data[a].data},purge:function(){this.time.setMinutes(this.time.getMinutes()-
5);for(var a in this.data)this.data[a].time<this.time&&delete this.data[a]}},G={currentItemsIndex:{},items:[],cropDecimals:function(a){return parseFloat(a.toFixed(5))},getPixelFootprint:function(a){for(var b,c,d=new Ia(a.length),f=0,e=a.length-1;f<e;f+=2)b=a[f+1],c=W(1,Q(0,0.5-ab(Ka(eb+R*a[f]/180))/H/2)),b=(b/360+0.5)*X<<0,c=c*X<<0,d[f]=b,d[f+1]=c;a=d;d=a.length/2;f=new Ja(d);e=0;b=d-1;var g,h,k,j=[],l=[],n=[];for(f[e]=f[b]=1;b;){g=0;for(c=e+1;c<b;c++){h=a[2*c];var q=a[2*c+1],p=a[2*e],V=a[2*e+1],
s=a[2*b],v=a[2*b+1],m=s-p,u=v-V,r=void 0;if(0!==m||0!==u)r=((h-p)*m+(q-V)*u)/(m*m+u*u),1<r?(p=s,V=v):0<r&&(p+=m*r,V+=u*r);m=h-p;u=q-V;h=m*m+u*u;h>g&&(k=c,g=h)}2<g&&(f[k]=1,j.push(e),l.push(k),j.push(k),l.push(b));e=j.pop();b=l.pop()}for(c=0;c<d;c++)f[c]&&n.push(a[2*c],a[2*c+1]);d=n;if(!(8>d.length))return d},createClosure:function(a){var b=this;return function(c){c=b.parse(c);Aa.add(c,a);b.addRenderItems(c,!0)}},parse:function(a){return!a?[]:"FeatureCollection"===a.type?Ra(a.features,this.each):a.osm3s?
Ta(a.elements,this.each):[]},resetItems:function(){this.items=[];this.currentItemsIndex={}},addRenderItems:function(a,b){for(var c=this.scale(a),d=0,f=c.length;d<f;d++)this.currentItemsIndex[c[d].id]||(c[d].scale=b?0:1,this.items.push(c[d]),this.currentItemsIndex[c[d].id]=1);U||(U=setInterval(function(){for(var a=G.items,b=!1,c=0,d=a.length;c<d;c++)1>a[c].scale&&(a[c].scale+=0.1,1<a[c].scale&&(a[c].scale=1),b=!0);y.render();b||(clearInterval(U),U=null)},33))},scale:function(a){var b,c,d,f,e=[],g,
h,k,j,l,n,q,p,m,s=6/ra(2,E-N);b=0;for(c=a.length;b<c;b++)if(g=a[b],h=g.height/s,k=isNaN(g.minHeight)?0:g.minHeight/s,!(k>qa)&&(j=this.getPixelFootprint(g.footprint))){p=[];if(g.holes){d=0;for(f=g.holes.length;d<f;d++)(m=this.getPixelFootprint(g.holes[d]))&&p.push(m)}f=d=null;if(g.wallColor&&(l=M(g.wallColor)))d=l.alpha(z),f=""+d.lightness(0.8),d=""+d;n=null;if(g.roofColor&&(l=M(g.roofColor)))n=""+l.alpha(z);q=g.roofHeight/s;h<=k&&0>=q||e.push({id:g.id,footprint:j,height:W(h,qa),minHeight:k,wallColor:d,
altColor:f,roofColor:n,roofShape:g.roofShape,roofHeight:q,center:Va(j),holes:p.length?p:null,shape:g.shape,radius:g.radius/Ha})}return e},set:function(a){this.isStatic=!0;this.resetItems();this.addRenderItems(this.staticData=this.parse(a),!0)},load:function(a){this.url=a||"http://overpass-api.de/api/interpreter?data=[out:json];(way[%22building%22]({s},{w},{n},{e});node(w);way[%22building:part%22=%22yes%22]({s},{w},{n},{e});node(w);relation[%22building%22]({s},{w},{n},{e});way(r);node(w););out;";(this.isStatic=
!/(.+\{[nesw]\}){4,}/.test(this.url))?(this.resetItems(),Ea(this.url,{},function(a){this.addRenderItems(this.staticData=this.parse(a),!0)})):this.update()},update:function(){this.resetItems();if(!(E<N))if(this.isStatic)this.addRenderItems(this.staticData);else if(this.url){var a,b,c,d,f=fa(r,t);a=fa(r+D,t+x);var e=0.0075*La(f.latitude/0.0075),g=0.015*La(a.longitude/0.015);a=0.0075*Ma(a.latitude/0.0075);for(f=0.015*Ma(f.longitude/0.015);a<=e;a+=0.0075)for(b=f;b<=g;b+=0.015)a=this.cropDecimals(a),b=
this.cropDecimals(b),d=a+","+b,(c=Aa.get(d))?this.addRenderItems(c):Ea(this.url,{n:this.cropDecimals(a+0.0075),e:this.cropDecimals(b+0.015),s:a,w:b},this.createClosure(d));Aa.purge()}},each:function(){}},A={circle:function(a,b,c,d,f){a.fillStyle=f;a.beginPath();a.arc(b,c,d,0,2*H);a.stroke();a.fill()},draw:function(a,b,c,d,f,e,g,h,k,j){var l=I/(I-e);e=ea.project(b,c,l);f*=l;g&&(l=I/(I-g),c=ea.project(b,c,l),b=c.x,c=c.y,d*=l);(l=A.getTangents(b,c,d,e.x,e.y,f))?(g=ja(l[0].y1-c,l[0].x1-b),l=ja(l[1].y1-
c,l[1].x1-b)):(g=0,l=1.5*H);a.fillStyle=h;a.beginPath();a.arc(e.x,e.y,f,R,g,!0);a.arc(b,c,d,g,R);a.closePath();a.fill();a.fillStyle=k;a.beginPath();a.arc(e.x,e.y,f,l,R,!0);a.arc(b,c,d,R,l);a.closePath();a.fill();A.circle(a,e.x,e.y,f,j)},shadow:function(a,b,c,d,f,e,g){e=P.project(b,c,e);var h;g&&(c=P.project(b,c,g),b=c.x,c=c.y);var k=A.getTangents(b,c,d,e.x,e.y,f);k?(g=ja(k[0].y1-c,k[0].x1-b),h=ja(k[1].y1-c,k[1].x1-b),a.moveTo(k[1].x2,k[1].y2),a.arc(e.x,e.y,f,h,g),a.arc(b,c,d,g,h)):(a.moveTo(b+d,c),
a.arc(b,c,d,0,2*H))},footprintMask:function(a,b,c,d){a.moveTo(b+d,c);a.arc(b,c,d,0,2*H)},getTangents:function(a,b,c,d,f,e){var g=a-d,h=b-f,k=c-e,j=g*g+h*h;if(!(j<=k*k)){var j=ka(j),g=-g/j,h=-h/j,k=k/j,j=[],l,n,q;l=ka(Q(0,1-k*k));for(var p=1;-1<=p;p-=2)n=g*k-p*l*h,q=h*k+p*l*g,j.push({x1:a+c*n<<0,y1:b+c*q<<0,x2:d+e*n<<0,y2:f+e*q<<0});return j}}},ea={project:function(a,b,c){return{x:(a-Z)*c+Z<<0,y:(b-aa)*c+aa<<0}},drawSolid:function(a,b,c,d,f){for(var e={x:0,y:0},g={x:0,y:0},h,k,j=[],l=0,n=a.length-
3;l<n;l+=2)e.x=a[l]-r,e.y=a[l+1]-t,g.x=a[l+2]-r,g.y=a[l+3]-t,h=this.project(e.x,e.y,b),k=this.project(g.x,g.y,b),c&&(e=this.project(e.x,e.y,c),g=this.project(g.x,g.y,c)),(g.x-e.x)*(h.y-e.y)>(h.x-e.x)*(g.y-e.y)&&(this.context.fillStyle=e.x<g.x&&e.y<g.y||e.x>g.x&&e.y>g.y?f:d,this.drawFace([g.x,g.y,e.x,e.y,h.x,h.y,k.x,k.y],!0)),j[l]=h.x,j[l+1]=h.y;return j},drawFace:function(a,b,c){var d=this.context,f,e,g,h;if(a.length){d.beginPath();d.moveTo(a[0],a[1]);f=2;for(e=a.length;f<e;f+=2)d.lineTo(a[f],a[f+
1]);if(c){f=0;for(e=c.length;f<e;f++){a=c[f];d.moveTo(a[0],a[1]);g=2;for(h=a.length;g<h;g+=2)d.lineTo(a[g],a[g+1])}}d.closePath();d.fill();b&&d.stroke()}},render:function(){var a=this.context;a.clearRect(0,0,D,x);if(!(E<N||da)){var b,c,d,f,e,g,h,k={x:Z+r,y:aa+t},j=r,l=r+D,n=t,q=t+x,p,m,s,v,F,u=G.items;u.sort(function(a,b){return a.minHeight-b.minHeight||Ca(b.center,k)-Ca(a.center,k)||b.height-a.height});b=0;for(c=u.length;b<c;b++)if(e=u[b],!Ba.isSimple(e)){s=!1;p=e.footprint;d=0;for(f=p.length-1;d<
f;d+=2)s||(s=p[d]>j&&p[d]<l&&p[d+1]>n&&p[d+1]<q);if(s)switch(d=1>e.scale?e.height*e.scale:e.height,g=I/(I-d),h=f=0,e.minHeight&&(f=1>e.scale?e.minHeight*e.scale:e.minHeight,h=I/(I-f)),s=e.wallColor||sa,v=e.altColor||ha,F=e.roofColor||ba,a.strokeStyle=v,e.shape){case "cylinder":g=e.center.x-r;h=e.center.y-t;p=e.radius;A.draw(a,g,h,p,p,d,f,s,v,F);"cone"===e.roofShape&&A.draw(a,g,h,p,0,d+e.roofHeight,d,F,""+M(F).lightness(0.9));"dome"===e.roofShape&&A.draw(a,g,h,p,p/2,d+e.roofHeight,d,F,""+M(F).lightness(0.9));
break;case "cone":A.draw(a,e.center.x-r,e.center.y-t,e.radius,0,d,f,s,v);break;case "dome":A.draw(a,e.center.x-r,e.center.y-t,e.radius,e.radius/2,d,f,s,v);break;default:p=this.drawSolid(p,g,h,s,v);m=[];if(e.holes){d=0;for(f=e.holes.length;d<f;d++)m[d]=this.drawSolid(e.holes[d],g,h,s,v)}a.fillStyle=F;this.drawFace(p,!0,m)}}}}},Ba={maxZoom:N+2,maxHeight:2,isSimple:function(a){return E<=this.maxZoom&&a.height+a.roofHeight<this.maxHeight},getFace:function(a){for(var b=[],c=0,d=a.length-3;c<d;c+=2)b[c]=
a[c]-r,b[c+1]=a[c+1]-t;return b},drawFace:function(a,b){if(a.length){var c=this.context,d,f,e,g;c.beginPath();c.moveTo(a[0],a[1]);d=2;for(f=a.length;d<f;d+=2)c.lineTo(a[d],a[d+1]);if(b){d=0;for(f=b.length;d<f;d++){a=b[d];c.moveTo(a[0],a[1]);e=2;for(g=a.length;e<g;e+=2)c.lineTo(a[e],a[e+1])}}c.closePath();c.stroke();c.fill()}},render:function(){this.context.clearRect(0,0,D,x);if(!(E<N||da||E>this.maxZoom)){var a,b,c,d,f,e=r,g=r+D,h=t,k=t+x,j,l,n,q=G.items;a=0;for(b=q.length;a<b;a++)if(f=q[a],!(f.height>=
this.maxHeight)){n=!1;j=f.footprint;c=0;for(d=j.length-1;c<d;c+=2)n||(n=j[c]>e&&j[c]<g&&j[c+1]>h&&j[c+1]<k);if(n)if(c=f.altColor||ha,n=f.roofColor||ba,this.context.strokeStyle=c,"cylinder"===f.shape||"cone"===f.shape||"dome"===f.shape)A.circle(this.context,f.center.x-r,f.center.y-t,f.radius,n);else{j=this.getFace(j);l=[];if(f.holes){c=0;for(d=f.holes.length;c<d;c++)l[c]=this.getFace(f.holes[c])}this.context.fillStyle=n;this.drawFace(j,l)}}}}},P={enabled:!0,color:"#666666",blurColor:"#000000",blurSize:15,
date:new Date,direction:{x:0,y:0},project:function(a,b,c){return{x:a+this.direction.x*c,y:b+this.direction.y*c}},render:function(){var a=this.context,b,c,d;a.clearRect(0,0,D,x);if(this.enabled&&!(E<N||da))if(b=fa(r+$,t+pa),b=Na(this.date,b.latitude,b.longitude),!(0>=b.altitude)){c=1/Ka(b.altitude);d=5>c?0.75:5*(1/c);this.direction.x=ga(b.azimuth)*c;this.direction.y=ta(b.azimuth)*c;var f,e,g,h,k,j,l,n,q,p,m,s,v,F;b=[];c=[];var u=G.items;a.canvas.style.opacity=d/(2*z);a.shadowColor=this.blurColor;a.shadowBlur=
this.blurSize*(z/2);a.fillStyle=this.color;a.beginPath();d=0;for(f=u.length;d<f;d++){j=u[d];q=!1;l=j.footprint;h=[];e=0;for(g=l.length-1;e<g;e+=2)h[e]=k=l[e]-r,h[e+1]=n=l[e+1]-t,q||(q=0<k&&k<D&&0<n&&n<x);if(q)if(k=1>j.scale?j.height*j.scale:j.height,l=0,j.minHeight&&(l=1>j.scale?j.minHeight*j.scale:j.minHeight),"cylinder"===j.shape||"cone"===j.shape||"dome"===j.shape)b.push({shape:j.shape,center:{x:j.center.x-r,y:j.center.y-t},radius:j.radius,h:k,mh:l}),("cone"===j.roofShape||"dome"===j.roofShape)&&
b.push({shape:j.roofShape,center:{x:j.center.x-r,y:j.center.y-t},radius:j.radius,h:k+j.roofHeight,mh:k});else{n=null;e=0;for(g=h.length-3;e<g;e+=2)q=h[e],p=h[e+1],m=h[e+2],s=h[e+3],v=this.project(q,p,k),F=this.project(m,s,k),l&&(p=this.project(q,p,l),s=this.project(m,s,l),q=p.x,p=p.y,m=s.x,s=s.y),(m-q)*(v.y-p)>(v.x-q)*(s-p)?(1===n&&a.lineTo(q,p),n=0,e||a.moveTo(q,p),a.lineTo(m,s)):(0===n&&a.lineTo(v.x,v.y),n=1,e||a.moveTo(v.x,v.y),a.lineTo(F.x,F.y));l||c.push(h);if(j.holes){e=0;for(g=j.holes.length;e<
g;e++){n=j.holes[e];q=[n[0]-r,n[1]-t];a.moveTo(q[0],q[1]);h=2;for(k=n.length;h<k;h+=2)q[h]=n[h]-r,q[h+1]=n[h+1]-t,a.lineTo(q[h],q[h+1]);l||c.push(q)}}}}d=0;for(f=b.length;d<f;d++)switch(j=b[d],u=j.center.x,e=j.center.y,g=j.radius,j.shape){case "cylinder":A.shadow(a,u,e,g,g,j.h,j.mh);break;case "cone":A.shadow(a,u,e,g,0,j.h,j.mh);break;case "dome":A.shadow(a,u,e,g,g/2,j.h,j.mh)}a.closePath();a.fill();a.shadowBlur=null;a.globalCompositeOperation="destination-out";a.beginPath();d=0;for(f=c.length;d<
f;d++){n=c[d];a.moveTo(n[0],n[1]);e=2;for(g=n.length;e<g;e+=2)a.lineTo(n[e],n[e+1]);a.lineTo(n[0],n[1])}d=0;for(f=b.length;d<f;d++)j=b[d],("cylinder"===j.shape||"cone"===j.shape||"dome"===j.shape)&&!j.mh&&A.footprintMask(a,j.center.x,j.center.y,j.radius);a.fillStyle="#00ff00";a.fill();a.globalCompositeOperation="source-over"}}},fb={getContext:function(a){function b(a,b,c,e){var f=c-a,g=e-b,h=ka(f*f+g*g),j=ka(h),k=f/h*j,h=g/h*j;d.bezierCurveTo(a+0.2*f+0.6*h,b+0.2*g-0.6*k,a+0.85*f-1.2*h,b+0.85*g+1.2*
k,c,e)}function c(a,c,d,e,g){e=Math.round(e/f)*f;g=Math.round(g/f)*f;var h=a+ga(e)*d;e=c+ta(e)*d;a+=ga(g)*d;c+=ta(g)*d;b(h,e,a,c)}var d=a.getContext("2d"),f=H/4,e=0,g=0,h=0,k=0,j=d.moveTo,l=d.beginPath,m=d.closePath;d.moveTo=function(a,b){h=e=a;k=g=b;j.call(d,a,b)};d.lineTo=function(a,c){b(h,k,h=a,k=c)};d.beginPath=function(){e=h;g=k;l.call(d)};d.closePath=function(){b(h,k,e,g);m.call(d);d.strokeStyle="rgba(50, 0, 0, 0.75)";d.lineWidth=1/z};d.arc=function(a,b,d,e,g,h){if(h){for(;g-e>f;)c(a,b,d,e,
e+f),e+=f;c(a,b,d,e,g)}else{for(;g-e>f;)c(a,b,d,g,g-f),g-=f;c(a,b,d,g,e)}};return d}},y={container:ua.createElement("DIV"),items:[],init:function(){this.container.style.pointerEvents="none";this.container.style.position="absolute";this.container.style.left=0;this.container.style.top=0;P.context=this.createContext();Ba.context=this.createContext();ea.context=this.createContext()},render:function(){P.render();Ba.render();ea.render()},createContext:function(){var a=ua.createElement("CANVAS");a.style.webkitTransform=
"translate3d(0,0,0)";a.style.imageRendering="optimizeSpeed";a.style.position="absolute";a.style.left=0;a.style.top=0;var b=a.getContext("2d");b.lineCap="round";b.lineJoin="round";b.lineWidth=1;b.mozImageSmoothingEnabled=!1;b.webkitImageSmoothingEnabled=!1;this.items.push(a);this.container.appendChild(a);fb.getContext(a);return b},appendTo:function(a){a.appendChild(this.container)},remove:function(){this.container.parentNode.removeChild(this.container)},setSize:function(a,b){for(var c=0,d=this.items.length;c<
d;c++)this.items[c].width=a,this.items[c].height=b},screenshot:function(){var a=ua.createElement("CANVAS"),b=a.getContext("2d"),c,d,f;a.width=D;a.height=x;clearInterval(U);U=null;f=G.items;c=0;for(d=f.length;c<d;c++)f[c].scale=1;this.render();c=0;for(d=this.items.length;c<d;c++)f=this.items[c],""!==f.style.opacity&&(b.globalAlpha=parseFloat(f.style.opacity)),b.drawImage(f,0,0),b.globalAlpha=1;return a.toDataURL("image/png")},setPosition:function(a,b){this.container.style.left=a+"px";this.container.style.top=
b+"px"}};y.init();var m=function(a){this.offset={x:0,y:0};a.addLayer(this)},w=m.prototype;w.onAdd=function(a){this.map=a;y.appendTo(a._panes.overlayPane);var b=this.getOffset(),c=a.getPixelOrigin();Fa({w:a._size.x,h:a._size.y});var d=c.y-b.y;r=c.x-b.x;t=d;Ga(a._zoom);y.setPosition(-b.x,-b.y);a.on({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);if(a.options.zoomAnimation)a.on("zoomanim",this.onZoom,this);
a.attributionControl&&a.attributionControl.addAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');G.update()};w.onRemove=function(){var a=this.map;a.attributionControl&&a.attributionControl.removeAttribution('&copy; <a href="http://osmbuildings.org">OSM Buildings</a>');a.off({move:this.onMove,moveend:this.onMoveEnd,zoomstart:this.onZoomStart,zoomend:this.onZoomEnd,resize:this.onResize,viewreset:this.onViewReset},this);a.options.zoomAnimation&&a.off("zoomanim",this.onZoom,this);
y.remove()};w.onMove=function(){var a=this.getOffset();oa({x:this.offset.x-a.x,y:this.offset.y-a.y});ea.render()};w.onMoveEnd=function(){if(this.skipMoveEnd)this.skipMoveEnd=!1;else{var a=this.map,b=this.getOffset(),c=a.getPixelOrigin();this.offset=b;y.setPosition(-b.x,-b.y);oa({x:0,y:0});Fa({w:a._size.x,h:a._size.y});a=c.y-b.y;r=c.x-b.x;t=a;y.render();G.update()}};w.onZoomStart=function(){da=!0;y.render()};w.onZoom=function(){};w.onZoomEnd=function(){var a=this.map,b=this.getOffset(),c=a.getPixelOrigin(),
d=c.y-b.y;r=c.x-b.x;t=d;a=a._zoom;da=!1;Ga(a);G.update();y.render();this.skipMoveEnd=!0};w.onResize=function(){};w.onViewReset=function(){var a=this.getOffset();this.offset=a;y.setPosition(-a.x,-a.y);oa({x:0,y:0})};w.getOffset=function(){return L.DomUtil.getPosition(this.map._mapPane)};w.setStyle=function(a){a=a||{};var b;if(b=a.color||a.wallColor)K=M(b),sa=""+K.alpha(z),ia=K.lightness(0.8),ha=""+ia.alpha(z),S=K.lightness(1.2),ba=""+S.alpha(z);a.roofColor&&(S=M(a.roofColor),ba=""+S.alpha(z));void 0!==
a.shadows&&(P.enabled=!!a.shadows);y.render();return this};w.setDate=function(a){P.date=a;P.render();return this};w.loadData=function(a){G.load(a);return this};w.setData=function(a){G.set(a);return this};w.each=function(a,b){G.each=function(c){return a.call(b,c)};return this};w.screenshot=function(a){var b=y.screenshot();a&&(Y.location.href=b.replace("image/png","image/octet-stream"));return b};m.VERSION="0.1.9a";m.ATTRIBUTION='&copy; <a href="http://osmbuildings.org">OSM Buildings</a>';return m}();
