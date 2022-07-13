import NotificationButton from "./components/NotificationButton"
import Header from "./components/Header"
function App() {
  return (
    <> { /* Fragmente pois, dentro de um component react so podemos ter uma teg, entao para adicionarmos mais uma podemos colocar esse <> </> para inserirmos outras  */}
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta_container">
            <NotificationButton />

          </div>
        </section>
      </main>
    </>
  )
}

export default App
