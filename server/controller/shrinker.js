const shortURL = require("../models/shortURL");

module.exports.shrinkUrl = async (req, res) => {
    const shortUrl = await shortURL.findOne({ full: req.body.fullURL });

    if (shortUrl == null) {
        const url = await shortURL.create({ full: req.body.fullURL });
        res.status(200).json(`http://localhost:5000/${url.short}`);
    } else {
        // console.log(shortUrl);
        res.status(200).json(`http://localhost:5000/${shortUrl.short}`);
    }
};

module.exports.showAllUrl = async (req, res) => {
    const shortUrls = await shortURL.find();
    res.status(200).json(shortUrls);
    console.log(shortUrls);
};

module.exports.redirectUrl = async (req, res) => {
    const shortUrl = await shortURL.findOne({ short: req.params.url });
    if (shortUrl == null) {
        return res.status(404);
    }

    res.redirect(shortUrl.full);
};

module.exports.home = async (req, res) => {
    const shortUrl = await shortURL.find();
    res.json(shortUrl);
};

module.exports.deleteUrl = async (req, res) => {
    const shortUrl = await shortURL.deleteOne({ short: req.params.id });

    if (shortUrl == null) {
        return res.status(404);
    }

    res.status(200).send('successfully deleted record')

    console.log(shortUrl);
};
