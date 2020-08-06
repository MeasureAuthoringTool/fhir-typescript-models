/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Expression,
  Extension,
  IActivityDefinitionDynamicValue,
  PrimitiveString,
} from "../internal";

export class ActivityDefinitionDynamicValue extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ActivityDefinition.DynamicValue";

  public path?: PrimitiveString;

  public expression?: Expression;

  public static parse(
    json: IActivityDefinitionDynamicValue,
    providedInstance: ActivityDefinitionDynamicValue = new ActivityDefinitionDynamicValue()
  ): ActivityDefinitionDynamicValue {
    const newInstance: ActivityDefinitionDynamicValue = BackboneElement.parse(json, providedInstance);
  
    if (json.path) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    if (json.expression) {
      newInstance.expression = Expression.parse(json.expression);
    }
    return newInstance;
  }

  public static isActivityDefinitionDynamicValue(input?: unknown): input is ActivityDefinitionDynamicValue {
    const castInput = input as ActivityDefinitionDynamicValue;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ActivityDefinitionDynamicValue";
  }

  public toJSON(): IActivityDefinitionDynamicValue {
    const result: IActivityDefinitionDynamicValue = super.toJSON();

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    if (this.expression) {
      result.expression = this.expression.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ActivityDefinitionDynamicValue";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
