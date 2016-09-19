'use strict';
var model = require('./kb-article.model');

exports.create = function (req, res) {       
    try{                       
        var kbArticle = new model({

            title: req.body.title,
            audience: req.body.audience,
            apliesTo: req.body.apliesTo,
            ticket:req.body.ticket,
            issue: req.body.issue,
            root: req.body.root,
            prereqs: req.body.prereqs,
            solution: req.body.solution,
            author : req.body.author,
            revisors : req.body.revisors,
            dateCreated : req.body.dateCreated,
            dateModified : req.body.dateModified,
            reviewDate : req.body.reviewDate,
            reviewNumber : req.body.reviewNumber          
              
        });
        kbArticle.save(function (err) {        

            if(err){                            
                return res.status(500).send({success:false, reason:err});
            }

            res.status(201).json({success:true,  article:kbArticle}); 

        });
    }  
    catch(err){        
        return res.status(500).send({success:false, reason:err});
    }
};

exports.findall = function (req, res) {          
    if(req.body.term.trim().length < 3) return res.status(200).json({success:true,  articles:[]});

    var page = req.body.page;
    var pagesize = 10;
    var terms = new RegExp( req.body.term.trim(), 'i');

model.paginate({

        $or:[ 

            { title: { "$in" : terms } }, 
            { audience: { "$in" : terms } },
            { apliesTo: { "$in" : terms } },
            { ticket: { "$in" : terms } },
            { issue: { "$in" : terms } },
            { root: { "$in" : terms } },
            { prereqs: { "$in" : terms } },
            { solution: { "$in" : terms } },
            { author: { "$in" : terms } },
            { revisors: { "$in" : terms } },
            { dateCreated: { "$in" : terms } },
            { dateModified: { "$in" : terms } },
            { reviewDate: { "$in" : terms } } ,
            { reviewNumber: { "$in" : terms } }         
        ]


}, { page: page, limit: pagesize }, function(err, result) {
    // result.docs 
    // result.total 
    // result.limit - 10 
    // result.page - 3 
    // result.pages 
  res.status(200).json({success:true, term:req.body.term, count: result.total, articles:result.docs}); 

});
/*

    model.find({
   
        $or:[ 

            { title: { "$in" : terms } }, 
            { audience: { "$in" : terms } },
            { apliesTo: { "$in" : terms } },
            { ticket: { "$in" : terms } },
            { issue: { "$in" : terms } },
            { root: { "$in" : terms } },
            { prereqs: { "$in" : terms } },
            { solution: { "$in" : terms } },
            { author: { "$in" : terms } },
            { revisors: { "$in" : terms } },
            { dateCreated: { "$in" : terms } },
            { dateModified: { "$in" : terms } },
            { reviewDate: { "$in" : terms } } ,
            { reviewNumber: { "$in" : terms } }         
        ]

    }, function(err, articles) {
        if (!err){ 
            res.status(200).json({success:true,  articles:articles}); 
        } else {throw err;}
    });
    */
};

exports.getOne = function (req, res) {       
    model.findOne({_id: req.params.id}, function(err, article) {
        if (!err){ 
            res.status(200).json({success:true,  article:article}); 
        } else {res.status(400).json({success:false,  article:null});}
    });
};

exports.update = function(req, res) {
    model.findOne({ _id: req.body.id }, function(err, article) {
        console.log(req.body.id);
        if (err)  
            return res.status(400).json({success:false,errorcode: 99, error:err});
        if (!article) 
            return res.status(400).json({ success: false,errorcode: 50, message: 'Article not found' });        

        article.title = req.body.title;
        article.audience = req.body.audience;
        article.apliesTo = req.body.apliesTo;
        article.ticket =req.body.ticket;
        article.issue = req.body.issue;
        article.root = req.body.root;
        article.prereqs = req.body.prereqs;
        article.solution = req.body.solution;
        article.author = req.body.author;
        article.revisors = req.body.revisors;
        article.dateCreated = req.body.dateCreated;
        article.dateModified = req.body.dateModified;
        article.reviewDate = req.body.reviewDate;
        article.reviewNumber = req.body.reviewNumber;
        

        article.date = req.body.date;



        article.save(function(err) {
            if (err) 
                return res.status(500).json({success:false, error:err});

            return res.status(200).json({ success: true, article: article });
          });                  
    });
};

exports.delete = function(req, res) {

    model.find({_id: req.params.id}).remove().exec(function(err, data) {        
          if (data.result.n == 0)  
            return res.status(400).json({ success: false, message: 'article not found' });                          

        return res.status(200).json({ success: true });  
    });
};