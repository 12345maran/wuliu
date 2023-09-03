package mingling;

public class ConcreteCommand extends AbstractCommand{
        private int[] a=new int[50];
        private int i=0;

        private Adder adder=new Adder();
        private int value;

        @Override
        public int execute(int value) {

            this.value = value;
            a[i] = value;
            i++;
            return adder.add(value);

        }

        @Override
        public int undo() {
            if(i-->=0)
            {    i--;
                return adder.add(-a[i]);}
            else
            {
                System.out.println("不能撤销了o~");
                return adder.add(0);
            }
        }

        @Override
        public int redo() {
            i++;
            return adder.add(a[i-1]);
        }
    }