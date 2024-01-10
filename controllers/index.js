const getName = (req, res, next) => {
    res.json('Fernando Romero Gutierrez');
};

const getAnotherName = (req, res, next) => {
    res.json('Liah Noemi Romero');
};

module.exports = { getName, getAnotherName };