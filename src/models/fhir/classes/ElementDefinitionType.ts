/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Element,
  Extension,
  FhirField,
  FhirList,
  IElementDefinitionType,
  PrimitiveCanonical,
  PrimitiveUri,
  ReferenceVersionRules,
  FhirType
} from "../internal";

@FhirType("ElementDefinitionType", "Element")
export class ElementDefinitionType extends Element {
  static readonly baseType: string = "FHIR.Element";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ElementDefinition.Type";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveUri")
  public code?: PrimitiveUri;

  @FhirList("PrimitiveCanonical")
  public targetProfile?: Array<PrimitiveCanonical>;

  @FhirField("ReferenceVersionRules")
  public versioning?: ReferenceVersionRules;

  public static parse(
    json: IElementDefinitionType,
    providedInstance: ElementDefinitionType = new ElementDefinitionType()
  ): ElementDefinitionType {
    const newInstance: ElementDefinitionType = Element.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = PrimitiveUri.parsePrimitive(json.code, json._code);
    }
    if (json.targetProfile !== undefined) {
      newInstance.targetProfile = json.targetProfile.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._targetProfile?.[i]));
    }
    if (json.versioning !== undefined) {
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

  public clone(): ElementDefinitionType {
    return ElementDefinitionType.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ElementDefinitionType";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
