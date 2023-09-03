package zhize;

public class Director extends Approver {

    public Director(String name) {
        super(name);
    }

    @Override
    public void setApprover(Approver approver) {
        super.setApprover(approver);
    }

    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() <= 10000) {
            System.out.println("请求编号id => " + purchaseRequest.getId() + "被" + this.position + "处理");
        } else {
            approver.processRequest(purchaseRequest);
        }

    }
}
