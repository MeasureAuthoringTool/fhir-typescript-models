/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  ConceptMapGroupElementTarget,
  Extension,
  FhirField,
  FhirList,
  IConceptMapGroupElement,
  PrimitiveCode,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ConceptMapGroupElement", "BackboneElement")
export class ConceptMapGroupElement extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMap.Group.Element";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCode")
  public code?: PrimitiveCode;

  @FhirField("PrimitiveString")
  public display?: PrimitiveString;

  @FhirList("ConceptMapGroupElementTarget")
  public target?: Array<ConceptMapGroupElementTarget>;

  public static parse(
    json: IConceptMapGroupElement,
    providedInstance: ConceptMapGroupElement = new ConceptMapGroupElement()
  ): ConceptMapGroupElement {
    const newInstance: ConceptMapGroupElement = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.target !== undefined) {
      newInstance.target = json.target.map((x) => ConceptMapGroupElementTarget.parse(x));
    }
    return newInstance;
  }

  public static isConceptMapGroupElement(input?: unknown): input is ConceptMapGroupElement {
    const castInput = input as ConceptMapGroupElement;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMapGroupElement";
  }

  public toJSON(): IConceptMapGroupElement {
    const result: IConceptMapGroupElement = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ConceptMapGroupElement {
    return ConceptMapGroupElement.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConceptMapGroupElement";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
