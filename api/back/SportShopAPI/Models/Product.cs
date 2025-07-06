using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportShopAPI.Models
{
    public class Product
    {
        public int ProductId { get; set; }

        public int CategoryId { get; set; }

        [Required]
        [MaxLength(100)]
        public string? Name { get; set; }

        [MaxLength(500)]
        public string? Description { get; set; }

        [Required]
        public decimal Price { get; set; }

        public int StockQuantity { get; set; } = 0;

        [MaxLength(255)]
        public string? ImageUrl { get; set; }

        public Category? Category { get; set; }

        public ICollection<OrderDetail>? OrderDetails { get; set; }
    }
}
