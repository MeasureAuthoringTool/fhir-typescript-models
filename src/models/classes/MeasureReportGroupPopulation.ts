/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMeasureReportGroupPopulation,
  PrimitiveInteger,
  Reference,
} from "../internal";

export class MeasureReportGroupPopulation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group.Population";

  public code?: CodeableConcept;

  public count?: PrimitiveInteger;

  public subjectResults?: Reference;

  public static parse(
    json: IMeasureReportGroupPopulation,
    providedInstance: MeasureReportGroupPopulation = new MeasureReportGroupPopulation()
  ): MeasureReportGroupPopulation {
    const newInstance: MeasureReportGroupPopulation = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.count) {
      newInstance.count = PrimitiveInteger.parsePrimitive(json.count, json._count);
    }
    if (json.subjectResults) {
      newInstance.subjectResults = Reference.parse(json.subjectResults);
    }
    return newInstance;
  }

  public static isMeasureReportGroupPopulation(input?: unknown): input is MeasureReportGroupPopulation {
    const castInput = input as MeasureReportGroupPopulation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportGroupPopulation";
  }

  public toJSON(): IMeasureReportGroupPopulation {
    const result: IMeasureReportGroupPopulation = super.toJSON();

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.count) {
      result.count = this.count.value;
      result._count = Extension.serializePrimitiveExtension(this.count);
    }

    if (this.subjectResults) {
      result.subjectResults = this.subjectResults.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MeasureReportGroupPopulation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
