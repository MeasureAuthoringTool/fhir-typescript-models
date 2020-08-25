/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IHealthcareServiceEligibility,
  PrimitiveMarkdown,
} from "../internal";

export class HealthcareServiceEligibility extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HealthcareService.Eligibility";

  public code?: CodeableConcept;

  public comment?: PrimitiveMarkdown;

  public static parse(
    json: IHealthcareServiceEligibility,
    providedInstance: HealthcareServiceEligibility = new HealthcareServiceEligibility()
  ): HealthcareServiceEligibility {
    const newInstance: HealthcareServiceEligibility = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.comment) {
      newInstance.comment = PrimitiveMarkdown.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isHealthcareServiceEligibility(input?: unknown): input is HealthcareServiceEligibility {
    const castInput = input as HealthcareServiceEligibility;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "HealthcareServiceEligibility";
  }

  public toJSON(): IHealthcareServiceEligibility {
    const result: IHealthcareServiceEligibility = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "HealthcareServiceEligibility";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
