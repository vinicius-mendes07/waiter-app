import { Button } from "../components/Button";
import { Categories } from "../components/Categories";
import { Header } from "../components/Header";
import { Menu } from "../components/Menu";
import { CategoriesContainer, Container, Footer, FooterContainer, MenuContainer } from "./styles";

export function Main() {
  return (
    <>
      <Container>
        <Header />
        <CategoriesContainer>
          <Categories />
        </CategoriesContainer>
        <MenuContainer>
          <Menu />
        </MenuContainer>
      </Container>
      <Footer>
        <FooterContainer>
          <Button onPress={() => alert('novo pedido')}>
            Novo Pedido
          </Button>
        </FooterContainer>
      </Footer>
    </>
  );
}
