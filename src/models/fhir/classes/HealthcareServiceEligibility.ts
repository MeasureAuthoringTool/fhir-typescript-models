/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IHealthcareServiceEligibility,
  PrimitiveMarkdown,
  FieldMetadata
} from "../internal";

export class HealthcareServiceEligibility extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "HealthcareService.Eligibility";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "comment",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }];
  }

  public code?: CodeableConcept;

  public comment?: PrimitiveMarkdown;

  public static parse(
    json: IHealthcareServiceEligibility,
    providedInstance: HealthcareServiceEligibility = new HealthcareServiceEligibility()
  ): HealthcareServiceEligibility {
    const newInstance: HealthcareServiceEligibility = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.comment !== undefined) {
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

  public clone(): HealthcareServiceEligibility {
    return HealthcareServiceEligibility.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "HealthcareServiceEligibility";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
