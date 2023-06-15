package Java.DoAnLapTrinhJava.Travel.Servicelmpl;

import Java.DoAnLapTrinhJava.Travel.Enity.Tour;
import Java.DoAnLapTrinhJava.Travel.Repository.TourRepository;
import Java.DoAnLapTrinhJava.Travel.Service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TourServicelmpl implements TourService {

    @Autowired
    TourRepository tourRepository;
    @Override
    public List<Tour> getAllTour() {
        return tourRepository.findAll();
    }

    public Tour getTourById(Long id) {return tourRepository.getById(id);}
    @Override
    public Optional<Tour> getToursById(Long id) {
        return tourRepository.findById(id);
    }

    @Override
    public void saveTours(Tour tour) {
        tourRepository.save(tour);
    }

    @Override
    public void deleteTourById(Long id) {
        tourRepository.deleteById(id);
    }
}
