package zhize;

public class GeneralManger extends Approver {

    public GeneralManger(String name) {
        super(name);
    }


    @Override
    public void processRequest(PurchaseRequest purchaseRequest) {
        if (purchaseRequest.getPrice() > 100000 && purchaseRequest.getPrice() <= 200000) {
            System.out.println("请求编号id => " + purchaseRequest.getId() + "被" + this.position + "处理");
        } else {
            System.out.println("需要开员工大会确定");
        }

    }
}
