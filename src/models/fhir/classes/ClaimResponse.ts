/* eslint-disable import/prefer-default-export, import/no-cycle */
import {
  Attachment,
  ClaimResponseAddItem,
  ClaimResponseError,
  ClaimResponseInsurance,
  ClaimResponseItem,
  ClaimResponseItemAdjudication,
  ClaimResponsePayment,
  ClaimResponseProcessNote,
  ClaimResponseStatus,
  ClaimResponseTotal,
  CodeableConcept,
  DomainResource,
  Extension,
  FhirField,
  FhirList,
  IClaimResponse,
  Identifier,
  Period,
  PrimitiveDateTime,
  PrimitiveString,
  Reference,
  RemittanceOutcome,
  Use,
  FhirType
} from "../internal";

@FhirType("ClaimResponse", "DomainResource")
export class ClaimResponse extends DomainResource {
  static readonly baseType: string = "FHIR.DomainResource";

  static readonly namespace: string = "FHIR";

  static readonly typeName: string = "ClaimResponse";

  static readonly primaryCodePath: string | null = null;

  @FhirList("Identifier")
  public identifier?: Array<Identifier>;

  @FhirField("ClaimResponseStatus")
  public status?: ClaimResponseStatus;

  @FhirField("CodeableConcept")
  public type?: CodeableConcept;

  @FhirField("CodeableConcept")
  public subType?: CodeableConcept;

  @FhirField("Use")
  public use?: Use;

  @FhirField("Reference")
  public patient?: Reference;

  @FhirField("PrimitiveDateTime")
  public created?: PrimitiveDateTime;

  @FhirField("Reference")
  public insurer?: Reference;

  @FhirField("Reference")
  public requestor?: Reference;

  @FhirField("Reference")
  public request?: Reference;

  @FhirField("RemittanceOutcome")
  public outcome?: RemittanceOutcome;

  @FhirField("PrimitiveString")
  public disposition?: PrimitiveString;

  @FhirField("PrimitiveString")
  public preAuthRef?: PrimitiveString;

  @FhirField("Period")
  public preAuthPeriod?: Period;

  @FhirField("CodeableConcept")
  public payeeType?: CodeableConcept;

  @FhirList("ClaimResponseItem")
  public item?: Array<ClaimResponseItem>;

  @FhirList("ClaimResponseAddItem")
  public addItem?: Array<ClaimResponseAddItem>;

  @FhirList("ClaimResponseItemAdjudication")
  public adjudication?: Array<ClaimResponseItemAdjudication>;

  @FhirList("ClaimResponseTotal")
  public total?: Array<ClaimResponseTotal>;

  @FhirField("ClaimResponsePayment")
  public payment?: ClaimResponsePayment;

  @FhirField("CodeableConcept")
  public fundsReserve?: CodeableConcept;

  @FhirField("CodeableConcept")
  public formCode?: CodeableConcept;

  @FhirField("Attachment")
  public form?: Attachment;

  @FhirList("ClaimResponseProcessNote")
  public processNote?: Array<ClaimResponseProcessNote>;

  @FhirList("Reference")
  public communicationRequest?: Array<Reference>;

  @FhirList("ClaimResponseInsurance")
  public insurance?: Array<ClaimResponseInsurance>;

  @FhirList("ClaimResponseError")
  public error?: Array<ClaimResponseError>;

  public static parse(
    json: IClaimResponse,
    providedInstance: ClaimResponse = new ClaimResponse()
  ): ClaimResponse {
    const newInstance: ClaimResponse = DomainResource.parse(json, providedInstance);
  
    if (json.identifier !== undefined) {
      newInstance.identifier = json.identifier.map((x) => Identifier.parse(x));
    }
    if (json.status !== undefined) {
      newInstance.status = ClaimResponseStatus.parsePrimitive(json.status, json._status);
    }
    if (json.type !== undefined) {
      newInstance.type = CodeableConcept.parse(json.type);
    }
    if (json.subType !== undefined) {
      newInstance.subType = CodeableConcept.parse(json.subType);
    }
    if (json.use !== undefined) {
      newInstance.use = Use.parsePrimitive(json.use, json._use);
    }
    if (json.patient !== undefined) {
      newInstance.patient = Reference.parse(json.patient);
    }
    if (json.created !== undefined) {
      newInstance.created = PrimitiveDateTime.parsePrimitive(json.created, json._created);
    }
    if (json.insurer !== undefined) {
      newInstance.insurer = Reference.parse(json.insurer);
    }
    if (json.requestor !== undefined) {
      newInstance.requestor = Reference.parse(json.requestor);
    }
    if (json.request !== undefined) {
      newInstance.request = Reference.parse(json.request);
    }
    if (json.outcome !== undefined) {
      newInstance.outcome = RemittanceOutcome.parsePrimitive(json.outcome, json._outcome);
    }
    if (json.disposition !== undefined) {
      newInstance.disposition = PrimitiveString.parsePrimitive(json.disposition, json._disposition);
    }
    if (json.preAuthRef !== undefined) {
      newInstance.preAuthRef = PrimitiveString.parsePrimitive(json.preAuthRef, json._preAuthRef);
    }
    if (json.preAuthPeriod !== undefined) {
      newInstance.preAuthPeriod = Period.parse(json.preAuthPeriod);
    }
    if (json.payeeType !== undefined) {
      newInstance.payeeType = CodeableConcept.parse(json.payeeType);
    }
    if (json.item !== undefined) {
      newInstance.item = json.item.map((x) => ClaimResponseItem.parse(x));
    }
    if (json.addItem !== undefined) {
      newInstance.addItem = json.addItem.map((x) => ClaimResponseAddItem.parse(x));
    }
    if (json.adjudication !== undefined) {
      newInstance.adjudication = json.adjudication.map((x) => ClaimResponseItemAdjudication.parse(x));
    }
    if (json.total !== undefined) {
      newInstance.total = json.total.map((x) => ClaimResponseTotal.parse(x));
    }
    if (json.payment !== undefined) {
      newInstance.payment = ClaimResponsePayment.parse(json.payment);
    }
    if (json.fundsReserve !== undefined) {
      newInstance.fundsReserve = CodeableConcept.parse(json.fundsReserve);
    }
    if (json.formCode !== undefined) {
      newInstance.formCode = CodeableConcept.parse(json.formCode);
    }
    if (json.form !== undefined) {
      newInstance.form = Attachment.parse(json.form);
    }
    if (json.processNote !== undefined) {
      newInstance.processNote = json.processNote.map((x) => ClaimResponseProcessNote.parse(x));
    }
    if (json.communicationRequest !== undefined) {
      newInstance.communicationRequest = json.communicationRequest.map((x) => Reference.parse(x));
    }
    if (json.insurance !== undefined) {
      newInstance.insurance = json.insurance.map((x) => ClaimResponseInsurance.parse(x));
    }
    if (json.error !== undefined) {
      newInstance.error = json.error.map((x) => ClaimResponseError.parse(x));
    }
    return newInstance;
  }

  public static isClaimResponse(input?: unknown): input is ClaimResponse {
    const castInput = input as ClaimResponse;
    return !!input && castInput.getTypeName && castInput.getTypeName() === "ClaimResponse";
  }

  public toJSON(): IClaimResponse {
    const result: IClaimResponse = super.toJSON();

    if (this.identifier) {
      result.identifier = this.identifier.map((x) => x.toJSON());
    }

    if (this.status) {
      result.status = this.status.value;
      result._status = Extension.serializePrimitiveExtension(this.status);
    }

    if (this.type) {
      result.type = this.type.toJSON();
    }

    if (this.subType) {
      result.subType = this.subType.toJSON();
    }

    if (this.use) {
      result.use = this.use.value;
      result._use = Extension.serializePrimitiveExtension(this.use);
    }

    if (this.patient) {
      result.patient = this.patient.toJSON();
    }

    if (this.created) {
      result.created = this.created.value;
      result._created = Extension.serializePrimitiveExtension(this.created);
    }

    if (this.insurer) {
      result.insurer = this.insurer.toJSON();
    }

    if (this.requestor) {
      result.requestor = this.requestor.toJSON();
    }

    if (this.request) {
      result.request = this.request.toJSON();
    }

    if (this.outcome) {
      result.outcome = this.outcome.value;
      result._outcome = Extension.serializePrimitiveExtension(this.outcome);
    }

    if (this.disposition) {
      result.disposition = this.disposition.value;
      result._disposition = Extension.serializePrimitiveExtension(this.disposition);
    }

    if (this.preAuthRef) {
      result.preAuthRef = this.preAuthRef.value;
      result._preAuthRef = Extension.serializePrimitiveExtension(this.preAuthRef);
    }

    if (this.preAuthPeriod) {
      result.preAuthPeriod = this.preAuthPeriod.toJSON();
    }

    if (this.payeeType) {
      result.payeeType = this.payeeType.toJSON();
    }

    if (this.item) {
      result.item = this.item.map((x) => x.toJSON());
    }

    if (this.addItem) {
      result.addItem = this.addItem.map((x) => x.toJSON());
    }

    if (this.adjudication) {
      result.adjudication = this.adjudication.map((x) => x.toJSON());
    }

    if (this.total) {
      result.total = this.total.map((x) => x.toJSON());
    }

    if (this.payment) {
      result.payment = this.payment.toJSON();
    }

    if (this.fundsReserve) {
      result.fundsReserve = this.fundsReserve.toJSON();
    }

    if (this.formCode) {
      result.formCode = this.formCode.toJSON();
    }

    if (this.form) {
      result.form = this.form.toJSON();
    }

    if (this.processNote) {
      result.processNote = this.processNote.map((x) => x.toJSON());
    }

    if (this.communicationRequest) {
      result.communicationRequest = this.communicationRequest.map((x) => x.toJSON());
    }

    if (this.insurance) {
      result.insurance = this.insurance.map((x) => x.toJSON());
    }

    if (this.error) {
      result.error = this.error.map((x) => x.toJSON());
    }

    return result;
  }

  public clone(): ClaimResponse {
    return ClaimResponse.parse(this.toJSON());
  }

  public getTypeName(): string {
    return "ClaimResponse";
  }
}
/* eslint-enable import/prefer-default-export, import/no-cycle */
