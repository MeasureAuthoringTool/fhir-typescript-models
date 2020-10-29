/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ICapabilityStatementRestInteraction,
  PrimitiveMarkdown,
  SystemRestfulInteraction,
  FieldMetadata
} from "../internal";

export class CapabilityStatementRestInteraction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Interaction";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "code",
      fieldType: [SystemRestfulInteraction],
      isArray: false
    }, {
      fieldName: "documentation",
      fieldType: [PrimitiveMarkdown],
      isArray: false
    }];
  }

  public code?: SystemRestfulInteraction;

  public documentation?: PrimitiveMarkdown;

  public static parse(
    json: ICapabilityStatementRestInteraction,
    providedInstance: CapabilityStatementRestInteraction = new CapabilityStatementRestInteraction()
  ): CapabilityStatementRestInteraction {
    const newInstance: CapabilityStatementRestInteraction = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = SystemRestfulInteraction.parsePrimitive(json.code, json._code);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isCapabilityStatementRestInteraction(input?: unknown): input is CapabilityStatementRestInteraction {
    const castInput = input as CapabilityStatementRestInteraction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementRestInteraction";
  }

  public toJSON(): ICapabilityStatementRestInteraction {
    const result: ICapabilityStatementRestInteraction = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }

  public clone(): CapabilityStatementRestInteraction {
    return CapabilityStatementRestInteraction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementRestInteraction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
