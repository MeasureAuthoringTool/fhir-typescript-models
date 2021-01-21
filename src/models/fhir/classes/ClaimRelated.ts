/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IClaimRelated,
  Identifier,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClaimRelated", "BackboneElement")
export class ClaimRelated extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Related";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public claim?: Reference;

  @FhirField("CodeableConcept")
  public relationship?: CodeableConcept;

  @FhirField("Identifier")
  public reference?: Identifier;

  public static parse(
    json: IClaimRelated,
    providedInstance: ClaimRelated = new ClaimRelated()
  ): ClaimRelated {
    const newInstance: ClaimRelated = BackboneElement.parse(json, providedInstance);
  
    if (json.claim !== undefined) {
      newInstance.claim = Reference.parse(json.claim);
    }
    if (json.relationship !== undefined) {
      newInstance.relationship = CodeableConcept.parse(json.relationship);
    }
    if (json.reference !== undefined) {
      newInstance.reference = Identifier.parse(json.reference);
    }
    return newInstance;
  }

  public static isClaimRelated(input?: unknown): input is ClaimRelated {
    const castInput = input as ClaimRelated;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimRelated";
  }

  public toJSON(): IClaimRelated {
    const result: IClaimRelated = super.toJSON();

    if (this.claim) {
      result.claim = this.claim.toJSON();
    }

    if (this.relationship) {
      result.relationship = this.relationship.toJSON();
    }

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    return result;
  }

  public clone(): ClaimRelated {
    return ClaimRelated.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimRelated";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
