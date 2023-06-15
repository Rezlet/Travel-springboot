package Java.DoAnLapTrinhJava.Travel.Service;

import Java.DoAnLapTrinhJava.Travel.Enity.Payment;
import org.springframework.stereotype.Service;

@Service
public interface PaymentService {
    public void savePayment(Payment payment);
}
