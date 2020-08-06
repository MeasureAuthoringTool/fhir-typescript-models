/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DomainResource,
  Extension,
  ILinkage,
  LinkageItem,
  PrimitiveBoolean,
  Reference,
} from "../internal";

export class Linkage extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Linkage";

  public active?: PrimitiveBoolean;

  public author?: Reference;

  public item?: Array<LinkageItem>;

  public static parse(
    json: ILinkage,
    providedInstance: Linkage = new Linkage()
  ): Linkage {
    const newInstance: Linkage = DomainResource.parse(json, providedInstance);
  
    if (json.active) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.author) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.item) {
      newInstance.item = json.item.map((x) => LinkageItem.parse(x));
    }
    return newInstance;
  }

  public static isLinkage(input?: unknown): input is Linkage {
    const castInput = input as Linkage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Linkage";
  }

  public toJSON(): ILinkage {
    const result: ILinkage = super.toJSON();

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Linkage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
