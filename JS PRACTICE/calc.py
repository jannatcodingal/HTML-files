num1=float(input("enter an integer 1: "))
num2=float(input("enter an integer 2: "))
print("choose an operator: ")
operator=print("\n+ addition\n","- subtraction\n","/ division\n"," % modulus\n","* multiplication\n")
choose=input("Choose an operator: ")
if choose=="+":
    print(num1+num2)
elif choose=="-":
    print(num1-num2)
elif choose=="/":
    print(num1/num2)
elif choose=="%":
    print(num1%num2)
elif choose=="*":
    print(num1*num2)
else:
    print("invalid operator")