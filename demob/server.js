const WebSocket = require('ws')

const wss = new WebSocket.Server({ port: 3200 })

console.log('服务运行在http://localhost:3200/')

wss.on('connection', (ws) => {
  console.log('[服务器]：客官您来了~里边请')
  ws.send(`[websocket云端]您已经连接云端!数据推送中!`)
  let index = 1
  const interval = setInterval(() => {
    ws.send(`[websocket]数据推送第${index}次`)
    index++
  }, 1000 * 10)

  ws.on('message', (message) => {
    console.log('received: %s', message)
    // 回应客户端消息
    ws.send(`[服务器收到]：: ${message} `)
  })

  ws.on('close', () => {
    clearInterval(interval) // 清除定时器
    console.log('[服务器]：客官下次再来呢~')
  })
})
