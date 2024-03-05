export class Product {
    private _productId: number;
    public get productId(): number {
      return this._productId;
    }
    public set productId(value: number) {
      this._productId = value;
    }
    private _productTitle: string;
    public get productTitle(): string {
      return this._productTitle;
    }
    public set productTitle(value: string) {
      this._productTitle = value;
    }
    private _url_image: string | undefined;
    public get url_image(): string | undefined {
        return this._url_image;
    }
    public set url_image(value: string | undefined) {
        this._url_image = value;
    }
    private _productPrice: string;
    public get productPrice(): string {
      return this._productPrice;
    }
    public set productPrice(value: string) {
      this._productPrice = value;
    }
    
    private _description: string;
    public get description(): string {
      return this._description;
    }
    public set description(value: string) {
      this._description = value;
    } 
  
    private _quantity: number; // New property
    public get quantity(): number {
      return this._quantity;
    }
    public set quantity(value: number) {
      this._quantity = value;
    }
    private _categorie: string;
  public get categorie(): string {
    return this._categorie;
  }
  public set categorie(value: string) {
    this._categorie = value;
  }

  private _promotion: string;
  public get promotion(): string {
    return this._promotion;
  }
  public set promotion(value: string) {
    this._promotion = value;
  }

  
    constructor(
      productId: number,
      productTitle: string,
      productImage: string,
      productPrice: string,
      description : string ,
      quantity: number, 
      promotion : string,
      categ : string ,
    ) {
      this._productId = productId;
      this._productTitle = productTitle;
      this.url_image = productImage;
      this._productPrice = productPrice;
      this._description = description;
      this._quantity = quantity; // Initialize quantity
      this._categorie = categ;
      this._promotion = promotion;
    }
  
    printProduct(): void {
      console.log(`ID: ${this.productId}`);
      console.log(`Titre: ${this.productTitle}`);
      console.log(`Image: ${this.url_image}`);
      console.log(`Prix: ${this.productPrice} $`);
      console.log(`Description: ${this._description}`);
      console.log(`Quantité: ${this._quantity}`);
    }
  }
  
