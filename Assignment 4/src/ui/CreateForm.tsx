type Props = {};

function CreateForm({}: Props) {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold m-5">Add Book</h1>
            <blockquote className="text-lg italic text-gray-500">
              The First Cause of Absurd Conclusions I Ascribe to the Want of
              Method
            </blockquote>
            <figcaption className="mt-3 text-right text-sm text-gray-500">
              — Thomas Hobbes, <cite className="italic">Leviathan</cite>
            </figcaption>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
              <fieldset className="fieldset">
                <label className="label">Title</label>
                <input
                  name="title"
                  type="text"
                  className="input"
                  placeholder="Beyond Good and Evil"
                />

                <label className="label">Author</label>
                <input
                  name="author"
                  type="text"
                  className="input"
                  placeholder="Friedrich Nietzsche"
                />

                <label className="label">Genre</label>
                <input
                  name="genre"
                  type="text"
                  className="input"
                  placeholder="Philosophy"
                />

                <label className="label">ISBN</label>
                <input
                  name="isbn"
                  type="text"
                  className="input"
                  placeholder="9780306000000"
                />

                <label className="label">Description</label>
                <input
                  name="description"
                  type="text"
                  className="input"
                  placeholder=" A philosophical novel that explores the nature of truth and morality"
                />

                <label className="label">Copies</label>
                <input
                  name="copies"
                  type="number"
                  className="input"
                  placeholder="10"
                />
                <label className="label">Available</label>
                <input
                  name="available"
                  type="checkbox"
                  defaultChecked
                  className="checkbox checkbox-xl"
                />
                <button className="btn btn-neutral mt-4">Create</button>
              </fieldset>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CreateForm;
