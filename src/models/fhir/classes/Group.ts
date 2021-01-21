/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  GroupCharacteristic,
  GroupMember,
  GroupType,
  Identifier,
  IGroup,
  PrimitiveBoolean,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
  FhirType
} from "../internal";

@FhirType("Group", "DomainResource")
export class Group extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Group";

  static readonly primaryCodePath: string | null = "code";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("PrimitiveBoolean")
  public active?: PrimitiveBoolean;

  @FhirField("GroupType")
  public type?: GroupType;

  @FhirField("PrimitiveBoolean")
  public actual?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public code?: CodeableConcept;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveUnsignedInt")
  public quantity?: PrimitiveUnsignedInt;

  @FhirField("Reference")
  public managingEntity?: Reference;

  @FhirList("GroupCharacteristic")
  public characteristic?: Array<GroupCharacteristic>;

  @FhirList("GroupMember")
  public member?: Array<GroupMember>;

  get primaryCode(): CodeableConcept | undefined {
    return this?.code;
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.code = primaryCode;
  }

  public static parse(
    json: IGroup,
    providedInstance: Group = new Group()
  ): Group {
    const newInstance: Group = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active !== undefined) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.type !== undefined) {
      newInstance.type = GroupType.parsePrimitive(json.type, json._type);
    }
    if (json.actual !== undefined) {
      newInstance.actual = PrimitiveBoolean.parsePrimitive(json.actual, json._actual);
    }
    if (json.code !== undefined) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.quantity !== undefined) {
      newInstance.quantity = PrimitiveUnsignedInt.parsePrimitive(json.quantity, json._quantity);
    }
    if (json.managingEntity !== undefined) {
      newInstance.managingEntity = Reference.parse(json.managingEntity);
    }
    if (json.characteristic !== undefined) {
      newInstance.characteristic = json.characteristic.map((x) => GroupCharacteristic.parse(x));
    }
    if (json.member !== undefined) {
      newInstance.member = json.member.map((x) => GroupMember.parse(x));
    }
    return newInstance;
  }

  public static isGroup(input?: unknown): input is Group {
    const castInput = input as Group;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Group";
  }

  public toJSON(): IGroup {
    const result: IGroup = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.active) {
      result.active = this.active.value;
      result._active = Extension.serializePrimitiveExtension(this.active);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    if (this.actual) {
      result.actual = this.actual.value;
      result._actual = Extension.serializePrimitiveExtension(this.actual);
    }

    if (this.code) {
      result.code = this.code.toJSON();
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.quantity) {
      result.quantity = this.quantity.value;
      result._quantity = Extension.serializePrimitiveExtension(this.quantity);
    }

    if (this.managingEntity) {
      result.managingEntity = this.managingEntity.toJSON();
    }

    if (this.characteristic) {
      result.characteristic = this.characteristic.map((x) => x.toJSON());
    }

    if (this.member) {
      result.member = this.member.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Group {
    return Group.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Group";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
