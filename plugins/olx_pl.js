// Copyright (c) 2015 Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push({
    name:'Olx.pl',
    prepareImgLinks:function (callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'a.thumb img',
            /_\d+x\d+_/,
            '_1000x700_'
        );
        callback($(res));
    }
});