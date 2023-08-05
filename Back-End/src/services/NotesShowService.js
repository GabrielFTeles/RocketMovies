class NotesShowService {
  constructor(NotesRepository) {
      this.notesRepository = NotesRepository;
  }

  async execute(note_id, user_id) {
    const note = await this.notesRepository.getNoteById(note_id, user_id);
    const user = await this.notesRepository.getAuthorDetails(note.user_id);
    
    const tags = await this.notesRepository.getTagsByNoteId(note_id, user_id);
    const tagsNames = tags.map(tag => tag.name);

    return {
      author: user,
      ...note,
      tags: tagsNames,
    };
  }
}

module.exports = NotesShowService;
