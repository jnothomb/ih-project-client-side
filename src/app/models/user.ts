export class User {
    id: string;
    name: string;
    password: string;
    email: string;
    phoneNumber: string;
    userType: string;
    restaurant: {
        name: string,
        description: string,
        photo: string,
        address: string,
        category: string
    };

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}
