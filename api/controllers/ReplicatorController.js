/**
 * ReplicatorController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

const { exec } = require('child_process');

module.exports = {
  runRsync: function(req, res) {
    let project_name = req.body.project_name;
    let source_dir = req.body.source_dir;
    let base_dest_dir = req.body.dest_dir;
    let exclude_dir = req.body.exclude_dir;

    // Asegúrate de que la ruta del directorio origen termine con '/'
    if (!source_dir.endsWith('/')) {
      source_dir += '/';
    }

    // Construye la ruta del directorio destino incluyendo el nombre del proyecto
    let dest_dir = `${base_dest_dir}/${project_name}`;

    let command = `rsync -avz --exclude=${exclude_dir} ${source_dir} ${dest_dir}`;

    exec(command, (error, stdout, stderr) => {
      if (error) {
        return res.serverError(`Error al ejecutar rsync: ${stderr}`);
      }
      return res.ok({
        message: "Rsync completado con éxito",
        output: stdout
      });
    });
  }
};
