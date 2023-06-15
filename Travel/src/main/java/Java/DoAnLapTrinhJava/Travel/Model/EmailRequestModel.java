package Java.DoAnLapTrinhJava.Travel.Model;

import java.nio.file.Path;
public class EmailRequestModel {
    private String recipient;
    private String subject;
    private String message;
    private Path[] imagePaths;

    // Add getters and setters

    // Constructor
    public EmailRequestModel() {
    }

    public String getRecipient() {
        return recipient;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public String getSubject() {
        return subject;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Path[] getImagePaths() {
        return imagePaths;
    }

    public void setImagePaths(Path[] imagePaths) {
        this.imagePaths = imagePaths;
    }

    // Constructor with parameters
    public EmailRequestModel(String recipient, String subject, String message, Path[] imagePaths) {
        this.recipient = recipient;
        this.subject = subject;
        this.message = message;
        this.imagePaths = imagePaths;
    }
}
