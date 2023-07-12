const postgres = require('postgres');

const dbConfig = {
  host: '127.0.0.1',
  port: 5432,
  database: 'tst',
};

const sql = postgres(dbConfig);

const query = (qry) => {
  return sql`
    select *
    from product
    left join features on product.id = features.product_id where product.id = ${qry}
  `;
}

query('1')
.then(async (data) => {
  let result = {
    id: data[0]?.id || '',
    name: data[0].name || '',
    slogan: data[0].slogan || '',
    description: data[0]?.description || '',
    category: data[0]?.category || '',
    default_price: data[0]?.default_price || 'null',
    features: []
  }

  data.forEach((item) => {
    result.features.push({
      feature: item.feature,
      value: item.value
    })
  });

  return result;
})
.then((data) => console.log(data))
.catch((err) => console.log(err));