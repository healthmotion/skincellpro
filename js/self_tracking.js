function getParameterByName(name){name=name.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var regex=new RegExp("[\\?&]"+name+"=([^&#]*)"),results=regex.exec(location.search);return(results===null)?"":decodeURIComponent(results[1].replace(/\+/g," "));}
var affiliate_id=getParameterByName('affiliate_id');var utm_source=getParameterByName('utm_source');var utm_medium=getParameterByName('utm_medium');var utm_campaign=getParameterByName('utm_campaign');var s1=getParameterByName('aff_sub1');var s2=getParameterByName('aff_sub2');var s3=getParameterByName('aff_sub3');var s4=getParameterByName('aff_sub4');var s5=getParameterByName('aff_sub5');var source=getParameterByName('source');var gclid=getParameterByName('gclid');var geoid=getParameterByName('geoid');var device=getParameterByName('device');var devicemodel=getParameterByName('devicemodel');var msclkid=getParameterByName('msclkid');var postbackid=getParameterByName('postbackid');Cookies.remove('affiliate_id');Cookies.remove('utm_source');Cookies.remove('utm_medium');Cookies.remove('utm_campaign');Cookies.remove('aff_sub1');Cookies.remove('aff_sub2');Cookies.remove('aff_sub3');Cookies.remove('aff_sub4');Cookies.remove('aff_sub5');Cookies.remove('source');Cookies.remove('gclid');Cookies.remove('geoid');Cookies.remove('device');Cookies.remove('devicemodel');if(msclkid!==''){gclid=msclkid;}
if(postbackid!==''){gclid=postbackid;}
if(affiliate_id==!null||affiliate_id!=''){Cookies.set('affiliate_id',affiliate_id);}
if(utm_source==!null||utm_source!=''){Cookies.set('utm_source',utm_source);}
if(utm_medium==!null||utm_medium!=''){Cookies.set('utm_medium',utm_medium);}
if(utm_campaign==!null||utm_campaign!=''){Cookies.set('utm_campaign',utm_campaign);}
if(s1==!null||s1!=''){Cookies.set('aff_sub1',s1);}
if(s2==!null||s2!=''){Cookies.set('aff_sub2',s2);}
if(s3==!null||s3!=''){Cookies.set('aff_sub3',s3);}
if(s4==!null||s4!=''){Cookies.set('aff_sub4',s4);}
if(s5==!null||s5!=''){Cookies.set('aff_sub5',s5);}
if(source==!null||source!=''){Cookies.set('source',source);}
if(gclid==!null||gclid!=''){Cookies.set('gclid',gclid);}
if(geoid==!null||geoid!=''){Cookies.set('geoid',geoid);}
if(device==!null||device!=''){Cookies.set('device',device);}
if(devicemodel==!null||devicemodel!=''){Cookies.set('devicemodel',devicemodel);}
$(document).ready(function(){var uparts=window.location.pathname;var ccode=uparts.split("/")[1];var excludeParams=['affiliate_id','aff_sub1','aff_sub2','aff_sub3','aff_sub4','aff_sub5','source','gclid','geoid','device','devicemodel'];var oGetVars={};if(window.location.search.length>1){for(var aItKey,nKeyId=0,aCouples=window.location.search.substr(1).split("&");nKeyId<aCouples.length;nKeyId++){aItKey=aCouples[nKeyId].split("=");oGetVars[decodeURIComponent(aItKey[0])]=aItKey.length>1?decodeURIComponent(aItKey[1]):"";}}
for(var pkey in oGetVars){if(jQuery.inArray(pkey,excludeParams)===-1){Cookies.remove(pkey);if(oGetVars[pkey]===!null||oGetVars[pkey]!==''){Cookies.set(pkey,oGetVars[pkey]);}}}
$('a').not("[href='#']").each(function(){var $this=$(this);if(s1)$this.attr('href',$this.attr('href')+'&aff_sub1='+s1);if(s2)$this.attr('href',$this.attr('href')+'&aff_sub2='+s2);if(s3)$this.attr('href',$this.attr('href')+'&aff_sub3='+s3);if(s4)$this.attr('href',$this.attr('href')+'&aff_sub4='+s4);if(s5)$this.attr('href',$this.attr('href')+'&aff_sub5='+s5);if(gclid)$this.attr('href',$this.attr('href')+'&gclid='+gclid);if(ccode)$this.attr('href',$this.attr('href')+'&ccode='+ccode);if(source)$this.attr('href',$this.attr('href')+'&source='+source);if(geoid)$this.attr('href',$this.attr('href')+'&geoid='+geoid);if(device)$this.attr('href',$this.attr('href')+'&device='+device);if(devicemodel)$this.attr('href',$this.attr('href')+'&devicemodel='+devicemodel);for(var pkey in oGetVars){if(jQuery.inArray(pkey,excludeParams)===-1){$this.attr('href',$this.attr('href')+'&'+pkey+'='+oGetVars[pkey]);}}
var curLink=$this.attr('href');if(curLink.indexOf('?')===-1&&curLink.indexOf('&')!==-1){curLink=curLink.replace('&','?');$this.attr('href',curLink);}});});