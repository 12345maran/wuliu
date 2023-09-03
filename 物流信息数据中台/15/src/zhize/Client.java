package zhize;

public class Client {
    public static void main(String[] args) {
        PurchaseRequest purchaseRequest1 = new PurchaseRequest(1, 5600, 1);
        PurchaseRequest purchaseRequest2 = new PurchaseRequest(1, 25620, 2);
        PurchaseRequest purchaseRequest3 = new PurchaseRequest(1, 96541, 3);
        PurchaseRequest purchaseRequest4 = new PurchaseRequest(1, 152345, 4);
        PurchaseRequest purchaseRequest5 = new PurchaseRequest(1, 235685, 5);


        Director director = new Director("主任");
        DepartmentManger departmentManager = new DepartmentManger("部门经理");
        ViceManger viceManager = new ViceManger("副总经理");
        GeneralManger generalManager = new GeneralManger("总经理");

        director.setApprover(departmentManager);
        departmentManager.setApprover(viceManager);
        viceManager.setApprover(generalManager);

        System.out.println(purchaseRequest1.toString());
        director.processRequest(purchaseRequest1);
        System.out.println("-------------------------------");

        System.out.println(purchaseRequest2.toString());
        director.processRequest(purchaseRequest2);
        System.out.println("-------------------------------");

        System.out.println(purchaseRequest3.toString());
        director.processRequest(purchaseRequest3);
        System.out.println("-------------------------------");

        System.out.println(purchaseRequest4.toString());
        director.processRequest(purchaseRequest4);
        System.out.println("-------------------------------");

        System.out.println(purchaseRequest5.toString());
        director.processRequest(purchaseRequest5);
        System.out.println("-------------------------------");

    }
}
