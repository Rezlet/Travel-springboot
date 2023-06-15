package Java.DoAnLapTrinhJava.Travel.Servicelmpl;

import Java.DoAnLapTrinhJava.Travel.Enity.Review;
import Java.DoAnLapTrinhJava.Travel.Service.ReviewService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
@Service
public class ReviewServicelmpl implements ReviewService {
    @Autowired
    ReviewServicelmpl reviewServicelmpl;

    @Override
    public List<Review> getAllReview() {
        return reviewServicelmpl.getAllReview();
    }

    @Override
    public Optional<Review> getReviewById(Long id) {
        return Optional.empty();
    }

    @Override
    public void saveReview(Review review) {
        reviewServicelmpl.saveReview(review);
    }

    @Override
    public void deleteReviewById(Long id) {
        reviewServicelmpl.deleteReviewById(id);
    }
}
