export function Card({ photos }) {
  return (
    <div className="m-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 bg-slate-400`">
      {photos.map((photo) => (
        <div
          key={photo.link}
          className="relative overflow-hidden rounded-lg shadow-lg"
        >
          <img
            src={photo.media.m}
            alt={photo.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
