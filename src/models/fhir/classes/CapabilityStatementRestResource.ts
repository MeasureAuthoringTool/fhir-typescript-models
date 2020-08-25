/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CapabilityStatementRestResourceInteraction,
  CapabilityStatementRestResourceOperation,
  CapabilityStatementRestResourceSearchParam,
  ConditionalDeleteStatus,
  ConditionalReadStatus,
  Extension,
  ICapabilityStatementRestResource,
  PrimitiveBoolean,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  PrimitiveString,
  ReferenceHandlingPolicy,
  ResourceType,
  ResourceVersionPolicy,
} from "../internal";

export class CapabilityStatementRestResource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest.Resource";

  public type?: ResourceType;

  public profile?: PrimitiveCanonical;

  public supportedProfile?: Array<PrimitiveCanonical>;

  public documentation?: PrimitiveMarkdown;

  public interaction?: Array<CapabilityStatementRestResourceInteraction>;

  public versioning?: ResourceVersionPolicy;

  public readHistory?: PrimitiveBoolean;

  public updateCreate?: PrimitiveBoolean;

  public conditionalCreate?: PrimitiveBoolean;

  public conditionalRead?: ConditionalReadStatus;

  public conditionalUpdate?: PrimitiveBoolean;

  public conditionalDelete?: ConditionalDeleteStatus;

  public referencePolicy?: Array<ReferenceHandlingPolicy>;

  public searchInclude?: Array<PrimitiveString>;

  public searchRevInclude?: Array<PrimitiveString>;

  public searchParam?: Array<CapabilityStatementRestResourceSearchParam>;

  public operation?: Array<CapabilityStatementRestResourceOperation>;

  public static parse(
    json: ICapabilityStatementRestResource,
    providedInstance: CapabilityStatementRestResource = new CapabilityStatementRestResource()
  ): CapabilityStatementRestResource {
    const newInstance: CapabilityStatementRestResource = BackboneElement.parse(json, providedInstance);
  
    if (json.type) {
      newInstance.type = ResourceType.parsePrimitive(json.type, json._type);
    }
    if (json.profile) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    if (json.supportedProfile) {
      newInstance.supportedProfile = json.supportedProfile.map((x, i) => {
        const ext = json._supportedProfile && json._supportedProfile[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    if (json.documentation) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    if (json.interaction) {
      newInstance.interaction = json.interaction.map((x) => CapabilityStatementRestResourceInteraction.parse(x));
    }
    if (json.versioning) {
      newInstance.versioning = ResourceVersionPolicy.parsePrimitive(json.versioning, json._versioning);
    }
    if (json.readHistory) {
      newInstance.readHistory = PrimitiveBoolean.parsePrimitive(json.readHistory, json._readHistory);
    }
    if (json.updateCreate) {
      newInstance.updateCreate = PrimitiveBoolean.parsePrimitive(json.updateCreate, json._updateCreate);
    }
    if (json.conditionalCreate) {
      newInstance.conditionalCreate = PrimitiveBoolean.parsePrimitive(json.conditionalCreate, json._conditionalCreate);
    }
    if (json.conditionalRead) {
      newInstance.conditionalRead = ConditionalReadStatus.parsePrimitive(json.conditionalRead, json._conditionalRead);
    }
    if (json.conditionalUpdate) {
      newInstance.conditionalUpdate = PrimitiveBoolean.parsePrimitive(json.conditionalUpdate, json._conditionalUpdate);
    }
    if (json.conditionalDelete) {
      newInstance.conditionalDelete = ConditionalDeleteStatus.parsePrimitive(json.conditionalDelete, json._conditionalDelete);
    }
    if (json.referencePolicy) {
      newInstance.referencePolicy = json.referencePolicy.map((x, i) => {
        const ext = json._referencePolicy && json._referencePolicy[i];
        return ReferenceHandlingPolicy.parsePrimitive(x, ext);
      });
    }
    if (json.searchInclude) {
      newInstance.searchInclude = json.searchInclude.map((x, i) => {
        const ext = json._searchInclude && json._searchInclude[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.searchRevInclude) {
      newInstance.searchRevInclude = json.searchRevInclude.map((x, i) => {
        const ext = json._searchRevInclude && json._searchRevInclude[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.searchParam) {
      newInstance.searchParam = json.searchParam.map((x) => CapabilityStatementRestResourceSearchParam.parse(x));
    }
    if (json.operation) {
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
  
  public getTypeName(): string {
    return "CapabilityStatementRestResource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
