// Copyright (c) 2011 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'We Heart It',
    version:'0.1',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img.img',
            '_thumb.',
            '_large.'
        );
        callback($(res));
    }
});