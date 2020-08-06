/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  CodeableConcept,
  DomainResource,
  Extension,
  GroupCharacteristic,
  GroupMember,
  GroupType,
  Identifier,
  IGroup,
  PrimitiveBoolean,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
} from "../internal";

export class Group extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Group";

  public identifier?: Array<Identifier>;

  public active?: PrimitiveBoolean;

  public type?: GroupType;

  public actual?: PrimitiveBoolean;

  public code?: CodeableConcept;

  public name?: PrimitiveString;

  public quantity?: PrimitiveUnsignedInt;

  public managingEntity?: Reference;

  public characteristic?: Array<GroupCharacteristic>;

  public member?: Array<GroupMember>;

  public static parse(
    json: IGroup,
    providedInstance: Group = new Group()
  ): Group {
    const newInstance: Group = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.active) {
      newInstance.active = PrimitiveBoolean.parsePrimitive(json.active, json._active);
    }
    if (json.type) {
      newInstance.type = GroupType.parsePrimitive(json.type, json._type);
    }
    if (json.actual) {
      newInstance.actual = PrimitiveBoolean.parsePrimitive(json.actual, json._actual);
    }
    if (json.code) {
      newInstance.code = CodeableConcept.parse(json.code);
    }
    if (json.name) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.quantity) {
      newInstance.quantity = PrimitiveUnsignedInt.parsePrimitive(json.quantity, json._quantity);
    }
    if (json.managingEntity) {
      newInstance.managingEntity = Reference.parse(json.managingEntity);
    }
    if (json.characteristic) {
      newInstance.characteristic = json.characteristic.map((x) => GroupCharacteristic.parse(x));
    }
    if (json.member) {
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
  
  public getTypeName(): string {
    return "Group";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
