import { Container } from './styles';

import { FiX , FiPlus } from 'react-icons/fi'

export function NoteItem({ value, isNew = false, onClick, ...rest }) {
  return (
    <Container $isnew={isNew.toString()}>
      <input
        readOnly={!isNew}
        value={value}
        {...rest}
      />

      <button
        type="button"
        onClick={onClick}
      >
        {isNew ? <FiPlus /> : <FiX />}
      </button>
    </Container>
  )
}