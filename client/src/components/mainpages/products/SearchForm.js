import React, { useContext } from 'react';
import { GlobalState } from "../../../GlobalState"


const SearchForm = () => {
  const state = useContext(GlobalState)
  const [categories] = state.categoriesAPI.categories

  const [category, setCategory] = state.productsAPI.category
  const [sort, setSort] = state.productsAPI.sort
  const [search, setSearch] = state.productsAPI.search


  const handleCategory = e => {
    setCategory(e.target.value)
    setSearch('')
  }


  return (
    <div className="search-form-container">
      <div className="inner-search-form-container">

        <div className="container">

          <div id="search-product-container">
            <div className="search-product-label" id="filter-product"><p>Filter by Homes</p></div>
            <div className="search-product-label" id="search-product"><p>Search for Homes</p></div>
            <div className="search-product-label" id="sort-product"><p>Sort by Homes</p></div>
          </div>

          <div className="row" id="search-items-box">

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
               <div className="form-group">
                <select className="form-select form-control search-form"
                value={category}
                onChange={handleCategory}
                aria-label="filter by products">
                  <option value=''>All Homes</option>
                  {
                    categories.map(category => (
                      <option value={"category=" + category._id} key={category._id}>
                        {category.name}
                      </option>
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <div className="form-group form-container">
                <form>
                  <input
                    type="text"
                    name="search"
                    id="search"
                    className="form-control"
                    placeholder="Search for Homes"
                    value={search}
                    onChange={e => setSearch(e.target.value.toLowerCase())}
                  />
                </form>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
              <div className="form-group">
                <select className="form-select form-control search-form"
                aria-label="filter by prices" value={sort} onChange={e => setSort(e.target.value)}>
                  <option value=''>Newest</option>
                  <option value='sort=oldest'>Oldest</option>
                  <option value='sort=-sold'>Best sales</option>
                  <option value='sort=-price'>Price: High-Low</option>
                  <option value='sort=price'>Price: Low-High</option>
                </select>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  )
}


export default SearchForm

