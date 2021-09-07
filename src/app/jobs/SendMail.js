import Mail from '../lib/Mail';

export default {
    key: 'SendMail',
    options: {
        delay: 5000,
        priority: 1,       
    },
    async handle({ data }) {

        const { user } = data;

        await Mail.sendMail({
            from: "EMPRESA <cadastro@empresa.com.br>",
            to: `${user.name} <${user.email}>`,
            subject: `Cadastro do usuário ${user.name}`,
            html: `Olá ${user.name}, seja bem vindo!<br><br>Anote sua senha: ${user.password}`
        });
    }
}