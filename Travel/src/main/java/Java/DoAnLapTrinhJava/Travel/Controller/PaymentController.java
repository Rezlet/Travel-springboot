package Java.DoAnLapTrinhJava.Travel.Controller;


import Java.DoAnLapTrinhJava.Travel.Config.Config;

import Java.DoAnLapTrinhJava.Travel.Enity.Payment;
import Java.DoAnLapTrinhJava.Travel.Enity.Tour;
import Java.DoAnLapTrinhJava.Travel.Enity.User;
import Java.DoAnLapTrinhJava.Travel.Model.PaymentModel;
import Java.DoAnLapTrinhJava.Travel.Model.PaymentRequestModel;
import Java.DoAnLapTrinhJava.Travel.Repository.PaymentRepository;
import Java.DoAnLapTrinhJava.Travel.Service.PaymentService;
import Java.DoAnLapTrinhJava.Travel.Service.TourService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import jakarta.servlet.http.HttpServletRequest;

import javax.swing.text.html.Option;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.*;

@RestController
@RequestMapping("/api/payment")
@CrossOrigin(
        origins = {"http://localhost:8080", "http://localhost:3000"},
        allowedHeaders = {"Authorization", "Cache-Control", "Content-Type"},
        methods = {RequestMethod.GET, RequestMethod.POST},
        maxAge = 3600,
        allowCredentials = "true"
)
public class PaymentController {
    @Autowired
    PaymentService paymentService;
    @Autowired
    PaymentRepository paymentRepository;
    @Autowired
    TourService tourService;

    @PostMapping("/create-payment-deposit")
    public ResponseEntity<User> createPayment(@RequestBody PaymentModel paymentModel) {
        System.out.println(paymentModel.getUserId());
        System.out.println(paymentModel.getTourId());
        Tour tour = tourService.getTourById(paymentModel.getTourId());
        Payment payment = new Payment();
        payment.setTransactionId(paymentModel.getTransactionId());
        payment.setAmount(paymentModel.getReceived());
        payment.setDescription(paymentModel.getDescription());
        payment.setUserId(paymentModel.getUserId());
        payment.setQuantity(paymentModel.getQuantity());
        payment.setStatus(paymentModel.getStatus());
            payment.setTour(tour);
        paymentRepository.save(payment);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PostMapping("/create_payment")
    public ResponseEntity<?> doPost(HttpServletRequest req, @RequestBody PaymentRequestModel payment) throws IOException {
        String vnp_Version = "2.1.0";
        String vnp_Command = "pay";
        String vnp_TxnRef = Config.getRandomNumber(8);
        String vnp_IpAddr = Config.getIpAddress(req);
        String vnp_TmnCode = Config.vnp_TmnCode;

        String money = payment.getMoney();
//        System.out.println(tourId);
//        System.out.println(money);
//        long amount = 10000000;

        int amount = Integer.parseInt(money) * 100;
        Map vnp_Params = new HashMap<>();
        vnp_Params.put("vnp_Version", vnp_Version);
        vnp_Params.put("vnp_Command", vnp_Command);
        vnp_Params.put("vnp_TmnCode", vnp_TmnCode);
        vnp_Params.put("vnp_Amount", String.valueOf(amount));
        vnp_Params.put("vnp_CurrCode", "VND");
        vnp_Params.put("vnp_TxnRef", vnp_TxnRef);
        vnp_Params.put("vnp_OrderInfo", "Thanh toan don hang:" + vnp_TxnRef);

        String locate = req.getParameter("language");
        if (locate != null && !locate.isEmpty()) {
            vnp_Params.put("vnp_Locale", locate);
        } else {
            vnp_Params.put("vnp_Locale", "vn");
        }
        vnp_Params.put("vnp_ReturnUrl", Config.vnp_Returnurl +"?tourId=" + payment.getTourId()+"&userId=" + payment.getUserId() + "&quantity=" +payment.getQuantity());
        vnp_Params.put("vnp_IpAddr", vnp_IpAddr);
        Calendar cld = Calendar.getInstance(TimeZone.getTimeZone("Etc/GMT+7"));

        SimpleDateFormat formatter = new SimpleDateFormat("yyyyMMddHHmmss");
        String vnp_CreateDate = formatter.format(cld.getTime());

        vnp_Params.put("vnp_CreateDate", vnp_CreateDate);
        cld.add(Calendar.MINUTE, 15);
        String vnp_ExpireDate = formatter.format(cld.getTime());

        List fieldNames = new ArrayList(vnp_Params.keySet());
        Collections.sort(fieldNames);
        StringBuilder hashData = new StringBuilder();
        StringBuilder query = new StringBuilder();
        Iterator itr = fieldNames.iterator();
        while (itr.hasNext()) {
            String fieldName = (String) itr.next();
            String fieldValue = (String) vnp_Params.get(fieldName);
            if ((fieldValue != null) && (fieldValue.length() > 0)) {
                //Build hash data
                hashData.append(fieldName);
                hashData.append('=');
                hashData.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                //Build query
                query.append(URLEncoder.encode(fieldName, StandardCharsets.US_ASCII.toString()));
                query.append('=');
                query.append(URLEncoder.encode(fieldValue, StandardCharsets.US_ASCII.toString()));
                if (itr.hasNext()) {
                    query.append('&');
                    hashData.append('&');
                }
            }
        }
        String queryUrl = query.toString();
        String vnp_SecureHash = Config.hmacSHA512(Config.vnp_HashSecret, hashData.toString());
        queryUrl += "&vnp_SecureHash=" + vnp_SecureHash;
        String paymentUrl = Config.vnp_PayUrl + "?" + queryUrl;
        return ResponseEntity.status(HttpStatus.OK).body(paymentUrl);

    }


}
