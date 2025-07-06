Create DataBase SportShopDB;
GO
use SportShopDB;
GO
-- UsersTable
create table Users (
 UserId INT IDENTITY(1,1) PRIMARY KEY,
 Username NVARCHAR(100) NOT NULL,
 Email NVARCHAR(100) NOT NULL UNIQUE,
 PasswordHash NVARCHAR(255) NOT NULL,
 Role NVARCHAR(20) NOT NULL DEFAULT 'User',
 CreatedAT DATETIME NOT NULL DEFAULT GETDATE()
);
GO
--CategoriesTable
CREATE TABLE Categories (
    CategoryId INT IDENTITY(1,1) PRIMARY KEY,
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(255) NULL
);
GO
--ProductsTable
CREATE TABLE Products (
    ProductId INT IDENTITY(1,1) PRIMARY KEY,
    CategoryId INT NOT NULL,
    Name NVARCHAR(100) NOT NULL,
    Description NVARCHAR(500) NULL,
    Price DECIMAL(18,2) NOT NULL,
    StockQuantity INT NOT NULL DEFAULT 0,
    ImageUrl NVARCHAR(255) NULL,
    FOREIGN KEY (CategoryId) REFERENCES Categories(CategoryId)
);
GO
--OrdersTable
CREATE TABLE Orders (
    OrderId INT IDENTITY(1,1) PRIMARY KEY,
    UserId INT NOT NULL,
    OrderDate DATETIME NOT NULL DEFAULT GETDATE(),
    Status NVARCHAR(50) NOT NULL DEFAULT 'Processing',
    FOREIGN KEY (UserId) REFERENCES Users(UserId)
);
GO
--OrderDetails
CREATE TABLE OrderDetails (
    OrderDetailId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL,
    ProductId INT NOT NULL,
    Quantity INT NOT NULL DEFAULT 1,
    UnitPrice DECIMAL(18,2) NOT NULL,
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId),
    FOREIGN KEY (ProductId) REFERENCES Products(ProductId)
);
GO
--PaymentsTable
CREATE TABLE Payments (
    PaymentId INT IDENTITY(1,1) PRIMARY KEY,
    OrderId INT NOT NULL,
    PaymentDate DATETIME NOT NULL DEFAULT GETDATE(),
    Amount DECIMAL(18,2) NOT NULL,
    PaymentMethod NVARCHAR(50) NOT NULL,
    Status NVARCHAR(50) NOT NULL DEFAULT 'Pending',
    FOREIGN KEY (OrderId) REFERENCES Orders(OrderId)
);
GO