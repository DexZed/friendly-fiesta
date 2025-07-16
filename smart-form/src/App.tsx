import "./App.css";
import SmartForm from "./form/Form";

function App() {
  return (
    <>
      <div className="hero min-h-screen">
        <form>
          <div className="card bg-base-100 w-[500px] max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    What is your name?
                  </legend>
                  <input
                    name="name"
                    type="text"
                    className="input"
                    placeholder="Type here"
                  />
                  <label className="label">Error</label>
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    What is your email?
                  </legend>
                  <input
                    name="email"
                    type="email"
                    className="input"
                    placeholder="Type here"
                  />
                  <label className="label">Error</label>
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">
                    What is your Password?
                  </legend>
                  <input
                    name="password"
                    type="text"
                    className="input"
                    placeholder="Type here"
                  />
                  <label className="label">Error</label>
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Pick a file</legend>
                  <input name="pictureUrl" type="file" className="file-input" />
                  <label className="label">Error</label>
                </fieldset>

                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Browsers</legend>
                  <select name="selectorField" defaultValue="Pick a browser" className="select">
                    <option disabled={true}>Pick a browser</option>
                    <option>Chrome</option>
                    <option>FireFox</option>
                    <option>Safari</option>
                  </select>
                  <span className="label">Error</span>
                </fieldset>

                 <fieldset className="fieldset">
                  <legend className="fieldset-legend">Date</legend>
                  <input name="date" type="date" className="input" />
                  <label className="label">Error</label>
                </fieldset>

                <fieldset className="fieldset bg-base-100 border-base-300 rounded-box w-64 border p-4">
                  <legend className="fieldset-legend">Login options</legend>
                  <label className="label">
                    <input
                    name="check"
                      type="checkbox"
                      defaultChecked
                      className="checkbox"
                    />
                    Remember me
                  </label>
                </fieldset>
                <div>
                  <a className="link link-hover">Forgot password?</a>
                </div>
                <button className="btn btn-neutral mt-4" type="submit">
                  Submit
                </button>
              </fieldset>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
