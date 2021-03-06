module.exports = [
  [
    'GET',
    '/customer',
    '../controllers/customer',
    'getIndex'
  ],
  [
    'POST',
    '/getCustomerList',
    '../controllers/customer',
    'getCustomerList'
  ],
  [
    'POST',
    '/getSelectCustomerList',
    '../controllers/customer',
    'getSelectCustomerList'
  ],
  [
    'POST',
    '/addCustomerTag',
    '../controllers/customer',
    'getAddCustomerTag'
  ],
  [
    'POST',
    '/getALlCustomerTag',
    '../controllers/customer',
    'getALlCustomerTag'
  ],
  [
    'POST',
    '/addTagCustomerMain',
    '../controllers/customer',
    'postAddTagCustomerMain'
  ],
  [
    'POST',
    '/deleteTagCustomer',
    '../controllers/customer',
    'postDeleteTagCustomer'
  ],
  [
    'POST',
    '/deleteCustomerTag',
    '../controllers/customer',
    'postDeleteCustomerTag'
  ],
  
];