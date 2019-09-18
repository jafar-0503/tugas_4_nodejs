// api-routes.js
// Initialize express router
let router = require('express').Router();
// Set default API response
router.get('/', function (req, res) {
  res.json({
      status: 'API Its Working',
      message: 'Welcome to Tugas CRUD using Nodejs!',
  });
});
// Import Siswa controller
var siswaController = require('./siswaController');
// Siswa routes
router.route('/siswas')
  .get(siswaController.index)
  .post(siswaController.new);
router.route('/siswas/:siswa_id')
  .get(siswaController.view)
  .patch(siswaController.update)
  .put(siswaController.update)
  .delete(siswaController.delete);
//Export API routes
module.exports = router;
