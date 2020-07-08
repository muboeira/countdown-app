import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import githubLogo from '../../assets/githubLogo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={githubLogo} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/25963569?s=460&v=4"
            alt="teste"
          />
          <div>
            <strong>muboeira/vuetable-2</strong>
            <p>Descrição top para caramba.</p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
