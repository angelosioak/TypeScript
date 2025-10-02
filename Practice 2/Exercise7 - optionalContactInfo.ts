/*
    Create a TypeScript class Employee:
        - Properties:
            - name (string)
            - role (string)
            - contactInfo (object with email (string) and phone (string, optional)).
        
        - A constructor to initiliase all properties, with type annotations.
        - A method getDetails() that returns a string summarising the employee's:
            - name
            - role
            - contact info (handle the optional phone gracefully).

        - Export the Employee class.
        - In a separate file, import the Employee class, create two employees: 
            - one with phone number
            - one without
        - Call getDetails() for both.
*/

class Employee {
    name: string;
    role: string;
    contactInfo: { email: string, phone?: string};

    constructor(name: string, role: string, contactInfo: { email: string, phone?: string}) {
        this.name = name;
        this.role = role;
        this.contactInfo = contactInfo;
    }

    getDetails(): string {
        if (this.contactInfo.phone) {
            const phonePart = this.contactInfo.phone ? ` and ${this.contactInfo.phone}` : '';
            return `Employee: ${this.name}, Role: ${this.role}, Contact Info: ${this.contactInfo.email} ${this.contactInfo.phone}`;
        }
    }
}