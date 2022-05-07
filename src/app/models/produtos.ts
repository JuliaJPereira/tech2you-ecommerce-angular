export class Produtos {
  id?: number;
  name?: string;
  image?: string;
  oldPrice?: number;
  price?: number;
  description?: string;

  constructor(object: Partial<Produtos>) {
    Object.assign(this, object);
  }
}
