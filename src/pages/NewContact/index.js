import PageHeader from '../../components/PageHeader';

import Input from '../../components/Input';
import Select from '../../components/Select';
import Button from '../../components/Button';

export default function NewContact() {
  return (
    <>
      <PageHeader
        title="Novo Contato"
      />

      <Input type="text" placeholder="Nome" />
      <Select type="text" placeholder="Nome">
        <option value="123">Instagram</option>
        <option value="">Opção 2</option>
        <option value="">Opção 3</option>
        <option value="">Opção 4</option>
      </Select>
      <Button>Salvar alterações</Button>
      <Button disabled>Salvar alterações</Button>
    </>

  );
}
