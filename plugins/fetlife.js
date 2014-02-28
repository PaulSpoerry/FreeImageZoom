// Copyright (c) 2010 Romain Vallet
// Submitted by GingerDom
// Licensed under the MIT license, read license.txt
var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
	name: 'FetLife',
	version: '0.1',
	prepareImgLinks: function(callback) {
		var res = [];
		$('img').each(function() {
			var img = $(this),
				url = hoverZoom.getThumbUrl(this);
			if (!url) {	return;	}
			if (url.indexOf('_35') > -1) {
				url = url.replace(/_35./, '_200.'); 
			} else if (url.indexOf('_110') > -1) {
				url = url.replace(/_110./, '_720.'); 
			} else if (url.indexOf('_60.') > -1) {
				url = url.replace(/_60./, '_720.'); 
			} else if (url.indexOf('_200') > -1) {
				url = url.replace(/_200./, '_720.'); 
			} else if (url.indexOf('_345') > -1) {
				url = url.replace(/_345./, '_720.'); 
			} else if (url.indexOf('_510') > -1) {
				url = url.replace(/_510./, '_720.');
			} else if (url.indexOf('_720') > -1) {
				url = url.replace(/_720./, '_720.'); 
			}
			img.data().hoverZoomSrc = [url];
			res.push(img);
		});
		callback($(res));	
	}
});
