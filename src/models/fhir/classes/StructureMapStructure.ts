/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  Extension,
  FhirField,
  IStructureMapStructure,
  PrimitiveCanonical,
  PrimitiveString,
  StructureMapModelMode,
  FhirType
} from "../internal";

@FhirType("StructureMapStructure", "BackboneElement")
export class StructureMapStructure extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Structure";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveCanonical")
  public url?: PrimitiveCanonical;

  @FhirField("StructureMapModelMode")
  public mode?: StructureMapModelMode;

  @FhirField("PrimitiveString")
  public alias?: PrimitiveString;

  @FhirField("PrimitiveString")
  public documentation?: PrimitiveString;

  public static parse(
    json: IStructureMapStructure,
    providedInstance: StructureMapStructure = new StructureMapStructure()
  ): StructureMapStructure {
    const newInstance: StructureMapStructure = BackboneElement.parse(json, providedInstance);
  
    if (json.url !== undefined) {
      newInstance.url = PrimitiveCanonical.parsePrimitive(json.url, json._url);
    }
    if (json.mode !== undefined) {
      newInstance.mode = StructureMapModelMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.alias !== undefined) {
      newInstance.alias = PrimitiveString.parsePrimitive(json.alias, json._alias);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveString.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isStructureMapStructure(input?: unknown): input is StructureMapStructure {
    const castInput = input as StructureMapStructure;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapStructure";
  }

  public toJSON(): IStructureMapStructure {
    const result: IStructureMapStructure = super.toJSON();

    if (this.url) {
      result.url = this.url.value;
      result._url = Extension.serializePrimitiveExtension(this.url);
    }

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.alias) {
      result.alias = this.alias.value;
      result._alias = Extension.serializePrimitiveExtension(this.alias);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }

  public clone(): StructureMapStructure {
    return StructureMapStructure.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureMapStructure";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
