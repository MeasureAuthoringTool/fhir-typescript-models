/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IClaimInsurance,
  Identifier,
  PrimitiveBoolean,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
} from "../internal";

export class ClaimInsurance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Claim.Insurance";

  public sequence?: PrimitivePositiveInt;

  public focal?: PrimitiveBoolean;

  public identifier?: Identifier;

  public coverage?: Reference;

  public businessArrangement?: PrimitiveString;

  public preAuthRef?: Array<PrimitiveString>;

  public claimResponse?: Reference;

  public static parse(
    json: IClaimInsurance,
    providedInstance: ClaimInsurance = new ClaimInsurance()
  ): ClaimInsurance {
    const newInstance: ClaimInsurance = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.focal) {
      newInstance.focal = PrimitiveBoolean.parsePrimitive(json.focal, json._focal);
    }
    if (json.identifier) {
      newInstance.identifier = Identifier.parse(json.identifier);
    }
    if (json.coverage) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    if (json.businessArrangement) {
      newInstance.businessArrangement = PrimitiveString.parsePrimitive(json.businessArrangement, json._businessArrangement);
    }
    if (json.preAuthRef) {
      newInstance.preAuthRef = json.preAuthRef.map((x, i) => {
        const ext = json._preAuthRef && json._preAuthRef[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.claimResponse) {
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
  
  public getTypeName(): string {
    return "ClaimInsurance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
