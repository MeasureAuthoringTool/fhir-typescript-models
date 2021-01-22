/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  FhirField,
  IClaimPayee,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClaimPayee", "BackboneElement")
export class ClaimPayee extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Payee";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("Reference")
  public party?: Reference;

  public static parse(
    json: IClaimPayee,
    providedInstance: ClaimPayee = new ClaimPayee()
  ): ClaimPayee {
    const newInstance: ClaimPayee = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.party !== undefined) {
      newInstance.party = Reference.parse(json.party);
    }
    return newInstance;
  }

  public static isClaimPayee(input?: unknown): input is ClaimPayee {
    const castInput = input as ClaimPayee;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimPayee";
  }

  public toJSON(): IClaimPayee {
    const result: IClaimPayee = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.party) {
      result.party = this.party.toJSON();
    }

    return result;
  }

  public clone(): ClaimPayee {
    return ClaimPayee.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimPayee";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
