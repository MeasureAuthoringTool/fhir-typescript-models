/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  FhirList,
  INutritionOrderSupplement,
  PrimitiveString,
  SimpleQuantity,
  Timing,
  FhirType
} from "../internal";

@FhirType("NutritionOrderSupplement", "BackboneElement")
export class NutritionOrderSupplement extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "NutritionOrder.Supplement";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("PrimitiveString")
  public productName?: PrimitiveString;

  @FhirList("Timing")
  public schedule?: Array<Timing>;

  @FhirField("SimpleQuantity")
  public quantity?: SimpleQuantity;

  @FhirField("PrimitiveString")
  public instruction?: PrimitiveString;

  public static parse(
    json: INutritionOrderSupplement,
    providedInstance: NutritionOrderSupplement = new NutritionOrderSupplement()
  ): NutritionOrderSupplement {
    const newInstance: NutritionOrderSupplement = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.productName !== undefined) {
      newInstance.productName = PrimitiveString.parsePrimitive(json.productName, json._productName);
    }
    if (json.schedule !== undefined) {
      newInstance.schedule = json.schedule.map((x) => Timing.parse(x));
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = SimpleQuantity.parse(json.quantity);
    }
    if (json.instruction !== undefined) {
      newInstance.instruction = PrimitiveString.parsePrimitive(json.instruction, json._instruction);
    }
    return newInstance;
  }

  public static isNutritionOrderSupplement(input?: unknown): input is NutritionOrderSupplement {
    const castInput = input as NutritionOrderSupplement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "NutritionOrderSupplement";
  }

  public toJSON(): INutritionOrderSupplement {
    const result: INutritionOrderSupplement = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.productName) {
      result.productName = this.productName.value;
      result._productName = Extension.serializePrimitiveExtension(this.productName);
    }

    if (this.schedule) {
      result.schedule = this.schedule.map((x) => x.toJSON());
    }

    if (this.quantity) {
      result.quantity = this.quantity.toJSON();
    }

    if (this.instruction) {
      result.instruction = this.instruction.value;
      result._instruction = Extension.serializePrimitiveExtension(this.instruction);
    }

    return result;
  }

  public clone(): NutritionOrderSupplement {
    return NutritionOrderSupplement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "NutritionOrderSupplement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
