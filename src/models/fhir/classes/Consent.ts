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
  FhirChoice,
  FhirField,
  FhirList,
  IConsent,
  Identifier,
  PrimitiveDateTime,
  Reference,
  FhirType
} from "../internal";

@FhirType("Consent", "DomainResource")
export class Consent extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Consent";

  static readonly primaryCodePath: string | null = "category";

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("ConsentState")
  public status?: ConsentState;

  @FhirField("CodeableConcept")
  public scope?: CodeableConcept;

  @FhirList("CodeableConcept")
  public category?: Array<CodeableConcept>;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("PrimitiveDateTime")
  public dateTime?: PrimitiveDateTime;

  @FhirList("Reference")
  public performer?: Array<Reference>;

  @FhirList("Reference")
  public organization?: Array<Reference>;

  @FhirChoice("Attachment", "Reference")
  public source?: Attachment | Reference;

  @FhirList("ConsentPolicy")
  public policy?: Array<ConsentPolicy>;

  @FhirField("CodeableConcept")
  public policyRule?: CodeableConcept;

  @FhirList("ConsentVerification")
  public verification?: Array<ConsentVerification>;

  @FhirField("ConsentProvision")
  public provision?: ConsentProvision;

  get primaryCode(): CodeableConcept | undefined {
    return this?.category?.[0];
  }

  set primaryCode(primaryCode: CodeableConcept | undefined) {
    this.category = primaryCode ? [primaryCode] : [];
  }

  public static parse(
    json: IConsent,
    providedInstance: Consent = new Consent()
  ): Consent {
    const newInstance: Consent = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ConsentState.parsePrimitive(json.status, json._status);
    }
    if (json.scope !== undefined) {
      newInstance.scope = CodeableConcept.parse(json.scope);
    }
    if (json.category !== undefined) {
      newInstance.category = json.category.map((x) => CodeableConcept.parse(x));
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.dateTime !== undefined) {
      newInstance.dateTime = PrimitiveDateTime.parsePrimitive(json.dateTime, json._dateTime);
    }
    if (json.performer !== undefined) {
      newInstance.performer = json.performer.map((x) => Reference.parse(x));
    }
    if (json.organization !== undefined) {
      newInstance.organization = json.organization.map((x) => Reference.parse(x));
    }
    if (json.sourceAttachment !== undefined) {
      newInstance.source = Attachment.parse(json.sourceAttachment);
    }
    if (json.sourceReference !== undefined) {
      newInstance.source = Reference.parse(json.sourceReference);
    }
    if (json.policy !== undefined) {
      newInstance.policy = json.policy.map((x) => ConsentPolicy.parse(x));
    }
    if (json.policyRule !== undefined) {
      newInstance.policyRule = CodeableConcept.parse(json.policyRule);
    }
    if (json.verification !== undefined) {
      newInstance.verification = json.verification.map((x) => ConsentVerification.parse(x));
    }
    if (json.provision !== undefined) {
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

  public clone(): Consent {
    return Consent.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "Consent";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
