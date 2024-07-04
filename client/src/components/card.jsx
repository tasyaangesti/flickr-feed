export function Card() {
  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-400`">
      <div className="relative overflow-hidden rounded-lg shadow-lg">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}
