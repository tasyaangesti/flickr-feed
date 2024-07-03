export function Card() {
  return (
    <div className="m-10 grid grid-cols-4 gap-4">
      <div className="card card-compact bg-base-100 w-96 shadow-xl m-5">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary"> see detail </button>
          </div> */}
        </div>
      </div>
    </div>
  );
}
