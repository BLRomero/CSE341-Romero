const awesomeFunction = (req, res, next) => {
    res.json('Fernando Romero Gutierrez');
};

const returnAnotherPerson = (req, res, next) => {
    res.json('Liah Noemi Romero');
};

module.exports = { awesomeFunction, returnAnotherPerson };