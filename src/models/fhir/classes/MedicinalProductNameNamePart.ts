/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Coding,
  Extension,
  FhirField,
  IMedicinalProductNameNamePart,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("MedicinalProductNameNamePart", "BackboneElement")
export class MedicinalProductNameNamePart extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MedicinalProduct.Name.NamePart";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public part?: PrimitiveString;

  @FhirField("Coding")
  public type?: Coding;

  public static parse(
    json: IMedicinalProductNameNamePart,
    providedInstance: MedicinalProductNameNamePart = new MedicinalProductNameNamePart()
  ): MedicinalProductNameNamePart {
    const newInstance: MedicinalProductNameNamePart = BackboneElement.parse(json, providedInstance);
  
    if (json.part !== undefined) {
      newInstance.part = PrimitiveString.parsePrimitive(json.part, json._part);
    }
    if (json.type !== undefined) {
      newInstance.type = Coding.parse(json.type);
    }
    return newInstance;
  }

  public static isMedicinalProductNameNamePart(input?: unknown): input is MedicinalProductNameNamePart {
    const castInput = input as MedicinalProductNameNamePart;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MedicinalProductNameNamePart";
  }

  public toJSON(): IMedicinalProductNameNamePart {
    const result: IMedicinalProductNameNamePart = super.toJSON();

    if (this.part) {
      result.part = this.part.value;
      result._part = Extension.serializePrimitiveExtension(this.part);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    return result;
  }

  public clone(): MedicinalProductNameNamePart {
    return MedicinalProductNameNamePart.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MedicinalProductNameNamePart";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
