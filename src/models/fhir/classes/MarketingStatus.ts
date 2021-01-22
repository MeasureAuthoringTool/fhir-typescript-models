/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirField,
  IMarketingStatus,
  Period,
  PrimitiveDateTime,
  FhirType
} from "../internal";

@FhirType("MarketingStatus", "BackboneElement")
export class MarketingStatus extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MarketingStatus";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public country?: CodeableConcept;

  @FhirField("CodeableConcept")
  public jurisdiction?: CodeableConcept;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  @FhirField("Period")
  public dateRange?: Period;

  @FhirField("PrimitiveDateTime")
  public restoreDate?: PrimitiveDateTime;

  public static parse(
    json: IMarketingStatus,
    providedInstance: MarketingStatus = new MarketingStatus()
  ): MarketingStatus {
    const newInstance: MarketingStatus = BackboneElement.parse(json, providedInstance);
  
    if (json.country !== undefined) {
      newInstance.country = CodeableConcept.parse(json.country);
    }
    if (json.jurisdiction !== undefined) {
      newInstance.jurisdiction = CodeableConcept.parse(json.jurisdiction);
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.dateRange !== undefined) {
      newInstance.dateRange = Period.parse(json.dateRange);
    }
    if (json.restoreDate !== undefined) {
      newInstance.restoreDate = PrimitiveDateTime.parsePrimitive(json.restoreDate, json._restoreDate);
    }
    return newInstance;
  }

  public static isMarketingStatus(input?: unknown): input is MarketingStatus {
    const castInput = input as MarketingStatus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MarketingStatus";
  }

  public toJSON(): IMarketingStatus {
    const result: IMarketingStatus = super.toJSON();

    if (this.country) {
      result.country = this.country.toJSON();
    }

    if (this.jurisdiction) {
      result.jurisdiction = this.jurisdiction.toJSON();
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.dateRange) {
      result.dateRange = this.dateRange.toJSON();
    }

    if (this.restoreDate) {
      result.restoreDate = this.restoreDate.value;
      result._restoreDate = Extension.serializePrimitiveExtension(this.restoreDate);
    }

    return result;
  }

  public clone(): MarketingStatus {
    return MarketingStatus.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MarketingStatus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
