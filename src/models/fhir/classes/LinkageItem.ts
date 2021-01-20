/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  ILinkageItem,
  LinkageType,
  Reference,
  FhirType
} from "../internal";

@FhirType("LinkageItem", "BackboneElement")
export class LinkageItem extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Linkage.Item";

  static readonly primaryCodePath: string | null = null;

  @FhirField("LinkageType")
  public type?: LinkageType;

  @FhirField("Reference")
  public resource?: Reference;

  public static parse(
    json: ILinkageItem,
    providedInstance: LinkageItem = new LinkageItem()
  ): LinkageItem {
    const newInstance: LinkageItem = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = LinkageType.parsePrimitive(json.type, json._type);
    }
    if (json.resource !== undefined) {
      newInstance.resource = Reference.parse(json.resource);
    }
    return newInstance;
  }

  public static isLinkageItem(input?: unknown): input is LinkageItem {
    const castInput = input as LinkageItem;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "LinkageItem";
  }

  public toJSON(): ILinkageItem {
    const result: ILinkageItem = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.resource) {
      result.resource = this.resource.toJSON();
    }

    return result;
  }

  public clone(): LinkageItem {
    return LinkageItem.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "LinkageItem";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
