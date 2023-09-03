package mingling;

public class Client {
    public static void main(String[] args) {
        CalculatorForm form=new CalculatorForm();

        AbstractCommand command;
        command=new ConcreteCommand();//重构这行代码，可以更换具体命令类
        form.setCommand(command);

        form.computer(10);
        form.computer(5);
        form.undo();
        form.undo();
        form.redo();
        form.computer(3);
    }
}