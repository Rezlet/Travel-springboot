package Java.DoAnLapTrinhJava.Travel.Service;

import Java.DoAnLapTrinhJava.Travel.Enity.Review;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface ReviewService {
    public List<Review> getAllReview();
    public Optional<Review> getReviewById(Long id);

    public void saveReview(Review review);

    public void deleteReviewById(Long id);
}
