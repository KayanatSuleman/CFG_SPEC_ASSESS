''' Please refer to CFG_SPEC_ASSESSMENT as uploaded to Slack for further details. '''
def is_palindrome(string):
    string = string.replace(" ", "").lower()
    return string == string[::-1]

user_input = input("Enter a string: ")
if is_palindrome(user_input):
    print("The string is a palindrome.")
else:
    print("The string is not a palindrome.")


