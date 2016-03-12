// Copyright (c) 2012 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Pixnet.net',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="_s."]',
            '_s.',
            options.showHighRes ? '.' : '_b.'
        );
        callback($(res));
    }
});