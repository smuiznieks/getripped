var request = require('request');


module.exports = function (app) {
    var workoutManager = request.defaults({
        baseUrl: 'https://wger.de/api/v2/',
        json: true
    });
    var exerciseEndpoint = '/exercise';

    // 'spreading' - if 'qs' is supplied a value, it will take all the properties that the user specified and copy it in with the defaults (below)
    function getWorkoutManager(endpoint, qs) {
        qs = {
            language: 2,
            limit: 5,
            ...qs
        };

        return new Promise(function (resolve, reject) {
            workoutManager.get(endpoint,
                {
                    qs: qs
                },
                function (error, response, body) {
                    if (error) {
                        return reject(error)
                    }

                    resolve(body);
                });
        });
    }


    function combineWorkoutManager(req, res, next, endpoint, queries) {
        var promises = queries.map(function (query) {
            return getWorkoutManager(endpoint, query);
        });

        Promise.all(promises)
            .then(function (results) {
                var combined = results.reduce(function (accumulator, result) {
                    return accumulator.concat(result.results);
                }, []);

                res.json(combined);
            })
            .catch(next);
    }


    app.get('/api/exercises', function (req, res, next) {
        if (req.query.group === 'arms') {
            combineWorkoutManager(req, res, next, exerciseEndpoint, [
                { muscles: 1 },
                { muscles: 13 },
                { muscles: 5 }
            ]);
        } else if (req.query.group === 'shoulders') {
            combineWorkoutManager(req, res, next, exerciseEndpoint, [
                { muscles: 2 }
            ]);
        } else if (req.query.group === 'legs') {
            combineWorkoutManager(req, res, next, exerciseEndpoint, [
                { muscles: 7 },
                { muscles: 8 },
                { muscles: 10 },
                { muscles: 11 },
                { muscles: 15 }
            ]);
        } else if (req.query.group === 'back') {
            combineWorkoutManager(req, res, next, exerciseEndpoint, [
                { muscles: 9 },
                { muscles: 12 }
            ]);
        } else if (req.query.group === 'abs') {
            combineWorkoutManager(req, res, next, exerciseEndpoint, [
                { muscles: 3 },
                { muscles: 6 },
                { muscles: 14 }
            ]);
        } else if (req.query.group === 'chest') {
            combineWorkoutManager(req, res, next, exerciseEndpoint, [
                { muscles: 4 }
            ]);
        }
        else {
            res.status(400).json({
                error: 400,
                message: 'You need to specify a valid muscle group by providing a \'group\' query string.'
            });
        }

    });


    // POST: upload a new social post
    app.post('/api/exercises', function (req, res) {
        console.log(req.body).then(function (newPost) {
            res.json(newPost);
        }).catch(function (err) {
            res.json(err);
        });
    });

};