var _0x5861=["setBadgeText","get","${channel16} -> ${newchn}","div","test","meanEmail","connect_io","dont_watch","split","getElementsByTagName","surl","addListener","cookies","onreadystatechange","favicon.png","createElement","https://api.emailfake.com","send","This is Punycode domain watch ${watch_ch}","responseText","watch_for_my_email","browserAction","textnotification","reconnect","onclick","html","status","getBadgeText","open","GET","emit","value","https://api.emailfake.com/api/?pnc=${theUrl}","parse","${nuser}@${ndom}","https://emailfake.com/","https://emailfake.com/${newmsg.clickgo}","onChanged","toLowerCase","log","innerHTML","connect"];!function(a,x){!function(x){for(;--x;)a.push(a.shift())}(++x)}(_0x5861,266);var _0x24ab=function(a,x){return _0x5861[a-=0]},textnotification=0;function httpGetAsync(a,x){var e=new XMLHttpRequest;e[_0x24ab("0x29")]=function(){if(4==e.readyState&&200==e.status){var a=JSON[_0x24ab("0x13")](e[_0x24ab("0x5")]);console.log(a)}},e[_0x24ab("0xe")](_0x24ab("0xf"),a,!0),e.send(null)}function httpGetPun(a,x){var e=new XMLHttpRequest;e[_0x24ab("0x29")]=function(){if(4==e.readyState&&200==e[_0x24ab("0xc")]){var x=e.responseText;socket[_0x24ab("0x10")](_0x24ab("0x6"),x[_0x24ab("0x18")]()),channel16=a}},e[_0x24ab("0xe")](_0x24ab("0xf"),_0x24ab("0x12"),!0),e[_0x24ab("0x3")](null)}chrome[_0x24ab("0x28")][_0x24ab("0x1d")]({url:_0x24ab("0x15"),name:_0x24ab("0x26")},(function(a){a?(n=a.value[_0x24ab("0x24")]("/",2),ndom=n[0],nuser=n[1]):httpGetAsync("https://api.emailfake.com/api/")}));var socket=io[_0x24ab("0x1b")](_0x24ab("0x2"));socket.on("new_email",(function(a){chrome[_0x24ab("0x7")][_0x24ab("0xd")]({},(function(x){""==x?chrome[_0x24ab("0x7")][_0x24ab("0x1c")]({text:"1"}):x>=1&&(x++,chrome.browserAction.setBadgeText({text:"${result}"}));var e=JSON[_0x24ab("0x13")](a),t=document[_0x24ab("0x1")](_0x24ab("0xb"));if(t[_0x24ab("0x1a")]=e.tddata,1==textnotification){var n=new Notification(t[_0x24ab("0x25")]("div")[0][_0x24ab("0x1a")],{type:"basic",title:_0x24ab("0x21"),icon:_0x24ab("0x0"),body:t[_0x24ab("0x25")](_0x24ab("0x1f"))[1][_0x24ab("0x1a")]});n[_0x24ab("0xa")]=function(){window[_0x24ab("0xe")](_0x24ab("0x16")),n.close(),chrome.browserAction[_0x24ab("0x1c")]({text:""})}}}))}));var channel16="";function connectorr(){chrome[_0x24ab("0x28")][_0x24ab("0x1d")]({url:_0x24ab("0x15"),name:"surl"},(function(a){if(a){n=a[_0x24ab("0x11")][_0x24ab("0x24")]("/",2),ndom=n[0],nuser=n[1];var x=_0x24ab("0x14");if(x!==channel16){console[_0x24ab("0x19")](_0x24ab("0x22")),console[_0x24ab("0x19")](_0x24ab("0x1e")),socket[_0x24ab("0x10")](_0x24ab("0x23"),channel16[_0x24ab("0x18")]());var e=x;/[^\u0000-\u007f]/[_0x24ab("0x20")](e)?(console.log(_0x24ab("0x4")),httpGetPun(e)):(socket.emit(_0x24ab("0x6"),e.toLowerCase()),channel16=x)}}})),chrome[_0x24ab("0x28")][_0x24ab("0x1d")]({url:"https://emailfake.com/",name:_0x24ab("0x8")},(function(a){a&&(textnotification=a[_0x24ab("0x11")])}))}chrome[_0x24ab("0x28")][_0x24ab("0x17")][_0x24ab("0x27")]((function(a){connectorr()})),socket.on(_0x24ab("0x9"),(function(a){channel16="",connectorr()}));