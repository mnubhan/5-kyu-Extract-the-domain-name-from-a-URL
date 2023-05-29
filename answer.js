function domainName(url){
     const removeHttp= url.match(/http\:\/\//gi) ? url.replace(/http\:\/\//gi,"") : url.replace(/https\:\/\//gi,"")
    const removeWWW = removeHttp.match(/(www)/gi) ? removeHttp.replace(/(www.)/gi,"") : removeHttp
    return removeWWW.slice(0,removeWWW.indexOf("."))
}
function domainName(url){
  url = url.replace("https://", '');
  url = url.replace("http://", '');
  url = url.replace("www.", '');
  return url.split('.')[0];
};
function domainName(url){
  return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
}
