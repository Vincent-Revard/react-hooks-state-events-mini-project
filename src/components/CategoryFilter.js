import React from "react";

function CategoryFilter({
categories: [all, code, food, money, misc],
  handleCategoryFilter,
  filteredCategory,
}) {
  return (
    <div className="categories">
      <h5>Category filters</h5>
      <div onClick={handleCategoryFilter}>
<button className={filteredCategory === all ? "selected" : ""}>
  {all}
</button>
<button className={filteredCategory === code ? "selected" : ""}>
  {code}
</button>
<button className={filteredCategory === food ? "selected" : ""}>
  {food}
</button>
<button className={filteredCategory === money ? "selected" : ""}>
  {money}
</button>
<button className={filteredCategory === misc ? "selected" : ""}>
  {misc}
</button>
      </div>
    </div>
  );
}

export default CategoryFilter;

// import React from "react";
// import { v4 as uuidv4 } from "uuid"
// //All, Code, Food, Money, Misc
// function CategoryFilter({ categories, handleCategoryFilter , filteredCategory}) {
//     const mappedCategories = categories.map(category => {
//       return (
      
//         <button 
//         className={filteredCategory === category ? 'selected': ''}
//         key={uuidv4()}>
//         {category}
//         </button>
//       )
//     })

//   return (
//     <div className="categories">
//       <h5>Category filters</h5>
//         <div onClick={handleCategoryFilter}>
//         {mappedCategories}
//         </div>   
//     </div>
//   );
// }

// export default CategoryFilter;
