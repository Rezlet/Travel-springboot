package Java.DoAnLapTrinhJava.Travel.Servicelmpl;

import Java.DoAnLapTrinhJava.Travel.Enity.User;
import Java.DoAnLapTrinhJava.Travel.Repository.UserRepository;
import Java.DoAnLapTrinhJava.Travel.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServicelmpl implements UserService {

    @Autowired
    UserRepository userRepository;

    @Override
    public List<User> getAllUser() {
        return userRepository.findAll();
    }

    @Override
    public Optional<User> getUserById(Long id) {
        return Optional.empty();
    }

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }

    @Override
    public void deleteUserById(Long id) {
        userRepository.deleteById(id);
    }
}
