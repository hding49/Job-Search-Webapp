const Product = require('../models/product.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.product_create = function (req, res) {
    var product = new Product(
        {
            title: req.body.title,
            company: req.body.company,
            summary: req.body.summary,
            

        }
    );

    product.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Job Created successfully')
    })
};

exports.product_details = function (req, res) {
    Product.findById(req.params.id, function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_read = function (req, res) {
    Product.find(function (err, product) {
        if (err) return next(err);
        res.send(product);
    })
};

exports.product_update = function (req, res) {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, product) {
        if (err) return next(err);
        res.send(product);
    });
};

exports.product_delete = function (req, res) {
    Product.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send("delete successfully!");
    })
};


exports.product_search = (req, res, next) => {
    var word = req.params.id;
    word = word.replace(/\s/g, "");
    var _filter = {
      $and: [{
        $or: [
            { title: { $regex: word, $options: '$i' } },
            { company: { $regex: word, $options: '$i' } },
            { summary: { $regex: word, $options: '$i' } },
        ]
      }]
    }
    
    Product.find(_filter, (err, product) => {
        if (!product)
            return res.status(404).json({ status: false, message: 'No search result found.' });
        else
            return res.status(200).send(product);
    })
}


exports.EditJob = async (req, res, next) =>{
    

    await Product.findOneAndUpdate( {title : req.body.old}, {$set: {title : req.body.new} } ).then((updatedDoc)=>{
        res.send(updatedDoc);         
         
  });

}