var ajax={create:{full:function(){if(window.XMLHttpRequest){xmlhttp=new XMLHttpRequest();return xmlhttp;}else{xmlhttp=new ActiveXObject('Microsoft.XMLHTTP');return xmlhttp;}},modern:function(){xmlhttp=new XMLHttpRequest();return xmlhttp;},xml:function(){if(window.XMLHttpRequest){xhttp=new XMLHttpRequest();}else{xhttp=new ActiveXObject('Microsoft.XMLHTTP');}
return xhttp;},xmlModern:function(){xhttp=new XMLHttpRequest();return xhttp;}},post:function(url,args,callBack){var obj=ajax.create.full();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callBack(obj.responseText);}}
xmlhttp.open('POST',url,true);xmlhttp.setRequestHeader('Content-type','application/x-www-form-urlencoded');xmlhttp.send(args);},get:function(url,callBack){var obj=ajax.create.full();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callBack(obj.responseText);}}
obj.open('GET',url,true);obj.send();},xget:function(url,callBack){var obj=ajax.create.full();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callBack({'url':url,'responseText':obj.responseText});}}
obj.open('GET',url,true);obj.send();},xml:function(url){var obj=ajax.create.xml();obj.open('GET',url,false);obj.send();return obj.responseXML;},solidXml:function(url,callback){var obj=ajax.create.xml();obj.onreadystatechange=function(){if(obj.readyState==4&&obj.status==200&&typeof callBack==='function'){callback(obj.responseXML);}}
obj.open('GET',url,false);obj.send();},cacheXml:function(uri,fnc){if(uri in ajax.xmlCache){fnc(ajax.xmlCache[uri]);}else{ajax.solidXml(uri,function(res){ajax.xmlCache[uri]=res;fnc(res);});}},xmlCache:{},clearCache:function(){ajax.xmlCache={};}}

// update 20140101 added failsafe callback functions to AJAX. You can now use "ajax.get('http://www.example.com');" without callback function, useful for preloading.

// update 20160615 added ajax.xget, which returns object {'url':url,'responseText':responseText}








// some constants

window.postsPerPage=12
window.errorPage="<root><post><header>Oops :P</header><content>An error occured.</content></post></root>"



window.onload=function(){
	if (!!1 && !!!0 || ! !! false){
		ajax.get('posts.htm',function(res){
			putContent(res);
		});
	}
}

function putContent(rawXml) {
	// 
	// parse xml
	//

	document.body.innerHTML+='<div id="parseTemp">'+rawXml+'</div>';
	console.log(document.getElementById('parseTemp').getElementsByClassName('post-container').length);
}
