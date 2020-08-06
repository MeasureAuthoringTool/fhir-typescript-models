/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Coding,
  Extension,
  IImagingStudySeriesInstance,
  PrimitiveId,
  PrimitiveString,
  PrimitiveUnsignedInt,
} from "../internal";

export class ImagingStudySeriesInstance extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImagingStudy.Series.Instance";

  public uid?: PrimitiveId;

  public sopClass?: Coding;

  public number?: PrimitiveUnsignedInt;

  public title?: PrimitiveString;

  public static parse(
    json: IImagingStudySeriesInstance,
    providedInstance: ImagingStudySeriesInstance = new ImagingStudySeriesInstance()
  ): ImagingStudySeriesInstance {
    const newInstance: ImagingStudySeriesInstance = BackboneElement.parse(json, providedInstance);
  
    if (json.uid) {
      newInstance.uid = PrimitiveId.parsePrimitive(json.uid, json._uid);
    }
    if (json.sopClass) {
      newInstance.sopClass = Coding.parse(json.sopClass);
    }
    if (json.number) {
      newInstance.number = PrimitiveUnsignedInt.parsePrimitive(json.number, json._number);
    }
    if (json.title) {
      newInstance.title = PrimitiveString.parsePrimitive(json.title, json._title);
    }
    return newInstance;
  }

  public static isImagingStudySeriesInstance(input?: unknown): input is ImagingStudySeriesInstance {
    const castInput = input as ImagingStudySeriesInstance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImagingStudySeriesInstance";
  }

  public toJSON(): IImagingStudySeriesInstance {
    const result: IImagingStudySeriesInstance = super.toJSON();

    if (this.uid) {
      result.uid = this.uid.value;
      result._uid = Extension.serializePrimitiveExtension(this.uid);
    }

    if (this.sopClass) {
      result.sopClass = this.sopClass.toJSON();
    }

    if (this.number) {
      result.number = this.number.value;
      result._number = Extension.serializePrimitiveExtension(this.number);
    }

    if (this.title) {
      result.title = this.title.value;
      result._title = Extension.serializePrimitiveExtension(this.title);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ImagingStudySeriesInstance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
