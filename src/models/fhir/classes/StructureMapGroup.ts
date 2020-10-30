/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IStructureMapGroup,
  PrimitiveId,
  PrimitiveString,
  StructureMapGroupInput,
  StructureMapGroupRule,
  StructureMapGroupTypeMode,
  FieldMetadata
} from "../internal";

export class StructureMapGroup extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "StructureMap.Group";
  
  static readonly primaryCodePath: string | null = null;

  static get fieldInfo(): Array<FieldMetadata> {
    return [...BackboneElement.fieldInfo, {
      fieldName: "name",
      fieldType: [PrimitiveId],
      isArray: false
    }, {
      fieldName: "extends",
      fieldType: [PrimitiveId],
      isArray: false
    }, {
      fieldName: "typeMode",
      fieldType: [StructureMapGroupTypeMode],
      isArray: false
    }, {
      fieldName: "documentation",
      fieldType: [PrimitiveString],
      isArray: false
    }, {
      fieldName: "input",
      fieldType: [StructureMapGroupInput],
      isArray: true
    }, {
      fieldName: "rule",
      fieldType: [StructureMapGroupRule],
      isArray: true
    }];
  }

  public name?: PrimitiveId;

  public extends?: PrimitiveId;

  public typeMode?: StructureMapGroupTypeMode;

  public documentation?: PrimitiveString;

  public input?: Array<StructureMapGroupInput>;

  public rule?: Array<StructureMapGroupRule>;

  public static parse(
    json: IStructureMapGroup,
    providedInstance: StructureMapGroup = new StructureMapGroup()
  ): StructureMapGroup {
    const newInstance: StructureMapGroup = BackboneElement.parse(json, providedInstance);
  
    if (json.name !== undefined) {
      newInstance.name = PrimitiveId.parsePrimitive(json.name, json._name);
    }
    if (json.extends !== undefined) {
      newInstance.extends = PrimitiveId.parsePrimitive(json.extends, json._extends);
    }
    if (json.typeMode !== undefined) {
      newInstance.typeMode = StructureMapGroupTypeMode.parsePrimitive(json.typeMode, json._typeMode);
    }
    if (json.documentation !== undefined) {
      newInstance.documentation = PrimitiveString.parsePrimitive(json.documentation, json._documentation);
    }
    if (json.input !== undefined) {
      newInstance.input = json.input.map((x) => StructureMapGroupInput.parse(x));
    }
    if (json.rule !== undefined) {
      newInstance.rule = json.rule.map((x) => StructureMapGroupRule.parse(x));
    }
    return newInstance;
  }

  public static isStructureMapGroup(input?: unknown): input is StructureMapGroup {
    const castInput = input as StructureMapGroup;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "StructureMapGroup";
  }

  public toJSON(): IStructureMapGroup {
    const result: IStructureMapGroup = super.toJSON();

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.extends) {
      result.extends = this.extends.value;
      result._extends = Extension.serializePrimitiveExtension(this.extends);
    }

    if (this.typeMode) {
      result.typeMode = this.typeMode.value;
      result._typeMode = Extension.serializePrimitiveExtension(this.typeMode);
    }

    if (this.documentation) {
      result.documentation = this.documentation.value;
      result._documentation = Extension.serializePrimitiveExtension(this.documentation);
    }

    if (this.input) {
      result.input = this.input.map((x) => x.toJSON());
    }

    if (this.rule) {
      result.rule = this.rule.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): StructureMapGroup {
    return StructureMapGroup.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "StructureMapGroup";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
