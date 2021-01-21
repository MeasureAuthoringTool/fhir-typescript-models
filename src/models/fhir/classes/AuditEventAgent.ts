/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  AuditEventAgentNetwork,
  BackboneElement,
  CodeableConcept,
  Coding,
  Extension,
  FhirField,
  FhirList,
  IAuditEventAgent,
  PrimitiveBoolean,
  PrimitiveString,
  PrimitiveUri,
  Reference,
  FhirType
} from "../internal";

@FhirType("AuditEventAgent", "BackboneElement")
export class AuditEventAgent extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "AuditEvent.Agent";

  static readonly primaryCodePath: string | null = null;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("CodeableConcept")
  public role?: Array<CodeableConcept>;

  @FhirField("Reference")
  public who?: Reference;

  @FhirField("PrimitiveString")
  public altId?: PrimitiveString;

  @FhirField("PrimitiveString")
  public name?: PrimitiveString;

  @FhirField("PrimitiveBoolean")
  public requestor?: PrimitiveBoolean;

  @FhirField("Reference")
  public location?: Reference;

  @FhirList("PrimitiveUri")
  public policy?: Array<PrimitiveUri>;

  @FhirField("Coding")
  public media?: Coding;

  @FhirField("AuditEventAgentNetwork")
  public network?: AuditEventAgentNetwork;

  @FhirList("CodeableConcept")
  public purposeOfUse?: Array<CodeableConcept>;

  public static parse(
    json: IAuditEventAgent,
    providedInstance: AuditEventAgent = new AuditEventAgent()
  ): AuditEventAgent {
    const newInstance: AuditEventAgent = BackboneElement.parse(json, providedInstance);
  
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.role !== undefined) {
      newInstance.role = json.role.map((x) => CodeableConcept.parse(x));
    }
    if (json.who !== undefined) {
      newInstance.who = Reference.parse(json.who);
    }
    if (json.altId !== undefined) {
      newInstance.altId = PrimitiveString.parsePrimitive(json.altId, json._altId);
    }
    if (json.name !== undefined) {
      newInstance.name = PrimitiveString.parsePrimitive(json.name, json._name);
    }
    if (json.requestor !== undefined) {
      newInstance.requestor = PrimitiveBoolean.parsePrimitive(json.requestor, json._requestor);
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.policy !== undefined) {
      newInstance.policy = json.policy.map((x, i) => PrimitiveUri.parsePrimitive(x, json._policy?.[i]));
    }
    if (json.media !== undefined) {
      newInstance.media = Coding.parse(json.media);
    }
    if (json.network !== undefined) {
      newInstance.network = AuditEventAgentNetwork.parse(json.network);
    }
    if (json.purposeOfUse !== undefined) {
      newInstance.purposeOfUse = json.purposeOfUse.map((x) => CodeableConcept.parse(x));
    }
    return newInstance;
  }

  public static isAuditEventAgent(input?: unknown): input is AuditEventAgent {
    const castInput = input as AuditEventAgent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "AuditEventAgent";
  }

  public toJSON(): IAuditEventAgent {
    const result: IAuditEventAgent = super.toJSON();

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.role) {
      result.role = this.role.map((x) => x.toJSON());
    }

    if (this.who) {
      result.who = this.who.toJSON();
    }

    if (this.altId) {
      result.altId = this.altId.value;
      result._altId = Extension.serializePrimitiveExtension(this.altId);
    }

    if (this.name) {
      result.name = this.name.value;
      result._name = Extension.serializePrimitiveExtension(this.name);
    }

    if (this.requestor) {
      result.requestor = this.requestor.value;
      result._requestor = Extension.serializePrimitiveExtension(this.requestor);
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.policy) {
      result.policy = this.policy.filter(x => !!x).map(x => x.value) as typeof result.policy;
      result._policy = Extension.serializePrimitiveExtensionArray(this.policy);
    }

    if (this.media) {
      result.media = this.media.toJSON();
    }

    if (this.network) {
      result.network = this.network.toJSON();
    }

    if (this.purposeOfUse) {
      result.purposeOfUse = this.purposeOfUse.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): AuditEventAgent {
    return AuditEventAgent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "AuditEventAgent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
