package mingling;

public class CalculatorForm {
    private AbstractCommand command;
    public void setCommand(AbstractCommand command){
        this.command=command;
    }
    public void computer(int value){
        int i=command.execute(value);
        System.out.println("执行运算，运算结果为："+i);
    }
    public void undo(){
        int i=command.undo();
        System.out.println("执行撤销，运算结果为："+i);
    }
    public void redo(){
        int i=command.redo();
        System.out.println("取消撤销，运算结果为："+i);
    }
}