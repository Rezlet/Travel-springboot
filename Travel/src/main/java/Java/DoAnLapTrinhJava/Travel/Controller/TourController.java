package Java.DoAnLapTrinhJava.Travel.Controller;

import Java.DoAnLapTrinhJava.Travel.Config.ImageNameGenerator;
import Java.DoAnLapTrinhJava.Travel.Enity.Tour;
import Java.DoAnLapTrinhJava.Travel.Enity.User;
import Java.DoAnLapTrinhJava.Travel.Model.TourModel;
import Java.DoAnLapTrinhJava.Travel.Repository.TourRepository;
import Java.DoAnLapTrinhJava.Travel.Servicelmpl.TourServicelmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/tours")
@CrossOrigin(
        origins = {"http://localhost:8080", "http://localhost:3000"},
        allowedHeaders = {"Authorization", "Cache-Control", "Content-Type"},
        methods = {RequestMethod.GET, RequestMethod.POST},
        maxAge = 3600,
        allowCredentials = "true"
)
public class TourController {
    @Autowired
    TourServicelmpl tourServicelmpl;
    @Autowired
    TourRepository tourRepository;

    @PostMapping("/createTour")
    public Tour createTour(@ModelAttribute TourModel tourModel) {

        // Generate a unique image name
        String imageName = ImageNameGenerator.generateUniqueImageName();

        // Save the image to the upload directory with the unique name
        String filename = StringUtils.cleanPath(imageName + "_" + tourModel.getFile().getOriginalFilename());
        Path uploadPath = Paths.get("./src/upload/");
        try {
            Files.copy(tourModel.getFile().getInputStream(), uploadPath.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
        } catch (IOException e) {
            e.printStackTrace();
            // Handle the exception
        }

        // Create the tour object
        Tour tour = new Tour();
        tour.setCity(tourModel.getCity());
        tour.setDescription(tourModel.getDescription());
        tour.setAddress(tourModel.getAddress());
        tour.setDistance(tourModel.getDistance());
        tour.setTitle(tourModel.getTitle());
        tour.setMaxGroupSize(tourModel.getMaxGroupSize());
        tour.setFeatured(tourModel.getFeatured());
        tour.setPrice(tourModel.getPrice());
        tour.setPhoto("uploads/"+filename); // Use the getImageUrl method to get the complete image URL

        // Save the tour to the database
        Tour savedTour = tourRepository.save(tour);

        return savedTour;
    }

    @GetMapping("/get-all")
    public ResponseEntity<List<Tour>> getAllTour(){
        List<Tour> tourslst = tourServicelmpl.getAllTour();
        return new ResponseEntity<>(tourslst, HttpStatus.OK);
    }

    @GetMapping("/get-by-id/{id}")
    public ResponseEntity<Optional<Tour>> getTourById(@PathVariable("id") Long id){
        Optional<Tour> tour = tourRepository.findById(id);

        return ResponseEntity.ok(tour);
    }

    @PutMapping("/:id")
    public ResponseEntity<User> updateUser(@RequestBody Tour tour){
        tourServicelmpl.saveTours(tour);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/:id")
    public ResponseEntity<User> deleteUser(@RequestBody Long id ){
        tourServicelmpl.deleteTourById(id);
        return  new ResponseEntity<>(HttpStatus.OK);
    }
}
