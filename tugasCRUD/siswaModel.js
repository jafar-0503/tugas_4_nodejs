// siswaModel.js
var mongoose = require('mongoose');
// Setup schema
var siswaSchema = mongoose.Schema({
  name: {
      type: String,
      required: true
  },
  birth: {
      type: String
  },
  gender: String,
  hobby: String
});
// Export Siswa model
var Siswa = module.exports = mongoose.model('siswa', siswaSchema);
module.exports.get = function (callback, limit) {
  Siswa.find(callback).limit(limit);
}
