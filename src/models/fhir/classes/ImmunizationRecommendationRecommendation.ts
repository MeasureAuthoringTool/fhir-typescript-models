/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IImmunizationRecommendationRecommendation,
  ImmunizationRecommendationRecommendationDateCriterion,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImmunizationRecommendationRecommendation", "BackboneElement")
export class ImmunizationRecommendationRecommendation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImmunizationRecommendation.Recommendation";

  static readonly primaryCodePath: string | null = null;

  @FhirList("CodeableConcept")
  public vaccineCode?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public targetDisease?: CodeableConcept;

  @FhirList("CodeableConcept")
  public contraindicatedVaccineCode?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public forecastStatus?: CodeableConcept;

  @FhirList("CodeableConcept")
  public forecastReason?: Array<CodeableConcept>;

  @FhirList("ImmunizationRecommendationRecommendationDateCriterion")
  public dateCriterion?: Array<ImmunizationRecommendationRecommendationDateCriterion>;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("PrimitiveString")
  public series?: PrimitiveString;

  @FhirChoice("PrimitivePositiveInt", "PrimitiveString")
  public doseNumber?: PrimitivePositiveInt | PrimitiveString;

  @FhirChoice("PrimitivePositiveInt", "PrimitiveString")
  public seriesDoses?: PrimitivePositiveInt | PrimitiveString;

  @FhirList("Reference")
  public supportingImmunization?: Array<Reference>;

  @FhirList("Reference")
  public supportingPatientInformation?: Array<Reference>;

  public static parse(
    json: IImmunizationRecommendationRecommendation,
    providedInstance: ImmunizationRecommendationRecommendation = new ImmunizationRecommendationRecommendation()
  ): ImmunizationRecommendationRecommendation {
    const newInstance: ImmunizationRecommendationRecommendation = BackboneElement.parse(json, providedInstance);
  
    if (json.vaccineCode !== undefined) {
      newInstance.vaccineCode = json.vaccineCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.targetDisease !== undefined) {
      newInstance.targetDisease = CodeableConcept.parse(json.targetDisease);
    }
    if (json.contraindicatedVaccineCode !== undefined) {
      newInstance.contraindicatedVaccineCode = json.contraindicatedVaccineCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.forecastStatus !== undefined) {
      newInstance.forecastStatus = CodeableConcept.parse(json.forecastStatus);
    }
    if (json.forecastReason !== undefined) {
      newInstance.forecastReason = json.forecastReason.map((x) => CodeableConcept.parse(x));
    }
    if (json.dateCriterion !== undefined) {
      newInstance.dateCriterion = json.dateCriterion.map((x) => ImmunizationRecommendationRecommendationDateCriterion.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.series !== undefined) {
      newInstance.series = PrimitiveString.parsePrimitive(json.series, json._series);
    }
    if (json.doseNumberPositiveInt !== undefined) {
      newInstance.doseNumber = PrimitivePositiveInt.parsePrimitive(json.doseNumberPositiveInt, json._doseNumberPositiveInt);
    }
    if (json.doseNumberString !== undefined) {
      newInstance.doseNumber = PrimitiveString.parsePrimitive(json.doseNumberString, json._doseNumberString);
    }
    if (json.seriesDosesPositiveInt !== undefined) {
      newInstance.seriesDoses = PrimitivePositiveInt.parsePrimitive(json.seriesDosesPositiveInt, json._seriesDosesPositiveInt);
    }
    if (json.seriesDosesString !== undefined) {
      newInstance.seriesDoses = PrimitiveString.parsePrimitive(json.seriesDosesString, json._seriesDosesString);
    }
    if (json.supportingImmunization !== undefined) {
      newInstance.supportingImmunization = json.supportingImmunization.map((x) => Reference.parse(x));
    }
    if (json.supportingPatientInformation !== undefined) {
      newInstance.supportingPatientInformation = json.supportingPatientInformation.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isImmunizationRecommendationRecommendation(input?: unknown): input is ImmunizationRecommendationRecommendation {
    const castInput = input as ImmunizationRecommendationRecommendation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationRecommendationRecommendation";
  }

  public toJSON(): IImmunizationRecommendationRecommendation {
    const result: IImmunizationRecommendationRecommendation = super.toJSON();

    if (this.vaccineCode) {
      result.vaccineCode = this.vaccineCode.map((x) => x.toJSON());
    }

    if (this.targetDisease) {
      result.targetDisease = this.targetDisease.toJSON();
    }

    if (this.contraindicatedVaccineCode) {
      result.contraindicatedVaccineCode = this.contraindicatedVaccineCode.map((x) => x.toJSON());
    }

    if (this.forecastStatus) {
      result.forecastStatus = this.forecastStatus.toJSON();
    }

    if (this.forecastReason) {
      result.forecastReason = this.forecastReason.map((x) => x.toJSON());
    }

    if (this.dateCriterion) {
      result.dateCriterion = this.dateCriterion.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.series) {
      result.series = this.series.value;
      result._series = Extension.serializePrimitiveExtension(this.series);
    }

    if (this.doseNumber && PrimitivePositiveInt.isPrimitivePositiveInt(this.doseNumber)) {
      result.doseNumberPositiveInt = this.doseNumber.value;
      result._doseNumberPositiveInt = Extension.serializePrimitiveExtension(this.doseNumber);
    }

    if (this.doseNumber && PrimitiveString.isPrimitiveString(this.doseNumber)) {
      result.doseNumberString = this.doseNumber.value;
      result._doseNumberString = Extension.serializePrimitiveExtension(this.doseNumber);
    }

    if (this.seriesDoses && PrimitivePositiveInt.isPrimitivePositiveInt(this.seriesDoses)) {
      result.seriesDosesPositiveInt = this.seriesDoses.value;
      result._seriesDosesPositiveInt = Extension.serializePrimitiveExtension(this.seriesDoses);
    }

    if (this.seriesDoses && PrimitiveString.isPrimitiveString(this.seriesDoses)) {
      result.seriesDosesString = this.seriesDoses.value;
      result._seriesDosesString = Extension.serializePrimitiveExtension(this.seriesDoses);
    }

    if (this.supportingImmunization) {
      result.supportingImmunization = this.supportingImmunization.map((x) => x.toJSON());
    }

    if (this.supportingPatientInformation) {
      result.supportingPatientInformation = this.supportingPatientInformation.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ImmunizationRecommendationRecommendation {
    return ImmunizationRecommendationRecommendation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImmunizationRecommendationRecommendation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
