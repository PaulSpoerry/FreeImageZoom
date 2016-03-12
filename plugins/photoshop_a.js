// Copyright (c) 2011 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Adobe Photoshop Web Photo Gallery',
    version:'0.1',
    prepareImgLinks:function (callback) {
        if (!hoverZoom.pageGenerator || hoverZoom.pageGenerator.indexOf('Photoshop') == -1) {
            return;
        }
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="thumbnails/"]',
            'thumbnails/',
            'images/'
        );
        callback($(res));
    }
});