/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  CapabilityStatementRestInteraction,
  CapabilityStatementRestResource,
  CapabilityStatementRestResourceOperation,
  CapabilityStatementRestResourceSearchParam,
  CapabilityStatementRestSecurity,
  Extension,
  ICapabilityStatementRest,
  PrimitiveCanonical,
  PrimitiveMarkdown,
  RestfulCapabilityMode,
} from "../internal";

export class CapabilityStatementRest extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Rest";

  public mode?: RestfulCapabilityMode;

  public documentation?: PrimitiveMarkdown;

  public security?: CapabilityStatementRestSecurity;

  public resource?: Array<CapabilityStatementRestResource>;

  public interaction?: Array<CapabilityStatementRestInteraction>;

  public searchParam?: Array<CapabilityStatementRestResourceSearchParam>;

  public operation?: Array<CapabilityStatementRestResourceOperation>;

  public compartment?: Array<PrimitiveCanonical>;

  public static parse(
    json: ICapabilityStatementRest,
    providedInstance: CapabilityStatementRest = new CapabilityStatementRest()
  ): CapabilityStatementRest {
    const newInstance: CapabilityStatementRest = BackboneElement.parse(json, providedInstance);
  
    if (json.mode !== undefined) {
      newInstance.mode = RestfulCapabilityMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveMarkdown.parsePrimitive(json.documentation, json._documentation);
    }
    if (json.security !== undefined) {
      newInstance.security = CapabilityStatementRestSecurity.parse(json.security);
    }
    if (json.resource !== undefined) {
      newInstance.resource = json.resource.map((x) => CapabilityStatementRestResource.parse(x));
    }
    if (json.interaction !== undefined) {
      newInstance.interaction = json.interaction.map((x) => CapabilityStatementRestInteraction.parse(x));
    }
    if (json.searchParam !== undefined) {
      newInstance.searchParam = json.searchParam.map((x) => CapabilityStatementRestResourceSearchParam.parse(x));
    }
    if (json.operation !== undefined) {
      newInstance.operation = json.operation.map((x) => CapabilityStatementRestResourceOperation.parse(x));
    }
    if (json.compartment !== undefined) {
      newInstance.compartment = json.compartment.map((x, i) => {
        const ext = json._compartment && json._compartment[i];
        return PrimitiveCanonical.parsePrimitive(x, ext);
      });
    }
    return newInstance;
  }

  public static isCapabilityStatementRest(input?: unknown): input is CapabilityStatementRest {
    const castInput = input as CapabilityStatementRest;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementRest";
  }

  public toJSON(): ICapabilityStatementRest {
    const result: ICapabilityStatementRest = super.toJSON();

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    if (this.security) {
      result.security = this.security.toJSON();
    }

    if (this.resource) {
      result.resource = this.resource.map((x) => x.toJSON());
    }

    if (this.interaction) {
      result.interaction = this.interaction.map((x) => x.toJSON());
    }

    if (this.searchParam) {
      result.searchParam = this.searchParam.map((x) => x.toJSON());
    }

    if (this.operation) {
      result.operation = this.operation.map((x) => x.toJSON());
    }

    if (this.compartment) {
      result.compartment = this.compartment.filter(x => !!x).map(x => x.value) as typeof result.compartment;
      result._compartment = Extension.serializePrimitiveExtensionArray(this.compartment);
    }

    return result;
  }

  public clone(): CapabilityStatementRest {
    return CapabilityStatementRest.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementRest";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
