'use strict';

module.exports = function (app) {
    //app.use('/', require('./api/public'));
    app.use('/api', require('./api/kbArticle'));
};
