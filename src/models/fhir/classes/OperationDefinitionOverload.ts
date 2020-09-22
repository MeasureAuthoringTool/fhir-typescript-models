/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IOperationDefinitionOverload,
  PrimitiveString,
} from "../internal";

export class OperationDefinitionOverload extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationDefinition.Overload";
  
  static readonly primaryCodePath: string | null = null;

  public parameterName?: Array<PrimitiveString>;

  public comment?: PrimitiveString;

  public static parse(
    json: IOperationDefinitionOverload,
    providedInstance: OperationDefinitionOverload = new OperationDefinitionOverload()
  ): OperationDefinitionOverload {
    const newInstance: OperationDefinitionOverload = BackboneElement.parse(json, providedInstance);
  
    if (json.parameterName !== undefined) {
      newInstance.parameterName = json.parameterName.map((x, i) => {
        const ext = json._parameterName && json._parameterName[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.comment !== undefined) {
      newInstance.comment = PrimitiveString.parsePrimitive(json.comment, json._comment);
    }
    return newInstance;
  }

  public static isOperationDefinitionOverload(input?: unknown): input is OperationDefinitionOverload {
    const castInput = input as OperationDefinitionOverload;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationDefinitionOverload";
  }

  public toJSON(): IOperationDefinitionOverload {
    const result: IOperationDefinitionOverload = super.toJSON();

    if (this.parameterName) {
      result.parameterName = this.parameterName.filter(x => !!x).map(x => x.value) as typeof result.parameterName;
      result._parameterName = Extension.serializePrimitiveExtensionArray(this.parameterName);
    }

    if (this.comment) {
      result.comment = this.comment.value;
      result._comment = Extension.serializePrimitiveExtension(this.comment);
    }

    return result;
  }

  public clone(): OperationDefinitionOverload {
    return OperationDefinitionOverload.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OperationDefinitionOverload";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
