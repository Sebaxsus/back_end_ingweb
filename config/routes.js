/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': { view: 'homepage' },
  '/Estudiantes/vista': {view: 'Estudiantes/vista'},
  '/Estudiantes/mostrar': {view: 'Estudiantes/mostrar'}
  //'/': '../../../frontendPF/index.html',
  //'/': 'http://127.0.0.1:5500/index.html'
  //'get /': 'https://g2e09ee6deb0680-pfdb.adb.us-ashburn-1.oraclecloudapps.com/ords/admin/estudiantes/estudiantes/get',
  //'get/api/Estudiantes': 'EstudiantesController.js'


  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
