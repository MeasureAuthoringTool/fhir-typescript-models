/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IImmunizationProtocolApplied,
  PrimitivePositiveInt,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImmunizationProtocolApplied", "BackboneElement")
export class ImmunizationProtocolApplied extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Immunization.ProtocolApplied";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public series?: PrimitiveString;

  @FhirField("Reference")
  public authority?: Reference;

  @FhirList("CodeableConcept")
  public targetDisease?: Array<CodeableConcept>;

  @FhirChoice("PrimitivePositiveInt", "PrimitiveString")
  public doseNumber?: PrimitivePositiveInt | PrimitiveString;

  @FhirChoice("PrimitivePositiveInt", "PrimitiveString")
  public seriesDoses?: PrimitivePositiveInt | PrimitiveString;

  public static parse(
    json: IImmunizationProtocolApplied,
    providedInstance: ImmunizationProtocolApplied = new ImmunizationProtocolApplied()
  ): ImmunizationProtocolApplied {
    const newInstance: ImmunizationProtocolApplied = BackboneElement.parse(json, providedInstance);
  
    if (json.series !== undefined) {
      newInstance.series = PrimitiveString.parsePrimitive(json.series, json._series);
    }
    if (json.authority !== undefined) {
      newInstance.authority = Reference.parse(json.authority);
    }
    if (json.targetDisease !== undefined) {
      newInstance.targetDisease = json.targetDisease.map((x) => CodeableConcept.parse(x));
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
    return newInstance;
  }

  public static isImmunizationProtocolApplied(input?: unknown): input is ImmunizationProtocolApplied {
    const castInput = input as ImmunizationProtocolApplied;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImmunizationProtocolApplied";
  }

  public toJSON(): IImmunizationProtocolApplied {
    const result: IImmunizationProtocolApplied = super.toJSON();

    if (this.series) {
      result.series = this.series.value;
      result._series = Extension.serializePrimitiveExtension(this.series);
    }

    if (this.authority) {
      result.authority = this.authority.toJSON();
    }

    if (this.targetDisease) {
      result.targetDisease = this.targetDisease.map((x) => x.toJSON());
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

    return result;
  }

  public clone(): ImmunizationProtocolApplied {
    return ImmunizationProtocolApplied.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImmunizationProtocolApplied";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
