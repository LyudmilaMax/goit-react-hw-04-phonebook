import { Container } from './Layout.styled.js';

export function Layout ({ children }) {
  return (
    <Container>
      <main>{children}</main>
    </Container>
  );
};
