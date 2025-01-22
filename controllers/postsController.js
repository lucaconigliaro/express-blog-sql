const connection = require("../data/db")

const index = (req, res) => {
    const sql = "SELECT * FROM `posts`";

    connection.query(sql, (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server"
            })
        } else {
            return res.status(200).json({
                status: "success",
                data: results,
            });
        }
    });
};

const show = (req, res) => {

};

// const create = (req, res) => {

//  };

// const update = (req, res) => {

// };

// const modify = (req, res) => {

// };

const destroy = (req, res) => {

};

module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
};