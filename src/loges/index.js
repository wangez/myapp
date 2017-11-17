const logs = require.context('.', false, /\.js$/)
const Logs = {}

logs.keys().forEach(key => {
  if (key === './index.js') return
  Logs[key.replace(/(\.\/|\.js)/g, '').toLowerCase()] = logs(key).default
})

export default Logs
