module.exports = function(app, db) {
    app.post('/coffee', (req, res) => {
        console.log(req.body);
        res.send('gib coffee');
    });
};