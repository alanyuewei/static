/*
 * syalert.js
 * Version - 1.0
 * Copyright (c) 2019 sy
 */
var syalert=function(){return{syopen:function(id){var dom=$("#"+id);this.sycenter(dom);var name=dom.attr("sy-enter");var type=dom.attr("sy-type");var mask=dom.attr("sy-mask");dom.addClass(name);dom.show();var that=this;/*$("body").css({"overflow-y":"hidden"});*/if(mask=="true"){$("body").append("<div class='sy-mask' onclick=\"closeAlert('"+id+"')\"></div>");$(".sy-mask").fadeIn(300)}setTimeout(function(){dom.removeClass(name)},300);if(type=="tips"){setTimeout(function(){that.syhide(id)},1500)}},syhide:function(id){if(typeof id=="undefined"){var dom=$(".sy-alert")}else{var dom=$("#"+id)}var name=dom.attr("sy-leave");dom.addClass(name);$(".sy-mask").fadeOut(300);setTimeout(function(){dom.hide();dom.removeClass(name);$(".sy-mask").remove();/*$("body").css({"overflow-y":"auto"})*/},300)},sycenter:function(dom){var mgtop=parseFloat(dom.height()/2);dom.css({"top":"50%","margin-top":"-"+mgtop+"px"})}}}();
