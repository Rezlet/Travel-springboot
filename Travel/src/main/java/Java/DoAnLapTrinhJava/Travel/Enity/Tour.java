package Java.DoAnLapTrinhJava.Travel.Enity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Data
@Entity
@Table(name = "tours")
public class Tour {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "Title")
    private String Title;

    @Column(name = "City")
    private String City;

    @Column(name = "Price")
    private String Price;

    @Column(name = "address")
    private String Address;

    @Column(name = "distance")
    private String Distance;

    @Column(name = "photo")
    private String Photo;

    @Column(name = "description")
    private String Description;

    @Column(name = "maxGroupSize")
    private String MaxGroupSize;

    @Column(name = "featured")
    private String Featured;


    //Tour to Review
//Tour to Review
    @OneToMany(mappedBy = "tour",fetch =FetchType.LAZY ,cascade = CascadeType.ALL)
    private Set<Review> reviews;

    @OneToMany(mappedBy = "tour", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Payment> payments;

}
