import java.util.Scanner;

public class panagram {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.print("Enter a sentence: ");
        String input = sc.nextLine();

        boolean isPangram = checkPangram(input);

        if (isPangram) 
        {
            System.out.println("The given input is a pangram: "  +input);
        } else 
        {
            System.out.println("The given input is not a pangram: "  +input);
        }
    }
    public static boolean checkPangram(String input) 
    {
        input = input.toLowerCase();
        for (char c = 'a'; c <= 'z'; c++) 
        {
            if (input.indexOf(c) == -1) 
            {
                return false;
            }
        }
        return true;
    }
}
