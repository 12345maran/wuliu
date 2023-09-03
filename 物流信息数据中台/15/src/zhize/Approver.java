package zhize;

public abstract class Approver {
    Approver approver;
    String position;
    public Approver(String position){
        this.position = position;
    }
    public void setApprover(Approver approver){
        this.approver = approver;
    }
    public abstract void processRequest(PurchaseRequest purchaseRequest);
}
