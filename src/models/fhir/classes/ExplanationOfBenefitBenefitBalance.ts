/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  ExplanationOfBenefitBenefitBalanceFinancial,
  Extension,
  FhirField,
  FhirList,
  IExplanationOfBenefitBenefitBalance,
  PrimitiveBoolean,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ExplanationOfBenefitBenefitBalance", "BackboneElement")
export class ExplanationOfBenefitBenefitBalance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ExplanationOfBenefit.BenefitBalance";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public category?: CodeableConcept;

  @FhirField("PrimitiveBoolean")
  public excluded?: PrimitiveBoolean;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("CodeableConcept")
  public network?: CodeableConcept;

  @FhirField("CodeableConcept")
  public unit?: CodeableConcept;

  @FhirField("CodeableConcept")
  public term?: CodeableConcept;

  @FhirList("ExplanationOfBenefitBenefitBalanceFinancial")
  public financial?: Array<ExplanationOfBenefitBenefitBalanceFinancial>;

  public static parse(
    json: IExplanationOfBenefitBenefitBalance,
    providedInstance: ExplanationOfBenefitBenefitBalance = new ExplanationOfBenefitBenefitBalance()
  ): ExplanationOfBenefitBenefitBalance {
    const newInstance: ExplanationOfBenefitBenefitBalance = BackboneElement.parse(json, providedInstance);
  
    if (json.category !== undefined) {
      newInstance.category = CodeableConcept.parse(json.category);
    }
    if (json.excluded !== undefined) {
      newInstance.excluded = PrimitiveBoolean.parsePrimitive(json.excluded, json._excluded);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.network !== undefined) {
      newInstance.network = CodeableConcept.parse(json.network);
    }
    if (json.unit !== undefined) {
      newInstance.unit = CodeableConcept.parse(json.unit);
    }
    if (json.term !== undefined) {
      newInstance.term = CodeableConcept.parse(json.term);
    }
    if (json.financial !== undefined) {
      newInstance.financial = json.financial.map((x) => ExplanationOfBenefitBenefitBalanceFinancial.parse(x));
    }
    return newInstance;
  }

  public static isExplanationOfBenefitBenefitBalance(input?: unknown): input is ExplanationOfBenefitBenefitBalance {
    const castInput = input as ExplanationOfBenefitBenefitBalance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ExplanationOfBenefitBenefitBalance";
  }

  public toJSON(): IExplanationOfBenefitBenefitBalance {
    const result: IExplanationOfBenefitBenefitBalance = super.toJSON();

    if (this.category) {
      result.category = this.category.toJSON();
    }

    if (this.excluded) {
      result.excluded = this.excluded.value;
      result._excluded = Extension.serializePrimitiveExtension(this.excluded);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.network) {
      result.network = this.network.toJSON();
    }

    if (this.unit) {
      result.unit = this.unit.toJSON();
    }

    if (this.term) {
      result.term = this.term.toJSON();
    }

    if (this.financial) {
      result.financial = this.financial.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ExplanationOfBenefitBenefitBalance {
    return ExplanationOfBenefitBenefitBalance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ExplanationOfBenefitBenefitBalance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
