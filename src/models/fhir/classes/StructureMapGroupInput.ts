/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IStructureMapGroupInput,
  PrimitiveId,
  PrimitiveString,
  StructureMapInputMode,
} from "../internal";

export class StructureMapGroupInput extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group.Input";

  public name?: PrimitiveId;

  public type?: PrimitiveString;

  public mode?: StructureMapInputMode;

  public documentation?: PrimitiveString;

  public static parse(
    json: IStructureMapGroupInput,
    providedInstance: StructureMapGroupInput = new StructureMapGroupInput()
  ): StructureMapGroupInput {
    const newInstance: StructureMapGroupInput = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveId.parsePrimitive(json.name, json._name);
    }
    if (json.type !== undefined) {
      newInstance.type = PrimitiveString.parsePrimitive(json.type, json._type);
    }
    if (json.mode !== undefined) {
      newInstance.mode = StructureMapInputMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveString.parsePrimitive(json.documentation, json._documentation);
    }
    return newInstance;
  }

  public static isStructureMapGroupInput(input?: unknown): input is StructureMapGroupInput {
    const castInput = input as StructureMapGroupInput;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroupInput";
  }

  public toJSON(): IStructureMapGroupInput {
    const result: IStructureMapGroupInput = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    return result;
  }

  public clone(): StructureMapGroupInput {
    return StructureMapGroupInput.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureMapGroupInput";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
