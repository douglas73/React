const Todo = require('./todo')  // restful.model('Todo', todoSchema)  do todo.js
Todo.methods(['get', 'post', 'put','delete'])
Todo.updateOptions({new: true,  runValidators: true })

module.exports = Todo