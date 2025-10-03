// Enums allow you to bundle a couple of types and use them throughout your code:

enum UserType {
    Admin,
    PayingCustomer,
    Trial
}

function showWarning(user: UserType) {
    switch(user) {
        case UserType.Admin:
            return false;
        case UserType.PayingCustomer:
            return false;
        case UserType.Trial:
            return false;
    }
}

/*
    Enums constribute to both the type-creation space and the value-creation space, emitting code.

    Occasionally a const keyword before enum UserType prevents code emitting.

    Enums are not as safe as other structures, nor do they look anything like TypeScript's syntax in 
    the emitted code. 

    Also, forgetting the const keyword can result in lots of additional unnoticed lines of code
    in the final output, and with a significant increase in file size when shipped.
*/