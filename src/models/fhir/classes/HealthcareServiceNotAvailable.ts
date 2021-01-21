/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IHealthcareServiceNotAvailable,
  Period,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("HealthcareServiceNotAvailable", "BackboneElement")
export class HealthcareServiceNotAvailable extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HealthcareService.NotAvailable";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("Period")
  public during?: Period;

  public static parse(
    json: IHealthcareServiceNotAvailable,
    providedInstance: HealthcareServiceNotAvailable = new HealthcareServiceNotAvailable()
  ): HealthcareServiceNotAvailable {
    const newInstance: HealthcareServiceNotAvailable = BackboneElement.parse(json, providedInstance);
  
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.during !== undefined) {
      newInstance.during = Period.parse(json.during);
    }
    return newInstance;
  }

  public static isHealthcareServiceNotAvailable(input?: unknown): input is HealthcareServiceNotAvailable {
    const castInput = input as HealthcareServiceNotAvailable;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "HealthcareServiceNotAvailable";
  }

  public toJSON(): IHealthcareServiceNotAvailable {
    const result: IHealthcareServiceNotAvailable = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.during) {
      result.during = this.during.toJSON();
    }

    return result;
  }

  public clone(): HealthcareServiceNotAvailable {
    return HealthcareServiceNotAvailable.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "HealthcareServiceNotAvailable";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
