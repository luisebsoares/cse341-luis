const emilyRoute = (req, res) => {
    res.send('Emily Johnson');
};

const hannahRoute = (req, res) => {
    res.send('Hannah Williams');
};

module.exports = {
    emilyRoute,
    hannahRoute
};