/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Annotation,
  BackboneElement,
  CodeableConcept,
  ContractTermActionSubject,
  Extension,
  FhirChoice,
  FhirField,
  FhirList,
  IContractTermAction,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
  Timing,
  FhirType
} from "../internal";

@FhirType("ContractTermAction", "BackboneElement")
export class ContractTermAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Action";

  static readonly primaryCodePath: string | null = null;

  @FhirField("PrimitiveBoolean")
  public doNotPerform?: PrimitiveBoolean;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirList("ContractTermActionSubject")
  public subject?: Array<ContractTermActionSubject>;

  @FhirField("CodeableConcept")
  public intent?: CodeableConcept;

  @FhirList("PrimitiveString")
  public linkId?: Array<PrimitiveString>;

  @FhirField("CodeableConcept")
  public status?: CodeableConcept;

  @FhirField("Reference")
  public context?: Reference;

  @FhirList("PrimitiveString")
  public contextLinkId?: Array<PrimitiveString>;

  @FhirChoice("PrimitiveDateTime", "Period", "Timing")
  public occurrence?: PrimitiveDateTime | Period | Timing;

  @FhirList("Reference")
  public requester?: Array<Reference>;

  @FhirList("PrimitiveString")
  public requesterLinkId?: Array<PrimitiveString>;

  @FhirList("CodeableConcept")
  public performerType?: Array<CodeableConcept>;

  @FhirField("CodeableConcept")
  public performerRole?: CodeableConcept;

  @FhirField("Reference")
  public performer?: Reference;

  @FhirList("PrimitiveString")
  public performerLinkId?: Array<PrimitiveString>;

  @FhirList("CodeableConcept")
  public reasonCode?: Array<CodeableConcept>;

  @FhirList("Reference")
  public reasonReference?: Array<Reference>;

  @FhirList("PrimitiveString")
  public reason?: Array<PrimitiveString>;

  @FhirList("PrimitiveString")
  public reasonLinkId?: Array<PrimitiveString>;

  @FhirList("Annotation")
  public note?: Array<Annotation>;

  @FhirList("PrimitiveUnsignedInt")
  public securityLabelNumber?: Array<PrimitiveUnsignedInt>;

  public static parse(
    json: IContractTermAction,
    providedInstance: ContractTermAction = new ContractTermAction()
  ): ContractTermAction {
    const newInstance: ContractTermAction = BackboneElement.parse(json, providedInstance);
  
    if (json.doNotPerform !== undefined) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subject !== undefined) {
      newInstance.subject = json.subject.map((x) => ContractTermActionSubject.parse(x));
    }
    if (json.intent !== undefined) {
      newInstance.intent = CodeableConcept.parse(json.intent);
    }
    if (json.linkId !== undefined) {
      newInstance.linkId = json.linkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._linkId?.[i]));
    }
    if (json.status !== undefined) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.context !== undefined) {
      newInstance.context = Reference.parse(json.context);
    }
    if (json.contextLinkId !== undefined) {
      newInstance.contextLinkId = json.contextLinkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._contextLinkId?.[i]));
    }
    if (json.occurrenceDateTime !== undefined) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod !== undefined) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.occurrenceTiming !== undefined) {
      newInstance.occurrence = Timing.parse(json.occurrenceTiming);
    }
    if (json.requester !== undefined) {
      newInstance.requester = json.requester.map((x) => Reference.parse(x));
    }
    if (json.requesterLinkId !== undefined) {
      newInstance.requesterLinkId = json.requesterLinkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._requesterLinkId?.[i]));
    }
    if (json.performerType !== undefined) {
      newInstance.performerType = json.performerType.map((x) => CodeableConcept.parse(x));
    }
    if (json.performerRole !== undefined) {
      newInstance.performerRole = CodeableConcept.parse(json.performerRole);
    }
    if (json.performer !== undefined) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.performerLinkId !== undefined) {
      newInstance.performerLinkId = json.performerLinkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._performerLinkId?.[i]));
    }
    if (json.reasonCode !== undefined) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference !== undefined) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.reason !== undefined) {
      newInstance.reason = json.reason.map((x, i) => PrimitiveString.parsePrimitive(x, json._reason?.[i]));
    }
    if (json.reasonLinkId !== undefined) {
      newInstance.reasonLinkId = json.reasonLinkId.map((x, i) => PrimitiveString.parsePrimitive(x, json._reasonLinkId?.[i]));
    }
    if (json.note !== undefined) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.securityLabelNumber !== undefined) {
      newInstance.securityLabelNumber = json.securityLabelNumber.map((x, i) => PrimitiveUnsignedInt.parsePrimitive(x, json._securityLabelNumber?.[i]));
    }
    return newInstance;
  }

  public static isContractTermAction(input?: unknown): input is ContractTermAction {
    const castInput = input as ContractTermAction;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ContractTermAction";
  }

  public toJSON(): IContractTermAction {
    const result: IContractTermAction = super.toJSON();

    if (this.doNotPerform) {
      result.doNotPerform = this.doNotPerform.value;
      result._doNotPerform = Extension.serializePrimitiveExtension(this.doNotPerform);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subject) {
      result.subject = this.subject.map((x) => x.toJSON());
    }

    if (this.intent) {
      result.intent = this.intent.toJSON();
    }

    if (this.linkId) {
      result.linkId = this.linkId.filter(x => !!x).map(x => x.value) as typeof result.linkId;
      result._linkId = Extension.serializePrimitiveExtensionArray(this.linkId);
    }

    if (this.status) {
      result.status = this.status.toJSON();
    }

    if (this.context) {
      result.context = this.context.toJSON();
    }

    if (this.contextLinkId) {
      result.contextLinkId = this.contextLinkId.filter(x => !!x).map(x => x.value) as typeof result.contextLinkId;
      result._contextLinkId = Extension.serializePrimitiveExtensionArray(this.contextLinkId);
    }

    if (this.occurrence && PrimitiveDateTime.isPrimitiveDateTime(this.occurrence)) {
      result.occurrenceDateTime = this.occurrence.value;
      result._occurrenceDateTime = Extension.serializePrimitiveExtension(this.occurrence);
    }

    if (this.occurrence && Period.isPeriod(this.occurrence)) {
      result.occurrencePeriod = this.occurrence.toJSON();
    }

    if (this.occurrence && Timing.isTiming(this.occurrence)) {
      result.occurrenceTiming = this.occurrence.toJSON();
    }

    if (this.requester) {
      result.requester = this.requester.map((x) => x.toJSON());
    }

    if (this.requesterLinkId) {
      result.requesterLinkId = this.requesterLinkId.filter(x => !!x).map(x => x.value) as typeof result.requesterLinkId;
      result._requesterLinkId = Extension.serializePrimitiveExtensionArray(this.requesterLinkId);
    }

    if (this.performerType) {
      result.performerType = this.performerType.map((x) => x.toJSON());
    }

    if (this.performerRole) {
      result.performerRole = this.performerRole.toJSON();
    }

    if (this.performer) {
      result.performer = this.performer.toJSON();
    }

    if (this.performerLinkId) {
      result.performerLinkId = this.performerLinkId.filter(x => !!x).map(x => x.value) as typeof result.performerLinkId;
      result._performerLinkId = Extension.serializePrimitiveExtensionArray(this.performerLinkId);
    }

    if (this.reasonCode) {
      result.reasonCode = this.reasonCode.map((x) => x.toJSON());
    }

    if (this.reasonReference) {
      result.reasonReference = this.reasonReference.map((x) => x.toJSON());
    }

    if (this.reason) {
      result.reason = this.reason.filter(x => !!x).map(x => x.value) as typeof result.reason;
      result._reason = Extension.serializePrimitiveExtensionArray(this.reason);
    }

    if (this.reasonLinkId) {
      result.reasonLinkId = this.reasonLinkId.filter(x => !!x).map(x => x.value) as typeof result.reasonLinkId;
      result._reasonLinkId = Extension.serializePrimitiveExtensionArray(this.reasonLinkId);
    }

    if (this.note) {
      result.note = this.note.map((x) => x.toJSON());
    }

    if (this.securityLabelNumber) {
      result.securityLabelNumber = this.securityLabelNumber.filter(x => !!x).map(x => x.value) as typeof result.securityLabelNumber;
      result._securityLabelNumber = Extension.serializePrimitiveExtensionArray(this.securityLabelNumber);
    }

    return result;
  }

  public clone(): ContractTermAction {
    return ContractTermAction.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ContractTermAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
