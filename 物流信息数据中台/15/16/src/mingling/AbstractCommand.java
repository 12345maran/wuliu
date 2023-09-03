package mingling;

public abstract class AbstractCommand {
    public abstract int execute(int value);
    public abstract int undo();
    public abstract int redo();
}