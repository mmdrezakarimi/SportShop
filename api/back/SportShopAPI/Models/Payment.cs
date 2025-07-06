using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportShopAPI.Models
{
    public class Payment
    {
        public int PaymentId { get; set; }

        public int OrderId { get; set; }

        public DateTime PaymentDate { get; set; } = DateTime.Now;

        public decimal Amount { get; set; }

        public string? PaymentMethod { get; set; }

        public string Status { get; set; } = "Pending";

        public Order? Order { get; set; }
    }
}
