export class Products {
    Id?: number;
    CategoryId?: number;
    ProductName?: string;
    Price?:Number;

    constructor({Id, CategoryId,ProductName,Price}){
        if (Id !==null) this.Id = Id;
        if (CategoryId !==null) this.CategoryId = CategoryId;
        if (ProductName !==null) this.ProductName = ProductName;
        if (Price !==null) this.Price = Price;      
    }
}