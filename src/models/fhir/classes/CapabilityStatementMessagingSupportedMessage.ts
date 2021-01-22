/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  BackboneElement,
  EventCapabilityMode,
  Extension,
  FhirField,
  ICapabilityStatementMessagingSupportedMessage,
  PrimitiveCanonical,
  FhirType
} from "../internal";

@FhirType("CapabilityStatementMessagingSupportedMessage", "BackboneElement")
export class CapabilityStatementMessagingSupportedMessage extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "CapabilityStatement.Messaging.SupportedMessage";

  static readonly primaryCodePath: string | null = null;

  @FhirField("EventCapabilityMode")
  public mode?: EventCapabilityMode;

  @FhirField("PrimitiveCanonical")
  public definition?: PrimitiveCanonical;

  public static parse(
    json: ICapabilityStatementMessagingSupportedMessage,
    providedInstance: CapabilityStatementMessagingSupportedMessage = new CapabilityStatementMessagingSupportedMessage()
  ): CapabilityStatementMessagingSupportedMessage {
    const newInstance: CapabilityStatementMessagingSupportedMessage = BackboneElement.parse(json, providedInstance);
  
    if (json.mode !== undefined) {
      newInstance.mode = EventCapabilityMode.parsePrimitive(json.mode, json._mode);
    }
    if (json.definition !== undefined) {
      newInstance.definition = PrimitiveCanonical.parsePrimitive(json.definition, json._definition);
    }
    return newInstance;
  }

  public static isCapabilityStatementMessagingSupportedMessage(input?: unknown): input is CapabilityStatementMessagingSupportedMessage {
    const castInput = input as CapabilityStatementMessagingSupportedMessage;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "CapabilityStatementMessagingSupportedMessage";
  }

  public toJSON(): ICapabilityStatementMessagingSupportedMessage {
    const result: ICapabilityStatementMessagingSupportedMessage = super.toJSON();

    if (this.mode) {
      result.mode = this.mode.value;
      result._mode = Extension.serializePrimitiveExtension(this.mode);
    }

    if (this.definition) {
      result.definition = this.definition.value;
      result._definition = Extension.serializePrimitiveExtension(this.definition);
    }

    return result;
  }

  public clone(): CapabilityStatementMessagingSupportedMessage {
    return CapabilityStatementMessagingSupportedMessage.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "CapabilityStatementMessagingSupportedMessage";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
