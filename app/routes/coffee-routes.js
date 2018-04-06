module.exports = function(app, db) {
    app.post('/coffee', (req, res) => {
        console.log(req.body);
        res.send('gib coffee');
    });

    app.get('/coffee', (req, res) => {
        res.send('it worked.');
    });

    app.get('/', (req, res) => {
        res.send('it worked home.');
    });
};