
const pageNotFound = (req,res) => {
    res.status(404).send("404 - page not found");
}

module.exports = pageNotFound;

