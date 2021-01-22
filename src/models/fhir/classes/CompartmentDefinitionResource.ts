/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  FhirList,
  ICompartmentDefinitionResource,
  PrimitiveString,
  ResourceType,
  FhirType
} from "../internal";

@FhirType("CompartmentDefinitionResource", "BackboneElement")
export class CompartmentDefinitionResource extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CompartmentDefinition.Resource";

  static readonly primaryCodePath: string | null = null;

  @FhirField("ResourceType")
  public code?: ResourceType;

  @FhirList("PrimitiveString")
  public param?: Array<PrimitiveString>;

  @FhirField("PrimitiveString")
  public documentation?: PrimitiveString;

  public static parse(
    json: ICompartmentDefinitionResource,
    providedInstance: CompartmentDefinitionResource = new CompartmentDefinitionResource()
  ): CompartmentDefinitionResource {
    const newInstance: CompartmentDefinitionResource = BackboneElement.parse(json, providedInstance);
  
    if (json.code !== undefined) {
      newInstance.code = ResourceType.parsePrimitive(json.code, json._code);
    }
    if (json.param !== undefined) {
      newInstance.param = json.param.map((x, i) => PrimitiveString.parsePrimitive(x, json._param?.[i]));
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveString.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isCompartmentDefinitionResource(input?: unknown): input is CompartmentDefinitionResource {
    const castInput = input as CompartmentDefinitionResource;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CompartmentDefinitionResource";
  }

  public toJSON(): ICompartmentDefinitionResource {
    const result: ICompartmentDefinitionResource = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.param) {
      result.param = this.param.filter(x => !!x).map(x => x.value) as typeof result.param;
      result._param = Extension.serializePrimitiveExtensionArray(this.param);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }

  public clone(): CompartmentDefinitionResource {
    return CompartmentDefinitionResource.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CompartmentDefinitionResource";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
