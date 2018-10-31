'use strict';

// Read and require every file in the "models" directory
// This allows us to dynamically create and use models with ONE API.
import requireAll from 'require-dir';
const models = requireAll('../models');
/*
  models: {
    'notes': {default: Function()...},
    'people': {default: Function() ...}
  }
 */
export default (req, res, next) => {
  try {
    let model = req && req.params && req.params.model;
    if (model && models[model] && models[model].default) {
      req.model = models[model].default;
      next();
    } else {
      throw 'Model not found';
    }
  } catch (e) {
    throw e;
  }
};