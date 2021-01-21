/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirChoice,
  FhirField,
  IBiologicallyDerivedProductManipulation,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("BiologicallyDerivedProductManipulation", "BackboneElement")
export class BiologicallyDerivedProductManipulation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "BiologicallyDerivedProduct.Manipulation";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirChoice("PrimitiveDateTime", "Period")
  public time?: PrimitiveDateTime | Period;

  public static parse(
    json: IBiologicallyDerivedProductManipulation,
    providedInstance: BiologicallyDerivedProductManipulation = new BiologicallyDerivedProductManipulation()
  ): BiologicallyDerivedProductManipulation {
    const newInstance: BiologicallyDerivedProductManipulation = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.timeDateTime !== undefined) {
      newInstance.time = PrimitiveDateTime.parsePrimitive(json.timeDateTime, json._timeDateTime);
    }
    if (json.timePeriod !== undefined) {
      newInstance.time = Period.parse(json.timePeriod);
    }
    return newInstance;
  }

  public static isBiologicallyDerivedProductManipulation(input?: unknown): input is BiologicallyDerivedProductManipulation {
    const castInput = input as BiologicallyDerivedProductManipulation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "BiologicallyDerivedProductManipulation";
  }

  public toJSON(): IBiologicallyDerivedProductManipulation {
    const result: IBiologicallyDerivedProductManipulation = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.time && PrimitiveDateTime.isPrimitiveDateTime(this.time)) {
      result.timeDateTime = this.time.value;
      result._timeDateTime = Extension.serializePrimitiveExtension(this.time);
    }

    if (this.time && Period.isPeriod(this.time)) {
      result.timePeriod = this.time.toJSON();
    }

    return result;
  }

  public clone(): BiologicallyDerivedProductManipulation {
    return BiologicallyDerivedProductManipulation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "BiologicallyDerivedProductManipulation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
