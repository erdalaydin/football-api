const {Router} = require('express');
const Team = require('./model');
const router = new Router();

router.get('/team', (req, res, next) => {
    Team.findAll()
    .then(team => res.json(team))
    .catch(error => error.next())
       
}) 

router.post('/team', (req, res) =>
    Team.create(req.body)
    .then(team => res.json(team))
    .catch(error => error.next())
)


router.get('/team/:id', (req,res) =>
        Team.findByPk(req.params.id)
        .then(team => res.json(team))
        .catch(error => error.next())
)    



module.exports = router;