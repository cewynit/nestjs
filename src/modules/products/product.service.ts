import { Injectable } from "@nestjs/common";
import { Products } from "src/models/product.model";
@Injectable()
export class ProductService {

    private products: Products[] = [
        { Id: 1, CategoryId: 2, Price: 88888, ProductName: "CEW" },
        { Id: 2, CategoryId: 3, Price: 99999, ProductName: "MTU" },
    ]
    getProducts(): Products[] {
        return this.products;
    }

    createProduct(): string {
        return 'POST PRODUCT';
    }

    detailProduct(): string {
        return 'DETAIL PRODUCT';
    }

    updateProduct(): string {
        return 'UPDATE PRODUCT';
    }

    deleteProduct(): string {
        return 'DELETE PRODUCT';
    }
}