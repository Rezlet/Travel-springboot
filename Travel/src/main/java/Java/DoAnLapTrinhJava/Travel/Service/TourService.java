package Java.DoAnLapTrinhJava.Travel.Service;

import Java.DoAnLapTrinhJava.Travel.Enity.Tour;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface TourService {
    public List<Tour> getAllTour();
    public Optional<Tour> getToursById(Long id);
    public Tour getTourById(Long id);

    public void saveTours(Tour tour);

    public void deleteTourById(Long id);
}
