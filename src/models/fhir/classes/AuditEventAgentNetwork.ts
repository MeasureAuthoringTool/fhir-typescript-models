/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  AuditEventAgentNetworkType,
  BackboneElement,
  Extension,
  FhirField,
  IAuditEventAgentNetwork,
  PrimitiveString,
  FhirType
} from "../internal";

@FhirType("AuditEventAgentNetwork", "BackboneElement")
export class AuditEventAgentNetwork extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEvent.Agent.Network";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveString")
  public address?: PrimitiveString;

  @FhirField("AuditEventAgentNetworkType")
  public type?: AuditEventAgentNetworkType;

  public static parse(
    json: IAuditEventAgentNetwork,
    providedInstance: AuditEventAgentNetwork = new AuditEventAgentNetwork()
  ): AuditEventAgentNetwork {
    const newInstance: AuditEventAgentNetwork = BackboneElement.parse(json, providedInstance);
  
    if (json.address !== undefined) {
      newInstance.address = PrimitiveString.parsePrimitive(json.address, json._address);
    }
    if (json.type !== undefined) {
      newInstance.type = AuditEventAgentNetworkType.parsePrimitive(json.type, json._type);
    }
    return newInstance;
  }

  public static isAuditEventAgentNetwork(input?: unknown): input is AuditEventAgentNetwork {
    const castInput = input as AuditEventAgentNetwork;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AuditEventAgentNetwork";
  }

  public toJSON(): IAuditEventAgentNetwork {
    const result: IAuditEventAgentNetwork = super.toJSON();

    if (this.address) {
      result.address = this.address.value;
      result._address = Extension.serializePrimitiveExtension(this.address);
    }

    if (this.type) {
      result.type = this.type.value;
      result._type = Extension.serializePrimitiveExtension(this.type);
    }

    return result;
  }

  public clone(): AuditEventAgentNetwork {
    return AuditEventAgentNetwork.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AuditEventAgentNetwork";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
