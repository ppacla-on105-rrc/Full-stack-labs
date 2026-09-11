import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { employees } from "./employees";

function App() {
  return (
    <>
      <Header />

      <main>
        {[...new Set(employees.map((employee) => employee.department))].map(
          (department) => (
            <section key={department}>
              <h2>{department}</h2>

              {employees
                .filter((employee) => employee.department === department)
                .map((employee) => (
                  <p key={employee.firstName + employee.lastName}>
                    {employee.firstName} {employee.lastName}
                  </p>
                ))}
            </section>
          )
        )}
      </main>

      <Footer />
    </>
  );
}

export default App;