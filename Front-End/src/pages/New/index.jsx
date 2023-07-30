import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { api } from '../../services/api';

import { useMovies } from '../../hooks/moviesContext';

import { Container, Form } from './styles';

import { Header } from '../../components/Header';
import { LinkButton } from '../../components/LinkButton';
import { Input } from '../../components/Input';
import { Textarea } from '../../components/Textarea';
import { NoteItem } from '../../components/NoteItem';
import { Button } from '../../components/Button';

import { FiArrowLeft } from 'react-icons/fi';
import { toast } from 'react-toastify';

export function New() {
  const { getMovies } = useMovies();
  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState(0);

  const [tags, setTags] = useState([]);
  const [newTag, setNewTag] = useState("");

  function handleNewNote() {
    if (!title || !description || !rating || tags.length === 0) {
      if (isNaN(rating)) {
        return toast.error("Rating must be a number!");
      }

      if (newTag) {
        return toast.error("You left a tag open, please consider add the tag before saving a new note.");
      }

      return toast.error("Please enter all fields before saving!");
    }

    if (rating < 0 || rating > 5) {
      return toast.error("Please enter a number between 0 and 5!");
    }

    api.post('/notes', {
      title,
      description,
      rating,
      tags
    });

    toast.success("You have successfully added a new movie note.");
    getMovies(); // Updating movies.
    navigate('/');
  }

  function handleNewTag() {
    setTags(prevState => [...prevState, newTag]);
    setNewTag("");
  }

  function handleRemoveTag(tagToRemove) {
    const filteredTags = tags.filter(tag => tag !== tagToRemove)
    setTags(filteredTags)
  }
    
  return (
    <Container>
      <Header />

      <main>
        <div className="content">
          <LinkButton 
            text="Voltar"
            icon={FiArrowLeft}
            route="/"
          />

          <Form>
            <h2>Novo filme</h2>

            <div>
              <Input 
                placeholder="Título"
                onChange={e => setTitle(e.target.value)}
              />
              <Input 
                placeholder="Sua nota (de 0 a 5)"
                onChange={e => setRating(Number(e.target.value))}
              />
            </div>

            <Textarea 
              placeholder="Observações"
              onChange={e => setDescription(e.target.value)}
            />

            <div>
              <span>Marcadores</span>

              <div className="tags">
                {
                  tags.map(tag => (
                    <NoteItem 
                      value={tag}
                      onClick={() => handleRemoveTag(tag)}
                    />
                  ))
                }
                <NoteItem 
                  isNew={true.toString()}
                  placeholder="Novo marcador"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  onClick={handleNewTag}
                  maxlength="10"
                />
              </div>
            </div>

            <div className="buttons-wrap">
              <Button 
                title="Excluir filme"
              />
              <Button 
                title="Salvar alterações"
                onClick={handleNewNote}
                disabled={(title && description && rating && tags.length > 0) ? false : true}
              />
            </div>
          </Form>
        </div>
      </main>
    </Container>
  )
}