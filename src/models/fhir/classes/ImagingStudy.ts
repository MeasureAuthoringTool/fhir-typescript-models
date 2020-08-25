/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  CodeableConcept,
  Coding,
  DomainResource,
  Extension,
  Identifier,
  IImagingStudy,
  ImagingStudySeries,
  ImagingStudyStatus,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
} from "../internal";

export class ImagingStudy extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImagingStudy";

  public identifier?: Array<Identifier>;

  public status?: ImagingStudyStatus;

  public modality?: Array<Coding>;

  public subject?: Reference;

  public encounter?: Reference;

  public started?: PrimitiveDateTime;

  public basedOn?: Array<Reference>;

  public referrer?: Reference;

  public interpreter?: Array<Reference>;

  public endpoint?: Array<Reference>;

  public numberOfSeries?: PrimitiveUnsignedInt;

  public numberOfInstances?: PrimitiveUnsignedInt;

  public procedureReference?: Reference;

  public procedureCode?: Array<CodeableConcept>;

  public location?: Reference;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public note?: Array<Annotation>;

  public description?: PrimitiveString;

  public series?: Array<ImagingStudySeries>;

  public static parse(
    json: IImagingStudy,
    providedInstance: ImagingStudy = new ImagingStudy()
  ): ImagingStudy {
    const newInstance: ImagingStudy = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ImagingStudyStatus.parsePrimitive(json.status, json._status);
    }
    if (json.modality !== undefined) {
      newInstance.modality = json.modality.map((x) => Coding.parse(x));
    }
    if (json.subject !== undefined) {
      newInstance.subject = Reference.parse(json.subject);
    }
    if (json.encounter !== undefined) {
      newInstance.encounter = Reference.parse(json.encounter);
    }
    if (json.started !== undefined) {
      newInstance.started = PrimitiveDateTime.parsePrimitive(json.started, json._started);
    }
    if (json.basedOn !== undefined) {
      newInstance.basedOn = json.basedOn.map((x) => Reference.parse(x));
    }
    if (json.referrer !== undefined) {
      newInstance.referrer = Reference.parse(json.referrer);
    }
    if (json.interpreter !== undefined) {
      newInstance.interpreter = json.interpreter.map((x) => Reference.parse(x));
    }
    if (json.endpoint !== undefined) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    if (json.numberOfSeries !== undefined) {
      newInstance.numberOfSeries = PrimitiveUnsignedInt.parsePrimitive(json.numberOfSeries, json._numberOfSeries);
    }
    if (json.numberOfInstances !== undefined) {
      newInstance.numberOfInstances = PrimitiveUnsignedInt.parsePrimitive(json.numberOfInstances, json._numberOfInstances);
    }
    if (json.procedureReference !== undefined) {
      newInstance.procedureReference = Reference.parse(json.procedureReference);
    }
    if (json.procedureCode !== undefined) {
      newInstance.procedureCode = json.procedureCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.series !== undefined) {
      newInstance.series = json.series.map((x) => ImagingStudySeries.parse(x));
    }
    return newInstance;
  }

  public static isImagingStudy(input?: unknown): input is ImagingStudy {
    const castInput = input as ImagingStudy;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImagingStudy";
  }

  public toJSON(): IImagingStudy {
    const result: IImagingStudy = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.modality) {
      result.modality = this.modality.map((x) => x.toJSON());
    }

    if (this.subject) {
      result.subject = this.subject.toJSON();
    }

    if (this.encounter) {
      result.encounter = this.encounter.toJSON();
    }

    if (this.started) {
      result.started = this.started.value;
      result._started = Extension.serializePrimitiveExtension(this.started);
    }

    if (this.basedOn) {
      result.basedOn = this.basedOn.map((x) => x.toJSON());
    }

    if (this.referrer) {
      result.referrer = this.referrer.toJSON();
    }

    if (this.interpreter) {
      result.interpreter = this.interpreter.map((x) => x.toJSON());
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    if (this.numberOfSeries) {
      result.numberOfSeries = this.numberOfSeries.value;
      result._numberOfSeries = Extension.serializePrimitiveExtension(this.numberOfSeries);
    }

    if (this.numberOfInstances) {
      result.numberOfInstances = this.numberOfInstances.value;
      result._numberOfInstances = Extension.serializePrimitiveExtension(this.numberOfInstances);
    }

    if (this.procedureReference) {
      result.procedureReference = this.procedureReference.toJSON();
    }

    if (this.procedureCode) {
      result.procedureCode = this.procedureCode.map((x) => x.toJSON());
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.series) {
      result.series = this.series.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ImagingStudy {
    return ImagingStudy.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImagingStudy";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
