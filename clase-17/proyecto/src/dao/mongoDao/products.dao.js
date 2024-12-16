import { productModel } from "../models/product.model.js";


class ProductDao{
  async getAll(query, option) {
      return await productModel.paginate(query, option);
  }

  async getById(id) {
    return await productModel.findById(id);
  }

  async create(data){
    return await productModel.create(data);
  }

  async update(id, data) {
    return await productModel.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id) {
    return await productModel.findByIdAndDelete(id);
  }
}

export const productDao = new ProductDao();