const express = require('express')
const app = express()
const port = 3000
app.use(express.json())

app.listen(port, () => {
  console.log(`am running`)
})


app.post('/addtwonumber',(req,res) => {
	res.json(req.body.a + req.body.b);
})