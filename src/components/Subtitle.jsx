const Subtitle = ({ category, title, wishlist }) => (
  <div>
    <div className="flex items-center gap-3">
      <div className="w-5 h-10 bg-red rounded-[4px]" />

      <h3
        className={`${
          wishlist ? "text-black" : "text-red"
        } font-semibold text-sm`}
      >
        {category}
      </h3>
    </div>
    <h1 className="text-4xl font-semibold mt-2">{title}</h1>
  </div>
);

export default Subtitle;
