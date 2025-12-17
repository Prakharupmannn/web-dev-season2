import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: any) {
  if(c.req.header("Authorization")) {
    await next()
  } else {
    return c.text("You dont have access");
  }
}

app.post('/', authMiddleware ,async(c) => {
  // body, headers, query parameters, middlewares, connecting to a database
  
  // return c.json({
  //   message: "hi there"
  // })

  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("params"));

  return c.text('HEllo world')
})

export default app