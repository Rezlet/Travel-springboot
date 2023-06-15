package Java.DoAnLapTrinhJava.Travel.Controller;

import Java.DoAnLapTrinhJava.Travel.Enity.User;
import Java.DoAnLapTrinhJava.Travel.Service.UserService;
import Java.DoAnLapTrinhJava.Travel.Servicelmpl.UserServicelmpl;
import jakarta.persistence.Id;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/user")
@CrossOrigin(
        origins = {"http://localhost:8080", "http://localhost:3000"},
        allowedHeaders = {"Authorization", "Cache-Control", "Content-Type"},
        methods = {RequestMethod.GET, RequestMethod.POST},
        maxAge = 3600,
        allowCredentials = "true"
)
public class UserController {
    @Autowired
    UserServicelmpl userServicelmpl;

    @PostMapping("/register")
    public ResponseEntity<User> createUser(@ModelAttribute User user) {
        userServicelmpl.saveUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @GetMapping("/")
    public ResponseEntity<List<User>> getAllUser(){
        List<User> userlst = userServicelmpl.getAllUser();
        return new ResponseEntity<>(userlst, HttpStatus.OK);
    }

    @PutMapping("/:id")
    public ResponseEntity<User> updateUser(@RequestBody User user){
        userServicelmpl.saveUser(user);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @DeleteMapping("/:id")
    public ResponseEntity<User> deleteUser(@RequestBody Long id ){
        userServicelmpl.deleteUserById(id);
        return  new ResponseEntity<>(HttpStatus.OK);
    }



}
