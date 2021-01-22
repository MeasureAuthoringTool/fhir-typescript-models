/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IClaimCareTeam,
  PrimitiveBoolean,
  PrimitivePositiveInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClaimCareTeam", "BackboneElement")
export class ClaimCareTeam extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.CareTeam";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirField("Reference")
  public provider?: Reference;

  @FhirField("PrimitiveBoolean")
  public responsible?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public role?: CodeableConcept;

  @FhirField("CodeableConcept")
  public qualification?: CodeableConcept;

  public static parse(
    json: IClaimCareTeam,
    providedInstance: ClaimCareTeam = new ClaimCareTeam()
  ): ClaimCareTeam {
    const newInstance: ClaimCareTeam = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.provider !== undefined) {
      newInstance.provider = Reference.parse(json.provider);
    }
    if (json.responsible !== undefined) {
      newInstance.responsible = PrimitiveBoolean.parsePrimitive(json.responsible, json._responsible);
    }
    if (json.role !== undefined) {
      newInstance.role = CodeableConcept.parse(json.role);
    }
    if (json.qualification !== undefined) {
      newInstance.qualification = CodeableConcept.parse(json.qualification);
    }
    return newInstance;
  }

  public static isClaimCareTeam(input?: unknown): input is ClaimCareTeam {
    const castInput = input as ClaimCareTeam;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimCareTeam";
  }

  public toJSON(): IClaimCareTeam {
    const result: IClaimCareTeam = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.provider) {
      result.provider = this.provider.toJSON();
    }

    if (this.responsible) {
      result.responsible = this.responsible.value;
      result._responsible = Extension.serializePrimitiveExtension(this.responsible);
    }

    if (this.role) {
      result.role = this.role.toJSON();
    }

    if (this.qualification) {
      result.qualification = this.qualification.toJSON();
    }

    return result;
  }

  public clone(): ClaimCareTeam {
    return ClaimCareTeam.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimCareTeam";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
