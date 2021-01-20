/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  CodeableConcept,
  DomainResource,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IProvenance,
  Period,
  PrimitiveDateTime,
  PrimitiveInstant,
  PrimitiveUri,
  ProvenanceAgent,
  ProvenanceEntity,
  Reference,
  Signature,
  FhirType
} from "../internal";

@FhirType("Provenance", "DomainResource")
export class Provenance extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Provenance";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Reference")
  public target?: Array<Reference>;

  @FhirChoice("Period", "PrimitiveDateTime")
  public occurred?: Period | PrimitiveDateTime;

  @FhirField("PrimitiveInstant")
  public recorded?: PrimitiveInstant;

  @FhirList("PrimitiveUri")
  public policy?: Array<PrimitiveUri>;

  @FhirField("Reference")
  public location?: Reference;

  @FhirList("CodeableConcept")
  public reason?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public activity?: CodeableConcept;

  @FhirList("ProvenanceAgent")
  public agent?: Array<ProvenanceAgent>;

  @FhirList("ProvenanceEntity")
  public entity?: Array<ProvenanceEntity>;

  @FhirList("Signature")
  public signature?: Array<Signature>;

  public static parse(
    json: IProvenance,
    providedInstance: Provenance = new Provenance()
  ): Provenance {
    const newInstance: Provenance = DomainResource.parse(json, providedInstance);
  
    if (json.target !== undefined) {
      newInstance.target = json.target.map((x) => Reference.parse(x));
    }
    if (json.occurredPeriod !== undefined) {
      newInstance.occurred = Period.parse(json.occurredPeriod);
    }
    if (json.occurredDateTime !== undefined) {
      newInstance.occurred = PrimitiveDateTime.parsePrimitive(json.occurredDateTime, json._occurredDateTime);
    }
    if (json.recorded !== undefined) {
      newInstance.recorded = PrimitiveInstant.parsePrimitive(json.recorded, json._recorded);
    }
    if (json.policy !== undefined) {
      newInstance.policy = json.policy.map((x, i) => PrimitiveUri.parsePrimitive(x, json._policy?.[i]));
    }
    if (json.location !== undefined) {
      newInstance.location = Reference.parse(json.location);
    }
    if (json.reason !== undefined) {
      newInstance.reason = json.reason.map((x) => CodeableConcept.parse(x));
    }
    if (json.activity !== undefined) {
      newInstance.activity = CodeableConcept.parse(json.activity);
    }
    if (json.agent !== undefined) {
      newInstance.agent = json.agent.map((x) => ProvenanceAgent.parse(x));
    }
    if (json.entity !== undefined) {
      newInstance.entity = json.entity.map((x) => ProvenanceEntity.parse(x));
    }
    if (json.signature !== undefined) {
      newInstance.signature = json.signature.map((x) => Signature.parse(x));
    }
    return newInstance;
  }

  public static isProvenance(input?: unknown): input is Provenance {
    const castInput = input as Provenance;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Provenance";
  }

  public toJSON(): IProvenance {
    const result: IProvenance = super.toJSON();

    if (this.target) {
      result.target = this.target.map((x) => x.toJSON());
    }

    if (this.occurred && Period.isPeriod(this.occurred)) {
      result.occurredPeriod = this.occurred.toJSON();
    }

    if (this.occurred && PrimitiveDateTime.isPrimitiveDateTime(this.occurred)) {
      result.occurredDateTime = this.occurred.value;
      result._occurredDateTime = Extension.serializePrimitiveExtension(this.occurred);
    }

    if (this.recorded) {
      result.recorded = this.recorded.value;
      result._recorded = Extension.serializePrimitiveExtension(this.recorded);
    }

    if (this.policy) {
      result.policy = this.policy.filter(x => !!x).map(x => x.value) as typeof result.policy;
      result._policy = Extension.serializePrimitiveExtensionArray(this.policy);
    }

    if (this.location) {
      result.location = this.location.toJSON();
    }

    if (this.reason) {
      result.reason = this.reason.map((x) => x.toJSON());
    }

    if (this.activity) {
      result.activity = this.activity.toJSON();
    }

    if (this.agent) {
      result.agent = this.agent.map((x) => x.toJSON());
    }

    if (this.entity) {
      result.entity = this.entity.map((x) => x.toJSON());
    }

    if (this.signature) {
      result.signature = this.signature.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): Provenance {
    return Provenance.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Provenance";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
