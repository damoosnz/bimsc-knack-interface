var knackInterface=function(p){"use strict";const e={msg:{popup:{add:(p,e,s)=>function(p,e,s){var r=$("#"+p),a=$("<div>").addClass("popup-message"),n=$("<div>").html(e).css({marginBottom:"20px",fontSize:"18px",color:"#fff"}),o=$("<div>").addClass("progress-bar-container"),t=$("<div>").attr("id","popup-progress-bar-"+p).addClass("popup-progress-bar"),d=$("<div>").attr("id","progress-text-"+p).addClass("progress-text").text("0%");o.append(t),o.append(d),a.append(n),"progress"===s&&(a.append(o),console.log("progress popup"));var i=$("<div>").addClass("spinner-container"),c=$("<i>").addClass("fa fa-spinner fa-spin spinner").attr("id","popup-spinner-"+p);i.append(c),"spinner"===s&&(a.append(i),console.log("spinner popup")),console.log(a.html()),r.css("position","relative").append(a)}(p,e,s),remove:p=>function(p){$("#"+p+" .popup-message").remove()}(p),update:(p,e)=>function(p,e){$("#popup-progress-bar-"+p).css("width",e+"%"),$("#progress-text-"+p).text(Math.round(e)+"%")}(p,e)}}};return p.knackInterface=e,Object.defineProperty(p,"__esModule",{value:!0}),p}({});
//# sourceMappingURL=bimsc-knack-interface.bundle.js.map