// Copyright (c) 2011 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Google+',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="proxy\?url="]',
            /.*proxy\?url=([^&]+).*/,
            '$1'
        );
        callback($(res));
    }
});