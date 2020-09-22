import sgMail from '@sendgrid/mail';



// TODO update this with environment vars
const msg = {
    to: 'jforth22@gmail.com',
    from: 'jared.forth@rivalmind.com', // Use the email address or domain you verified above
    subject: 'Sending with Twilio SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js'
};

// This is the configuration for SendGrid
interface Config {
    to: string;
    from: string;
    subject: string;
    text: string;
}

export class Logger implements Config {
    to: string;
    from: string;
    subject: string;
    text: string;

    public constructor(config: Config) {
        Logger.setApiKey();

        this.to = config.to;
        this.from = config.from;
        this.subject = config.subject;
        this.text = config.text;
    }

    public log(message: string) : void {
        this.text = message;
        sgMail
            .send(msg)
            .then(() => {console.log('sending email')}, error => {
                console.error(error);

                if (error.response) {
                    console.error(error.response.body)
                }
            });
    }

    private static setApiKey() : boolean {
        if (process.env.SENDGRID_API_KEY) {
            sgMail.setApiKey(process.env.SENDGRID_API_KEY);
            return true;
        } else {
            console.error("SendGrid API key must be set");
            return false;
        }
    }
}