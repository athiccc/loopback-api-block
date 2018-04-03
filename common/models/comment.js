module.exports = (comment) => {
    comment.cmd = (No, cb) => {
        No = No || 0;
        cb(null, 'Number :' + No);
    }
    comment.cmd1 = (cb) => {
        cb(null, "dawdawda")
    }
};