const Agendash = require('agendash');
const basicAuth = require('express-basic-auth');

/**
 * For jobs server UI
 * */
exports = module.exports = class IndexController {

    constructor(router) {
        // config routes
        router.get('/', this.indexPage);
        router.get('/insert',this.projectresult);
        router.post('/insert',this.projectinput)
         log.info('Routed', this.constructor.name);
    }

    async projectresult(req,res){
        
        return res.render('projectInput')
    }

    async projectinput(req,res){
        const {name, date, desc} = req.body;
        await _db.Project.create({ name:name, date:date, desc:desc });
        res.redirect('/');
    }

    async indexPage(req, res){
        const projects = await _db.Project.find({});
        return res.render('index',{projects:projects});
    }
};
