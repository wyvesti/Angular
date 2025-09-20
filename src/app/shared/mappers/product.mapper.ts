import { ProductDTO } from "../../core/models/product.dto";
import { ProductDto } from "../../core/services/products.service";
import { ProductVM } from "../models/product.vm";

export function mapProductDTOToVM(dto: ProductDto): ProductVM {
  return {
    id: dto.id,
    name: dto.name,
    description: '',
    price: dto.price,
    imageUrl: dto.imageUrl,
    available: dto.available,
    availabilityLabel: dto.available ? 'Disponible' : 'Indisponible'
  };
}
