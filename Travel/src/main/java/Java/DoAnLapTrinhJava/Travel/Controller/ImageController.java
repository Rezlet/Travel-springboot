package Java.DoAnLapTrinhJava.Travel.Controller;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import jakarta.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

@Controller
@RequestMapping("/uploads")
public class ImageController {

    @GetMapping("/{imageName:.+}")
    public void getImage(@PathVariable String imageName, HttpServletResponse response) throws IOException {
        // Resolve the image path
        Path imagePath = Paths.get("src/upload/", imageName);

        // Check if the image file exists
        if (Files.exists(imagePath)) {
            // Set content type header
            response.setContentType("image/jpeg");

            // Copy image bytes to response
            Files.copy(imagePath, response.getOutputStream());
            response.getOutputStream().flush();
        } else {
            // Image file not found, handle accordingly
            response.sendError(HttpServletResponse.SC_NOT_FOUND);
        }
    }
}

