import { Container, GithubLogo, SearchBar } from "../components";

const Home = () => {
  return (
    <Container size="fixed" contentCenter direction="column">
      <GithubLogo size="sm" />
      <h1>Github API</h1>
      <SearchBar hasIcon placeholder="Busque um username do github" />
    </Container>
  );
};

export default Home;
