import { ProductDTO } from "../../core/models/product.dto";
import { ProductVM } from "../models/product.vm";

export function mapProductDTOToVM(dto: ProductDTO): ProductVM {
    return {
        id: dto.id,
        title: dto.name,
        description: dto.description,
        price: dto.price,
        image: dto.imageUrl,
        available: dto.isAvailable,
        availabilityLabel: dto.isAvailable ? "" : "Indisponible"
    };
}