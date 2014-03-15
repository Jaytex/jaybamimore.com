$(function () {
	// regex for generic url
    var url = window.location.pathname.replace(/^.*\/\/[^\/]+/, '');
     if(url == '/')
        $('head').prepend('<link rel="stylesheet" href="/ss/master.css" type="text/css" />');
      else if (url == '/resume')
        $('head').prepend('<link rel="stylesheet" href="/ss/myRes.css" type="text/css" />');
      else
        $('head').prepend('<link rel="stylesheet" href="/ss/jstyle.css" type="text/css" />'); 
      });

