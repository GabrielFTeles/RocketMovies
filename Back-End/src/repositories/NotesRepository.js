const knex = require('../database/knex');

class NotesRepository {
  async createNote({ title, description, rating }, user_id) {
    const [note_id] = await knex('notes').insert({
      title,
      description,
      rating,
      user_id,
    });

    return note_id;
  }

  async delete(id, user_id) {
    await knex('notes').where({ id, user_id }).delete();
  }

  async createTags(tagsToInsert) {
    await knex('tags').insert(tagsToInsert);
  }

  async getAuthorDetails(id) {
    const [user] = await knex('users').where({ id }).select('name', 'avatar');

    return user;
  }

  async getNotesByTitle(title, user_id) {
    const notes = await knex('notes')
      .where({ user_id })
      .whereLike('title', `%${title}%`)
      .orderBy('title');

    return notes;
  }

  async getNoteById(id, user_id) {
    const [note] = await knex('notes')
      .where({ id, user_id });

    return note;
  }

  async getTagsByNoteId(note_id) {
    const tags = await knex('tags').where({ note_id });

    return tags;
  }

  async getTagsByUserId(user_id) {
    const tags = await knex('tags').where({ user_id });

    return tags;
  }
}

module.exports = NotesRepository;