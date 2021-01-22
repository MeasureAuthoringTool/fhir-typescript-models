/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  FHIRVersion,
  IImplementationGuideDefinitionResource,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveId,
  PrimitiveString,
  Reference,
  FhirType
} from "../internal";

@FhirType("ImplementationGuideDefinitionResource", "BackboneElement")
export class ImplementationGuideDefinitionResource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ImplementationGuide.Definition.Resource";

  static readonly primaryCodePath: string | null = null;

  @FhirField("Reference")
  public reference?: Reference;

  @FhirList("FHIRVersion")
  public fhirVersion?: Array<FHIRVersion>;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveString")
  public description?: PrimitiveString;

  @FhirChoice("PrimitiveBoolean", "PrimitiveCanonical")
  public example?: PrimitiveBoolean | PrimitiveCanonical;

  @FhirField("PrimitiveId")
  public groupingId?: PrimitiveId;

  public static parse(
    json: IImplementationGuideDefinitionResource,
    providedInstance: ImplementationGuideDefinitionResource = new ImplementationGuideDefinitionResource()
  ): ImplementationGuideDefinitionResource {
    const newInstance: ImplementationGuideDefinitionResource = BackboneElement.parse(json, providedInstance);
  
    if (json.reference !== undefined) {
      newInstance.reference = Reference.parse(json.reference);
    }
    if (json.fhirVersion !== undefined) {
      newInstance.fhirVersion = json.fhirVersion.map((x, i) => FHIRVersion.parsePrimitive(x, json._fhirVersion?.[i]));
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.description !== undefined) {
      newInstance.description = PrimitiveString.parsePrimitive(json.description, json._description);
    }
    if (json.exampleBoolean !== undefined) {
      newInstance.example = PrimitiveBoolean.parsePrimitive(json.exampleBoolean, json._exampleBoolean);
    }
    if (json.exampleCanonical !== undefined) {
      newInstance.example = PrimitiveCanonical.parsePrimitive(json.exampleCanonical, json._exampleCanonical);
    }
    if (json.groupingId !== undefined) {
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

  public clone(): ImplementationGuideDefinitionResource {
    return ImplementationGuideDefinitionResource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ImplementationGuideDefinitionResource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
