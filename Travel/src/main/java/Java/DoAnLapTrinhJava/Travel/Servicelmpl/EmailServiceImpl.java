package Java.DoAnLapTrinhJava.Travel.Servicelmpl;

import Java.DoAnLapTrinhJava.Travel.Service.EmailService;
import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;

import java.io.IOException;
@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private final JavaMailSender mailSender;

    @Autowired
    public EmailServiceImpl(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }
    public void sendEmailWithImages(String recipient) throws MessagingException, IOException {
        String subject = "Voucher Discount Summer";
        String message = "<html>\n" +
                "<head>\n" +
                "    <meta charset=\"UTF-8\">\n" +
                "    <title>Email Template</title>\n" +
                "    <style>\n" +
                "        /* CSS Reset */\n" +
                "        body, table, td, p, a, h1, h2, h3, h4, h5, h6 {\n" +
                "            margin: 0;\n" +
                "            padding: 0;\n" +
                "        }\n" +
                "\n" +
                "        body {\n" +
                "            font-family: Arial, sans-serif;\n" +
                "            font-size: 14px;\n" +
                "            line-height: 1.6;\n" +
                "            color: #555;\n" +
                "        }\n" +
                "\n" +
                "        table {\n" +
                "            border-collapse: collapse;\n" +
                "        }\n" +
                "\n" +
                "        /* Email Wrapper */\n" +
                "        .email-wrapper {\n" +
                "            width: 100%;\n" +
                "            max-width: 600px;\n" +
                "            margin: 0 auto;\n" +
                "            background-color: #f7f7f7;\n" +
                "        }\n" +
                "\n" +
                "        /* Header */\n" +
                "        .header {\n" +
                "            padding: 30px;\n" +
                "            text-align: center;\n" +
                "            background-color: #f2f2f2;\n" +
                "        }\n" +
                "\n" +
                "        .header h1 {\n" +
                "            color: #333;\n" +
                "            font-size: 24px;\n" +
                "            line-height: 1.3;\n" +
                "            margin-bottom: 10px;\n" +
                "        }\n" +
                "\n" +
                "        /* Content */\n" +
                "        .content {\n" +
                "            padding: 30px;\n" +
                "            background-color: #ffffff;\n" +
                "        }\n" +
                "\n" +
                "        .content p {\n" +
                "            margin-bottom: 15px;\n" +
                "        }\n" +
                "\n" +
                "        /* Button */\n" +
                "        .button {\n" +
                "            display: inline-block;\n" +
                "            padding: 10px 20px;\n" +
                "            background-color: #ccc;\n" +
                "            color: #fff;\n" +
                "            text-decoration: none;\n" +
                "            border-radius: 4px;\n" +
                "            transition: background-color 0.3s ease;\n" +
                "        }\n" +
                "\n" +
                "        .button:hover {\n" +
                "            background-color: blue;\n" +
                "            color: #fff" +
                "        }\n" +
                "\n" +
                "        /* Footer */\n" +
                "        .footer {\n" +
                "            padding: 30px;\n" +
                "            text-align: center;\n" +
                "            background-color: #f2f2f2;\n" +
                "        }\n" +
                "\n" +
                "        .footer p {\n" +
                "            color: #777;\n" +
                "        }\n" +
                "    </style>\n" +
                "</head>\n" +
                "<body>\n" +
                "    <div class=\"email-wrapper\">\n" +
                "        <div class=\"header\">\n" +
                "            <h1>Welcome to our Newsletter!</h1>\n" +
                "        </div>\n" +
                "        <div class=\"content\">\n" +
                "            <p>Dear Subscriber,</p>\n" +
                "            <p>We are excited to bring you the latest updates and news from our company. Stay tuned for upcoming events, product releases, and exclusive offers.</p>\n" +
                "            <p>Thank you for subscribing to our newsletter!</p>\n" +
                "            <p>\n" +
                "                <a class=\"button\" href=\"https://www.facebook.com/ta.loi.9235\">Trang chủ</a>\n" +
                "            </p>\n" +
                "        </div>\n" +
                "        <div class=\"footer\">\n" +
                "            <p>© 2023 Your Company. All rights reserved.</p>\n" +
                "        </div>\n" +
                "    </div>\n" +
                "</body>\n" +
                "</html>";

        try {
            MimeMessage mimeMessage = mailSender.createMimeMessage();
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo(recipient);
            helper.setSubject(subject);
            helper.setText(message, true);

            mailSender.send(mimeMessage);
        } catch (Exception e) {
            e.printStackTrace();
        }

    };
}
