import styled from 'styled-components';

import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  display: flex;
  align-items: center;
  gap: 0.8rem;

  color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`;