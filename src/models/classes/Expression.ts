/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  Extension,
  IExpression,
  PrimitiveCode,
  PrimitiveId,
  PrimitiveString,
  PrimitiveUri,
} from "../internal";

export class Expression extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Expression";

  public description?: PrimitiveString;

  public name?: PrimitiveId;

  public language?: PrimitiveCode;

  public expression?: PrimitiveString;

  public reference?: PrimitiveUri;

  public static parse(
    json: IExpression,
    providedInstance: Expression = new Expression()
  ): Expression {
    const newInstance: Expression = Element.parse(json, providedInstance);
  
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.name) {
      newInstance.name = PrimitiveId.parsePrimitive(json.name, json._name);
    }
    if (json.language) {
      newInstance.language = PrimitiveCode.parsePrimitive(json.language, json._language);
    }
    if (json.expression) {
      newInstance.expression = PrimitiveString.parsePrimitive(json.expression, json._expression);
    }
    if (json.reference) {
      newInstance.reference = PrimitiveUri.parsePrimitive(json.reference, json._reference);
    }
    return newInstance;
  }

  public static isExpression(input?: unknown): input is Expression {
    const castInput = input as Expression;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Expression";
  }

  public toJSON(): IExpression {
    const result: IExpression = super.toJSON();

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.language) {
      result.language = this.language.value;
      result._language = Extension.serializePrimitiveExtension(this.language);
    }

    if (this.expression) {
      result.expression = this.expression.value;
      result._expression = Extension.serializePrimitiveExtension(this.expression);
    }

    if (this.reference) {
      result.reference = this.reference.value;
      result._reference = Extension.serializePrimitiveExtension(this.reference);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Expression";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
