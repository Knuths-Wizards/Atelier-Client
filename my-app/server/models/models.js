const sql = require('../db.js');

module.exports = {
  getProducts: function (page = 1, count = 5) {
    if (typeof count !== 'number' || count < 1) count = 5;
    if (typeof page !== 'number' || page < 1) page = 1;
    let offset = (page - 1) * count;

    return sql`
    SELECT id, name, slogan, description, category, default_price
    FROM product
    ORDER BY id
    LIMIT ${count}
    OFFSET ${offset};
    `;
  },

  getProductInfo: function (product_id) {
    return sql`
    SELECT
      product.id,
      product.name,
      product.slogan,
      product.description,
      product.category,
      product.default_price,
      json_agg(json_build_object('feature', features.feature, 'value', features.value)) AS features
    FROM
      product
      LEFT JOIN features ON product.id = features.product_id
    WHERE
      product.id = ${product_id}
    GROUP BY
      product.id;
  `;
  },

  getProductStyles: function (product_id) {
    return sql`
    SELECT
  styles.product_id AS product_id,
  json_agg(
    json_build_object(
      'style_id', styles.id,
      'name', styles.name,
      'original_price', styles.original_price,
      'sale_price', styles.sale_price,
      'default?', styles.default_style::boolean,
      'photos', (
        SELECT json_agg(
                 json_build_object(
                   'thumbnail_url', photos.thumbnail_url,
                   'url', photos.url
                 )
               )
        FROM photos
        WHERE photos.style_id = styles.id
      ),
      'skus', (
        SELECT json_object_agg(
                 skus.id,
                 json_build_object(
                   'quantity', skus.quantity,
                   'size', skus.size
                 )
               )
        FROM skus
        WHERE skus.style_id = styles.id
      )
    )
  ) AS results
FROM styles
WHERE styles.product_id = ${product_id}
GROUP BY styles.product_id;
 `;
  },

    getRelatedProducts: function (product_id) {
    return sql`
    SELECT related_product_id FROM related WHERE current_product_id = ${product_id}
    `
  },
}


