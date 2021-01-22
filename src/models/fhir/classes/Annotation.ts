/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirChoice,
  FhirField,
  IAnnotation,
  PrimitiveDateTime,
  PrimitiveMarkdown,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("Annotation", "Element")
export class Annotation extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Annotation";

  static readonly primaryCodePath: string | null = null;

  @FhirChoice("Reference", "PrimitiveString")
  public author?: Reference | PrimitiveString;

  @FhirField("PrimitiveDateTime")
  public time?: PrimitiveDateTime;

  @FhirField("PrimitiveMarkdown")
  public text?: PrimitiveMarkdown;

  public static parse(
    json: IAnnotation,
    providedInstance: Annotation = new Annotation()
  ): Annotation {
    const newInstance: Annotation = Element.parse(json, providedInstance);
  
    if (json.authorReference !== undefined) {
      newInstance.author = Reference.parse(json.authorReference);
    }
    if (json.authorString !== undefined) {
      newInstance.author = PrimitiveString.parsePrimitive(json.authorString, json._authorString);
    }
    if (json.time !== undefined) {
      newInstance.time = PrimitiveDateTime.parsePrimitive(json.time, json._time);
    }
    if (json.text !== undefined) {
      newInstance.text = PrimitiveMarkdown.parsePrimitive(json.text, json._text);
    }
    return newInstance;
  }

  public static isAnnotation(input?: unknown): input is Annotation {
    const castInput = input as Annotation;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Annotation";
  }

  public toJSON(): IAnnotation {
    const result: IAnnotation = super.toJSON();

    if (this.author && Reference.isReference(this.author)) {
      result.authorReference = this.author.toJSON();
    }

    if (this.author && PrimitiveString.isPrimitiveString(this.author)) {
      result.authorString = this.author.value;
      result._authorString = Extension.serializePrimitiveExtension(this.author);
    }

    if (this.time) {
      result.time = this.time.value;
      result._time = Extension.serializePrimitiveExtension(this.time);
    }

    if (this.text) {
      result.text = this.text.value;
      result._text = Extension.serializePrimitiveExtension(this.text);
    }

    return result;
  }

  public clone(): Annotation {
    return Annotation.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Annotation";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
