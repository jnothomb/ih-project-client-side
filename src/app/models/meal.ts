export class Meal {
    name: String;
    portions: Number;
    price: Number;
    restaurant: String;
    availablePortions: Number;
    timestamps: {
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    };

    constructor(obj: Object = {}) {
        Object.assign(this, obj);
    }
}

