/**
 * Estudiantes.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    id: { type: 'number', autoIncrement: true},//required: true
    nombre: {type: 'string'},
    edad : {type: 'number'}
    
  },

};

