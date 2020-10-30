/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  Extension,
  INarrative,
  NarrativeStatus,
  PrimitiveXhtml,
  FieldMetadata
} from "../internal";

export class Narrative extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Narrative";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "status",
      fieldType: [NarrativeStatus],
      isArray: false
    }, {
      fieldName: "div",
      fieldType: [PrimitiveXhtml],
      isArray: false
    }];
  }

  public status?: NarrativeStatus;

  public div?: PrimitiveXhtml;

  public static parse(
    json: INarrative,
    providedInstance: Narrative = new Narrative()
  ): Narrative {
    const newInstance: Narrative = Element.parse(json, providedInstance);
  
    if (json.status !== undefined) {
      newInstance.status = NarrativeStatus.parsePrimitive(json.status, json._status);
    }
    if (json.div !== undefined) {
      newInstance.div = PrimitiveXhtml.parsePrimitive(json.div, json._div);
    }
    return newInstance;
  }

  public static isNarrative(input?: unknown): input is Narrative {
    const castInput = input as Narrative;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Narrative";
  }

  public toJSON(): INarrative {
    const result: INarrative = super.toJSON();

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.div) {
      result.div = this.div.value;
      result._div = Extension.serializePrimitiveExtension(this.div);
    }

    return result;
  }

  public clone(): Narrative {
    return Narrative.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Narrative";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
