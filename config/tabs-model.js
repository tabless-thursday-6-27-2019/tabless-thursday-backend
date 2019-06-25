const db = require('../database/dbConfig')

module.exports = {
    insert,
    update,
    remove,
    getAll,
    findById,
}

function insert(game) {
    return db('tabs')
    .insert(game, 'id')
    .then(ids => {
        return db('tabs')
        .where({ id: ids[0] })
        .first()
    })
}

function update(id, changes) {
    return db('tabs')
      .where({ id })
      .update(changes);
  }

function remove(id) {
    return getAll()
    .where('id', id)
    .del()
}

function getAll() {
    return db('tabs')
}

function findById(id) {
    return db('tabs')
    .findById(tab, 'id')
    .then(ids => {
        return db('tabs')
        .then(ids => {
            return db('tabs')
            .where({ id: ids[0] })
            .first()
        })
    })
}