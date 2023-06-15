package Java.DoAnLapTrinhJava.Travel.Repository;

import Java.DoAnLapTrinhJava.Travel.Enity.Payment;
import Java.DoAnLapTrinhJava.Travel.Enity.Review;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PaymentRepository extends JpaRepository<Payment, Long> {
}
