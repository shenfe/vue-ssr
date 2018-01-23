const express = require('express')
const app = express()

const sleep = function (d) {
  for (let t = Date.now(); Date.now() - t <= d;);
}

app.get('/getDetail', (req, res) => {
  sleep(500)
  res.json({
    code: 200,
    data: {
      id: req.query.id,
      title: `Day ${req.query.id}`,
      content: 'Today is a nice day.'
    }
  })
})

app.get('/getList', (req, res) => {
  sleep(500)
  res.json({
    code: 200,
    data: [
      {
        id: 1,
        title: 'Day 1'
      },
      {
        id: 2,
        title: 'Day 2'
      },
      {
        id: 3,
        title: 'Day 3'
      }
    ]
  })
})

module.exports = {
  path: '/api',
  handler: app
}
