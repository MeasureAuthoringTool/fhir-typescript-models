/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  ConceptMapEquivalence,
  ConceptMapGroupElementTargetDependsOn,
  Extension,
  IConceptMapGroupElementTarget,
  PrimitiveCode,
  PrimitiveString,
} from "../internal";

export class ConceptMapGroupElementTarget extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ConceptMap.Group.Element.Target";

  public code?: PrimitiveCode;

  public display?: PrimitiveString;

  public equivalence?: ConceptMapEquivalence;

  public comment?: PrimitiveString;

  public dependsOn?: Array<ConceptMapGroupElementTargetDependsOn>;

  public product?: Array<ConceptMapGroupElementTargetDependsOn>;

  public static parse(
    json: IConceptMapGroupElementTarget,
    providedInstance: ConceptMapGroupElementTarget = new ConceptMapGroupElementTarget()
  ): ConceptMapGroupElementTarget {
    const newInstance: ConceptMapGroupElementTarget = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveCode.parsePrimitive(json.code, json._code);
    }
    if (json.display !== undefined) {
      newInstance.display = PrimitiveString.parsePrimitive(json.display, json._display);
    }
    if (json.equivalence !== undefined) {
      newInstance.equivalence = ConceptMapEquivalence.parsePrimitive(json.equivalence, json._equivalence);
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    if (json.dependsOn !== undefined) {
      newInstance.dependsOn = json.dependsOn.map((x) => ConceptMapGroupElementTargetDependsOn.parse(x));
    }
    if (json.product !== undefined) {
      newInstance.product = json.product.map((x) => ConceptMapGroupElementTargetDependsOn.parse(x));
    }
    return newInstance;
  }

  public static isConceptMapGroupElementTarget(input?: unknown): input is ConceptMapGroupElementTarget {
    const castInput = input as ConceptMapGroupElementTarget;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ConceptMapGroupElementTarget";
  }

  public toJSON(): IConceptMapGroupElementTarget {
    const result: IConceptMapGroupElementTarget = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.display) {
      result.display = this.display.value;
      result._display = Extension.serializePrimitiveExtension(this.display);
    }

    if (this.equivalence) {
      result.equivalence = this.equivalence.value;
      result._equivalence = Extension.serializePrimitiveExtension(this.equivalence);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    if (this.dependsOn) {
      result.dependsOn = this.dependsOn.map((x) => x.toJSON());
    }

    if (this.product) {
      result.product = this.product.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ConceptMapGroupElementTarget {
    return ConceptMapGroupElementTarget.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ConceptMapGroupElementTarget";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
