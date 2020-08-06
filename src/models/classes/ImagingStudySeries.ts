/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Coding,
  Extension,
  IImagingStudySeries,
  ImagingStudySeriesInstance,
  ImagingStudySeriesPerformer,
  PrimitiveDateTime,
  PrimitiveId,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
} from "../internal";

export class ImagingStudySeries extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImagingStudy.Series";

  public uid?: PrimitiveId;

  public number?: PrimitiveUnsignedInt;

  public modality?: Coding;

  public description?: PrimitiveString;

  public numberOfInstances?: PrimitiveUnsignedInt;

  public endpoint?: Array<Reference>;

  public bodySite?: Coding;

  public laterality?: Coding;

  public specimen?: Array<Reference>;

  public started?: PrimitiveDateTime;

  public performer?: Array<ImagingStudySeriesPerformer>;

  public instance?: Array<ImagingStudySeriesInstance>;

  public static parse(
    json: IImagingStudySeries,
    providedInstance: ImagingStudySeries = new ImagingStudySeries()
  ): ImagingStudySeries {
    const newInstance: ImagingStudySeries = BackboneElement.parse(json, providedInstance);
  
    if (json.uid) {
      newInstance.uid = PrimitiveId.parsePrimitive(json.uid, json._uid);
    }
    if (json.number) {
      newInstance.number = PrimitiveUnsignedInt.parsePrimitive(json.number, json._number);
    }
    if (json.modality) {
      newInstance.modality = Coding.parse(json.modality);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.numberOfInstances) {
      newInstance.numberOfInstances = PrimitiveUnsignedInt.parsePrimitive(json.numberOfInstances, json._numberOfInstances);
    }
    if (json.endpoint) {
      newInstance.endpoint = json.endpoint.map((x) => Reference.parse(x));
    }
    if (json.bodySite) {
      newInstance.bodySite = Coding.parse(json.bodySite);
    }
    if (json.laterality) {
      newInstance.laterality = Coding.parse(json.laterality);
    }
    if (json.specimen) {
      newInstance.specimen = json.specimen.map((x) => Reference.parse(x));
    }
    if (json.started) {
      newInstance.started = PrimitiveDateTime.parsePrimitive(json.started, json._started);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => ImagingStudySeriesPerformer.parse(x));
    }
    if (json.instance) {
      newInstance.instance = json.instance.map((x) => ImagingStudySeriesInstance.parse(x));
    }
    return newInstance;
  }

  public static isImagingStudySeries(input?: unknown): input is ImagingStudySeries {
    const castInput = input as ImagingStudySeries;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImagingStudySeries";
  }

  public toJSON(): IImagingStudySeries {
    const result: IImagingStudySeries = super.toJSON();

    if (this.uid) {
      result.uid = this.uid.value;
      result._uid = Extension.serializePrimitiveExtension(this.uid);
    }

    if (this.number) {
      result.number = this.number.value;
      result._number = Extension.serializePrimitiveExtension(this.number);
    }

    if (this.modality) {
      result.modality = this.modality.toJSON();
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.numberOfInstances) {
      result.numberOfInstances = this.numberOfInstances.value;
      result._numberOfInstances = Extension.serializePrimitiveExtension(this.numberOfInstances);
    }

    if (this.endpoint) {
      result.endpoint = this.endpoint.map((x) => x.toJSON());
    }

    if (this.bodySite) {
      result.bodySite = this.bodySite.toJSON();
    }

    if (this.laterality) {
      result.laterality = this.laterality.toJSON();
    }

    if (this.specimen) {
      result.specimen = this.specimen.map((x) => x.toJSON());
    }

    if (this.started) {
      result.started = this.started.value;
      result._started = Extension.serializePrimitiveExtension(this.started);
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.instance) {
      result.instance = this.instance.map((x) => x.toJSON());
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ImagingStudySeries";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
