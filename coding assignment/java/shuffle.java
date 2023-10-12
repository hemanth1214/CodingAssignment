import java.util.Random;

public class shuffle 
{
    public static void main(String[] args) 
    {
        int[] myArray = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(myArray);
        for (int value : myArray) 
        {
            System.out.print(value + " ");
        }
    }
    public static void shuffleArray(int[] array) 
    {
        Random r = new Random();
        for (int i = array.length - 1; i > 0; i--) 
        {
            int j = r.nextInt(i + 1);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}
