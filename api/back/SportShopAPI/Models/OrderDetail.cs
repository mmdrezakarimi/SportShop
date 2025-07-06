using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportShopAPI.Models
{
    public class OrderDetail
    {
        public int OrderDetailId { get; set; }

        public int OrderId { get; set; }

        public int ProductId { get; set; }

        public int Quantity { get; set; } = 1;

        public decimal UnitPrice { get; set; }

        public Order? Order { get; set; }

        public Product? Product { get; set; }
    }
}
