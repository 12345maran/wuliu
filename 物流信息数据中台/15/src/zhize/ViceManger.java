package zhize;

public class ViceManger extends Approver {

    public ViceManger(String name) {
        super(name);
    }

    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() > 50000 && purchaseRequest.getPrice() <= 100000) {
            System.out.println("请求编号id => " + purchaseRequest.getId() + "被" + this.position + "处理");
        } else {
            approver.processRequest(purchaseRequest);
        }

    }
}
