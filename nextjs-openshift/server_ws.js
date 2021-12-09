const cms = require('./data/cms.json');
const mock_users = require('./data/users.json');

module.exports = (router) => {
   
    router.get('/cms', async (req, res) => {
        setTimeout(()=>{ res.json({ result: true, data: cms})},5000);
    });

    router.post('/users/signup', async (req, res) => {
        console.log('Server: signup is called')
        mock_users.push({ name: req.body.name, user: req.body.user, pass: req.body.password, confirmed: false });
        setTimeout(()=>{ res.json({ result: true, user: JSON.stringify(mock_users.slice(-1)[0]) })},5000);
    });

    router.post('/users/signin', async (req, res) => {
        setTimeout(()=>{ res.json({ result: true,message:'SUCCESS SINGIN'})},5000);
    });
    router.post('/users/forgetpassword', async (req, res) => {
        setTimeout(()=>{ res.json({ result: true,message:'SUCCESS SENDING PASSWORD'})},5000);
    });
    router.post('/users/activate', async (req, res) => {
        if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
            console.log(JSON.stringify(req.headers.authorization.substring(7, req.headers.authorization.length)));
            setTimeout(()=>{ res.json({ result: true,message:'SUCCESS ACTIVATE'})},5000);
            
        } else {
            console.log("ERROR AUTH")
            await res.json({ result: false , message: 'NOT AUTHORIZED'});
        }
    });

    router.post('/users/signout', async (req, res) => {
        if (authHeader.startsWith("Bearer ")) {
            token = authHeader.substring(7, authHeader.length);
        } else {
            //Error
        }
        await res.json({ result: true });
    });

    router.post('/users/remove', async (req, res) => {
        await res.json({ result: true });
    });
    router.get('/users', async (req, res) => {
        await res.json(mock_users);
    });
}