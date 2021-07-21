const { Router } = require("express");
const router = Router();
const User = require("../db/models/userModel");
const Clients = require("../db/models/clientModel");
const Orders = require("../db/models/orderModel");
var nodemailer = require("nodemailer");

router.post("/workers/added/new", async (req, res) => {
  let admin = await User.find({ isAdmin: true });
  console.log(admin);
  const { email } = req?.body;
  try {
    if (email) {
      const newUser = await User.create(req.body);
      var mailData = {
        from: "2same1as2@gmail.com",
        to: email,
        subject: "test",
        text: "test email",
      };
      const nodemailer = require("nodemailer");
      async function main() {
        console.log("Credentials obtained, sending message...");
        // Message object
        var transporter = nodemailer.createTransport({
          service: "gmail",
          auth: {
            user: "2same1as2@gmail.com", //admin[0].email,
            pass: "Zbc320098",
          },
        });
        let message = {
          // Comma separated list of recipients
          to: email,

          // Subject of the message
          subject: "CRM",

          // plaintext body
          text: "Wellcome to CRM!",

          html: `
  
          <!DOCTYPE HTML PUBLIC "-//W3C//DTD XHTML 1.0 Transitional //EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<!--[if gte mso 9]>
<xml>
  <o:OfficeDocumentSettings>
    <o:AllowPNG/>
    <o:PixelsPerInch>96</o:PixelsPerInch>
  </o:OfficeDocumentSettings>
</xml>
<![endif]-->
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="x-apple-disable-message-reformatting">
  <!--[if !mso]><!--><meta http-equiv="X-UA-Compatible" content="IE=edge"><!--<![endif]-->
  <title></title>
  
    <style type="text/css">
      table, td { color: #000000; } a { color: #363675; text-decoration: none; }
@media only screen and (min-width: 620px) {
  .u-row {
    width: 600px !important;
  }
  .u-row .u-col {
    vertical-align: top;
  }

  .u-row .u-col-39p83 {
    width: 238.98px !important;
  }

  .u-row .u-col-60p17 {
    width: 361.02px !important;
  }

  .u-row .u-col-100 {
    width: 600px !important;
  }

}

@media (max-width: 620px) {
  .u-row-container {
    max-width: 100% !important;
    padding-left: 0px !important;
    padding-right: 0px !important;
  }
  .u-row .u-col {
    min-width: 320px !important;
    max-width: 100% !important;
    display: block !important;
  }
  .u-row {
    width: calc(100% - 40px) !important;
  }
  .u-col {
    width: 100% !important;
  }
  .u-col > div {
    margin: 0 auto;
  }
}
body {
  margin: 0;
  padding: 0;
}

table,
tr,
td {
  vertical-align: top;
  border-collapse: collapse;
}

.ie-container table,
.mso-container table {
  table-layout: fixed;
}

* {
  line-height: inherit;
}

a[x-apple-data-detectors='true'] {
  color: inherit !important;
  text-decoration: none !important;
}

@media (max-width: 480px) {
  .hide-desktop {
    display: block !important;
  }
  table.hide-desktop {
    display: table !important;
  }
}
    </style>
  
  

<!--[if !mso]><!--><link href="https://fonts.googleapis.com/css?family=Open+Sans:400,700&display=swap" rel="stylesheet" type="text/css"><link href="https://fonts.googleapis.com/css?family=Pacifico&display=swap" rel="stylesheet" type="text/css"><!--<![endif]-->

</head>

<body class="clean-body" style="margin: 0;padding: 0;-webkit-text-size-adjust: 100%;background-color: #ffffff;color: #000000">
  <!--[if IE]><div class="ie-container"><![endif]-->
  <!--[if mso]><div class="mso-container"><![endif]-->
  <table style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;min-width: 320px;Margin: 0 auto;background-color: #ffffff;width:100%" cellpadding="0" cellspacing="0">
  <tbody>
  <tr style="vertical-align: top">
    <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top">
    <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td align="center" style="background-color: #ffffff;"><![endif]-->
    

<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="600" style="width: 600px;padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="596" style="width: 596px;padding: 0px;border-top: 2px solid #236fa1;border-left: 2px solid #236fa1;border-right: 2px solid #236fa1;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 2px solid #236fa1;border-left: 2px solid #236fa1;border-right: 2px solid #236fa1;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:13px 10px 17px 14px;font-family:'Open Sans',sans-serif;" align="left">
        
  <h2 style="margin: 0px; color: #1a4f72; line-height: 160%; text-align: center; word-wrap: break-word; font-weight: normal; font-family: 'Pacifico',cursive; font-size: 20px;">
    Добрый день!<br />Ваша почта была добавлена администратором, пожалуйста, перейдите на страницу авторизации.
  </h2>

      </td>
    </tr>
  </tbody>
</table>

<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #BBBBBB;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="237" style="width: 237px;padding: 0px;border-top: 0px solid transparent;border-left: 2px solid #236fa1;border-right: 0px solid transparent;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-39p83" style="max-width: 320px;min-width: 239px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 2px solid #236fa1;border-right: 0px solid transparent;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:11px 0px 0px;font-family:'Open Sans',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="right">
      
      <img align="right" border="0" src="https://www.google.com/gmail/about/static/images/logo-gmail.png?cache=1adba63" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 28%;max-width: 66.92px;" width="66.92"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
<!--[if (mso)|(IE)]><td align="center" width="359" style="width: 359px;padding: 3px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 2px solid #236fa1;border-bottom: 0px solid transparent;" valign="top"><![endif]-->
<div class="u-col u-col-60p17" style="max-width: 320px;min-width: 361px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 3px;border-top: 0px solid transparent;border-left: 0px solid transparent;border-right: 2px solid #236fa1;border-bottom: 0px solid transparent;"><!--<![endif]-->
  
<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:3px;font-family:'Open Sans',sans-serif;" align="left">
        
<div align="left">
  <!--[if mso]><table width="100%" cellpadding="0" cellspacing="0" border="0" style="border-spacing: 0; border-collapse: collapse; mso-table-lspace:0pt; mso-table-rspace:0pt;font-family:'Open Sans',sans-serif;"><tr><td style="font-family:'Open Sans',sans-serif;" align="left"><v:roundrect xmlns:v="urn:schemas-microsoft-com:vml" xmlns:w="urn:schemas-microsoft-com:office:word" href="http://localhost:3000/" style="height:65px; v-text-anchor:middle; width:285px;" arcsize="3%" stroke="f" fillcolor="#ffffff"><w:anchorlock/><center style="color:#1d577c;font-family:'Open Sans',sans-serif;"><![endif]-->
    <a href="http://localhost:3000/" target="_self" style="box-sizing: border-box;display: inline-block;font-family:'Open Sans',sans-serif;text-decoration: none;-webkit-text-size-adjust: none;text-align: center;color: #1d577c; background-color: #ffffff; border-radius: 2px; -webkit-border-radius: 2px; -moz-border-radius: 2px; width:82%; max-width:100%; overflow-wrap: break-word; word-break: break-word; word-wrap:break-word; mso-border-alt: none;border-top-width: 0px; border-top-style: solid; border-left-width: 0px; border-left-style: solid; border-right-width: 0px; border-right-style: solid; border-bottom-width: 0px; border-bottom-style: solid; border-bottom-color: #f1c40f;">
      <span style="display:block;padding:27px 45px 9px 0px;line-height:120%;"><span style="text-decoration: underline; font-size: 24px; line-height: 28.8px;"><span style="line-height: 28.8px; font-family: Pacifico, cursive; font-size: 24px;">CRM Авторизация</span></span></span>
    </a>
  <!--[if mso]></center></v:roundrect></td></tr></table><![endif]-->
</div>

      </td>
    </tr>
  </tbody>
</table>

  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>



<div class="u-row-container" style="padding: 0px;background-color: transparent">
  <div class="u-row" style="Margin: 0 auto;min-width: 320px;max-width: 600px;overflow-wrap: break-word;word-wrap: break-word;word-break: break-word;background-color: transparent;">
    <div style="border-collapse: collapse;display: table;width: 100%;background-color: transparent;">
      <!--[if (mso)|(IE)]><table width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td style="padding: 0px;background-color: transparent;" align="center"><table cellpadding="0" cellspacing="0" border="0" style="width:600px;"><tr style="background-color: transparent;"><![endif]-->
      
<!--[if (mso)|(IE)]><td align="center" width="596" style="width: 596px;padding: 0px;border-top: 0px solid transparent;border-left: 2px solid #236fa1;border-right: 2px solid #236fa1;border-bottom: 2px solid #236fa1;" valign="top"><![endif]-->
<div class="u-col u-col-100" style="max-width: 320px;min-width: 600px;display: table-cell;vertical-align: top;">
  <div style="width: 100% !important;">
  <!--[if (!mso)&(!IE)]><!--><div style="padding: 0px;border-top: 0px solid transparent;border-left: 2px solid #236fa1;border-right: 2px solid #236fa1;border-bottom: 2px solid #236fa1;"><!--<![endif]-->
  
<table style="font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
        
<table width="100%" cellpadding="0" cellspacing="0" border="0">
  <tr>
    <td style="padding-right: 0px;padding-left: 0px;" align="center">
      
      <img align="center" border="0" src="https://storage.googleapis.com/twg-content/original_images/GoogleTrends.png" alt="Image" title="Image" style="outline: none;text-decoration: none;-ms-interpolation-mode: bicubic;clear: both;display: inline-block !important;border: none;height: auto;float: none;width: 100%;max-width: 580px;" width="580"/>
      
    </td>
  </tr>
</table>

      </td>
    </tr>
  </tbody>
</table>
<!--[if !mso]><!-->
<table class="hide-desktop" style="display: none;mso-hide: all;font-family:'Open Sans',sans-serif;" role="presentation" cellpadding="0" cellspacing="0" width="100%" border="0">
  <tbody>
    <tr>
      <td style="overflow-wrap:break-word;word-break:break-word;padding:10px;font-family:'Open Sans',sans-serif;" align="left">
        
  <table height="0px" align="center" border="0" cellpadding="0" cellspacing="0" width="100%" style="border-collapse: collapse;table-layout: fixed;border-spacing: 0;mso-table-lspace: 0pt;mso-table-rspace: 0pt;vertical-align: top;border-top: 1px solid #000000;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
    <tbody>
      <tr style="vertical-align: top">
        <td style="word-break: break-word;border-collapse: collapse !important;vertical-align: top;font-size: 0px;line-height: 0px;mso-line-height-rule: exactly;-ms-text-size-adjust: 100%;-webkit-text-size-adjust: 100%">
          <span>&#160;</span>
        </td>
      </tr>
    </tbody>
  </table>

      </td>
    </tr>
  </tbody>
</table>
<!--<![endif]-->
  <!--[if (!mso)&(!IE)]><!--></div><!--<![endif]-->
  </div>
</div>
<!--[if (mso)|(IE)]></td><![endif]-->
      <!--[if (mso)|(IE)]></tr></table></td></tr></table><![endif]-->
    </div>
  </div>
</div>


    <!--[if (mso)|(IE)]></td></tr></table><![endif]-->
    </td>
  </tr>
  </tbody>
  </table>
  <!--[if mso]></div><![endif]-->
  <!--[if IE]></div><![endif]-->
</body>

</html>
  `,
        };

        let info = await transporter.sendMail(message);
        console.log("Message sent successfully!");
        transporter.close();
      }

      main().catch((err) => {
        console.error(err.message);
        process.exit(1);
      });
      return res.json(newUser);
    }
  } catch (err) {
    return res.sendStatus(403);
  }
});
router.get("/workers", async (req, res) => {
  const workers = await User.find();
  // console.log("WORKERS==>", workers);
  return res.json(workers);
});

router.post("/workers/add/:id", async (req, res) => {
  const { id: _id } = req.params;

  try {
    const user = await User.findById(_id);
    const nowAdmin = await User.findByIdAndUpdate(
      _id,
      {
        isAdmin: !user.isAdmin,
      },
      { new: true }
    );
    res.json(nowAdmin);
  } catch (err) {
    return res.sendStatus(403);
  }
});

router.post("/clients/new/:id", async (req, res) => {
  const { id: _id } = req.params;
  try {
    const client = await Clients.findById(_id);
    const thisClient = await Clients.findByIdAndUpdate(
      _id,
      {
        isDelete: !client.isDelete,
      },
      { new: true }
    );
    res.json(thisClient);
  } catch (err) {
    return res.sendStatus(403);
  }
});

router.get("/clients", async (req, res) => {
  const allDeletedClients = await Clients.find({ isDelete: true });
  console.log("allDeletedClients===>>>>", allDeletedClients);
  return res.json(allDeletedClients);
});
router.delete("/clients/:id", async (req, res) => {
  await Clients.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});

router.get("/orders", async (req, res) => {
  const allDeletedOrders = await Orders.find({ isDelete: true });
  return res.json(allDeletedOrders);
});

router.post("/orders/new/:id", async (req, res) => {
  const { id: _id } = req.params;
  console.log(req.params);
  try {
    const client = await Orders.findById(_id);
    const thisClient = await Orders.findByIdAndUpdate(
      _id,
      {
        isDelete: !client.isDelete,
      },
      { new: true }
    );
    console.log(thisClient);
    res.json(thisClient);
  } catch (err) {
    return res.sendStatus(403);
  }
});
router.delete("/orders/:id", async (req, res) => {
  await Orders.findByIdAndDelete(req.params.id);
  res.sendStatus(200);
});
module.exports = router;
