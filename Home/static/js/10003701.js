try
{	
	var _$BVersion = '20161011';
	var _Sauthor;
	var _Scount_iframe;
	var _Sload_time;
	var _Spage_type;
	var _Spage_pic;
	var _Spage_id;
	var _$Bformlist = '';
	var _$Bformdetails = {};
	var _$Bformfielddetails = {};
	var _$Bwebsite = _$Bpartner_website = '10003701';
	var _Spartner_website_id;
	var _Schannel_website_id;
	var _Schannel_webshop_id;
	var _Spageformjs = false;
	var _Sorder_encode_url;
	var _$Bchkdomain = '';
	if (_Scount_iframe === true)
	{
		var _$Bdocument = top.window.document;
	}
	else
	{
		var _$Bdocument = window.document;
	}
	var _$Bdocumentbody = _$Bdocument.getElementsByTagName('body')[0];
	var _$Bprotocol = _$Bdocument.location.protocol;
	var _trackDataType;
	var _trackData = _trackData || [];
	var _$Biserror = 0;
	var _$Berrorcode = '';
	var _$Bflashid = 'yfx_n_r_u';
	var _$Bcounturl = '//fxsjcj.kaipuyun.cn/';
	var _$Bcounturl_proxy = '//fxsjcj.kaipuyun.cn/';
	var _$Bmediumsource = _$Bmediumsourcefirst = _$Bkeywordsource = _$Bedmemail = _$Bkeywordkey = '';
	var _$Bstarttime = _$Btimestart = _$Bloadtime = _$Bdowntime = _$Bgettime = (new Date()).getTime();
	window.onerror =  function(msg, url, line, column) {
		_$Berrorcode = "msg["+msg+"]#line["+line+"]#column["+column+"]";
		return true;
    };
	function _$Bunicode(s){
	   var len=s.length;
	   var rs=0;
	   for(var i=0;i<len;i++){
			  rs+= parseInt(s.charCodeAt(i)%10);
	   }
	   return rs;
	}
	function _$Breadmapcookie(name)
	{
		var cV = end = '';
		var v = name + '=';
		if (_$Bdocument.cookie) 
		{
			var p = _$Bdocument.cookie.indexOf(v);
			if (p > -1) {
				p += v.length;
				end = _$Bdocument.cookie.indexOf(";", p);
				if (end == -1) {end = _$Bdocument.cookie.length;};
				cV = _$Bdocument.cookie.substring(p, end);
			}
			return cV;
		}
	}
	function _$Bsplitdomain(gethost)
	{
		var pattern = new Array();
		var domain  = '';
		var isdomain  = 0;
		var domainlen = 0;
		pattern['.com.cn']	= 4;
		pattern['.net.cn']	= 4;
		pattern['.gov.cn']	= 4;
		pattern['.org.cn']	= 4;
		pattern['.com']	= 3;
		pattern['.net']	= 3;
		pattern['.org']	= 3;
		pattern['.gov']	= 3;
		pattern['.cc']	= 3;
		pattern['.biz']	= 3;
		pattern['.info']= 3;
		pattern['.cn']	= 3;
		pattern['.hk']	= 3;			
		for( var dk in pattern )
		{
			if( gethost.indexOf(dk) > -1 )
			{
				isdomain = 1;
				domainlen = parseInt(pattern[dk]);
				break;
			}
		}
		if( isdomain == 1 )
		{
			var s = gethost.split('.');
			if( s.length >= (domainlen) )
			{
				s[0] = '';
				domain = (s.join('.')).substr(1);
			}
			else
			{
				domain = gethost;
			}
		}
		else
		{
			domain = gethost;
		}
		return domain;
	}
	function _$Bgetservercookie(ghostvar,gtype)
	{
		var _$Burl = _$Bcounturl + '/getcookie.js.php';
		var _$Bobj = _$Bdocument.createElement('script');
		_$Bobj.type = 'text/javascript';
		_$Bobj.async = true;
		_$Bobj.id = 'getcookie_id';
		_$Bobj.charset = 'utf-8';
		var _$Bdurl = _$Burl + '?website=' + _$Bwebsite + '&prefix=_$B&jsprefix=yfx_&domain=' + ghostvar + '&type=' + gtype + '&rand=' + Math.random();
		_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Bobj);
		_$Bdocument.getElementById('getcookie_id').src = _$Bdurl;
	}
	(function() {
		var CHARS = '01234567891357924680'.split('');
		Math.uuid = function (len, radix) 
		{
			var chars = CHARS, uuid = [], i;
			radix = radix || chars.length;

			if (len)
			{
				for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random()*radix)];
			}
			return uuid.join('');
		};
	})();
	function _$Bflash_cookie()
	{
		var f=0;
		var v=0;
		var swf;
		var ie = _$Buseragent.match(/msie ([\d.]+)/);
		if(ie)
		{
			try {
			swf = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
			if(swf) 
			{
				f=1;
				var vs=swf.GetVariable("$version");
				v=parseInt(vs.split(" ")[1].split(",")[0]);
			}
			}
			catch (e) {
			}
		}
		else
		{
			if (navigator.plugins && navigator.plugins.length > 0)
			{
				swf=navigator.plugins["Shockwave Flash"];
				if (swf)
				{
					f=1;
					var ws = swf.description.split(" ");
					for (var i = 0; i < ws.length; ++i)
					{
						if (isNaN(parseInt(ws[i]))) continue;
						v = parseInt(ws[i]);
					}
				}
			}
		}
		return {f:f,v:v};
	}	
	var _$Brandomid = _$Bstarttime;
	var _$Buseragent = navigator.userAgent.toLowerCase();
	var _$Btelphone = /(nokia|sony|ericsson|moto|samsung|htc|sgh|lg|sharp|philips|panasonic|alcatel|lenovo|iphone|ipod|ipad|blackberry|meizu|android|netfront|symbian|ucweb|windowsce|palm|operamini|openwave|nexusone|playstation|nintendo|symbianos|dangerhiptop|dopod|midp)/.exec(_$Buseragent);
	_$Btelphone = _$Btelphone === null ? '' : _$Btelphone[0];
	var _$Bflashok = _$Bflash_cookie();
	var _$Bphpstat_flash_object;
	function _$Bdownloadflash(){

		"use strict";
		var counter = 0;	
		var alpnum = /[^a-z0-9_]/ig;

		window.phpstatCookie = function(config){
			config = config || {};
			var defaults = {
				swf_url: _$Bcounturl_proxy+'/cookie/storage.swf',
				namespace: 'namespace_phpstat',
				debug: true,
				timeout: 10,
				onready: null,
				onerror: null
			};
			var key;
			for(key in defaults){
				if(defaults.hasOwnProperty(key)){
					if(!config.hasOwnProperty(key)){
						config[key] = defaults[key];
					}
				}
			}
			function _$Bdiv(visible){
				var d = _$Bdocument.createElement('div');
					d.id = "kpyfx_js_div_id_10003701";
				var s = (_$Bfgid('kpyfx_js_id_10003701')||_$Bfgid('kpyfx_js_id')); 
				if (s)
				{				
					d.async = true; 
					s.parentNode.insertBefore(d, s);
				}
				return d;
			}
			var swfContainer = _$Bdiv(config.debug);
			config.namespace = config.namespace.replace(alpnum, '_');
			this.config = config;		
			function _$Bfid(){
				return "phpstatCookie_" + config.namespace + "_" +  (counter++);
			}
			function _$Bfgid(id){
				return _$Bdocument.getElementById(id);
			}
			phpstatCookie[config.namespace] = this;
			
			var swfName = _$Bfid();
				
			var flashvars = "logfn=phpstatCookie." + config.namespace + ".log&amp;" + 
				"onload=phpstatCookie." + config.namespace + ".onload&amp;" + 
				"onerror=phpstatCookie." + config.namespace + ".onerror&amp;" + 
				"LSOName=" + config.namespace;
				
			swfContainer.innerHTML = '<object height="1" width="1" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab" id="' + 
				swfName + '" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000">' +
				'	<param value="' + config.swf_url + '" name="movie">' + 
				'	<param value="' + flashvars + '" name="FlashVars">' +
				'	<param value="always" name="allowScriptAccess">' +
				'	<embed height="1" align="middle" width="1" pluginspage="http://www.macromedia.com/go/getflashplayer" ' +
				'flashvars="' + flashvars + '" type="application/x-shockwave-flash" allowscriptaccess="always" quality="high" loop="false" play="true" ' +
				'name="' + swfName + '" bgcolor="#ffffff" src="' + config.swf_url + '">' +
				'</object>';
			
			this.swf = _$Bdocument[swfName] || window[swfName];
			
			this._timeout = setTimeout(function(){
				if(config.onerror){
					config.onerror();
				}
			}, config.timeout * 1000);
		};

		phpstatCookie.prototype = {
	  
			version: "1.5",
			ready: false,
			set: function(key, value){
				this._checkReady();
				this.swf.set(key, value);
			},
			get: function(key){
				this._checkReady();
				return this.swf.get(key);
			},
			getAll: function(){
				this._checkReady();
				var data = this.swf.getAll();
				if(data.__flashBugFix){
					delete data.__flashBugFix;
				}
				return data;
			},
			clear: function(key){
				this._checkReady();
				this.swf.clear(key);
			},
			_checkReady: function(){
			},
			"onload": function(){
				var that = this;
				setTimeout(function(){
				  clearTimeout(that._timeout);
				  that.ready = true;
				  that.set('__flashBugFix','1');
				  if(that.config.onready){
					that.config.onready();
				  }
				}, 0);
			},
			onerror: function(){
				clearTimeout(this._timeout);
				if(this.config.onerror){
					this.config.onerror();
				}
			}
			
		};
	}
	var _$Bisdownloadflash = 0;
	if(_$Bflashok.v >= 88 && _$Bdocument.location.hash.toString().indexOf('clickmapcode') <= -1 && typeof(_$Bdocumentbody) !== 'undefined' && _$Btelphone === '' && _$Breadmapcookie('yfxm') === '')
	{
		_$Bisdownloadflash = 1;
	}
	if(_$Bisdownloadflash === 1)
	{
		_$Bdownloadflash();
	}
	var _$Bclienturl = new Array();
	;
	var _$Bthehostname = _$Bdocument.location.hostname;
	var _$Bgetclienthost;
	for (_$Bgetclienthost in _$Bclienturl) {
		if (_$Bgetclienthost == _$Bthehostname) {
			_$Bcounturl_proxy = _$Bclienturl[_$Bgetclienthost];
			break
		}
	}
	function _$BgetArtTitle() {
		var title = _$Bdocument.title;
		var ArticleName = _$Bdocument.querySelector('meta[name="ArticleTitle"]');
		var ColumnName = _$Bdocument.querySelector('meta[name="ColumnName"]');
		var SiteName = _$Bdocument.querySelector('meta[name="SiteName"]');
		if (ArticleName)
		{
			return ArticleName.content ? ArticleName.content : title;
		}
		if (ColumnName)
		{
			return ColumnName.content ? ColumnName.content : title;
		}
		if (SiteName)
		{
			return SiteName.content ? SiteName.content : title;
		}
		return title;
	}
	function _$Bphpstat(cookietype,serverclientcookie) {
		var _$Bdoimgerr_1 = 1;
		var _$Breferrer = _$Bdocument.referrer;
		var _$Btitle = _$BgetArtTitle() ;
		var _$Bhashcode = _$Bdocument.location.hash;
		var _$Blanguage = (navigator.systemLanguage ? navigator.systemLanguage : navigator.language);
		var _$Bcolor = screen.colorDepth;
		var _$Bclientwidth = _$Bdocument.documentElement.clientWidth;
		var _$Bclientheight = _$Bdocument.documentElement.clientHeight;
		var _$Bscrollheight = _$Bdocument.documentElement.scrollHeight;
		var _$Bscreensize = screen.width + '*' + screen.height;
		var _$Blastmodify = new Date(_$Bdocument.lastModified).getTime();
		var _$Bcookie = navigator.cookieEnabled ? 1 : 0;
		var _$Butm_replace = ['utm_source','utm_medium','utm_campaign','utm_term','utm_content','utm_id','ca_kid','ca_source'];
		var _$Butm_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id','pmf_id','pmf_group'];
		var _$Bbdu_replace = ['hmsr','hmmd','hmpl','hmci','hmkw','hmid'];
		var _$Bbdu_pmf_replace = ['pmf_group','pmf_medium','pmf_source','pmf_keyword','pmf_advname','pmf_id'];
		var _$Bsearchkey = ['baidu','baidu','google','yahoo','sogou','bing','youdao','soso','haosou','sm','so','css.chinatax.gov.cn'];
var _$Bkeyword = ['wd','word','q','p','query','q','q','w','q','q','q','qt'];
var _$Bsearchtype = ['default','default','default','default','default','default','default','default','default','default','default','customer'];
var _$Bkeywordrelated = ['bs','bs','','','','','lq','bs','','','',''];
;
		var _$Bhostname = _$Bdocument.location.hostname + (_$Bdocument.location.port.length > 0 ? ':' + _$Bdocument.location.port : '');
		var _$Bhostname_no_port = _$Bdocument.location.hostname;
		var _$Bcounturl_logcount = _$Bcounturl_proxy + '/logcount.php';
		var _$Bfirsttime;
		var _$Blasttime;
		var _$Bnlasttime;
		var _$Bvisittime;
		var _$Bf_l_v_ck = 0;
		var _$Breturncount;
		var _$Busercookie;
		var _$Bsetusercookie;
		var _$Bserusercookie;
		var _$Busername;
		var _$Buserid;
		var _$Buserregtime;
		var _$Buserage;
		var _$Busersex;
		var _$Bdomain = '';
		var _$Brefid = new Array();		
		var _$Bf_l_v_time = new Array();	
		var _$Bgtd = window._trackData;
		_$Brefid['phptag_recom_id'] = '';
		_$Bdomain	= _$Bgethost(_$Bhostname_no_port);
		_Sauthor	= _$Btypeof(_Sauthor);
		_Spage_type	= _$Btypeof(_Spage_type);
		_Spage_pic	= _$Btypeof(_Spage_pic);
		_Spage_id	= _$Btypeof(_Spage_id);
		if (typeof(_Sload_time) == 'undefined') {
			_$Bdowntime = 0
		} else {
			_$Bstarttime = parseInt(_Sload_time);
			_$Bdowntime = _$Bdowntime - parseInt(_Sload_time)
		}
		_$Bfirsttime = _$Bgettimestr('f_t_');
		if (_$Bfirsttime === '') {
			_$Bfirsttime = _$Bgettime;
			_$Bf_l_v_ck = 1;
		}
			
		if( _$Bgtd && _$Bgtd.length )
		{
			for(var _$Bk in _$Bgtd)
			{
				if( !isNaN(_$Bk) )
				{
					for(var _$Bkk in _$Bgtd[_$Bk])
					{
						if( _$Bgtd[_$Bk]['0'] == 'userset' && _$Bgtd[_$Bk]['1'] == 'userid' && _$Bgtd[_$Bk]['2'].length )
						{		
							_$Buserid = _$Bgtd[_$Bk]['2'];
							_$Bsetflashcookie('yfx_s_u_id', _$Bgtd[_$Bk]['2'], 3650, _$Bdomain, '');
						}
						if( _$Bgtd[_$Bk]['0'] == 'userset' && _$Bgtd[_$Bk]['1'] == 'username' && _$Bgtd[_$Bk]['2'].length )
						{				
							_$Busername = _$Bgtd[_$Bk]['2'];	
							_$Bsetflashcookie('yfx_s_u_name', _$Bgtd[_$Bk]['2'], 3650, _$Bdomain, '');
						}
						if( _$Bgtd[_$Bk]['0'] == 'userset' && _$Bgtd[_$Bk]['1'] == 'age' && _$Bgtd[_$Bk]['2'].length )
						{					
							_$Buserage = _$Bgtd[_$Bk]['2'];
							_$Bsetflashcookie('yfx_s_u_age', _$Bgtd[_$Bk]['2'], 3650, _$Bdomain, '');
						}
						if( _$Bgtd[_$Bk]['0'] == 'userset' && _$Bgtd[_$Bk]['1'] == 'sex' && _$Bgtd[_$Bk]['2'].length )
						{				
							_$Busersex = _$Bgtd[_$Bk]['2'];	
							_$Bsetflashcookie('yfx_s_u_sex', _$Bgtd[_$Bk]['2'], 3650, _$Bdomain, '');
						}
						if( _$Bgtd[_$Bk]['0'] == 'userset' && _$Bgtd[_$Bk]['1'] == 'cookie' && _$Bgtd[_$Bk]['2'].length )
						{			
							_$Bsetusercookie = _$Bgtd[_$Bk]['2'];		
							_$Bsetflashcookie('yfx_s_c_g_u_id', _$Bgtd[_$Bk]['2'], 3650, _$Bdomain, '');
						}
						if( _$Bgtd[_$Bk]['0'] == 'userregtime' && _$Bgtd[_$Bk]['1'] == 'regtime' && _$Bgtd[_$Bk]['2'].length )
						{					
							_$Buserregtime = _$Bgtd[_$Bk]['2'];	
							_$Bsetflashcookie('yfx_s_u_reg', _$Bgtd[_$Bk]['2'], 3650, _$Bdomain, '');
						}
					}
				}
			}
		}
		_$Breturncount   = _$Bgettimestr('r_c_');
		_$Breturncount	= _$Breturncount === '' ? 0 : _$Breturncount; 
		_$Busername		= _$Busername || (_$Breadflashcookie('PHPSTATNULLCOOKIE') ? _$Breadflashcookie('PHPSTATNULLCOOKIE') : (_$Breadflashcookie('yfx_s_u_name')?_$Breadflashcookie('yfx_s_u_name'):_$Breadflashcookie('yfx_s_u_id')));	
		_$Buserid		= _$Buserid || (_$Breadflashcookie('PHPSTATNULLCOOKIE') ? _$Breadflashcookie('PHPSTATNULLCOOKIE') : (_$Breadflashcookie('yfx_s_u_id')?_$Breadflashcookie('yfx_s_u_id'):_$Breadflashcookie('yfx_s_u_name')));	
		_$Buserage		= _$Buserage || (_$Breadflashcookie('PHPSTATNULLCOOKIE') ? _$Breadflashcookie('PHPSTATNULLCOOKIE') : _$Breadflashcookie('yfx_s_u_age'));
		_$Buserregtime	= _$Buserregtime || (_$Breadflashcookie('PHPSTATNULLCOOKIE') ? _$Breadflashcookie('PHPSTATNULLCOOKIE') : _$Breadflashcookie('yfx_s_u_reg'));	
		_$Busersex		= _$Busersex || (_$Breadflashcookie('PHPSTATNULLCOOKIE') ? _$Breadflashcookie('PHPSTATNULLCOOKIE') : _$Breadflashcookie('yfx_s_u_sex'));
		_$Bsetusercookie	= _$Bsetusercookie || _$Breadflashcookie('yfx_s_c_g_u_id');
		_$Busercookie	= _$Bsetusercookie || _$Breadflashcookie('yfx_c_g_u_id');
		_$Bserusercookie	= serverclientcookie || _$Breadflashcookie('yfx_c_c_g_u_id');
		if( _$Bsetusercookie === '' )
		{
			if (_$Busercookie === '' && _$Bserusercookie === '' ) {
				_$Busercookie = _$Bunique();
				_$Bsetflashcookie('yfx_c_g_u_id', _$Busercookie, 3650, _$Bdomain, '');
			}
			if (_$Bserusercookie && _$Bserusercookie !== _$Busercookie) {
				_$Busercookie = _$Bserusercookie;
				_$Bsetflashcookie('yfx_c_g_u_id', _$Bserusercookie, 3650, _$Bdomain, '');
			}
		}
		else if( _$Bsetusercookie )
		{
			_$Busercookie = '_ck_'+_$Bsetusercookie;
			_$Bserusercookie = '_ck_'+_$Bsetusercookie;
		}
		_$Blasttime = _$Bnlasttime = _$Bgettimestr('r_t_');
		if (_$Blasttime === '') {
			_$Blasttime = _$Bnlasttime = _$Bgettime;
			_$Bf_l_v_ck = 1;
		}
		if (_$Bgettime - _$Blasttime >= 43200000) {
			_$Bnlasttime = _$Bgettime;
			_$Breturncount++;
			_$Bf_l_v_ck = 1;
		} else {
			_$Breturncount = _$Breturncount
		}
		_$Bvisittime = _$Bgettimestr('v_t_');
		if (_$Bvisittime === '' || (_$Bgettime - _$Bvisittime) >= 1800000) {
			_$Bvisittime = _$Bgettime;
			_$Bf_l_v_ck = 1;
		}
		if( _$Bf_l_v_ck > 0 )
		{
			_$Bf_l_v_time['0'] = 'f_t_'+_$Bfirsttime;
			_$Bf_l_v_time['1'] = 'r_t_'+_$Bnlasttime;
			_$Bf_l_v_time['2'] = 'v_t_'+_$Bvisittime;
			_$Bf_l_v_time['3'] = 'r_c_'+_$Breturncount;
			_$Bsetflashcookie('yfx_f_l_v_t', _$Bf_l_v_time.join('__'), 3650, _$Bdomain, '');
		}
		_$Bvisittime = '_vk' + _$Bvisittime;
		function _$Bgethost(gethost)
		{
			var _$Bpattern = new Array();
			var _$Bisdomain  = 0;
			var _$Bdomainlen = 0;
			_$Bpattern['.com.cn']	= 4;
			_$Bpattern['.net.cn']	= 4;
			_$Bpattern['.gov.cn']	= 4;
			_$Bpattern['.org.cn']	= 4;
			_$Bpattern['.com']	= 3;
			_$Bpattern['.net']	= 3;
			_$Bpattern['.org']	= 3;
			_$Bpattern['.gov']	= 3;
			_$Bpattern['.cc']	= 3;
			_$Bpattern['.biz']	= 3;
			_$Bpattern['.info']	= 3;
			_$Bpattern['.cn']	= 3;
			_$Bpattern['.hk']	= 3;			
			for( var $dk in _$Bpattern )
			{
				if( gethost.indexOf($dk) > -1 )
				{
					_$Bisdomain = 1;
					_$Bdomainlen = parseInt(_$Bpattern[$dk]);
					break;
				}
			}
			if( _$Bdomain.length <= 0 )
			{
				if( _$Bisdomain == 1 )
				{
					var s = gethost.split('.');
					if( s.length >= (_$Bdomainlen) )
					{
						s[0] = '';
						_$Bdomain = (s.join('.')).substr(1);
					}
					else
					{
						_$Bdomain = gethost;
					}
				}
				else
				{
					_$Bdomain = gethost;
				}
				return _$Bdomain;

			}
			else
			{
				return gethost;
			}
		}
		function _$Bgt() {
			return (new Date()).getTime();
		}
		function _$Bencode(s){
			return (typeof(encodeURIComponent)=="function")?encodeURIComponent(s):escape(s);
		}
		function _$Bdecode(s){
			return (typeof(decodeURIComponent)=="function")?decodeURIComponent(s):unescape(s);
		} 
		function _$Bid(id)
		{
			return _$Bdocument.getElementById(id);
		}
		function _$Bname(name)
		{
			return _$Bdocument.getElementsByName(name);
		}
		function _$Bunique() {
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			var H = T.getHours();
			var I = T.getMinutes();
			var S = T.getSeconds();
			var MS = T.getMilliseconds();
			Y = Y < 1900 ? Y + 1900 : Y;
			Y = (Y - 2000) <= 0 ? '10' : (Y - 2000);
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			H = H < 10 ? '0'+''+H : H;
			I = I < 10 ? '0'+''+I : I;
			S = S < 10 ? '0'+''+S : S;
			MS = (MS + 999)+'';
			return '_ck'+Y+''+M+''+D+''+H+''+I+''+S+''+MS.substr(0,3)+''+Math.uuid(14,14);
		}
		function _$BgetYMD()
		{
			var T = new Date();
			var Y = T.getYear();
			var M = T.getMonth()+1;
			var D = T.getDate();
			Y = Y < 1900 ? Y + 1900 : Y;
			M = M < 10 ? '0'+''+M : M;
			D = D < 10 ? '0'+''+D : D;
			return Y+'-'+M+'-'+D;
		}
		function _$Bgettimestr(id)
		{
			id = id || 'f_t_';	
			var flvt_ret = '';
			var flvt_arr = _$Breadflashcookie('yfx_f_l_v_t').split('__');
			for(var vk in flvt_arr)
			{
				var vkv = _$Btypeof(flvt_arr[vk]);
				if(vkv && vkv.indexOf(id) > -1)
				{
					flvt_ret = vkv.replace(id, '');
				}
			}
			return flvt_ret;
		}
		function _$Breadflashcookie(name) 
		{
			var cV = fcV = '';
			if ( !_$Bphpstat_flash_object && !_$Bcookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$Bphpstat_flash_object) 
			{
				fcV = _$Btypeof(_$Bphpstat_flash_object.get(name));
			}
			if (_$Bcookie) 
			{
				cV = _$Btypeof(_$Breadcookie(name));
				if( cV !== fcV && fcV )
				{
					cV = fcV;
					_$Bsetcookie(name, fcV, 3650, _$Bdomain, '');
				}
				if( fcV === '' && cV && _$Bphpstat_flash_object )
				{
					_$Bsetflashcookie(name, cV, 3650, _$Bdomain, '');
				}
			}
			return cV;
		}
		function _$Breadcookie(name)
		{
			var cV = end = '';
			var v = 'yfx_cookie_group_'+_$Bwebsite+'=';
				v = name+'_'+_$Bwebsite+'=';
			if (_$Bcookie) 
			{
				var p = _$Bdocument.cookie.indexOf(v);
				if (p > -1) {
					p += v.length;
					end = _$Bdocument.cookie.indexOf(";", p);
					if (end == -1) {end = _$Bdocument.cookie.length;};
					cV = _$Bdecode(_$Bdocument.cookie.substring(p, end));
				}
				if( name != 'yfx_get_cookie_group' && 0 )
				cV = _$Bgetgroupcookie(cV,name);
				return _$Btypeof(cV);
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$Bsetflashcookie(name, gv, h, d, t) 
		{
			if ( !_$Bphpstat_flash_object && !_$Bcookie ) 
			{
				return 'not_support_cookie';
			}
			if (_$Bphpstat_flash_object) {
				_$Bphpstat_flash_object.set(name, gv);
			}
			if (_$Bcookie)
			{
				_$Bsetcookie(name, gv, h, d, t);
			}
		}
		function _$Bsetcookie(name, gv, h, d, t) 
		{
			var v = '';
			if (_$Bcookie) {
				v = new Date(_$Bgt() + parseInt(h)*24*60*60*1000);
				v = '; expires=' + v.toGMTString();
				if( t == '' && 0 )
				{
					gv = _$Bsetgroupcookie(name, gv);
					name = 'yfx_cookie_group_'+_$Bwebsite;
				}
				name = name+'_'+_$Bwebsite;
				_$Bdocument.cookie = name + '=' + _$Bencode(gv) + v + ';domain='+d+';path=/;';
			}
			else
			{
				return 'not_support_cookie';
			}
		}
		function _$Bgetgroupcookie(jsonname,name)
		{
			var returnstr = '';
			var groupcookie = new Array();
			groupcookie = _$Bdecode(jsonname).split('|:|');
			for( var jk in groupcookie )
			{
				var gcs = _$Btypeof(groupcookie[jk]);
				if( gcs.indexOf(name+'=') >= 0 )
				{
					returnstr = gcs.substring((name+'=').length);break;
				}
			}
			return _$Btypeof(returnstr) || '';
		}

		function _$Bsetgroupcookie(name,value)
		{
			var jsonname = _$Breadcookie('yfx_get_cookie_group') || '';
			if( jsonname.indexOf(name+'=') < 0 )
			{
				jsonname = jsonname + '|:|' + name + '=' + _$Btypeof(value);
			}
			else
			{
				var groupcookie = new Array();
				groupcookie = _$Bdecode(jsonname).split('|:|');
				for( var jk in groupcookie )
				{
					groupcookie[jk] = _$Btypeof(groupcookie[jk]);
					if( groupcookie[jk].indexOf(name+'=') >= 0 )
					{
						groupcookie[jk] = name + '=' + _$Btypeof(value);
					}
				}
				jsonname = groupcookie.join('|:|');
			}
			return jsonname;
		}
		function _$Btestnull(r)
		{
			if( typeof(r) === null || r === null )
			{
				return false;
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return false;
			}
			else
			{
				return true;
			}
		}
		function _$Bteststr(r)
		{
			if( typeof(r) === null || r === null )
			{
				return '';
			}
			else if( typeof(r) === 'undefined' || r === 'undefined' )
			{
				return '';
			}
			else if( r === '' )
			{
				return '';
			}
			else
			{
				return r;
			}
		}
		function _$Bgeturlparam(u) {
			var i = 0,j = 0;
			var h = '',p = '';
			if ((i = u.indexOf("://")) < 0 && u.length > 0) {return {h:u,p:''}};
			u = u.substring(i + 3);
			h = u.substring(0, u.indexOf('/'));
			if ((i = u.indexOf("/")) > -1) {			
				if ((j = u.indexOf('#clickmapcode=')) > -1) 
				{
					p = u.substring(i, j);
				}
				else
				{
					p = u.substring(i);
				}
			};
			return {h:h,p:p}
		}
		function _$Bgeturlkey(u,k)
		{
			var i,j,h='';
			if ((i = u.indexOf('?'+k+'=')) > -1 || (i = u.indexOf('&'+k+'=')) > -1)
			{
				h = u.substring(i+2+k.length);
				j = h.indexOf('&');
				j = j <= 0 ? h.length : j;
				{
					h = h.substring(0,j);
				}
			}
			return h;
		}
		function _$Bgetkeyword(u,b) {
			var v,dv,i, j, h, k, rk, e, ek, f, p = 10;
			u = u.toLowerCase();
			h = _$Bgeturlparam(u).h;
			if( b == '_' ){b = '';}
			for (var ii = 0; ii < _$Bsearchkey.length; ii++) {
				if (h.toLowerCase().indexOf('.'+_$Bsearchkey[ii].toLowerCase()+'.') > -1) {
					if ((i = u.indexOf('?' + _$Bkeyword[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Bkeyword[ii] + '=')) > -1) {
						k = u.substring(i + _$Bkeyword[ii].length + 2);
						if(_$Bsearchtype[ii]=='default')
						{_$Bkeywordsource = _$Bsearchkey[ii]+b+'::'+k;}
						_$Bkeywordkey = k;
						v = '&KW=' + k + '&WC=' + _$Bsearchtype[ii] + '&WP=' + _$Bsearchkey[ii]+b;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							if(_$Bsearchtype[ii]=='default')
							{_$Bkeywordsource = _$Bsearchkey[ii]+b+'::'+k;}
							_$Bkeywordkey = k;
							v = '&KW=' + k + '&WC=' + _$Bsearchtype[ii] + '&WP=' + _$Bsearchkey[ii]+b
						}
					}
					if ((i = u.indexOf('?' + _$Bkeywordrelated[ii] + '=')) > -1 || (i = u.indexOf('&' + _$Bkeywordrelated[ii] + '=')) > -1) {
						k = u.substring(i + _$Bkeywordrelated[ii].length + 2);
						rk = '&RW=' + k;
						if ((i = k.indexOf('&')) > -1) {
							k = k.substring(0, i);
							rk = '&RW=' + k
						}
					}
				}
			};
			v = v ? v : dv;
			if (_$Btypeof(v) === '') {return '';}
			else if (rk) {return v + rk;}
			else {return v}
		}
		function _$Breplace_utm(s)
		{
			if( s.indexOf('pmf_source=') <= -1 )
			{
				if( s.indexOf('utm_source=') > -1 )
				{
					for (var ii = 0; ii < _$Butm_replace.length; ii++) {
						s = s.replace(_$Butm_replace[ii]+'=', _$Butm_pmf_replace[ii]+'=');
					}
				}
				else if( s.indexOf('hmsr=') > -1 )
				{
					for (var ii = 0; ii < _$Bbdu_replace.length; ii++) {
						s = s.replace(_$Bbdu_replace[ii]+'=', _$Bbdu_pmf_replace[ii]+'=');
					}
				}
			}
			return s;
		}
		function _$Bgetmap(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#clickmapcode=') > -1) {
				c = u.substring(14);
				s = c.split('|');
				s[2] = s[2] === '' ? _$Bwebsite : s[2];
				_$Bsetcookie('yfxm', s[0], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_t', s[1], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_code', s[2], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_site', s[3], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_p', s[4], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_s_d', s[5], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_e_d', s[6], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_sv', s[7], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_p_g', s[8], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_p_c', s[9], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_c', s[10], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_e', s[11], 1, _$Bdomain, '');
				_$Bsetcookie('yfxm_o', s[12], 1, _$Bdomain, '');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else if (_$Breadcookie('yfxm') && _$Breadcookie('yfxm_code') && _$Breadcookie('yfxm_site')) {
				s[0] = _$Breadcookie('yfxm');
				s[1] = _$Breadcookie('yfxm_t');
				s[2] = _$Breadcookie('yfxm_code');
				s[3] = _$Breadcookie('yfxm_site');
				s[4] = _$Breadcookie('yfxm_p');
				s[5] = _$Breadcookie('yfxm_s_d');
				s[6] = _$Breadcookie('yfxm_e_d');
				s[7] = _$Breadcookie('yfxm_sv');
				s[8] = _$Breadcookie('yfxm_p_g');
				s[9] = _$Breadcookie('yfxm_p_c');
				s[10] = _$Breadcookie('yfxm_c');
				s[11] = _$Breadcookie('yfxm_e');
				s[12] = _$Breadcookie('yfxm_o');
				s[13] = _$Breadcookie('yfxm_h_h');
				s[14] = _$Breadcookie('yfxm_h_p');
				return {
					a: s[0],
					b: s[1],
					c: s[2],
					d: s[3],
					e: s[4],
					f: s[5],
					g: s[6],
					h: s[7],
					i: s[8],
					j: s[9],
					p: s[10],
					q: s[11],
					r: s[12],
					ht: s[13]||'',
					pu: s[14]||''
				}
			} else {return {
				a: '',
				b: '',
				c: '',
				d: '',
				e: '',
				f: '',
				g: '',
				h: '',
				i: '',
				j: '',
				p: '',
				q: '',
				r: '',
				ht: '',
				pu: ''
			}}
		}
		function _$Bgettag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#tagcontent=') > -1) {
				c = u.substring(12);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1]
				}
			}
			else
			{
				return {
					a: '',
					b: ''
				}
			}
		}
		function _$Bgetpagetag(u) {
			var c = '';
			var s = new Array();
			if (u.indexOf('#pagecontent=') > -1) {
				c = u.substring(13);
				s = c.split('|');
				return {
					a: s[0],
					b: s[1],
					c: s[2]
				}
			}
			else
			{
				return {
					a: '',
					b: '',
					c: ''
				}
			}
		}
		function _$Bjsgif(gs) {
			if( _$Bis_can_record == 0 )
			{
				return;
			}
			var gif = new Image();
			gif.onload = function () {
				gif.onload = null;
				_$Bdoimgerr_1 = 1;
			};
			gif.onerror = function () {
				_$Bjsgif(gs);_$Bdoimgerr_1++;
			};
			if( _$Bdoimgerr_1 <= 2 )
			{
				gif.src = gs;
			};
		}
		function _$Bparseurl(u) {
			var p = new Array();
			u = u + '&phpstat';
			var c = u.replace(/^\?/,'').split('&');
			for (var b = 0; b < c.length; b++) {
				var e = c[b].split('=');
				p[e[0]] = e[1];
			}
			return p;
		}
		function _$Btypeof(tp)
		{
			var rp=tp;
			if( tp === null ){rp = '';}
			else if( typeof(tp) === 'undefined' ){rp = '';}
			else if( typeof(tp) === 'object' ){rp = '';}
			else if( typeof(tp) === 'function' ){rp = '';}
			return rp;
		}
		function _$Bsetfirst(fvar, nvalue)
		{
			if( _$Btypeof(fvar) == '' )
			{			
				_$Bsetcookie('yfx_mr_f', nvalue, 30, _$Bdomain, '');
			}
		}
		function _mine(option, value) {
			var mimeTypes = navigator.mimeTypes;
			for (var mt in mimeTypes) {
				if (mimeTypes[mt][option] == value) {
					return true;
				}
			}
			return false;
		}
		var _$Bjava = 0;
		if (navigator.javaEnabled()) {_$Bjava = '1';}
		var _$Bbrowser = /(weibo|micromessenger)/.exec(_$Buseragent);
		if (!_$Bbrowser) {_$Bbrowser = /(firefox|360se|sogou|lbbrowser|bidubrowser|tencenttraveler|theworld|maxthon|opera|ucweb|konqueror|lynx|greenbrowser|netcaptor|netscape|safari|chrome)/.exec(_$Buseragent);}
		if (!_$Bbrowser) {_$Bbrowser = /(msie) ([0-9\.]*)[^;)]/.exec(_$Buseragent);}
		if (!_$Bbrowser) {_$Bbrowser = /(ucbrowser)/.exec(_$Buseragent);}
		if (!_$Bbrowser) {_$Bbrowser = /(trident)/.exec(_$Buseragent);if (_$Bbrowser) {_$Bbrowser[0] = 'IE'}}
		if (!_$Bbrowser) {_$Bbrowser = /(applewebkit)/.exec(_$Buseragent);if (_$Bbrowser) {_$Bbrowser[0] = 'safari'}}
		if (_$Buseragent.match(/chrome/) != null)
		{
			var is360 = _mine("type","application/vnd.chromium.remoting-viewer");
			if (is360)
			{
				_$Bbrowser[0] = '360';
			} else
			{
				_$Bbrowser[0] = 'chrome';
			}
		}
		_$Bbrowser = _$Bbrowser === null ? 'other' : _$Bbrowser[0];
		function getParenthesesStr(text)
		{
			var result = '';
			var regex = /\((.+?)\)/g;
			var options = text.match(regex);
			if (options !== null ) {
				var option = options[0];
				if (options !== null) {
					result = option.substring(1, option.length - 1)
				}
			}
			return result;
		}
		function finalSystem(text)
		{
			if (text === null )
				return "other";
			var result = getParenthesesStr(text);
			var resultArr = new Array();
			resultArr = result.split(";");
			var system = null;
			if (resultArr === null )
				return "other";
			if (resultArr[0] == 'macintosh')
			{
				var system =  /(mac os) ([0-9a-zA-Z\._]*) ([0-9\._]*)/.exec(resultArr[1]);
				if ( system !== null )
				{
					var reg = new RegExp('_',"g");
					system[0] = system[0].replace(reg,'.');
				}
			} else if (resultArr[0] == 'linux')
			{
				var system =  /(android) ([0-9\.]*)/.exec(resultArr[1]);
				if (system === null )
				{
					var system =  /(android) ([0-9\.]*)/.exec(resultArr[2]);
				}
			} else if (resultArr[0] == 'iphone' || resultArr[0] == 'ipad')
			{
				var system =  /(os) ([0-9\._]*)/.exec(resultArr[1]);
				if (system === null )
				{
					var system =  /(os) ([0-9\._]*)/.exec(resultArr[2]);
				}
				if ( system !== null )
				{
					var reg = new RegExp('_',"g");
					system[0] = system[0].replace('os','ios');
					system[0] = system[0].replace(reg,'.');
				}
			}
			var returnStr = system === null ? 'other' : system[0];
			return returnStr;
		}
		var _$Bsystem = /(windows nt|windows|unix|linux|sunos|bsd|redhat|macintosh) ([0-9\.]*)[^;)]/.exec(_$Buseragent);
		_$Bsystem = _$Bsystem === null ? 'other' : _$Bsystem[0];
		if (_$Bsystem == 'other')
		{
			_$Bsystem = finalSystem(_$Buseragent);
			// 此处进行改动,记录 mac iphone android
		}
		var _$Balexa			= (_$Buseragent.indexOf('alexa') !== -1) === false ? '0' : '1';
		var _$Bflash			= _$Bflashok.f;
		var _$Bpathname		= _$Bdocument.location.pathname;
		var _$Bfreferrer		= _$Bgeturlparam(_$Breferrer);
		var _$Bfreferrerhost = _$Bfreferrer.h;
		var _$Bref			= _$Bencode(_$Bfreferrer.p);
		var _$Bmapcode		= _$Bgetmap(_$Bhashcode);
		var _$Btagcode		= _$Bgettag(_$Bhashcode);
		var _$Bpagecode		= _$Bgetpagetag(_$Bhashcode);
		var _$Bsearch		= _$Breplace_utm(_$Bdocument.location.search);
		if( _$Bhashcode && 0 )
		{
			_$Bsearch		= _$Bsearch + _$Bhashcode;
		}
		_$Bpathname			= _$Bencode(_$Bpathname + _$Bsearch);
		_$Bpartner_website	= _$Breadflashcookie('yfx_p');
		_$Bmediumsource		= _$Breadflashcookie('yfx_mr');
		_$Bmediumsourcefirst	= _$Breadflashcookie('yfx_mr_f');
		_$Bedmemail			= _$Breadflashcookie('yfx_e');
		var _$Bis_can_record = 1;
		var _$Bparseurlarr	= _$Bparseurl(_$Bsearch);
		var _$Bpmf_key		= _$Btypeof(_$Bparseurlarr['k']);
		var _$Bpmf_from		= _$Btypeof(_$Bparseurlarr['f']);
		var _$Bpmf_key_macth = _$Btypeof(_$Bparseurlarr['m']);
		var _$Bpmf_key_word  = _$Btypeof(_$Bparseurlarr['w']);
		var _$Bpmf_key_id	= _$Btypeof(_$Bparseurlarr['kid']);
		var _$Bpmf_key_tid	= _$Btypeof(_$Bparseurlarr['tid']);
		var _$Bpmf_gclid		= _$Btypeof(_$Bparseurlarr['gclid']);
		var _$Bpmf_bdclkid	= _$Btypeof(_$Bparseurlarr['bdclkid']);
		var _$Bpmf_group		= _$Btypeof(_$Bparseurlarr['pmf_group']);
		var _$Bpmf_medium	= _$Btypeof(_$Bparseurlarr['pmf_medium']);
		var _$Bpmf_source	= _$Btypeof(_$Bparseurlarr['pmf_source']);
		var _$Bpmf_match		= _$Btypeof(_$Bparseurlarr['pmf_match']);
		var _$Bpmf_keyword	= _$Btypeof(_$Bparseurlarr['pmf_keyword']);
		var _$Bpmf_advname	= _$Btypeof(_$Bparseurlarr['pmf_advname']);
		var _$Bpmf_partner	= _$Btypeof(_$Bparseurlarr['pmf_partner']);
		var _$Bpmf_email		= _$Btypeof(_$Bparseurlarr['pmf_email']);
		var _$Bpmf_area		= _$Btypeof(_$Bparseurlarr['pmf_area']);
		var _$Bpmf_id		= _$Btypeof(_$Bparseurlarr['pmf_id']);
		var _$Bpmf_tid		= _$Btypeof(_$Bparseurlarr['pmf_tid']);
		var _$Bpmf_tui_id	= _$Bpmf_tid ? _$Bpmf_tid : _$Bpmf_key_tid;
		if (_$Bpmf_tui_id) {
			_$Bsetflashcookie('yfx_f_id', _$Bpmf_tui_id, 3650, _$Bdomain, '');
		}
		else
		{
			_$Bpmf_tui_id = _$Breadflashcookie('yfx_f_id');
		}
		if(_$Bpagecode.a && _$Bpagecode.b && _$Bpagecode.c)
		{
			var ac = 'pageab_'+_$Bpagecode.a+'_'+_$Bpagecode.c;
			_$Bsetflashcookie('yfx_p_ab_' + _$Bpagecode.a, _$Bpagecode.c, 30, _$Bdomain, 'new');
			_trackData.push(['addclick','HTML',ac,_$Bpagecode.c]);
		}
		if (_$Bmapcode.a && _$Bmapcode.b && _$Bmapcode.c) 
		{
			_$Bis_can_record = 0;
		}
		else if ( _$Bhashcode.indexOf('#visitorplay') > -1 )
		{
			_$Bis_can_record = 0;
		}
		else if ( _$Bhashcode.indexOf('#onlinevisitor') > -1 )
		{
			_$Bis_can_record = 0;
		}
		else if ( _$Bpathname.indexOf('fromclickhot') > -1 )
		{
			_$Bis_can_record = 0;
		}
		if( _$Bpmf_medium && _$Bpmf_medium.indexOf('market_type_') <= -1 )
		{
			_$Bpmf_medium = "market_type_"+_$Bpmf_medium;
		}
		var _$Bpstac			= _$Btypeof(_$Bparseurlarr['pstac']);
		if( ( _$Bpmf_medium && _$Bpmf_source ) || ( ( _$Bpmf_gclid || _$Bpmf_bdclkid ) && _$Bpmf_key !== 'ppc' ) )
		{
			_$Bpmf_key = 'ppc';
		}
		var _$Bpmf_channel = _$Bpmf_medium;
		var _$Bsearchkeyword  = _$Bgetkeyword(_$Breferrer,'_'+_$Bpmf_key);
		if (_$Bpmf_medium && _$Bpmf_source) {
			_$Bmediumsource = _$Bpmf_group+'::'+_$Bpmf_medium+'::'+_$Bpmf_source+'::'+_$Bkeywordsource+'::'+_$Bpmf_match+'::'+_$Bpmf_keyword+'::'+_$Bfreferrerhost+'::'+_$Bpmf_id+'::pmf_from_adv';
			_$Bsetflashcookie('yfx_mr', _$Bmediumsource, 3650, _$Bdomain, '');
			_$Bsetfirst(_$Bmediumsourcefirst, _$Bmediumsource);
			_$Bsetflashcookie('yfx_key', _$Bkeywordkey, 3650, _$Bdomain, '');
		}
		else if (_$Bpmf_key && _$Bpmf_from && _$Bmediumsource.indexOf('pmf_from_adv') <= -1) {
			_$Bpmf_channel = 'market_type_paid_search';
			_$Bmediumsource = _$Bpmf_group+'::market_type_paid_search::::'+_$Bkeywordsource+'::'+_$Bpmf_key_macth+'::'+_$Bpmf_key_word+'::'+_$Bfreferrerhost+'::'+_$Bpmf_key_id+'_'+_$Bpmf_from+'_'+_$Bpmf_key+'::pmf_from_paid_search';
			_$Bsetflashcookie('yfx_mr', _$Bmediumsource, 3650, _$Bdomain, '');
			_$Bsetfirst(_$Bmediumsourcefirst, _$Bmediumsource);
			_$Bsetflashcookie('yfx_key', _$Bkeywordkey, 3650, _$Bdomain, '');
		}
		else if (_$Bkeywordsource && _$Bmediumsource.indexOf('pmf_from_paid_search') <= -1 ) {
			_$Bpmf_channel = 'market_type_free_search';
			_$Bmediumsource = _$Bpmf_group+'::market_type_free_search::::'+_$Bkeywordsource+'::::::'+_$Bfreferrerhost+'::::pmf_from_free_search';
			_$Bsetflashcookie('yfx_mr', _$Bmediumsource, 3650, _$Bdomain, '');
			_$Bsetfirst(_$Bmediumsourcefirst, _$Bmediumsource);
			_$Bsetflashcookie('yfx_key', _$Bkeywordkey, 3650, _$Bdomain, '');
		}
		_$Bkeywordkey = _$Breadcookie('yfx_key');
		if (_$Bpmf_partner) {
			_$Bpartner_website = _$Bpmf_partner;
			_$Bsetflashcookie('yfx_p', _$Bpartner_website, 3650, _$Bdomain, '')
		}
		if (_$Bpmf_email) {
			_$Bedmemail = _$Bpmf_group+'::'+_$Bpmf_medium+'::'+_$Bpmf_source+'::'+_$Bpmf_email+'::'+_$Bpmf_area+'::pmf_from_edm';
			_$Bsetflashcookie('yfx_e', _$Bedmemail, 3650, _$Bdomain, '')
		}
		_$Bmediumsourcefirst = _$Bmediumsourcefirst == _$Bmediumsource ? 'same' : _$Bmediumsource;
		var _$Bcourl = _$Bcounturl_logcount + '?WS=' + _$Bwebsite + '&RD=common&SWS='+_$Bteststr(_$Bpartner_website)+'&SWSID='+_$Bteststr(_Schannel_website_id)+'&SWSPID='+_$Bteststr(_Schannel_webshop_id)+'&JSVER=' + _$BVersion + '&TDT='+_$Bteststr(_trackDataType)+'&UC=' + _$Busercookie + '&LUC=' + (_$Bserusercookie==_$Busercookie?'same':_$Bserusercookie) + '&VUC=' + _$Bvisittime + '&FS=' + _$Bfreferrerhost + '&RF=' + _$Bencode(_$Bref) + '&PS=' + _$Bhostname + '&PU=' + _$Bpathname + _$Bsearchkeyword + '&PT=' + _Spage_type + '&PER=' + _$Biserror + '&PC=' + _$Bencode(_Spage_pic) + '&PI=' + _Spage_id + '&LM=' + _$Blastmodify + '&LG=' + _$Blanguage + '&CL=' + _$Bcolor + '&CK=' + _$Bcookie + '&SS=' + _$Bscreensize + '&SCW=' + _$Bclientwidth + '&SCH=' + _$Bclientheight + '&SSH=' + _$Bscrollheight + '&FT=' + _$Bfirsttime + '&LT=' + _$Blasttime + '&DL=' + _$Bdowntime + '&FL='+_$Bflash+'&CKT='+cookietype+'&JV='+_$Bjava+'&AL=' + _$Balexa + '&SY=' + _$Bencode(_$Bsystem) + '&BR=' + _$Bencode(_$Bbrowser) + '&TZ=' + (new Date()).getTimezoneOffset() / 60 + '&AU=' + _Sauthor + '&UN=' + _$Bencode(_$Busername) + '&UID=' + _$Bencode(_$Buserid) + '&URT=' + _$Bencode(_$Buserregtime) + '&UA=' + _$Bencode(_$Buserage) + '&US=' + _$Bencode(_$Busersex) + '&TID=' + _$Bencode(_$Bpmf_tui_id) + '&MT=' + _$Btelphone + '&FMSRC='+_$Bencode(_$Bmediumsourcefirst)+'&MSRC='+_$Bencode(_$Bmediumsource)+'&MSCH=&EDM='+_$Bencode(_$Bedmemail)+'&RC=' + _$Breturncount + '&SHPIC=&MID=' + _$Brandomid + '&TT=' + _$Bencode(_$Btitle) + "&CHK=" + _$Bunicode(_$Bwebsite+_$Brandomid) + "&SHT=" + _$Bdomain + "&RDM=" + Math.random();
		var _$Bclickhotokstr = true;
		function _$Bcreatejs()
		{
			if (_$Bmapcode.a && _$Bmapcode.b && _$Bmapcode.c) 
			{
				_$Bclickhotokstr = false;
				var _$Burl = _$Bcounturl + '/clickareamap.js.php';
				var _$Bobj = _$Bdocument.createElement('script');
				_$Bobj.type = 'text/javascript';
				_$Bobj.async = true;
				_$Bobj.id = 'clickareamap_id';
				_$Bobj.charset = 'utf-8';
				
				var _$Bpage_site = _$Bhostname;
				var _$Bpath_name = _$Bpathname;
				if(_$Bpathname.indexOf('clickhotcount')>-1 && _$Bmapcode.ht && _$Bmapcode.pu)
				{
					_$Bpage_site = _$Bmapcode.ht;
					_$Bpath_name = _$Bmapcode.pu;
				}	
				var _$Bdurl = _$Burl + '?jsprefix=yfx_&clicktype=' + _$Bmapcode.a + '&areatype=' + _$Bmapcode.b + '&website=' + _$Bmapcode.d + '&server=' + _$Bmapcode.h + '&starttime=' + _$Breadcookie('yfxm_s_d') + '&endtime=' + _$Breadcookie('yfxm_e_d') + '&fromtype=' + _$Breadcookie('yfxm_f') + '&pagesite=' + _$Bpage_site + '&pageurl=' + _$Bpath_name + '&pagegroup=' + _$Bmapcode.i + '&rand=' + Math.random() + '&clickmapcode=' + _$Bmapcode.c+'&clickmapposition=' + _$Bmapcode.e+'&counturl='+_$Bencode(_$Bcounturl)+'&type='+_$Bmapcode.j+'&chose='+_$Bmapcode.p+'&first='+_$Bmapcode.q+'&order='+_$Bmapcode.r + '&hashcode=' + _$Bencode(_$Bhashcode.substr(1));
				_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Bobj);
				setTimeout("_$Bdocument.getElementById('clickareamap_id').src='"+_$Bdurl+"'; ",1500);
			}
/*
			if ( 30 )
			{
				var _$Burl = _$Bcounturl + '/onlinevisite.js.php';
				var _$Bobj = _$Bdocument.createElement('script');
				_$Bobj.type = 'text/javascript';
				_$Bobj.async = true;
				_$Bobj.id = 'onlinevisite_id';
				_$Bobj.charset = 'utf-8';
				var _$Bdurl = _$Burl + '?counturl=' + _$Bencode(_$Bcounturl) + '&WS='+ _$Bwebsite + '&CK=' + _$Bencode(_$Busercookie) +'&UN=' + _$Bencode(_$Busername) +'&clientw='+_$Bclientwidth+'&clienth='+_$Bclientheight+'&platform='+_$Bsystem + '&rand=' + Math.random();
				_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Bobj);
				setTimeout("_$Bdocument.getElementById('onlinevisite_id').src='"+_$Bdurl+"'; ",1600);
			}
			*/
			if ( _$Bhashcode.indexOf('#visitorplay') > -1 )
			{
				if ( _$Bhashcode.indexOf('|dtest') > -1 )
				var _$Burl = '//test.yeefx.cn/phpstat/visitorplay.js.php';
				else
				var _$Burl = _$Bcounturl + '/visitorplay.js.php';
				var _$Bobj = _$Bdocument.createElement('script');
				_$Bobj.type = 'text/javascript';
				_$Bobj.async = true;
				_$Bobj.id = 'visitorplay_id';
				_$Bobj.charset = 'utf-8';
				var _$Bdurl = _$Burl + '?counturl=' + _$Bencode(_$Bcounturl) + '&WS='+ _$Bwebsite + '&pagesite=' + _$Bhostname + '&pageurl=' + _$Bpathname + '&hashcode=' + _$Bencode(_$Bhashcode.substr(1)) + '&width=' + _$Bclientwidth + '&rand=' + Math.random();
				_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Bobj);
				setTimeout("_$Bdocument.getElementById('visitorplay_id').src='"+_$Bdurl+"'; ",1700);
			}
			if ( _$Bhashcode.indexOf('#onlinevisitor') > -1 )
			{
				if ( _$Bhashcode.indexOf('|dtest') > -1 )
				var _$Burl = '//test.yeefx.cn/phpstat/onlinevisitor.js.php';
				else
				var _$Burl = _$Bcounturl + '/onlinevisitor.js.php';
				var _$Bobj = _$Bdocument.createElement('script');
				_$Bobj.type = 'text/javascript';
				_$Bobj.async = true;
				_$Bobj.id = 'onlinevisitor_id';
				_$Bobj.charset = 'utf-8';
				var _$Bdurl = _$Burl + '?counturl=' + _$Bencode(_$Bcounturl) + '&WS='+ _$Bwebsite + '&pagesite=' + _$Bhostname + '&pageurl=' + _$Bpathname + '&height=' + _$Bclientheight + '&hashcode=' + _$Bencode(_$Bhashcode.substr(1)) + '&rand=' + Math.random();
				_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Bobj);
				setTimeout("_$Bdocument.getElementById('onlinevisitor_id').src='"+_$Bdurl+"'; ",1800);
			}

			if( false )
			{
				if (_$Btagcode.a && _$Btagcode.b)
				{
					var _$Bturl = _$Bcounturl_proxy + '/optimizer.js.php';
					var _$Btobj = _$Bdocument.createElement('script');
					_$Btobj.type = 'text/javascript';
					_$Btobj.async = true;
					_$Btobj.id = 'tagcode_id';
					_$Btobj.charset = 'utf-8';
					var _$Bdurl = _$Bturl + '?abtype=test&website=' + _$Bwebsite + '&abtestid=' + _$Btagcode.a + '&tagcheckcode=' + _$Btagcode.b + "&rand="+Math.random();
					_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Btobj);
					setTimeout("_$Bdocument.getElementById('tagcode_id').src='"+_$Bdurl+"'; ",1900);
				}
				else
				{
					var _$Bturl = _$Bcounturl_proxy + '/optimizer.js.php';
					var _$Btobj = _$Bdocument.createElement('script');
					_$Btobj.type = 'text/javascript';
					_$Btobj.async = true;
					_$Btobj.id = 'tagcode_id';
					_$Btobj.charset = 'utf-8';
					var _$Bdurl = _$Bturl + '?abtype=show&website=' + _$Bwebsite + "&prefix=_$B&rand="+Math.random();
					_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Btobj);
					setTimeout("_$Bdocument.getElementById('tagcode_id').src='"+_$Bdurl+"'; ",2000);
				}
			}
			if( _Spageformjs )
			{
				var _$Bturl = _$Bcounturl_proxy + '/formtrans.js.php';
				var _$Btobj = _$Bdocument.createElement('script');
				_$Btobj.type = 'text/javascript';
				_$Btobj.async = true;
				_$Btobj.id = 'formtrans_id';
				_$Btobj.charset = 'utf-8';
				if( _$Bformlist && _$Bcfre_f )
				{
					var _$Bdurl = _$Bturl + '?action=reaction&website=' + _$Bwebsite + '&swebsite=' + _$Bpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&uipcode=' + _$Busercookie + '&luipcode=' + _$Bserusercookie + '&formlist=' + _$Bencode(_$Bformlist) + '&pagesite=' + _$Bhostname + '&phone='+_$Bencode(_$Btelphone)+'&system='+_$Bencode(_$Bsystem)+'&medium='+_$Bencode(_$Bmediumsource)+'&marknum='+_$Brandomid+'&prefix=_$B&rand='+Math.random();
				}
				if( _$Bformhidden )
				{
					var _$Bdurl = _$Bturl + '?action=hidden&website=' + _$Bwebsite + '&swebsite=' + _$Bpartner_website + '&swebsiteid=' + _Schannel_website_id + '&swebshopid=' + _Schannel_webshop_id + '&formlist=' + _$Bencode(_$Bformlist) + '&prefix=_$B&rand='+Math.random();
				}
				_$Bdocument.getElementsByTagName('head').item(0).appendChild(_$Btobj);
				setTimeout("_$Bdocument.getElementById('formtrans_id').src='"+_$Bdurl+"'; ",2100);
			}
		}
			var _$Bformhiddenloop = 1;	
	var _$Bclickhot;
	var _$Bdoimgerr_2 = 1;
	var _$Bclickhotok = 0;
	var _$Bmessageid = '';
	var _$Bsendlog = 0;
	var _$Bformhidden = 0||0;
	var _$Bclickarray = new Array();
	var _$Bcf_f = 1||0;
	var _$Bcfre_f = 0||0;
	_$Bclickarray[0]='(*)';;
	var _$Bclickreg = '';
	if (_$Bclickarray[0] == 'clickhotall') {
		_$Bclickhotok = 1
	}
	function _$Bdotest(r)
	{
		r = r+'';
		r = r.replace(/\\/g, '\\/');
		r = r.replace(/\//g, '\\/');
		r = r.replace(/\*/g, '(.*)');
		return r;
	}
	if (_$Bclickhot !== 'clickhot' && _$Bclickarray[0] !== 'clickhotall') {
		for (var ci = 0; ci < _$Bclickarray.length; ci++) {
			if (_$Bclickarray[ci].lastIndexOf('*') > - 1) {
				_$Bclickarray[ci] = _$Bdotest(_$Bclickarray[ci]);
				if (_$Bclickarray[ci].indexOf('/') === 0) {
					_$Bclickarray[ci] = _$Bclickarray[ci].substring(1)
				}
				_$Bclickreg = eval('/' + _$Bclickarray[ci] + '/ig');
				if (_$Bclickreg.test(_$Bpathname)) {
					_$Bclickhotok = 1;
					break
				}
			} else {
				if (_$Bclickarray[ci].indexOf('/') !== 0) {
					_$Bclickarray[ci] = '/' + _$Bclickarray[ci]
				}
				if (_$Bclickarray[ci] == _$Bpathname) {
					_$Bclickhotok = 1;
					break
				}
			}
		}
	}
	var _$Bclienturlstr = '';
	var _$Bposarr = new Array();

	function _$Btimelong(ini) {
		var tl = _$Bgt() - _$Bstarttime;
		if (tl >= 1800000) {
			tl = 1000
		}
		if (ini) {
			tl = _$Bgt() - _$Btimestart;
			_$Btimestart = _$Bgt()
		}
		tl <= 0 ? 0 : tl;
		return tl
	}
	function _$Bsetformfield(a,b)
	{
		if( typeof( _$Bformfielddetails[a][b] ) == null || typeof( _$Bformfielddetails[a][b] ) == 'undefined' )
		{
			_$Bformfielddetails[a][b] = {change:0,onkey:0,times:0,focus:0,errors:0,submits:0,inputinfo:0};
		}
	}
	function _$Binitevent(init) {
		var _$Bfn;
		var _$Bfc;
		_$Baddlistener(window, 'unload', _$Bunload);
		_$Baddlistener(window, 'blur', _$Bunload);
		
		if( _$Bcf_f )
		{
			for (var a = 0; a < _$Bdocument.forms.length; a++) {
				_$Bfn = _$Bdocument.forms.item(a);
				_$Bfc = _$Bfn.name || _$Bfn.id;
				if( _$Bfc && _$Bcfre_f )
				{
					_$Bformlist = _$Bformlist + _$Bfc + "::" + _$Bfn.action + "||";
					_$Bformdetails[_$Bfc] = {change:0,onkey:0,times:0,focus:0,submits:0,errors:0,inputinfo:0};
					_$Bformfielddetails[_$Bfc] = {};
				}
				_$Binitform(_$Bfn);
			}
			_$Bgetelementby(['form'], ['submit'], _$Bsubmit);
			_$Bgetelementby(['select', 'input', 'textarea'], ['change'], _$Bchangeselect);
			_$Bgetelementby(['select', 'input', 'textarea','button'], ['blur'], _$Bfocus);
			_$Bgetelementby(['select', 'input', 'textarea','button'], ['click'], _$Bclick);
		}

		 if (init && 1) {
			_$Baddlistener(_$Bdocument, 'click', _$Bclick);
			_$Baddlistener(_$Bdocument, 'mousemove', _$Bmousemove)
		}
		if (init && _$Bcf_f && 0) {
			_$Baddlistener(_$Bdocument, 'keydown', _$Bkeydown);
			_$Baddlistener(_$Bdocument, 'keyup', _$Bkeyup);
		}
	}
	function _$Brecord(a) {
		var s = '';
		if (parseInt(Math.random() * 100) < 5*10 && a.a === 'msmv') return;
		switch (a.a) {
		case 'msmv':
			s = '||' + a.a + '::' + a.t + '::' + a.x + '::' + a.y + '::' + _$Bencode(a.i) + '::' + a.p;
			_$Bcountdourl(s);
			break;
		case 'clk':
		case 'fus':
		case 'link':
		case 'chn':
		case 'down':
		case 'onkey':
		case 'clkout':
		case 'submit':
			s = '||' + a.a + '::' + _$Bencode(a.tn) + '::' + _$Bencode(a.i) + '::' + _$Bencode(a.n) + '::' + a.tp + '::' + _$Bencode(a.v) + '::' + _$Bencode(a.h) + '::' + _$Bencode(a.u) + '::' + a.t + '::' + a.x + '::' + a.y + '::' + a.p + '::' + _$Bencode(a.fn) + '::' + _$Bencode(a.fa) + '::' + a.e + '::' + a.ef + '::' + _$Bencode(a.msg) + '::' + _$Bencode(a.ak) + '::' + _$Bencode(a.eor);
			_$Bcountdourl(s);
			break;
		default:
			_$Bcountdourl(a.a);
			break
		}
	}
	function _$Bunload() {
		_$Bloadgif(_$Bclienturlstr);
		_$Bclienturlstr = ''
	}
	function _$Bcountdourl(s) {
		_$Bclienturlstr += s;
		if (_$Bclienturlstr.length > 2048 && s) {
			_$Bloadgif(_$Bclienturlstr);
			_$Bclienturlstr = ''
		}
	}
	function _$Bdownload(p) {
		var ckda = new Array();
		ckda[0]='.doc';ckda[1]='.csv';ckda[2]='.xls';ckda[3]='.pdf';ckda[4]='.rar';ckda[5]='.zip';ckda[6]='.testARForcechinatax';;
		var _pin = p.toLowerCase();
		for (var ckdi = 0; ckdi < ckda.length; ckdi++) {
			if (_pin.indexOf(ckda[ckdi]) > - 1) {
				return 1
			}
		}
		return 0
	}
	function _$Bclickout(h) {
		var ckoa = new Array();
		ckoa[0]='www.chinatax.gov.cn';
		if(ckoa.length<=0)
		{
			return false;
		}
		var hi = h.toLowerCase();
		for (var ci = 0; ci < ckoa.length; ci++) {
				ckoa[ci] = _$Bdotest(ckoa[ci]);
		}
		var reg = eval('/'+ckoa.join('|')+'/ig');
		return (!reg.test(hi));
	}
	function _$Btrackevent()
	{
		var s = '';
		var rs = '';
		var td = window._trackData;
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			s = _trackEvent.trackActionUrl;
			_trackEvent.trackActionUrl = '';
		}
		else if( td && td.length )
		{
			for(var k in td)
			{
				if( !isNaN(k) )
				{
					for(var kk in td[k])
					{
						if( td[k]['0'] == 'viewgoods' )
						{
							for(var rd in _$Brefid)
							{
								rs = _$Btypeof(_$Bparseurlarr[rd]);
								if( rs )
								{
									td[k]['9'] = rs;
								}
							}
						}
						var jsonid = 0;
						var jsonarr = [];
						var jsonrarr = new Array();
						if( td[k]['0'] == 'addaction' && typeof(td[k]['3']) == 'object' )
						{
							jsonarr = td[k]['3'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['3'] = jsonrarr.join('$');
						}
						if( td[k]['0'] == 'userset' && td[k]['1'] == 'userset' && typeof(td[k]['2']) == 'object' )
						{
							jsonarr = td[k]['2'];
							for( var jk in jsonarr )
							{
								jsonrarr[jsonid] = jk+':'+jsonarr[jk];
								jsonid++;
							}	
							td[k]['2'] = jsonrarr.join('$');
						}
						if( _$Btestnull(_Sorder_encode_url) === false )
						td[k][kk] = _$Bencode(td[k][kk]);
					}
					if( td[k].length == 1 )
					{
						s += '||'+td[k]['0'];
					}
					else
					{
						s += '||'+(td[k].join('::'));
					}
				}
			}
			window._trackData = [];
		}
		return s;
	}
	function _$Bdirecttrackevent()
	{
		if( typeof(_trackEvent) !== 'undefined' && _trackEvent.trackActionUrl.length )
		{
			_$Bloadgif('');
		}
		else if( window._trackData && window._trackData.length )
		{
			_$Bloadgif('');
		}
	}
	function _$Btestissend()
	{
		var _byminclk = 10;
		var _ltime = _$Bgt() - _$Bstarttime;
		if (_$Bsendlog >= 10 && _ltime >= 60000 )
		{
			_byminclk = 5;
		}
		// console.log(_$Bsendlog,_byminclk,_ltime,(_$Bsendlog / Math.ceil(_ltime/60000)));
		if( _$Bsendlog >= _byminclk && _ltime >= 30000 && (_$Bsendlog / Math.ceil(_ltime/60000)) >= _byminclk )
		{
			return 0;
		}
		else
		{
			return 1;
		}
	}
	function _$Bloadgif(gs) {
		if( _$Bis_can_record == 0 )
		{
			return;
		}
		var gif = new Image();
		var clestr = gs + _$Btrackevent();
		if( clestr.length <= 0 ) {return;}
		_$Bsendlog++;
		if ( _$Btestissend() == 0 )
		{
			return;
		}
		gif.onload = function () {
			gif.onload = null;
			_$Bdoimgerr_2 = 1;
		};
		gif.onerror = function () {
		   _$Bloadgif(gs);_$Bdoimgerr_2++;
		};
		if( _$Bdoimgerr_2 <= 2 )
		{
			gif.src = _$Bcounturl_logcount + '?WS=' + _$Bwebsite + '&RD=record&SWS='+_$Bteststr(_$Bpartner_website)+'&SWSID='+_$Bteststr(_Schannel_website_id)+'&SWSPID='+_$Bteststr(_Schannel_webshop_id)+'&JSVER=' + _$BVersion + '&TDT='+_$Bteststr(_trackDataType)+'&UC=' + _$Busercookie + '&LUC=' + (_$Bserusercookie==_$Busercookie?'same':_$Bserusercookie) + '&VUC=' + _$Bvisittime + '&UN=' + _$Bencode(_$Busername) + '&UID=' + _$Bencode(_$Buserid) + '&RC=' + _$Breturncount + '&PS=' + _$Bhostname + '&PU=' + _$Bpathname + '&PT=' + _Spage_type + '&FS=' + _$Bfreferrerhost + '&RF=' + _$Bencode(_$Bref) + '&KW=' + _$Bkeywordkey + '&SS=' + _$Bscreensize + '&SW=' + _$Bscreen_width() + '&SCW=' + _$Bclient_width() + '&SCH=' + _$Bclientheight + '&SSH=' + _$Bscrollheight + '&BR=' + _$Bencode(_$Bbrowser) + '&LTL=' + Math.ceil(_$Btimelong(1) / 1000) + '&MSRC='+_$Bencode(_$Bmediumsource)+'&EDM='+_$Bencode(_$Bedmemail)+'&CLE=' + clestr + '&MID=' + _$Brandomid+'&CHK=' + _$Bunicode(_$Bwebsite+_$Brandomid) + '&RDM='+Math.random();
		}
		if( _$Bpstac.toLowerCase() == 'debug' )
		_$Bmessage(gif.src);
	}
	function _$Baddlistener(a, b, c) {
		if (a.addEventListener) {
			a.addEventListener(b, c, false)
		} else {
			if (a.attachEvent) {
				a.attachEvent('on' + b, c)
			}
		}
	}
	function _$Bclick(ev) {
		_$Bcountimg(ev);
		var b = ev.srcElement || ev.target;
		if (b && /input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$Bchange(b, b.checked)
		}
		if (b && /button|img|input/i.test(b.tagName) && /submit|button/i.test(b.type)) {
			_$Bsubmit_button(b, ev)
		}
	}
	function _$Brecodeelement(ele,eleev,eleslt,type,host,url,eff,fname)
	{
		var $v = $e = $x = $y = $fn = $fa = $gfn = $typekey = $p = '';
		var $error = _$Berrorcode || '';
		_$Berrorcode = '';
		$x = _$Bposition(ele).x;
		$y = _$Bposition(ele).y;
		$p = ele.type;
		if(type == 'fus')
		{
			$v = _$Bgetvalue(ele);
		}
		if((type == 'clk' || type == 'down' || type == 'clkout')&&ele.tagName=='A')
		{
			$v = _$Bencode(ele.innerHTML.replace(/<[^>].*?>/g, '') || '');
			$x = _$Bcltxy(eleev).x;
			$y = _$Bcltxy(eleev).y;
			$e = _$Bencode(ele.getAttribute('phpstatevent') || '');
		}
		if(type == 'clk' && ele.tagName!=='A')
		{
			$v = _$Bgetvalue(ele);
			$x = _$Bcltxy(eleev).x;
			$y = _$Bcltxy(eleev).y;
		}
		if(type == 'chn')
		{
			$e = (eleslt === true ? 1 : (eleslt === false ? 0 : eleslt));
			$v = _$Bgetvalue(ele);
		}
		if(type == 'onkey')
		{
			$v = eff;
			$typekey = eleslt;
		}
		if(type == 'msmv')
		{
			$x = _$Bcltxy(eleev).x;
			$y = _$Bcltxy(eleev).y;
		}
		if((/input|textarea|select|button/i.test(ele.tagName)) || (/img/i.test(ele.tagName) && /submit|button/i.test(ele.type)))
		{		
			$gfn = _$Bgetformname(ele);
			$fn = $gfn.n;
			$fa = $gfn.a;
		}
		if(type == 'submit')
		{
			$gfn	= _$Bgetformname(ele);
			$fn		= $gfn.n;
			$fa		= $gfn.a;
		}	
		if( fname !== '' )
		{
			$fn = fname;
		}
		if( $p === 'password' && $v )
		{
			$v = '********';
		}
		$fa = '';
		var $ig={pose:'',tagid:''};
		$ig = _$Binindeof(ele);
		var $fmsg = '';
		if( $fn && window._trackFormMsg && window._trackFormMsg.length > 0 )
		{
			$fmsg = window._trackFormMsg;
		}
		window._trackFormMsg = '';
		
		if( $fn && $fa && _$Bcfre_f )
		{
			var $eln_id = ele.name || ele.id;
			$eln_id = $eln_id || 'unname';
			_$Bsetformfield($fn,$eln_id);
			if( $eln_id != 'unname' )
			{
				if(type == 'chn')
				{
					_$Bformdetails[$fn].change++;
					_$Bformfielddetails[$fn][$eln_id].change++;
					_$Bformdetails[$fn].inputinfo = $v;
					_$Bformfielddetails[$fn][$eln_id].inputinfo = $v;
				}
				if(type == 'onkey')
				{
					_$Bformdetails[$fn].onkey++;
					_$Bformfielddetails[$fn][$eln_id].onkey++;
				}
				if(type == 'fus')
				{
					_$Bformdetails[$fn].focus++;
					_$Bformfielddetails[$fn][$eln_id].focus++;
				}
				if(type == 'submit')
				{
					_$Bformdetails[$fn].submits++;
					_$Bformfielddetails[$fn][$eln_id].submits++;
				}
				if( $fmsg && $fmsg.indexOf('==failed') )
				{			
					_$Bformdetails[$fn].errors++;
					_$Bformfielddetails[$fn][$eln_id].errors++;
				}
				_$Bformdetails[$fn].times = _$Btimelong(0);
				_$Bformfielddetails[$fn][$eln_id].times = _$Btimelong(0);
			}
		}

		_$Brecord({
				a:  type,
				ak:  $typekey,
				p:  $ig.pose,
				h:  host,
				u:  url,
				t:  _$Btimelong(0),
				n:  (_$Btestobject(ele.name) || ''),
				i:  ($ig.tagid || _$Btestobject(ele.id)),
				v:  $v,
				x:  $x,
				y:  $y,
				e:  $e,
				tp: (_$Btestobject(ele.type) || ''),
				tn: (_$Btestobject(ele.tagName) || ''),
				fn: $fn,
				fa: $fa,
				ef: eff,
				msg: $fmsg,
				eor: $error
			});
	}
	function _$Bfocus(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		if (b && /input|textarea|select/i.test(b.tagName)) {
			_$Brecodeelement(b,ev,'','fus','','',0,'');
		}
	}
	function _$Bonkey(ev,vc) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = ev.keyCode || ev.charCode;
		if (/input|textarea|select/i.test(b.tagName)) {
			_$Brecodeelement(b,ev,vc,'onkey','','',c,'');
		}
	}
	function _$Bkeydown(ev)
	{
		_$Bonkey(ev,'k_d');
	}
	function _$Bkeyup(ev)
	{
		_$Bonkey(ev,'k_u');
	}
	function _$Bkeypress(ev)
	{
		_$Bonkey(ev,'k_p');
	}
	function _$Bcountimg(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.target;
		var c = b;
		while (b && (!b.href || /img/i.test(b.tagName))) {
			b = b.parentNode
		}
		var gettype = 'clk';
		var chu = clkhost = clkurl = '';
		if (b) {
			chu = _$Bgeturlparam(b.href);
			clkhost = chu.h;
			clkurl = chu.p;
			_$Brecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			if (_$Bdownload(b.href)) {
				gettype = 'down';
				_$Brecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
			if (_$Bclickout(clkhost)) {
				gettype = 'clkout';			
				_$Brecodeelement(b,ev,'',gettype,clkhost,clkurl,0,'');
			}
		}
		if (c&&b!=c) {
			var eff = 0;var effid = 'id';
			if ((/img|input|textarea|select|a/i.test(c.tagName))) {
				eff = 1
			}
			if ((/img/i.test(c.tagName)) && chu) {
				effid = c.id || '';
			}
			if( effid == 'id' || effid )
			{
				_$Brecodeelement(c,ev,'','clk','','',eff,'');
			}
		}
	}
	function _$Bscreen_width() {
		return _$Bdocument.documentElement.scrollWidth;
	}
	function _$Bclient_width() {
		return _$Bdocument.documentElement.clientWidth;
	}
	function _$Btestnull(r)
	{
		if( typeof(r) === null )
		{
			return false;
		}
		else if( typeof(r) === 'undefined' )
		{
			return false;
		}
		else
		{
			return true;
		}
	}
	function _$Btestobject(r)
	{
		if( typeof(r) === 'object' )
		{
			return '';
		}
		else
		{
			return r;
		}
	}
	function _$Binindeof(c) {
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var i = 0;
		var b = c;
		var phptag = '';
		var fetchtag = 'phptag';
		var parentnodes = new Array();
		var resultarray = new Array();
		var resultarraystr = new Array();
		while (b && b !== _$Bdocument.body && b !== _$Bdocument.documentElement) {
			var ch = 1;
			var g = new Array();
			if(!_$Btestnull(b.parentNode)||!b.parentNode) break;
			g = b.parentNode.childNodes;
			for (var e = 0; e < g.length; e++) {
				if (g[e].tagName && g[e].tagName !== '!' && g[e].tagName !== 'SCRIPT') {
					if (g[e] == b) {
						break
					}
					ch++
				}
			}
			if( ch < 10 )
			{
				parentnodes[i] = '0'+ch;
			}
			else
			{
				parentnodes[i] = ch;
			}
			phptag = phptag == '' ? (b.getAttribute(fetchtag)||'') : phptag;
			b = b.parentNode;
			i++
		}
		resultarray = parentnodes.reverse();
		resultarraystr = resultarray.join('-');
		return {pose:resultarraystr,tagid:phptag}
	}
	function _$Bgetformname(c)
	{
		while (c && !c.tagName) {
			c = c.parentNode
		}
		var b = c;
		if(/input|textarea|select|img|button/i.test(c.tagName))
		{
			var i = 0;
			while ( b && b.tagName !== 'FORM' ) 
			{
				if( b.tagName == 'BODY' )break;
				b = b.parentNode;
				i++;
			}
		}
		if( b && b.tagName == 'FORM' )
		{
			return {
				n: ((b.getAttribute('name') || b.getAttribute('id')) || ''),
				a: (b.getAttribute('action') || _$Bpathname)
			}
		}
		else
		{
			return {
				n: '',
				a: ''
			}
		}
	}
	function _$Bposition(b) {
		var a = {
			x: 0,
			y: 0
		};
		while (b.offsetParent) {
			a.x += parseInt(b.offsetLeft);
			a.y += parseInt(b.offsetTop);
			b = b.offsetParent
		}
		a.x += parseInt(b.offsetLeft);
		a.y += parseInt(b.offsetTop);
		return a
	}
	function _$Bgetxy() {
		var x = 0;
		var y = 0;
		if (_$Bdocument.body.scrollTop) {
			x = parseInt(_$Bdocument.body.scrollLeft);
			y = parseInt(_$Bdocument.body.scrollTop);
		} else {
			x = parseInt(_$Bdocument.documentElement.scrollLeft);
			y = parseInt(_$Bdocument.documentElement.scrollTop);
		};
		return {
			x: x,
			y: y
		}
	}

	function _$Bistable(a) {
		return (a.tagName == 'TBODY' || a.tagName == 'TR')
	}
	function _$Bchangeselect(c) {
		var b = c.srcElement || c.target;
		if (/input/i.test(b.tagName) && /checkbox|radio/i.test(b.type)) {
			_$Bchange(b, b.checked)
		} else if (/input/i.test(b.tagName) && /text/i.test(b.type)) {
			_$Bchange(b, b.value.length)
		} else if (/textarea/i.test(b.tagName)) {
			_$Bchange(b, _$Btxt_len(b.value))
		} else if (/select/i.test(b.tagName)) {
			_$Bchange(b, b.selectedIndex)
		}
	}
	function _$Bchange(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return;
		};
		_$Brecodeelement(b,'',a,'chn','','',0,'');
		_$Bgetby_idname(b);
		_$Bhiddenele(b,b);
		b.lastvalue = a;
	}
	function _$Bchange_com(b, a) {
		if (b.lastvalue && b.lastvalue == a) {
			return
		};
		b.lastvalue = a;
	}
	function _$Binitform(b) 
	{
		for (var a = 0; a < b.elements.length; a++) {
			var c = b.elements[a];
			if (/input/i.test(c.tagName) && /checkbox|radio/i.test(c.type)) 
			{
				_$Bchange_com(c, c.checked);
			} 
			else
			{
				if (/input/i.test(c.tagName) && /text/i.test(c.type)) 
				{
					_$Bchange_com(c, c.value.length);
				} 
				else 
				{
					if (/textarea/i.test(c.tagName)) 
					{
						_$Bchange_com(c, _$Btxt_len(c.value));
					} 
					else 
					{
						if (/select/i.test(c.tagName)) 
						{
							_$Bchange_com(c, c.selectedIndex);
						}
					}
				}
			}
		}
	}
	function _$Btxt_len(a) {
		return a.length - (a.split("\r").length - 1)
	}
	function _$Bcltxy(ev) {
		if (!ev) {
			var ev = event
		}
		var y = parseInt(ev.clientY) + parseInt(_$Bgetxy().y) - parseInt(_$Bdocument.getElementsByTagName('body')[0].offsetTop);
		var x = parseInt(ev.clientX) + parseInt(_$Bgetxy().x) - parseInt(_$Bdocument.getElementsByTagName('body')[0].offsetLeft);
		if (x > 5000 || x < 0) {
			x = 0
		}
		if (y > 50000 || y < 0) {
			y = 0
		}
		return {
			x: x,
			y: y
		}
	}
	function _$Bmousemove(ev) {
		var t = _$Bgt();
		var e = ev.srcElement || ev.target;
		if ((t - _$Bloadtime) > (parseInt(5) + 1) * 100) {_$Brecodeelement(e,ev,0,'msmv','','','','');}
		_$Bloadtime = t
	}

	function _$Bgetvalue(a) {
		var rv = '';
		if (a.tagName == 'SELECT') {
			rv = a.options[a.selectedIndex].text || ''
		}
		else {
			rv = a.value || '';
			if(rv==''&&_$Btestchildren(a)==1)
			{
				rv = a.innerHTML.replace(/<[^>].*?>/g, '') || '';
			}
		}
		rv = _$Bteststr(_$Bencode(rv.replace(/\s/g, '')));
		return rv.substring(0, 512)
	}
	function _$Bsubmit(ev) {
		if (!ev) {
			var ev = event
		}
		var b = ev.srcElement || ev.currentTarget;
		if( b )
		{
			_$Brecodeelement(b,ev,'','submit','','',0,'');
		}
	}
	function _$Bhiddenele(f,t)
	{
		var loop = 1;
		while ( f && f.tagName !== 'FORM' && loop <= 10 ) 
		{
			if( f && f.tagName === 'BODY' )break;
			f = f.parentNode;
			t = f;
			loop++;
		}
		if( f && f.tagName === 'FORM' && _$Bformhiddenloop <= 10 ) 
		{
			var b = t.childNodes;
			for (var i = 0; i < b.length; i++) 
			{
				if(b[i] && b[i].tagName === 'INPUT' && (b[i].type === 'hidden'||b[i].style.display === 'none')) 
				{
					var b_lastvalue = _$Bteststr(_$Bgetvalue(b[i]));
					b[i].lastvalue = _$Bteststr(b[i].lastvalue);
					if( b_lastvalue && b[i].lastvalue !== b_lastvalue )
					{
						_$Brecodeelement(b[i],'','','chn','','',0,'');
						b[i].lastvalue = b_lastvalue;
					}
				}
				else
				{
					_$Bhiddenele(f,b[i]);
					_$Bformhiddenloop++;
				}
			}
		}
	}
	function _$Btestchildren(f)
	{
		if( f ) 
		{
			return f.childNodes.length;
		}
		else
		{
			return 0;
		}
	}
	function _$Bsubmit_button(b,ev) {
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}
		if( b && b.tagName == 'FORM' )
		{
			_$Brecodeelement(b,ev,'','submit','','',0,'');
			_$Bgetby_idname(b);
			_$Bhiddenele(b,b);
		}
	}
	function _$Bgetby_idname(b)
	{
		var i = 0;
		while ( b && b.tagName !== 'FORM' && i <= 10 ) 
		{
			if( b && b.tagName == 'BODY' )break;
			b = b.parentNode;
			i++;
		}

		if( b && b.tagName === 'FORM' && b.name && _$Bformlist && _$Bformhidden )
		{
			var gh = phpstat_do_hidden_form(b.name);
			for(var ghk in gh)
			{
				var _fidv = _$Bteststr(_$Bid(gh[ghk]['ffield']));
				if( _fidv === '' )
				{
					var _fidva = _$Bname(gh[ghk]['ffield']);	
					if( _fidva.length > 0 )
					{
						_fidv = _fidva['0'];
					}
				}
				if( _fidv )
				{
					var b_lastvalue = _$Bteststr(_$Bgetvalue(_fidv));
					_fidv.lastvalue = _$Bteststr(_fidv.lastvalue);
					if( b_lastvalue && _fidv.lastvalue !== b_lastvalue )
					{
						_$Brecodeelement(_fidv,'','','chn','','',0,b.name);
						_fidv.lastvalue = b_lastvalue;
					}
				}
			}
		}
	}
	function _$Bgetelementby(b, f, a) {
		for (var d = 0; d < b.length; d++) {
			var j = _$Bdocument.getElementsByTagName(b[d]);
			for (var c = 0; c < j.length; c++) {
				for (var g = 0; g < f.length; g++) {
					_$Baddlistener(j[c], f[g], a)
				}
			}
		}
	}
	function _$Bgetmessageid(a) {
		if (a.toLowerCase() == 'debug') {
			setTimeout(function(){var _$Bobj = _$Bdocument.createElement("div");
			_$Bobj.innerHTML = '<textarea id="pst_messageid" name="message" rows="12" cols="100" style="position: absolute; left:10px; bottom:20px; border: solid #6C358D;">'+_$Bcourl+'</textarea>';
			_$Bdocument.getElementsByTagName('body').item(0).appendChild(_$Bobj);_$Bmessageid = _$Bdocument.getElementById('pst_messageid');},3000);     
		}
	}
	function _$Bmessage(a) {
		if (_$Bmessageid) {
			_$Bmessageid.value = a;
		}
	}
	_$Bgetmessageid(_$Bpstac);
	_$Bclickhotokstr ? setTimeout(function(){_$Binitevent(_$Bclickhotok);},3000) : '';
	window.setInterval(function(){_$Bunload();}, 5000);
	_$Bdirecttrackevent();
		_$Bjsgif(_$Bcourl);
		_$Bcreatejs();
		_$Bshare(_$Busercookie);
	}
	function _$Bshare(userunique){};;
	if( _$Bprotocol.toString().toLowerCase().indexOf('http') > -1 )
	{
		if(_$Bisdownloadflash === 0)
		{			
			var ghostvar = _$Bsplitdomain(_$Bthehostname);
			var _$Bclientcookie = _$Breadmapcookie("yfx_c_c_g_u_id");
			if( _$Bchkdomain && _$Bcounturl.indexOf(_$Bchkdomain) > -1 && _$Bclientcookie === '' )
			{
				_$Bgetservercookie(ghostvar,'outfunc');
			}
			else
			{
				_$Bphpstat('HttpCookie','');
			}
		}
		else
		{
			_$Bphpstat_flash_object = new phpstatCookie({

					namespace: 'namespace_phpstat',
					swf_url: _$Bcounturl_proxy+'/cookie/storage.swf?'+Math.random(), 
					debug: false,
					onready: function() {
					_$Bphpstat('FlashCookie','');
					},
					onerror: function() {
					_$Bphpstat('FlashCookie-err','');
					}
				});
		}
	}
}
catch(e)
{
};/*c5634bbd4db8bf0587a04af4fb8c12a9*/