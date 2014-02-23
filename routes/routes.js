module.exports = function(app){
    
    app.get('/', function(req, res){
        res.render('index', { page: 'Home', title: 'Home' });
    });

    app.get('/blog', function(req, res){
        res.render('blog', { page: 'Blog', title: 'Blog' });
    });

    app.get('/music', function(req, res){
        res.render('music', { page: 'Music', title: 'Music' });
    });

    app.get('/about', function(req, res){
        res.render('about', { page: 'About', title: 'About' });
    });
    
    app.get('/projects', function(req, res){
        res.render('projects', { page: 'Projects', title: 'Projects' });
    });

    app.get('/resume', function(req, res){
        res.render('resume', { page: 'Resume', title: 'Résumé' });
    });
}