import { mapProductDTOToVM } from './product.mapper';
import { ProductDTO } from '../../core/models/product.dto';

describe('mapProductDTOToVM', () => {
  it('doit mapper un produit disponible correctement', () => {
    const dto: ProductDTO = {
      id: '1',
      name: 'Burger Test',
      description: 'Délicieux',
      price: 10,
      imageUrl: 'url.jpg',
      isAvailable: true
    };
    const vm = mapProductDTOToVM(dto);
    expect(vm.title).toBe('Burger Test');
    expect(vm.available).toBe(true);
    expect(vm.availabilityLabel).toBe('');
  });

  it('doit mapper un produit indisponible correctement', () => {
    const dto: ProductDTO = {
      id: '2',
      name: 'Burger Indispo',
      description: 'Rupture',
      price: 12,
      imageUrl: 'url2.jpg',
      isAvailable: false
    };
    const vm = mapProductDTOToVM(dto);
    expect(vm.title).toBe('Burger Indispo');
    expect(vm.available).toBe(false);
    expect(vm.availabilityLabel).toBe('Indisponible');
  });
});
