// Exemplo ilustrativo. Não é necessário executar este código para a auditoria.
const { filter } = require('lodash');
const users = [{ name: 'Ana', active: true }, { name: 'João', active: false }];
console.log(filter(users, { active: true }));
