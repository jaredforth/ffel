import sgMail from '@sendgrid/mail';

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

        console.log(this);
    }

    public log(message: string) : void {
        this.text = message;
        sgMail
            .send(this)
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