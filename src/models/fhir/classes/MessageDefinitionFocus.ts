/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  BackboneElement,
  Extension,
  IMessageDefinitionFocus,
  PrimitiveCanonical,
  PrimitiveString,
  PrimitiveUnsignedInt,
  ResourceType,
} from "../internal";

export class MessageDefinitionFocus extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "MessageDefinition.Focus";

  public code?: ResourceType;

  public profile?: PrimitiveCanonical;

  public min?: PrimitiveUnsignedInt;

  public max?: PrimitiveString;

  public static parse(
    json: IMessageDefinitionFocus,
    providedInstance: MessageDefinitionFocus = new MessageDefinitionFocus()
  ): MessageDefinitionFocus {
    const newInstance: MessageDefinitionFocus = BackboneElement.parse(json, providedInstance);
  
    if (json.code) {
      newInstance.code = ResourceType.parsePrimitive(json.code, json._code);
    }
    if (json.profile) {
      newInstance.profile = PrimitiveCanonical.parsePrimitive(json.profile, json._profile);
    }
    if (json.min) {
      newInstance.min = PrimitiveUnsignedInt.parsePrimitive(json.min, json._min);
    }
    if (json.max) {
      newInstance.max = PrimitiveString.parsePrimitive(json.max, json._max);
    }
    return newInstance;
  }

  public static isMessageDefinitionFocus(input?: unknown): input is MessageDefinitionFocus {
    const castInput = input as MessageDefinitionFocus;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "MessageDefinitionFocus";
  }

  public toJSON(): IMessageDefinitionFocus {
    const result: IMessageDefinitionFocus = super.toJSON();

    if (this.code) {
      result.code = this.code.value;
      result._code = Extension.serializePrimitiveExtension(this.code);
    }

    if (this.profile) {
      result.profile = this.profile.value;
      result._profile = Extension.serializePrimitiveExtension(this.profile);
    }

    if (this.min) {
      result.min = this.min.value;
      result._min = Extension.serializePrimitiveExtension(this.min);
    }

    if (this.max) {
      result.max = this.max.value;
      result._max = Extension.serializePrimitiveExtension(this.max);
    }

    return result;
  }
  
  public getTypeName(): string {
    return "MessageDefinitionFocus";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
