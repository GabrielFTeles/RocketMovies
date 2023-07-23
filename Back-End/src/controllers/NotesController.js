const knex = require('../database/knex');

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const { user_id } = request.params;

    const [note_id] = await knex('notes').insert({
      title,
      description,
      rating,
      user_id,
    });

    const tagsToInsert = tags.map(tag => ({
      note_id,
      user_id,
      name: tag
    }));

    await knex('tags').insert(tagsToInsert);

    return response.status(201).json();
  }
}

module.exports = NotesController;