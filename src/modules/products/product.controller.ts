import { Controller, Get, Post, Delete, Put } from "@nestjs/common";
import { ProductService } from "./product.service";
import { ReponseData } from "src/global/globalClass";
import { Products } from "src/models/product.model";
import { HttpMessage,HttpStatus } from "src/global/globalEnum";

@Controller('products')
export class ProductController {

    constructor(private readonly productService: ProductService) { }

    @Get()
    getProducts(): ReponseData<Products[]> {
        try {
            return new ReponseData<Products[]>(this.productService.getProducts(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ReponseData<Products[]>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Post()
    createProduct(): ReponseData<string> {
        try {
            return new ReponseData<string>(this.productService.createProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ReponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Get('/:id')
    detailProduct(): ReponseData<string> {
        try {
            return new ReponseData<string>(this.productService.detailProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ReponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Put('/:id')
    updateProduct(): ReponseData<string> {
        try {
            return new ReponseData<string>(this.productService.updateProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ReponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }

    @Delete('/:id')
    deleteProduct(): ReponseData<string> {
        try {
            return new ReponseData<string>(this.productService.deleteProduct(), HttpStatus.SUCCESS, HttpMessage.SUCCESS);
        } catch (error) {
            return new ReponseData<string>(null, HttpStatus.ERROR, HttpMessage.ERROR);
        }
    }
}