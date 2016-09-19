'use strict';
var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var mongoosePaginate = require('mongoose-paginate');    

var schema = new Schema({
    title: String,
    audience: String,
    apliesTo: String,
    ticket:String,
    issue: String,
    root: String,
    prereqs: String,
    solution: String,
    author: String,
    revisors: String,
    dateCreated:String,
    dateModified:String,
    reviewDate:String,
    reviewNumber:String

});
schema.plugin(mongoosePaginate);


module.exports = mongoose.model('kbArticle', schema);
