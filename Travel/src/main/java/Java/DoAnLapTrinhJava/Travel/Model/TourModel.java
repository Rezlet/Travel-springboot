package Java.DoAnLapTrinhJava.Travel.Model;

import org.springframework.web.multipart.MultipartFile;

public class TourModel {
    private MultipartFile file;
    private String city;
    private String description;
    private String address;
    private String distance;
    private String title;
    private String maxGroupSize;

    public TourModel(MultipartFile file, String city, String description, String address, String distance, String title, String maxGroupSize, String featured, String price) {
        this.file = file;
        this.city = city;
        this.description = description;
        this.address = address;
        this.distance = distance;
        this.title = title;
        this.maxGroupSize = maxGroupSize;
        this.featured = featured;
        this.price = price;
    }

    public TourModel() {

    }

    private String featured;
    private String price;

    public MultipartFile getFile() {
        return file;
    }

    public void setFile(MultipartFile file) {
        this.file = file;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getDistance() {
        return distance;
    }

    public void setDistance(String distance) {
        this.distance = distance;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getMaxGroupSize() {
        return maxGroupSize;
    }

    public void setMaxGroupSize(String maxGroupSize) {
        this.maxGroupSize = maxGroupSize;
    }

    public String getFeatured() {
        return featured;
    }

    public void setFeatured(String featured) {
        this.featured = featured;
    }

    public String getPrice() {
        return price;
    }

    public void setPrice(String price) {
        this.price = price;
    }
}
