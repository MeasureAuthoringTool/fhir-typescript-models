/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  IClaimInsurance,
  Identifier,
  PrimitiveBoolean,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("ClaimInsurance", "BackboneElement")
export class ClaimInsurance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Insurance";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitivePositiveInt")
  public sequence?: PrimitivePositiveInt;

  @FhirField("PrimitiveBoolean")
  public focal?: PrimitiveBoolean;

  @FhirField("Identifier")
  public identifier?: Identifier;

  @FhirField("Reference")
  public coverage?: Reference;

  @FhirField("PrimitiveString")
  public businessArrangement?: PrimitiveString;

  @FhirList("PrimitiveString")
  public preAuthRef?: Array<PrimitiveString>;

  @FhirField("Reference")
  public claimResponse?: Reference;

  public static parse(
    json: IClaimInsurance,
    providedInstance: ClaimInsurance = new ClaimInsurance()
  ): ClaimInsurance {
    const newInstance: ClaimInsurance = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence !== undefined) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.focal !== undefined) {
      newInstance.focal = PrimitiveBoolean.parsePrimitive(json.focal, json._focal);
    }
    if (json.identifier !== undefined) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.coverage !== undefined) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    if (json.businessArrangement !== undefined) {
      newInstance.businessArrangement = PrimitiveString.parsePrimitive(json.businessArrangement, json._businessArrangement);
    }
    if (json.preAuthRef !== undefined) {
      newInstance.preAuthRef = json.preAuthRef.map((x, i) => PrimitiveString.parsePrimitive(x, json._preAuthRef?.[i]));
    }
    if (json.claimResponse !== undefined) {
      newInstance.claimResponse = Reference.parse(json.claimResponse);
    }
    return newInstance;
  }

  public static isClaimInsurance(input?: unknown): input is ClaimInsurance {
    const castInput = input as ClaimInsurance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimInsurance";
  }

  public toJSON(): IClaimInsurance {
    const result: IClaimInsurance = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.focal) {
      result.focal = this.focal.value;
      result._focal = Extension.serializePrimitiveExtension(this.focal);
    }

    if (this.identifier) {
      result.identifier = this.identifier.toJSON();
    }

    if (this.coverage) {
      result.coverage = this.coverage.toJSON();
    }

    if (this.businessArrangement) {
      result.businessArrangement = this.businessArrangement.value;
      result._businessArrangement = Extension.serializePrimitiveExtension(this.businessArrangement);
    }

    if (this.preAuthRef) {
      result.preAuthRef = this.preAuthRef.filter(x => !!x).map(x => x.value) as typeof result.preAuthRef;
      result._preAuthRef = Extension.serializePrimitiveExtensionArray(this.preAuthRef);
    }

    if (this.claimResponse) {
      result.claimResponse = this.claimResponse.toJSON();
    }

    return result;
  }

  public clone(): ClaimInsurance {
    return ClaimInsurance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimInsurance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
