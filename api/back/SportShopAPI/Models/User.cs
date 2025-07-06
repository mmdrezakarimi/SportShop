using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SportShopAPI.Models
{
	public class User
	{
		public int UserId { get; set; }

		[Required]
		[MaxLength(50)]
		public string? Username { get; set; }

		[Required]
		[MaxLength(100)]
		public string? Email { get; set; }

		[Required]
		public string? PasswordHash { get; set; }

		[Required]
		[MaxLength(20)]
		public string Role { get; set; } = "User";

		public DateTime CreatedAt { get; set; } = DateTime.Now;
	}
}
