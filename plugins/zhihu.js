// Copyright (c) 2013 Wilson Xu <imwilsonxu@gmail.com> and Romain Vallet <hoverzoom@gmail.com>
// Licensed under the MIT license, read license.txt

var hoverZoomPlugins = hoverZoomPlugins || [];
hoverZoomPlugins.push( {
    name: 'Zhihu',
    prepareImgLinks: function(callback) {
        var res = [];
        hoverZoom.urlReplace(res,
            'img[src*="zhimg.com"]',
            /_(m|s|is)/,
            '_l'
        );
        callback($(res));
    }
});
