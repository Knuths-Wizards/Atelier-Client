const sql = require('../db.js');

class Products {

  constructor() {
    this.max = 20;
  }

  getProducts(page = 1, count = 5) {
    if (typeof count !== 'number' || count > this.max) count = this.max;
    if (typeof page !== 'number' || page < 1) page = 1;
    let offset = (page - 1) * count;

    return sql`
      select id, name, slogan, description, category, default_price
      from product
      limit ${count}
      offset ${offset}
    `;
  }


}