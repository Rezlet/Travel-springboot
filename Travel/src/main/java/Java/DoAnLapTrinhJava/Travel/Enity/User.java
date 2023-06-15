    package Java.DoAnLapTrinhJava.Travel.Enity;

import jakarta.persistence.*;
import lombok.Data;

import java.util.Set;

@Entity
@Data
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "Email")
    private String Email;

    @Column(name = "Password")
    private String Password;

    @Column(name = "Role")
    private String Role;

    //User to Review
    @OneToMany(mappedBy = "user", fetch = FetchType.LAZY,
            cascade = CascadeType.ALL)
    private Set<Review> reviews;
}
