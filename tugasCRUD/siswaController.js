// siswaController.js
// Import siswa model
Siswa = require('./siswaModel');
// Handle index actions
exports.index = function (req, res) {
   Siswa.get(function (err, siswas) {
       if (err) {
           res.json({
               status: "error",
               message: err,
           });
       }
       res.json({
           status: "success",
           message: "Siswas retrieved successfully",
           data: siswas
       });
   });
};
// Handle create siswa actions
exports.new = function (req, res) {
   var siswa = new Siswa();
   siswa.name = req.body.name ? req.body.name : siswa.name;
   siswa.birth = req.body.birth;
   siswa.gender = req.body.gender;
   siswa.hobby = req.body.hobby;
// save the siswa and check for errors
   siswa.save(function (err) {
       // if (err)
       //     res.json(err);
res.json({
           message: 'New siswa created!',
           data: siswa
       });
   });
};
// Handle view siswa info
exports.view = function (req, res) {
   Siswa.findById(req.params.siswa, function (err, siswa) {
       if (err)
           res.send(err);
       res.json({
           message: 'Siswas details loading..',
           data: siswa
       });
   });
};
// // Handle update siswa info
exports.update = function (req, res) {
Siswa.findById(req.params.siswa_id, function (err, siswa) {
       if (err)
           res.send(err);
        siswa.name = req.body.name ? req.body.name : siswa.name;
        siswa.birth = req.body.birth;
        siswa.gender = req.body.gender;
        siswa.hobby = req.body.hobby;
// save the siswa and check for errors
       siswa.save(function (err) {
           if (err)
               res.json(err);
           res.json({
               message: 'Siswa Info updated',
               data: siswa
           });
       });
   });
};
// // Handle delete siswa
exports.delete = function (req, res) {
   Siswa.remove({
       _id: req.params.siswa_id
   }, function (err, siswa) {
       if (err)
           res.send(err);
res.json({
           status: "success",
           message: 'Siswa deleted'
       });
   });
};
