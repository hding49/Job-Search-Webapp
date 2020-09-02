const mongoose = require('mongoose');
const Job = require('../model/model');

exports.job_create = function (req, res) {
    var job = new Job();
        
           job.title = req.body.title;
           job.company = req.body.company;
           job.summary = req.body.summary;

    song.save((err, doc) => {
       if (!err){
        res.send(doc);
               }
               else if (err){
                   if (err.code == 11000)
                       res.status(422).send(['Duplicate song name found.']);
                   else
                       return next(err);
               }
           });
};

exports.job_update = function (req, res) {
    Job.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, job) {
        if (err) return next(err);
        res.send(job);
    });
};

exports.job_delete = function (req, res) {
    Job.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send("delete successfully!");
    })
};


//fuzzy match
module.exports.job_search = (req, res, next) => {
    var word = req.params.id;
    word = word.replace(/\s/g, "");
    var _filter = {
      $and: [{
        $or: [
            { title: { $regex: word, $options: '$i' } },
            { company: { $regex: word, $options: '$i' } },
            { summary: { $regex: word, $options: '$i' } },

        ]
      },{type: {$ne: "inactive"}}]
    }
    
    Song.find(_filter, (err, song) => {
        if (!job)
            return res.status(404).json({ status: false, message: 'No search result found.' });
        else
            return res.status(200).send(song);
    })
}


