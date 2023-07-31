module.exports = function reverse(n) {
    let nStringified =
        n.toString()[0] === "-" ? n.toString().slice(1) : n.toString();
    return Number(`${nStringified[2]}${nStringified[1]}${nStringified[0]}`);
};
