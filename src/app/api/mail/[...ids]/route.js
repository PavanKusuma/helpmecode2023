const nodemailer = require('nodemailer')

let transporter
async function init() {
    // if (db) return
    try {
        // create reusable transporter object using the default SMTP transport
        transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                // user: 'hello.helpmecode@gmail.com',
                // pass: 'HelpMeCode@33'
                user: 'hello.helpmecode@gmail.com',
                // pass: process.env.PASS
                pass: 'mditmfjmflmihhnj'
            }
        });
        
    } catch (error) {
        // throw new Error('Failed to establish connection to database')
        return Response.json({msg: error.message}, {status: 500})
    }
}
;(async () => {
    await init()
})()

// handler to send email once the transporter object is ready
// export async function sendEmails(to) {
// export default async function handler(req, res){
export async function GET(request, {params}) {

    const email = params.ids[0];
    const title = params.ids[1];
    const description = params.ids[2];
    
    // setup email data with unicode symbols
    let mailOptions = {
        name: 'HelpMeCode',
        from: 'hello.helpmecode@gmail.com', // sender address
        to: email, // recipient
        subject: title, // Subject line
        text: description, // plain text body
        // html // html body
    };

    try {
        if(!transporter) await init()
        
        // send mail with defined transport object
        let info = await transporter.sendMail(mailOptions);
        console.log('Email sent: ' + info.response);
        return Response.json({msg:'Email sent!'}, {status: 200})
        // return true;

    } catch (error) {
        console.error(error);
        return Response.json({msg: error.message}, {status: 500})
        // return false;
    }
}