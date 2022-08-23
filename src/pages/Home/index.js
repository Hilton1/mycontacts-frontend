import {
  Container, InputSearchContainer, Header, ListContainer, Card,
} from './styles';

import arrow from '../../assets/images/icons/arrow.svg';
import edit from '../../assets/images/icons/edit.svg';
import trash from '../../assets/images/icons/trash.svg';

export default function Home() {
  return (
    <Container>
      <InputSearchContainer>
        <input type="text" placeholder="Pesquise pelo nome..." />
      </InputSearchContainer>

      <Header>
        <strong>3 contatos</strong>
        <a href="/">Novo contato</a>
      </Header>

      <ListContainer>
        <header>
          <button type="button">
            <span>Nome</span>
            <img src={arrow} alt="Arrow" />
          </button>
        </header>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Hilton Ribeiro</strong>
              <small>instagram</small>
            </div>
            <span>josehilton02@gmail.com</span>
            <span>(82) 99914-2756</span>
          </div>

          <div className="actions">
            <a href="/" className="edit">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Hilton Ribeiro</strong>
              <small>instagram</small>
            </div>
            <span>josehilton02@gmail.com</span>
            <span>(82) 99914-2756</span>
          </div>

          <div className="actions">
            <a href="/" className="edit">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>

        <Card>
          <div className="info">
            <div className="contact-name">
              <strong>Hilton Ribeiro</strong>
              <small>instagram</small>
            </div>
            <span>josehilton02@gmail.com</span>
            <span>(82) 99914-2756</span>
          </div>

          <div className="actions">
            <a href="/" className="edit">
              <img src={edit} alt="Edit" />
            </a>
            <button type="button">
              <img src={trash} alt="trash" />
            </button>
          </div>
        </Card>
      </ListContainer>
    </Container>
  );
}
