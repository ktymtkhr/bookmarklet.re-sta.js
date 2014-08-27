/**
 * bookmarklet.whois_search.js
 * Description: WHOIS簡易検索
 * Version: 1.0.0
 * Author: ktymtkhr
 * URI: https://github.com/ktymtkhr/bookmarklet.re-sta.js/
 * created: July 30, 2014
 *
 */

javascript:url=window.prompt('検索したいドメインを入力してください(例)re-sta.com', '');if(url != ''){var domain = url.match(/^([httpsfile]+:\/{2,3})?([0-9a-z\.\-:]+?):?[0-9]*?(\/)?$/i);window.open('http://whois.ansi.co.jp/'+domain[2]);}
