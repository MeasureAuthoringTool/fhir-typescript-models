/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Element,
  Extension,
  IElementDefinitionType,
  PrimitiveCanonical,
  PrimitiveUri,
  ReferenceVersionRules,
} from "../internal";

export class ElementDefinitionType extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Type";

  public code?: PrimitiveUri;

  public targetProfile?: Array<PrimitiveCanonical>;

  public versioning?: ReferenceVersionRules;

  public static parse(
    json: IElementDefinitionType,
    providedInstance: ElementDefinitionType = new ElementDefinitionType()
  ): ElementDefinitionType {
    const newInstance: ElementDefinitionType = Element.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = PrimitiveUri.parsePrimitive(json.code, json._code);
    }
    if (json.targetProfile) {
      newInstance.targetProfile = json.targetProfile.map((x, i) => {
        const ext = json._targetProfile && json._targetProfile[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.versioning) {
      newInstance.versioning = ReferenceVersionRules.parsePrimitive(json.versioning, json._versioning);
    }
    return newInstance;
  }

  public static isElementDefinitionType(input?: unknown): input is ElementDefinitionType {
    const castInput = input as ElementDefinitionType;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ElementDefinitionType";
  }

  public toJSON(): IElementDefinitionType {
    const result: IElementDefinitionType = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.targetProfile) {
      result.targetProfile = this.targetProfile.filter(x => !!x).map(x => x.value) as typeof result.targetProfile;
      result._targetProfile = Extension.serializePrimitiveExtensionArray(this.targetProfile);
    }

    if (this.versioning) {
      result.versioning = this.versioning.value;
      result._versioning = Extension.serializePrimitiveExtension(this.versioning);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ElementDefinitionType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
