﻿// Copyright (c) 2014 Romain Vallet <romain.vallet@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];

hoverZoomPlugins.push( {
    name: 'fetlife',
    prepareImgLinks: function(callback) {
        var res = [];
        hoverZoom.urlReplaceAndRemoveTokens(res,
        	'a img[src*="/pic0.fetlife.com"], a img[src*="pic1.fetlife.com"], a img[src*="pic2.fetlife.com"],a img[src*="pic3.fetlife.com"], a img[src*="/pic4.fetlife.com"], a img[src*="pic5.fetlife.com"], a img[src*="pic6.fetlife.com"]',
        	/_\d+\.jpg\??.*/,
        	'_958.jpg');
        
        // The following line grabs the image from its frame on an individual picture's page;
        // unused since you can already access the full image from the gallery view
        //hoverZoom.urlReplace(res, 'a.main_pic span.fake_img', /_\d+\.jpg/, '_958.jpg');
        callback($(res));
    }
});
