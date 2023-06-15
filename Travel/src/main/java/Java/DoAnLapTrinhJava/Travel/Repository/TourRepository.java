package Java.DoAnLapTrinhJava.Travel.Repository;

import Java.DoAnLapTrinhJava.Travel.Enity.Tour;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TourRepository extends JpaRepository<Tour, Long> {
}
