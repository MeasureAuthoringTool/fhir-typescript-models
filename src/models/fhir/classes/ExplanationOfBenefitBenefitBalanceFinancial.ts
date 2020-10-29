/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IExplanationOfBenefitBenefitBalanceFinancial,
  Money,
  PrimitiveString,
  PrimitiveUnsignedInt,
  FieldMetadata
} from "../internal";

export class ExplanationOfBenefitBenefitBalanceFinancial extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.BenefitBalance.Financial";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "type",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "allowed",
      fieldType: [PrimitiveUnsignedInt, PrimitiveString, Money],
      isArray: false
    }, {
      fieldName: "used",
      fieldType: [PrimitiveUnsignedInt, Money],
      isArray: false
    }];
  }

  public type?: CodeableConcept;

  public allowed?: PrimitiveUnsignedInt | PrimitiveString | Money;

  public used?: PrimitiveUnsignedInt | Money;

  public static parse(
    json: IExplanationOfBenefitBenefitBalanceFinancial,
    providedInstance: ExplanationOfBenefitBenefitBalanceFinancial = new ExplanationOfBenefitBenefitBalanceFinancial()
  ): ExplanationOfBenefitBenefitBalanceFinancial {
    const newInstance: ExplanationOfBenefitBenefitBalanceFinancial = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.allowedUnsignedInt !== undefined) {
      newInstance.allowed = PrimitiveUnsignedInt.parsePrimitive(json.allowedUnsignedInt, json._allowedUnsignedInt);
    }
    if (json.allowedString !== undefined) {
      newInstance.allowed = PrimitiveString.parsePrimitive(json.allowedString, json._allowedString);
    }
    if (json.allowedMoney !== undefined) {
      newInstance.allowed = Money.parse(json.allowedMoney);
    }
    if (json.usedUnsignedInt !== undefined) {
      newInstance.used = PrimitiveUnsignedInt.parsePrimitive(json.usedUnsignedInt, json._usedUnsignedInt);
    }
    if (json.usedMoney !== undefined) {
      newInstance.used = Money.parse(json.usedMoney);
    }
    return newInstance;
  }

  public static isExplanationOfBenefitBenefitBalanceFinancial(input?: unknown): input is ExplanationOfBenefitBenefitBalanceFinancial {
    const castInput = input as ExplanationOfBenefitBenefitBalanceFinancial;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitBenefitBalanceFinancial";
  }

  public toJSON(): IExplanationOfBenefitBenefitBalanceFinancial {
    const result: IExplanationOfBenefitBenefitBalanceFinancial = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.allowed && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.allowed)) {
      result.allowedUnsignedInt = this.allowed.value;
      result._allowedUnsignedInt = Extension.serializePrimitiveExtension(this.allowed);
    }

    if (this.allowed && PrimitiveString.isPrimitiveString(this.allowed)) {
      result.allowedString = this.allowed.value;
      result._allowedString = Extension.serializePrimitiveExtension(this.allowed);
    }

    if (this.allowed && Money.isMoney(this.allowed)) {
      result.allowedMoney = this.allowed.toJSON();
    }

    if (this.used && PrimitiveUnsignedInt.isPrimitiveUnsignedInt(this.used)) {
      result.usedUnsignedInt = this.used.value;
      result._usedUnsignedInt = Extension.serializePrimitiveExtension(this.used);
    }

    if (this.used && Money.isMoney(this.used)) {
      result.usedMoney = this.used.toJSON();
    }

    return result;
  }

  public clone(): ExplanationOfBenefitBenefitBalanceFinancial {
    return ExplanationOfBenefitBenefitBalanceFinancial.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitBenefitBalanceFinancial";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
