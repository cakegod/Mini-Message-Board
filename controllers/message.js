const messages = [{
  text: "Hi there!", user: "Amando", added: new Date()
}, {
  text: "Hello World!", user: "Charles", added: new Date()
}];

exports.index = function (req, res) {
  res.render('index', {title: 'Mini Message Board', messages: messages});
}

exports.message_create = function (req, res) {
  res.render('form')
}

exports.message_post = function (req, res) {
  const {message, author} = req.body
  messages.push({text: message, author: author, added: new Date()})
  res.redirect('/')
}