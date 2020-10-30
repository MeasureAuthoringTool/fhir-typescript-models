/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  DiscriminatorType,
  Element,
  Extension,
  IElementDefinitionSlicingDiscriminator,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class ElementDefinitionSlicingDiscriminator extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Slicing.Discriminator";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...Element.fieldInfo, {
      fieldName: "type",
      fieldType: [DiscriminatorType],
      isArray: false
    }, {
      fieldName: "path",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public type?: DiscriminatorType;

  public path?: PrimitiveString;

  public static parse(
    json: IElementDefinitionSlicingDiscriminator,
    providedInstance: ElementDefinitionSlicingDiscriminator = new ElementDefinitionSlicingDiscriminator()
  ): ElementDefinitionSlicingDiscriminator {
    const newInstance: ElementDefinitionSlicingDiscriminator = Element.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = DiscriminatorType.parsePrimitive(json.type, json._type);
    }
    if (json.path !== undefined) {
      newInstance.path = PrimitiveString.parsePrimitive(json.path, json._path);
    }
    return newInstance;
  }

  public static isElementDefinitionSlicingDiscriminator(input?: unknown): input is ElementDefinitionSlicingDiscriminator {
    const castInput = input as ElementDefinitionSlicingDiscriminator;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinitionSlicingDiscriminator";
  }

  public toJSON(): IElementDefinitionSlicingDiscriminator {
    const result: IElementDefinitionSlicingDiscriminator = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.path) {
      result.path = this.path.value;
      result._path = Extension.serializePrimitiveExtension(this.path);
    }

    return result;
  }

  public clone(): ElementDefinitionSlicingDiscriminator {
    return ElementDefinitionSlicingDiscriminator.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinitionSlicingDiscriminator";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
