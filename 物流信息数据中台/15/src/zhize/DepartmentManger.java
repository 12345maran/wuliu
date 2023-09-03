package zhize;

public class DepartmentManger extends Approver {

    public DepartmentManger(String name) {
        super(name);
    }

    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() > 10000 && purchaseRequest.getPrice() <= 50000) {
            System.out.println("请求编号id => " + purchaseRequest.getId() + "被" + this.position + "处理");
        } else {
            approver.processRequest(purchaseRequest);
        }

    }
}