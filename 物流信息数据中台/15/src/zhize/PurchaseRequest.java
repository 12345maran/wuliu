package zhize;

public class PurchaseRequest {

    private int type;
    private float price;
    private int id;

    public PurchaseRequest(int type, float price, int id) {
        this.type = type;
        this.price = price;
        this.id = id;
    }

    public int getType() {
        return type;
    }

    @Override
    public String toString() {
        return this.getId() + "号物资" + this.getPrice() + "元";
    }

    public float getPrice() {
        return price;
    }

    public int getId() {
        return id;
    }
}
