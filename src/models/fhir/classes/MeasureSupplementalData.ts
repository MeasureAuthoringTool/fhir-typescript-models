/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CodeableConcept,
  Expression,
  Extension,
  FhirField,
  FhirList,
  IMeasureSupplementalData,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("MeasureSupplementalData", "BackboneElement")
export class MeasureSupplementalData extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Measure.SupplementalData";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirList("CodeableConcept")
  public usage?: Array<CodeableConcept>;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirField("Expression")
  public criteria?: Expression;

  public static parse(
    json: IMeasureSupplementalData,
    providedInstance: MeasureSupplementalData = new MeasureSupplementalData()
  ): MeasureSupplementalData {
    const newInstance: MeasureSupplementalData = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.usage !== undefined) {
      newInstance.usage = json.usage.map((x) => CodeableConcept.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.criteria !== undefined) {
      newInstance.criteria = Expression.parse(json.criteria);
    }
    return newInstance;
  }

  public static isMeasureSupplementalData(input?: unknown): input is MeasureSupplementalData {
    const castInput = input as MeasureSupplementalData;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureSupplementalData";
  }

  public toJSON(): IMeasureSupplementalData {
    const result: IMeasureSupplementalData = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.usage) {
      result.usage = this.usage.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.criteria) {
      result.criteria = this.criteria.toJSON();
    }

    return result;
  }

  public clone(): MeasureSupplementalData {
    return MeasureSupplementalData.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureSupplementalData";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
