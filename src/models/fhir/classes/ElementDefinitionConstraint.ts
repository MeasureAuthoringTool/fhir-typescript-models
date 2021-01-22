/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  ConstraintSeverity,
  Element,
  Extension,
  FhirField,
  IElementDefinitionConstraint,
  PrimitiveCanonical,
  PrimitiveId,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("ElementDefinitionConstraint", "Element")
export class ElementDefinitionConstraint extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Constraint";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveId")
  public key?: PrimitiveId;

  @FhirField("PrimitiveString")
  public requirements?: PrimitiveString;

  @FhirField("ConstraintSeverity")
  public severity?: ConstraintSeverity;

  @FhirField("PrimitiveString")
  public human?: PrimitiveString;

  @FhirField("PrimitiveString")
  public expression?: PrimitiveString;

  @FhirField("PrimitiveString")
  public xpath?: PrimitiveString;

  @FhirField("PrimitiveCanonical")
  public source?: PrimitiveCanonical;

  public static parse(
    json: IElementDefinitionConstraint,
    providedInstance: ElementDefinitionConstraint = new ElementDefinitionConstraint()
  ): ElementDefinitionConstraint {
    const newInstance: ElementDefinitionConstraint = Element.parse(json, providedInstance);
  
    if (json.key !== undefined) {
      newInstance.key = PrimitiveId.parsePrimitive(json.key, json._key);
    }
    if (json.requirements !== undefined) {
      newInstance.requirements = PrimitiveString.parsePrimitive(json.requirements, json._requirements);
    }
    if (json.severity !== undefined) {
      newInstance.severity = ConstraintSeverity.parsePrimitive(json.severity, json._severity);
    }
    if (json.human !== undefined) {
      newInstance.human = PrimitiveString.parsePrimitive(json.human, json._human);
    }
    if (json.expression !== undefined) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.xpath !== undefined) {
      newInstance.xpath = PrimitiveString.parsePrimitive(json.xpath, json._xpath);
    }
    if (json.source !== undefined) {
      newInstance.source = PrimitiveCanonical.parsePrimitive(json.source, json._source);
    }
    return newInstance;
  }

  public static isElementDefinitionConstraint(input?: unknown): input is ElementDefinitionConstraint {
    const castInput = input as ElementDefinitionConstraint;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinitionConstraint";
  }

  public toJSON(): IElementDefinitionConstraint {
    const result: IElementDefinitionConstraint = super.toJSON();

    if (this.key) {
      result.key = this.key.value;
      result._key = Extension.serializePrimitiveExtension(this.key);
    }

    if (this.requirements) {
      result.requirements = this.requirements.value;
      result._requirements = Extension.serializePrimitiveExtension(this.requirements);
    }

    if (this.severity) {
      result.severity = this.severity.value;
      result._severity = Extension.serializePrimitiveExtension(this.severity);
    }

    if (this.human) {
      result.human = this.human.value;
      result._human = Extension.serializePrimitiveExtension(this.human);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    if (this.xpath) {
      result.xpath = this.xpath.value;
      result._xpath = Extension.serializePrimitiveExtension(this.xpath);
    }

    if (this.source) {
      result.source = this.source.value;
      result._source = Extension.serializePrimitiveExtension(this.source);
    }

    return result;
  }

  public clone(): ElementDefinitionConstraint {
    return ElementDefinitionConstraint.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinitionConstraint";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
