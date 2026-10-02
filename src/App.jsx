import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  return (
    <main className="container py-5">
      <div className="row justify-content-center">
        <div className="col-lg-8">
          <div className="card shadow-sm border-0 rounded-4">
            <div className="card-body p-4 p-md-5">
              <span className="badge bg-primary-subtle text-primary-emphasis mb-3">
                SP1 Books
              </span>
              <h1 className="display-5 fw-bold mb-3">Witaj w projekcie</h1>
              <p className="lead text-secondary mb-4">
                Ten projekt ma już podpięty Bootstrap i gotowy jest do dalszego rozwoju.
              </p>

              <div className="d-flex flex-wrap gap-3">
                <button type="button" className="btn btn-primary btn-lg">
                  Primary button
                </button>
                <button type="button" className="btn btn-outline-secondary btn-lg">
                  Secondary button
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default App
