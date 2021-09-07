import passwordGenerator from 'password-generator';
import Queue from '../lib/Queue';

export default {
    
    async Store(req, res) {

        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        await Queue.add('SendMail', { user });
       
        return res.json({"Result":user});
    }
}