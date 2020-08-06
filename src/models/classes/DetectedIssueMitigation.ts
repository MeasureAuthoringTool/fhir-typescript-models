/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CodeableConcept,
  Extension,
  IDetectedIssueMitigation,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class DetectedIssueMitigation extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "DetectedIssue.Mitigation";

  public action?: CodeableConcept;

  public date?: PrimitiveDateTime;

  public author?: Reference;

  public static parse(
    json: IDetectedIssueMitigation,
    providedInstance: DetectedIssueMitigation = new DetectedIssueMitigation()
  ): DetectedIssueMitigation {
    const newInstance: DetectedIssueMitigation = BackboneElement.parse(json, providedInstance);
  
    if (json.action) {
      newInstance.action = CodeableConcept.parse(json.action);
    }
    if (json.date) {
      newInstance.date = PrimitiveDateTime.parsePrimitive(json.date, json._date);
    }
    if (json.author) {
      newInstance.author = Reference.parse(json.author);
    }
    return newInstance;
  }

  public static isDetectedIssueMitigation(input?: unknown): input is DetectedIssueMitigation {
    const castInput = input as DetectedIssueMitigation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "DetectedIssueMitigation";
  }

  public toJSON(): IDetectedIssueMitigation {
    const result: IDetectedIssueMitigation = super.toJSON();

    if (this.action) {
      result.action = this.action.toJSON();
    }

    if (this.date) {
      result.date = this.date.value;
      result._date = Extension.serializePrimitiveExtension(this.date);
    }

    if (this.author) {
      result.author = this.author.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "DetectedIssueMitigation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
