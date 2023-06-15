package Java.DoAnLapTrinhJava.Travel.Service;


import Java.DoAnLapTrinhJava.Travel.Enity.User;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public interface UserService {
    public List<User> getAllUser();
    public Optional<User> getUserById(Long id);

    public void saveUser(User user);

    public void deleteUserById(Long id);
}
