/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IClaimResponseItemAdjudication,
  Money,
  PrimitiveDecimal,
} from "../internal";

export class ClaimResponseItemAdjudication extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse.Item.Adjudication";

  public category?: CodeableConcept;

  public reason?: CodeableConcept;

  public amount?: Money;

  public value?: PrimitiveDecimal;

  public static parse(
    json: IClaimResponseItemAdjudication,
    providedInstance: ClaimResponseItemAdjudication = new ClaimResponseItemAdjudication()
  ): ClaimResponseItemAdjudication {
    const newInstance: ClaimResponseItemAdjudication = BackboneElement.parse(json, providedInstance);
  
    if (json.category) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.reason) {
      newInstance.reason = CodeableConcept.parse(json.reason);
    }
    if (json.amount) {
      newInstance.amount = Money.parse(json.amount);
    }
    if (json.value) {
      newInstance.value = PrimitiveDecimal.parsePrimitive(json.value, json._value);
    }
    return newInstance;
  }

  public static isClaimResponseItemAdjudication(input?: unknown): input is ClaimResponseItemAdjudication {
    const castInput = input as ClaimResponseItemAdjudication;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponseItemAdjudication";
  }

  public toJSON(): IClaimResponseItemAdjudication {
    const result: IClaimResponseItemAdjudication = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.reason) {
      result.reason = this.reason.toJSON();
    }

    if (this.amount) {
      result.amount = this.amount.toJSON();
    }

    if (this.value) {
      result.value = this.value.value;
      result._value = Extension.serializePrimitiveExtension(this.value);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ClaimResponseItemAdjudication";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
