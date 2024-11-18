import Nodemailer from 'nodemailer'
import { MailtrapTransport } from 'mailtrap';

const TOKEN = "7be006e8e4a9d52a15c4e4b0714d78aa";

const transport = Nodemailer.createTransport(
  MailtrapTransport({
    token: TOKEN,
  })
);

export const _SENDMAIL = (firstName, lastName, email, message) => {
    return new Promise((resolve, reject) => {
        const sender = {
            address: email,
            // address: "hello@demomailtrap.com",
            name: "Mailtrap Test",
          };
          const recipients = [
            "abdulwahabiddris08@gmail.com",
          ];
          
          transport
            .sendMail({
              from: sender,
              to: recipients,
              html: `<h6>${firstName} ${lastName}</h6> ${message}`,
              subject:`Customer: ${sender.firstName} ${sender.lastName}`,
              template_uuid: "d99a0d3f-3949-49ed-bfa7-d3abf3b3f8ed",
            //   template_variables: {
            //     "company_info_name": "Test_Company_info_name",
            //     "name": "Test_Name",
            //     "company_info_address": "Test_Company_info_address",
            //     "company_info_city": "Test_Company_info_city",
            //     "company_info_zip_code": "Test_Company_info_zip_code",
            //     "company_info_country": "Test_Company_info_country"
            //   }
            })
            .then((response => resolve(response)))
            .catch((error) => reject(error));
    })
}