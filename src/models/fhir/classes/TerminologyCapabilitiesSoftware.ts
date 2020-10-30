/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  ITerminologyCapabilitiesSoftware,
  PrimitiveString,
  FieldMetadata
} from "../internal";

export class TerminologyCapabilitiesSoftware extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "TerminologyCapabilities.Software";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "name",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "version",
      fieldType: [PrimitiveString],
      isArray: false
    }];
  }

  public name?: PrimitiveString;

  public version?: PrimitiveString;

  public static parse(
    json: ITerminologyCapabilitiesSoftware,
    providedInstance: TerminologyCapabilitiesSoftware = new TerminologyCapabilitiesSoftware()
  ): TerminologyCapabilitiesSoftware {
    const newInstance: TerminologyCapabilitiesSoftware = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.version !== undefined) {
      newInstance.version = PrimitiveString.parsePrimitive(json.version, json._version);
    }
    return newInstance;
  }

  public static isTerminologyCapabilitiesSoftware(input?: unknown): input is TerminologyCapabilitiesSoftware {
    const castInput = input as TerminologyCapabilitiesSoftware;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "TerminologyCapabilitiesSoftware";
  }

  public toJSON(): ITerminologyCapabilitiesSoftware {
    const result: ITerminologyCapabilitiesSoftware = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.version) {
      result.version = this.version.value;
      result._version = Extension.serializePrimitiveExtension(this.version);
    }

    return result;
  }

  public clone(): TerminologyCapabilitiesSoftware {
    return TerminologyCapabilitiesSoftware.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "TerminologyCapabilitiesSoftware";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
