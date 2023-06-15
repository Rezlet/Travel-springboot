package Java.DoAnLapTrinhJava.Travel.Enity;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "payment")
public class Payment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "transactionId")
    private String TransactionId;

    @Column(name = "amount")
    private Integer Amount;

    @Column(name = "description")
    private String Description;

    @Column(name = "status")
    private String Status;

    @Column(name = "quantity")
    private String Quantity;

    @Column(name = "received")
    private String Received;

    @Column(name = "images")
    private String Images;

    private String userId;

    @ManyToOne
    @JoinColumn(name = "tour_id", nullable = false)
    private Tour tour;
}
