!function(){function t(t){this.method=t.method,this.uri=t.uri,this.version=t.version,this.connection=t.connection,this.headers=t.headers,this.body=null,this.bodyparams=null,this.arguments={};var e=this.uri.indexOf("?");if(-1!=e){this.path=decodeURIComponent(this.uri.slice(0,e));for(var i=this.uri.slice(e+1),s=i.split("&"),h=0;h<s.length;h++){var n=s[h],o=n.indexOf("=");this.arguments[decodeURIComponent(n.slice(0,o))]=decodeURIComponent(n.slice(o+1,i.length))}}else this.path=decodeURIComponent(this.uri);this.origpath=this.path,"/"==this.path[this.path.length-1]&&(this.path=this.path.slice(0,this.path.length-1))}t.prototype={isKeepAlive:function(){return this.headers.connection&&"close"!=this.headers.connection.toLowerCase()}},WSC.HTTPRequest=t}();