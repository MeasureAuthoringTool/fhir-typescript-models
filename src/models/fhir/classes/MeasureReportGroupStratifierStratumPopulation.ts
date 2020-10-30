/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IMeasureReportGroupStratifierStratumPopulation,
  PrimitiveInteger,
  Reference,
  FieldMetadata
} from "../internal";

export class MeasureReportGroupStratifierStratumPopulation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport.Group.Stratifier.Stratum.Population";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "count",
      fieldType: [PrimitiveInteger],
      isArray: false
    }, {
      fieldName: "subjectResults",
      fieldType: [Reference],
      isArray: false
    }];
  }

  public code?: CodeableConcept;

  public count?: PrimitiveInteger;

  public subjectResults?: Reference;

  public static parse(
    json: IMeasureReportGroupStratifierStratumPopulation,
    providedInstance: MeasureReportGroupStratifierStratumPopulation = new MeasureReportGroupStratifierStratumPopulation()
  ): MeasureReportGroupStratifierStratumPopulation {
    const newInstance: MeasureReportGroupStratifierStratumPopulation = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.count !== undefined) {
      newInstance.count = PrimitiveInteger.parsePrimitive(json.count, json._count);
    }
    if (json.subjectResults !== undefined) {
      newInstance.subjectResults = Reference.parse(json.subjectResults);
    }
    return newInstance;
  }

  public static isMeasureReportGroupStratifierStratumPopulation(input?: unknown): input is MeasureReportGroupStratifierStratumPopulation {
    const castInput = input as MeasureReportGroupStratifierStratumPopulation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReportGroupStratifierStratumPopulation";
  }

  public toJSON(): IMeasureReportGroupStratifierStratumPopulation {
    const result: IMeasureReportGroupStratifierStratumPopulation = super.toJSON();

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

  public clone(): MeasureReportGroupStratifierStratumPopulation {
    return MeasureReportGroupStratifierStratumPopulation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureReportGroupStratifierStratumPopulation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
