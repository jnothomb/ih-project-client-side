export class Reservation {
    client: String;
    meal: String;
    restaurant: String;
    portions: Number;
    timestamps: {
        createdAt: 'created_at';
    };

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}









