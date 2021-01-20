/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  CapabilityStatementRestResourceInteraction,
  CapabilityStatementRestResourceOperation,
  CapabilityStatementRestResourceSearchParam,
  ConditionalDeleteStatus,
  ConditionalReadStatus,
  Extension,
  FhirField,
  FhirList,
  ICapabilityStatementRestResource,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  PrimitiveString,
  ReferenceHandlingPolicy,
  ResourceType,
  ResourceVersionPolicy,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementRestResource", "BackboneElement")
export class CapabilityStatementRestResource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Resource";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ResourceType")
  public type?: ResourceType;

  @FhirField("PrimitiveCanonical")
  public profile?: PrimitiveCanonical;

  @FhirList("PrimitiveCanonical")
  public supportedProfile?: Array<PrimitiveCanonical>;

  @FhirField("PrimitiveMarkdown")
  public documentation?: PrimitiveMarkdown;

  @FhirList("CapabilityStatementRestResourceInteraction")
  public interaction?: Array<CapabilityStatementRestResourceInteraction>;

  @FhirField("ResourceVersionPolicy")
  public versioning?: ResourceVersionPolicy;

  @FhirField("PrimitiveBoolean")
  public readHistory?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public updateCreate?: PrimitiveBoolean;

  @FhirField("PrimitiveBoolean")
  public conditionalCreate?: PrimitiveBoolean;

  @FhirField("ConditionalReadStatus")
  public conditionalRead?: ConditionalReadStatus;

  @FhirField("PrimitiveBoolean")
  public conditionalUpdate?: PrimitiveBoolean;

  @FhirField("ConditionalDeleteStatus")
  public conditionalDelete?: ConditionalDeleteStatus;

  @FhirList("ReferenceHandlingPolicy")
  public referencePolicy?: Array<ReferenceHandlingPolicy>;

  @FhirList("PrimitiveString")
  public searchInclude?: Array<PrimitiveString>;

  @FhirList("PrimitiveString")
  public searchRevInclude?: Array<PrimitiveString>;

  @FhirList("CapabilityStatementRestResourceSearchParam")
  public searchParam?: Array<CapabilityStatementRestResourceSearchParam>;

  @FhirList("CapabilityStatementRestResourceOperation")
  public operation?: Array<CapabilityStatementRestResourceOperation>;

  public static parse(
    json: ICapabilityStatementRestResource,
    providedInstance: CapabilityStatementRestResource = new CapabilityStatementRestResource()
  ): CapabilityStatementRestResource {
    const newInstance: CapabilityStatementRestResource = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = ResourceType.parsePrimitive(json.type, json._type);
    }
    if (json.profile !== undefined) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    if (json.supportedProfile !== undefined) {
      newInstance.supportedProfile = json.supportedProfile.map((x, i) => PrimitiveCanonical.parsePrimitive(x, json._supportedProfile?.[i]));
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    if (json.interaction !== undefined) {
      newInstance.interaction = json.interaction.map((x) => CapabilityStatementRestResourceInteraction.parse(x));
    }
    if (json.versioning !== undefined) {
      newInstance.versioning = ResourceVersionPolicy.parsePrimitive(json.versioning, json._versioning);
    }
    if (json.readHistory !== undefined) {
      newInstance.readHistory = PrimitiveBoolean.parsePrimitive(json.readHistory, json._readHistory);
    }
    if (json.updateCreate !== undefined) {
      newInstance.updateCreate = PrimitiveBoolean.parsePrimitive(json.updateCreate, json._updateCreate);
    }
    if (json.conditionalCreate !== undefined) {
      newInstance.conditionalCreate = PrimitiveBoolean.parsePrimitive(json.conditionalCreate, json._conditionalCreate);
    }
    if (json.conditionalRead !== undefined) {
      newInstance.conditionalRead = ConditionalReadStatus.parsePrimitive(json.conditionalRead, json._conditionalRead);
    }
    if (json.conditionalUpdate !== undefined) {
      newInstance.conditionalUpdate = PrimitiveBoolean.parsePrimitive(json.conditionalUpdate, json._conditionalUpdate);
    }
    if (json.conditionalDelete !== undefined) {
      newInstance.conditionalDelete = ConditionalDeleteStatus.parsePrimitive(json.conditionalDelete, json._conditionalDelete);
    }
    if (json.referencePolicy !== undefined) {
      newInstance.referencePolicy = json.referencePolicy.map((x, i) => ReferenceHandlingPolicy.parsePrimitive(x, json._referencePolicy?.[i]));
    }
    if (json.searchInclude !== undefined) {
      newInstance.searchInclude = json.searchInclude.map((x, i) => PrimitiveString.parsePrimitive(x, json._searchInclude?.[i]));
    }
    if (json.searchRevInclude !== undefined) {
      newInstance.searchRevInclude = json.searchRevInclude.map((x, i) => PrimitiveString.parsePrimitive(x, json._searchRevInclude?.[i]));
    }
    if (json.searchParam !== undefined) {
      newInstance.searchParam = json.searchParam.map((x) => CapabilityStatementRestResourceSearchParam.parse(x));
    }
    if (json.operation !== undefined) {
      newInstance.operation = json.operation.map((x) => CapabilityStatementRestResourceOperation.parse(x));
    }
    return newInstance;
  }

  public static isCapabilityStatementRestResource(input?: unknown): input is CapabilityStatementRestResource {
    const castInput = input as CapabilityStatementRestResource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementRestResource";
  }

  public toJSON(): ICapabilityStatementRestResource {
    const result: ICapabilityStatementRestResource = super.toJSON();

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.profile) {
      result.profile = this.profile.value;
      result._profile = Extension.serializePrimitiveExtension(this.profile);
    }

    if (this.supportedProfile) {
      result.supportedProfile = this.supportedProfile.filter(x => !!x).map(x => x.value) as typeof result.supportedProfile;
      result._supportedProfile = Extension.serializePrimitiveExtensionArray(this.supportedProfile);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    if (this.interaction) {
      result.interaction = this.interaction.map((x) => x.toJSON());
    }

    if (this.versioning) {
      result.versioning = this.versioning.value;
      result._versioning = Extension.serializePrimitiveExtension(this.versioning);
    }

    if (this.readHistory) {
      result.readHistory = this.readHistory.value;
      result._readHistory = Extension.serializePrimitiveExtension(this.readHistory);
    }

    if (this.updateCreate) {
      result.updateCreate = this.updateCreate.value;
      result._updateCreate = Extension.serializePrimitiveExtension(this.updateCreate);
    }

    if (this.conditionalCreate) {
      result.conditionalCreate = this.conditionalCreate.value;
      result._conditionalCreate = Extension.serializePrimitiveExtension(this.conditionalCreate);
    }

    if (this.conditionalRead) {
      result.conditionalRead = this.conditionalRead.value;
      result._conditionalRead = Extension.serializePrimitiveExtension(this.conditionalRead);
    }

    if (this.conditionalUpdate) {
      result.conditionalUpdate = this.conditionalUpdate.value;
      result._conditionalUpdate = Extension.serializePrimitiveExtension(this.conditionalUpdate);
    }

    if (this.conditionalDelete) {
      result.conditionalDelete = this.conditionalDelete.value;
      result._conditionalDelete = Extension.serializePrimitiveExtension(this.conditionalDelete);
    }

    if (this.referencePolicy) {
      result.referencePolicy = this.referencePolicy.filter(x => !!x).map(x => x.value) as typeof result.referencePolicy;
      result._referencePolicy = Extension.serializePrimitiveExtensionArray(this.referencePolicy);
    }

    if (this.searchInclude) {
      result.searchInclude = this.searchInclude.filter(x => !!x).map(x => x.value) as typeof result.searchInclude;
      result._searchInclude = Extension.serializePrimitiveExtensionArray(this.searchInclude);
    }

    if (this.searchRevInclude) {
      result.searchRevInclude = this.searchRevInclude.filter(x => !!x).map(x => x.value) as typeof result.searchRevInclude;
      result._searchRevInclude = Extension.serializePrimitiveExtensionArray(this.searchRevInclude);
    }

    if (this.searchParam) {
      result.searchParam = this.searchParam.map((x) => x.toJSON());
    }

    if (this.operation) {
      result.operation = this.operation.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): CapabilityStatementRestResource {
    return CapabilityStatementRestResource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementRestResource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
