const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)

server.get('/api/cities', (req, res) => {

  const cities = router.db
    .get('cities')
    .value();

  res.jsonp(cities);
});

server.use(router)
server.listen(3001, () => {
  console.log('JSON Server is running')
})