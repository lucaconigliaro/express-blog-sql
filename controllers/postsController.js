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
    const id = req.params.id;

    const sql = "SELECT * FROM `posts` WHERE `id` = ?";

    const tagsSql = `SELECT posts.* , tags.label 
    FROM posts 
    JOIN post_tag 
    ON posts.id = post_tag.post_id 
    JOIN tags 
    ON tags.id = post_tag.tag_id`;

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server"
            });
        } else if (results.length === 0) {
            return res.status(404).json({
                message: "Post non trovato",
            });
        } else {
            connection.query(tagsSql, [id], (err, tags) => {
                if (err) {
                    return res.status(500).json({
                        message: "Errore interno del server"
                    });
                }

                const postTags = {
                    ...posts[0],
                    tags: tags
                };

                return res.status(200).json({
                    status: "success",
                    data: postTags
                });
            });
        }
    })
};

// const create = (req, res) => {

//  };

// const update = (req, res) => {

// };

// const modify = (req, res) => {

// };

const destroy = (req, res) => {
    const id = req.params.id;

    const sql = "DELETE FROM `posts` WHERE `id` = ?";

    connection.query(sql, [id], (err, results) => {
        if (err) {
            return res.status(500).json({
                message: "Errore interno del server",
            });
        } else if (results.length === 0) {
            return res.status(404).json({
                message: "Post non trovato",
            });
        } else {
            return res.sendStatus(204);
        }
    });
};

module.exports = {
    index,
    show,
    // create,
    // update,
    // modify,
    destroy
};