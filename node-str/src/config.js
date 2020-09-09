global.SALT_KEY = 'f5b99242-6504-4ca3-90f2-05e78e5761ef';
global.EMAIL_TMPL = '<strong>{0}</strong>'; //template de email

module.exports = {
    connectionString: 'mongodb+srv://balta:balta@cluster0.pbduh.mongodb.net/%3Cdbname%3E',
    sendgridkey: 'TBD', //utilizar para enviar email
    containerConnectionString: 'TDB' //utilizado para armazenar as imagens do produto

}