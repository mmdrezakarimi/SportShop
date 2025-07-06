using System;
using Microsoft.EntityFrameworkCore;
using SportShopAPI.Models;

namespace SportShopAPI.Data
{
    public class SportShopContext : DbContext
    {
        public SportShopContext(DbContextOptions<SportShopContext> options)
            : base(options)
        {
        }

        public DbSet<User> User { get; set; }

        public DbSet<Category> Category{ get; set; }

        public DbSet<Product> Product { get; set; }

        public DbSet<Order> Order { get; set; }

        public DbSet<OrderDetail> OrderDetail { get; set; }

        public DbSet<Payment> Payment { get; set; }
    }
}
