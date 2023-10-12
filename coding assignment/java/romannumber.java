import java.util.Scanner;

public class romannumber
{
    public static void main(String[] args) 
    {
        Scanner sc = new Scanner(System.in);
        
        System.out.print("Enter a Roman number: ");
        String romanNumber = sc.nextLine();
        
        int result = romanToInteger(romanNumber);
        System.out.println("The integer value of " + romanNumber + " is: " + result);
    }

    public static int romanToInteger(String s) 
    {
        int result = 0;

        for (int i = 0; i < s.length(); i++) 
        {
            char currentChar = s.charAt(i);
            int currentValue = getValue(currentChar);

            if (i < s.length() - 1) 
            {
                char nextChar = s.charAt(i + 1);
                int nextValue = getValue(nextChar);

                if (currentValue < nextValue) 
                {
                    result -= currentValue;
                } else {
                    result += currentValue;
                }
            } else {
                result += currentValue;
            }
        }

        return result;
    }

    public static int getValue(char c) {
        switch (c) {
            case 'I':
                return 1;
            case 'V':
                return 5;
            case 'X':
                return 10;
            case 'L':
                return 50;
            case 'C':
                return 100;
            case 'D':
                return 500;
            case 'M':
                return 1000;
            default:
                return 0;
        }
    }
}
