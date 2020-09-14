﻿using Microsoft.AspNetCore.Mvc.Rendering;
using System.Collections.Generic;
using Uplift.Models;

namespace Uplift.DataAccess.Data.Repository.IRepository
{
    public interface ICategoryRepository : IRepository<Category>
    {
        IEnumerable<SelectListItem> GetCategoryListForDropdown();

        void Update(Category category);
    }
}
