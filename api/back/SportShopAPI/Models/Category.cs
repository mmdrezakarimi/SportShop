using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportShopAPI.Models
{
    public class Category
    {
        public int CategoryId { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Name { get; set; }

        [MaxLength(255)]
        public string? Description { get; set; }

        public ICollection<Product>? Products { get; set; }
    }
}
