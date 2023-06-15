package Java.DoAnLapTrinhJava.Travel.Repository;

import Java.DoAnLapTrinhJava.Travel.Enity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReviewsRepository extends JpaRepository<Review, Long> {
}
