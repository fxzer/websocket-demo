const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 8080 })

wss.on('connection', (ws) => {
  console.log('A new client connected')

  ws.on('message', (message) => {
    console.log('received: %s', message)
    // 回应客户端消息
    ws.send(`🎉Server received: ${message} 🎉`)
  })

  ws.on('close', () => {
    console.log('Client disconnected')
  })
  const obj = {
    name: 'zhangsan',
    age: 22
  }

  ws.send(JSON.stringify(obj))
  ws.send('Welcome to the WebSocket server!🎉')
})

console.log('WebSocket server is running on ws://localhost:8080')
