/* eslint-disable import/prefer-default-export, import/no-cycle */
import { 
  Annotation,
  BackboneElement,
  CodeableConcept,
  ContractTermActionSubject,
  Extension,
  IContractTermAction,
  Period,
  PrimitiveBoolean,
  PrimitiveDateTime,
  PrimitiveString,
  PrimitiveUnsignedInt,
  Reference,
  Timing,
} from "../internal";

export class ContractTermAction extends BackboneElement {
  static readonly baseType: string = "FHIR.BackboneElement";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "Contract.Term.Action";

  public doNotPerform?: PrimitiveBoolean;

  public type?: CodeableConcept;

  public subject?: Array<ContractTermActionSubject>;

  public intent?: CodeableConcept;

  public linkId?: Array<PrimitiveString>;

  public status?: CodeableConcept;

  public context?: Reference;

  public contextLinkId?: Array<PrimitiveString>;

  public occurrence?: PrimitiveDateTime | Period | Timing;

  public requester?: Array<Reference>;

  public requesterLinkId?: Array<PrimitiveString>;

  public performerType?: Array<CodeableConcept>;

  public performerRole?: CodeableConcept;

  public performer?: Reference;

  public performerLinkId?: Array<PrimitiveString>;

  public reasonCode?: Array<CodeableConcept>;

  public reasonReference?: Array<Reference>;

  public reason?: Array<PrimitiveString>;

  public reasonLinkId?: Array<PrimitiveString>;

  public note?: Array<Annotation>;

  public securityLabelNumber?: Array<PrimitiveUnsignedInt>;

  public static parse(
    json: IContractTermAction,
    providedInstance: ContractTermAction = new ContractTermAction()
  ): ContractTermAction {
    const newInstance: ContractTermAction = BackboneElement.parse(json, providedInstance);
  
    if (json.doNotPerform) {
      newInstance.doNotPerform = PrimitiveBoolean.parsePrimitive(json.doNotPerform, json._doNotPerform);
    }
    if (json.type) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subject) {
      newInstance.subject = json.subject.map((x) => ContractTermActionSubject.parse(x));
    }
    if (json.intent) {
      newInstance.intent = CodeableConcept.parse(json.intent);
    }
    if (json.linkId) {
      newInstance.linkId = json.linkId.map((x, i) => {
        const ext = json._linkId && json._linkId[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.status) {
      newInstance.status = CodeableConcept.parse(json.status);
    }
    if (json.context) {
      newInstance.context = Reference.parse(json.context);
    }
    if (json.contextLinkId) {
      newInstance.contextLinkId = json.contextLinkId.map((x, i) => {
        const ext = json._contextLinkId && json._contextLinkId[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.occurrenceDateTime) {
      newInstance.occurrence = PrimitiveDateTime.parsePrimitive(json.occurrenceDateTime, json._occurrenceDateTime);
    }
    if (json.occurrencePeriod) {
      newInstance.occurrence = Period.parse(json.occurrencePeriod);
    }
    if (json.occurrenceTiming) {
      newInstance.occurrence = Timing.parse(json.occurrenceTiming);
    }
    if (json.requester) {
      newInstance.requester = json.requester.map((x) => Reference.parse(x));
    }
    if (json.requesterLinkId) {
      newInstance.requesterLinkId = json.requesterLinkId.map((x, i) => {
        const ext = json._requesterLinkId && json._requesterLinkId[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.performerType) {
      newInstance.performerType = json.performerType.map((x) => CodeableConcept.parse(x));
    }
    if (json.performerRole) {
      newInstance.performerRole = CodeableConcept.parse(json.performerRole);
    }
    if (json.performer) {
      newInstance.performer = Reference.parse(json.performer);
    }
    if (json.performerLinkId) {
      newInstance.performerLinkId = json.performerLinkId.map((x, i) => {
        const ext = json._performerLinkId && json._performerLinkId[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.reasonCode) {
      newInstance.reasonCode = json.reasonCode.map((x) => CodeableConcept.parse(x));
    }
    if (json.reasonReference) {
      newInstance.reasonReference = json.reasonReference.map((x) => Reference.parse(x));
    }
    if (json.reason) {
      newInstance.reason = json.reason.map((x, i) => {
        const ext = json._reason && json._reason[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.reasonLinkId) {
      newInstance.reasonLinkId = json.reasonLinkId.map((x, i) => {
        const ext = json._reasonLinkId && json._reasonLinkId[i];
        return PrimitiveString.parsePrimitive(x, ext);
      });
    }
    if (json.note) {
      newInstance.note = json.note.map((x) => Annotation.parse(x));
    }
    if (json.securityLabelNumber) {
      newInstance.securityLabelNumber = json.securityLabelNumber.map((x, i) => {
        const ext = json._securityLabelNumber && json._securityLabelNumber[i];
        return PrimitiveUnsignedInt.parsePrimitive(x, ext);
      });
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
  
  public getTypeName(): string {
    return "ContractTermAction";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
