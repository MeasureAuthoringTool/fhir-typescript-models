/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  Identifier,
  ISubstanceInstance,
  PrimitiveDateTime,
  SimpleQuantity,
  FhirType
} from "../internal";

@FhirType("SubstanceInstance", "BackboneElement")
export class SubstanceInstance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Substance.Instance";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("PrimitiveDateTime")
  public expiry?: PrimitiveDateTime;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  public static parse(
    json: ISubstanceInstance,
    providedInstance: SubstanceInstance = new SubstanceInstance()
  ): SubstanceInstance {
    const newInstance: SubstanceInstance = BackboneElement.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.expiry !== undefined) {
      newInstance.expiry = PrimitiveDateTime.parsePrimitive(json.expiry, json._expiry);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    return newInstance;
  }

  public static isSubstanceInstance(input?: unknown): input is SubstanceInstance {
    const castInput = input as SubstanceInstance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "SubstanceInstance";
  }

  public toJSON(): ISubstanceInstance {
    const result: ISubstanceInstance = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.expiry) {
      result.expiry = this.expiry.value;
      result._expiry = Extension.serializePrimitiveExtension(this.expiry);
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    return result;
  }

  public clone(): SubstanceInstance {
    return SubstanceInstance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "SubstanceInstance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
