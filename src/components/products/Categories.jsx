const Categories = ({
  categories,
  activeCategoryId,
  setActiveCategoryId,
}) => {
  const handleClick = (catId) => {
    if (activeCategoryId === catId) {
      setActiveCategoryId(null);
    } else {
      setActiveCategoryId(catId);
    }
  };

  return (
    <div className="categories">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={
            activeCategoryId === cat.id
              ? 'categories-item categories-item-active'
              : 'categories-item'
          }
          onClick={() => handleClick(cat.id)}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default Categories;
