package Java.DoAnLapTrinhJava.Travel.Config;
import java.time.LocalDateTime;
import java.util.UUID;

public class ImageNameGenerator {
    public static String generateUniqueImageName() {
        // Generate a unique ID using UUID
        String uniqueId = UUID.randomUUID().toString();

        // Get the current timestamp
        LocalDateTime now = LocalDateTime.now();

        // Create the image name by combining the unique ID and timestamp
        String imageName = uniqueId + "_" + now.toString();

        // Replace any non-alphanumeric characters with underscores
        imageName = imageName.replaceAll("[^a-zA-Z0-9]", "_");

        return imageName;
    }
}
