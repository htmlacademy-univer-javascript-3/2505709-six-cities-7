import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  offersCnt: number;
}

function App(props: AppProps) {
  return (
    <MainPage {...props} />
  );
}

export default App;
