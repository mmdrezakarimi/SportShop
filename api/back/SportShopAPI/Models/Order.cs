using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportShopAPI.Models
{
    public class Order
    {
        public int OrderId { get; set; }

        public int UserId { get; set; }

        public DateTime OrderDate { get; set; } = DateTime.Now;

        public string Status { get; set; } = "Processing";

        public User? User { get; set; }

        public ICollection<OrderDetail>? OrderDetails { get; set; }

        public Payment? Payment { get; set; }
    }
}
