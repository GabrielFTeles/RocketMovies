const knex = require('../database/knex');

class NotesController {
  async create(request, response) {
    const { title, description, rating, tags } = request.body;
    const user_id = request.user.id;

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

  async index(request, response) {
    const { title } = request.query;
    const user_id = request.user.id;

    const notes = await knex('notes')
      .where({ user_id })
      .whereLike('title', `%${title}%`)
      .orderBy('title');

    const userTags = await knex('tags').where({ user_id });

    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)
       .map(tag => tag.name);
        
      return {
        ...note,
        tags: noteTags
      }
    });

    return response.json(notesWithTags);
  }

  async show(request, response) {
    const { id } = request.params;

    const [note] = await knex('notes').where({ id });
    const [user] = await knex('users').where({ id: note.user_id }).select('name', 'avatar');
    
    const tags = await knex('tags').where({ note_id: id });
    const tagsNames = tags.map(tag => tag.name);

    return response.json({
      author: user,
      ...note,
      tags: tagsNames,
    });
  }

  async delete(request, response) {
    const { note_id } = request.params;

    await knex('notes').where({ id: note_id }).delete();

    return response.json();
  }
}

module.exports = NotesController;