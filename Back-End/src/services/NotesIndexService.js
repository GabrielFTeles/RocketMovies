class NotesIndexService {
  constructor(notesRepository) {
    this.notesRepository = notesRepository;
  }

  async execute(title, user_id) {
    const notes = await this.notesRepository.getNotesByTitle(title, user_id);
    const userTags = await this.notesRepository.getTagsByUserId(user_id);

    const notesWithTags = notes.map(note => {
      const noteTags = userTags.filter(tag => tag.note_id === note.id)
       .map(tag => tag.name);
        
      return {
        ...note,
        tags: noteTags
      }
    });

    return notesWithTags;
  }
}

module.exports = NotesIndexService;