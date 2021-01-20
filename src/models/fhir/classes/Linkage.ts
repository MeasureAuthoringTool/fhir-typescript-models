/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  ILinkage,
  LinkageItem,
  PrimitiveBoolean,
  Reference,
  FhirType
} from "../internal";

@FhirType("Linkage", "DomainResource")
export class Linkage extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Linkage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public active?: PrimitiveBoolean;

  @FhirField("Reference")
  public author?: Reference;

  @FhirList("LinkageItem")
  public item?: Array<LinkageItem>;

  public static parse(
    json: ILinkage,
    providedInstance: Linkage = new Linkage()
  ): Linkage {
    const newInstance: Linkage = DomainResource.parse(json, providedInstance);
  
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.author !== undefined) {
      newInstance.author = Reference.parse(json.author);
    }
    if (json.item !== undefined) {
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

  public clone(): Linkage {
    return Linkage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Linkage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
