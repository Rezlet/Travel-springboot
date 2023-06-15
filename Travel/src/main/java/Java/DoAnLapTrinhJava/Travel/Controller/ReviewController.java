package Java.DoAnLapTrinhJava.Travel.Controller;

import Java.DoAnLapTrinhJava.Travel.Enity.Review;
import Java.DoAnLapTrinhJava.Travel.Enity.User;
import Java.DoAnLapTrinhJava.Travel.Servicelmpl.ReviewServicelmpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/reviews")
public class ReviewController {
    @Autowired
    ReviewServicelmpl reviewServicelmpl;

    @PostMapping("/create")
    public ResponseEntity<Review> createUser(@RequestBody Review review) {
        reviewServicelmpl.saveReview(review);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<Review>> getAllReviews() {
        List<Review> reviewslst = reviewServicelmpl.getAllReview();
        return new ResponseEntity<>(reviewslst, HttpStatus.OK);
    }

    @PutMapping("/:id")
    public ResponseEntity<Review> updateReviews(@RequestBody Review review) {
        reviewServicelmpl.saveReview(review);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/:id")
    public ResponseEntity<User> deleteUser(@RequestBody Long id) {
        reviewServicelmpl.deleteReviewById(id);
        return new ResponseEntity<>(HttpStatus.OK);
    }
}
