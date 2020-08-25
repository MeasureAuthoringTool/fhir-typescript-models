/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  Element,
  IDosageDoseAndRate,
  Range,
  Ratio,
  SimpleQuantity,
} from "../internal";

export class DosageDoseAndRate extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Dosage.DoseAndRate";

  public type?: CodeableConcept;

  public dose?: Range | SimpleQuantity;

  public rate?: Ratio | Range | SimpleQuantity;

  public static parse(
    json: IDosageDoseAndRate,
    providedInstance: DosageDoseAndRate = new DosageDoseAndRate()
  ): DosageDoseAndRate {
    const newInstance: DosageDoseAndRate = Element.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.doseRange !== undefined) {
      newInstance.dose = Range.parse(json.doseRange);
    }
    if (json.doseSimpleQuantity !== undefined) {
      newInstance.dose = SimpleQuantity.parse(json.doseSimpleQuantity);
    }
    if (json.rateRatio !== undefined) {
      newInstance.rate = Ratio.parse(json.rateRatio);
    }
    if (json.rateRange !== undefined) {
      newInstance.rate = Range.parse(json.rateRange);
    }
    if (json.rateSimpleQuantity !== undefined) {
      newInstance.rate = SimpleQuantity.parse(json.rateSimpleQuantity);
    }
    return newInstance;
  }

  public static isDosageDoseAndRate(input?: unknown): input is DosageDoseAndRate {
    const castInput = input as DosageDoseAndRate;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DosageDoseAndRate";
  }

  public toJSON(): IDosageDoseAndRate {
    const result: IDosageDoseAndRate = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.dose && Range.isRange(this.dose)) {
      result.doseRange = this.dose.toJSON();
    }

    if (this.dose && SimpleQuantity.isSimpleQuantity(this.dose)) {
      result.doseSimpleQuantity = this.dose.toJSON();
    }

    if (this.rate && Ratio.isRatio(this.rate)) {
      result.rateRatio = this.rate.toJSON();
    }

    if (this.rate && Range.isRange(this.rate)) {
      result.rateRange = this.rate.toJSON();
    }

    if (this.rate && SimpleQuantity.isSimpleQuantity(this.rate)) {
      result.rateSimpleQuantity = this.rate.toJSON();
    }

    return result;
  }

  public clone(): DosageDoseAndRate {
    return DosageDoseAndRate.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "DosageDoseAndRate";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
