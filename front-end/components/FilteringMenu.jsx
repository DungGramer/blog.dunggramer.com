const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className="filtering-menu mb-2">
      <i
        className={`fa fa-${filter?.view?.list ? 'border-all' : 'list'}`}
        style={{ fontSize: '1.5rem' }}
        onClick={() => {
          onChange('view', { list: filter?.view?.list ? 0 : 1 });
        }}
      />
      <i
        className={`fa fa-${filter?.date?.asc ? 'sort-numeric-up' : 'sort-numeric-down'}`}
        style={{ fontSize: '1.5rem' }}
        onClick={() => {
          onChange('date', { asc: filter?.date?.asc ? 0 : 1 });
        }}
      />
    </div>
  );
};

export default FilteringMenu;
