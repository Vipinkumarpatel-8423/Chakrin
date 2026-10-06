export const contactEmailTemplate = ({
  name,
  email,
  phone,
  subject,
  message,
}) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />

        <style>
          body {
            margin: 0;
            padding: 0;
            background: #f5f5f5;
            font-family: Arial, Helvetica, sans-serif;
          }

          .container {
            max-width: 650px;
            margin: 40px auto;
            background: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 5px 25px rgba(0,0,0,0.08);
          }

          .header {
            padding: 25px;
            background: #a63d82;
            color: #ffffff;
          }

          .header h1 {
            margin: 0;
            font-size: 22px;
          }

          .content {
            padding: 30px;
          }

          .row {
            padding: 14px 0;
            border-bottom: 1px solid #eeeeee;
          }

          .label {
            font-weight: bold;
            color: #555555;
          }

          .value {
            margin-top: 5px;
            color: #222222;
          }

          .message {
            margin-top: 10px;
            padding: 15px;
            background: #f8f8f8;
            border-radius: 8px;
            line-height: 1.6;
          }

          .footer {
            padding: 20px;
            text-align: center;
            font-size: 12px;
            color: #888888;
          }
        </style>
      </head>

      <body>

        <div class="container">

          <div class="header">
            <h1>New Website Enquiry</h1>
          </div>

          <div class="content">

            <div class="row">
              <div class="label">Name</div>
              <div class="value">${name}</div>
            </div>

            <div class="row">
              <div class="label">Email</div>
              <div class="value">${email}</div>
            </div>

            <div class="row">
              <div class="label">Phone</div>
              <div class="value">${phone}</div>
            </div>

            <div class="row">
              <div class="label">Subject</div>
              <div class="value">${subject || "Website Enquiry"}</div>
            </div>

            <div class="row">
              <div class="label">Message</div>

              <div class="message">
                ${message}
              </div>
            </div>

          </div>

          <div class="footer">
            This enquiry was submitted through the Chakrin Digital Textiles website.
          </div>

        </div>

      </body>
    </html>
  `;
};