package Java.DoAnLapTrinhJava.Travel.Repository;

import Java.DoAnLapTrinhJava.Travel.Enity.User;
import jakarta.transaction.Transactional;
import org.springframework.data.jpa.repository.JpaRepository;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.math.BigDecimal;
import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

}
