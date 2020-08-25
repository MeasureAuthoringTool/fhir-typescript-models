/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  FHIRVersion,
  IImplementationGuideDefinitionResource,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveId,
  PrimitiveString,
  Reference,
} from "../internal";

export class ImplementationGuideDefinitionResource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition.Resource";

  public reference?: Reference;

  public fhirVersion?: Array<FHIRVersion>;

  public name?: PrimitiveString;

  public description?: PrimitiveString;

  public example?: PrimitiveBoolean | PrimitiveCanonical;

  public groupingId?: PrimitiveId;

  public static parse(
    json: IImplementationGuideDefinitionResource,
    providedInstance: ImplementationGuideDefinitionResource = new ImplementationGuideDefinitionResource()
  ): ImplementationGuideDefinitionResource {
    const newInstance: ImplementationGuideDefinitionResource = BackboneElement.parse(json, providedInstance);
  
    if (json.reference) {
      newInstance.reference = Reference.parse(json.reference);
    }
    if (json.fhirVersion) {
      newInstance.fhirVersion = json.fhirVersion.map((x, i) => {
        const ext = json._fhirVersion && json._fhirVersion[i];
        return FHIRVersion.parsePrimitive(x, ext);
      });
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.exampleBoolean) {
      newInstance.example = PrimitiveBoolean.parsePrimitive(json.exampleBoolean, json._exampleBoolean);
    }
    if (json.exampleCanonical) {
      newInstance.example = PrimitiveCanonical.parsePrimitive(json.exampleCanonical, json._exampleCanonical);
    }
    if (json.groupingId) {
      newInstance.groupingId = PrimitiveId.parsePrimitive(json.groupingId, json._groupingId);
    }
    return newInstance;
  }

  public static isImplementationGuideDefinitionResource(input?: unknown): input is ImplementationGuideDefinitionResource {
    const castInput = input as ImplementationGuideDefinitionResource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ImplementationGuideDefinitionResource";
  }

  public toJSON(): IImplementationGuideDefinitionResource {
    const result: IImplementationGuideDefinitionResource = super.toJSON();

    if (this.reference) {
      result.reference = this.reference.toJSON();
    }

    if (this.fhirVersion) {
      result.fhirVersion = this.fhirVersion.filter(x => !!x).map(x => x.value) as typeof result.fhirVersion;
      result._fhirVersion = Extension.serializePrimitiveExtensionArray(this.fhirVersion);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.description) {
      result.description = this.description.value;
      result._description = Extension.serializePrimitiveExtension(this.description);
    }

    if (this.example && PrimitiveBoolean.isPrimitiveBoolean(this.example)) {
      result.exampleBoolean = this.example.value;
      result._exampleBoolean = Extension.serializePrimitiveExtension(this.example);
    }

    if (this.example && PrimitiveCanonical.isPrimitiveCanonical(this.example)) {
      result.exampleCanonical = this.example.value;
      result._exampleCanonical = Extension.serializePrimitiveExtension(this.example);
    }

    if (this.groupingId) {
      result.groupingId = this.groupingId.value;
      result._groupingId = Extension.serializePrimitiveExtension(this.groupingId);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "ImplementationGuideDefinitionResource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
