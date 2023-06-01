def find_missing_number():
    arr = []
    n = int(input("Enter the number of elements in the array: "))
    print("Enter the elements of the array (integers from 1 to n):")
    for i in range(n - 1):
        while True:
            try:
                num = int(input(f"Element {i+1}: "))
                if 1 <= num <= n:
                    arr.append(num)
                    break
                else:
                    print("Invalid input. Enter an integer within the specified range.")
            except ValueError:
                print("Invalid input. Enter an integer.")

    expected_sum = (n * (n + 1)) // 2
    actual_sum = sum(arr)
    missing_number = expected_sum - actual_sum
    return missing_number

missing_number = find_missing_number()
if isinstance(missing_number, int):
    print(f"The missing number is: {missing_number}")
else:
    print(missing_number)
