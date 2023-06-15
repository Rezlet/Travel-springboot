package Java.DoAnLapTrinhJava.Travel.Model;
public class PaymentRequestModel {
    private String money;

    private String userId;

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    private Long tourId;
    private Integer quantity;

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }



    public Long getTourId() {
        return tourId;
    }

    public void setTourId(Long tourId) {
        this.tourId = tourId;
    }


    public String getMoney() {
        return money;
    }

    public void setMoney(String money) {
        this.money = money;
    }
}