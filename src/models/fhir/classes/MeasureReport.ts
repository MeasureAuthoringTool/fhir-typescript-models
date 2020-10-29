/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  Identifier,
  IMeasureReport,
  MeasureReportGroup,
  MeasureReportStatus,
  MeasureReportType,
  Period,
  PrimitiveCanonical,
  PrimitiveDateTime,
  Reference,
  FieldMetadata
} from "../internal";

export class MeasureReport extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MeasureReport";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...DomainResource.fieldInfo, {
      fieldName: "identifier",
      fieldType: [Identifier],
      isArray: true
    }, {
      fieldName: "status",
      fieldType: [MeasureReportStatus],
      isArray: false
    }, {
      fieldName: "type",
      fieldType: [MeasureReportType],
      isArray: false
    }, {
      fieldName: "measure",
      fieldType: [PrimitiveCanonical],
      isArray: false
    }, {
      fieldName: "subject",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "date",
      fieldType: [PrimitiveDateTime],
      isArray: false
    }, {
      fieldName: "reporter",
      fieldType: [Reference],
      isArray: false
    }, {
      fieldName: "period",
      fieldType: [Period],
      isArray: false
    }, {
      fieldName: "improvementNotation",
      fieldType: [CodeableConcept],
      isArray: false
    }, {
      fieldName: "group",
      fieldType: [MeasureReportGroup],
      isArray: true
    }, {
      fieldName: "evaluatedResource",
      fieldType: [Reference],
      isArray: true
    }];
  }

  public identifier?: Array<Identifier>;

  public status?: MeasureReportStatus;

  public type?: MeasureReportType;

  public measure?: PrimitiveCanonical;

  public subject?: Reference;

  public date?: PrimitiveDateTime;

  public reporter?: Reference;

  public period?: Period;

  public improvementNotation?: CodeableConcept;

  public group?: Array<MeasureReportGroup>;

  public evaluatedResource?: Array<Reference>;

  public static parse(
    json: IMeasureReport,
    providedInstance: MeasureReport = new MeasureReport()
  ): MeasureReport {
    const newInstance: MeasureReport = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = MeasureReportStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = MeasureReportType.parsePrimitive(json.type, json._type);
    }
    if (json.measure !== undefined) {
      newInstance.measure = PrimitiveCanonical.parsePrimitive(json.measure, json._measure);
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.date !== undefined) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.reporter !== undefined) {
      newInstance.reporter = Reference.parse(json.reporter);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.improvementNotation !== undefined) {
      newInstance.improvementNotation = CodeableConcept.parse(json.improvementNotation);
    }
    if (json.group !== undefined) {
      newInstance.group = json.group.map((x) => MeasureReportGroup.parse(x));
    }
    if (json.evaluatedResource !== undefined) {
      newInstance.evaluatedResource = json.evaluatedResource.map((x) => Reference.parse(x));
    }
    return newInstance;
  }

  public static isMeasureReport(input?: unknown): input is MeasureReport {
    const castInput = input as MeasureReport;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MeasureReport";
  }

  public toJSON(): IMeasureReport {
    const result: IMeasureReport = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.measure) {
      result.measure = this.measure.value;
      result._measure = Extension.serializePrimitiveExtension(this.measure);
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.reporter) {
      result.reporter = this.reporter.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.improvementNotation) {
      result.improvementNotation = this.improvementNotation.toJSON();
    }

    if (this.group) {
      result.group = this.group.map((x) => x.toJSON());
    }

    if (this.evaluatedResource) {
      result.evaluatedResource = this.evaluatedResource.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): MeasureReport {
    return MeasureReport.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "MeasureReport";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
