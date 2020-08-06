/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IHealthcareServiceNotAvailable,
  Period,
  PrimitiveString,
} from "../internal";

export class HealthcareServiceNotAvailable extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HealthcareService.NotAvailable";

  public description?: PrimitiveString;

  public during?: Period;

  public static parse(
    json: IHealthcareServiceNotAvailable,
    providedInstance: HealthcareServiceNotAvailable = new HealthcareServiceNotAvailable()
  ): HealthcareServiceNotAvailable {
    const newInstance: HealthcareServiceNotAvailable = BackboneElement.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.during) {
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
  
  public getTypeName(): string {
    return "HealthcareServiceNotAvailable";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
