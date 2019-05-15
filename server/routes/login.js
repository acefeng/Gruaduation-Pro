module.exports = [
  [
    'GET',
    '/login',
    '../controllers/login',
    'getIndex'
  ],
  [
    'POST',
    '/login/register',
    '../controllers/login',
    'createUser'
  ],
  [
    'POST',
    '/login',
    '../controllers/login',
    'postLogin'
  ]
];