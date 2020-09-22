import sgMail from '@sendgrid/mail';

// This is the configuration for SendGrid
interface Config {
    to: string;
    from: string;
    subject: string;
    text: string;
    apiKey: string;
}

export class Logger implements Config {
    to: string;
    from: string;
    subject: string;
    text: string;
    apiKey: string;

    public constructor(config: Config) {
        console.info("Initialize logger with: ");
        console.info(config);
        
        this.to = config.to;
        this.from = config.from;
        this.subject = config.subject;
        this.text = config.text;

        this.apiKey = config.apiKey;
        this.setApiKey();
    }

    public log(err: string) : void {
        console.info("Using the logger log function");
        if (err) {
            console.error(err)
            this.text = err;
        }
        sgMail
            .send({
                to: this.to,
                from: this.from,
                subject: this.subject,
                text: this.text,
                html: this.text
            })
            .then(() => {console.info('sending email...')}, error => {
                console.error("Error sending email: ");
                console.error(error);

                if (error.response) {
                    console.error("The error response returned: ");
                    console.error(error.response.body)
                }
            });
    }

    private setApiKey() : boolean {
        if (this.apiKey) {
            sgMail.setApiKey(this.apiKey);
            return true;
        } else {
            console.error("SendGrid API key must be set");
            return false;
        }
    }
}