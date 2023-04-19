/**
 * EstudiantesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const Estudiantes = require("../models/Estudiantes");

module.exports = {
    
  'vista' : function(req, res) {
    res.view();
  },
   crear: function(req, res, next) {
    Estudiantes.create( req.params.all(), function estudianteCreado(err, estudiante) {
        if(err) return next(err);

        res.redirect('/Estudiantes/mostrar/' + estudiante.id);
    });
   },

   mostrar: function(req,res,next) {
    Estudiantes.findOne(req.params('id'), function estudianteEncontrado(err, estudiante) {
        if (err) return next(err);
        if (!estudiante) return next();
        res.view({
            Estudiantes: estudiante
        });
    });
   }
    
};

