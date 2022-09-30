const messages = [{
  text: "Hi there!", user: "Amando", added: new Date()
}, {
  text: "Hello World!", user: "Charles", added: new Date()
}];

const index = (req, res) => {
  res.render('index', {title: 'Mini Message Board', messages: messages});
}

const displayMessageForm = (req, res) => {
  res.render('form')
}

const createMessage = (req, res) => {
  const {message, author} = req.body
  messages.push({text: message, author: author, added: new Date()})
  res.redirect('/')
}

module.exports = {
  index,
  displayMessageForm,
  createMessage
}