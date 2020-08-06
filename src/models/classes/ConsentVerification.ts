/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IConsentVerification,
  PrimitiveBoolean,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class ConsentVerification extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Consent.Verification";

  public verified?: PrimitiveBoolean;

  public verifiedWith?: Reference;

  public verificationDate?: PrimitiveDateTime;

  public static parse(
    json: IConsentVerification,
    providedInstance: ConsentVerification = new ConsentVerification()
  ): ConsentVerification {
    const newInstance: ConsentVerification = BackboneElement.parse(json, providedInstance);
  
    if (json.verified) {
      newInstance.verified = PrimitiveBoolean.parsePrimitive(json.verified, json._verified);
    }
    if (json.verifiedWith) {
      newInstance.verifiedWith = Reference.parse(json.verifiedWith);
    }
    if (json.verificationDate) {
      newInstance.verificationDate = PrimitiveDateTime.parsePrimitive(json.verificationDate, json._verificationDate);
    }
    return newInstance;
  }

  public static isConsentVerification(input?: unknown): input is ConsentVerification {
    const castInput = input as ConsentVerification;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConsentVerification";
  }

  public toJSON(): IConsentVerification {
    const result: IConsentVerification = super.toJSON();

    if (this.verified) {
      result.verified = this.verified.value;
      result._verified = Extension.serializePrimitiveExtension(this.verified);
    }

    if (this.verifiedWith) {
      result.verifiedWith = this.verifiedWith.toJSON();
    }

    if (this.verificationDate) {
      result.verificationDate = this.verificationDate.value;
      result._verificationDate = Extension.serializePrimitiveExtension(this.verificationDate);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ConsentVerification";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
