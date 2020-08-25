/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Attachment,
  CodeableConcept,
  ConsentPolicy,
  ConsentProvision,
  ConsentState,
  ConsentVerification,
  DomainResource,
  Extension,
  IConsent,
  Identifier,
  PrimitiveDateTime,
  Reference,
} from "../internal";

export class Consent extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Consent";

  public identifier?: Array<Identifier>;

  public status?: ConsentState;

  public scope?: CodeableConcept;

  public category?: Array<CodeableConcept>;

  public patient?: Reference;

  public dateTime?: PrimitiveDateTime;

  public performer?: Array<Reference>;

  public organization?: Array<Reference>;

  public source?: Attachment | Reference;

  public policy?: Array<ConsentPolicy>;

  public policyRule?: CodeableConcept;

  public verification?: Array<ConsentVerification>;

  public provision?: ConsentProvision;

  public static parse(
    json: IConsent,
    providedInstance: Consent = new Consent()
  ): Consent {
    const newInstance: Consent = DomainResource.parse(json, providedInstance);
  
    if (json.identifier) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status) {
      newInstance.status = ConsentState.parsePrimitive(json.status, json._status);
    }
    if (json.scope) {
      newInstance.scope = CodeableConcept.parse(json.scope);
    }
    if (json.category) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.patient) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.dateTime) {
      newInstance.dateTime = PrimitiveDateTime.parsePrimitive(json.dateTime, json._dateTime);
    }
    if (json.performer) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.organization) {
      newInstance.organization = json.organization.map((x) => Reference.parse(x));
    }
    if (json.sourceAttachment) {
      newInstance.source = Attachment.parse(json.sourceAttachment);
    }
    if (json.sourceReference) {
      newInstance.source = Reference.parse(json.sourceReference);
    }
    if (json.policy) {
      newInstance.policy = json.policy.map((x) => ConsentPolicy.parse(x));
    }
    if (json.policyRule) {
      newInstance.policyRule = CodeableConcept.parse(json.policyRule);
    }
    if (json.verification) {
      newInstance.verification = json.verification.map((x) => ConsentVerification.parse(x));
    }
    if (json.provision) {
      newInstance.provision = ConsentProvision.parse(json.provision);
    }
    return newInstance;
  }

  public static isConsent(input?: unknown): input is Consent {
    const castInput = input as Consent;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "Consent";
  }

  public toJSON(): IConsent {
    const result: IConsent = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.scope) {
      result.scope = this.scope.toJSON();
    }

    if (this.category) {
      result.category = this.category.map((x) => x.toJSON());
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.dateTime) {
      result.dateTime = this.dateTime.value;
      result._dateTime = Extension.serializePrimitiveExtension(this.dateTime);
    }

    if (this.performer) {
      result.performer = this.performer.map((x) => x.toJSON());
    }

    if (this.organization) {
      result.organization = this.organization.map((x) => x.toJSON());
    }

    if (this.source && Attachment.isAttachment(this.source)) {
      result.sourceAttachment = this.source.toJSON();
    }

    if (this.source && Reference.isReference(this.source)) {
      result.sourceReference = this.source.toJSON();
    }

    if (this.policy) {
      result.policy = this.policy.map((x) => x.toJSON());
    }

    if (this.policyRule) {
      result.policyRule = this.policyRule.toJSON();
    }

    if (this.verification) {
      result.verification = this.verification.map((x) => x.toJSON());
    }

    if (this.provision) {
      result.provision = this.provision.toJSON();
    }

    return result;
  }
  
  public getTypeName(): string {
    return "Consent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
