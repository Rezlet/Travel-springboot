package Java.DoAnLapTrinhJava.Travel.Servicelmpl;

import Java.DoAnLapTrinhJava.Travel.Enity.Payment;
import Java.DoAnLapTrinhJava.Travel.Repository.PaymentRepository;
import Java.DoAnLapTrinhJava.Travel.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Autowired
    PaymentRepository paymentRepository;

    public void savePayment(Payment payment) {
        paymentRepository.save(payment);
    }
}
