/**
 * EstudiantesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

//const { update } = require("sails-mysql");
//const Estudiantes = require("../models/Estudiantes");

module.exports = {
    
  /*'vista' : function(req, res) {
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
   },*/

   create(req,res){

    Estudiantes.create({
        nombre: req.param('nombre'),
        edad: req.param('edad')
    })
        .then(estudiante => {
            return res.ok(estudiante)
        })
        .catch(err => res.serverError(err));
   },
   find(req,res){
    Estudiantes.find()
        .then(estudiante => res.ok(estudiante))
        .catch(err => res.notFound(err));
   },
   delete(req,res){
    Estudiantes.destroy({
        id: req.params.id
    })
        .then(estudiante => res.ok(estudiante))
        .catch(err => res.serverError(err));
   },
   update(req,res){
    let attributes = {};
    if(req.param('nombre')){
        attributes.nombre = req.param('nombre')
    }

    if(req.param('edad')){
        attributes.edad = req.param('edad')
    }

    Estudiantes.update({
        id : req.params.id
    },attributes)
        .then(estudiante => {
            res.ok(estudiante)
        })
        .catch(err => res.serverError(err));
   }


    
};

