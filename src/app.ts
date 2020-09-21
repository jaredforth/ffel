import sgMail from '@sendgrid/mail';

if (process.env.SENDGRID_API_KEY) {
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
}

const msg = {
    to: 'jforth22@gmail.com',
    from: 'jared.forth@rivalmind.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
//ES6
sgMail
    .send(msg)
    .then(() => {console.log('hello')}, error => {
        console.error(error);

        if (error.response) {
            console.error(error.response.body)
        }
    });