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

  async show(request, response) {
    const { note_id } = request.params;

    const [note] = await knex('notes').where({ id: note_id });
    
    const tags = await knex('tags').where({ note_id });
    const tagsNames = tags.map(tag => tag.name);

    return response.json({
      ...note,
      tags: tagsNames,
    });
  }

  
}

module.exports = NotesController;