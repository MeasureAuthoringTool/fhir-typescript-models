/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IOperationDefinitionParameterReferencedFrom,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("OperationDefinitionParameterReferencedFrom", "BackboneElement")
export class OperationDefinitionParameterReferencedFrom extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "OperationDefinition.Parameter.ReferencedFrom";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public source?: PrimitiveString;

  @FhirField("PrimitiveString")
  public sourceId?: PrimitiveString;

  public static parse(
    json: IOperationDefinitionParameterReferencedFrom,
    providedInstance: OperationDefinitionParameterReferencedFrom = new OperationDefinitionParameterReferencedFrom()
  ): OperationDefinitionParameterReferencedFrom {
    const newInstance: OperationDefinitionParameterReferencedFrom = BackboneElement.parse(json, providedInstance);
  
    if (json.source !== undefined) {
      newInstance.source = PrimitiveString.parsePrimitive(json.source, json._source);
    }
    if (json.sourceId !== undefined) {
      newInstance.sourceId = PrimitiveString.parsePrimitive(json.sourceId, json._sourceId);
    }
    return newInstance;
  }

  public static isOperationDefinitionParameterReferencedFrom(input?: unknown): input is OperationDefinitionParameterReferencedFrom {
    const castInput = input as OperationDefinitionParameterReferencedFrom;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "OperationDefinitionParameterReferencedFrom";
  }

  public toJSON(): IOperationDefinitionParameterReferencedFrom {
    const result: IOperationDefinitionParameterReferencedFrom = super.toJSON();

    if (this.source) {
      result.source = this.source.value;
      result._source = Extension.serializePrimitiveExtension(this.source);
    }

    if (this.sourceId) {
      result.sourceId = this.sourceId.value;
      result._sourceId = Extension.serializePrimitiveExtension(this.sourceId);
    }

    return result;
  }

  public clone(): OperationDefinitionParameterReferencedFrom {
    return OperationDefinitionParameterReferencedFrom.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "OperationDefinitionParameterReferencedFrom";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
