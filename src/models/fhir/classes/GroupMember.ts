/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IGroupMember,
  Period,
  PrimitiveBoolean,
  Reference,
} from "../internal";

export class GroupMember extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Group.Member";

  public entity?: Reference;

  public period?: Period;

  public inactive?: PrimitiveBoolean;

  public static parse(
    json: IGroupMember,
    providedInstance: GroupMember = new GroupMember()
  ): GroupMember {
    const newInstance: GroupMember = BackboneElement.parse(json, providedInstance);
  
    if (json.entity !== undefined) {
      newInstance.entity = Reference.parse(json.entity);
    }
    if (json.period !== undefined) {
      newInstance.period = Period.parse(json.period);
    }
    if (json.inactive !== undefined) {
      newInstance.inactive = PrimitiveBoolean.parsePrimitive(json.inactive, json._inactive);
    }
    return newInstance;
  }

  public static isGroupMember(input?: unknown): input is GroupMember {
    const castInput = input as GroupMember;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "GroupMember";
  }

  public toJSON(): IGroupMember {
    const result: IGroupMember = super.toJSON();

    if (this.entity) {
      result.entity = this.entity.toJSON();
    }

    if (this.period) {
      result.period = this.period.toJSON();
    }

    if (this.inactive) {
      result.inactive = this.inactive.value;
      result._inactive = Extension.serializePrimitiveExtension(this.inactive);
    }

    return result;
  }

  public clone(): GroupMember {
    return GroupMember.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "GroupMember";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
