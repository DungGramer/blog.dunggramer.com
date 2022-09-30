const FilteringMenu = ({ onChange, filter }) => {
  return (
    <div className='filtering-menu mb-2'>
      <div onClick={() => {
        onChange('view', { list: filter?.view?.list ? 0 : 1 });
      }}>
        <i className={`fa fa-${filter?.view?.list ? 'border-all' : 'list'}`} style={{ fontSize: '1.5rem' }} />
      </div>
    </div>
  );
};

export default FilteringMenu;
