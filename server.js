const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults({
  static: './build'
})

server.use(middlewares)

// CORS 설정 추가!!
server.use((req, res, next) => {
  res.header('Access-Control-Expose-Headers', '*');
  next();
});

server.use(router)
server.listen(3000, () => {
  console.log('JSON Server is running')
})