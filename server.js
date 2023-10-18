const express = require("express");
const path = require("path");
const Mailchimp = require("mailchimp-api-v3");
const dotenv = require("dotenv");
const crypto = require("crypto");

dotenv.config({ path: __dirname + "/variables.env" });

const app = express();
const PORT = process.env.PORT || 9001;

const mc_api_key = process.env.MAILCHIMP_API_KEY;
const list_id = process.env.LIST_ID;
const mailchimp = new Mailchimp(mc_api_key);

const successTextFr =
  "Merci\u00A0! Les lutins de l'équipe de dév viennent \
                    de t'envoyer un courriel pour confirmer ton inscription. \
                    À tout de suite dans ta boîte mail\u00A0!";

const successTextEn =
  "Thank you\u00A0! Dev team's elves just sent you an email to confirm your subscription. Please check your mailbox\u00A0!";

const failureTextFr =
  "Oops... Il semblerait qu'une erreur ait frappé ! \
                    Es-tu sûr·e de ton adresse mail ?";

const failureTextEn =
  'Oops... Looks like something went wrong\u00A0! \
Could you double-check your email address\u00A0?';

const updateTextFr = 'Ton adresse mail a bien été mise à jour !';
const updateTextEn = 'Your email address has been updated!';

// Controller
app.get('/api/memberAdd', (req, res) => {
  const data = mailChimpDataBuilder(req);
  addMember(data, res);
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, console.log('Server started here: ' + PORT));

// ----- Function definitions ------

const mailChimpDataBuilder = (req) => ({
  email_address: req.query.email,
  status: "pending",
});

const addMember = (mailChimpData, response) => {
  mailchimp
    .post(`/lists/${list_id}/members/`, mailChimpData)
    .then((result) => {
      response.send({
        status: result.statusCode,
        msgFr: successTextFr,
        msgEn: successTextEn,
      });
      console.log("Member has been added!");
      console.log(result);
    })
    .catch((err) => {
      if (err.title == "Member Exists") {
        console.log("Member has been there before! Let's update...");
        updateMember(mailChimpData.email_address, mailChimpData, response);
      } else {
        console.log("Subscription failed, here is the reason :");
        console.log(err);
        response.send({
          status: err.status,
          msgFr: failureTextFr,
          msgEn: failureTextEn,
        });
      }
    });
};

const updateMember = (email, mailChimpData, response) => {
  // MailChimp requires a md5 hash of the subscriber's email address
  const hash = crypto.createHash("md5").update(email).digest("hex");

  mailchimp
    .put(`/lists/${list_id}/members/${hash}`, mailChimpData)
    .then((result) => {
      response.send({
        status: result.statusCode,
        msgFr: updateTextFr,
        msgEn: updateTextEn,
      });
      console.log("Member has been added updated!");
      console.log(result);
    })
    .catch((err) => {
      response.send({ status: err.status, msg: failureText });
      console.log("Update failed... Here is the reason :");
      console.log(err);
    });
};
