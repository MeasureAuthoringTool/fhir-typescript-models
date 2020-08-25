/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IClaimResponseInsurance,
  PrimitiveBoolean,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
} from "../internal";

export class ClaimResponseInsurance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Insurance";

  public sequence?: PrimitivePositiveInt;

  public focal?: PrimitiveBoolean;

  public coverage?: Reference;

  public businessArrangement?: PrimitiveString;

  public claimResponse?: Reference;

  public static parse(
    json: IClaimResponseInsurance,
    providedInstance: ClaimResponseInsurance = new ClaimResponseInsurance()
  ): ClaimResponseInsurance {
    const newInstance: ClaimResponseInsurance = BackboneElement.parse(json, providedInstance);
  
    if (json.sequence) {
      newInstance.sequence = PrimitivePositiveInt.parsePrimitive(json.sequence, json._sequence);
    }
    if (json.focal) {
      newInstance.focal = PrimitiveBoolean.parsePrimitive(json.focal, json._focal);
    }
    if (json.coverage) {
      newInstance.coverage = Reference.parse(json.coverage);
    }
    if (json.businessArrangement) {
      newInstance.businessArrangement = PrimitiveString.parsePrimitive(json.businessArrangement, json._businessArrangement);
    }
    if (json.claimResponse) {
      newInstance.claimResponse = Reference.parse(json.claimResponse);
    }
    return newInstance;
  }

  public static isClaimResponseInsurance(input?: unknown): input is ClaimResponseInsurance {
    const castInput = input as ClaimResponseInsurance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseInsurance";
  }

  public toJSON(): IClaimResponseInsurance {
    const result: IClaimResponseInsurance = super.toJSON();

    if (this.sequence) {
      result.sequence = this.sequence.value;
      result._sequence = Extension.serializePrimitiveExtension(this.sequence);
    }

    if (this.focal) {
      result.focal = this.focal.value;
      result._focal = Extension.serializePrimitiveExtension(this.focal);
    }

    if (this.coverage) {
      result.coverage = this.coverage.toJSON();
    }

    if (this.businessArrangement) {
      result.businessArrangement = this.businessArrangement.value;
      result._businessArrangement = Extension.serializePrimitiveExtension(this.businessArrangement);
    }

    if (this.claimResponse) {
      result.claimResponse = this.claimResponse.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ClaimResponseInsurance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
