class NotesCreateService {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }

  async execute({ title, description, rating, tags }, user_id) {
    const note_id = await this.notesRepository.createNote({
      title,
      description,
      rating,
      tags
    }, user_id);
  
    const tagsToInsert = tags.map(tag => ({
      note_id,
      user_id,
      name: tag
    }));

    await this.notesRepository.createTags(tagsToInsert);

    return note_id;
  }
}

module.exports = NotesCreateService;