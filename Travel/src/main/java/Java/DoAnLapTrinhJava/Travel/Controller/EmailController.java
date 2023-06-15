package Java.DoAnLapTrinhJava.Travel.Controller;


import Java.DoAnLapTrinhJava.Travel.Model.EmailRequestModel;
import Java.DoAnLapTrinhJava.Travel.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import jakarta.mail.MessagingException;
import java.io.IOException;
import java.nio.file.Path;

@RestController
@RequestMapping("/email")
@CrossOrigin(
        origins = {"http://localhost:8080", "http://localhost:3000"},
        allowedHeaders = {"Authorization", "Cache-Control", "Content-Type"},
        methods = {RequestMethod.GET, RequestMethod.POST},
        maxAge = 3600,
        allowCredentials = "true"
)
public class EmailController {

    private final EmailService emailService;

    @Autowired
    public EmailController(EmailService emailService) {
        this.emailService = emailService;
    }

    @PostMapping("/send-email")
    public ResponseEntity<String> sendEmailWithImages(@ModelAttribute EmailRequestModel request) {
        String recipient = request.getRecipient();

        try {
            emailService.sendEmailWithImages(recipient);
            return ResponseEntity.ok("Email sent successfully");
        } catch (IOException | MessagingException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to send email: " + e.getMessage());
        }
    }
}

