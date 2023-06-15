package Java.DoAnLapTrinhJava.Travel.Service;

import jakarta.mail.MessagingException;

import java.io.IOException;
import java.nio.file.Path;

public interface EmailService {
    public void sendEmailWithImages(String recipient) throws MessagingException, IOException;
}
