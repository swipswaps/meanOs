!function(){var e=this,n=function(n,i){var t,s=n.split("."),o=window||e;s[0]in o||!o.execScript||o.execScript("var "+s[0]);for(;s.length&&(t=s.shift());)s.length||void 0===i?o=o[t]?o[t]:o[t]={}:o[t]=i},i=function(e){var n=chrome.runtime.connect("nmmhkkegccagdldgiimedpiccmgmieda",{}),i=!1;n.onMessage.addListener((function(n){i=!0,"response"in n&&!("errorType"in n.response)?e.success&&e.success(n):e.failure&&e.failure(n)})),n.onDisconnect.addListener((function(){!i&&e.failure&&e.failure({request:{},response:{errorType:"INTERNAL_SERVER_ERROR"}})})),n.postMessage(e)};n("google.payments.inapp.buy",(function(e){e.method="buy",i(e)})),n("google.payments.inapp.getPurchases",(function(e){e.method="getPurchases",i(e)})),n("google.payments.inapp.getSkuDetails",(function(e){e.method="getSkuDetails",i(e)}))}();