YUI.add("upstage-permalink",function(c){var a=c.Selection.getText;function b(d){b.superclass.constructor.apply(this,arguments);}b.NS="permalink";b.NAME="upstage-permalink";b.HTML_PARSER={titleContent:function(){return a(c.one("title"));}};b.ATTRS={strings:{value:{"slide":"Slide"}},titleContent:{value:""}};c.extend(b,c.Plugin.Base,{initializer:function(e){var g=this;var h=new c.HistoryHash;var f=g.get("host");var i=a(c.one("title"));g.afterHostEvent("navigate",function(n){var k=n.details[0];var o=g._indexToId(k);var j;h.addValue("slide",o);if(k==1){j=i;}else{var m=f.get("slides").item(k-1);var l=m.one("h1,h2,h3,h4,h5,h6,p");if(!l){l=m;}if(l){j=a(l);}if(!j){j=g.get("strings").slide+" "+k;}j=i+": "+j;}c.one("title").setContent(j);});function d(j){if(j&&j.newVal){j=j.newVal;}else{j=j||1;}j=g._idToIndex(j);if(j&&j!==f.get("currentSlide")){f.fire("navigate",j);}}h.on("slideChange",d);h.on("slideRemove",d);d(h.get("slide"));},_indexToId:function(d){d=this.get("host").snapToBounds(d);var e=this.get("host").get("slides").item(d-1).get("id");if(e.indexOf("yui_3")===0){e=null;}return(e)?e:d;},_idToIndex:function(e){var d;if(!isNaN(e)){return e;}this.get("host").get("slides").some(function(g,f){if(g.get("id")===e){return d=f;}});if(d){return d+1;}else{return null;}}});c.Plugin.UpstagePermalink=b;},"@VERSION@",{requires:["upstage-slideshow","node","history","selection"]});